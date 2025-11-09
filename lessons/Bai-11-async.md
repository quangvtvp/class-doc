# Bài 11: Lập trình bất đồng bộ trong Dart với async/await

## Mục tiêu bài học

- Hiểu rõ sự khác biệt giữa lập trình đồng bộ (synchronous) và bất đồng bộ (asynchronous).
- Nắm vững khái niệm `Future` và vai trò của nó trong Dart.
- Sử dụng thành thạo từ khóa `async` và `await` để viết code bất đồng bộ rõ ràng, dễ đọc.
- Biết cách xử lý lỗi trong các tác vụ bất đồng bộ bằng `try-catch`.
- Áp dụng kiến thức vào một dự án nhỏ để mô phỏng việc lấy dữ liệu từ mạng.

---

## 1. Lập trình đồng bộ (Synchronous) là gì?

**Lập trình đồng bộ** (Synchronous) là mô hình lập trình phổ biến nhất, trong đó các câu lệnh được thực thi tuần tự, hết lệnh này mới đến lệnh khác. Nếu một tác vụ mất nhiều thời gian để hoàn thành (ví dụ: đọc file lớn, gọi API mạng), toàn bộ chương trình sẽ bị "treo" (block) và phải chờ cho đến khi tác vụ đó xong.

**Ví dụ thực tế:**

Hãy tưởng tượng bạn đang xếp hàng mua vé xem phim. Bạn phải chờ người phía trước mua xong vé thì mới đến lượt mình. Dòng người phía sau bạn cũng phải chờ. Đây chính là "đồng bộ".

### Ví dụ code đồng bộ

```dart
void main() {
  print('Chương trình bắt đầu.');
  String ketQua = thucHienTacVuDai();
  print(ketQua);
  print('Chương trình kết thúc.');
}

String thucHienTacVuDai() {
  // Giả lập một tác vụ tốn thời gian, ví dụ 3 giây
  print('Bắt đầu tác vụ dài...');
  for (var i = 0; i < 3; i++) {
    print('${i + 1} giây...');
    // Dừng chương trình trong 1 giây
    sleep(Duration(seconds: 1));
  }
  print('...Tác vụ dài hoàn thành.');
  return 'Kết quả từ tác vụ dài';
}
```

**Kết quả:**

```
Chương trình bắt đầu.
Bắt đầu tác vụ dài...
1 giây...
2 giây...
3 giây...
...Tác vụ dài hoàn thành.
Kết quả từ tác vụ dài
Chương trình kết thúc.
```

=> **Vấn đề:** `print('Chương trình kết thúc.')` phải chờ 3 giây cho đến khi `thucHienTacVuDai()` hoàn thành. Trong ứng dụng di động, điều này sẽ làm giao diện người dùng (UI) bị đơ, gây trải nghiệm rất tệ.

---

## 2. Lập trình bất đồng bộ (Asynchronous) là gì?

**Lập trình bất đồng bộ** (Asynchronous) cho phép chương trình tiếp tục thực thi các tác vụ khác mà không cần phải chờ một tác vụ dài hoàn thành. Khi tác vụ dài đó xong, chương trình sẽ nhận được thông báo và xử lý kết quả.

**Ví dụ thực tế:**

Bạn vào một quán cà phê, gọi món và nhận một thiết bị báo rung. Thay vì đứng chờ tại quầy, bạn có thể ra bàn ngồi, lướt điện thoại, nói chuyện với bạn bè. Khi nào cà phê sẵn sàng, thiết bị sẽ rung lên và bạn ra lấy. Đây chính là "bất đồng bộ".

Các tác vụ bất đồng bộ phổ biến:

- Tải dữ liệu từ Internet (API call).
- Đọc/ghi file trên thiết bị.
- Truy vấn cơ sở dữ liệu (database).

---

## 3. Giới thiệu về `Future` - Lời hứa về một giá trị

Trong Dart, khi bạn thực hiện một tác vụ bất đồng bộ, nó sẽ ngay lập tức trả về một đối tượng `Future`.

**`Future`** giống như một "lời hứa" rằng tác vụ sẽ trả về một giá trị (hoặc một lỗi) vào một thời điểm nào đó trong tương lai.

Một `Future` có thể ở một trong hai trạng thái:

1.  **Uncompleted** (Chưa hoàn thành): Tác vụ vẫn đang được xử lý.
2.  **Completed** (Đã hoàn thành): Tác vụ đã xong và có kết quả.
    -   **Completed with a value**: Hoàn thành thành công và trả về một giá trị.
    -   **Completed with an error**: Hoàn thành nhưng gặp lỗi.

