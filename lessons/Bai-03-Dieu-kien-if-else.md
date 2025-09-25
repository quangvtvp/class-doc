# Buổi 3 – Điều kiện `if/else` (Dart)

## Mục lục
- [1) Mục tiêu học tập](#1-mục-tiêu-học-tập)
- [2) Kiến thức nền tảng](#2-kiến-thức-nền-tảng)
  - [2.1 Boolean & biểu thức điều kiện](#21-boolean--biểu-thức-điều-kiện)
  - [2.2 Toán tử so sánh](#22-toán-tử-so-sánh)
  - [2.3 Toán tử logic & short-circuit + bảng chân trị](#23-toán-tử-logic--short-circuit--bảng-chân-trị)
- [3) Câu lệnh điều kiện if → if-else → else if → nested if](#3-câu-lệnh-điều-kiện-if--if-else--else-if--nested-if)
  - [3.1 if (đơn giản)](#31-if-đơn-giản)
  - [3.2 if-else](#32-if-else)
  - [3.3 Chuỗi else if](#33-chuỗi-else-if)
  - [3.4 nested if (if lồng nhau)](#34-nested-if-if-lồng-nhau)
- [4) switch-case](#4-switch-case)
  - [4.1 Cú pháp](#41-cú-pháp)
  - [4.2 Ví dụ](#42-ví-dụ)
  - [4.3 Khi nào dùng switch-case vs if-else?](#43-khi-nào-dùng-switch-case-vs-if-else)
- [5) Lấy input từ bàn phím (Keyboard Input)](#5-lấy-input-từ-bàn-phím-keyboard-input)
- [6) Ví dụ thực tế (dùng input từ bàn phím)](#6-ví-dụ-thực-tế-dùng-input-từ-bàn-phím)
  - [Ví dụ 1 — Chào theo giờ](#ví-dụ-1--chào-theo-giờ)
  - [Ví dụ 2 — Đủ tuổi thi bằng lái](#ví-dụ-2--đủ-tuổi-thi-bằng-lái)
  - [Ví dụ 3 — Kiểm tra năm nhuận](#ví-dụ-3--kiểm-tra-năm-nhuận)
  - [Ví dụ 4 — Tính phí vận chuyển theo giá trị giỏ hàng](#ví-dụ-4--tính-phí-vận-chuyển-theo-giá-trị-giỏ-hàng)
  - [Ví dụ 5 — Đánh giá mật khẩu cơ bản](#ví-dụ-5--đánh-giá-mật-khẩu-cơ-bản)
  - [Ví dụ 6 — Giảm giá theo hạng thành viên (switch-case)](#ví-dụ-6--giảm-giá-theo-hạng-thành-viên-switch-case)
  - [Ví dụ 7 — Phân loại BMI](#ví-dụ-7--phân-loại-bmi)
- [7) Bài tập tự luyện (có nhập từ bàn phím)](#7-bài-tập-tự-luyện-có-nhập-từ-bàn-phím)
- [8) Mini Project – Module Xếp Loại Học Lực](#8-mini-project--module-xếp-loại-học-lực)
  - [8.1 Lời giải mẫu (không dùng toán tử ba ngôi)](#81-lời-giải-mẫu-không-dùng-toán-tử-ba-ngôi)
- [9) Tổng kết & Bài tập về nhà](#9-tổng-kết--bài-tập-về-nhà)

---

## 1) Mục tiêu học tập
- Sử dụng được `if`, `if-else`, chuỗi `else if`, **nested if** để điều khiển luồng chương trình.
- Hiểu toán tử so sánh & logic, bảng chân trị, cơ chế short-circuit.
- Biết khi nào dùng `switch-case` thay vì `if-else`.
- Viết chương trình **nhận input từ bàn phím** và xử lý điều kiện.
- Hoàn thành **Mini Project – Xếp loại Học lực** (dùng cho phân tích học tập ở các buổi sau).

---

## 2) Kiến thức nền tảng

### 2.1 Boolean & biểu thức điều kiện
- `bool` chỉ có `true` / `false`.
- Biểu thức trả về `bool`, ví dụ: `age >= 18`, `name.isEmpty`, `score > 8 && score <= 10`.

### 2.2 Toán tử so sánh
| Toán tử | Ý nghĩa           | Ví dụ           |
|--------|--------------------|-----------------|
| `==`   | bằng nhau          | `a == b`        |
| `!=`   | khác nhau          | `a != b`        |
| `>`    | lớn hơn            | `score > 8`     |
| `<`    | nhỏ hơn            | `score < 5`     |
| `>=`   | lớn hơn hoặc bằng  | `age >= 18`     |
| `<=`   | nhỏ hơn hoặc bằng  | `gpa <= 10`     |

> Lưu ý: `=` là **gán**, không phải so sánh. Dart **không có** `===` như JavaScript.

### 2.3 Toán tử logic & short-circuit + bảng chân trị
- `&&` (và), `||` (hoặc), `!` (phủ định).
- Short-circuit:  
  - `A && B`: nếu `A == false` → không cần tính `B`.  
  - `A || B`: nếu `A == true` → không cần tính `B`.

**Bảng chân trị rút gọn**

`A && B`:

| A | B | A && B |
|---|---|--------|
| T | T | T      |
| T | F | F      |
| F | T | F      |
| F | F | F      |

`A || B`:

| A | B | A \|\| B |
|---|---|----------|
| T | T | T        |
| T | F | T        |
| F | T | T        |
| F | F | F        |

`!A`:

| A | !A |
|---|----|
| T | F  |
| F | T  |

---

## 3) Câu lệnh điều kiện `if` → `if-else` → `else if` → nested if

### 3.1 `if` (đơn giản)
**Cú pháp:**
```dart
if (điều_kiện) {
  // chạy khi điều_kiện là true
}
```
**Ví dụ ngắn:** kiểm tra số dương.
```dart
if (x > 0) {
  print('x là số dương');
}
```

### 3.2 `if-else`
**Cú pháp:**
```dart
if (điều_kiện) {
  // khối khi true
} else {
  // khối khi false
}
```
**Mẹo:** Dùng **guard clause** để giảm lồng nhau:
```dart
if (input == null) {
  print('Thiếu dữ liệu');
  return;
}
// xử lý tiếp khi input hợp lệ
```

### 3.3 Chuỗi `else if`
Dùng khi có **nhiều nhánh loại trừ nhau**.
```dart
if (score >= 9.0) {
  print('Xuất sắc');
} else if (score >= 8.0) {
  print('Giỏi');
} else if (score >= 6.5) {
  print('Khá');
} else if (score >= 5.0) {
  print('Trung bình');
} else {
  print('Yếu');
}
```

### 3.4 `nested if` (if lồng nhau)
Dùng khi điều kiện có **cấp bậc** hoặc phụ thuộc:
```dart
if (isLoggedIn) {
  if (isAdmin) {
    print('Chào quản trị viên');
  } else {
    print('Chào người dùng');
  }
} else {
  print('Vui lòng đăng nhập');
}
```
**Lời khuyên:** Hạn chế lồng quá sâu → tách hàm nhỏ, hoặc dùng guard clause.

---

## 4) `switch-case`

### 4.1 Cú pháp
```dart
switch (biếnHoặcBiểuThức) {
  case GIÁ_TRỊ_1:
    // lệnh
    break; // hoặc return/throw
  case GIÁ_TRỊ_2:
    // lệnh
    break;
  default:
    // lệnh mặc định
}
```
- Dùng được với `int`, `String`, `enum`,… (giá trị `case` phải là **hằng**).
- Kết thúc mỗi nhánh bằng `break`/`return`/`throw`.
### 4.2 Ví dụ

```dart
void main() {
  final day = 5; // Ví dụ: giá trị này có thể đến từ một nguồn khác, không phải nhập từ bàn phím.

  switch (day) {
    case 2:
      print('Hôm nay là Thứ Hai.');
      break;
    case 3:
      print('Hôm nay là Thứ Ba.');
      break;
    case 4:
      print('Hôm nay là Thứ Tư.');
      break;
    case 5:
      print('Hôm nay là Thứ Năm.');
      break;
    case 6:
      print('Hôm nay là Thứ Sáu.');
      break;
    case 7:
      print('Hôm nay là Thứ Bảy. Cuối tuần rồi!');
      break;
    case 8:
      print('Hôm nay là Chủ Nhật. Nghỉ ngơi thôi!');
      break;
    default:
      print('Số không hợp lệ. Vui lòng nhập số từ 2 đến 8.');
  }
}
```

### 4.3 Khi nào dùng `switch-case` vs `if-else`?
- **switch-case**: nhiều nhánh so sánh **bằng nhau** trên **cùng một biến** (trạng thái, cấp bậc, ký hiệu). Rõ ràng, dễ đọc, dễ mở rộng.
- **if-else**: so sánh **bất đẳng thức**, dải giá trị, điều kiện phức tạp (kết hợp `&&`, `||`), hoặc nhiều biến tham gia.

---

## 5) Lấy input từ bàn phím (Keyboard Input)

> Khi viết ứng dụng console, việc lấy thông tin từ bàn phím là rất quan trọng. Dưới đây là cách thực hiện cơ bản trong Dart.

### Nhập chuỗi (String)
Để nhập một chuỗi từ bàn phím, sử dụng `stdin.readLineSync()` từ thư viện `dart:io`. Ví dụ:
```dart
import 'dart:io';

void main() {
  print('Nhập tên của bạn:');
  String? name = stdin.readLineSync();
  print('Xin chào, $name!');
}
```
- `stdin.readLineSync()` đọc một dòng từ bàn phím và trả về kiểu `String?` (có thể null).
- Dùng `?.trim()` để loại bỏ khoảng trắng thừa ở đầu/cuối chuỗi.

### Nhập số nguyên (int)
Để nhập số nguyên, cần chuyển đổi chuỗi nhập vào bằng `int.tryParse()`:
```dart
import 'dart:io';

void main() {
  print('Nhập tuổi của bạn:');
  String? input = stdin.readLineSync();
  int? age = int.tryParse(input ?? '');
  if (age == null) {
    print('❗ Vui lòng nhập một số nguyên hợp lệ.');
  } else {
    print('Tuổi của bạn là $age.');
  }
}
```
- `int.tryParse()` trả về `null` nếu chuỗi không thể chuyển thành số nguyên.
- Kiểm tra `null` để xử lý trường hợp nhập sai.

### Nhập số thực (double)
Tương tự, để nhập số thực, sử dụng `double.tryParse()`:
```dart
import 'dart:io';

void main() {
  print('Nhập chiều cao của bạn (m):');
  String? input = stdin.readLineSync();
  double? height = double.tryParse(input?.replaceAll(',', '.') ?? '');
  if (height == null) {
    print('❗ Vui lòng nhập một số thực hợp lệ (vd: 1.75).');
  } else {
    print('Chiều cao của bạn là $height m.');
  }
}
```
- Dùng `replaceAll(',', '.')` để hỗ trợ nhập số với dấu phẩy (phổ biến ở một số quốc gia).

### Kiểm tra giá trị hợp lệ
Khi cần giới hạn giá trị nhập vào, có thể thêm điều kiện kiểm tra:
```dart
import 'dart:io';

void main() {
  print('Nhập điểm (0–10):');
  String? input = stdin.readLineSync();
  double? score = double.tryParse(input ?? '');
  if (score == null || score < 0 || score > 10) {
    print('❗ Điểm phải nằm trong khoảng từ 0 đến 10.');
  } else {
    print('Điểm của bạn là $score.');
  }
}
```
- Kết hợp kiểm tra `null` và khoảng giá trị để đảm bảo đầu vào hợp lệ.
---


## 6) Ví dụ thực tế (dùng input từ bàn phím)

### Yêu cầu
1. **Chào theo giờ:** Viết chương trình in ra lời chào theo khung giờ. Với khung giờ buổi sáng (0–12h) in “Chào buổi sáng”, khung giờ buổi chiều (12–18h) in “Chào buổi chiều”, sau 18h in “Chào buổi tối”.

2. **Đủ tuổi thi bằng lái:** Nhập tuổi từ bàn phím. In “Đủ điều kiện thi bằng lái” nếu tuổi ≥ 18, ngược lại in “Chưa đủ tuổi”.

3. **Kiểm tra năm nhuận:** Nhập năm (dương). In “Năm nhuận” nếu chia hết cho 400 **hoặc** (chia hết cho 4 **và** không chia hết cho 100); ngược lại in “Không nhuận”.

4. **Tính phí vận chuyển:** Nhập tổng tiền (đồng). Nếu `≥ 500.000` miễn phí; nếu `≥ 200.000` phí `15.000`; còn lại `30.000`. In số tiền phí.

5. **Đánh giá mật khẩu:** Nhập mật khẩu. Nếu độ dài < 8 → “Quá ngắn”. Nếu không có **ít nhất 1 số** hoặc **1 chữ hoa** → “Chưa đủ mạnh”. Ngược lại → “Hợp lệ”.

6. **Giảm giá theo hạng thành viên:** Nhập hạng thành viên `bronze/silver/gold/platinum` rồi in phần trăm giảm giá tương ứng: 0/5/10/15%.

7. **Phân loại BMI:** Nhập cân nặng (kg) và chiều cao (m). Tính BMI = kg / (m²). In phân loại: `<18.5`: “Thiếu cân”; `<24.9`: “Bình thường”; `<29.9`: “Thừa cân”; còn lại: “Béo phì”.

---

### Lời giải gợi ý

#### 1. Chào theo giờ
```dart
import 'dart:io';

void main() {
  print('Nhập giờ (0–23): ');
  int? hour = int.tryParse(stdin.readLineSync() ?? '');
  if (hour == null || hour < 0 || hour > 23) {
    print('Giờ không hợp lệ.');
    return;
  }
  if (hour < 12) {
    print('Chào buổi sáng');
  } else if (hour < 18) {
    print('Chào buổi chiều');
  } else {
    print('Chào buổi tối');
  }
}
```

#### 2. Đủ tuổi thi bằng lái
```dart
import 'dart:io';

void main() {
  print('Nhập tuổi: ');
  int? age = int.tryParse(stdin.readLineSync() ?? '');
  if (age == null || age < 0) {
    print('Tuổi không hợp lệ.');
    return;
  }
  if (age >= 18) {
    print('Đủ điều kiện thi bằng lái');
  } else {
    print('Chưa đủ tuổi');
  }
}
```

#### 3. Kiểm tra năm nhuận
```dart
import 'dart:io';

void main() {
  print('Nhập năm (>0): ');
  int? year = int.tryParse(stdin.readLineSync() ?? '');
  if (year == null || year <= 0) {
    print('Năm không hợp lệ.');
    return;
  }
  if ((year % 400 == 0) || (year % 4 == 0 && year % 100 != 0)) {
    print('Năm nhuận');
  } else {
    print('Không nhuận');
  }
}
```

#### 4. Tính phí vận chuyển
```dart
import 'dart:io';

void main() {
  print('Nhập tổng tiền (đ): ');
  double? total = double.tryParse(stdin.readLineSync() ?? '');
  if (total == null || total < 0) {
    print('Tổng tiền không hợp lệ.');
    return;
  }
  double fee;
  if (total >= 500000) {
    fee = 0;
  } else if (total >= 200000) {
    fee = 15000;
  } else {
    fee = 30000;
  }
  print('Phí vận chuyển: ${fee.toStringAsFixed(0)} đ');
}
```

#### 5. Đánh giá mật khẩu
```dart
import 'dart:io';

void main() {
  print('Nhập mật khẩu: ');
  String password = stdin.readLineSync()?.trim() ?? '';
  if (password.length < 8) {
    print('Quá ngắn');
  } else {
    final hasDigit = RegExp(r'\d').hasMatch(password);
    final hasUpper = RegExp(r'[A-Z]').hasMatch(password);
    if (!hasDigit || !hasUpper) {
      print('Chưa đủ mạnh (cần 1 số và 1 chữ hoa)');
    } else {
      print('Hợp lệ');
    }
  }
}
```

#### 6. Giảm giá theo hạng thành viên
```dart
import 'dart:io';

void main() {
  print('Nhập hạng (bronze/silver/gold/platinum): ');
  String tier = stdin.readLineSync()?.trim().toLowerCase() ?? '';
  int discount;
  switch (tier) {
    case 'bronze':
      discount = 0;
      break;
    case 'silver':
      discount = 5;
      break;
    case 'gold':
      discount = 10;
      break;
    case 'platinum':
      discount = 15;
      break;
    default:
      discount = 0;
  }
  print('Giảm giá: $discount%');
}
```

#### 7. Phân loại BMI
```dart
import 'dart:io';

void main() {
  print('Nhập cân nặng (kg): ');
  double? weight = double.tryParse(stdin.readLineSync() ?? '');
  print('Nhập chiều cao (m): ');
  double? height = double.tryParse(stdin.readLineSync() ?? '');
  if (weight == null || weight <= 0 || height == null || height <= 0) {
    print('Dữ liệu không hợp lệ.');
    return;
  }
  double bmi = weight / (height * height);
  if (bmi < 18.5) {
    print('Thiếu cân');
  } else if (bmi < 24.9) {
    print('Bình thường');
  } else if (bmi < 29.9) {
    print('Thừa cân');
  } else {
    print('Béo phì');
  }
  print('BMI: ${bmi.toStringAsFixed(1)}');
}
```

---

## 7) Bài tập tự luyện (có nhập từ bàn phím)
1) **Điểm rèn luyện**: Nhập RL (0–100). In: `Xuất sắc (≥90) / Tốt (80–89) / Khá (65–79) / TB (50–64) / Yếu (<50)`.  
2) **Cước data**: Gói cơ bản 3GB/tháng; vượt ngưỡng tính 20.000đ/GB (làm tròn lên theo 0.1GB). In tổng tiền.  
3) **Thuế TNCN (đơn giản)**: Thu nhập `<11tr`: 0%; 11–20: 5%; 20–32: 10%; >32: 20%. In số thuế.  
4) **Hạnh kiểm (switch)**: Nhập `A/B/C/D` → In “Tốt/Khá/TB/Yếu”.  
5) **Strong password**: ≥10 ký tự, có số, chữ hoa, ký tự đặc biệt. In “Mạnh/Chưa đạt”.  
6) **Cảnh báo tồn kho**: `Nhập số lượng; 0 → “Hết hàng”; <5 → “Sắp hết”; ≥5 → “Đủ hàng”`.  
7) **Ưu tiên hỗ trợ (switch)**: Nhập `Free/Pro/Business/Enterprise` → In thời gian phản hồi cam kết: 72h/24h/8h/2h.

---

## 8) Mini Project – Module Xếp Loại Học Lực
> **Đầu vào:** Điểm số các môn Toán, Văn, Ngoại ngữ và Lịch sử (0–10), chuyên cần (%).  
> **Đầu ra:** GPA (làm tròn 2 chữ số), Xếp loại (Xuất sắc/Giỏi/Khá/TB/Yếu), Đủ điều kiện lên lớp (true/false), Lời khuyên học tập.  
> **Quy tắc gợi ý:**  
> - Xếp loại theo GPA: `≥9.0 XS`, `≥8.0 Giỏi`, `≥6.5 Khá`, `≥5.0 TB`, `<5.0 Yếu`.  
> - **Lên lớp** nếu: `GPA ≥ 5.0` **và** không môn nào `< 3.5` **và** chuyên cần `≥ 80%`.
<!--
### 8.1 Lời giải mẫu 
```dart
import 'dart:io';
import 'dart:math';

void main() {
  // Nhập điểm các môn
  print('Nhập điểm Toán (0–10): ');
  double? math = double.tryParse(stdin.readLineSync() ?? '');
  if (math == null || math < 0 || math > 10) {
    print('Điểm không hợp lệ.');
    return;
  }

  print('Nhập điểm Văn (0–10): ');
  double? literature = double.tryParse(stdin.readLineSync() ?? '');
  if (literature == null || literature < 0 || literature > 10) {
    print('Điểm không hợp lệ.');
    return;
  }

  print('Nhập điểm Ngoại ngữ (0–10): ');
  double? foreignLanguage = double.tryParse(stdin.readLineSync() ?? '');
  if (foreignLanguage == null || foreignLanguage < 0 || foreignLanguage > 10) {
    print('Điểm không hợp lệ.');
    return;
  }

  print('Nhập điểm Lịch sử (0–10): ');
  double? history = double.tryParse(stdin.readLineSync() ?? '');
  if (history == null || history < 0 || history > 10) {
    print('Điểm không hợp lệ.');
    return;
  }

  // Nhập chuyên cần
  print('Nhập chuyên cần (%): ');
  double? attendance = double.tryParse(stdin.readLineSync() ?? '');
  if (attendance == null || attendance < 0 || attendance > 100) {
    print('Chuyên cần không hợp lệ.');
    return;
  }

  // Tính GPA
  double gpa = ((math + literature + foreignLanguage + history) / 4 * 100).roundToDouble() / 100;

  // Xếp loại
  String classification;
  if (gpa >= 9.0) {
    classification = 'Xuất sắc';
  } else if (gpa >= 8.0) {
    classification = 'Giỏi';
  } else if (gpa >= 6.5) {
    classification = 'Khá';
  } else if (gpa >= 5.0) {
    classification = 'Trung bình';
  } else {
    classification = 'Yếu';
  }

  // Kiểm tra điều kiện lên lớp
  bool canPromote = gpa >= 5.0 &&
      math >= 3.5 &&
      literature >= 3.5 &&
      foreignLanguage >= 3.5 &&
      history >= 3.5 &&
      attendance >= 80.0;

  // Lời khuyên học tập
  String advice;
  double minScore = [math, literature, foreignLanguage, history].reduce(min);
  if (gpa < 5.0) {
    advice = 'Nền tảng yếu. Ôn căn bản 45–60 phút/ngày, tập trung vào môn thấp nhất (${minScore.toStringAsFixed(2)}).';
  } else if (gpa < 6.5) {
    advice = 'Cần cải thiện đều. Đặt mục tiêu +1.0 GPA trong 4–6 tuần, tăng luyện bài mức vừa.';
  } else if (gpa < 8.0) {
    advice = 'Khá tốt! Luyện đề nâng cao 1–2 môn sở trường để bứt phá.';
  } else if (gpa < 9.0) {
    advice = 'Rất tốt! Duy trì thói quen học và thử thách đề phân hoá.';
  } else {
    advice = 'Xuất sắc! Có thể hỗ trợ bạn bè hoặc tham gia đội tuyển.';
  }

  // In báo cáo
  print('===== BÁO CÁO HỌC LỰC =====');
  print('- Toán: ${math.toStringAsFixed(2)}');
  print('- Văn: ${literature.toStringAsFixed(2)}');
  print('- Ngoại ngữ: ${foreignLanguage.toStringAsFixed(2)}');
  print('- Lịch sử: ${history.toStringAsFixed(2)}');
  print('Chuyên cần: ${attendance.toStringAsFixed(2)}%');
  print('GPA: ${gpa.toStringAsFixed(2)}');
  print('Xếp loại: $classification');
  print('Đủ điều kiện lên lớp: ${canPromote ? 'Có' : 'Không'}');
  print('Lời khuyên: $advice');
}
```
-->

## 9) Tổng kết & Bài tập về nhà
- Ôn lại: `if`, `if-else`, `else if`, **nested if**, `switch-case`; bảng chân trị; short-circuit.
- **Bài về nhà:**  
  1) Hoàn thiện Mini Project với dữ liệu thực tế của bạn (≥ 5 môn).

