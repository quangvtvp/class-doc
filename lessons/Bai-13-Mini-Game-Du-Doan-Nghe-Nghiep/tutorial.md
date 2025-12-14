---
sidebar_position: 2
title: "Hướng dẫn Code: AI Gợi Ý Ngành Học"
description: Từng bước xây dựng ứng dụng AI Gợi Ý Ngành Học
---

# Hướng dẫn Code: AI Gợi Ý Ngành Học

Trong bài này, chúng ta sẽ xây dựng ứng dụng qua 5 phiên bản (version), mỗi version thêm một khái niệm mới. Cách tiếp cận này giúp các em hiểu rõ từng bước trước khi chuyển sang bước tiếp theo.

---

## Bước 0: Chuẩn bị

### Tạo Model dữ liệu

Tạo file `lib/models/member.dart`. Đây là class đại diện cho một người dùng trong ứng dụng.

```dart
class Member {
  final String name;        // Tên người dùng
  final String description; // Đặc điểm
  String? idealJob;         // Kết quả gợi ý từ AI (có thể null)

  Member({
    required this.name,
    required this.description,
    this.idealJob,
  });
}
```

**Giải thích:**
- `final` nghĩa là giá trị không thể thay đổi sau khi khởi tạo
- `String?` nghĩa là giá trị có thể null (chưa có)
- `required` nghĩa là bắt buộc phải truyền vào khi tạo object

---

## Version 1: StatelessWidget - Form tĩnh

**Mục tiêu:** Học cách tạo giao diện cơ bản với TextField và Button.

Tạo file `lib/screens/member_screen_v1.dart`:

```dart
import 'package:flutter/material.dart';

class MemberScreenV1 extends StatelessWidget {
  const MemberScreenV1({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Danh sách thành viên'),
        centerTitle: true,
        backgroundColor: const Color(0xFF7E57C2),
        foregroundColor: Colors.white,
      ),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: [
            // Ô nhập Tên
            const TextField(
              decoration: InputDecoration(
                labelText: 'Tên',
                border: OutlineInputBorder(),
              ),
            ),
            const SizedBox(height: 12),
            
            // Ô nhập Mô tả
            const TextField(
              decoration: InputDecoration(
                labelText: 'Mô tả',
                border: OutlineInputBorder(),
              ),
            ),
            const SizedBox(height: 12),
            
            // Nút bấm
            ElevatedButton(
              onPressed: () {
                // Chưa làm gì cả
              },
              style: ElevatedButton.styleFrom(
                backgroundColor: const Color(0xFF7E57C2),
                foregroundColor: Colors.white,
              ),
              child: const Text('Thêm thành viên'),
            ),
          ],
        ),
      ),
    );
  }
}
```

### Kiến thức Version 1

| Widget | Công dụng |
|--------|-----------|
| `Scaffold` | Khung chính của màn hình, có sẵn AppBar và body |
| `AppBar` | Thanh tiêu đề ở trên cùng |
| `Padding` | Thêm khoảng cách 16px xung quanh nội dung |
| `Column` | Xếp các widget con theo chiều dọc |
| `TextField` | Ô để người dùng nhập văn bản |
| `SizedBox` | Tạo khoảng cách 12px giữa các widget |
| `ElevatedButton` | Nút bấm có nền màu |

**Lưu ý:**
- `crossAxisAlignment: CrossAxisAlignment.stretch` làm cho các widget con giãn hết chiều ngang
- `const` đánh dấu widget không thay đổi, giúp Flutter tối ưu hiệu năng

---

## Version 2: StatelessWidget - Thêm danh sách cứng

**Mục tiêu:** Học cách hiển thị danh sách với for loop, ListTile, và Expanded.

Tạo file `lib/screens/member_screen_v2.dart`:

