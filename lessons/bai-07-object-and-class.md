# Bài 7: Class và Object

## Mục tiêu bài học

- Hiểu được khái niệm **Lập trình Hướng Đối Tượng (OOP)**  
- Biết cách tạo và sử dụng **Class** và **Object**  
- Biết khai báo **thuộc tính (Properties)** và **phương thức (Methods)**  
- Hiểu và sử dụng **từ khoá `this`**  
- Biết cách **tạo instance (đối tượng)** từ class  
- Áp dụng OOP để quản lý dữ liệu có cấu trúc rõ ràng

---


## 1. Vấn đề trước khi có Class

Trước khi học về **class**, chúng ta vẫn có thể quản lý dữ liệu bằng **Record** hoặc **Map**.  
Tuy nhiên, hai cách này nhanh chóng trở nên phức tạp và khó mở rộng.

### 1.1. Dùng Record

```dart
void main() {
  var students = [
    ('An', 16, 8.5),
    ('Bình', 17, 7.8),
    ('Chi', 16, 9.0),
  ];

  for (var s in students) {
    print('Tên: ${s.$1}, Tuổi: ${s.$2}, Điểm: ${s.$3}');
  }
}
```

**Hạn chế:**
- Không có tên rõ ràng cho từng trường (`$1`, `$2`, `$3` khó hiểu)
- Khó mở rộng nếu muốn thêm thuộc tính mới
- Không thể gắn hành vi (hàm xử lý) cho từng học sinh

---

### 1.2. Dùng Map

```dart
void main() {
  var students = [
    {'name': 'An', 'age': 16, 'grade': 8.5},
    {'name': 'Bình', 'age': 17, 'grade': 7.8},
    {'name': 'Chi', 'age': 16, 'grade': 9.0},
  ];

  for (var s in students) {
    print('Tên: ${s['name']}, Tuổi: ${s['age']}, Điểm: ${s['grade']}');
  }
}
```

**Hạn chế:**
- Dữ liệu phụ thuộc vào chuỗi key → dễ sai chính tả  
- Không kiểm soát kiểu dữ liệu  
- Không thể định nghĩa hành vi riêng cho từng học sinh  

---

### 1.3. Vấn đề cần giải quyết

➡️ Khi chương trình phức tạp hơn (ví dụ: cần cho học sinh “học bài”, “tính điểm trung bình”),  
việc dùng `Map` hay `Record` trở nên **khó đọc và dễ lỗi**.  
Chúng ta cần một cách tổ chức dữ liệu tốt hơn → **Class & Object**.

---

## 2. Giới thiệu Lập trình Hướng Đối Tượng (OOP)

**OOP (Object-Oriented Programming)** là cách lập trình dựa trên **“đối tượng”** – mỗi đối tượng chứa cả **dữ liệu** và **hành vi** của chính nó.

**Ví dụ thực tế:**  
- Một học sinh có: tên, tuổi, điểm (dữ liệu) → và hành vi: học, thi, xem điểm.  
- Một quyển sách có: tiêu đề, tác giả, năm xuất bản → và hành vi: hiển thị thông tin.  

### Lợi ích của OOP
- Dễ quản lý, bảo trì và mở rộng chương trình  
- Dữ liệu và hành vi được gom nhóm hợp lý  
- Có thể **tái sử dụng** và **kế thừa** sau này  

---

## 3. Class và Object

### 3.1. Class là gì?

**Class** là bản thiết kế (mẫu) mô tả cấu trúc và hành vi của một nhóm đối tượng.  
Nó định nghĩa các **thuộc tính (properties)** để lưu trữ dữ liệu và **phương thức (methods)** để thực hiện các hành vi.

Ví dụ:  
- Một class `Student` có các thuộc tính như `name`, `age`, `grade` và các phương thức như `study()`, `showInfo()`.  
- Một class `Car` có các thuộc tính như `brand`, `year`, `price` và các phương thức như `start()`, `stop()`.

### 3.2. Object là gì?

**Object** là “thực thể cụ thể” được tạo ra từ Class.  
Mỗi object có dữ liệu riêng (giá trị của các thuộc tính) và có thể thực hiện các hành vi được định nghĩa trong class.

