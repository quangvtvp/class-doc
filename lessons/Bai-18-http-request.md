# Bài 18: Gọi API với HTTP trong Flutter

## Mục tiêu bài học

- Hiểu HTTP là gì và cách ứng dụng giao tiếp với server
- Nắm vững 4 phương thức HTTP cơ bản: GET, POST, PATCH, DELETE
- Biết cách sử dụng thư viện `http` trong Flutter
- Thực hiện được 4 thao tác CRUD thông qua API
- Áp dụng kiến thức xây dựng ứng dụng Todo List kết nối server

---

## 1. HTTP là gì?

**HTTP** (HyperText Transfer Protocol) là "ngôn ngữ" mà ứng dụng của bạn dùng để nói chuyện với server (máy chủ) qua Internet.

**Ví dụ thực tế:**

Hãy tưởng tượng bạn đến một nhà hàng:
- **Bạn (App)** → Đưa menu order cho phục vụ → **Bếp (Server)**
- **Bếp (Server)** → Làm món và mang ra → **Bạn (App)**

```
┌─────────────────┐                      ┌─────────────────┐
│                 │  ── Request (Yêu cầu) ──>  │                 │
│   Ứng dụng      │                      │     Server      │
│   (Flutter)     │  <── Response (Phản hồi) ── │   (API)         │
│                 │                      │                 │
└─────────────────┘                      └─────────────────┘
```

### Tại sao cần gọi API?

Khi ứng dụng của bạn cần:
- **Lấy dữ liệu từ Internet**: Tin tức, thời tiết, sản phẩm...
- **Đồng bộ dữ liệu**: Nhiều thiết bị dùng chung dữ liệu
- **Lưu trữ trên server**: Dữ liệu không mất khi xóa app
- **Tương tác với dịch vụ khác**: AI (Gemini), thanh toán, bản đồ...

---

## 2. Các phương thức HTTP cơ bản

HTTP có nhiều phương thức, nhưng chúng ta sẽ học 4 phương thức chính tương ứng với CRUD:

| Phương thức | Ý nghĩa | Ví dụ |
|-------------|---------|-------|
| **GET** | Lấy dữ liệu | Xem danh sách todo |
| **POST** | Tạo dữ liệu mới | Thêm todo mới |
| **PATCH** | Cập nhật một phần | Đánh dấu todo hoàn thành |
| **DELETE** | Xóa dữ liệu | Xóa todo |

**Ghi nhớ:** CRUD = Create (POST), Read (GET), Update (PATCH), Delete (DELETE)

### Cấu trúc một HTTP Request

```
┌─────────────────────────────────────────────────────────┐
│                    HTTP REQUEST                         │
├─────────────────────────────────────────────────────────┤
│ URL: https://api.example.com/todos                      │
│ Method: POST                                            │
│                                                         │
│ Headers (Thông tin bổ sung):                            │
│   Content-Type: application/json                        │
│   app-key: student123                                   │
│                                                         │
│ Body (Dữ liệu gửi đi):                                  │
│   {"title": "Học Flutter", "is_done": false}            │
└─────────────────────────────────────────────────────────┘
```

### Cấu trúc một HTTP Response

```
┌─────────────────────────────────────────────────────────┐
│                    HTTP RESPONSE                        │
├─────────────────────────────────────────────────────────┤
│ Status Code: 200 (Thành công)                           │
│                                                         │
│ Body (Dữ liệu trả về):                                  │
│   {"id": 1, "title": "Học Flutter", "is_done": false}   │
└─────────────────────────────────────────────────────────┘
```

**Các Status Code thường gặp:**
| Code | Ý nghĩa |
|------|---------|
| 200 | OK - Thành công |
| 201 | Created - Tạo mới thành công |
| 400 | Bad Request - Yêu cầu sai |
| 404 | Not Found - Không tìm thấy |
| 500 | Server Error - Lỗi server |

---

## 3. Ôn lại: Cách Gemini Service hoạt động

Chúng ta đã học cách gọi Gemini API trước đây. Hãy ôn lại pattern này:

```dart
import 'dart:convert';
import 'package:http/http.dart' as http;

class GeminiService {
  static Future<String> askGemini(String prompt) async {
    // 1. Tạo URL
    final url = Uri.parse('https://api.gemini.com/v1/generate');

    // 2. Gửi request với http.post
    final response = await http.post(
      url,
      headers: {'Content-Type': 'application/json'},
      body: jsonEncode({'prompt': prompt}),
    );

    // 3. Kiểm tra kết quả
    if (response.statusCode == 200) {
      final data = jsonDecode(response.body);
      return data['text'];
    } else {
      throw Exception('Lỗi: ${response.statusCode}');
    }
  }
}
```