```dart
import 'package:flutter/material.dart';
import '../models/member.dart';

class MemberScreenV2 extends StatelessWidget {
  const MemberScreenV2({super.key});

  @override
  Widget build(BuildContext context) {
    // Dữ liệu mẫu cứng
    final List<Member> members = [
      Member(name: 'An', description: 'Học sinh chăm chỉ'),
      Member(name: 'Bình', description: 'Giỏi toán'),
      Member(name: 'Chi', description: 'Thích vẽ'),
    ];

    return Scaffold(
      appBar: AppBar(
        title: const Text('Danh sách thành viên'),
        centerTitle: true,
        backgroundColor: const Color(0xFF7E57C2),
        foregroundColor: Colors.white,
      ),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: [
            // Form nhập liệu (giống V1)
            const TextField(
              decoration: InputDecoration(
                labelText: 'Tên',
                border: OutlineInputBorder(),
              ),
            ),
            const SizedBox(height: 12),
            const TextField(
              decoration: InputDecoration(
                labelText: 'Mô tả',
                border: OutlineInputBorder(),
              ),
            ),
            const SizedBox(height: 12),
            ElevatedButton(
              onPressed: () {},
              style: ElevatedButton.styleFrom(
                backgroundColor: const Color(0xFF7E57C2),
                foregroundColor: Colors.white,
              ),
              child: const Text('Thêm thành viên'),
            ),

            const SizedBox(height: 24),

            // Tiêu đề danh sách
            const Text(
              'Danh sách:',
              style: TextStyle(fontSize: 16, fontWeight: FontWeight.bold),
            ),
            const SizedBox(height: 8),

            // Danh sách thành viên
            Expanded(
              child: SingleChildScrollView(
                child: Column(
                  children: [
                    for (final member in members)
                      Card(
                        child: ListTile(
                          leading: CircleAvatar(
                            child: Text(member.name[0].toUpperCase()),
                          ),
                          title: Text(member.name),
                          subtitle: Text(member.description),
                        ),
                      ),
                  ],
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
```

### Kiến thức Version 2

| Widget/Syntax | Công dụng |
|---------------|-----------|
| `Expanded` | Chiếm hết không gian còn lại trong Column |
| `SingleChildScrollView` | Cho phép cuộn khi nội dung dài hơn màn hình |
| `for (... in ...)` | Vòng lặp để tạo widget cho mỗi phần tử trong danh sách |
| `Card` | Thẻ có đổ bóng nhẹ |
| `ListTile` | Widget chuẩn hiển thị 1 dòng thông tin |
| `CircleAvatar` | Hiển thị avatar hình tròn |

**Quan trọng về Expanded:**
- Column có chiều cao vô hạn nếu không giới hạn
- Expanded bảo Flutter: "hãy dùng tất cả chỗ trống còn lại cho widget này"
- Bắt buộc dùng khi có danh sách cuộn bên trong Column

---

## Version 3: StatefulWidget - Danh sách động

**Mục tiêu:** Học cách quản lý trạng thái với StatefulWidget và setState.

Tạo file `lib/screens/member_screen_v3.dart`:

```dart
import 'package:flutter/material.dart';
import '../models/member.dart';

class MemberScreenV3 extends StatefulWidget {
  const MemberScreenV3({super.key});

  @override
  State<MemberScreenV3> createState() => _MemberScreenV3State();
}

class _MemberScreenV3State extends State<MemberScreenV3> {
  // BIẾN TRẠNG THÁI - sẽ thay đổi theo thời gian
  List<Member> _members = [];

  // CONTROLLER - để đọc giá trị từ TextField
  final TextEditingController _nameController = TextEditingController();
  final TextEditingController _descController = TextEditingController();

  // HÀM THÊM THÀNH VIÊN
  void _addMember() {
    final name = _nameController.text.trim();
    final desc = _descController.text.trim();

    // Kiểm tra tên rỗng
    if (name.isEmpty) {
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(content: Text('Vui lòng nhập tên!')),
      );
      return;
    }

    final newMember = Member(
      name: name,
      description: desc.isEmpty ? 'Chưa có mô tả' : desc,
    );

    // GỌI setState ĐỂ CẬP NHẬT GIAO DIỆN
    setState(() {
      _members = [..._members, newMember];
    });

    // Xóa nội dung TextField
    _nameController.clear();
    _descController.clear();
  }

  @override
  void dispose() {
    // Giải phóng controller khi widget bị hủy
    _nameController.dispose();
    _descController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Danh sách thành viên'),
        centerTitle: true,
        backgroundColor: const Color(0xFF7E57C2),
        foregroundColor: Colors.white,
      ),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: [
            // Form với Controller
            TextField(
              controller: _nameController,  // Gắn controller
              decoration: const InputDecoration(
                labelText: 'Tên',
                border: OutlineInputBorder(),
              ),
            ),
            const SizedBox(height: 12),
            TextField(
              controller: _descController,  // Gắn controller
              decoration: const InputDecoration(
                labelText: 'Mô tả',
                border: OutlineInputBorder(),
              ),
            ),
            const SizedBox(height: 12),
            ElevatedButton(
              onPressed: _addMember,  // Gọi hàm khi nhấn
              style: ElevatedButton.styleFrom(
                backgroundColor: const Color(0xFF7E57C2),
                foregroundColor: Colors.white,
              ),
              child: const Text('Thêm thành viên'),
            ),

            const SizedBox(height: 24),

            const Text(
              'Danh sách:',
              style: TextStyle(fontSize: 16, fontWeight: FontWeight.bold),
            ),
            const SizedBox(height: 8),

            // Danh sách động
            Expanded(
              child: _members.isEmpty
                  ? const Center(child: Text('Chưa có thành viên nào'))
                  : SingleChildScrollView(
                      child: Column(
                        children: [
                          for (final member in _members)
                            Card(
                              child: ListTile(
                                leading: CircleAvatar(
                                  child: Text(member.name[0].toUpperCase()),
                                ),
                                title: Text(member.name),
                                subtitle: Text(member.description),
                              ),
                            ),
                        ],
                      ),
                    ),
            ),
          ],
        ),
      ),
    );
  }
}
```