Ví dụ:  
- `Student` là class, còn `student1` và `student2` là các object.  
  - `student1` có `name = 'An'`, `age = 16`, `grade = 8.5`.  
  - `student2` có `name = 'Bình'`, `age = 17`, `grade = 7.8`.  
- `Car` là class, còn `car1` và `car2` là các object.  
  - `car1` có `brand = 'Toyota'`, `year = 2020`, `price = 50000`.  
  - `car2` có `brand = 'Honda'`, `year = 2021`, `price = 45000`.

### 3.3. Tại sao cần Class và Object?

- **Tổ chức dữ liệu rõ ràng**: Gom nhóm dữ liệu và hành vi liên quan vào một nơi.  
- **Tái sử dụng**: Một class có thể được sử dụng để tạo nhiều object khác nhau.  
- **Dễ bảo trì và mở rộng**: Thay đổi trong class sẽ ảnh hưởng đến tất cả các object, giúp quản lý dễ dàng hơn.  
- **Hỗ trợ lập trình hướng đối tượng (OOP)**: Cho phép sử dụng các tính năng như kế thừa, đa hình, đóng gói.

---

### 3.3. Ví dụ: Class `Student`

```dart
class Student {
  String name;
  int age;
  double grade;

  // Constructor (hàm khởi tạo)
  Student(this.name, this.age, this.grade);

  // Phương thức (method)
  void showInfo() {
    print('Tên: $name, Tuổi: $age, Điểm: $grade');
  }
}

void main() {
  var s1 = Student('An', 16, 8.5);
  var s2 = Student('Bình', 17, 7.8);

  s1.showInfo();
  s2.showInfo();
}
```

---

## 4. Thuộc tính (Properties)

**Thuộc tính (Properties)** là các biến được khai báo bên trong một class, dùng để lưu trữ dữ liệu hoặc trạng thái của một đối tượng. Mỗi đối tượng được tạo từ class sẽ có một bản sao riêng của các thuộc tính này.

### 4.1. Khai báo thuộc tính

Thuộc tính được khai báo giống như biến thông thường, nhưng nằm trong cặp dấu `{}` của class.

**Cú pháp:**
```dart
class ClassName {
  // Khai báo thuộc tính
  type propertyName1;
  type propertyName2;
  // ...
}
```

**Ví dụ:** Class `Student` có các thuộc tính để lưu trữ thông tin cá nhân.
```dart
class Student {
  // Thuộc tính để lưu tên
  String name;

  // Thuộc tính để lưu tuổi
  int age;

  // Thuộc tính để lưu điểm trung bình
  double grade;

  // Constructor để khởi tạo giá trị cho các thuộc tính
  Student(this.name, this.age, this.grade);
}
```
- `name`, `age`, `grade` là các thuộc tính của class `Student`.
- Mỗi đối tượng `Student` sẽ có các giá trị `name`, `age`, `grade` riêng.

### 4.2. Truy cập và thay đổi thuộc tính

Ta sử dụng **dấu chấm (`.`)** sau tên đối tượng để truy cập hoặc thay đổi giá trị của một thuộc tính.

**Ví dụ:**
```dart
void main() {
  // Tạo một đối tượng Student
  var s1 = Student('An', 16, 8.5);

  // 1. Truy cập để đọc giá trị thuộc tính
  print('Tên ban đầu: ${s1.name}'); // Output: Tên ban đầu: An
  print('Điểm ban đầu: ${s1.grade}'); // Output: Điểm ban đầu: 8.5

  // 2. Thay đổi giá trị thuộc tính
  s1.grade = 9.0;
  print('Điểm sau khi cập nhật: ${s1.grade}'); // Output: Điểm sau khi cập nhật: 9.0
}
```

---

## 5. Phương thức (Methods)

**Phương thức (Methods)** là các hàm được định nghĩa bên trong một class, dùng để mô tả các **hành vi** hoặc **hành động** mà đối tượng có thể thực hiện. Phương thức có thể sử dụng các thuộc tính của chính đối tượng đó.

### 5.1. Khai báo phương thức

Phương thức được khai báo giống như một hàm thông thường, nhưng nằm bên trong class.