**Quy trình:**
1. **Tạo URL** - Địa chỉ API cần gọi
2. **Gửi Request** - Dùng `http.get`, `http.post`, `http.patch`, hoặc `http.delete`
3. **Xử lý Response** - Kiểm tra `statusCode` và parse JSON

Chúng ta sẽ áp dụng **chính xác pattern này** cho ứng dụng Todo!

---

## 4. Cài đặt thư viện HTTP

### Bước 1: Thêm thư viện vào `pubspec.yaml`

```yaml
dependencies:
  flutter:
    sdk: flutter
  http: ^1.2.0
```

Sau đó chạy lệnh:
```bash
flutter pub get
```

### Bước 2: Import thư viện

```dart
import 'dart:convert';
import 'package:http/http.dart' as http;
```

---

## 5. Xây dựng Todo API Service

### 5.1. Cấu hình API

Tạo file cấu hình để lưu thông tin API:

```dart
// config/api_config.dart
class ApiConfig {
  // URL của Todo API
  static const String baseUrl = 'https://izbvwgyrqnilggqzdnht.supabase.co/rest/v1';
  
  // API Key để xác thực
  static const String apiKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml6YnZ3Z3lycW5pbGdncXpkbmh0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjkyNjI4MTEsImV4cCI6MjA4NDgzODgxMX0.HEBj_6mLEEJhx4PsAf7cxAXW05mgz5t8GeArigXW6lc';
  
  // App key của bạn (đặt tên bất kỳ, ví dụ: tên của bạn)
  static const String appKey = 'student_name_here';
}
```

> **Lưu ý:** Mỗi học viên đặt `appKey` khác nhau (ví dụ: tên của mình) để dữ liệu không bị lẫn với người khác. Ví dụ: `thuannd`, `student01`, `minhpn`...

### 5.2. Tạo Model Todo

```dart
// models/todo.dart
class Todo {
  final int? id;
  final String title;
  final bool isDone;

  Todo({
    this.id,
    required this.title,
    this.isDone = false,
  });

  // Chuyển Todo thành Map để gửi lên server
  Map<String, dynamic> toJson() {
    return {
      'title': title,
      'is_done': isDone,
    };
  }

  // Tạo Todo từ JSON (dữ liệu từ server)
  factory Todo.fromJson(Map<String, dynamic> json) {
    return Todo(
      id: json['id'],
      title: json['title'],
      isDone: json['is_done'] ?? false,
    );
  }
}
```

### 5.3. Tạo Todo API Service

```dart
// services/todo_api_service.dart
import 'dart:convert';
import 'package:http/http.dart' as http;
import '../config/api_config.dart';
import '../models/todo.dart';

class TodoApiService {
  // Headers chung cho mọi request
  static Map<String, String> get _headers => {
    'Content-Type': 'application/json',
    'apikey': ApiConfig.apiKey,
    'Prefer': 'return=representation', // Để server trả về dữ liệu sau khi thêm/sửa
  };

  // GET - Lấy danh sách todo (lọc theo app_key)
  static Future<List<Todo>> getTodos() async {
    // Thêm ?app_key=eq.xxx để lọc theo app_key của mình
    final url = Uri.parse(
      '${ApiConfig.baseUrl}/todos?app_key=eq.${ApiConfig.appKey}&order=created_at.desc'
    );

    final response = await http.get(url, headers: _headers);

    if (response.statusCode == 200) {
      final List<dynamic> jsonList = jsonDecode(response.body);
      return jsonList.map((json) => Todo.fromJson(json)).toList();
    } else {
      throw Exception('Không thể tải danh sách todo');
    }
  }

  // POST - Thêm todo mới
  static Future<Todo> addTodo(String title) async {
    final url = Uri.parse('${ApiConfig.baseUrl}/todos');

    final response = await http.post(
      url,
      headers: _headers,
      body: jsonEncode({
        'title': title,
        'is_done': false,
        'app_key': ApiConfig.appKey, // Gửi app_key trong body
      }),
    );

    if (response.statusCode == 200 || response.statusCode == 201) {
      // Server trả về array, lấy phần tử đầu tiên
      final List<dynamic> result = jsonDecode(response.body);
      return Todo.fromJson(result.first);
    } else {
      throw Exception('Không thể thêm todo');
    }
  }

  // PATCH - Cập nhật trạng thái todo
  static Future<void> updateTodo(int id, bool isDone) async {
    // Sử dụng ?id=eq.xxx để chỉ định record cần update
    final url = Uri.parse('${ApiConfig.baseUrl}/todos?id=eq.$id');

    final response = await http.patch(
      url,
      headers: _headers,
      body: jsonEncode({'is_done': isDone}),
    );

    if (response.statusCode != 200 && response.statusCode != 204) {
      throw Exception('Không thể cập nhật todo');
    }
  }

  // DELETE - Xóa todo
  static Future<void> deleteTodo(int id) async {
    // Sử dụng ?id=eq.xxx để chỉ định record cần xóa
    final url = Uri.parse('${ApiConfig.baseUrl}/todos?id=eq.$id');

    final response = await http.delete(url, headers: _headers);

    if (response.statusCode != 200 && response.statusCode != 204) {
      throw Exception('Không thể xóa todo');
    }
  }
}
```

