---
slug: networking-part1
title: Flutter Networking (Part 1)
sidebar_position: 2
---

# Flutter networking (part 1)

---

## 1. Parse JSON từ local asset bằng FutureBuilder

### Mục tiêu

- Load file JSON từ local asset trong thư mục `assets`.
- Parse dữ liệu thành danh sách to-do.
- Hiển thị danh sách sử dụng Flutter `FutureBuilder`.

### Các bước thực hiện

- **Bước 1: Chuẩn bị file JSON:**
    - Tạo file `todo.json` trong thư mục `assets`.
    - Sao chép nội dung JSON sau vào `todo.json`:
        
        ```json
        [
          {
            "id": 1,
            "task": "Learn Flutter Basics",
            "isDone": true
          },
          {
            "id": 2,
            "task": "Understand Widgets",
            "isDone": true
          },
          {
            "id": 3,
            "task": "Learn about FutureBuilder",
            "isDone": false
          },
          {
            "id": 4,
            "task": "Fetch data from Network",
            "isDone": false
          }
        ]
        
        ```
        
- **Bước 2: Khai báo asset trong `pubspec.yaml`:**
    
    ```yaml
    flutter:
      assets:
        - assets/todo_data.json
    
    ```
    
- 
    
    Giới thiệu nhanh về FutureBuilder:
    
    `FutureBuilder` là một widget giúp bạn xử lý dữ liệu bất đồng bộ trong Flutter. Bạn truyền vào một `Future`, và `FutureBuilder` sẽ tự động:
    
    - Hiển thị trạng thái loading khi đang chờ dữ liệu.
    - Hiển thị lỗi nếu có vấn đề xảy ra.
    - Hiển thị dữ liệu khi `Future` hoàn thành.
    
    Nhờ `FutureBuilder`, bạn không cần tự viết code để quản lý từng trạng thái. Chỉ cần cung cấp `future` và xây dựng UI (thông qua thuộc tính `builder`), Flutter sẽ lo phần còn lại.
    
- **Bước 3: load và parse JSON từ local asset:**

```dart
import 'dart:convert'; // for jsonDecode
import 'package:flutter/material.dart';
import 'package:flutter/services.dart'; // for rootBundle

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Todo App',
      theme: ThemeData(primarySwatch: Colors.blue),
      home: const TodoListScreen(),
    );
  }
}

class TodoListScreen extends StatefulWidget {
  const TodoListScreen({super.key});

  @override
  State<TodoListScreen> createState() => _TodoListScreenState();
}

class _TodoListScreenState extends State<TodoListScreen> {
  late Future<List<TodoItem>> futureTodoList;

  @override
  void initState() {
    super.initState();
    futureTodoList = loadTodoFromAssets();
  }

  // Load JSON from local asset
  Future<List<TodoItem>> loadTodoFromAssets() async {
    // Read file as String
    final jsonString = await rootBundle.loadString('assets/todo.json');
    // Convert JSON String to List
    final List<dynamic> decodedJson = jsonDecode(jsonString) as List<dynamic>;
    // Map each item to TodoItem
    return decodedJson.map((e) => TodoItem.fromJson(e)).toList();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Todo List - From Assets'),
      ),
      body: FutureBuilder<List<TodoItem>>(
        future: futureTodoList,
        builder: (context, snapshot) {
          // Check connection state loading
          if (snapshot.connectionState == ConnectionState.waiting) {
            return const Center(child: CircularProgressIndicator());
            // Check if error
          } else if (snapshot.hasError) {
            return Center(child: Text('Error: ${snapshot.error}'));
          } else {
            // Data is ready
            final todoList = snapshot.data!;
            return ListView.builder(
              itemCount: todoList.length,
              itemBuilder: (context, index) {
                final todo = todoList[index];
                return CheckboxListTile(
                  title: Text(todo.task),
                  value: todo.isDone,
                  onChanged: (newValue) {
                    setState(() {
                      todo.isDone = newValue!;
                    });
                  },
                );
              },
            );
          }
        },
      ),
    );
  }
}

// Simple model class
class TodoItem {
  int id;
  String task;
  bool isDone;

  TodoItem({
    required this.id,
    required this.task,
    required this.isDone,
  });

  factory TodoItem.fromJson(Map<String, dynamic> json) {
    return TodoItem(
      id: json['id'],
      task: json['task'],
      isDone: json['isDone'],
    );
  }
}

```

**Giải thích (What’s happening here):**

- **`rootBundle.loadString('assets/todo_data.json')`:** Đọc file JSON local dưới dạng string (mất thời gian, nên trả về Future).
- **`jsonDecode`:** Chuyển string JSON thành một `List` của Dart. (hoặc có thể trả về Map object)
- **`TodoItem.fromJson`:** create object `TodoItem` từ từng phần tử JSON.
- **`FutureBuilder`:** Lắng nghe quá trình loading dữ liệu bất đồng bộ:
    - Hiển thị tiến trình loading khi chờ (ConnectionState.waiting).
    - Hiển thị lỗi nếu `snapshot.hasError`.
    - Hiển thị ListView dữ liệu khi đã parse xong.
