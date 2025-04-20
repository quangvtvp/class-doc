# Networking Part 2: Xây dựng màn hình Login và HTTP POST (Flutter)

_Ảnh minh hoạ giao diện màn hình login app flashcard tiếng Anh_

:::tip
Bài này giúp các em thực hành xây dựng UI login cơ bản, học cách gửi HTTP POST request để đăng nhập, validate dữ liệu, hiển thị thông báo và chuyển màn hình.
:::

---

## 1. Mục tiêu bài học
- Xây dựng giao diện đăng nhập đơn giản cho app Flashcard.
- Gửi HTTP POST request để đăng nhập sử dụng API thực tế.
- Kiểm tra hợp lệ (validate) cho input username và password.
- Hiển thị thông báo (SnackBar) khi đăng nhập thành công/thất bại.
- Chuyển màn hình khi đăng nhập thành công (sang màn hình Welcome).
- Biết cách xử lý logout và quay lại màn hình đăng nhập.

---

## 2. Thiết kế giao diện Login

### Yêu cầu:
- Sử dụng các widget: `Form`, `TextFormField`, `Column`, `Padding`, `ElevatedButton`.
- Có trường nhập username và password.

### Code demo:
```dart
import 'package:flutter/material.dart';

void main() => runApp(MaterialApp(home: LoginScreen()));

class LoginScreen extends StatelessWidget {
  final TextEditingController _usernameController = TextEditingController();
  final TextEditingController _passwordController = TextEditingController();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Flashcard Login')),
      body: Padding(
        padding: const EdgeInsets.all(24.0),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Text('Đăng nhập', style: TextStyle(fontSize: 28, fontWeight: FontWeight.bold)),
            SizedBox(height: 32),
            TextField(
              controller: _usernameController,
              decoration: InputDecoration(labelText: 'Username', border: OutlineInputBorder()),
            ),
            SizedBox(height: 16),
            TextField(
              controller: _passwordController,
              decoration: InputDecoration(labelText: 'Password', border: OutlineInputBorder()),
              obscureText: true,
            ),
            SizedBox(height: 24),
            ElevatedButton(
              onPressed: () {},
              child: Text('Login'),
            ),
          ],
        ),
      ),
    );
  }
}
```

---

## 3. Kiểm tra hợp lệ dữ liệu nhập (Validate Input)

### Yêu cầu:
- Username không được để trống, không chứa dấu cách.
- Password không được để trống, phải dài hơn 5 ký tự.
- Sử dụng `Form`, `TextFormField` với `validator`.

### Giải thích về Form và validation trong Flutter

Trong Flutter, widget `Form` giúp bạn quản lý và xác thực (validate) nhiều trường nhập liệu cùng lúc một cách dễ dàng. Khi bạn đặt các trường `TextFormField` bên trong một `Form`, bạn có thể gán mỗi trường một hàm `validator`. Khi gọi `formKey.currentState!.validate()`, Flutter sẽ tự động chạy tất cả các hàm `validator` của các trường con:

- Nếu tất cả các hàm trả về `null`, dữ liệu hợp lệ.
- Nếu có ít nhất một hàm trả về chuỗi lỗi, Form sẽ hiển thị lỗi đó ngay dưới trường nhập tương ứng.

Điều này giúp kiểm tra nhanh, hiển thị lỗi rõ ràng, không cần tự viết nhiều logic kiểm tra thủ công.

Ví dụ:
- `validator: (value) { if (value == null || value.isEmpty) return 'Vui lòng nhập username'; return null; }`
- Khi nhấn nút đăng nhập, chỉ cần gọi: `if (_formKey.currentState!.validate()) { ... }`

### Code demo:
```dart
import 'package:flutter/material.dart';

void main() => runApp(MaterialApp(home: LoginScreen()));

class LoginScreen extends StatefulWidget {
  @override
  _LoginScreenState createState() => _LoginScreenState();
}

class _LoginScreenState extends State<LoginScreen> {
  final TextEditingController _usernameController = TextEditingController();
  final TextEditingController _passwordController = TextEditingController();
  final _formKey = GlobalKey<FormState>();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Flashcard Login')),
      body: Padding(
        padding: const EdgeInsets.all(24.0),
        child: Form(
          key: _formKey,
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Text('Đăng nhập', style: TextStyle(fontSize: 28, fontWeight: FontWeight.bold)),
              SizedBox(height: 32),
              TextFormField(
                controller: _usernameController,
                decoration: InputDecoration(labelText: 'Username', border: OutlineInputBorder()),
                // Validator kiểm tra username không rỗng và không chứa dấu cách
                validator: (value) {
                  if (value == null || value.isEmpty) {
                    return 'Vui lòng nhập username';
                  }
                  if (value.contains(' ')) {
                    return 'Username không được chứa dấu cách';
                  }
                  return null;
                },
              ),
              SizedBox(height: 16),
              TextFormField(
                controller: _passwordController,
                decoration: InputDecoration(labelText: 'Password', border: OutlineInputBorder()),
                obscureText: true,
                // Validator kiểm tra password không rỗng và dài hơn 5 ký tự
                validator: (value) {
                  if (value == null || value.isEmpty) {
                    return 'Vui lòng nhập password';
                  }
                  if (value.length <= 5) {
                    return 'Password phải lớn hơn 5 ký tự';
                  }
                  return null;
                },
              ),
              SizedBox(height: 24),
              ElevatedButton(
                onPressed: () {
                  // Khi nhấn nút, gọi validate để kiểm tra tất cả các trường
                  if (_formKey.currentState!.validate()) {
                    // Xử lý đăng nhập ở bước tiếp theo
                  }
                },
                child: Text('Login'),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
```

---

## 4. Gửi HTTP POST request để đăng nhập

