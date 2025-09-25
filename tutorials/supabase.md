# Supabase with Flutter

## Supabase cho Flutter: Hướng dẫn cơ bản

Hướng dẫn này trình bày cách tích hợp Supabase làm **backend** cho ứng dụng Flutter

### 

### 1. Supabase là gì?

Supabase là một **backend-as-a-service (BaaS)** **open-source**. Nó cung cấp các tính năng **backend** cốt lõi mà không cần quản lý máy chủ.

Các thành phần chính của Supabase:

- **PostgreSQL Database:** **Database** quan hệ.
- **Authentication:** Quản lý người dùng.
- **Realtime:** Đồng bộ dữ liệu thời gian thực.
- **Storage:** Lưu trữ tệp.
- **Edge Functions:** Chạy code **backend**.
- **APIs:** Tự động tạo **API** cho **database**.

### 2. Flutter Supabase SDK

Để kết nối ứng dụng `Flutter` với dự án `Supabase`, bạn sẽ sử dụng gói `package` chính thức [supabase_flutter](https://pub.dev/packages/supabase_flutter). `SDK` này hoạt động như cầu nối, cung cấp các hàm `Dart` tiện lợi để tương tác với `backend` `Supabase` của bạn.

**Các Tính năng & Hàm chính:**

- **Khởi tạo (`Supabase.initialize`)**: Đây là bước đầu tiên. Bạn cung cấp `URL` dự án `Supabase` duy nhất và khóa `anon` (`anon key`) để thiết lập kết nối khi ứng dụng `Flutter` của bạn khởi động.
- **Truy cập Client (`Supabase.instance.client`)**: Sau khi khởi tạo, đối tượng `client` có thể truy cập toàn cục này là điểm vào chính của bạn cho tất cả các tương tác với `Supabase`.
- **Thao tác Cơ sở dữ liệu**:
    - `client.from('your_table_name')`: Nhắm mục tiêu đến một bảng cụ thể trong `database` của bạn.
    - `.select('column1, column2')`: Chỉ định cột nào bạn muốn truy xuất. Sử dụng `select()` không có đối số để lấy tất cả các cột.
    - `.insert({...})`: Thêm các hàng mới vào bảng của bạn.
    - `.update({...}).eq('id', value)`: Sửa đổi các hàng hiện có dựa trên một điều kiện (ví dụ: khớp với một `id`).
    - `.delete().eq('id', value)`: Xóa các hàng dựa trên một điều kiện.
    - `.order('column_name', ascending: true/false)`: Sắp xếp kết quả dựa trên một cột.
    - `.limit(count)`: Giới hạn số lượng hàng được trả về.
- **Xác thực (`client.auth`)**: Cung cấp các phương thức để đăng ký người dùng, đăng nhập (`signInWithPassword`, `signInWithOtp`, nhà cung cấp `OAuth`), đăng xuất và quản lý phiên người dùng (mặc dù chúng ta sẽ không sử dụng tính năng này trong hướng dẫn *này*).
- **Thời gian thực (`client.from('your_table').stream(...)`)**: Cho phép bạn đăng ký các thay đổi (`insert`, `update`, `delete`) trong các bảng `database` của mình và phản ứng tức thì trong ứng dụng.
- **Lưu trữ (`client.storage`)**: Các hàm để tải lên, tải xuống và quản lý tệp.

Đối với ví dụ về bảng xếp hạng (`leaderboard`) của chúng ta, chúng ta sẽ chủ yếu sử dụng `initialize`, `client`, `from`, `select`, và `order`.

### **3. Thiết lập Supabase project**

1. **Tạo Dự án:**
    - Truy cập [app.supabase.io](https://app.supabase.io/) và nhấp vào "New project".
    - Điền thông tin chi tiết (tên, mật khẩu `database`, khu vực, gói miễn phí).
2. **Lấy API key:**
    - Điều hướng đến **Project Settings** (biểu tượng bánh răng) > **API**.
    - Sao chép **Project URL** và khóa công khai `anon` (`anon public key`). Giữ chúng cẩn thận.
3. **Tạo Bảng `leaderboard`:**
    - Đi tới **Table Editor** (biểu tượng bảng).
    - Nhấp vào **"New table"**.
    - Tên: `leaderboard`.
    - **⚠️ Tắt RLS (Chỉ dành cho Demo):** Bỏ chọn **"Enable Row Level Security (RLS)"**. Điều này đơn giản hóa việc truy cập dữ liệu cho ví dụ dành cho người mới bắt đầu này. **Hãy nhớ bật và cấu hình RLS cho các ứng dụng thực tế để bảo mật dữ liệu của bạn.**
    - Các cột: Giữ lại `id` và `created_at` mặc định. Thêm cột `name` (kiểu `text`) và `score` (kiểu `int4` hoặc `int8`).
    - Nhấp vào **"Save"**.
4. **Thêm Dữ liệu Mẫu:**
    - Chọn bảng `leaderboard` của bạn.
    - Nhấp vào **"Insert"** > **"Insert row"**. Thêm một vài hàng với tên và điểm số mẫu (ví dụ: "Hero" - 300, "Wizard" - 255, "Rogue" - 280).

### **4. Thiết lập Dự án Flutter**

1. **Tạo Ứng dụng:** `flutter create flutter_supabase_leaderboard` & `cd flutter_supabase_leaderboard`
2. **Thêm Dependency:** Thêm `supabase_flutter: ^2.0.0` (kiểm tra phiên bản hiện tại trên pub.dev) vào tệp `pubspec.yaml` của bạn trong phần `dependencies`.
3. **Cài đặt:** Chạy `flutter pub get` trong `terminal` của bạn.

### 5. Leader board screen

5.1 Initialize supabase client

```dart
import 'package:flutter/material.dart';
import 'package:supabase_flutter/supabase_flutter.dart';

Future<void> main() async {
  WidgetsFlutterBinding.ensureInitialized();

  await Supabase.initialize(
    url: 'YOUR_SUPABASE_URL', // Thay bằng URL Supabase của bạn
    anonKey: 'YOUR_SUPABASE_ANON_KEY', // Thay bằng khóa anon Supabase của bạn
  );
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Supabase Leaderboard',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: const LeaderboardPage(),
    );
  }
}
```

**5.2: Lấy và Hiển thị Dữ liệu**

Tạo **StatefulWidget** `LeaderboardPage` để lấy và hiển thị dữ liệu dùng **FutureBuilder**.

```dart
import 'package:flutter/material.dart';
import 'package:supabase_flutter/supabase_flutter.dart';

class LeaderboardPage extends StatefulWidget {
  const LeaderboardPage({super.key});

  @override
  State<LeaderboardPage> createState() => _LeaderboardPageState();
}

class _LeaderboardPageState extends State<LeaderboardPage> {
  late Future<List<Map<String, dynamic>>> _leaderboardData;

  @override
  void initState() {
    super.initState();
    _leaderboardData = _fetchLeaderboard();
  }

  Future<List<Map<String, dynamic>>> _fetchLeaderboard() async {
    final response = await Supabase.instance.client
        .from('leaderboard')
        .select('name, score')
        .order('score', ascending: false); // Sắp xếp theo điểm giảm dần

    if (response.error != null) {
      throw response.error!;
    }
    return (response.data as List).cast<Map<String, dynamic>>();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Leaderboard'),
      ),
      body: FutureBuilder<List<Map<String, dynamic>>>(
        future: _leaderboardData,
        builder: (context, snapshot) {
          if (snapshot.connectionState == ConnectionState.waiting) {
            return const Center(child: CircularProgressIndicator());
          } else if (snapshot.hasError) {
            return Center(child: Text('Error: ${snapshot.error}'));
          } else if (!snapshot.hasData || snapshot.data!.isEmpty) {
            return const Center(child: Text('No leaderboard data available.'));
          } else {
            final leaderboard = snapshot.data!;
            return ListView.builder(
              itemCount: leaderboard.length,
              itemBuilder: (context, index) {
                final entry = leaderboard[index];
                return ListTile(
                  leading: CircleAvatar(
                    child: Text('${index + 1}'),
                  ),
                  title: Text(entry['name']),
                  trailing: Text('${entry['score']}'),
                );
              },
            );
          }
        },
      ),
    );
  }
}
```

**Giải thích code:**

- `_leaderboardData`: **Future** chứa dữ liệu **leaderboard**.
- `initState`: Gọi `_fetchLeaderboard` khi **widget** khởi tạo.
- `_fetchLeaderboard`: Sử dụng `Supabase.instance.client` để **query** bảng `leaderboard`, chọn `name` và `score`, sắp xếp theo `score` giảm dần. Xử lý lỗi và trả về dữ liệu.
- `build`: Sử dụng **FutureBuilder** để hiển thị dữ liệu.
    - `ConnectionState.waiting`: Hiển thị **CircularProgressIndicator**.
    - `snapshot.hasError`: Hiển thị lỗi.
    - `!snapshot.hasData || snapshot.data!.isEmpty`: Hiển thị "No data".
    - Ngược lại: Hiển thị danh sách bằng **ListView.builder** và **ListTile**.

### 6 Update login screen with supabase

Chạy code của bài trước (HTTP POST - login) sửa code của function login để làm việc với supabase

```dart
import 'package:supabase_flutter/supabase_flutter.dart';

// Hàm xử lý logic đăng nhập và trả về kết quả theo cấu trúc JSON
Future<Map<String, dynamic>> login(String email, String password) async {
  try {
    final AuthResponse response = await Supabase.instance.client.auth.signInWithPassword(
      email: email.trim(),
      password: password.trim(),
    );

    // Kiểm tra nếu người dùng tồn tại trong phản hồi (đăng nhập thành công)
    if (response.user != null) {
      return {
        "success": true,
        "message": "Đăng nhập thành công!",
        // Giả sử 'username' ở đây là email của người dùng.
        // Tùy thuộc vào database schema của bạn, bạn có thể cần fetch profile để lấy username thật.
        "username": response.user!.email ?? "Người dùng",
      };
    } else {
      // Trường hợp đăng nhập không thành công nhưng không ném AuthException (hiếm gặp)
       return {
        "success": false,
        "message": "Đăng nhập thất bại: Thông tin không hợp lệ.",
      };
    }

  } on AuthException catch (e) {
    // Bắt các lỗi cụ thể từ Supabase Authentication
    return {
      "success": false,
      "message": "Lỗi đăng nhập: ${e.message}",
    };
  } catch (e) {
    // Bắt các lỗi chung khác
    return {
      "success": false,
      "message": "Đã xảy ra lỗi: ${e.toString()}",
    };
  }
}

```