---
sidebar_position: 1.5
title: "Kiến thức bổ trợ: StatefulWidget"
description: Tìm hiểu chi tiết về StatefulWidget, setState và vòng đời của Widget
---

# Kiến thức bổ trợ: StatefulWidget và Quản lý Trạng thái

Trong bài hướng dẫn chính, chúng ta đã sử dụng `StatefulWidget` để tạo danh sách động. Bài viết này sẽ đi sâu hơn vào lý thuyết và cung cấp thêm các ví dụ để các em nắm vững khái niệm quan trọng này.

## 1. Khái niệm về State (Trạng thái)

**State** (Trạng thái) là những dữ liệu có thể thay đổi trong suốt vòng đời của một Widget.
Ví dụ:
- Số đếm trong ứng dụng Counter.
- Nội dung người dùng đang nhập trong ô TextField.
- Trạng thái checkbox (đã chọn hay chưa).
- Dữ liệu tải về từ Internet.

Khi **State** thay đổi, giao diện (UI) cần được vẽ lại để phản ánh sự thay đổi đó.

## 2. Phân biệt StatelessWidget và StatefulWidget

| Đặc điểm | StatelessWidget | StatefulWidget |
|----------|-----------------|----------------|
| **Định nghĩa** | Widget không có trạng thái thay đổi được (immutable). | Widget có trạng thái thay đổi được (mutable). |
| **Thay đổi UI** | Chỉ thay đổi khi widget cha truyền tham số mới vào. | Có thể tự thay đổi UI nội tại thông qua `setState()`. |
| **Cấu trúc** | Chỉ gồm 1 class kế thừa từ `StatelessWidget`. | Gồm 2 class: 1 kế thừa `StatefulWidget` và 1 kế thừa `State`. |
| **Vòng đời** | Đơn giản: `build()`. | Phức tạp hơn: `createState`, `initState`, `build`, `dispose`... |
| **Ví dụ** | Text, Icon, Container, Row, Column. | Checkbox, TextField, Slider, Form. |

## 3. Cấu trúc của StatefulWidget

Một `StatefulWidget` luôn bao gồm 2 lớp (class) đi kèm với nhau:

1.  **Lớp Widget**: Kế thừa từ `StatefulWidget`. Lớp này là bất biến (immutable), chứa các cấu hình (configuration).
2.  **Lớp State**: Kế thừa từ `State<T>`. Lớp này chứa dữ liệu (state) và logic để cập nhật giao diện.

```dart
import 'package:flutter/material.dart';

// 1. Lớp Widget (Bất biến)
class MyCounter extends StatefulWidget {
  const MyCounter({super.key});

  @override
  State<MyCounter> createState() => _MyCounterState();
}

// 2. Lớp State (Có thể thay đổi)
class _MyCounterState extends State<MyCounter> {
  int _count = 0; // Đây là State

  @override
  Widget build(BuildContext context) {
    return Text('Count: $_count');
  }
}
```

## 4. Hàm `setState()` - Chìa khóa cập nhật UI

Để báo cho Flutter biết rằng "Dữ liệu đã thay đổi, hãy vẽ lại giao diện đi!", chúng ta sử dụng hàm `setState()`.

```dart
void _incrementCounter() {
  setState(() {
    _count++; // Thay đổi biến state bên trong hàm này
  });
}
```

**Quy tắc hoạt động:**
1.  Bạn gọi `setState()` và cập nhật biến.
2.  Flutter đánh dấu widget này là "cần vẽ lại" (dirty).
3.  Flutter gọi lại hàm `build()` của widget đó.
4.  Giao diện mới được hiển thị với giá trị mới.

**Lưu ý quan trọng:** Nếu bạn thay đổi biến `_count` mà **không** gọi `setState()`, giá trị biến vẫn thay đổi nhưng giao diện sẽ **không** cập nhật.

## 5. Vòng đời (Lifecycle) cơ bản

Hiểu vòng đời giúp bạn biết nên khởi tạo dữ liệu ở đâu và dọn dẹp tài nguyên khi nào.

1.  **`createState()`**: Được gọi đầu tiên khi Widget được tạo.
2.  **`initState()`**: Được gọi **một lần duy nhất** ngay sau khi State được tạo.
    - *Dùng để:* Khởi tạo biến, đăng ký lắng nghe (stream, controller), gọi API lần đầu.
3.  **`build()`**: Được gọi mỗi khi cần vẽ giao diện (lần đầu hoặc sau khi `setState`).
    - *Dùng để:* Xây dựng cây Widget.
4.  **`dispose()`**: Được gọi khi Widget bị hủy bỏ hoàn toàn khỏi cây Widget.
    - *Dùng để:* Hủy controller, đóng stream, hủy timer để tránh rò rỉ bộ nhớ (memory leak).

```dart
class _MyScreenState extends State<MyScreen> {
  late TextEditingController _controller;

  @override
  void initState() {
    super.initState();
    _controller = TextEditingController(); // Khởi tạo
    print("1. initState - Chỉ chạy 1 lần");
  }

  @override
  void dispose() {
    _controller.dispose(); // Dọn dẹp
    print("3. dispose - Chạy khi widget bị hủy");
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    print("2. build - Chạy mỗi khi setState");
    return Container();
  }
}
```

## 6. Ví dụ 1: Ứng dụng Đếm số (Counter)

