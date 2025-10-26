# Ghi chú Giảng dạy - Bài 7: Class và Object

## 📋 Tổng quan bài học

### **Mục tiêu:**

- Học sinh hiểu và áp dụng được OOP cơ bản trong Dart
- Nắm vững các khái niệm: Class, Object, Properties, Methods
- Biết sử dụng Getter/Setter, Private, Static, Factory constructors

### **Thời lượng:** 180 phút (2 buổi)

- **Buổi 1 (90 phút):** Mục 1-7 (Cơ bản)
- **Buổi 2 (90 phút):** Mục 8-11 (Nâng cao)

---

## 🎯 Buổi 1: OOP Cơ bản (90 phút)

### **Phần 1: Giới thiệu (15 phút)**

**Mục 1-2: Vấn đề và giải pháp**

- ❓ **Câu hỏi mở đầu:** "Làm sao quản lý 100 học sinh với nhiều thông tin?"
- 💡 **Demo:** So sánh Record vs Map vs Class
- 🎯 **Key point:** Class = Dữ liệu + Hành vi

**Hoạt động:**

- Cho học sinh code ví dụ Map với 3 học sinh
- Thảo luận: "Nếu thêm 50 học sinh, code có dễ quản lý không?"

### **Phần 2: Class và Object (20 phút)**

**Mục 3: Class và Object**

- 📚 **Ví dụ thực tế:** "Class = Bản thiết kế nhà, Object = Ngôi nhà thực"
- 💻 **Live coding:** Tạo class `Student` từ đầu
- ✅ **Checkpoint:** Học sinh tạo class `Book` tương tự

**Sai lầm thường gặp:**

- ❌ Nhầm class và object
- ❌ Quên constructor
- ❌ Truy cập thuộc tính không tồn tại

### **Phần 3: Properties và Methods (25 phút)**

**Mục 4-5: Thuộc tính và Phương thức**

- 🔑 **Phân biệt:** Property (là gì?) vs Method (làm gì?)
- 💡 **Ví dụ:** `name` (property) vs `sayHello()` (method)
- 🎮 **Game:** "Đoán xem đây là property hay method?"

**Bài tập ngay lớp:**

```dart
// Tạo class Car với:
// - Properties: brand, speed
// - Methods: accelerate(), brake()
```

### **Phần 4: Từ khóa this (15 phút)**

**Mục 6: Từ khoá this**

- 🎯 **Khi nào dùng:** Tham số trùng tên thuộc tính
- ⚡ **Constructor shorthand:** `Student(this.name, this.age)`
- 🔗 **Method chaining:** `return this;`

**Debug challenge:**

```dart
class Point {
  int x, y;
  Point(int x, int y) {
    x = x; // ❌ Bug này sai ở đâu?
    y = y;
  }
}
```

### **Phần 5: Tạo Instance (15 phút)**

**Mục 7: Tạo instance**

- 🏭 **Constructor types:** Default, Parametrized, Named
- 📦 **Multiple instances:** `List<Student>`
- 🎯 **Best practice:** Named parameters cho clarity

**Mini project:**

```dart
// Tạo 5 học sinh, in ra:
// 1. Danh sách tất cả
// 2. Chỉ học sinh giỏi
// 3. Học sinh có điểm cao nhất
```

---

## 🚀 Buổi 2: OOP Nâng cao (90 phút)

### **Phần 1: Getters và Setters (25 phút)**

**Mục 8: Getters và Setters**

- 🎓 **Tại sao cần:** Validation, Computed properties
- ⚖️ **Trade-off:** Simple property vs Getter/Setter
- 🔒 **Best practice:** Private property + Public getter/setter

**Ví dụ thực tế:**

```dart
// Tính điểm trung bình tự động (getter)
// Kiểm tra tuổi hợp lệ (setter)
// Chuyển đổi nhiệt độ C/F/K
```

**Bài tập thực hành:** Class `Product` (đã có trong bài)

- Cho học sinh làm 15 phút
- Review code một số bạn
- Giải thích sai sót phổ biến

### **Phần 2: Private Properties (20 phút)**

**Mục 9: Private Properties**

- 🔐 **Security mindset:** "Ai có thể thay đổi dữ liệu này?"
- 🎯 **Convention:** `_` prefix
- ⚠️ **Dart quirk:** Private ở file-level, không phải class-level

**Ví dụ an ninh:**

```dart
// BankAccount: không cho thay đổi balance trực tiếp
// UserAccount: khóa sau 3 lần đăng nhập sai
// AttendanceSystem: không cho hack điểm danh
```

**Thảo luận nhóm:**

- "Thuộc tính nào nên private trong class Student?"
- "Tại sao `password` phải private?"

### **Phần 3: Static Members (25 phút)**

**Mục 10: Static Members**

- 🌍 **Khái niệm:** Thuộc về class (global), không phải instance (local)
- 📊 **Use cases:** Counter, Config, Utility functions
- 🔢 **Math demo:** Class `MathHelper` với static methods

**Ví dụ dễ hiểu:**

```dart
// Đếm số học sinh đã tạo (static counter)
// App settings chung (static config)
// Hàm tiện ích (static methods)
```