### Ví dụ tạo một `Future`

Chúng ta có thể dùng `Future.delayed` để giả lập một tác vụ bất đồng bộ.

```dart
// Hàm này sẽ trả về một Future<String> sau 2 giây.
Future<String> layDuLieuNguoiDung() {
  return Future.delayed(Duration(seconds: 2), () {
    // Sau 2 giây, Future sẽ hoàn thành và trả về giá trị này.
    return 'Dữ liệu người dùng: John Doe';
  });
}

void main() {
  print('Bắt đầu lấy dữ liệu...');
  final future = layDuLieuNguoiDung();
  print('Đã gọi hàm, đang chờ kết quả...');
  print('Chương trình vẫn chạy mà không bị block.');

  // Cách xử lý Future "kiểu cũ" dùng .then()
  future.then((ketQua) {
    // Callback này sẽ được gọi khi Future hoàn thành thành công.
    print('Kết quả nhận được: $ketQua');
  }).catchError((loi) {
    // Callback này sẽ được gọi nếu Future hoàn thành với lỗi.
    print('Đã xảy ra lỗi: $loi');
  });
}
```

**Kết quả:**

```
Bắt đầu lấy dữ liệu...
Đã gọi hàm, đang chờ kết quả...
Chương trình vẫn chạy mà không bị block.
(chờ 2 giây)
Kết quả nhận được: Dữ liệu người dùng: John Doe
```

Cách dùng `.then()` khá dài dòng và có thể dẫn đến "Callback Hell" (nhiều callback lồng nhau). May mắn là Dart cung cấp một cú pháp tốt hơn nhiều: `async` và `await`.

---

## 4. `async` và `await` - Cú pháp cho Future

`async` và `await` là hai từ khóa giúp bạn viết code bất đồng bộ trông giống như code đồng bộ, giúp code dễ đọc và dễ hiểu hơn rất nhiều.

-   **`async`**: Đánh dấu một hàm là hàm bất đồng bộ. Một hàm `async` luôn tự động trả về một `Future`.
-   **`await`**: Chỉ có thể được sử dụng bên trong một hàm `async`. Nó sẽ "tạm dừng" việc thực thi của hàm `async` cho đến khi `Future` mà nó đang chờ hoàn thành, sau đó trả về kết quả của `Future` đó.

### Ví dụ sử dụng `async/await`

Hãy viết lại ví dụ ở phần 3 bằng `async/await`.

```dart
// Hàm này vẫn trả về một Future<String> sau 2 giây.
Future<String> layDuLieuNguoiDung() {
  return Future.delayed(Duration(seconds: 2), () => 'Dữ liệu người dùng: John Doe');
}

// Đánh dấu hàm main là async để có thể dùng await bên trong.
void main() async {
  print('Bắt đầu lấy dữ liệu...');
  print('Đang chờ kết quả...');

  // Dùng await để chờ Future hoàn thành và lấy giá trị.
  // Code trông giống như code đồng bộ!
  String ketQua = await layDuLieuNguoiDung();

  // Dòng này chỉ được thực thi sau khi await ở trên hoàn thành.
  print('Kết quả nhận được: $ketQua');
  print('Chương trình kết thúc.');
}
```

**Kết quả:**

```
Bắt đầu lấy dữ liệu...
Đang chờ kết quả...
(chờ 2 giây)
Kết quả nhận được: Dữ liệu người dùng: John Doe
Chương trình kết thúc.
```

So sánh với cách dùng `.then()`, code `async/await` rõ ràng và trực quan hơn hẳn!

**Bài tập 1:** Viết một hàm `Future<String>` tên là `chaoBuoiSang` trả về chuỗi "Chào buổi sáng!" sau 3 giây. Gọi hàm này trong `main` bằng `async/await` và in kết quả ra màn hình.

<details>
<summary>Nhấn vào đây để xem gợi ý</summary>

```dart
import 'dart:async';

Future<String> chaoBuoiSang() {
  return Future.delayed(Duration(seconds: 3), () => 'Chào buổi sáng!');
}

void main() async {
  print('Đang chờ lời chào...');
  String loiChao = await chaoBuoiSang();
  print(loiChao);
}
```

</details>

---

## 5. Xử lý lỗi với `try-catch`

Khi bạn `await` một `Future` hoàn thành với lỗi, nó sẽ ném ra (throw) một exception. Để bắt và xử lý exception này, chúng ta có thể sử dụng khối `try-catch` quen thuộc, giống như trong code đồng bộ.

### Ví dụ xử lý lỗi

