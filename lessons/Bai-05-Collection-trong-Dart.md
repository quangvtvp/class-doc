# Bài 5: Collection trong Dart - Làm việc với tập hợp dữ liệu

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

**Bài tập 1:** Tạo một List chứa tên 5 bạn trong lớp và in ra tên bạn thứ 3.

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

**Bài tập 2:** Tạo một List điểm số, thêm 3 điểm mới, xóa điểm thấp nhất và sửa điểm cao nhất thành 10.

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

**Bài tập 3:** Viết chương trình tìm kiếm tên học sinh trong danh sách và hiển thị vị trí tìm thấy.

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

**Bài tập 4:** Tạo hai Set chứa sở thích của hai bạn, tìm sở thích chung và sở thích riêng của mỗi bạn.

---

## 4. Map - Từ điển Key-Value

### 4.1. Map là gì?

**Map** là một tập hợp các cặp key-value (khóa-giá trị), giống như từ điển trong đời sống:

- **Key** (khóa): duy nhất, dùng để tìm kiếm
- **Value** (giá trị): có thể trùng lặp, là dữ liệu được lưu trữ

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

### 4.6. Ví dụ thực tế: Đếm từ trong câu

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

**Bài tập 5:** Tạo Map lưu thông tin cá nhân (tên, tuổi, lớp, sở thích) và viết chương trình hiển thị thông tin.

**Bài tập 6:** Viết chương trình đếm số lần xuất hiện của mỗi ký tự trong một chuỗi.

---

## 5. Các phương thức hữu ích của List và Set

### 5.1. Phương thức chung

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

### 5.2. Phương thức đặc biệt của List

```dart
void main() {
  List<int> diem = [8, 6, 9, 7, 10, 5];

  // Sắp xếp
  diem.sort();
  print('Điểm sau khi sắp xếp: $diem');

  // Sắp xếp giảm dần
  diem.sort((a, b) => b.compareTo(a));
  print('Điểm sắp xếp giảm dần: $diem');

  // Lọc phần tử
  List<int> diemCao = diem.where((d) => d >= 8).toList();
  print('Điểm cao (>= 8): $diemCao');

  // Biến đổi phần tử
  List<String> diemChuoi = diem.map((d) => 'Điểm: $d').toList();
  print('Điểm dạng chuỗi: $diemChuoi');
}
```

**Bài tập 7:** Tạo danh sách điểm số, sắp xếp từ cao đến thấp và lọc ra những điểm >= 8.

---

## 6. Mini Project: Chương trình Quản lý Môn học (Không dùng Class)

Bây giờ chúng ta sẽ áp dụng kiến thức đã học để tạo một chương trình quản lý môn học đơn giản sử dụng các Collection.