- **`setState(() { ... })`:** Mỗi khi checkbox thay đổi, `setState` cập nhật UI ngay lập tức.

---

## 2. Parse JSON từ network bằng HTTP GET

Phần này thay thế logic load JSON local bằng việc gọi HTTP GET qua package [http](https://pub.dev/packages/http). Các phần khác giữ nguyên.

### Các bước thực hiện

- **Bước 1: Thêm package `http` vào `pubspec.yaml`:**
    
    ```yaml
    dependencies:
      http: ^0.13.0
    
    ```
    
- **Bước 2: Thay thế hàm load JSON:**
Giả sử bạn có endpoint [https://dummyjson.com/c/562b-f00f-4082-9583](https://dummyjson.com/c/562b-f00f-4082-9583) trả về JSON tương tự.
    
    ```dart
    import 'dart:convert';
    import 'package:flutter/material.dart';
    import 'package:http/http.dart' as http; // new import
    
    void main() {
      runApp(const MyApp());
    }
    
    class MyApp extends StatelessWidget {
      const MyApp({Key? key}) : super(key: key);
    
      @override
      Widget build(BuildContext context) {
        return MaterialApp(
          title: 'Todo App',
          theme: ThemeData(primarySwatch: Colors.blue),
          home: const TodoListScreen(),
        );
      }
    }
    
    class TodoListScreen extends StatefulWidget {
      const TodoListScreen({super.key});
    
      @override
      State<TodoListScreen> createState() => _TodoListScreenState();
    }
    
    class _TodoListScreenState extends State<TodoListScreen> {
      late Future<List<TodoItem>> futureTodoList;
    
      @override
      void initState() {
        super.initState();
        futureTodoList = loadTodoFromNetwork();
      }
    
      // Load JSON from network
      Future<List<TodoItem>> loadTodoFromNetwork() async {
        final url = Uri.parse('https://dummyjson.com/c/562b-f00f-4082-9583');
        // Send HTTP GET request
        final response = await http.get(url);
    
        if (response.statusCode == 200) {
          // Decode JSON response
          final List decodedJson = jsonDecode(response.body);
          // Map to model
          return decodedJson.map((e) => TodoItem.fromJson(e)).toList();
        } else {
          throw Exception('Failed to load to-do list');
        }
      }
    
      @override
      Widget build(BuildContext context) {
        return Scaffold(
          appBar: AppBar(title: const Text('Todo List - From Network')),
          body: FutureBuilder<List<TodoItem>>(
            future: futureTodoList,
            builder: (context, snapshot) {
              if (snapshot.connectionState == ConnectionState.waiting) {
                return const Center(child: CircularProgressIndicator());
              } else if (snapshot.hasError) {
                return Center(child: Text('Error: ${snapshot.error}'));
              } else {
                final todoList = snapshot.data!;
                return ListView.builder(
                  itemCount: todoList.length,
                  itemBuilder: (context, index) {
                    final todo = todoList[index];
                    return CheckboxListTile(
                      title: Text(todo.task),
                      value: todo.isDone,
                      onChanged: (newValue) {
                        setState(() {
                          todo.isDone = newValue!;
                        });
                      },
                    );
                  },
                );
              }
            },
          ),
        );
      }
    }
    
    class TodoItem {
      int id;
      String task;
      bool isDone;
    
      TodoItem({
        required this.id,
        required this.task,
        required this.isDone,
      });
    
      factory TodoItem.fromJson(Map<String, dynamic> json) {
        return TodoItem(
          id: json['id'],
          task: json['task'],
          isDone: json['isDone'],
        );
      }
    }
    
    ```
    
    **Giải thích (What’s happening here):**
    
    - **`http.get(url)`:** Gửi request GET đến server để lấy dữ liệu JSON.
    - **`response.statusCode == 200`:** Kiểm tra xem server trả về status code 200 (thành công) hay không.
    - **`jsonDecode(response.body)`:** Parse string JSON từ server thành `List` Dart. (có thể parse thành map object.
    - **`TodoItem.fromJson`:** Dùng factory constructor cũ để chuyển đổi từng phần tử sang object `TodoItem`.
    - **`FutureBuilder`:** Vẫn xử lý ba trạng thái chính (loading, error, success) tương tự như khi parse local JSON.
    - **`setState(() { ... })`:** Update UI khi checkbox thay đổi.

---

## 3. Refactoring

Khi đã hiểu quy trình, bạn có thể refactor code:

- **Tạo service file** riêng (ví dụ: `todo_service.dart`) xử lý load từ local hoặc network.
- **Tách model** `TodoItem` vào file riêng (`todo_item.dart`).
- **Tách widget** để code trong `main.dart` hoặc `todo_list_screen.dart` chỉ tập trung vào UI.

Cách này giúp code gọn gàng hơn, dễ bảo trì khi app phát triển. Tuy nhiên, nếu bạn mới bắt đầu, giữ mọi thứ ở một file vẫn dễ theo dõi hơn.

---