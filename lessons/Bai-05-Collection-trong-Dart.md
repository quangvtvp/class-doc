# Bài 5: Collection trong Dart

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

## 2. List (Danh sách) - Kiểu Collection phổ biến nhất

### 2.1. List là gì?

**List** là một danh sách có thứ tự các phần tử, cho phép lưu trữ nhiều giá trị cùng kiểu dữ liệu. List trong Dart:

- Có thứ tự (index bắt đầu từ 0)
- Cho phép trùng lặp
- Có thể thay đổi kích thước

 ![Cấu trúc List với index](https://media.geeksforgeeks.org/wp-content/uploads/CommonArticleDesign3-min.png)
*Hình: Cấu trúc của List với index bắt đầu từ 0*

### 2.2. Khai báo và khởi tạo List

```dart
// Cách 1: Khai báo List rỗng
List<String> danhSachMonHoc = [];

// Cách 2: Khai báo với giá trị ban đầu
List<String> monHocHocKy1 = ['Toán', 'Lý', 'Hóa', 'Văn', 'Anh'];

// Cách 3: Sử dụng từ khóa var (Dart tự suy luận kiểu)
var diemSo = [8.5, 9.0, 7.5, 8.0, 9.5];

// Cách 4: List với kiểu dynamic (chứa nhiều kiểu dữ liệu)
List<dynamic> thongTinHocSinh = ['Nguyễn Văn A', 16, true];
```

**Ví dụ thực hành:**

```dart
void main() {
  // Tạo danh sách môn học
  List<String> monHoc = ['Toán', 'Lý', 'Hóa', 'Sinh', 'Văn'];

  print('Danh sách môn học: $monHoc');
  print('Số lượng môn học: ${monHoc.length}');
}
```

### 2.3. Truy cập phần tử trong List

```dart
void main() {
  List<String> monHoc = ['Toán', 'Lý', 'Hóa', 'Sinh', 'Văn'];

  // Truy cập phần tử theo index (bắt đầu từ 0)
  print('Môn học đầu tiên: ${monHoc[0]}');        // Toán
  print('Môn học thứ hai: ${monHoc[1]}');         // Lý
  print('Môn học cuối cùng: ${monHoc[monHoc.length - 1]}'); // Văn

  // Sử dụng first và last
  print('Môn đầu: ${monHoc.first}');              // Toán
  print('Môn cuối: ${monHoc.last}');              // Văn
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

### 2.4. Thao tác với List

#### a) Thêm phần tử

```dart
void main() {
  List<String> monHoc = ['Toán', 'Lý'];

  // Thêm một phần tử vào cuối
  monHoc.add('Hóa');
  print('Sau khi thêm Hóa: $monHoc');

  // Thêm nhiều phần tử
  monHoc.addAll(['Sinh', 'Văn']);
  print('Sau khi thêm Sinh, Văn: $monHoc');

  // Chèn phần tử vào vị trí cụ thể
  monHoc.insert(1, 'Địa');
  print('Sau khi chèn Địa vào vị trí 1: $monHoc');
}
```

#### b) Xóa phần tử

```dart
void main() {
  List<String> monHoc = ['Toán', 'Lý', 'Hóa', 'Sinh', 'Văn'];

  // Xóa theo giá trị
  monHoc.remove('Hóa');
  print('Sau khi xóa Hóa: $monHoc');

  // Xóa theo index
  monHoc.removeAt(0);
  print('Sau khi xóa phần tử đầu tiên: $monHoc');

  // Xóa phần tử cuối
  monHoc.removeLast();
  print('Sau khi xóa phần tử cuối: $monHoc');

  // Xóa tất cả
  monHoc.clear();
  print('Sau khi xóa tất cả: $monHoc');
}
```

#### c) Sửa đổi phần tử

```dart
void main() {
  List<String> monHoc = ['Toán', 'Lý', 'Hóa'];

  // Sửa phần tử theo index
  monHoc[1] = 'Vật Lý';
  print('Sau khi sửa: $monHoc');
}
```

### 2.5. Duyệt List

#### a) Sử dụng vòng lặp for thông thường

```dart
void main() {
  List<String> monHoc = ['Toán', 'Lý', 'Hóa', 'Sinh'];

  print('Danh sách môn học:');
  for (int i = 0; i < monHoc.length; i++) {
    print('${i + 1}. ${monHoc[i]}');
  }
}
```

#### b) Sử dụng for-in loop

```dart
void main() {
  List<String> monHoc = ['Toán', 'Lý', 'Hóa', 'Sinh'];

  print('Danh sách môn học:');
  for (String mon in monHoc) {
    print('- $mon');
  }
}
```

#### c) Sử dụng forEach

```dart
void main() {
  List<String> monHoc = ['Toán', 'Lý', 'Hóa', 'Sinh'];

  print('Danh sách môn học:');
  monHoc.forEach((mon) => print('* $mon'));
}
```

**Bài tập 2:** Tạo một `List<int>` chứa điểm số của 5 bài kiểm tra. Sau đó:

1.  In ra điểm cao nhất và thấp nhất.
2.  Thêm điểm của bài kiểm tra thứ 6.
3.  Tính điểm trung bình của tất cả các bài kiểm tra.

<details>
<summary>Nhấn vào đây để xem gợi ý</summary>

```dart
void main() {
  // Tạo list chứa điểm 5 bài kiểm tra
  List<int> diemKiemTra = [8, 7, 9, 6, 8];
  print('Điểm các bài kiểm tra: $diemKiemTra');

  // 1. Tìm điểm cao nhất và thấp nhất
  int diemCaoNhat = diemKiemTra[0];
  int diemThapNhat = diemKiemTra[0];

  for (int diem in diemKiemTra) {
    if (diem > diemCaoNhat) diemCaoNhat = diem;
    if (diem < diemThapNhat) diemThapNhat = diem;
  }

  print('Điểm cao nhất: $diemCaoNhat');
  print('Điểm thấp nhất: $diemThapNhat');

  // 2. Thêm điểm bài kiểm tra thứ 6
  diemKiemTra.add(10);
  print('Sau khi thêm bài thứ 6: $diemKiemTra');

  // 3. Tính điểm trung bình
  int tongDiem = 0;
  for (int diem in diemKiemTra) {
    tongDiem += diem;
  }
  double diemTrungBinh = tongDiem / diemKiemTra.length;
  print('Điểm trung bình: ${diemTrungBinh.toStringAsFixed(1)}');
}
```

</details>

#### d) Lọc phần tử với `where` (quan trọng)

`where` là một phương thức rất hữu ích để lọc ra các phần tử thỏa mãn điều kiện:

```dart
void main() {
  List<int> diem = [8, 6, 9, 7, 10, 5];

  // Lọc ra các điểm >= 8 (điểm giỏi)
  List<int> diemGioi = diem.where((d) => d >= 8).toList();
  print('Điểm giỏi (>= 8): $diemGioi');

  // Lọc ra các điểm chẵn
  List<int> diemChan = diem.where((d) => d % 2 == 0).toList();
  print('Điểm chẵn: $diemChan');

  // Đếm số điểm >= 8
  int soDiemGioi = diem.where((d) => d >= 8).length;
  print('Có $soDiemGioi điểm đạt loại giỏi');
}
```

### 2.6. Tìm kiếm trong List

```dart
void main() {
  List<String> monHoc = ['Toán', 'Lý', 'Hóa', 'Sinh', 'Văn'];

  // Kiểm tra phần tử có tồn tại
  if (monHoc.contains('Toán')) {
    print('Có môn Toán trong danh sách');
  }

  // Tìm vị trí của phần tử
  int viTri = monHoc.indexOf('Hóa');
  if (viTri != -1) {
    print('Môn Hóa ở vị trí: $viTri');
  } else {
    print('Không tìm thấy môn Hóa');
  }

  // Tìm kiếm tuyến tính (Linear Search)
  String monCanTim = 'Sinh';
  bool timThay = false;

  for (int i = 0; i < monHoc.length; i++) {
    if (monHoc[i] == monCanTim) {
      print('Tìm thấy $monCanTim ở vị trí $i');
      timThay = true;
      break;
    }
  }

  if (!timThay) {
    print('Không tìm thấy $monCanTim');
  }
}
```

**Bài tập 3:** Tạo danh sách tên học sinh trong lớp, sử dụng `where` để lọc ra những tên có độ dài >= 10 ký tự.

<details>
<summary>Nhấn vào đây để xem gợi ý</summary>

```dart
void main() {
  List<String> danhSachLop = [
    'An', 'Nguyễn Thị Bình', 'Trần Văn Cường', 'Lê Hoa',
    'Phạm Thị Mai Linh', 'Vũ Đức Minh', 'Đỗ Thị Thanh Hương'
  ];

  print('Danh sách lớp: $danhSachLop');

  // Lọc ra những tên có độ dài >= 10 ký tự
  List<String> tenDai = danhSachLop.where((ten) => ten.length >= 10).toList();
  print('Tên dài (>= 10 ký tự): $tenDai');

  // Lọc ra những tên chứa từ "Thị"
  List<String> tenCoThi = danhSachLop.where((ten) => ten.contains('Thị')).toList();
  print('Tên có chứa "Thị": $tenCoThi');

  print('Có ${tenDai.length} bạn có tên dài >= 10 ký tự');
}
```

</details>

### 2.7. Các phương thức hữu ích khác của List (tham khảo)

```dart
void main() {
  List<int> diem = [8, 6, 9, 7, 10, 5];

  // Độ dài
  print('Số lượng điểm: ${diem.length}');

  // Kiểm tra rỗng
  print('Danh sách có rỗng không: ${diem.isEmpty}');
  print('Danh sách có phần tử không: ${diem.isNotEmpty}');

  // Chuyển thành chuỗi
  print('Điểm dưới dạng chuỗi: ${diem.join(', ')}');

  // Đảo ngược
  List<int> diemDaoNguoc = diem.reversed.toList();
  print('Điểm đảo ngược: $diemDaoNguoc');
}
```

```dart
void main() {
  List<int> diem = [8, 6, 9, 7, 10, 5];

  // Sắp xếp
  // sort() - sắp xếp List theo thứ tự tăng dần (từ nhỏ đến lớn)
  // Không cần tham số, sử dụng thứ tự tự nhiên của kiểu dữ liệu
  diem.sort();
  print('Điểm sau khi sắp xếp: $diem');

  // Sắp xếp giảm dần
  // sort() với hàm so sánh tùy chỉnh
  // (a, b) => b.compareTo(a) - đây là cú pháp lambda (arrow function)
  // => được gọi là "arrow operator" (toán tử mũi tên)
  // Cú pháp: (tham số) => biểu thức trả về
  // Lambda function là cách viết rút gọn của function, không cần từ khóa function
  // Ở đây: nhận 2 tham số a, b và trả về kết quả của b.compareTo(a)
  // Nếu b > a thì compareTo trả về số dương → sắp xếp giảm dần
  diem.sort((a, b) => b.compareTo(a));
  print('Điểm sắp xếp giảm dần: $diem');

  // Biến đổi phần tử với map
  // map() - biến đổi từng phần tử trong List thành giá trị mới
  // (d) => 'Điểm: $d' - hàm lambda nhận mỗi phần tử d và trả về chuỗi "Điểm: {giá trị của d}"
  // .toList() - chuyển kết quả Iterable thành List
  List<String> diemChuoi = diem.map((d) => 'Điểm: $d').toList();
  print('Điểm dạng chuỗi: $diemChuoi');
}
```

### 2.8. Tóm tắt các thao tác với List

| Thao tác             | Mô tả                        | Ví dụ                         |
| :------------------- | :--------------------------- | :---------------------------- |
| **Lấy số lượng**     | `length`                     | `monHoc.length` (kết quả: 5)  |
| **Truy cập**         | `list[index]`                | `monHoc[0]` (kết quả: 'Toán') |
| **Thêm vào cuối**    | `add()`                      | `monHoc.add('Sinh');`         |
| **Sửa phần tử**      | `list[index] = newValue`     | `monHoc[1] = 'Vật Lý';`       |
| **Xóa phần tử**      | `remove()` hoặc `removeAt()` | `monHoc.remove('Hóa');`       |
| **Kiểm tra tồn tại** | `contains()`                 | `monHoc.contains('Toán')`     |
| **Tìm vị trí**       | `indexOf()`                  | `monHoc.indexOf('Lý')`        |
| **Sắp xếp**          | `sort()`                     | `monHoc.sort();`              |
| **Lọc phần tử**      | `where()`                    | `diem.where((d) => d >= 8)`   |

---

## 3. Set - Tập hợp không trùng lặp

### 3.1. Set là gì?

**Set** là một tập hợp các phần tử duy nhất (không trùng lặp). Set khác với List:

- Không có thứ tự cố định
- Không cho phép trùng lặp
- Tốc độ tìm kiếm nhanh hơn

### 3.2. Khi nào sử dụng Set?

Sử dụng Set khi:

- Cần đảm bảo không có phần tử trùng lặp
- Cần kiểm tra sự tồn tại của phần tử nhanh chóng
- Thực hiện các phép toán tập hợp (giao, hợp, hiệu)

### 3.3. Khai báo và sử dụng Set

```dart
void main() {
  // Tạo Set rỗng
  Set<String> monHocDaHoc = <String>{};

  // Tạo Set với giá trị ban đầu
  Set<String> monHocYeuThich = {'Toán', 'Lý', 'Tin học'};

  // Thêm phần tử
  monHocDaHoc.add('Toán');
  monHocDaHoc.add('Lý');
  monHocDaHoc.add('Toán'); // Sẽ không được thêm vì đã tồn tại

  print('Môn học đã học: $monHocDaHoc'); // {Toán, Lý}

  // Thêm nhiều phần tử
  monHocDaHoc.addAll({'Hóa', 'Sinh'});
  print('Sau khi thêm: $monHocDaHoc');
}
```

### 3.4. Thao tác với Set

```dart
void main() {
  Set<String> monHoc = {'Toán', 'Lý', 'Hóa'};

  // Kiểm tra phần tử
  print('Có môn Toán: ${monHoc.contains('Toán')}');

  // Xóa phần tử
  monHoc.remove('Hóa');
  print('Sau khi xóa Hóa: $monHoc');

  // Duyệt Set
  for (String mon in monHoc) {
    print('Môn học: $mon');
  }

  // Chuyển Set thành List
  List<String> danhSach = monHoc.toList();
  print('Chuyển thành List: $danhSach');
}
```

### 3.5. Phép toán trên Set

```dart
void main() {
  Set<String> monHocLop10 = {'Toán', 'Lý', 'Hóa', 'Sinh'};
  Set<String> monHocYeuThich = {'Toán', 'Tin học', 'Thể dục'};

  // Phép hợp (Union) - Gộp hai tập hợp
  Set<String> tatCaMonHoc = monHocLop10.union(monHocYeuThich);
  print('Tất cả môn học: $tatCaMonHoc');

  // Phép giao (Intersection) - Phần tử chung
  Set<String> monChung = monHocLop10.intersection(monHocYeuThich);
  print('Môn học chung: $monChung');

  // Phép hiệu (Difference) - Phần tử chỉ có trong tập hợp đầu
  Set<String> monKhac = monHocLop10.difference(monHocYeuThich);
  print('Môn chỉ có trong lớp 10: $monKhac');
}
```

**Bài tập 4:** Tạo hai `Set` chứa sở thích của hai bạn, tìm sở thích chung.

<details>
<summary>Nhấn vào đây để xem gợi ý</summary>

```dart
void main() {
  Set<String> soThichAn = {'đá bóng', 'đọc sách', 'nghe nhạc', 'du lịch'};
  Set<String> soThichBinh = {'đá bóng', 'chơi game', 'nghe nhạc', 'xem phim'};

  print('Sở thích An: $soThichAn');
  print('Sở thích Bình: $soThichBinh');

  // Tìm sở thích chung
  Set<String> soThichChung = soThichAn.intersection(soThichBinh);
  print('Sở thích chung: $soThichChung');

  // Sở thích riêng của An
  Set<String> soThichRiengAn = soThichAn.difference(soThichBinh);
  print('Sở thích riêng của An: $soThichRiengAn');
}
```

</details>

### 3.6. Các phương thức hữu ích khác của Set (tham khảo)

```dart
void main() {
  Set<String> monHoc = {'Toán', 'Lý', 'Hóa', 'Sinh'};

  // Số lượng phần tử
  print('Số môn học: ${monHoc.length}');

  // Kiểm tra rỗng
  print('Set có rỗng không: ${monHoc.isEmpty}');
  print('Set có phần tử không: ${monHoc.isNotEmpty}');

  // Chuyển thành List để sắp xếp
  List<String> danhSachSapXep = monHoc.toList();
  danhSachSapXep.sort();
  print('Môn học theo alphabet: $danhSachSapXep');

  // Tạo Set mới từ List đã sắp xếp
  Set<String> monHocSapXep = danhSachSapXep.toSet();
  print('Set đã sắp xếp: $monHocSapXep');
}
```

### 3.7. Tóm tắt các thao tác với Set

| Thao tác         | Mô tả            | Ví dụ                            |
| :--------------- | :--------------- | :------------------------------- |
| **Thêm phần tử** | `add()`          | `monHoc.add('Sinh');`            |
| **Xóa phần tử**  | `remove()`       | `monHoc.remove('Hóa');`          |
| **Kiểm tra**     | `contains()`     | `monHoc.contains('Toán')` (true) |
| **Lấy số lượng** | `length`         | `monHoc.length` (kết quả: 3)     |
| **Phép hợp**     | `union()`        | `setA.union(setB)`               |
| **Phép giao**    | `intersection()` | `setA.intersection(setB)`        |
| **Phép hiệu**    | `difference()`   | `setA.difference(setB)`          |
| **Chuyển List**  | `toList()`       | `monHoc.toList()`                |

---

## 4. Map - Từ điển Key-Value

### 4.1. Map là gì?

**Map** là một tập hợp các cặp key-value (khóa-giá trị), giống như từ điển trong đời sống:

- **Key** (khóa): duy nhất, dùng để tìm kiếm
- **Value** (giá trị): có thể trùng lặp, là dữ liệu được lưu trữ

![Cấu trúc List trong Dart](https://www.scaler.com/topics/images/iterate-hashmap-in-java_thumbnail.webp)
*Hình: Cấu trúc của Map với cặp key-value*

**Ví dụ thực tế:**

- Tra cứu điểm số theo tên môn học
- Lưu thông tin cá nhân (tên, tuổi, địa chỉ)
- Đếm số lần xuất hiện của từng từ

### 4.2. Khai báo và khởi tạo Map

```dart
void main() {
  // Cách 1: Tạo Map rỗng
  Map<String, double> diemSo = {};

  // Cách 2: Tạo Map với giá trị ban đầu
  Map<String, double> diemHocKy = {
    'Toán': 8.5,
    'Lý': 7.5,
    'Hóa': 9.0,
    'Văn': 8.0
  };

  // Cách 3: Sử dụng var
  var thongTinHocSinh = {
    'ten': 'Nguyễn Văn A',
    'tuoi': 16,
    'lop': '10A1'
  };

  print('Điểm học kỳ: $diemHocKy');
  print('Thông tin học sinh: $thongTinHocSinh');
}
```

### 4.3. Thao tác với Map

#### a) Thêm và sửa phần tử

```dart
void main() {
  Map<String, double> diem = {'Toán': 8.5, 'Lý': 7.5};

  // Thêm phần tử mới
  diem['Hóa'] = 9.0;
  print('Sau khi thêm Hóa: $diem');

  // Sửa phần tử đã có
  diem['Toán'] = 9.5;
  print('Sau khi sửa điểm Toán: $diem');

  // Thêm nhiều phần tử
  diem.addAll({'Sinh': 8.0, 'Văn': 8.5});
  print('Sau khi thêm nhiều môn: $diem');
}
```

#### b) Truy cập phần tử

```dart
void main() {
  Map<String, double> diem = {
    'Toán': 8.5,
    'Lý': 7.5,
    'Hóa': 9.0
  };

  // Truy cập giá trị theo key
  print('Điểm Toán: ${diem['Toán']}');

  // Kiểm tra key có tồn tại không
  if (diem.containsKey('Lý')) {
    print('Điểm Lý: ${diem['Lý']}');
  }

  // Sử dụng phương thức an toàn
  double? diemSinh = diem['Sinh'];
  if (diemSinh != null) {
    print('Điểm Sinh: $diemSinh');
  } else {
    print('Chưa có điểm môn Sinh');
  }
}
```

#### c) Xóa phần tử

```dart
void main() {
  Map<String, double> diem = {
    'Toán': 8.5,
    'Lý': 7.5,
    'Hóa': 9.0,
    'Sinh': 8.0
  };

  // Xóa theo key
  diem.remove('Sinh');
  print('Sau khi xóa Sinh: $diem');

  // Xóa tất cả
  diem.clear();
  print('Sau khi xóa tất cả: $diem');
}
```

### 4.4. Duyệt Map

```dart
void main() {
  Map<String, double> diem = {
    'Toán': 8.5,
    'Lý': 7.5,
    'Hóa': 9.0,
    'Văn': 8.0
  };

  // Cách 1: Duyệt qua các key
  print('=== Duyệt qua keys ===');
  for (String mon in diem.keys) {
    print('$mon: ${diem[mon]}');
  }

  // Cách 2: Duyệt qua các value
  print('\n=== Chỉ xem điểm ===');
  for (double diemMon in diem.values) {
    print('Điểm: $diemMon');
  }

  // Cách 3: Duyệt qua các cặp key-value
  print('\n=== Duyệt entries ===');
  for (MapEntry<String, double> entry in diem.entries) {
    print('${entry.key}: ${entry.value}');
  }

  // Cách 4: Sử dụng forEach
  print('\n=== Sử dụng forEach ===');
  diem.forEach((mon, diemMon) {
    print('$mon có điểm $diemMon');
  });
}
```

### 4.5. Các phương thức hữu ích của Map

```dart
void main() {
  Map<String, double> diem = {
    'Toán': 8.5,
    'Lý': 7.5,
    'Hóa': 9.0,
    'Văn': 8.0,
    'Anh': 7.0
  };

  // Số lượng phần tử
  print('Số môn học: ${diem.length}');

  // Kiểm tra rỗng
  print('Map có rỗng không: ${diem.isEmpty}');

  // Danh sách keys và values
  print('Các môn học: ${diem.keys.toList()}');
  print('Các điểm số: ${diem.values.toList()}');

  // Kiểm tra tồn tại
  print('Có môn Toán: ${diem.containsKey('Toán')}');
  print('Có điểm 9.0: ${diem.containsValue(9.0)}');

  // Tính điểm trung bình
  double tongDiem = 0;
  for (double diemMon in diem.values) {
    tongDiem += diemMon;
  }
  double diemTrungBinh = tongDiem / diem.length;
  print('Điểm trung bình: ${diemTrungBinh.toStringAsFixed(2)}');
}
```

### 4.6. Tóm tắt các thao tác với Map

| Thao tác           | Mô tả              | Ví dụ                                  |
| :----------------- | :----------------- | :------------------------------------- |
| **Truy cập**       | `map[key]`         | `diemHocKy['Toán']` (kết quả: 8.5)     |
| **Thêm/Sửa**       | `map[key] = value` | `diemHocKy['Văn'] = 8.0;`              |
| **Xóa**            | `remove(key)`      | `diemHocKy.remove('Lý');`              |
| **Kiểm tra Key**   | `containsKey(key)` | `diemHocKy.containsKey('Toán')` (true) |
| **Kiểm tra Value** | `containsValue()`  | `diemHocKy.containsValue(8.5)` (true)  |
| **Lấy số lượng**   | `length`           | `diemHocKy.length` (kết quả: 3)        |
| **Lấy các Key**    | `keys`             | `diemHocKy.keys`                       |
| **Lấy các Value**  | `values`           | `diemHocKy.values`                     |
| **Duyệt Map**      | `forEach()`        | `map.forEach((k,v) => print('$k:$v'))` |

**Bài tập 5:** Bài tập đếm số lần xuất hiện của từng từ trong một câu.

<details>
<summary>Nhấn vào đây để xem gợi ý</summary>

```dart
void main() {
  String cau = 'dart là ngôn ngữ lập trình hiện đại dart rất dễ học';

  // Tách câu thành các từ
  List<String> cacTu = cau.split(' ');

  // Tạo Map để đếm
  Map<String, int> demTu = {};

  // Đếm số lần xuất hiện của mỗi từ
  for (String tu in cacTu) {
    if (demTu.containsKey(tu)) {
      demTu[tu] = demTu[tu]! + 1;  // Tăng đếm
    } else {
      demTu[tu] = 1;  // Lần đầu xuất hiện
    }
  }

  // Hiển thị kết quả
  print('Thống kê từ:');
  demTu.forEach((tu, soLan) {
    print('$tu: $soLan lần');
  });
}
```

</details>

---

## 5. So sánh List, Set và Map

<!-- ![So sánh List và Map](images/list-vs-map.png)
*Hình 4: Bảng so sánh trực quan giữa List, Set và Map* -->

| Đặc điểm            | `List`                                      | `Set`                                   | `Map`                                              |
| :------------------ | :------------------------------------------ | :-------------------------------------- | :------------------------------------------------- |
| **Cấu trúc**        | Danh sách có thứ tự                         | Tập hợp không thứ tự                    | Cặp `key: value`                                   |
| **Truy cập**        | Bằng số thứ tự (`index`)                    | Không có index                          | Bằng `key`                                         |
| **Trùng lặp**       | Cho phép trùng lặp                          | Không cho phép trùng lặp                | Key không trùng, Value có thể trùng                |
| **Khi nào dùng?**   | Khi cần danh sách có thứ tự, cho phép trùng | Khi cần đảm bảo phần tử duy nhất        | Khi cần tra cứu thông tin nhanh bằng một định danh |
| **Ví dụ**           | Danh sách lớp, danh sách điểm kiểm tra      | Danh sách môn học duy nhất, từ khóa tag | Danh bạ điện thoại, bảng điểm, thông tin cá nhân   |
| **Tốc độ tìm kiếm** | Chậm (O(n))                                 | Nhanh (O(1))                            | Nhanh (O(1))                                       |

---

## 6. Mini Project: Chương trình Quản lý Môn học

**Mô tả:** Chúng ta sẽ xây dựng một chương trình đơn giản để quản lý điểm các môn học. Chương trình sẽ nhập dữ liệu từ bàn phím và thực hiện các thao tác cơ bản.

**Mục tiêu:**

- Áp dụng `Map` để lưu trữ điểm số theo môn học.
- Áp dụng `List` để lưu trữ danh sách kết quả.
- Thực hành nhập dữ liệu từ console.

### Các tính năng chính của chương trình:

1. **Thêm/Xóa môn học** - Thao tác với Map
2. **Sắp xếp** - Theo tên (alphabet) và theo số tín chỉ
3. **Tìm kiếm** - Tìm môn học theo từ khóa
4. **Thống kê** - Tính toán các chỉ số thống kê
5. **Tìm môn có điểm giỏi** - Tìm các môn có điểm giỏi (>= 8.0)

### Phân tích Mini Project:

- Chúng ta dùng `Map<String, double>` để lưu điểm vì cần **tra cứu điểm theo tên môn**.
- Chúng ta dùng `List<String>` để lưu danh sách các môn giỏi.
- Sử dụng `stdin.readLineSync()` để nhập dữ liệu từ bàn phím.

<details>
<summary>Nhấn vào đây để xem gợi ý</summary>

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
</details>

---

### 7. Bài tập về nhà

**Bài tập 1: Quản lý chi tiêu**

- Tạo một `Map<String, double>` để lưu các khoản chi tiêu trong ngày.
- Tính tổng số tiền đã chi.
- In ra khoản chi nhiều nhất.

<!-- <details>
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

</details> -->

**Bài tập 2: Danh sách yêu thích**

- Tạo một `List<String>` chứa 5 bài hát yêu thích.
- Sắp xếp theo thứ tự alphabet.
- Sử dụng `where` để lọc ra các bài hát có tên dài >= 10 ký tự.

<!-- <details>
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

  // Lọc bài hát có tên dài >= 10 ký tự
  List<String> baiHatDai = baiHatYeuThich.where((bai) => bai.length >= 10).toList();
  print('Bài hát có tên dài: $baiHatDai');
}
```

</details> -->

---

_Chúc các em học tốt! `List` và `Map` là hai công cụ quan trọng nhất trong lập trình. Hãy thực hành nhiều để nắm vững nhé! 💪_

```

```