### Kiến thức Version 3

**StatelessWidget vs StatefulWidget:**

| Đặc điểm | StatelessWidget | StatefulWidget |
|----------|-----------------|----------------|
| Trạng thái | Không có | Có (lưu trong State) |
| UI thay đổi | Không | Có (khi gọi setState) |
| Cấu trúc | 1 class | 2 class (Widget + State) |
| Dùng khi | UI tĩnh | UI cần cập nhật |

**Các khái niệm quan trọng:**

| Khái niệm | Giải thích |
|-----------|------------|
| `TextEditingController` | Đọc và quản lý nội dung của TextField |
| `setState(() {...})` | Báo Flutter vẽ lại UI với dữ liệu mới |
| `dispose()` | Được gọi khi widget bị hủy, dùng để giải phóng tài nguyên |
| `[..._members, newMember]` | Tạo danh sách mới = danh sách cũ + phần tử mới |

**Tại sao dùng `[..._members, newMember]` thay vì `_members.add()`?**

Flutter so sánh object để quyết định có vẽ lại không. Nếu dùng `add()`, biến `_members` vẫn trỏ đến cùng một list, Flutter có thể không nhận ra sự thay đổi. Tạo list mới đảm bảo Flutter luôn nhận thấy sự thay đổi.

---

## Version 4: Thêm Loading Modal

**Mục tiêu:** Học cách xử lý bất đồng bộ (async/await) và hiển thị loading.

Thay đổi hàm `_addMember` thành async:

```dart
// Hàm thêm thành viên với loading
Future<void> _addMember() async {
  final name = _nameController.text.trim();
  final desc = _descController.text.trim();

  if (name.isEmpty) {
    ScaffoldMessenger.of(context).showSnackBar(
      const SnackBar(content: Text('Vui lòng nhập tên!')),
    );
    return;
  }

  // HIỂN THỊ LOADING MODAL
  showDialog(
    context: context,
    barrierDismissible: false,  // Không đóng khi nhấn bên ngoài
    builder: (context) {
      return const PopScope(
        canPop: false,  // Không cho phép back
        child: Center(
          child: Card(
            child: Padding(
              padding: EdgeInsets.all(20),
              child: CircularProgressIndicator(),
            ),
          ),
        ),
      );
    },
  );

  // GIẢ LẬP DELAY 3 GIÂY (thay bằng gọi API thực tế)
  await Future.delayed(const Duration(seconds: 3));

  // KIỂM TRA WIDGET CÒN TỒN TẠI KHÔNG
  if (!mounted) return;

  // ĐÓNG LOADING MODAL
  Navigator.of(context).pop();

  final newMember = Member(
    name: name,
    description: desc.isEmpty ? 'Chưa có mô tả' : desc,
  );

  setState(() {
    _members = [..._members, newMember];
  });

  _nameController.clear();
  _descController.clear();
}
```

