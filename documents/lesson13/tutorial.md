---
sidebar_position: 2
id: tutorial-career-prophet
title: 💻 Hướng dẫn Code: Máy Tiên Tri
description: Từng bước xây dựng game Máy Tiên Tri Nghề Nghiệp
---

# 💻 Hướng dẫn Code: Máy Tiên Tri Nghề Nghiệp

Trong bài này, chúng ta sẽ xây dựng ứng dụng theo quy trình 5 giai đoạn, đi từ việc tạo dữ liệu, xây dựng giao diện tĩnh, đến xử lý logic và cuối cùng là làm cho nó hoạt động (động).

## Giai đoạn 1: Khởi tạo & Tư duy dữ liệu

Trước khi vẽ giao diện, ta cần biết ta sẽ hiển thị cái gì.

### Bước 1.1: Tạo Model dữ liệu

Tạo file `lib/models/member.dart`. Đây là "khuôn mẫu" cho một người chơi.

```dart
import 'dart:ui'; // Để dùng được kiểu dữ liệu Color

class Member {
  final String name;          // Tên người chơi
  final String description;   // Mô tả ngắn
  final String funnyJob;      // Nghề nghiệp được dự đoán (kết quả)
  final Color avatarColor;    // Màu đại diện ngẫu nhiên

  Member({
    required this.name,
    required this.description,
    required this.funnyJob,
    required this.avatarColor,
  });
}
```

### Bước 1.2: Dựng khung màn hình cơ bản

Tạo file `lib/screens/member_funny_game_screen.dart`. Chúng ta bắt đầu với một `StatelessWidget` và khung `Scaffold` cơ bản.

```dart
import 'package:flutter/material.dart';
import '../models/member.dart';

class MemberFunnyGameScreen extends StatelessWidget {
  MemberFunnyGameScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.grey.shade100, // Màu nền xám nhẹ
      appBar: AppBar(
        title: const Text('Máy Tiên Tri Nghề Nghiệp'),
        centerTitle: true,
        backgroundColor: const Color(0xFF7E57C2), // Màu tím chủ đạo
        foregroundColor: Colors.white,
      ),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: [
            // Chúng ta sẽ thêm các phần tiếp theo vào đây
          ],
        ),
      ),
    );
  }
}
```

---

## Giai đoạn 2: Xây dựng Form nhập liệu

Chúng ta sẽ tạo một khu vực đẹp mắt để người dùng nhập tên.

### Bước 2.1: Tạo khung trang trí (Container)

Trong `Column` ở `body`, thêm một `Container` để làm nền cho form.

```dart
// ... bên trong Column
Container(
  padding: const EdgeInsets.all(16),
  decoration: BoxDecoration(
    color: Colors.white,
    borderRadius: BorderRadius.circular(16), // Bo góc
    border: Border.all(color: const Color(0xFFB39DDB), width: 2), // Viền tím nhạt
    boxShadow: [ // Đổ bóng nhẹ
      BoxShadow(
        color: const Color(0xFFB39DDB).withOpacity(0.3),
        blurRadius: 10,
        offset: const Offset(0, 4),
      ),
    ],
  ),
  child: Column(
    crossAxisAlignment: CrossAxisAlignment.stretch,
    children: [
      // Các ô nhập liệu sẽ nằm ở đây
    ],
  ),
),
```

### Bước 2.2: Thêm ô nhập liệu (TextField)

Bên trong `Column` của Container vừa tạo, hãy thêm tiêu đề và 2 `TextField`.

```dart
const Text(
  'Nhập thông tin để tiên tri',
  style: TextStyle(fontSize: 16, fontWeight: FontWeight.bold, color: Color(0xFF7E57C2)),
),
const SizedBox(height: 12),

// Ô nhập Tên
TextField(
  decoration: const InputDecoration(
    labelText: 'Tên',
    hintText: 'Nhập tên người cần xem bói',
    border: OutlineInputBorder(borderRadius: BorderRadius.all(Radius.circular(12))),
    prefixIcon: Icon(Icons.person_outline, color: Color(0xFF7E57C2)),
  ),
),
const SizedBox(height: 12),

// Ô nhập Mô tả
TextField(
  decoration: const InputDecoration(
    labelText: 'Mô tả ngắn',
    border: OutlineInputBorder(borderRadius: BorderRadius.all(Radius.circular(12))),
    prefixIcon: Icon(Icons.description_outlined, color: Color(0xFF7E57C2)),
  ),
),
```