**Cú pháp:**
```dart
class ClassName {
  // Khai báo phương thức
  returnType methodName(parameters) {
    // Code thực thi hành động
  }
}
```

**Ví dụ:** Bổ sung các hành vi cho class `Student`.
```dart
class Student {
  String name;
  int age;
  double grade;

  Student(this.name, this.age, this.grade);

  // Phương thức để hiển thị thông tin
  void showInfo() {
    // Bên trong phương thức, ta có thể truy cập trực tiếp các thuộc tính
    // của đối tượng hiện tại (như name, age, grade).
    print('Tên: $name, Tuổi: $age, Điểm: $grade');
  }

  // Phương thức để kiểm tra học sinh giỏi
  bool isExcellent() {
    return grade >= 8.0;
  }

  // Phương thức mô tả hành động học bài
  void study() {
    print('$name đang học bài...');
  }
}
```

### 5.2. Gọi phương thức

Tương tự như thuộc tính, ta cũng dùng **dấu chấm (`.`)** sau tên đối tượng để gọi một phương thức.

**Ví dụ:**
```dart
void main() {
  var s1 = Student('An', 16, 8.5);
  var s2 = Student('Bình', 17, 7.8);

  // Gọi phương thức của đối tượng s1
  s1.showInfo(); // Output: Tên: An, Tuổi: 16, Điểm: 8.5
  s1.study();    // Output: An đang học bài...
  print('s1 là học sinh giỏi? ${s1.isExcellent()}'); // Output: s1 là học sinh giỏi? true

  print('---');

  // Gọi phương thức của đối tượng s2
  s2.showInfo(); // Output: Tên: Bình, Tuổi: 17, Điểm: 7.8
  print('s2 là học sinh giỏi? ${s2.isExcellent()}'); // Output: s2 là học sinh giỏi? false
}
```
**Điểm khác biệt chính:**
- **Thuộc tính (Property)**: Lưu trữ **dữ liệu** (là gì?). Ví dụ: `name`, `color`.
- **Phương thức (Method)**: Thực hiện **hành động** (làm gì?). Ví dụ: `showInfo()`, `start()`.

---

## 6. Từ khoá `this`

`this` là từ khoá chỉ **chính đối tượng đang làm việc**. Nhờ `this` chúng ta phân biệt được
giữa thuộc tính của object và biến/tham số trùng tên ở bên ngoài.

### 6.1. `this` trong constructor

Khi tham số của constructor có cùng tên với thuộc tính, `this` giúp gán đúng giá trị.

```dart
class Student {
  String name;
  int age;
  double grade;

  Student(String name, int age, double grade)
      : this.name = name,
        this.age = age,
        this.grade = grade;
}

void main() {
  var s1 = Student('An', 16, 8.5);
  print(s1.name); // An
}
```

Trong ví dụ ở phần 3, ta dùng cú pháp rút gọn `Student(this.name, this.age, this.grade);`. Cả hai đều dựa trên `this` để truy cập thuộc tính của object hiện tại.

### 6.2. `this` trong phương thức

`this` giúp các phương thức nhìn thấy thuộc tính của chính mình, đặc biệt khi tên biến bị trùng hoặc khi muốn nhấn mạnh rằng giá trị đến từ object hiện tại.

```dart
class Student {
  String name;
  double grade;

  Student(this.name, this.grade);

  void updateGrade(double grade) {
    if (grade < 0 || grade > 10) {
      print('Điểm không hợp lệ');
      return;
    }
    this.grade = grade;
    print('$name có điểm mới: ${this.grade}');
  }
}

void main() {
  var s1 = Student('Bình', 7.8);
  s1.updateGrade(8.6); // Bình có điểm mới: 8.6
}
```

Trong phương thức `updateGrade`, biến tham số `grade` che khuất thuộc tính `grade`. Nhờ `this.grade` chúng ta cập nhật đúng trường của đối tượng.

### 6.3. Trả về chính đối tượng (`return this`)

`this` còn được dùng để trả về object hiện tại, giúp gọi nhiều phương thức liên tiếp (method chaining).

```dart
class Player {
  int score = 0;

  Player addScore(int value) {
    score += value;
    return this;
  }

  void showScore() {
    print('Điểm hiện tại: $score');
  }
}

void main() {
  Player()
      .addScore(10)
      .addScore(5)
      .showScore(); // Điểm hiện tại: 15
}
```

