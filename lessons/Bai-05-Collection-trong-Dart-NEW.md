# Buổi 5: Collection trong Dart - List và Map

## Mục tiêu bài học

- Hiểu được khái niệm Collection (tập hợp) trong Dart
- Biết cách sử dụng List, Set và Map
- Thực hiện các thao tác cơ bản với Collection
- Áp dụng vào dự án quản lý môn học

---

## 1. Collection là gì?

**Collection** (tập hợp) là một cấu trúc dữ liệu cho phép chúng ta lưu trữ và quản lý nhiều giá trị cùng lúc. Thay vì tạo nhiều biến riêng lẻ, chúng ta có thể nhóm chúng lại trong một Collection.

**Ví dụ thực tế:**

- Danh sách học sinh trong lớp
- Danh sách môn học trong học kỳ
- Tập hợp điểm số của một học sinh
- Từ điển tra cứu điểm số theo tên môn học

Dart có 3 loại Collection chính: **List**, **Set** và **Map**

---

## 2. `List` - Danh sách có thứ tự

`List` là loại Collection phổ biến nhất, dùng để lưu một danh sách các phần tử theo một thứ tự nhất định.

### 2.1. Đặc điểm chính của `List`

- **Có thứ tự**: Mỗi phần tử có một vị trí (gọi là `index`), bắt đầu từ `0`.
- **Truy cập bằng index**: Dễ dàng lấy ra phần tử bất kỳ khi biết vị trí của nó.
- **Cho phép trùng lặp**: Một giá trị có thể xuất hiện nhiều lần trong List.

<!-- ![Cấu trúc List](images/list-structure.png)
*Hình 2: Cấu trúc của List với index bắt đầu từ 0* -->

### 2.2. Cách tạo một `List`

```dart
void main() {
  // Cách 1: Tạo một List rỗng, sau đó thêm phần tử
  List<String> danhSachLop = [];
  danhSachLop.add('An');
  danhSachLop.add('Bình');

  // Cách 2: Tạo List với các giá trị có sẵn
  List<double> diemSo = [10.0, 8.5, 9.0, 7.5];

  // Cách 3: Dùng `var` để Dart tự nhận diện kiểu dữ liệu
  var monHoc = ['Toán', 'Lý', 'Hóa'];

  print('Danh sách lớp: $danhSachLop');
  print('Điểm số: $diemSo');
  print('Môn học: $monHoc');
}
```

### 2.3. Các thao tác cơ bản với `List`

| Thao tác          | Mô tả                        | Ví dụ                         |
| :---------------- | :--------------------------- | :---------------------------- |
| **Lấy số lượng**  | `length`                     | `diemSo.length` (kết quả: 4)  |
| **Truy cập**      | `list[index]`                | `monHoc[0]` (kết quả: 'Toán') |
| **Thêm vào cuối** | `add()`                      | `monHoc.add('Sinh');`         |
| **Sửa phần tử**   | `list[index] = newValue`     | `monHoc[1] = 'Vật Lý';`       |
| **Xóa phần tử**   | `remove()` hoặc `removeAt()` | `monHoc.remove('Hóa');`       |

**Ví dụ tổng hợp:**

```dart
void main() {
  List<String> monHoc = ['Toán', 'Lý', 'Hóa'];
  print('Ban đầu: $monHoc');

  // 1. Thêm môn 'Sinh'
  monHoc.add('Sinh');
  print('Thêm Sinh: $monHoc');

  // 2. Truy cập môn học đầu tiên
  print('Môn đầu tiên: ${monHoc[0]}');

  // 3. Sửa 'Lý' thành 'Vật Lý'
  monHoc[1] = 'Vật Lý';
  print('Sửa Lý: $monHoc');

  // 4. Xóa môn 'Hóa'
  monHoc.remove('Hóa');
  print('Xóa Hóa: $monHoc');

  // 5. In số lượng môn học
  print('Tổng số môn: ${monHoc.length}');
}
```

**Bài tập 1:** Tạo một `List` chứa tên 3 món ăn yêu thích. Sau đó:

1.  In ra món ăn đầu tiên.
2.  Thêm một món ăn nữa vào cuối danh sách.
3.  In ra tổng số món ăn.

<details>
<summary>Nhấn vào đây để xem gợi ý</summary>

```dart
void main() {
  // Tạo list với 3 món ăn
  List<String> monAnYeuThich = ['Phở', 'Bún Chả', 'Nem Rán'];
  print('Danh sách ban đầu: $monAnYeuThich');

  // 1. In ra món ăn đầu tiên
  print('Món ăn đầu tiên: ${monAnYeuThich[0]}');

  // 2. Thêm một món ăn nữa
  monAnYeuThich.add('Bánh Mì');
  print('Danh sách sau khi thêm: $monAnYeuThich');

  // 3. In ra tổng số món ăn
  print('Tổng số món ăn yêu thích: ${monAnYeuThich.length}');
}
```