```dart
void main() {
  // Sử dụng Map để lưu thông tin môn học: tên môn -> số tín chỉ
  Map<String, int> danhSachMonHoc = {};

  // Sử dụng Map để lưu điểm số: tên môn -> điểm
  Map<String, double> bangDiem = {};

  print('=== CHƯƠNG TRÌNH QUẢN LÝ MÔN HỌC ===\n');

  // Demo thêm môn học
  themMonHoc(danhSachMonHoc, 'Lập trình cơ bản', 3);
  themMonHoc(danhSachMonHoc, 'Toán cao cấp', 4);
  themMonHoc(danhSachMonHoc, 'Tiếng Anh', 2);
  themMonHoc(danhSachMonHoc, 'Vật lý đại cương', 3);

  // Hiển thị danh sách môn học
  hienThiDanhSachMonHoc(danhSachMonHoc);

  // Thêm điểm cho các môn học
  capNhatDiem(bangDiem, 'Lập trình cơ bản', 8.5);
  capNhatDiem(bangDiem, 'Toán cao cấp', 7.5);
  capNhatDiem(bangDiem, 'Tiếng Anh', 9.0);
  capNhatDiem(bangDiem, 'Vật lý đại cương', 8.0);

  // Hiển thị bảng điểm
  hienThiBangDiem(bangDiem);

  // Sắp xếp môn học theo tên
  sapXepMonHocTheoTen(danhSachMonHoc);

  // Sắp xếp môn học theo số tín chỉ
  sapXepMonHocTheoTinChi(danhSachMonHoc);

  // Tìm kiếm môn học
  timKiemMonHoc(danhSachMonHoc, 'toán');

  // Thống kê
  thongKe(danhSachMonHoc, bangDiem);

  // Xóa môn học
  xoaMonHoc(danhSachMonHoc, bangDiem, 'Vật lý đại cương');

  // Hiển thị kết quả cuối
  hienThiDanhSachMonHoc(danhSachMonHoc);
  thongKe(danhSachMonHoc, bangDiem);
}

// Hàm thêm môn học
void themMonHoc(Map<String, int> danhSach, String tenMon, int soTinChi) {
  danhSach[tenMon] = soTinChi;
  print('✅ Đã thêm môn học: $tenMon ($soTinChi tín chỉ)');
}

// Hàm xóa môn học
void xoaMonHoc(Map<String, int> danhSach, Map<String, double> bangDiem, String tenMon) {
  if (danhSach.containsKey(tenMon)) {
    danhSach.remove(tenMon);
    bangDiem.remove(tenMon); // Xóa luôn điểm số
    print('🗑️ Đã xóa môn học: $tenMon');
  } else {
    print('❌ Không tìm thấy môn học: $tenMon');
  }
}

// Hàm cập nhật điểm
void capNhatDiem(Map<String, double> bangDiem, String tenMon, double diem) {
  bangDiem[tenMon] = diem;
  print('📝 Đã cập nhật điểm $tenMon: $diem');
}

// Hàm hiển thị danh sách môn học
void hienThiDanhSachMonHoc(Map<String, int> danhSach) {
  if (danhSach.isEmpty) {
    print('📋 Danh sách môn học trống!');
    return;
  }

  print('\n📚 === DANH SÁCH MÔN HỌC ===');
  int stt = 1;
  danhSach.forEach((tenMon, soTinChi) {
    print('$stt. $tenMon ($soTinChi tín chỉ)');
    stt++;
  });
}

// Hàm hiển thị bảng điểm
void hienThiBangDiem(Map<String, double> bangDiem) {
  if (bangDiem.isEmpty) {
    print('📊 Bảng điểm trống!');
    return;
  }

  print('\n🎯 === BẢNG ĐIỂM ===');
  bangDiem.forEach((tenMon, diem) {
    String xepLoai = layXepLoai(diem);
    print('• $tenMon: $diem điểm ($xepLoai)');
  });
}

// Hàm lấy xếp loại theo điểm
String layXepLoai(double diem) {
  if (diem >= 9.0) return 'Xuất sắc';
  if (diem >= 8.0) return 'Giỏi';
  if (diem >= 7.0) return 'Khá';
  if (diem >= 5.0) return 'Trung bình';
  return 'Yếu';
}

// Hàm sắp xếp môn học theo tên
void sapXepMonHocTheoTen(Map<String, int> danhSach) {
  // Chuyển thành List để sắp xếp
  List<String> danhSachTen = danhSach.keys.toList();
  danhSachTen.sort(); // Sắp xếp alphabet

  print('\n🔤 === MÔN HỌC THEO THỨ TỰ ALPHABET ===');
  for (String tenMon in danhSachTen) {
    print('• $tenMon (${danhSach[tenMon]} tín chỉ)');
  }
}

// Hàm sắp xếp môn học theo số tín chỉ
void sapXepMonHocTheoTinChi(Map<String, int> danhSach) {
  // Chuyển thành List các MapEntry để sắp xếp
  List<MapEntry<String, int>> danhSachSapXep = danhSach.entries.toList();

  // Sắp xếp theo số tín chỉ
  danhSachSapXep.sort((a, b) => a.value.compareTo(b.value));

  print('\n🔢 === MÔN HỌC THEO SỐ TÍN CHỈ (TĂNG DẦN) ===');
  for (MapEntry<String, int> entry in danhSachSapXep) {
    print('• ${entry.key} (${entry.value} tín chỉ)');
  }
}

// Hàm tìm kiếm môn học
void timKiemMonHoc(Map<String, int> danhSach, String tuKhoa) {
  List<String> ketQua = [];

  // Tìm kiếm không phân biệt hoa thường
  danhSach.keys.forEach((tenMon) {
    if (tenMon.toLowerCase().contains(tuKhoa.toLowerCase())) {
      ketQua.add(tenMon);
    }
  });

  print('\n🔍 === KẾT QUẢ TÌM KIẾM "$tuKhoa" ===');
  if (ketQua.isEmpty) {
    print('❌ Không tìm thấy môn học nào chứa từ khóa "$tuKhoa"');
  } else {
    for (String tenMon in ketQua) {
      print('• $tenMon (${danhSach[tenMon]} tín chỉ)');
    }
  }
}

// Hàm thống kê
void thongKe(Map<String, int> danhSach, Map<String, double> bangDiem) {
  if (danhSach.isEmpty) {
    print('📈 Chưa có dữ liệu để thống kê!');
    return;
  }

  // Thống kê môn học
  int tongSoMon = danhSach.length;
  int tongTinChi = 0;
  for (int tinChi in danhSach.values) {
    tongTinChi += tinChi;
  }
  double trungBinhTinChi = tongTinChi / tongSoMon;

  // Thống kê điểm số
  double tongDiem = 0;
  int soMonCoDiem = bangDiem.length;
  double diemTrungBinh = 0;

  if (soMonCoDiem > 0) {
    for (double diem in bangDiem.values) {
      tongDiem += diem;
    }
    diemTrungBinh = tongDiem / soMonCoDiem;
  }

  print('\n📈 === THỐNG KÊ ===');
  print('📚 Tổng số môn học: $tongSoMon');
  print('🎯 Tổng số tín chỉ: $tongTinChi');
  print('📊 Trung bình tín chỉ/môn: ${trungBinhTinChi.toStringAsFixed(1)}');

  if (soMonCoDiem > 0) {
    print('📝 Số môn có điểm: $soMonCoDiem');
    print('🏆 Điểm trung bình: ${diemTrungBinh.toStringAsFixed(2)}');

    // Tìm điểm cao nhất và thấp nhất
    double diemCaoNhat = bangDiem.values.reduce((a, b) => a > b ? a : b);
    double diemThapNhat = bangDiem.values.reduce((a, b) => a < b ? a : b);

    print('⭐ Điểm cao nhất: $diemCaoNhat');
    print('📉 Điểm thấp nhất: $diemThapNhat');
  }
}

// Hàm tìm môn học có điểm cao nhất
void timMonHocDiemCaoNhat(Map<String, double> bangDiem) {
  if (bangDiem.isEmpty) {
    print('Chưa có điểm nào!');
    return;
  }

  String monDiemCaoNhat = '';
  double diemCaoNhat = 0;

  bangDiem.forEach((tenMon, diem) {
    if (diem > diemCaoNhat) {
      diemCaoNhat = diem;
      monDiemCaoNhat = tenMon;
    }
  });

  print('🏆 Môn học có điểm cao nhất: $monDiemCaoNhat ($diemCaoNhat điểm)');
}
```

