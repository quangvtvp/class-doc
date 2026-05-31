---
title: Trắc Nghiệm Khởi Động Khóa 2

---

# 📝 Trắc Nghiệm — Flutter Cơ Bản

> **Số câu:** 12  
> **Mức độ:** Dễ — Kiểm tra kiến thức nền tảng  
> **Thời gian gợi ý:** 15 phút  
> **Cách làm:** Chọn 1 đáp án đúng nhất cho mỗi câu.

---

## Phần 1: Dart Cơ Bản

### Câu 1: Biến & Kiểu dữ liệu

Từ khóa nào dùng để khai báo một biến **có thể thay đổi giá trị** trong Dart?

A. `final`  
B. `const`  
C. `var`  
D. `static`

**💡 Đáp án: C** — `var` khai báo biến có thể thay đổi giá trị. `final` và `const` dùng cho biến không đổi (hằng số).

---

### Câu 2: Điều kiện if/else

Toán tử nào dùng để **so sánh bằng** trong Dart?

A. `=`  
B. `==`  
C. `===`  
D. `!=`

**💡 Đáp án: B** — `==` là toán tử so sánh bằng. `=` là toán tử gán, `===` không tồn tại trong Dart, `!=` là so sánh khác.

---

### Câu 3: Vòng lặp for

Đoạn code sau in ra bao nhiêu dòng?

```dart
for (var i = 1; i <= 5; i++) {
  print(i);
}
```

A. 4 dòng  
B. 5 dòng  
C. 6 dòng  
D. 0 dòng

**💡 Đáp án: B** — Vòng `for` chạy từ `i = 1` đến `i = 5` (điều kiện `<=`), in ra 5 dòng: 1, 2, 3, 4, 5.

---

### Câu 4: Collection — List

Đoạn code sau in ra giá trị gì?

```dart
List<String> fruits = ['Táo', 'Chuối', 'Cam'];
print(fruits[1]);
```

A. `Táo`  
B. `Chuối`  
C. `Cam`  
D. Báo lỗi

**💡 Đáp án: B** — Index của List bắt đầu từ 0: `fruits[0]` = Táo, `fruits[1]` = Chuối, `fruits[2]` = Cam.

---

### Câu 5: Function (Hàm)

Hàm sau trả về giá trị gì khi gọi `tinhTong(3, 7)`?

```dart
int tinhTong(int a, int b) {
  return a + b;
}
```

A. `37`  
B. `10`  
C. `null`  
D. Báo lỗi

**💡 Đáp án: B** — Hàm nhận 2 tham số `int` và trả về tổng. `3 + 7 = 10`.

---

## Phần 2: Flutter

### Câu 6: Cấu trúc dự án Flutter

Trong một dự án Flutter, mã nguồn Dart chính (các màn hình, widget, logic…) được đặt ở thư mục nào?

A. `android/`  
B. `ios/`  
C. `lib/`  
D. `test/`

**💡 Đáp án: C** — Thư mục `lib/` là nơi chứa toàn bộ mã nguồn Dart chính của ứng dụng. Các thư mục `android/`, `ios/` chỉ chứa cấu hình native.

---

### Câu 7: Widget Layout

Widget nào dùng để sắp xếp các widget con **theo chiều ngang**?

A. `Column`  
B. `Row`  
C. `Container`  
D. `Stack`

**💡 Đáp án: B** — `Row` sắp xếp children theo trục ngang (horizontal). `Column` sắp xếp theo trục dọc (vertical).

---

### Câu 8: StatefulWidget

Phương thức `setState()` trong Flutter có tác dụng gì?

A. Gọi API từ server  
B. Lưu dữ liệu vào bộ nhớ  
C. Thông báo cho Flutter vẽ lại (rebuild) widget với dữ liệu mới  
D. Chuyển sang màn hình khác

**💡 Đáp án: C** — `setState()` báo cho Flutter rằng trạng thái đã thay đổi và cần rebuild lại giao diện. Đây là cách cơ bản nhất để cập nhật UI trong StatefulWidget.

---

### Câu 9: ListView

Widget nào dùng để hiển thị **danh sách có thể cuộn** trong Flutter?

A. `Column`  
B. `ListView`  
C. `Container`  
D. `Text`

**💡 Đáp án: B** — `ListView` là widget chuyên dụng để hiển thị danh sách có thể cuộn. `Column` chỉ sắp xếp dọc nhưng không tự động cuộn khi nội dung dài.

---

### Câu 10: Navigation

Đoạn code nào sau đây dùng để **chuyển sang màn hình mới** trong Flutter?

A. `Navigator.pop(context)`  
B. `Navigator.push(context, MaterialPageRoute(builder: (context) => ManHinhMoi()))`  
C. `setState(() { screen = ManHinhMoi(); })`  
D. `Scaffold(body: ManHinhMoi())`

**💡 Đáp án: B** — `Navigator.push` đẩy một route mới vào stack, hiển thị màn hình mới. `Navigator.pop` dùng để quay lại màn hình trước.

---

### Câu 11: HTTP Request

Để gửi yêu cầu HTTP GET trong Flutter, bước nào sau đây là **cần thiết**?

A. Thêm package `http` vào `pubspec.yaml`  
B. Dùng widget `Navigator.push`  
C. Thay đổi file `AndroidManifest.xml`  
D. Cài đặt Firebase

**💡 Đáp án: A** — Cần thêm dependency `http` vào `pubspec.yaml` rồi chạy `flutter pub get` để sử dụng các phương thức HTTP trong Flutter.

---

### Câu 12: Debugging Flutter

Phím tắt nào dùng để **Hot Reload** ứng dụng Flutter khi đang chạy trong terminal?

A. `Shift + R`  
B. `r`  
C. `Ctrl + R`  
D. `F5`

**💡 Đáp án: B** — Phím `r` (chữ thường) dùng để Hot Reload. Phím `R` (Shift + R) dùng để Hot Restart. Đây là phím tắt trong Flutter CLI.

---

## 📊 Bảng Đáp Án Tổng Hợp

| Câu | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 |
|-----|---|---|---|---|---|---|---|---|---|----|----|-----|
| ĐA  | C | B | B | B | B | C | B | C | B  | B  | A  | B   |

---

## 📈 Ma Trận Kiến Thức

| Phần | Câu | Chủ đề | Bài học |
|------|-----|--------|---------|
| Dart | 1 | Biến & kiểu dữ liệu (`var`, `final`, `const`) | Bài 2 |
| Dart | 2 | Toán tử so sánh | Bài 3 |
| Dart | 3 | Vòng lặp `for` | Bài 4 |
| Dart | 4 | Collection — `List` | Bài 5 |
| Dart | 5 | Function (Hàm) | Bài 6 |
| Flutter | 6 | Cấu trúc dự án | Flutter 01 |
| Flutter | 7 | Widget Layout (`Row`) | Flutter 01 |
| Flutter | 8 | `setState()` | Bài 13 |
| Flutter | 9 | `ListView` | Bài 15 |
| Flutter | 10 | `Navigator.push` | Bài 17 |
| Flutter | 11 | HTTP Request | Bài 18 |
| Flutter | 12 | Hot Reload | Tổng hợp |

---

_Chúc các em ôn tập tốt! 💪_
