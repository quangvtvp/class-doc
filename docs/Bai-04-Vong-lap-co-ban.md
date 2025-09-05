# Buổi 4 – Vòng lặp cơ bản (Dart)

## Mục lục

1. [Mục tiêu học tập](#1-mục-tiêu-học-tập)
2. [Kiến thức nhanh](#2-kiến-thức-nhanh)
3. [Cú pháp và cách dùng vòng lặp](#3-cú-pháp-và-cách-dùng-vòng-lặp)
  - [for (cơ bản)](#31-for-cơ-bản)
  - [while](#32-while)
  - [do…while](#33-do…while)
  - [break và continue](#34-break-và-continue)
  - [Vòng lặp lồng nhau](#35-vòng-lặp-lồng-nhau)
4. [Nhập dữ liệu với hàm readLineSync](#4-nhập-dữ-liệu-với-hàm-readlinesync)
5. [Ví dụ thực tế trên lớp](#5-ví-dụ-thực-tế-trên-lớp)
6. [Mini Project](#6-mini-project)
7. [Bài tập tự luyện](#7-bài-tập-tự-luyện)

## 1) Mục tiêu học tập
- Sử dụng được các vòng lặp: `for`, `while`, `do…while`.
- Hiểu cấu trúc vòng lặp: **khởi tạo → điều kiện → bước nhảy**.
- Dùng `break`, `continue`, và vòng lặp lồng nhau (nested loops).
- Ứng dụng: **bảng cửu chương**, **vẽ hình bằng `*`**, **tìm số nguyên tố**.

---

## 2) Kiến thức nhanh
- Vòng lặp cho phép lặp một khối lệnh nhiều lần.
- Lỗi phổ biến:
  - **Off-by-one**: lệch 1 đơn vị (dùng `<` hay `<=`?).
  - **Vòng lặp vô hạn**: quên cập nhật biến đếm hoặc điều kiện dừng không đổi.

---

## 3) Cú pháp và cách dùng vòng lặp

### 3.1 `for` (cơ bản)
```dart
for (var i = 1; i <= 5; i++) {
  print(i);
}
```
- Thích hợp khi biết trước **số lần lặp** hoặc cần **biến đếm**.

### 3.2 `while`
```dart
var i = 1;
while (i <= 5) {
  print(i);
  i++;
}
```
- Kiểm tra điều kiện **trước khi chạy thân**.

### 3.3 `do…while`
```dart
var i = 1;
do {
  print(i);
  i++;
} while (i <= 5);
```
- Luôn chạy thân **ít nhất 1 lần**, rồi mới kiểm tra điều kiện.
### 3.4 `break` và `continue`
#### 3.4.1 `break`
- Dùng để **thoát khỏi vòng lặp** ngay lập tức.
- Ví dụ: Tìm số đầu tiên chia hết cho 3 và 5 trong khoảng từ 1 đến 20.
```dart
for (var i = 1; i <= 20; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    print('Số đầu tiên chia hết cho 3 và 5: $i');
    break; // Thoát vòng lặp ngay khi tìm thấy số phù hợp
  }
}
```
**Kết quả:**  
```
Số đầu tiên chia hết cho 3 và 5: 15
```

#### 3.4.2 `continue`
- Dùng để **bỏ qua phần còn lại của thân vòng lặp** và chuyển sang lần lặp tiếp theo.
- Ví dụ: In ra tất cả các số chẵn từ 1 đến 10.
```dart
for (var i = 1; i <= 10; i++) {
  if (i % 2 != 0) continue; // Bỏ qua các số lẻ
  print(i);
}
```
**Kết quả:**  
```
2
4
6
8
10
```

---

### 3.5 Vòng lặp lồng nhau
- Vòng lặp lồng nhau là vòng lặp bên trong một vòng lặp khác.
- Ví dụ:
```dart
for (var i = 1; i <= 3; i++) {
  for (var j = 1; j <= 3; j++) {
    print('i=$i, j=$j');
  }
}
```
**Kết quả:**  
```
i=1, j=1
i=1, j=2
i=1, j=3
i=2, j=1
i=2, j=2
i=2, j=3
i=3, j=1
i=3, j=2
i=3, j=3
```

---


## 4) Nhập dữ liệu với hàm `readLineSync`
Mẫu đọc số nguyên an toàn trong `main`:
```dart
import 'dart:io';

void main() {
  final raw = stdin.readLineSync() ?? '';
  final n = int.tryParse(raw);
  if (n == null) {
    print('❗ Vui lòng nhập số nguyên hợp lệ.');
    return;
  }
  // Dùng n như bình thường
}
```

---

## 5) Ví dụ thực tế trên lớp

### Ví dụ 1 — Tính tổng 1..n
**Yêu cầu:** Nhập `n (≥1)`, tính `S = 1 + 2 + ... + n`.

```dart
import 'dart:io';

void main() {
  stdout.write('Nhập n (≥1): ');
  final raw = stdin.readLineSync() ?? '';
  final n = int.tryParse(raw);
  if (n == null || n < 1) {
    print('❗ n phải là số nguyên ≥ 1');
    return;
  }

  var sum = 0;
  for (var i = 1; i <= n; i++) {
    sum += i;
  }
  print('Tổng 1..$n = $sum');
}
```

**Giải thích nhanh:** Dùng `for (i=1..n)`. Tránh lỗi off-by-one bằng `i <= n`.

---

### Ví dụ 2 — Giai thừa `n!`
**Yêu cầu:** Nhập `n (0..20)`; tính `n! = 1×2×...×n`.

```dart
import 'dart:io';

void main() {
  stdout.write('Nhập n (0..20): ');
  final raw = stdin.readLineSync() ?? '';
  final n = int.tryParse(raw);
  if (n == null || n < 0 || n > 20) {
    print('❗ n phải trong khoảng 0..20');
    return;
  }

  var fact = 1;
  for (var i = 2; i <= n; i++) {
    fact *= i;
  }
  print('$n! = $fact');
}
```

**Giải thích:** Bắt đầu từ 2 (nhanh hơn). Giới hạn 20 để tránh tràn số.

---

### Ví dụ 3 — Đoán số (do…while)
**Yêu cầu:** Máy “chọn” số bí mật (vd. 7). Người chơi đoán cho tới khi đúng; gợi ý **lớn hơn/nhỏ hơn**.

```dart
import 'dart:io';

void main() {
  const secret = 7;
  int? guess;

  do {
    stdout.write('Đoán số (1..10): ');
    final raw = stdin.readLineSync() ?? '';
    guess = int.tryParse(raw);
    if (guess == null || guess < 1 || guess > 10) {
      print('❗ Nhập số 1..10');
      continue;
    }
    if (guess < secret) print('↑ Lớn hơn đi!');
    else if (guess > secret) print('↓ Nhỏ hơn nhé!');
  } while (guess != secret);

  print('🎉 Chính xác!');
}
```

**Giải thích:** `do…while` giúp **được đoán ít nhất 1 lần** trước khi kiểm tra.

---

### Ví dụ 4 — 5 số chẵn đầu tiên **lớn hơn N**
**Yêu cầu:** Nhập số nguyên `N`, in ra **5 số chẵn đầu tiên > N**.
<details>
<summary>Click to expand the Dart code for "5 số chẵn đầu tiên lớn hơn N"</summary>

```dart
import 'dart:io';

void main() {
  stdout.write('Nhập N: ');
  final raw = stdin.readLineSync() ?? '';
  final N = int.tryParse(raw);
  if (N == null) {
    print('❗ N phải là số nguyên');
    return;
  }

  var found = 0;
  var x = N + 1;
  while (found < 5) {
    if (x % 2 == 0) {
      print(x);
      found++;
    }
    x++;
  }
}
```

</details>

**Giải thích:** Duyệt từ `N+1` tăng dần; gặp số chẵn thì in và đếm đến khi đủ 5.

---

## 6) Mini Project

### 6.1 Danh sách **ĐỀ BÀI** (kèm minh hoạ `*`)

**A) In Bảng Cửu Chương 1..9**

Minh hoạ (một phần, bảng 3):
```
*** BẢNG 3 ***
3 x 1 = 3
3 x 2 = 6
3 x 3 = 9
...
3 x 9 = 27
**************
```

**B) Vẽ Hình bằng dấu `*`**

1) **Hình vuông rỗng** (ví dụ `n = 5`)
```
*****
*   *
*   *
*   *
*****
```

2) **Tam giác vuông (canh trái, n = 5)**
```
*
**
***
****
*****
```

3) **Tam giác cân đầy (n = 5)**
```
    *
   ***
  *****
 *******
*********
```

**C) In các số **nguyên tố** ≤ n**

Minh hoạ (n = 10, `*` đánh dấu vị trí là số nguyên tố):
```
Số:   2 3 4 5 6 7 8 9 10
Đánh: * *   *   *      
```

---
<!--
### 6.2 **Gợi ý lời giải** (mỗi đề 1 chương trình, chỉ dùng `main`)

**A) Bảng cửu chương 1..9 (lồng 2 vòng for)**
```dart
import 'dart:io';

void main() {
  for (var i = 1; i <= 9; i++) {
    print('*** BẢNG $i ***');
    for (var j = 1; j <= 9; j++) {
      print('$i x $j = ${i * j}');
    }
    print('***************');
  }
}
```
*Điểm quan trọng:* Vòng ngoài chọn “bảng” `i`, vòng trong duyệt `j = 1..9`.

---

**B1) Hình vuông rỗng bằng `*`**
```dart
import 'dart:io';

void main() {
  stdout.write('Cạnh n (≥2): ');
  final raw = stdin.readLineSync() ?? '';
  final n = int.tryParse(raw);
  if (n == null || n < 2) {
    print('❗ n phải ≥ 2');
    return;
  }

  for (var i = 1; i <= n; i++) {
    var line = '';
    for (var j = 1; j <= n; j++) {
      final border = (i == 1 || i == n || j == 1 || j == n);
      line += border ? '*' : ' ';
    }
    print(line);
  }
}
```
*Điểm quan trọng:* In `*` ở **biên**; chỗ khác là khoảng trắng.

---

**B2) Tam giác vuông canh trái**
```dart
import 'dart:io';

void main() {
  stdout.write('Cạnh n (≥1): ');
  final raw = stdin.readLineSync() ?? '';
  final n = int.tryParse(raw);
  if (n == null || n < 1) {
    print('❗ n phải ≥ 1');
    return;
  }

  for (var i = 1; i <= n; i++) {
    print('*' * i);
  }
}
```
*Điểm quan trọng:* Mỗi dòng `i` in `i` dấu `*`.

---

**B3) Tam giác cân đầy**
```dart
import 'dart:io';

void main() {
  stdout.write('Chiều cao n (≥1): ');
  final raw = stdin.readLineSync() ?? '';
  final n = int.tryParse(raw);
  if (n == null || n < 1) {
    print('❗ n phải ≥ 1');
    return;
  }

  for (var i = 1; i <= n; i++) {
    final spaces = ' ' * (n - i);
    final stars  = '*' * (2 * i - 1);
    print('$spaces$stars');
  }
}
```
*Điểm quan trọng:* Dòng `i` có `n - i` khoảng trắng + `2*i - 1` dấu `*`.

---

**C) In các số nguyên tố ≤ n (không dùng hàm phụ)**
```dart
import 'dart:io';

void main() {
  stdout.write('Nhập n (≥2): ');
  final raw = stdin.readLineSync() ?? '';
  final n = int.tryParse(raw);
  if (n == null || n < 2) {
    print('❗ n phải ≥ 2');
    return;
  }

  for (var x = 2; x <= n; x++) {
    var isPrime = true;
    for (var d = 2; d * d <= x; d++) { // không cần sqrt
      if (x % d == 0) { isPrime = false; break; }
    }
    if (isPrime) {
      print(x);
    }
  }
}
```
*Điểm quan trọng:* Kiểm tra ước tới **d*d ≤ x** (nhanh hơn nhiều so với thử tới `x-1`).

---
-->

## 7) Bài tập tự luyện
1) **Bảng cửu chương theo hàng ngang:** In bảng 1..9 trên **cùng dòng**, mỗi dòng là một giá trị `j` (dùng canh lề).  
2) **Tam giác rỗng:** Tam giác cân rỗng (chỉ viền `*`, ruột là khoảng trắng).  
3) **Đếm số chữ số của n:** Nhập `n > 0`, đếm số chữ số bằng vòng lặp chia 10.  
4) **Fibonacci ≤ n:** Nhập `n`, in các số Fibonacci ≤ n (dùng `while`).  
5) **Đếm số nguyên tố trong khoảng [a, b]:** Chỉ dùng `main`, lặp `x=a..b` và kiểm tra như phần C.