### Các tính năng chính của chương trình:

1. **Quản lý danh sách môn học** - Sử dụng Map&lt;String, int&gt;
2. **Quản lý điểm số** - Sử dụng Map&lt;String, double&gt;
3. **Thêm/Xóa môn học** - Thao tác với Map
4. **Sắp xếp** - Theo tên (alphabet) và theo số tín chỉ
5. **Tìm kiếm** - Tìm môn học theo từ khóa
6. **Thống kê** - Tính toán các chỉ số thống kê
7. **Xếp loại điểm** - Phân loại theo thang điểm

````

---

## 7. Bài tập thực hành

### Bài tập 8: Quản lý điểm số
Viết chương trình quản lý điểm số của một học sinh sử dụng Map:
```dart
Map<String, double> diemHocSinh = {};
````

- Thêm điểm các môn học
- Tính điểm trung bình
- Tìm môn có điểm cao nhất và thấp nhất
- Hiển thị các môn có điểm >= 8.0

### Bài tập 9: Danh sách bạn bè

Tạo chương trình quản lý danh sách bạn bè:

```dart
Set<String> danhSachBanBe = {};
Map<String, List<String>> soThichBanBe = {};
```

- Sử dụng Set để tránh trùng tên bạn bè
- Sử dụng Map để lưu sở thích của mỗi bạn
- Thêm/xóa bạn bè và sở thích
- Tìm bạn bè có sở thích chung

### Bài tập 10: Thống kê từ vựng

Viết chương trình phân tích một đoạn văn:

```dart
String doanhVan = "dart là ngôn ngữ lập trình hiện đại...";
```

- Đếm số lần xuất hiện của mỗi từ
- Tìm từ xuất hiện nhiều nhất
- Hiển thị các từ có độ dài >= 5 ký tự
- Sắp xếp từ theo thứ tự alphabet

### Bài tập 11: Quản lý thư viện

Tạo chương trình quản lý thư viện sách đơn giản:

```dart
Map<String, Map<String, dynamic>> thuVien = {};
// Mỗi sách có: tên, tác giả, năm xuất bản, đã mượn chưa
```

- Thêm sách mới
- Mượn/trả sách
- Tìm sách theo tên hoặc tác giả
- Thống kê số sách đã mượn và còn lại

---

## 8. Tóm tắt kiến thức

### So sánh List, Set và Map

| Đặc điểm        | List                       | Set                        | Map                                 |
| --------------- | -------------------------- | -------------------------- | ----------------------------------- |
| **Cấu trúc**    | Danh sách có thứ tự        | Tập hợp không thứ tự       | Cặp key-value                       |
| **Trùng lặp**   | Cho phép                   | Không cho phép             | Key không trùng, Value có thể trùng |
| **Truy cập**    | Theo index [0,1,2...]      | Không có index             | Theo key                            |
| **Sử dụng khi** | Cần thứ tự và trùng lặp    | Cần duy nhất, không thứ tự | Cần tra cứu theo key                |
| **Ví dụ**       | Danh sách điểm theo thứ tự | Danh sách môn học duy nhất | Tra cứu điểm theo môn               |

### Các phương thức quan trọng cần nhớ

**List:**

- `add()`, `addAll()`, `insert()` - Thêm phần tử
- `remove()`, `removeAt()`, `removeLast()` - Xóa phần tử
- `indexOf()`, `contains()` - Tìm kiếm
- `sort()`, `reversed` - Sắp xếp
- `where()`, `map()` - Lọc và biến đổi

**Set:**

- `add()`, `addAll()` - Thêm phần tử
- `remove()`, `clear()` - Xóa phần tử
- `contains()`, `containsAll()` - Kiểm tra tồn tại
- `union()`, `intersection()`, `difference()` - Phép toán tập hợp
- `toList()` - Chuyển sang List

**Map:**

- `map[key] = value` - Thêm/sửa phần tử
- `remove(key)`, `clear()` - Xóa phần tử
- `containsKey()`, `containsValue()` - Kiểm tra tồn tại
- `keys`, `values`, `entries` - Lấy keys, values, entries
- `forEach()` - Duyệt Map

### Khi nào sử dụng Collection nào?

1. **Sử dụng List khi:**

   - Cần lưu trữ dữ liệu có thứ tự
   - Cho phép dữ liệu trùng lặp
   - Cần truy cập theo vị trí (index)
   - Ví dụ: danh sách điểm kiểm tra, lịch sử hoạt động

2. **Sử dụng Set khi:**

   - Cần đảm bảo dữ liệu duy nhất (không trùng)
   - Thực hiện phép toán tập hợp
   - Kiểm tra tồn tại nhanh
   - Ví dụ: danh sách sinh viên, từ khóa tag

3. **Sử dụng Map khi:**
   - Cần tra cứu dữ liệu theo key
   - Lưu trữ cặp dữ liệu có liên quan
   - Cần truy cập nhanh theo key
   - Ví dụ: tra điểm theo môn, thông tin cá nhân

---

## 9. Bài tập về nhà

1. **Mở rộng Chương trình Quản lý Môn học:**

   - Thêm tính năng phân loại môn học (bắt buộc/tự chọn) bằng Map
   - Tính tổng tín chỉ theo từng loại
   - Thêm chức năng lưu lịch sử thay đổi

2. **Tạo Game đoán số nâng cao:**

   - Sử dụng List để lưu lịch sử các lần đoán
   - Sử dụng Set để lưu các số đã đoán (tránh trùng)
   - Sử dụng Map để thống kê số lần đoán theo từng số
   - Hiển thị thống kê chi tiết

3. **Chương trình quản lý lớp học:**

   - Map lưu thông tin học sinh: tên ➜ thông tin cá nhân (tuổi, lớp, điểm TB)
   - List lưu danh sách môn học theo thứ tự
   - Set lưu danh sách học sinh giỏi (điểm TB >= 8.0)
   - Thống kê và báo cáo đa dạng

4. **Ứng dụng từ điển đơn giản:**
   - Map&lt;String, String&gt; để lưu từ vựng Anh-Việt
   - Tìm kiếm từ (không phân biệt hoa thường)
   - Thêm từ mới vào từ điển
   - Thống kê số lượng từ theo từng chữ cái đầu

---

_Chúc các em học tốt! Hãy thực hành nhiều để nắm vững kiến thức về Collection trong Dart. Collection là nền tảng quan trọng để xây dựng các ứng dụng phức tạp hơn._