### Yêu cầu:
- Gửi request POST tới API thực tế.
- Sử dụng package `http`.
- Xử lý kết quả trả về (thành công/thất bại).

### Code demo:
```dart
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';

void main() => runApp(MaterialApp(home: LoginScreen()));

class LoginScreen extends StatefulWidget {
  @override
  _LoginScreenState createState() => _LoginScreenState();
}

class _LoginScreenState extends State<LoginScreen> {
  final TextEditingController _usernameController = TextEditingController();
  final TextEditingController _passwordController = TextEditingController();
  final _formKey = GlobalKey<FormState>();

  // Hàm gửi HTTP POST request để đăng nhập
  Future<Map<String, dynamic>> login(String username, String password) async {
    try {
      final response = await http.post(
        Uri.parse('https://us-central1-ict-app-7d697.cloudfunctions.net/api/login'),
        headers: {'Content-Type': 'application/json'},
        body: jsonEncode({
          'username': username,
          'password': password,
        }),
      );
      if (response.statusCode == 200) {
        // Đăng nhập thành công, trả về dữ liệu từ server
        return jsonDecode(response.body);
      } else {
        // Đăng nhập thất bại, trả về thông báo lỗi từ server
        return jsonDecode(response.body);
      }
    } catch (e) {
      // Lỗi kết nối hoặc lỗi khác
      return {'success': false, 'message': 'Lỗi kết nối hoặc máy chủ: ${e.toString()}'};
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Flashcard Login')),
      body: Padding(
        padding: const EdgeInsets.all(24.0),
        child: Form(
          key: _formKey,
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Text('Đăng nhập', style: TextStyle(fontSize: 28, fontWeight: FontWeight.bold)),
              SizedBox(height: 32),
              TextFormField(
                controller: _usernameController,
                decoration: InputDecoration(labelText: 'Username', border: OutlineInputBorder()),
                validator: (value) {
                  if (value == null || value.isEmpty) {
                    return 'Vui lòng nhập username';
                  }
                  if (value.contains(' ')) {
                    return 'Username không được chứa dấu cách';
                  }
                  return null;
                },
              ),
              SizedBox(height: 16),
              TextFormField(
                controller: _passwordController,
                decoration: InputDecoration(labelText: 'Password', border: OutlineInputBorder()),
                obscureText: true,
                validator: (value) {
                  if (value == null || value.isEmpty) {
                    return 'Vui lòng nhập password';
                  }
                  if (value.length <= 5) {
                    return 'Password phải lớn hơn 5 ký tự';
                  }
                  return null;
                },
              ),
              SizedBox(height: 24),
              ElevatedButton(
                // Khi nhấn nút, gọi validate và gửi request đăng nhập
                onPressed: () async {
                  if (_formKey.currentState!.validate()) {
                    final result = await login(
                      _usernameController.text,
                      _passwordController.text,
                    );
                    print(result); // In ra kết quả để kiểm tra
                  }
                },
                child: Text('Login'),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
```

---

## 5. Hiển thị thông báo cho người dùng

### Yêu cầu:
- Hiển thị thông báo kết quả đăng nhập bằng SnackBar.
- Thành công: màu xanh, thất bại: màu đỏ.

### Code demo:
```dart
// ... (các phần trên giữ nguyên)
ElevatedButton(
  onPressed: () async {
    if (_formKey.currentState!.validate()) {
      final result = await login(
        _usernameController.text,
        _passwordController.text,
      );
      final bool success = result['success'] == true;
      final String message = result['message'] ?? '';
      // Hiển thị SnackBar với màu sắc khác nhau tuỳ theo kết quả
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(
          content: Text(message, style: TextStyle(color: Colors.white)),
          backgroundColor: success ? Colors.green : Colors.red,
        ),
      );
    }
  },
  child: Text('Login'),
),
```

---

## 6. Chuyển màn hình sau khi đăng nhập thành công

### Yêu cầu:
- Nếu đăng nhập thành công, chuyển sang màn hình Welcome.
- Ở màn hình Welcome, có nút Logout để quay lại màn hình Login.

### Code demo:
```dart
// ... (các phần trên giữ nguyên)
ElevatedButton(
  onPressed: () async {
    if (_formKey.currentState!.validate()) {
      final result = await login(
        _usernameController.text,
        _passwordController.text,
      );
      final bool success = result['success'] == true;
      final String message = result['message'] ?? '';
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(
          content: Text(message, style: TextStyle(color: Colors.white)),
          backgroundColor: success ? Colors.green : Colors.red,
        ),
      );
      if (success) {
        // Chờ SnackBar hiển thị xong rồi chuyển màn hình
        Future.delayed(Duration(milliseconds: 600), () {
          Navigator.of(context).pushReplacement(
            MaterialPageRoute(
              builder: (context) => WelcomeScreen(),
            ),
          );
        });
      }
    }
  },
  child: Text('Login'),
);

class WelcomeScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Welcome')),
      body: Center(
        child: ElevatedButton(
          onPressed: () {
            // Khi logout, quay lại màn hình Login
            Navigator.of(context).pushReplacement(
              MaterialPageRoute(builder: (context) => LoginScreen()),
            );
          },
          child: Text('Logout'),
        ),
      ),
    );
  }
}
```

---

## 7. Tổng kết và mở rộng

- Bạn đã biết cách xây dựng UI login, validate dữ liệu, gọi API, hiển thị thông báo và chuyển màn hình trong Flutter.
- Có thể mở rộng thêm hiệu ứng loading, lưu thông tin đăng nhập, hoặc thêm chức năng đăng ký, quên mật khẩu...

Nếu có thắc mắc hoặc muốn mở rộng thêm, hãy hỏi giáo viên hoặc trợ lý AI nhé!
