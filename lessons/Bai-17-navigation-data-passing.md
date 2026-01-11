# Bài 17: Điều Hướng (Navigation) & Truyền Dữ Liệu Trong Flutter

Bài học này giúp bạn hiểu cách chuyển đổi giữa các màn hình trong ứng dụng, cách gửi dữ liệu đi và nhận kết quả trả về.

---

## 1. Cơ chế Navigator (Ngăn xếp)

Flutter quản lý các màn hình (Screen/Route) theo cơ chế **Stack (Ngăn xếp)**.

- **Push**: Đẩy một màn hình mới lên trên cùng (người dùng nhìn thấy màn hình này).
- **Pop**: Gỡ màn hình trên cùng ra (quay lại màn hình trước đó).

### Ví dụ cơ bản:

```dart
// Chuyển sang màn hình mới
Navigator.push(
  context,
  MaterialPageRoute(builder: (context) => SecondScreen()),
);

// Quay lại
Navigator.pop(context);
```

---

## 2. Truyền Dữ Liệu Đi (Forward Data)

Khi bạn muốn gửi thông tin từ màn hình A sang màn hình B (VD: gửi tên người dùng).
Cách đơn giản nhất là dùng **Constructor**.

### Code mẫu:

```dart
// Màn hình 2 nhận dữ liệu
class SecondScreen extends StatelessWidget {
  final String userName;

  const SecondScreen({required this.userName}); // Constructor

  // ...
}

// Màn hình 1 gửi dữ liệu
Navigator.push(
  context,
  MaterialPageRoute(
    builder: (context) => SecondScreen(userName: "Flutter Student"),
  ),
);
```

---

## 3. Nhận Dữ Liệu Trả Về (Backward Data)

Khi bạn muốn màn hình B trả kết quả về cho màn hình A (VD: chọn một màu, chọn ngày tháng).
Chúng ta sử dụng `await` để đợi kết quả từ `Navigator.push`.

### Code mẫu:

**Màn hình B (Trả dữ liệu):**

```dart
// Khi chọn xong
Navigator.pop(context, "Màu Đỏ"); // Trả về chuỗi "Màu Đỏ"
```

**Màn hình A (Đợi & Nhận dữ liệu):**

```dart
// Dùng async/await để đợi
void _navigateAndGetResult() async {
  // Biến result sẽ hứng giá trị được trả về từ hàm pop
  final result = await Navigator.push(
    context,
    MaterialPageRoute(builder: (context) => SelectionScreen()),
  );

  if (result != null) {
    print("Người dùng đã chọn: $result");
  }
}
```

---

## 4. Thực Hành

Trong bài thực hành này `navigation.dart`, chúng ta sẽ làm một Menu tổng hợp:

1.  **Level 1**: Điều hướng cơ bản đến các bài tập cũ (Bật đèn, Color Picker).
2.  **Level 2**: Nhập thông tin ở Menu và truyền sang màn hình AI Gợi Ý Việc Làm.
3.  **Level 3**: Mở Color Picker để chọn màu, sau đó trả màu về để đổi màu nền Menu.

<details>
<summary>Xem code mẫu navigation.dart hoàn chỉnh</summary>