**Bài tập thực hành:** Class `Car` với static tracking (đã có trong bài)

**Sai lầm thường gặp:**

- ❌ Dùng `this` trong static method
- ❌ Truy cập instance property từ static method
- ❌ Nhầm lẫn static vs instance

### **Phần 4: Factory Constructors (20 phút)**

**Mục 11: Factory Constructors**

- 🏭 **Pattern:** Singleton, Caching, Object pool
- 💰 **Lợi ích:** Tiết kiệm bộ nhớ, kiểm soát instances
- 🎨 **Ví dụ:** Color caching, Database connection pool

**Demo trực quan:**

```dart
// Logger cache: tạo 10 logger cùng tên
// Normal constructor: 10 instances khác nhau
// Factory constructor: 1 instance duy nhất
```

**Bài tập:** Class `Color` với factory caching (đã có trong bài)

---

## 💡 Tips Giảng dạy

### **Học sinh hay mắc lỗi:**

1. ❌ Quên `new` (Dart 2 không cần, nhưng C#/Java cần)
2. ❌ Nhầm `.` và `()` khi gọi getter/method
3. ❌ Dùng static method như instance method
4. ❌ Truy cập private từ file khác

### **Cách giải thích hay:**

- 🏠 **Class = Blueprint nhà, Object = Ngôi nhà**
- 🍪 **Class = Khuôn bánh, Object = Chiếc bánh**
- 📋 **Getter = Đọc sổ tay, Setter = Viết vào sổ tay**
- 🌍 **Static = Thông tin chung cả lớp, Instance = Thông tin cá nhân**

### **Hoạt động tương tác:**

1. **Code đoán lỗi:** Cho code sai, học sinh tìm bug
2. **Design challenge:** "Thiết kế class cho app quản lý..."
3. **Peer review:** Học sinh review code của nhau
4. **Live refactoring:** Chuyển từ Map sang Class

---

## 📝 Đánh giá

### **Checkpoint nhanh (5-10 phút):**

- ❓ "Getter và Property khác nhau thế nào?"
- ❓ "Khi nào dùng static?"
- ❓ "Factory constructor khác constructor thường như thế nào?"

### **Bài tập về nhà phân cấp:**

- **Bài 1-2:** Cơ bản (bắt buộc tất cả)
- **Bài 3-4:** Trung bình (học sinh khá)
- **Bài 5-7:** Nâng cao (học sinh giỏi)
- **Bài 8-9:** Thử thách (tự nguyện)

### **Rubric đánh giá:**

| Tiêu chí          | Yếu (0-5)        | TB (6-7)        | Khá (8-9)          | Giỏi (10)             |
| :---------------- | :--------------- | :-------------- | :----------------- | :-------------------- |
| **Class design**  | Thiếu properties | Đủ properties   | + Methods hợp lý   | + Encapsulation tốt   |
| **Getter/Setter** | Không dùng       | Dùng cơ bản     | + Validation       | + Computed properties |
| **Private**       | Không bảo vệ     | Một vài private | Hầu hết đúng       | Thiết kế bảo mật tốt  |
| **Static**        | Không dùng       | Dùng sai        | Dùng đúng          | + Utility methods     |
| **Factory**       | Không dùng       | Hiểu khái niệm  | Implement đơn giản | + Caching/Singleton   |

---

## 🎯 Q&A Thường gặp

### **Q: Khi nào dùng Getter thay vì public property?**

A: Khi cần tính toán (ví dụ: `average`), hoặc khi muốn read-only.

### **Q: Private có thực sự an toàn không?**

A: Trong Dart, chỉ an toàn ở file-level. Nếu cần bảo mật hơn, tách file riêng.

### **Q: Static method có thể gọi instance method không?**

A: Không! Static không có `this`, không biết instance nào.

### **Q: Factory constructor có tạo object mới không?**

A: Không nhất thiết. Có thể return object cũ (cache).

### **Q: Có thể có nhiều Factory constructor không?**

A: Có! Dùng named factory: `Color.red()`, `Color.fromHex()`.

---

## 🔧 Troubleshooting

### **Lỗi compilation thường gặp:**

```dart
// ❌ Cannot access this in static method
class MyClass {
  int value = 10;
  static void test() {
    print(this.value); // ❌ Lỗi!
  }
}

// ✅ Fix: Không dùng instance member trong static
class MyClass {
  static int value = 10;
  static void test() {
    print(value); // ✅ OK
  }
}
```

```dart
// ❌ Private member accessed from another file
// file1.dart
class MyClass {
  int _value = 10;
}

// file2.dart
var obj = MyClass();
print(obj._value); // ❌ Lỗi nếu khác file!
```

---

## 📚 Tài liệu tham khảo

- [Dart Language Tour - Classes](https://dart.dev/language/classes)
- [Effective Dart: Design](https://dart.dev/effective-dart/design)
- [Flutter Widget Catalog](https://docs.flutter.dev/ui/widgets) - Ví dụ OOP thực tế

---

_"Dạy OOP không chỉ là dạy syntax, mà là dạy cách tư duy thiết kế phần mềm!"_ 🎓✨