Đây là ví dụ kinh điển về thay đổi một biến số nguyên (`int`).

```dart
class CounterApp extends StatefulWidget {
  const CounterApp({super.key});

  @override
  State<CounterApp> createState() => _CounterAppState();
}

class _CounterAppState extends State<CounterApp> {
  int _counter = 0;

  void _increment() {
    setState(() {
      _counter++;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Center(
        child: Text('Số lần bấm: $_counter', style: const TextStyle(fontSize: 24)),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: _increment,
        child: const Icon(Icons.add),
      ),
    );
  }
}
```

## 7. Ví dụ 2: Bật/Tắt Đèn (Boolean State)

Ví dụ này minh họa cách quản lý trạng thái đúng/sai (`bool`) để thay đổi giao diện (màu sắc, icon).

```dart
class LightBulb extends StatefulWidget {
  const LightBulb({super.key});

  @override
  State<LightBulb> createState() => _LightBulbState();
}

class _LightBulbState extends State<LightBulb> {
  // State: Đèn đang bật hay tắt?
  bool _isOn = false;

  void _toggleLight() {
    setState(() {
      _isOn = !_isOn; // Đảo ngược trạng thái
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Bật/Tắt Đèn')),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            // Icon thay đổi màu và hình dáng dựa trên _isOn
            Icon(
              _isOn ? Icons.lightbulb : Icons.lightbulb_outline,
              size: 100,
              color: _isOn ? Colors.yellow : Colors.grey,
            ),
            const SizedBox(height: 20),
            Text(
              _isOn ? 'ĐÈN ĐANG BẬT' : 'ĐÈN ĐANG TẮT',
              style: TextStyle(
                fontSize: 24,
                color: _isOn ? Colors.orange : Colors.black,
                fontWeight: FontWeight.bold,
              ),
            ),
            const SizedBox(height: 20),
            ElevatedButton(
              onPressed: _toggleLight,
              style: ElevatedButton.styleFrom(
                backgroundColor: _isOn ? Colors.red : Colors.green,
              ),
              child: Text(_isOn ? 'Tắt đèn' : 'Bật đèn'),
            ),
          ],
        ),
      ),
    );
  }
}
```

## 8. Ví dụ 3: Chọn Màu Nền (Selection State)

Ví dụ này minh họa cách quản lý trạng thái lựa chọn từ một danh sách.

```dart
class ColorPicker extends StatefulWidget {
  const ColorPicker({super.key});

  @override
  State<ColorPicker> createState() => _ColorPickerState();
}

class _ColorPickerState extends State<ColorPicker> {
  // State: Màu đang được chọn
  Color _selectedColor = Colors.blue;

  // Danh sách màu để chọn
  final List<Color> _colors = [
    Colors.blue,
    Colors.red,
    Colors.green,
    Colors.orange,
    Colors.purple,
  ];

  void _changeColor(Color color) {
    setState(() {
      _selectedColor = color;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      // Nền thay đổi theo màu đã chọn
      backgroundColor: _selectedColor,
      appBar: AppBar(title: const Text('Chọn Màu Nền')),
      body: Center(
        child: Container(
          padding: const EdgeInsets.all(20),
          decoration: BoxDecoration(
            color: Colors.white,
            borderRadius: BorderRadius.circular(16),
          ),
          child: Column(
            mainAxisSize: MainAxisSize.min,
            children: [
              const Text(
                'Chọn một màu:',
                style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold),
              ),
              const SizedBox(height: 20),
              Row(
                mainAxisSize: MainAxisSize.min,
                children: [
                  for (final color in _colors)
                    Padding(
                      padding: const EdgeInsets.symmetric(horizontal: 8.0),
                      child: GestureDetector(
                        onTap: () => _changeColor(color),
                        child: Container(
                          width: 40,
                          height: 40,
                          decoration: BoxDecoration(
                            color: color,
                            shape: BoxShape.circle,
                            border: _selectedColor == color
                                ? Border.all(color: Colors.black, width: 3)
                                : null,
                          ),
                        ),
                      ),
                    ),
                ],
              ),
            ],
          ),
        ),
      ),
    );
  }
}
```

## 9. Khi nào nên dùng StatefulWidget?

Hãy tự hỏi: **"Giao diện của widget này có cần thay đổi khi người dùng tương tác không?"**

- **Có** (Ví dụ: Checkbox, Form nhập liệu, Animation, Load dữ liệu): Dùng `StatefulWidget`.
- **Không** (Ví dụ: Logo, Tiêu đề tĩnh, Icon hiển thị): Dùng `StatelessWidget`.

**Mẹo tối ưu:** Luôn ưu tiên dùng `StatelessWidget` nếu có thể. Chỉ dùng `StatefulWidget` cho những phần nhỏ cần thay đổi trạng thái để code gọn gàng và hiệu năng tốt hơn.

---

## Tổng kết

- **StatefulWidget** cho phép tạo ra các giao diện động, phản hồi tương tác.
- **State** là dữ liệu thay đổi theo thời gian.
- **setState()** là hàm quan trọng nhất để cập nhật UI.
- **initState()** và **dispose()** giúp quản lý tài nguyên hiệu quả.

Hy vọng qua 3 ví dụ trên, các em đã hiểu rõ hơn về cách sử dụng StatefulWidget trong Flutter!