</details>

### 2.4. Duyệt và sắp xếp `List`

#### Duyệt qua các phần tử

```dart
void main() {
  List<String> monHoc = ['Toán', 'Vật Lý', 'Hóa', 'Sinh'];

  print('--- Danh sách môn học ---');
  for (String mon in monHoc) {
    print('- $mon');
  }

  // Tính tổng điểm
  List<double> diemSo = [8.5, 9.0, 7.0];
  double tong = 0;
  for (double diem in diemSo) {
    tong = tong + diem;
  }
  print('Tổng điểm: $tong');
  print('Điểm trung bình: ${tong / diemSo.length}');
}
```

#### Sắp xếp và tìm kiếm

```dart
void main() {
  List<int> diem = [8, 6, 9, 7, 10, 5];
  print('Trước khi sắp xếp: $diem');

  // Sắp xếp tăng dần
  diem.sort();
  print('Sắp xếp tăng dần: $diem');

  // Tìm kiếm
  if (diem.contains(10)) {
    print('Có điểm 10 trong danh sách');
  }
}
```

---

## 3. `Map` - Từ điển Key-Value

Nếu `List` giống một danh sách được đánh số thứ tự, thì `Map` giống như một **cuốn từ điển** hoặc **danh bạ điện thoại**. Mỗi mục bao gồm một **khóa (key)** và một **giá trị (value)** tương ứng.

### 3.1. Đặc điểm chính của `Map`

- **Cặp Key-Value**: Dữ liệu được lưu dưới dạng `key: value`.
- **Key là duy nhất**: Không thể có 2 key giống nhau trong một Map.
- **Truy cập bằng Key**: Dùng `key` để tìm `value` rất nhanh.

<!-- ![Cấu trúc Map](images/map-structure.png)
*Hình 3: Cấu trúc Map với cặp Key-Value* -->

### 3.2. Cách tạo một `Map`

```dart
void main() {
  // Cách 1: Tạo Map rỗng, sau đó thêm phần tử
  Map<String, String> soDienThoai = {};
  soDienThoai['An'] = '090...';
  soDienThoai['Bình'] = '091...';

  // Cách 2: Tạo Map với các giá trị có sẵn
  Map<String, double> diemHocKy = {
    'Toán': 8.5,
    'Lý': 7.5,
    'Hóa': 9.0,
  };

  print('Danh bạ: $soDienThoai');
  print('Bảng điểm: $diemHocKy');
}
```

### 3.3. Các thao tác cơ bản với `Map`

| Thao tác         | Mô tả              | Ví dụ                                  |
| :--------------- | :----------------- | :------------------------------------- |
| **Truy cập**     | `map[key]`         | `diemHocKy['Toán']` (kết quả: 8.5)     |
| **Thêm/Sửa**     | `map[key] = value` | `diemHocKy['Văn'] = 8.0;`              |
| **Xóa**          | `remove(key)`      | `diemHocKy.remove('Lý');`              |
| **Kiểm tra Key** | `containsKey(key)` | `diemHocKy.containsKey('Toán')` (true) |

**Ví dụ tổng hợp:**

```dart
void main() {
  Map<String, double> diemHocKy = {
    'Toán': 8.5,
    'Lý': 7.5,
  };
  print('Ban đầu: $diemHocKy');

  // 1. Thêm điểm môn Hóa
  diemHocKy['Hóa'] = 9.0;
  print('Thêm Hóa: $diemHocKy');

  // 2. Truy cập điểm Toán
  print('Điểm Toán là: ${diemHocKy['Toán']}');

  // 3. Sửa điểm Lý
  diemHocKy['Lý'] = 8.0;
  print('Sửa điểm Lý: $diemHocKy');

  // 4. Xóa điểm Toán
  diemHocKy.remove('Toán');
  print('Xóa Toán: $diemHocKy');
}
```

**Bài tập 2:** Tạo một `Map` để lưu thông tin của em, bao gồm: `ten`, `lop`, `truong`. Sau đó:

1.  In ra tên lớp của em.
2.  Thêm một thông tin mới: `soThich` với giá trị là sở thích của em.
3.  In ra toàn bộ thông tin.

<details>
<summary>Nhấn vào đây để xem gợi ý</summary>