### Bước 2.3: Thêm nút bấm (Button)

Cuối cùng trong Form, thêm nút bấm. Dùng `Row` và `MainAxisAlignment.end` để đẩy nút sang phải.

```dart
const SizedBox(height: 16),
Row(
  mainAxisAlignment: MainAxisAlignment.end,
  children: [
    ElevatedButton.icon(
      onPressed: () {
        // Chưa xử lý logic, để trống tạm thời
      },
      icon: const Icon(Icons.auto_awesome),
      label: const Text('Dự đoán ngay'),
      style: ElevatedButton.styleFrom(
        backgroundColor: const Color(0xFF7E57C2),
        foregroundColor: Colors.white,
      ),
    ),
  ],
),
```

---

## Giai đoạn 3: Xây dựng khu vực hiển thị kết quả

Phần này nằm bên dưới Form nhập liệu (bên ngoài Container form).

### Bước 3.1: Chia không gian với Expanded

Sau Container form, ta thêm tiêu đề danh sách và widget `Expanded`.
`Expanded` rất quan trọng: nó bảo Flutter rằng "hãy dùng tất cả khoảng trống còn lại bên dưới để chứa danh sách này".

```dart
// ... Sau Container Form
const SizedBox(height: 16),
const Text(
  'Kết quả dự đoán nghề nghiệp',
  style: TextStyle(fontSize: 16, fontWeight: FontWeight.bold),
),
const SizedBox(height: 8),

Expanded(
  child: SingleChildScrollView( // Cho phép cuộn nếu danh sách dài
    child: Column(
      children: [
        // Danh sách thẻ thành viên sẽ hiện ở đây
        // Tạm thời để trống hoặc text mẫu
        Text('Chưa có ai được tiên tri'),
      ],
    ),
  ),
),
```

### Bước 3.2: Thiết kế thẻ thành viên (\_MemberCard)

Để code gọn, ta tạo một Widget riêng tên là `_MemberCard` ở cuối file.

```dart
class _MemberCard extends StatelessWidget {
  final Member member;
  const _MemberCard({required this.member});

  @override
  Widget build(BuildContext context) {
    return Container(
      margin: const EdgeInsets.symmetric(vertical: 6),
      padding: const EdgeInsets.all(12),
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.circular(12),
        boxShadow: [BoxShadow(color: Colors.black12, blurRadius: 4)],
      ),
      child: Row(
        children: [
          // Avatar bên trái
          CircleAvatar(
            radius: 24,
            backgroundColor: member.avatarColor,
            child: Text(member.name[0].toUpperCase(), style: const TextStyle(color: Colors.white)),
          ),
          const SizedBox(width: 12),
          // Thông tin bên phải
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(member.name, style: const TextStyle(fontWeight: FontWeight.bold, fontSize: 16)),
                Text(member.description, style: const TextStyle(fontSize: 13)),
                const SizedBox(height: 4),
                Text(
                  'Nghề nghiệp tương lai: ${member.funnyJob}',
                  style: const TextStyle(color: Colors.teal, fontStyle: FontStyle.italic),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}
```

---

## Giai đoạn 4: Xử lý Logic

Quay lại class `MemberFunnyGameScreen`, chúng ta cần thêm "bộ não" cho ứng dụng.

### Bước 4.1: Khai báo Controller và Random

Khai báo các biến này ở đầu class `MemberFunnyGameScreen`. Đừng quên gán controller vào 2 `TextField` ở Giai đoạn 2 nhé!

```dart
  // Controller để đọc dữ liệu từ TextField
  final TextEditingController _nameController = TextEditingController();
  final TextEditingController _descController = TextEditingController();

  final Random _random = Random();
```

### Bước 4.2: Chuẩn bị dữ liệu ngẫu nhiên