```dart
import 'package:flutter/material.dart';
import '../thuannd/lesson-13-stateful/lightbuld.dart';
import '../thuannd/lesson-13-stateful/color_picker.dart';
import '../thuannd/member_screen_v5_gemini.dart';

// FILE 3: Hoàn thiện với Level 3 (Nhận Dữ Liệu - Backward)
// Mục tiêu: Học async/await và xử lý kết quả trả về từ màn hình con

void main() {
  runApp(const MaterialApp(debugShowCheckedModeBanner: false, home: NavigationMenuV3()));
}

// Chuyển sang StatefulWidget để cập nhật UI khi nhận dữ liệu về
class NavigationMenuV3 extends StatefulWidget {
  const NavigationMenuV3({super.key});

  @override
  State<NavigationMenuV3> createState() => _NavigationMenuV3State();
}

class _NavigationMenuV3State extends State<NavigationMenuV3> {
  // Biến trạng thái: Màu nền của menu
  Color _backgroundColor = Colors.white;

  // Level 3: Hàm nhận dữ liệu trả về
  Future<void> _pickColorAndChangeBackground() async {
    // 1. Chuyển màn hình và ĐỢI kết quả (await)
    final result = await Navigator.push(
      context,
      MaterialPageRoute(
        // Mở màn hình chọn màu ở chế độ Select
        builder: (context) => const ColorPicker(isSelectionMode: true),
      ),
    );

    // 2. Xử lý kết quả sau khi màn hình con đóng lại
    if (result != null && result is Color) {
      if (!mounted) return; // Kiểm tra an toàn

      setState(() {
        _backgroundColor = result; // Cập nhật màu nền
      });

      ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text("Đã cập nhật màu nền thành công!")));
    }
  }

  // Helper Level 2
  void _openGameWithData(BuildContext context) {
    showDialog(
      context: context,
      builder: (context) {
        final nameCtrl = TextEditingController();
        final descCtrl = TextEditingController();
        return AlertDialog(
          title: const Text("Nhập hồ sơ học sinh"),
          content: Column(
            mainAxisSize: MainAxisSize.min,
            children: [
              TextField(
                controller: nameCtrl,
                decoration: const InputDecoration(labelText: "Tên"),
              ),
              TextField(
                controller: descCtrl,
                decoration: const InputDecoration(labelText: "Mô tả"),
              ),
            ],
          ),
          actions: [
            TextButton(onPressed: () => Navigator.pop(context), child: const Text("Hủy")),
            ElevatedButton(
              onPressed: () {
                Navigator.pop(context);
                Navigator.push(
                  context,
                  MaterialPageRoute(
                    builder: (context) => MemberFunnyGameScreenV5(initialName: nameCtrl.text, initialDesc: descCtrl.text),
                  ),
                );
              },
              child: const Text("Gửi & Mở Game"),
            ),
          ],
        );
      },
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: _backgroundColor, // Màu nền thay đổi động
      appBar: AppBar(title: const Text("Bài 17: Navigation (Full)")),
      body: ListView(
        padding: const EdgeInsets.all(16),
        children: [
          // LEVEL 1
          const Text("Level 1: Basic", style: _headerStyle),
          _buildItem("Bật Đèn", Icons.lightbulb, () {
            Navigator.push(context, MaterialPageRoute(builder: (_) => const LightBulb()));
          }),
          _buildItem("Xem Màu (Không chọn)", Icons.visibility, () {
            Navigator.push(context, MaterialPageRoute(builder: (_) => const ColorPicker()));
          }),

          const Divider(),

          // LEVEL 2
          const Text("Level 2: Truyền đi (Forward)", style: _headerStyle),
          _buildItem("AI Gợi Ý Việc Làm", Icons.psychology, () => _openGameWithData(context), color: Colors.blue.shade50),

          const Divider(),

          // LEVEL 3 (Mới thêm vào)
          const Text("Level 3: Nhận về (Backward)", style: _headerStyle),
          const SizedBox(height: 10),
          Container(
            decoration: BoxDecoration(
              border: Border.all(color: Colors.green, width: 2),
              borderRadius: BorderRadius.circular(8),
              color: Colors.green.shade50,
            ),
            child: ListTile(
              leading: const Icon(Icons.format_paint, color: Colors.green),
              title: const Text("Chọn Màu Cho Menu"),
              subtitle: const Text("Click để chọn màu -> Trả về đổi nền Menu"),
              onTap: _pickColorAndChangeBackground, // Gọi hàm async
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildItem(String title, IconData icon, VoidCallback onTap, {Color? color}) {
    return Card(
      color: color,
      child: ListTile(leading: Icon(icon), title: Text(title), onTap: onTap, trailing: const Icon(Icons.arrow_forward_ios, size: 16)),
    );
  }

  static const _headerStyle = TextStyle(fontSize: 18, fontWeight: FontWeight.bold);
}
```

</details>
