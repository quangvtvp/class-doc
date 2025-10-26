# 📚 Bảng Tra Cứu Nhanh - Class và Object trong Dart

## 🎯 Khái niệm Cốt lõi

### **Class vs Object**

```dart
// Class = Bản thiết kế
class Student {
  String name;
  int age;
}

// Object = Thực thể từ class
var student1 = Student(); // Object 1
var student2 = Student(); // Object 2
```

---

## 📝 Các Loại Properties

### **1. Public Property**

```dart
class Person {
  String name; // Ai cũng có thể đọc/ghi
}

void main() {
  var p = Person();
  p.name = 'An';  // ✅ OK
  print(p.name);  // ✅ OK
}
```

### **2. Private Property**

```dart
class BankAccount {
  double _balance; // Chỉ đọc/ghi trong file này
}

void main() {
  var acc = BankAccount();
  acc._balance = 1000; // ❌ Lỗi nếu khác file!
}
```

### **3. Getter (Read-only)**

```dart
class Student {
  double math, physics;

  // Getter: tính điểm trung bình
  double get average => (math + physics) / 2;
}

void main() {
  var s = Student();
  s.math = 8.0;
  s.physics = 9.0;
  print(s.average); // 8.5 (tự động tính)
  // s.average = 10; // ❌ Lỗi: không có setter
}
```

### **4. Setter (Write with validation)**

```dart
class Product {
  double _price;

  // Setter: kiểm tra giá hợp lệ
  set price(double value) {
    if (value > 0) {
      _price = value;
    } else {
      print('Giá phải > 0');
    }
  }

  double get price => _price;
}

void main() {
  var p = Product();
  p.price = 100;  // ✅ OK
  p.price = -50;  // ❌ In: "Giá phải > 0"
}
```

---

## 🔧 Các Loại Methods

### **1. Instance Method**

```dart
class Calculator {
  int value = 0;

  // Method thuộc về object
  void add(int n) {
    value += n;
  }
}

void main() {
  var calc1 = Calculator();
  var calc2 = Calculator();

  calc1.add(5);  // calc1.value = 5
  calc2.add(10); // calc2.value = 10 (riêng biệt)
}
```

### **2. Static Method**

```dart
class MathHelper {
  // Method thuộc về class
  static double circleArea(double r) {
    return 3.14 * r * r;
  }
}

void main() {
  // Gọi qua tên class, không cần object
  print(MathHelper.circleArea(5)); // 78.5
}
```

---

## 🏗️ Các Loại Constructors

### **1. Default Constructor**

```dart
class Point {
  double x = 0;
  double y = 0;
}

void main() {
  var p = Point(); // Tự động có constructor rỗng
  print('${p.x}, ${p.y}'); // 0, 0
}
```

### **2. Parameterized Constructor**

```dart
class Point {
  double x, y;

  Point(this.x, this.y); // Constructor có tham số
}

void main() {
  var p = Point(3, 4);
  print('${p.x}, ${p.y}'); // 3, 4
}
```

### **3. Named Constructor**

```dart
class Point {
  double x, y;

  Point(this.x, this.y);

  // Named constructor
  Point.origin() {
    x = 0;
    y = 0;
  }

  Point.same(double value) {
    x = value;
    y = value;
  }
}

void main() {
  var p1 = Point(3, 4);
  var p2 = Point.origin();     // (0, 0)
  var p3 = Point.same(5);       // (5, 5)
}
```

### **4. Factory Constructor**

```dart
class Logger {
  static final Map<String, Logger> _cache = {};
  String name;

  factory Logger(String name) {
    // Kiểm tra cache trước
    if (_cache.containsKey(name)) {
      return _cache[name]!; // Trả về instance cũ
    }

    // Tạo mới nếu chưa có
    var logger = Logger._internal(name);
    _cache[name] = logger;
    return logger;
  }

  Logger._internal(this.name);
}

void main() {
  var log1 = Logger('App'); // Tạo mới
  var log2 = Logger('App'); // Trả về cũ
  print(log1 == log2);      // true (cùng instance)
}
```

---

## ⚡ Static vs Instance

| Tiêu chí         | Instance        | Static                   |
| :--------------- | :-------------- | :----------------------- |
| **Thuộc về**     | Object cụ thể   | Class (chung)            |
| **Truy cập**     | `object.member` | `ClassName.member`       |
| **Dùng `this`**  | ✅ Có           | ❌ Không                 |
| **Mỗi object**   | Giá trị riêng   | Giá trị chung            |
| **Khi nào dùng** | Dữ liệu cá nhân | Config, Counter, Utility |

**Ví dụ:**

```dart
class Student {
  String name;              // Instance: mỗi sinh viên khác nhau
  static int totalStudents = 0; // Static: đếm chung

  Student(this.name) {
    totalStudents++;        // Tăng biến chung
  }

  void sayHello() {         // Instance method
    print('Hi, I am $name');
  }

  static void showTotal() { // Static method
    print('Total: $totalStudents');
  }
}

void main() {
  var s1 = Student('An');
  var s2 = Student('Bình');

  s1.sayHello();            // Hi, I am An
  s2.sayHello();            // Hi, I am Bình

  Student.showTotal();      // Total: 2
}
```

---

## 🎯 Khi Nào Dùng Gì?

### **Getter/Setter vs Public Property**