Thêm danh sách nghề nghiệp và hàm tạo màu.

```dart
  final List<String> _funnyJobs = const [
    'Chuyên gia săn sale Shopee 1k',
    'Tổng thống nước Ngủ Ngày',
    'Tiến sĩ văn học chuyên ngành chém gió',
    'Vận động viên lướt Facebook Olympic',
    'Thám tử tư chuyên soi crush',
  ];

  Color _randomAvatarColor() {
    // Các em có thể thêm nhiều màu hơn vào đây
    final colors = [Colors.purple, Colors.blue, Colors.pink, Colors.orange];
    return colors[_random.nextInt(colors.length)];
  }
```

### Bước 4.3: Viết hàm thêm thành viên (\_addMember)

```dart
  void _addMember(BuildContext context) {
    final name = _nameController.text.trim();

    // 1. Kiểm tra nếu chưa nhập tên
    if (name.isEmpty) {
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(content: Text('Vui lòng nhập tên để xem bói nhé!')),
      );
      return;
    }

    // 2. Random nghề nghiệp và màu sắc
    final funnyJob = _funnyJobs[_random.nextInt(_funnyJobs.length)];
    final color = _randomAvatarColor();

    // 3. Tạo đối tượng Member mới
    final newMember = Member(
      name: name,
      description: _descController.text.isEmpty ? 'Người bí ẩn' : _descController.text,
      funnyJob: funnyJob,
      avatarColor: color,
    );

    // ... (Phần cập nhật danh sách sẽ làm ở Giai đoạn 5)

    // 4. Xóa trắng ô nhập sau khi thêm
    _nameController.clear();
    _descController.clear();
  }
```

---

## Giai đoạn 5: Kết nối dữ liệu (State Management)

Đây là bước quan trọng nhất để danh sách tự động cập nhật khi bấm nút.

### Bước 5.1: Khai báo ValueNotifier

Thay vì dùng `List<Member>` thường, ta dùng `ValueNotifier`.

```dart
  // Biến này sẽ thông báo cho UI biết khi danh sách thay đổi
  final ValueNotifier<List<Member>> _membersNotifier = ValueNotifier([]);
```

### Bước 5.2: Cập nhật hàm \_addMember

Thêm dòng code này vào vị trí `...` ở Bước 4.3.

```dart
    // CẬP NHẬT TRẠNG THÁI:
    // Tạo danh sách mới = Danh sách cũ + Thành viên mới
    _membersNotifier.value = [..._membersNotifier.value, newMember];
```

### Bước 5.3: Hiển thị danh sách động

Thay thế phần `Text('Chưa có ai được tiên tri')` ở Giai đoạn 3 bằng `ValueListenableBuilder`.

```dart
Expanded(
  child: ValueListenableBuilder<List<Member>>(
    valueListenable: _membersNotifier, // Lắng nghe biến này
    builder: (context, members, child) {
      return SingleChildScrollView(
        child: Column(
          children: [
            // Dùng vòng lặp để tạo ra các thẻ MemberCard
            for (final member in members)
              _MemberCard(member: member),

            // Hiển thị thông báo nếu danh sách rỗng
            if (members.isEmpty)
              Padding(
                padding: const EdgeInsets.only(top: 32.0),
                child: Text(
                  'Chưa có ai được tiên tri, hãy nhập tên để bắt đầu!',
                  style: TextStyle(color: Colors.grey.shade600),
                  textAlign: TextAlign.center,
                ),
              ),
          ],
        ),
      );
    },
  ),
),
```

### Bước 5.4: Gắn hàm vào nút bấm

Cuối cùng, quay lại nút `ElevatedButton` ở Giai đoạn 2 và gọi hàm `_addMember`.

```dart
onPressed: () => _addMember(context),
```

## Tổng kết

Chúc mừng các em! 🎉 Các em đã hoàn thành ứng dụng "Máy Tiên Tri".
Hãy chạy thử lệnh `flutter run` và xem kết quả nhé.

**Bài tập về nhà:**

1.  Thêm nút "Xóa danh sách" để reset game.
2.  Thêm nhiều nghề nghiệp hài hước hơn nữa vào danh sách.