```dart
void main() {
  // Tạo map chứa thông tin cá nhân
  Map<String, String> thongTinCaNhan = {
    'ten': 'Nguyễn Văn An',
    'lop': '10A1',
    'truong': 'THPT ABC',
  };
  print('Thông tin ban đầu: $thongTinCaNhan');

  // 1. In ra tên lớp
  print('Lớp: ${thongTinCaNhan['lop']}');

  // 2. Thêm sở thích
  thongTinCaNhan['soThich'] = 'Đá bóng';
  print('Thông tin sau khi thêm sở thích: $thongTinCaNhan');

  // 3. In ra toàn bộ thông tin
  print('\n--- Thông tin chi tiết ---');
  thongTinCaNhan.forEach((key, value) {
    print('$key: $value');
  });
}
```

</details>

### 3.4. Duyệt qua các phần tử trong `Map`

```dart
void main() {
  Map<String, double> diemHocKy = {
    'Toán': 8.5,
    'Lý': 7.5,
    'Hóa': 9.0,
  };

  print('--- Bảng điểm chi tiết ---');
  diemHocKy.forEach((monHoc, diem) {
    print('Môn $monHoc có điểm là: $diem');
  });

  // In ra danh sách các môn học
  print('\nCác môn học trong kỳ: ${diemHocKy.keys}');
}
```

---

## 4. Mini Project: Chương trình Quản lý Điểm

**Mô tả:** Chúng ta sẽ xây dựng một chương trình đơn giản để quản lý điểm các môn học. Chương trình sẽ nhập dữ liệu từ bàn phím và thực hiện các thao tác cơ bản.

**Mục tiêu:**
- Áp dụng `Map` để lưu trữ điểm số theo môn học.
- Áp dụng `List` để lưu trữ danh sách kết quả.
- Thực hành nhập dữ liệu từ console.

```dart
import 'dart:io';

void main() {
  // Sử dụng Map để lưu điểm số
  Map<String, double> bangDiem = {};
  
  print('=== CHƯƠNG TRÌNH QUẢN LÝ ĐIỂM ===');
  
  // Nhập số môn học
  print('Nhập số môn học: ');
  int soMon = int.parse(stdin.readLineSync()!);
  
  // Nhập điểm cho từng môn
  for (int i = 0; i < soMon; i++) {
    print('Nhập tên môn học thứ ${i + 1}: ');
    String tenMon = stdin.readLineSync()!;
    
    print('Nhập điểm môn $tenMon: ');
    double diem = double.parse(stdin.readLineSync()!);
    
    // Lưu vào Map
    bangDiem[tenMon] = diem;
  }
  
  // Hiển thị bảng điểm
  print('\n=== BẢNG ĐIỂM ===');
  bangDiem.forEach((mon, diem) {
    print('$mon: $diem điểm');
  });
  
  // Tính điểm trung bình
  double tongDiem = 0;
  for (double diem in bangDiem.values) {
    tongDiem += diem;
  }
  double diemTrungBinh = tongDiem / bangDiem.length;
  print('\nĐiểm trung bình: ${diemTrungBinh.toStringAsFixed(2)}');
  
  // Tìm các môn giỏi (>= 8.0)
  List<String> monGioi = [];
  bangDiem.forEach((mon, diem) {
    if (diem >= 8.0) {
      monGioi.add(mon);
    }
  });
  
  if (monGioi.isNotEmpty) {
    print('Các môn đạt điểm Giỏi: $monGioi');
  } else {
    print('Chưa có môn nào đạt điểm Giỏi (>= 8.0)');
  }
  
  // Tìm kiếm môn học
  print('\nNhập tên môn muốn tìm: ');
  String monCanTim = stdin.readLineSync()!;
  
  if (bangDiem.containsKey(monCanTim)) {
    print('Điểm môn $monCanTim: ${bangDiem[monCanTim]}');
  } else {
    print('Không tìm thấy môn $monCanTim');
  }
}
```

### Phân tích Mini Project:
- Chúng ta dùng `Map<String, double>` để lưu điểm vì cần **tra cứu điểm theo tên môn**.
- Chúng ta dùng `List<String>` để lưu danh sách các môn giỏi.
- Sử dụng `stdin.readLineSync()` để nhập dữ liệu từ bàn phím.

---

## 5. So sánh List và Map

<!-- ![So sánh List và Map](images/list-vs-map.png)
*Hình 4: Bảng so sánh trực quan giữa List và Map* -->