```dart
// Hàm này sẽ luôn trả về một Future hoàn thành với lỗi.
Future<String> taiDuLieuThatBai() {
  return Future.delayed(Duration(seconds: 2), () {
    throw Exception('Không thể kết nối đến máy chủ!');
  });
}

void main() async {
  print('Đang cố gắng tải dữ liệu...');

  try {
    // Cố gắng await một Future có thể gây lỗi.
    String ketQua = await taiDuLieuThatBai();
    print('Tải thành công: $ketQua');
  } catch (e) {
    // Nếu có lỗi, khối catch sẽ được thực thi.
    print('Đã xảy ra lỗi: $e');
  } finally {
    // Khối finally luôn được thực thi, dù có lỗi hay không.
    print('Hoàn tất quá trình tải dữ liệu.');
  }
}
```

**Kết quả:**

```
Đang cố gắng tải dữ liệu...
(chờ 2 giây)
Đã xảy ra lỗi: Exception: Không thể kết nối đến máy chủ!
Hoàn tất quá trình tải dữ liệu.
```

Việc sử dụng `try-catch` làm cho việc xử lý lỗi trong code bất đồng bộ trở nên tự nhiên và nhất quán với code đồng bộ.

**Bài tập 2:** Sửa đổi **Bài tập 1**. Tạo một hàm `chaoBuoiToi` trả về một `Exception` với thông báo "Trời đã quá tối!" sau 2 giây. Gọi hàm này và dùng `try-catch` để in ra thông báo lỗi.

<details>
<summary>Nhấn vào đây để xem gợi ý</summary>

```dart
import 'dart:async';

Future<String> chaoBuoiToi() {
  return Future.delayed(Duration(seconds: 2), () {
    throw Exception('Trời đã quá tối!');
  });
}

void main() async {
  print('Đang chờ lời chào buổi tối...');
  try {
    String loiChao = await chaoBuoiToi();
    print(loiChao);
  } catch (e) {
    print('Không thể chào: $e');
  }
}
```

</details>

---

## 6. Mini Project: Ứng dụng lấy thông tin thời tiết

**Mô tả:** Chúng ta sẽ xây dựng một chương trình console nhỏ để lấy thông tin thời tiết "giả" từ một hàm mô phỏng việc gọi API.

**Mục tiêu:**

-   Áp dụng `async/await` để xử lý tác vụ bất đồng bộ.
-   Sử dụng `try-catch` để xử lý các trường hợp lỗi có thể xảy ra.
-   Thực hành chuỗi các lệnh gọi `await`.

### Các hàm mô phỏng API

<details>
<summary>Nhấn vào đây để xem code các hàm mô phỏng API</summary>

```dart
// Giả lập việc lấy thành phố của người dùng từ tên đăng nhập
Future<String> layThanhPhoNguoiDung(String tenDangNhap) async {
  print('Đang lấy thông tin thành phố cho "$tenDangNhap"...');
  await Future.delayed(Duration(seconds: 1));
  if (tenDangNhap == 'john_doe') {
    return 'Hà Nội';
  } else {
    throw 'Người dùng không tồn tại';
  }
}

// Giả lập việc lấy thông tin thời tiết từ tên thành phố
Future<String> layThongTinThoiTiet(String thanhPho) async {
  print('Đang lấy thông tin thời tiết cho $thanhPho...');
  await Future.delayed(Duration(seconds: 2));
  // Giả sử chỉ có 'Hà Nội' là có dữ liệu
  if (thanhPho == 'Hà Nội') {
    return 'Hà Nội: 25°C, trời nắng đẹp';
  } else {
    throw 'Không tìm thấy dữ liệu thời tiết cho $thanhPho';
  }
}
```

</details>

### Xây dựng chương trình chính

Bây giờ, hãy viết hàm `main` để kết hợp các hàm trên.

<details>
<summary>Nhấn vào đây để xem code hoàn chỉnh</summary>

```dart
import 'dart:async';

// (Copy 2 hàm mô phỏng API ở trên vào đây)

// Hàm chính để thực thi luồng công việc
Future<void> hienThiThoiTiet(String tenDangNhap) async {
  try {
    print('--- Bắt đầu lấy thông tin cho $tenDangNhap ---');
    // Bước 1: Lấy thành phố của người dùng
    String thanhPho = await layThanhPhoNguoiDung(tenDangNhap);
    print('Lấy thành phố thành công: $thanhPho');

    // Bước 2: Dùng tên thành phố để lấy thông tin thời tiết
    String thongTin = await layThongTinThoiTiet(thanhPho);
    print('--- Kết quả ---');
    print(thongTin);
  } catch (e) {
    print('--- Đã xảy ra lỗi ---');
    print(e);
  } finally {
    print('--- Hoàn tất ---');
  }
}

void main() async {
  // Kịch bản thành công
  await hienThiThoiTiet('john_doe');

  print('\n=========================\n');

  // Kịch bản thất bại (người dùng không tồn tại)
  await hienThiThoiTiet('jane_doe');
}
```