---

## 6. Giải thích chi tiết từng thao tác

### 6.1. GET - Lấy danh sách

```dart
static Future<List<Todo>> getTodos() async {
  // 1. Tạo URL với query parameters để lọc
  final url = Uri.parse(
    '${ApiConfig.baseUrl}/todos?app_key=eq.${ApiConfig.appKey}&order=created_at.desc'
  );

  // 2. Gửi GET request
  final response = await http.get(url, headers: _headers);

  // 3. Kiểm tra và xử lý kết quả
  if (response.statusCode == 200) {
    // Parse JSON array thành List<Todo>
    final List<dynamic> jsonList = jsonDecode(response.body);
    return jsonList.map((json) => Todo.fromJson(json)).toList();
  } else {
    throw Exception('Lỗi: ${response.statusCode}');
  }
}
```

**Giải thích:**
- `?app_key=eq.xxx` - Lọc chỉ lấy todo của mình (eq = equals)
- `&order=created_at.desc` - Sắp xếp theo thời gian tạo, mới nhất trước
- `http.get()` - Gửi yêu cầu lấy dữ liệu
- `jsonDecode(response.body)` - Chuyển chuỗi JSON thành List/Map
- `.map().toList()` - Chuyển từng phần tử thành Todo object

### 6.2. POST - Thêm mới

```dart
static Future<Todo> addTodo(String title) async {
  final url = Uri.parse('${ApiConfig.baseUrl}/todos');

  final response = await http.post(
    url,
    headers: _headers,
    body: jsonEncode({
      'title': title,
      'is_done': false,
      'app_key': ApiConfig.appKey,
    }),
  );

  if (response.statusCode == 200 || response.statusCode == 201) {
    // Server trả về array, lấy phần tử đầu tiên
    final List<dynamic> result = jsonDecode(response.body);
    return Todo.fromJson(result.first);
  } else {
    throw Exception('Lỗi: ${response.statusCode}');
  }
}
```

**Giải thích:**
- `http.post()` - Gửi yêu cầu tạo mới
- `body: jsonEncode({...})` - Dữ liệu gửi đi (phải encode thành JSON string)
- `app_key` - Gửi kèm để đánh dấu todo của mình
- `Prefer: return=representation` - Header yêu cầu server trả về dữ liệu vừa tạo

### 6.3. PATCH - Cập nhật

```dart
static Future<void> updateTodo(int id, bool isDone) async {
  // Sử dụng query parameter ?id=eq.xxx để chỉ định record
  final url = Uri.parse('${ApiConfig.baseUrl}/todos?id=eq.$id');

  final response = await http.patch(
    url,
    headers: _headers,
    body: jsonEncode({'is_done': isDone}),
  );

  if (response.statusCode != 200 && response.statusCode != 204) {
    throw Exception('Lỗi: ${response.statusCode}');
  }
}
```

**Giải thích:**
- `?id=eq.$id` - Chỉ định todo nào cần update (eq = equals)
- `http.patch()` - Cập nhật một phần (chỉ gửi field cần thay đổi)

### 6.4. DELETE - Xóa

```dart
static Future<void> deleteTodo(int id) async {
  // Sử dụng query parameter ?id=eq.xxx để chỉ định record
  final url = Uri.parse('${ApiConfig.baseUrl}/todos?id=eq.$id');

  final response = await http.delete(url, headers: _headers);

  if (response.statusCode != 200 && response.statusCode != 204) {
    throw Exception('Lỗi: ${response.statusCode}');
  }
}
```

**Giải thích:**
- `http.delete()` - Xóa dữ liệu
- `?id=eq.$id` - Chỉ định record cần xóa

---

## 7. Xây dựng giao diện Todo App

### 7.1. Màn hình Todo List