| Đặc điểm          | `List`                                     | `Map`                                               |
| :---------------- | :----------------------------------------- | :-------------------------------------------------- |
| **Cấu trúc**      | Danh sách có thứ tự                        | Cặp `key: value`                                    |
| **Truy cập**      | Bằng số thứ tự (`index`)                   | Bằng `key`                                          |
| **Khi nào dùng?** | Khi cần một danh sách đơn giản, có thứ tự. | Khi cần tra cứu thông tin nhanh bằng một định danh. |
| **Ví dụ**         | Danh sách lớp, danh sách mua sắm.          | Danh bạ điện thoại, bảng điểm, thông tin cá nhân.   |

---

## 6. Bài tập về nhà

**Bài tập 1: Quản lý chi tiêu**
- Tạo một `Map<String, double>` để lưu các khoản chi tiêu trong ngày.
- Tính tổng số tiền đã chi.
- In ra khoản chi nhiều nhất.

<details>
<summary>Nhấn vào đây để xem gợi ý</summary>

```dart
void main() {
  Map<String, double> chiTieu = {
    'ăn sáng': 25000,
    'gửi xe': 5000,
    'mua sách': 150000,
    'ăn trưa': 35000,
  };

  // Tính tổng chi tiêu
  double tong = 0;
  for (double tien in chiTieu.values) {
    tong += tien;
  }
  print('Tổng chi tiêu: $tong');

  // Tìm khoản chi nhiều nhất
  String khoanLonNhat = '';
  double tienLonNhat = 0;
  chiTieu.forEach((khoan, tien) {
    if (tien > tienLonNhat) {
      tienLonNhat = tien;
      khoanLonNhat = khoan;
    }
  });
  print('Khoản chi nhiều nhất: $khoanLonNhat ($tienLonNhat)');
}
```

</details>

**Bài tập 2: Danh sách yêu thích**
- Tạo một `List<String>` chứa 5 bài hát yêu thích.
- Sắp xếp theo thứ tự alphabet.
- Thêm 2 bài hát mới vào danh sách.

<details>
<summary>Nhấn vào đây để xem gợi ý</summary>

```dart
void main() {
  List<String> baiHatYeuThich = [
    'Để Mị nói cho mà nghe',
    'Anh trai say hi', 
    'Bước qua mùa cô đơn',
    'Chúng ta của hiện tại',
    'Em là của anh'
  ];
  
  print('Danh sách ban đầu: $baiHatYeuThich');
  
  // Sắp xếp theo alphabet
  baiHatYeuThich.sort();
  print('Sau khi sắp xếp: $baiHatYeuThich');
  
  // Thêm bài hát mới
  baiHatYeuThich.add('Hoa hải đường');
  baiHatYeuThich.add('Lạc trôi');
  
  print('Danh sách cuối: $baiHatYeuThich');
  print('Tổng số bài hát: ${baiHatYeuThich.length}');
}
```

</details>

---

## 7. Kiến thức tham khảo (Dành cho bạn nào muốn tìm hiểu thêm)

<details>
<summary><strong>1. Set - Tập hợp các phần tử duy nhất</strong></summary>

`Set` là một Collection giống `List` nhưng **không cho phép các phần tử trùng lặp**.

```dart
void main() {
  // Tạo một Set
  Set<String> monHoc = {'Toán', 'Lý', 'Hóa'};

  // Thêm phần tử đã có sẽ không có tác dụng
  monHoc.add('Toán');

  print(monHoc); // Kết quả: {Toán, Lý, Hóa}
}
```

**Khi nào dùng `Set`?** Khi em muốn đảm bảo một danh sách không có giá trị nào bị lặp lại.

</details>

<details>
<summary><strong>2. Các phương thức nâng cao của List</strong></summary>

```dart
void main() {
  List<int> diemSo = [5, 8, 9, 4, 10];

  // Lọc ra các điểm >= 8
  List<int> diemCao = diemSo.where((diem) => diem >= 8).toList();
  print('Điểm cao: $diemCao'); // [8, 9, 10]

  // Chuyển đổi thành chuỗi
  List<String> diemChuoi = diemSo.map((diem) => 'Điểm: $diem').toList();
  print('Điểm dạng chuỗi: $diemChuoi');
}
```

</details>

<details>
<summary><strong>3. Các cách duyệt Map khác</strong></summary>

```dart
void main() {
  Map<String, double> diem = {'Toán': 9.0, 'Lý': 8.0};

  // Duyệt qua keys
  for (var key in diem.keys) {
    print('$key: ${diem[key]}');
  }

  // Duyệt qua entries
  for (var entry in diem.entries) {
    print('${entry.key}: ${entry.value}');
  }
}
```

</details>

---

_Chúc các em học tốt! `List` và `Map` là hai công cụ quan trọng nhất trong lập trình. Hãy thực hành nhiều để nắm vững nhé! 💪_