</details>

---

### Mini Project 2: Giả lập Tải Dữ liệu với Progress Bar

**Mô tả:** Trong thực tế, khi tải dữ liệu lớn, chúng ta thường hiển thị một chỉ báo tiến trình (loading/progress bar) để người dùng biết chương trình vẫn đang hoạt động. Project này sẽ mô phỏng quá trình đó.

**Mục tiêu:**
- Sử dụng `Future` để mô phỏng một tác vụ dài.
- Hiển thị tiến trình đang tải trên cùng một dòng trong console.

<details>
<summary>Nhấn vào đây để xem code hoàn chỉnh</summary>

```dart
import 'dart:io';
import 'dart:async';

// Hàm giả lập tải danh sách sinh viên từ server
Future<List<String>> layDanhSachSinhVien() async {
  List<String> sinhVien = [];
  int total = 10; // Giả sử có 10 sinh viên cần tải

  stdout.write('Đang tải danh sách sinh viên: [');

  for (int i = 0; i < total; i++) {
    // Dừng lại một chút để giả lập việc tải
    await Future.delayed(Duration(milliseconds: 300));
    sinhVien.add('Sinh viên ${i + 1}');
    
    // In ra dấu # để thể hiện tiến trình
    stdout.write('#');
  }

  stdout.write('] 100% \n');
  return sinhVien;
}

void main() async {
  print('Bắt đầu chương trình...');
  List<String> danhSach = await layDanhSachSinhVien();
  print('Tải thành công! Dưới đây là danh sách:');
  danhSach.forEach(print);
}
```

</details>

### Mini Project 3 (Game cho lớp): Đoán Màu Gỡ Bom

**Mô tả:** Đây là một game đơn giản để các nhóm trong lớp thi đấu với nhau. Mục tiêu là "gỡ bom" thành công bằng cách đoán đúng màu bí mật trước khi bom phát nổ. Game này sẽ giúp sinh viên hiểu về `Future.any()`.

**`Future.any()` là gì?**
`Future.any(futures)` nhận vào một danh sách các `Future`. Nó sẽ hoàn thành ngay khi **bất kỳ Future nào** trong danh sách hoàn thành **thành công** đầu tiên, và trả về kết quả của Future đó.

**Luật chơi:**
1.  Chương trình sẽ chọn ngẫu nhiên một màu bí mật từ danh sách: ["đỏ", "xanh", "vàng", "tím", "cam", "hồng"]
2.  Hiển thị danh sách màu cho người chơi
3.  Chương trình sẽ có 2 `Future` chạy đua với nhau:
    *   `quaBom`: Một quả bom sẽ "phát nổ" (Future hoàn thành với lỗi) sau 15 giây
    *   `doMau`: Người chơi được nhập liên tục để đoán màu, nếu đúng thì Future hoàn thành thành công
4.  Nếu người chơi đoán đúng màu trước khi bom nổ, họ thắng
5.  Nếu bom nổ trước, họ thua

<details>
<summary>Nhấn vào đây để xem code hoàn chỉnh</summary>

```dart
import 'dart:io';
import 'dart:async';
import 'dart:math';

// Danh sách màu
final List<String> danhSachMau = ['đỏ', 'xanh', 'vàng', 'tím', 'cam', 'hồng'];

// Future cho quả bom
Future<String> quaBom() {
  const int thoiGianNo = 15; // 15 giây
  print('Bom sẽ nổ sau $thoiGianNo giây! Nhanh lên!');
  return Future.delayed(Duration(seconds: thoiGianNo), () {
    throw Exception('BÙM!!! Bom đã nổ! Game Over!');
  });
}

// Future cho việc đoán màu
Future<String> doMau(String mauBiMat) async {
  while (true) {
    stdout.write('Nhập màu bạn đoán: ');
    String mauDoan = (stdin.readLineSync() ?? '').toLowerCase().trim();
    
    if (mauDoan == mauBiMat) {
      return 'Chính xác! Bạn đã đoán đúng màu "$mauBiMat"! Gỡ bom thành công!';
    } else {
      print('Sai rồi! Thử lại đi!');
    }
  }
}

void main() async {
  print('========== GAME ĐOÁN MÀU GỠ BOM ==========');
  
  // Chọn ngẫu nhiên một màu bí mật
  String mauBiMat = danhSachMau[Random().nextInt(danhSachMau.length)];
  
  print('Danh sách màu: ${danhSachMau.join(", ")}');
  print('Hãy đoán màu bí mật để gỡ bom!\n');
  
  try {
    // Hai future sẽ chạy đua với nhau
    var ketQua = await Future.any([
      quaBom(),
      doMau(mauBiMat),
    ]);

    // Nếu đến được đây, người chơi đã đoán đúng
    print(ketQua);
  } catch (e) {
    // Bom đã nổ
    print(e);
    print('Màu bí mật là: "$mauBiMat"');
  }
}
```

