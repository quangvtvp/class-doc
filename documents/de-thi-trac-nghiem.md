# Đề Thi Trắc Nghiệm Cuối Khóa: Lập Trình Dart & Flutter Cơ Bản

**Thời gian làm bài:** 15 phút
**Số lượng câu hỏi:** 12 câu (10 câu Dễ, 2 câu Khó)
**Hình thức:** Chọn 1 đáp án đúng nhất (A, B, C hoặc D)

---

## Phần 1: Dart Cơ Bản (Câu 1 - Câu 7)

**Câu 1 (Dễ): Trong ngôn ngữ Dart, cách khai báo biến nào sau đây là ĐÚNG cú pháp để lưu trữ một số nguyên?**
- A. `String age = 18;`
- B. `int age = 18;`
- C. `double age = 18;`
- D. `boolean age = 18;`

**Câu 2 (Dễ): Cho đoạn code sau, kết quả in ra màn hình là gì?**

```dart
int score = 85;
if (score >= 90) {
  print("Xuat sac");
} else if (score >= 80) {
  print("Gioi");
} else {
  print("Kha");
}
```

- A. Xuat sac
- B. Gioi
- C. Kha
- D. Không in ra gì cả

**Câu 3 (Dễ): Vòng lặp `for` dưới đây sẽ in ra chữ "Hello" bao nhiêu lần?**

```dart
for (int i = 0; i < 3; i++) {
  print("Hello");
}
```

- A. 2 lần
- B. 3 lần
- C. 4 lần
- D. Vòng lặp vô hạn (lỗi)

**Câu 4 (Dễ): Cho một danh sách (List) như sau: `List<String> colors = ["Red", "Green", "Blue"];`. Làm thế nào để lấy ra phần tử "Green"?**
- A. `colors[0]`
- B. `colors[1]`
- C. `colors[2]`
- D. `colors["Green"]`

**Câu 5 (Dễ): Khai báo hàm (Function) nào sau đây là ĐÚNG để tính tổng 2 số nguyên và trả về kết quả?**
- A. `void tinhTong(int a, int b) { return a + b; }`
- B. `int tinhTong(int a, int b) { print(a + b); }`
- C. `int tinhTong(int a, int b) { return a + b; }`
- D. `String tinhTong(int a, int b) { return a + b; }`

**Câu 6 (Dễ): Trong Lập trình Hướng đối tượng (OOP), từ khóa `this` thường được sử dụng để làm gì?**
- A. Để tạo một đối tượng (Object) mới.
- B. Để tham chiếu đến chính đối tượng hiện tại đang gọi phương thức hoặc thuộc tính đó.
- C. Để kế thừa từ một lớp (Class) khác.
- D. Để kết thúc một chương trình.

**Câu 7 (Dễ): Khi làm việc với lập trình bất đồng bộ (Asynchronous) trong Dart, từ khóa nào thường đi kèm với `async` để chờ một thao tác hoàn thành (ví dụ: chờ tải dữ liệu từ mạng)?**
- A. `wait`
- B. `delay`
- C. `future`
- D. `await`

---

## Phần 2: Flutter Cơ Bản (Câu 8 - Câu 10)

**Câu 8 (Dễ): Trong Flutter, Widget nào được sử dụng để sắp xếp các Widget con (children) theo chiều dọc (từ trên xuống dưới)?**
- A. `Row`
- B. `Column`
- C. `Container`
- D. `Stack`

**Câu 9 (Dễ): Nếu bạn có một danh sách gồm 1000 mục cần hiển thị trên màn hình và có thể cuộn (scroll) được, Widget nào là lựa chọn TỐT NHẤT để tối ưu hiệu suất?**
- A. `Column`
- B. `Row`
- C. `ListView.builder`
- D. `Container`

**Câu 10 (Dễ): Lệnh nào sau đây được sử dụng để chuyển từ màn hình hiện tại sang một màn hình mới (ví dụ: `DetailScreen`) trong Flutter?**
- A. `Navigator.pop(context);`
- B. `Navigator.push(context, MaterialPageRoute(builder: (context) => DetailScreen()));`
- C. `Navigator.go(DetailScreen());`
- D. `Screen.change(DetailScreen());`

---

## Phần 3: Câu Hỏi Phân Loại (Câu 11 - Câu 12)

**Câu 11 (Khó): Cho đoạn code sau, hàm `tinhTongChan` sẽ trả về giá trị bao nhiêu?**

```dart
int tinhTongChan(List<int> numbers) {
  int sum = 0;
  for (int i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 == 0) {
      sum += numbers[i];
    }
  }
  return sum;
}

void main() {
  List<int> ds = [1, 2, 3, 4, 5];
  print(tinhTongChan(ds));
}
```

- A. 15
- B. 9
- C. 6
- D. Lỗi biên dịch

**Câu 12 (Khó): Khi gọi API (HTTP Request) để lấy dữ liệu từ server, tại sao chúng ta nên đặt đoạn code gọi API vào trong khối lệnh `try-catch`?**
- A. Để làm cho ứng dụng chạy nhanh hơn.
- B. Để bắt và xử lý các lỗi có thể xảy ra (ví dụ: mất kết nối mạng, server lỗi) giúp ứng dụng không bị crash (văng app).
- C. Để tự động kết nối lại mạng nếu bị rớt.
- D. Khối `try-catch` là bắt buộc của ngôn ngữ Dart, nếu không có sẽ báo lỗi cú pháp.

---

## ĐÁP ÁN VÀ GIẢI THÍCH

- **Câu 1: B** (`int` dùng cho số nguyên).
- **Câu 2: B** (85 >= 80 nên lọt vào nhánh `else if` thứ nhất).
- **Câu 3: B** (Vòng lặp chạy với i = 0, 1, 2. Tổng cộng 3 lần).
- **Câu 4: B** (Chỉ số (index) trong List bắt đầu từ 0, nên "Green" ở vị trí số 1).
- **Câu 5: C** (Hàm trả về số nguyên nên kiểu trả về là `int`, và phải có từ khóa `return`).
- **Câu 6: B** (`this` đại diện cho đối tượng hiện tại).
- **Câu 7: D** (`await` luôn đi kèm với hàm được đánh dấu `async`).
- **Câu 8: B** (`Column` sắp xếp dọc, `Row` sắp xếp ngang).
- **Câu 9: C** (`ListView.builder` chỉ render các item hiển thị trên màn hình, rất tối ưu cho danh sách dài).
- **Câu 10: B** (`Navigator.push` dùng để thêm một màn hình mới vào ngăn xếp (stack)).
- **Câu 11: C** (Hàm tính tổng các số chẵn trong mảng. Các số chẵn là 2 và 4. Tổng = 2 + 4 = 6).
- **Câu 12: B** (`try-catch` dùng để bắt ngoại lệ (Exception), giúp kiểm soát lỗi khi gọi API thất bại).