### 6.4. Khi nào cần dùng `this`?

- **Tránh nhầm lẫn tên**: Constructor hoặc method có tham số trùng tên thuộc tính.
- **Nhấn mạnh đối tượng hiện tại**: Đọc code dễ hơn, nhất là trong method dài.
- **Truyền chính object đi nơi khác**: Ví dụ trả về `this` hoặc truyền `this` vào hàm khác.

🎯 Ghi nhớ: mỗi khi bạn thấy “làm việc với chính object đang xử lý”, hãy nghĩ tới `this` để code rõ ràng và an toàn hơn.


## 7. Tạo instance (đối tượng)

### 7.1. Instance là gì?

**Instance** (hay còn gọi là **object**, **đối tượng**) là một **thực thể cụ thể** được tạo ra từ class. Mỗi instance có:
- Các **thuộc tính riêng** (giá trị có thể khác nhau giữa các instance)
- Các **phương thức chung** (được định nghĩa trong class)

**Ví dụ:**
- Class `Student` là bản thiết kế chung cho tất cả học sinh.
- `Student('An', 16, 8.5)` là một **instance cụ thể**, đại diện cho học sinh An.
- `Student('Bình', 17, 7.8)` là một **instance khác**, đại diện cho học sinh Bình.

### 7.2. Cách tạo instance

**Cú pháp:**
```dart
var instanceName = ClassName(arguments);
```

Hoặc khai báo kiểu rõ ràng:
```dart
ClassName instanceName = ClassName(arguments);
```

**Ví dụ:**
```dart
// Tạo instance với var (Dart tự suy ra kiểu)
var s1 = Student('An', 16, 8.5);

// Tạo instance với khai báo kiểu rõ ràng
Student s2 = Student('Bình', 17, 7.8);
```

### 7.3. Mỗi instance là độc lập

Mỗi instance có bộ nhớ riêng để lưu trữ các thuộc tính. Thay đổi thuộc tính của instance này **không ảnh hưởng** đến instance khác.

**Ví dụ:**
```dart
void main() {
  var s1 = Student('An', 16, 8.5);
  var s2 = Student('Bình', 17, 7.8);

  print('Ban đầu:');
  s1.showInfo(); // Tên: An, Tuổi: 16, Điểm: 8.5
  s2.showInfo(); // Tên: Bình, Tuổi: 17, Điểm: 7.8

  // Thay đổi điểm của s1
  s1.grade = 9.0;

  print('\nSau khi thay đổi s1:');
  s1.showInfo(); // Tên: An, Tuổi: 16, Điểm: 9.0
  s2.showInfo(); // Tên: Bình, Tuổi: 17, Điểm: 7.8 (không đổi)
}
```

### 7.4. Tạo nhiều instance trong danh sách

Bạn có thể tạo nhiều instance và lưu vào `List` để quản lý dễ dàng.

**Ví dụ:**
```dart
void main() {
  var students = [
    Student('An', 16, 8.5),
    Student('Bình', 17, 7.8),
    Student('Chi', 16, 9.0),
    Student('Dũng', 18, 6.5),
  ];

  print('Danh sách học sinh:');
  for (var student in students) {
    student.showInfo();
  }

  print('\nHọc sinh giỏi:');
  for (var student in students) {
    if (student.isExcellent()) {
      print('- ${student.name}');
    }
  }
}
```

### 7.5. Constructor mặc định và Constructor có tham số

#### a) Constructor mặc định (default constructor)

Nếu bạn **không khai báo constructor**, Dart tự động tạo một constructor mặc định không có tham số.

**Ví dụ:**
```dart
class Point {
  double x = 0;
  double y = 0;
}

void main() {
  var p = Point(); // Gọi constructor mặc định
  print('x: ${p.x}, y: ${p.y}'); // x: 0, y: 0
}
```

#### b) Constructor có tham số

Khi bạn khai báo constructor có tham số, constructor mặc định sẽ **không còn tồn tại** (trừ khi bạn khai báo thêm).