| Dùng Public Property khi: | Dùng Getter/Setter khi: |
| :------------------------ | :---------------------- |
| Dữ liệu đơn giản          | Cần validation          |
| Không cần validation      | Cần tính toán           |
| Không cần logic đặc biệt  | Muốn read-only          |

**Ví dụ:**

```dart
class Product {
  // Public: không cần validation
  String name;

  // Private + Setter: cần validation
  double _price;
  set price(double v) {
    if (v > 0) _price = v;
  }

  // Getter: tính toán
  String get status => _price > 1000000 ? 'Cao cấp' : 'Bình thường';
}
```

### **Static Method vs Instance Method**

| Dùng Instance Method khi: | Dùng Static Method khi: |
| :------------------------ | :---------------------- |
| Xử lý dữ liệu của object  | Utility function        |
| Cần truy cập `this`       | Không cần `this`        |
| Hành vi riêng từng object | Hành vi chung           |

**Ví dụ:**

```dart
class StringHelper {
  // Static: không cần object
  static String capitalize(String s) {
    return s[0].toUpperCase() + s.substring(1);
  }
}

class Person {
  String name;

  // Instance: cần object để lấy name
  void introduce() {
    print('My name is $name');
  }
}
```

### **Factory vs Normal Constructor**

| Dùng Normal Constructor khi: | Dùng Factory khi:       |
| :--------------------------- | :---------------------- |
| Luôn tạo instance mới        | Cần cache/singleton     |
| Không cần logic phức tạp     | Cần validation phức tạp |
| Đơn giản                     | Trả về subclass         |

**Ví dụ:**

```dart
// Normal: luôn tạo mới
class Point {
  double x, y;
  Point(this.x, this.y);
}

// Factory: cache
class Color {
  static final Map<String, Color> _cache = {};
  int r, g, b;

  factory Color(int r, int g, int b) {
    String key = '$r-$g-$b';
    return _cache.putIfAbsent(key, () => Color._(r, g, b));
  }

  Color._(this.r, this.g, this.b);
}
```

---

## ❌ Lỗi Thường Gặp

### **1. Truy cập this trong static**

```dart
class MyClass {
  int value = 10;

  static void test() {
    print(this.value); // ❌ Lỗi: static không có this
  }
}

// ✅ Fix: Dùng static variable
class MyClass {
  static int value = 10;

  static void test() {
    print(value); // ✅ OK
  }
}
```

### **2. Quên constructor**

```dart
class Person {
  String name;
  int age;
}

void main() {
  var p = Person(); // ❌ Lỗi: name, age chưa khởi tạo
}

// ✅ Fix: Thêm constructor
class Person {
  String name;
  int age;

  Person(this.name, this.age);
}
```

### **3. Gọi getter như method**

```dart
class Student {
  double grade;
  bool get isPassed => grade >= 5.0;
}

void main() {
  var s = Student();
  s.grade = 8.0;

  print(s.isPassed());  // ❌ Lỗi: getter không có ()
  print(s.isPassed);    // ✅ OK
}
```

### **4. Private từ file khác**

```dart
// file1.dart
class BankAccount {
  double _balance;
}

// file2.dart
import 'file1.dart';

void main() {
  var acc = BankAccount();
  print(acc._balance); // ❌ Lỗi: không truy cập được
}
```

---

## 📋 Checklist Thiết Kế Class

Khi tạo một class mới, tự hỏi:

- [ ] Thuộc tính nào nên **private**? (dữ liệu nhạy cảm, cần validation)
- [ ] Thuộc tính nào nên có **getter/setter**? (tính toán, validation)
- [ ] Method nào nên **static**? (utility, không cần this)
- [ ] Có cần **factory constructor** không? (cache, singleton)
- [ ] Constructor có cần **validation** không?
- [ ] Có thuộc tính **read-only** không? (chỉ getter, không setter)

**Ví dụ áp dụng:**

```dart
class Product {
  // ✅ Private: dữ liệu nhạy cảm
  double _price;
  int _stock;

  // ✅ Public: thông tin chung
  String name;
  String category;

  // ✅ Static: đếm chung
  static int totalProducts = 0;

  // ✅ Factory: tránh trùng lặp
  static final Map<String, Product> _cache = {};
  factory Product(String name) {
    return _cache.putIfAbsent(name, () => Product._(name));
  }

  Product._(this.name) {
    totalProducts++;
  }

  // ✅ Getter/Setter: validation
  double get price => _price;
  set price(double v) {
    if (v > 0) _price = v;
  }

  // ✅ Getter: read-only computed
  String get status => _stock == 0 ? 'Hết hàng' : 'Còn hàng';

  // ✅ Instance method: xử lý object
  void sell(int qty) {
    if (qty <= _stock) {
      _stock -= qty;
    }
  }

  // ✅ Static method: utility
  static void showStats() {
    print('Total products: $totalProducts');
  }
}
```

---

## 💡 Tips Nhớ Nhanh

1. **`_` prefix** = Private (riêng tư)
2. **`get`** = Đọc (không có `()` khi gọi)
3. **`set`** = Ghi (có validation)
4. **`static`** = Chung cho class (không cần object)
5. **`factory`** = Có thể trả về instance cũ
6. **`this`** = Object hiện tại (không dùng trong static)

---

_"Code clean hơn khi biết đúng lúc dùng đúng tool!"_ 🚀