```dart
// screens/todo_screen.dart
import 'package:flutter/material.dart';
import '../models/todo.dart';
import '../services/todo_api_service.dart';

class TodoScreen extends StatefulWidget {
  const TodoScreen({super.key});

  @override
  State<TodoScreen> createState() => _TodoScreenState();
}

class _TodoScreenState extends State<TodoScreen> {
  final TextEditingController _controller = TextEditingController();
  List<Todo> _todos = [];
  bool _isLoading = true;

  @override
  void initState() {
    super.initState();
    _loadTodos();
  }

  // Tải danh sách từ server
  Future<void> _loadTodos() async {
    setState(() => _isLoading = true);
    try {
      final todos = await TodoApiService.getTodos();
      setState(() {
        _todos = todos;
        _isLoading = false;
      });
    } catch (e) {
      setState(() => _isLoading = false);
      _showError('Không thể tải dữ liệu: $e');
    }
  }

  // Thêm todo mới
  Future<void> _addTodo() async {
    if (_controller.text.isEmpty) return;

    try {
      final newTodo = await TodoApiService.addTodo(_controller.text);
      setState(() {
        _todos.add(newTodo);
        _controller.clear();
      });
    } catch (e) {
      _showError('Không thể thêm: $e');
    }
  }

  // Cập nhật trạng thái
  Future<void> _toggleTodo(Todo todo) async {
    try {
      await TodoApiService.updateTodo(todo.id!, !todo.isDone);
      setState(() {
        final index = _todos.indexWhere((t) => t.id == todo.id);
        _todos[index] = Todo(
          id: todo.id,
          title: todo.title,
          isDone: !todo.isDone,
        );
      });
    } catch (e) {
      _showError('Không thể cập nhật: $e');
    }
  }

  // Xóa todo
  Future<void> _deleteTodo(Todo todo) async {
    try {
      await TodoApiService.deleteTodo(todo.id!);
      setState(() {
        _todos.removeWhere((t) => t.id == todo.id);
      });
    } catch (e) {
      _showError('Không thể xóa: $e');
    }
  }

  void _showError(String message) {
    ScaffoldMessenger.of(context).showSnackBar(
      SnackBar(content: Text(message), backgroundColor: Colors.red),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Todo List'),
        actions: [
          IconButton(
            icon: const Icon(Icons.refresh),
            onPressed: _loadTodos,
          ),
        ],
      ),
      body: Column(
        children: [
          // Ô nhập todo
          Padding(
            padding: const EdgeInsets.all(16.0),
            child: TextField(
              controller: _controller,
              decoration: const InputDecoration(
                hintText: 'Nhập công việc...',
                border: OutlineInputBorder(),
              ),
              onSubmitted: (_) => _addTodo(),
            ),
          ),
          // Nút thêm
          ElevatedButton(
            onPressed: _addTodo,
            child: const Text('Thêm'),
          ),
          const SizedBox(height: 16),
          // Danh sách todo
          Expanded(
            child: _isLoading
                ? const Center(child: CircularProgressIndicator())
                : _todos.isEmpty
                    ? const Center(child: Text('Chưa có công việc nào'))
                    : ListView.builder(
                        itemCount: _todos.length,
                        itemBuilder: (context, index) {
                          final todo = _todos[index];
                          return ListTile(
                            leading: Checkbox(
                              value: todo.isDone,
                              onChanged: (_) => _toggleTodo(todo),
                            ),
                            title: Text(
                              todo.title,
                              style: TextStyle(
                                decoration: todo.isDone
                                    ? TextDecoration.lineThrough
                                    : TextDecoration.none,
                              ),
                            ),
                            trailing: IconButton(
                              icon: const Icon(Icons.delete),
                              onPressed: () => _deleteTodo(todo),
                            ),
                          );
                        },
                      ),
          ),
        ],
      ),
    );
  }
}
```

### 7.2. File main.dart

```dart
import 'package:flutter/material.dart';
import 'screens/todo_screen.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Todo App',
      theme: ThemeData(
        primarySwatch: Colors.blue,
        useMaterial3: true,
      ),
      home: const TodoScreen(),
      debugShowCheckedModeBanner: false,
    );
  }
}
```

---

## 8. Xử lý Loading và Error

### 8.1. Hiển thị Loading

```dart
// Trong State
bool _isLoading = true;

// Khi bắt đầu tải
setState(() => _isLoading = true);

// Khi tải xong
setState(() => _isLoading = false);

// Trong build()
if (_isLoading) {
  return const Center(child: CircularProgressIndicator());
}
```

