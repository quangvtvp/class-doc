---
title: Flutter Fundamentals
sidebar_position: 1
---

# Flutter Fundamentals

## Học Flutter từ căn bản đến nâng cao

![Flutter Logo](https://storage.googleapis.com/cms-storage-bucket/c823e53b3a1a7b0d36a9.png)

Flutter là framework UI mã nguồn mở của Google giúp bạn xây dựng ứng dụng đa nền tảng từ một codebase duy nhất. Với Flutter, bạn có thể phát triển ứng dụng cho:

- **Mobile**: iOS và Android
- **Web**: Chrome, Firefox, Safari, Edge
- **Desktop**: Windows, macOS, Linux

## Tại sao nên học Flutter?

- **Hiệu suất cao**: Ứng dụng Flutter biên dịch trực tiếp sang mã máy
- **Hot Reload**: Xem thay đổi ngay lập tức khi code
- **Widget phong phú**: Thư viện UI components đẹp và đa dạng
- **Cộng đồng lớn**: Hỗ trợ tích cực từ cộng đồng và Google

## Các bài hướng dẫn

### Bài 1: [Xây dựng ứng dụng Calculator đơn giản](/tutorials/calculator-tutorial)

Trong bài hướng dẫn đầu tiên, bạn sẽ học cách xây dựng một ứng dụng máy tính bỏ túi đơn giản bằng Flutter. Bài học này tập trung vào:

- Cách sử dụng các widget layout cơ bản như `Column`, `Row`, và `Expanded`
- Thiết kế giao diện người dùng (UI) với các widget phổ biến
- Xử lý sự kiện và trạng thái trong Flutter

![Calculator Preview](https://flutter.github.io/assets-for-api-docs/assets/widgets/basic-flutter-app.png)

## Tài nguyên học tập

- [Flutter.dev](https://flutter.dev) - Trang chủ chính thức của Flutter
- [Dart.dev](https://dart.dev) - Ngôn ngữ lập trình Dart
- [Flutter YouTube Channel](https://www.youtube.com/c/flutterdev) - Kênh YouTube chính thức
- [Flutter Community](https://flutter.dev/community) - Cộng đồng Flutter

## Bắt đầu ngay

Để bắt đầu học Flutter, hãy cài đặt Flutter SDK theo [hướng dẫn chính thức](https://flutter.dev/docs/get-started/install), sau đó khám phá các bài hướng dẫn của chúng tôi.

```dart
// Ví dụ đơn giản về ứng dụng Flutter "Hello World"
import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(title: Text('Hello Flutter')),
        body: Center(child: Text('Welcome to Flutter Fundamentals!')),
      ),
    );
  }
}
```