### Kiến thức Version 4

| Khái niệm | Giải thích |
|-----------|------------|
| `async` | Đánh dấu hàm có thể chờ đợi (bất đồng bộ) |
| `await` | Chờ một Future hoàn thành |
| `Future<void>` | Kiểu trả về cho hàm async không trả về giá trị |
| `showDialog` | Hiển thị một dialog modal |
| `barrierDismissible: false` | Không cho đóng dialog khi nhấn bên ngoài |
| `PopScope(canPop: false)` | Không cho phép nút back đóng dialog |
| `mounted` | Kiểm tra widget còn tồn tại không (tránh lỗi) |
| `Navigator.of(context).pop()` | Đóng dialog hoặc quay lại màn hình trước |

**Tại sao cần kiểm tra `mounted`?**

Khi đang chờ `await`, người dùng có thể thoát khỏi màn hình. Nếu widget đã bị hủy mà ta vẫn dùng `context`, ứng dụng sẽ crash. Kiểm tra `mounted` giúp tránh lỗi này.

---

## Version 5: Tích hợp Gemini AI

**Mục tiêu:** Gọi API thực tế để nhận gợi ý từ AI.

Ở version này, chúng ta sử dụng `GeminiService` đã được chuẩn bị sẵn. Các em chỉ cần gọi hàm như sau:

```dart
import '../services/gemini_service.dart';

// Trong hàm _addMember, thay Future.delayed bằng:
try {
  // Gọi Gemini API
  final suggestion = await GeminiService.suggestMajor(
    name: name,
    description: desc,
  );

  if (!mounted) return;
  Navigator.of(context).pop();  // Đóng loading

  final newMember = Member(
    name: name,
    description: desc,
    idealJob: suggestion,  // Lưu kết quả AI
  );

  setState(() {
    _members = [..._members, newMember];
  });

  _nameController.clear();
  _descController.clear();
} catch (e) {
  // Xử lý lỗi
  if (mounted) {
    Navigator.of(context).pop();
    ScaffoldMessenger.of(context).showSnackBar(
      SnackBar(content: Text('Lỗi: $e')),
    );
  }
}
```

**Hiển thị kết quả trong ListTile:**

```dart
ListTile(
  leading: CircleAvatar(
    backgroundColor: const Color(0xFF7E57C2),
    child: Text(
      member.name[0].toUpperCase(),
      style: const TextStyle(color: Colors.white),
    ),
  ),
  title: Text('${member.name} - ${member.description}'),
  subtitle: Text(
    member.idealJob ?? 'Đang chờ phân tích...',
  ),
),
```

### Kiến thức Version 5

| Khái niệm | Giải thích |
|-----------|------------|
| `try/catch` | Bắt và xử lý lỗi khi gọi API |
| `??` | Toán tử null-coalescing: dùng giá trị bên phải nếu bên trái null |
| `'${...}'` | String interpolation: chèn biến vào chuỗi |

---

## Tổng kết

Chúc mừng các em đã hoàn thành ứng dụng AI Gợi Ý Ngành Học!

**Tóm tắt những gì đã học:**

| Version | Kiến thức |
|---------|-----------|
| V1 | Scaffold, Column, TextField, Button |
| V2 | Expanded, for loop, ListTile, Card |
| V3 | StatefulWidget, setState, TextEditingController |
| V4 | async/await, showDialog, mounted |
| V5 | try/catch, API integration |

**Bài tập về nhà:**

1. Thêm nút "Xóa tất cả" để reset danh sách.
2. Thêm validation: đặc điểm phải có ít nhất 10 ký tự.
3. Thay đổi màu sắc CircleAvatar dựa trên tên (mỗi tên một màu khác nhau).

---

## Bài tập nâng cao: Leaderboard

Tạo một ứng dụng Leaderboard với các yêu cầu sau:

**Yêu cầu:**
- Form nhập liệu gồm 2 trường: Name (tên) và Score (điểm số)
- Hiển thị danh sách người chơi sắp xếp theo điểm giảm dần (cao nhất ở trên)
- Top 3 người đứng đầu hiển thị icon huy chương với màu tương ứng:
  - Hạng 1: Vàng (Colors.amber)
  - Hạng 2: Bạc (Colors.grey)
  - Hạng 3: Đồng (Colors.brown)