**Ví dụ:**
```dart
class Point {
  double x;
  double y;

  Point(this.x, this.y);
}

void main() {
  var p1 = Point(3, 4);
  print('x: ${p1.x}, y: ${p1.y}'); // x: 3, y: 4

  // ❌ Lỗi: không thể gọi Point() vì không còn constructor mặc định
  // var p2 = Point();
}
```

#### c) Named constructor (Constructor có tên)

Dart cho phép định nghĩa **nhiều constructor** với tên khác nhau.

**Ví dụ:**
```dart
class Point {
  double x;
  double y;

  // Constructor chính
  Point(this.x, this.y);

  // Named constructor: tạo điểm gốc toạ độ
  Point.origin() {
    x = 0;
    y = 0;
  }

  // Named constructor: tạo điểm từ một giá trị
  Point.same(double value) {
    x = value;
    y = value;
  }
}

void main() {
  var p1 = Point(3, 4);
  var p2 = Point.origin();
  var p3 = Point.same(5);

  print('p1: (${p1.x}, ${p1.y})'); // p1: (3, 4)
  print('p2: (${p2.x}, ${p2.y})'); // p2: (0, 0)
  print('p3: (${p3.x}, ${p3.y})'); // p3: (5, 5)
}
```

### 7.6. Tham số tuỳ chọn (Optional parameters)

Bạn có thể dùng **tham số có tên (named parameters)** hoặc **tham số mặc định** để constructor linh hoạt hơn.

**Ví dụ với tham số có tên:**
```dart
class Student {
  String name;
  int age;
  double grade;

  Student({required this.name, required this.age, this.grade = 0.0});
  void showInfo() {
    print('Tên: $name, Tuổi: $age, Điểm: $grade');
  }
}

void main() {
  var s1 = Student(name: 'An', age: 16, grade: 8.5);
  var s2 = Student(name: 'Bình', age: 17); // grade = 0.0 (mặc định)

  s1.showInfo(); // Tên: An, Tuổi: 16, Điểm: 8.5
  s2.showInfo(); // Tên: Bình, Tuổi: 17, Điểm: 0.0
}
```

### 7.7. Tóm tắt

| Khái niệm | Giải thích | Ví dụ |
|:----------|:-----------|:------|
| **Instance** | Đối tượng cụ thể được tạo từ class | `var s1 = Student('An', 16, 8.5);` |
| **Tạo instance** | Dùng `ClassName(arguments)` | `Student('Bình', 17, 7.8)` |
| **Instance độc lập** | Mỗi instance có thuộc tính riêng | `s1.grade = 9.0` không ảnh hưởng `s2` |
| **Constructor mặc định** | Tự động có nếu không khai báo constructor | `Point()` |
| **Named constructor** | Constructor có tên để tạo object theo nhiều cách | `Point.origin()` |
| **Tham số tuỳ chọn** | Dùng `{}` hoặc `[]` để tham số không bắt buộc | `Student({required this.name})` |

---

## 8. Ví dụ thực hành tổng hợp

```dart
class Student {
  String name;
  int age;
  double grade;

  Student(this.name, this.age, this.grade);

  void showInfo() {
    print('Tên: $name, Tuổi: $age, Điểm trung bình: $grade');
  }

  bool isExcellent() {
    return grade >= 8.0;
  }
}

void main() {
  var students = [
    Student('An', 16, 8.5),
    Student('Bình', 17, 7.8),
    Student('Chi', 16, 9.0)
  ];

  print('Danh sách học sinh:');
  for (var s in students) {
    s.showInfo();
  }

  print('\nHọc sinh giỏi:');
  for (var s in students.where((x) => x.isExcellent())) {
    print('- ${s.name}');
  }
}
```

---

## 9. Mini Project

### 🧮 9.1. Bài 1: Class `Student`
- Thuộc tính: `name`, `age`, `grade`
- Phương thức: `showInfo()`, `isExcellent()`
- In ra danh sách học sinh và những học sinh giỏi (grade ≥ 8)

### 📚 9.2. Bài 2: Class `Book`
- Thuộc tính: `title`, `author`, `year`
- Phương thức: `displayInfo()`
- Tạo danh sách sách và in thông tin từng quyển