</details>

---

### 7. Bài tập về nhà

**Bài tập 1: Mô phỏng thói quen buổi sáng**

Viết chương trình mô phỏng một thói quen buổi sáng với các bước sau:
-   Tạo hàm `thucDay()` trả về `Future<String>` sau 1 giây với nội dung "Thức dậy lúc 6:00"
-   Tạo hàm `ranMatDanhRang()` trả về `Future<String>` sau 2 giây với nội dung "Rửa mặt và đánh răng xong"
-   Tạo hàm `anSang()` trả về `Future<String>` sau 2 giây với nội dung "Ăn sáng xong"
-   Trong hàm `main` async, gọi lần lượt 3 hàm trên bằng `await` và in ra kết quả của từng bước
-   Cuối cùng in ra "Sẵn sàng đi học!"

<details>
<summary>Nhấn vào đây để xem gợi ý</summary>

```dart
import 'dart:async';

Future<String> thucDay() {
  return Future.delayed(Duration(seconds: 1), () => 'Thức dậy lúc 6:00');
}

Future<String> ranMatDanhRang() {
  return Future.delayed(Duration(seconds: 2), () => 'Rửa mặt và đánh răng xong');
}

Future<String> anSang() {
  return Future.delayed(Duration(seconds: 2), () => 'Ăn sáng xong');
}

void main() async {
  print('=== BẮT ĐẦU BUỔI SÁNG ===');
  
  String buoc1 = await thucDay();
  print(buoc1);
  
  String buoc2 = await ranMatDanhRang();
  print(buoc2);
  
  String buoc3 = await anSang();
  print(buoc3);
  
  print('Sẵn sàng đi học!');
}
```

</details>

**Bài tập 2: Xử lý lỗi khi tải dữ liệu**

Viết chương trình mô phỏng việc tải thông tin học sinh từ server với khả năng bị lỗi:
-   Tạo hàm `taiThongTinHocSinh(String maHocSinh)` trả về `Future<String>`
-   Hàm này sẽ đợi 2 giây, sau đó:
    -   Nếu `maHocSinh` là "HS001", trả về "Nguyễn Văn A - Lớp 10A1"
    -   Nếu `maHocSinh` là "HS002", trả về "Trần Thị B - Lớp 10A2"
    -   Với các mã khác, `throw` một Exception với nội dung "Không tìm thấy học sinh"
-   Trong hàm `main`, sử dụng `try-catch` để gọi hàm này với 3 mã: "HS001", "HS002", "HS999"
-   In ra kết quả hoặc thông báo lỗi tương ứng

<details>
<summary>Nhấn vào đây để xem gợi ý</summary>

```dart
import 'dart:async';

Future<String> taiThongTinHocSinh(String maHocSinh) async {
  print('Đang tải thông tin cho mã $maHocSinh...');
  await Future.delayed(Duration(seconds: 2));
  
  if (maHocSinh == 'HS001') {
    return 'Nguyễn Văn A - Lớp 10A1';
  } else if (maHocSinh == 'HS002') {
    return 'Trần Thị B - Lớp 10A2';
  } else {
    throw Exception('Không tìm thấy học sinh với mã $maHocSinh');
  }
}

void main() async {
  // Test với mã hợp lệ
  try {
    String thongTin1 = await taiThongTinHocSinh('HS001');
    print('Kết quả: $thongTin1\n');
  } catch (e) {
    print('Lỗi: $e\n');
  }
  
  // Test với mã hợp lệ khác
  try {
    String thongTin2 = await taiThongTinHocSinh('HS002');
    print('Kết quả: $thongTin2\n');
  } catch (e) {
    print('Lỗi: $e\n');
  }
  
  // Test với mã không hợp lệ
  try {
    String thongTin3 = await taiThongTinHocSinh('HS999');
    print('Kết quả: $thongTin3\n');
  } catch (e) {
    print('Lỗi: $e\n');
  }
}
```

</details>
