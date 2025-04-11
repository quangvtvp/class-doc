import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import CodeBlock from '@theme/CodeBlock';
import './index.module.css';

// Define the Dart code as a constant string
const dartCodeExample = `import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: MyHomePage(),
    );
  }
}

class MyHomePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Flutter Demo Home Page'),
      ),
      body: Center(
        child: Text('Hello, Flutter!'),
      ),
    );
  }
}`;

function Homepage() {
  return (
    <Layout title="Flutter Fundamentals" description="Introduction to Flutter and its benefits">
      <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
        <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>Flutter Fundamentals</h1>
        <img
          src="https://storage.googleapis.com/cms-storage-bucket/6a07d8a62f4308d2b854.svg"
          alt="Flutter Logo"
          style={{ maxWidth: '200px', display: 'block', margin: '0 auto 2rem' }}
        />
        <p style={{ textAlign: 'center', marginBottom: '2rem' }}>
          Flutter là một UI toolkit từ Google để xây dựng các ứng dụng đa nền tảng đẹp mắt, được biên dịch trực tiếp sang mã máy từ một codebase duy nhất.
        </p>

        <h2>Các nền tảng được hỗ trợ</h2>
        <ul>
          <li>📱 <strong>Mobile</strong>: iOS, Android</li>
          <li>💻 <strong>Web</strong>: Chrome, Firefox, Safari, Edge</li>
          <li>🖥️ <strong>Desktop</strong>: Windows, macOS, Linux</li>
        </ul>

        <h2>Tại sao nên học Flutter?</h2>
        <ul>
          <li><strong>Hiệu suất cao</strong>: Ứng dụng Flutter biên dịch trực tiếp sang mã máy</li>
          <li><strong>Hot Reload</strong>: Xem thay đổi ngay lập tức khi code</li>
          <li><strong>Widget phong phú</strong>: Thư viện UI components đẹp và đa dạng</li>
          <li><strong>Cộng đồng lớn</strong>: Hỗ trợ tích cực từ cộng đồng và Google</li>
        </ul>

        <h2>Các bài hướng dẫn</h2>
        <h3>Bài 1: <Link to="/flutter-calculator-tutorial">Xây dựng ứng dụng Calculator đơn giản</Link></h3>
        <p>
          Trong bài hướng dẫn đầu tiên, bạn sẽ học cách xây dựng một ứng dụng máy tính bỏ túi đơn giản bằng Flutter. Bài học này tập trung vào:
        </p>
        <ul>
          <li>Cách sử dụng các widget layout cơ bản như <code>Column</code>, <code>Row</code>, và <code>Expanded</code></li>
          <li>Thiết kế giao diện người dùng (UI) với các widget phổ biến</li>
          <li>Xử lý sự kiện và trạng thái trong Flutter</li>
        </ul>
        <img
          src="https://flutter.github.io/assets-for-api-docs/assets/widgets/basic-flutter-app.png"
          alt="Calculator Preview"
          style={{ maxWidth: '300px', margin: '0 auto 2rem' }}
        />

        <h2>Ví dụ ứng dụng Flutter đơn giản</h2>
        <p>Dưới đây là một ví dụ về ứng dụng "Hello World" cơ bản bằng Flutter:</p>
        <CodeBlock language="dart">
          {dartCodeExample}
        </CodeBlock>

        <h2>Tài nguyên học tập</h2>
        <ul>
          <li><a href="https://flutter.dev" target="_blank" rel="noopener noreferrer">Flutter.dev</a> - Trang chủ chính thức của Flutter</li>
          <li><a href="https://dart.dev" target="_blank" rel="noopener noreferrer">Dart.dev</a> - Ngôn ngữ lập trình Dart</li>
          <li><a href="https://pub.dev" target="_blank" rel="noopener noreferrer">Pub.dev</a> - Kho package của Flutter/Dart</li>
          <li><a href="https://flutter.dev/docs/cookbook" target="_blank" rel="noopener noreferrer">Flutter Cookbook</a> - Các hướng dẫn thực tế</li>
          <li><a href="https://www.youtube.com/c/flutterdev" target="_blank" rel="noopener noreferrer">Flutter YouTube</a> - Video hướng dẫn chính thức</li>
        </ul>
      </div>
    </Layout>
  );
}

export default Homepage;