### 🌐 9.3. Bài 3: Class `FacebookPost`
- Thuộc tính: `author`, `content`, `likes`
- Phương thức: `like()`, `showPost()`
- Khi gọi `like()` thì tăng `likes` lên 1

### 🎬 9.4. Bài 4: Class `TiktokVideo`
- Thuộc tính: `title`, `views`, `likes`
- Phương thức: `play()`, `like()`
- Khi `play()` thì tăng `views`, khi `like()` thì tăng `likes`

---

## 10. Tóm tắt

| Khái niệm | Giải thích | Ví dụ |
| :-------- | :---------- | :---- |
| **Class** | Bản thiết kế cho đối tượng | `class Student {}` |
| **Object** | Thực thể được tạo từ class | `var s = Student('An',16,8.5)` |
| **Property** | Biến trong class, lưu dữ liệu | `String name;` |
| **Method** | Hàm trong class, định nghĩa hành vi | `void showInfo(){}` |
| **this** | Tham chiếu tới object hiện tại | `this.name = name;` |
| **Instance** | Đối tượng cụ thể từ class | `Student('Bình',17,7.8)` |

---

## 11. Bài tập về nhà

### **Bài 1: Quản lý xe (cơ bản)**
- Tạo class `Car` với các thuộc tính: `brand`, `year`, `price`.
- Viết phương thức `showInfo()` để in thông tin.
- Tạo danh sách **3 xe** và in ra thông tin từng xe.

### **Bài 2: Hình chữ nhật (cơ bản)**
- Tạo class `Rectangle` có thuộc tính `width`, `height`.
- Viết phương thức `area()` để tính diện tích.
- Tạo đối tượng và in ra **diện tích** của từng hình.

### **Bài 3: Thư viện sách (multi-key sort + search + de-dup)**
- Class `Book { String title; String author; int year; int pages; }`, danh sách **≥ 10 sách**.
- Yêu cầu:
  1. Loại bỏ trùng `(title, author)`, giữ **bản mới nhất** (`year` lớn nhất).
  2. **Sắp xếp nhiều khóa**: `author` ↑, nếu trùng thì `title` ↑, nếu trùng tiếp thì `year` ↓.
  3. **Tìm kiếm** trong `title` (case-insensitive), trả về **top 5** theo `pages` ↓.
  4. **Thống kê** tổng số trang theo **từng tác giả**, in **tác giả có tổng trang cao nhất**.

### **Bài 4: Danh sách video TikTok (ranking + stable sort + top-K theo bucket)**
- Class `TiktokVideo { String title; int views; int likes; double get engagement => likes / (views == 0 ? 1 : views); int originalIndex; }`
- Yêu cầu:
  1. **Xếp hạng** theo `engagement` ↓; nếu bằng nhau, ưu tiên **views** cao hơn.
  2. Chia video thành 3 **bucket**: `<10k`, `10k–100k`, `>100k`; lấy **top 2 engagement** ở **mỗi bucket**.
  3. Tìm **video có tiêu đề dài nhất** và **ngắn nhất**, in kèm (views, likes, engagement).

### **Bài 5: Bảng điểm học sinh (filter + multi-sort + top-K theo nhóm)**
- Class `Student { String name; int age; double grade; String classId; }`.
- Yêu cầu:
  1. Lọc học sinh có `grade >= 8.0` thuộc một `classId` nhập vào → sắp xếp `grade` ↓, `name` ↑.
  2. **Tìm kiếm đa điều kiện**: theo `keyword` (tên), `minAge..maxAge`, `minGrade`.
  3. In **top 3** học sinh **mỗi lớp** theo `grade` ↓.
  4. *(Tuỳ chọn)* Tìm kiếm **không phân biệt dấu** (tự viết hàm bỏ dấu).

### **Bài 6 (Tuỳ chọn): CLI mini-menu**
- Viết chương trình console với menu:
  1. Nhập dữ liệu (chọn Car/Book/Student)
  2. Sắp xếp theo tiêu chí nhập
  3. Tìm kiếm theo từ khóa + bộ lọc
  4. In top-K
  5. Thoát
- Yêu cầu:
  - Validate đầu vào (tránh crash).
  - Tách hàm: `sortBy`, `filterBy`, `searchBy`, `topK`.

---

_Chúc các em học tốt!