### 8.2. Xử lý Error với try-catch

```dart
Future<void> _loadTodos() async {
  try {
    final todos = await TodoApiService.getTodos();
    setState(() => _todos = todos);
  } catch (e) {
    // Hiển thị thông báo lỗi
    ScaffoldMessenger.of(context).showSnackBar(
      SnackBar(
        content: Text('Lỗi: $e'),
        backgroundColor: Colors.red,
      ),
    );
  }
}
```

---

## 9. So sánh: Gemini Service vs Todo API Service

| Thành phần | Gemini Service | Todo API Service |
|------------|----------------|------------------|
| **URL** | `https://api.gemini.com/...` | `https://your-api.com/todos` |
| **Method** | POST (gửi prompt) | GET, POST, PATCH, DELETE |
| **Headers** | Content-Type, API key | Content-Type, app-key |
| **Body** | Prompt text | Todo data (JSON) |
| **Response** | AI generated text | Todo object(s) |

**Điểm giống nhau:**
- Đều dùng `package:http`
- Đều dùng `async/await`
- Đều dùng `jsonEncode` và `jsonDecode`
- Đều kiểm tra `statusCode`

---

## 10. Bài tập về nhà

### Bài tập 1: Thêm chức năng sửa tiêu đề

Mở rộng ứng dụng Todo:
- Khi nhấn vào tiêu đề todo, hiển thị dialog cho phép sửa
- Gọi API PATCH để cập nhật tiêu đề

<details>
<summary>Nhấn vào đây để xem gợi ý</summary>

```dart
// Thêm vào TodoApiService
static Future<void> updateTodoTitle(int id, String title) async {
  final url = Uri.parse('${ApiConfig.baseUrl}/todos/$id');
  final response = await http.patch(
    url,
    headers: _headers,
    body: jsonEncode({'title': title}),
  );
  if (response.statusCode != 200 && response.statusCode != 204) {
    throw Exception('Không thể cập nhật');
  }
}

// Trong TodoScreen
void _showEditDialog(Todo todo) {
  final controller = TextEditingController(text: todo.title);
  showDialog(
    context: context,
    builder: (context) => AlertDialog(
      title: const Text('Sửa công việc'),
      content: TextField(controller: controller),
      actions: [
        TextButton(
          onPressed: () => Navigator.pop(context),
          child: const Text('Hủy'),
        ),
        ElevatedButton(
          onPressed: () async {
            await TodoApiService.updateTodoTitle(todo.id!, controller.text);
            Navigator.pop(context);
            _loadTodos(); // Tải lại danh sách
          },
          child: const Text('Lưu'),
        ),
      ],
    ),
  );
}
```

</details>

### Bài tập 2: Hiển thị số lượng todo

Thêm thông tin thống kê:
- Tổng số todo
- Số đã hoàn thành
- Số chưa hoàn thành

<details>
<summary>Nhấn vào đây để xem gợi ý</summary>

```dart
// Trong build(), thêm trước ListView
Padding(
  padding: const EdgeInsets.all(16),
  child: Row(
    mainAxisAlignment: MainAxisAlignment.spaceAround,
    children: [
      Text('Tổng: ${_todos.length}'),
      Text('Hoàn thành: ${_todos.where((t) => t.isDone).length}'),
      Text('Còn lại: ${_todos.where((t) => !t.isDone).length}'),
    ],
  ),
),
```

</details>

---

## 11. Tổng kết

Trong bài học này, chúng ta đã học:

| Khái niệm | Mô tả |
|-----------|-------|
| **HTTP** | Giao thức giao tiếp giữa app và server |
| **REST API** | Chuẩn thiết kế API sử dụng HTTP |
| **GET/POST/PATCH/DELETE** | 4 phương thức HTTP cho CRUD |
| **package:http** | Thư viện HTTP cho Flutter |
| **JSON** | Định dạng dữ liệu trao đổi |

**Quy trình gọi API trong Flutter:**

```
1. Thêm thư viện http vào pubspec.yaml
          ↓
2. Tạo Model class (VD: Todo)
          ↓
3. Tạo API Service class
          ↓
4. Implement các hàm: GET, POST, PATCH, DELETE
          ↓
5. Gọi API từ UI với async/await
          ↓
6. Xử lý loading và error
```

**Lưu ý quan trọng:**
- Luôn sử dụng `async/await` khi gọi API
- Kiểm tra `statusCode` trước khi xử lý response
- Dùng `try-catch` để bắt lỗi mạng
- Hiển thị loading khi đang chờ response
- Thông báo lỗi rõ ràng cho người dùng
