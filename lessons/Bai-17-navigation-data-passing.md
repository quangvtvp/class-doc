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
