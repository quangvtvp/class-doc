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

| Khái niệm                | Giải thích                                       | Ví dụ                                 |
| :----------------------- | :----------------------------------------------- | :------------------------------------ |
| **Instance**             | Đối tượng cụ thể được tạo từ class               | `var s1 = Student('An', 16, 8.5);`    |
| **Tạo instance**         | Dùng `ClassName(arguments)`                      | `Student('Bình', 17, 7.8)`            |
| **Instance độc lập**     | Mỗi instance có thuộc tính riêng                 | `s1.grade = 9.0` không ảnh hưởng `s2` |
| **Constructor mặc định** | Tự động có nếu không khai báo constructor        | `Point()`                             |
| **Named constructor**    | Constructor có tên để tạo object theo nhiều cách | `Point.origin()`                      |
| **Tham số tuỳ chọn**     | Dùng `{}` hoặc `[]` để tham số không bắt buộc    | `Student({required this.name})`       |

---

## 8. Private Members (Thuộc tính và Phương thức riêng tư)

**Private members** (thuộc tính và phương thức riêng tư) là các thành phần chỉ có thể truy cập **bên trong cùng một file**. Chúng giúp **bảo vệ dữ liệu** và **logic nội bộ** khỏi bị thay đổi hoặc gọi từ bên ngoài.

### 8.1. Tại sao cần Private?

#### **Vấn đề với Public (công khai):**

```dart
class BankAccount {
  double balance; // Public - không an toàn!

  BankAccount(this.balance);

  void addInterest() {
    balance = balance * 1.05; // Cộng 5% lãi
  }
}

void main() {
  var account = BankAccount(1000000);

  // ❌ Nguy hiểm: ai cũng có thể thay đổi số dư tùy ý!
  account.balance = 999999999;
  print('Số dư: ${account.balance}'); // Đã bị thay đổi!

  // ❌ Nguy hiểm: có thể gọi logic nội bộ từ ngoài
  account.addInterest();
}
```

**Vấn đề:**

- Không kiểm soát được ai thay đổi dữ liệu
- Không kiểm soát được khi nào và giá trị có hợp lệ không
- Logic nội bộ bị lộ ra ngoài

### 8.2. Private Properties (Thuộc tính riêng tư)

Thêm dấu **gạch dưới `_`** vào đầu tên thuộc tính để tạo private property:

**Cú pháp:**

```dart
class ClassName {
  type _privateName; // Private property
  type publicName;   // Public property
}
```

**Ví dụ 1: Bảo vệ số dư tài khoản**

```dart
class BankAccount {
  double _balance; // Private - chỉ truy cập được trong file này

  BankAccount(this._balance);

  // Cung cấp phương thức an toàn để xem số dư
  double get balance => _balance;

  // Phương thức rút tiền có kiểm tra
  void withdraw(double amount) {
    if (amount <= 0) {
      print('❌ Số tiền phải lớn hơn 0!');
      return;
    }
    if (amount > _balance) {
      print('❌ Số dư không đủ!');
      return;
    }
    _balance -= amount;
    print('✅ Rút ${amount}đ thành công. Số dư: ${_balance}đ');
  }

  // Phương thức nạp tiền có kiểm tra
  void deposit(double amount) {
    if (amount <= 0) {
      print('❌ Số tiền phải lớn hơn 0!');
      return;
    }
    _balance += amount;
    print('✅ Nạp ${amount}đ thành công. Số dư: ${_balance}đ');
  }
}

void main() {
  var account = BankAccount(1000000);

  // ✅ Chỉ có thể đọc số dư
  print('Số dư hiện tại: ${account.balance}đ');

  // ❌ KHÔNG thể gán trực tiếp (vì _balance là private)
  // account._balance = 999999999; // Lỗi compile!

  // ✅ Phải dùng phương thức được kiểm soát
  account.deposit(500000);   // ✅ Nạp 500000đ thành công
  account.withdraw(2000000); // ❌ Số dư không đủ!
  account.withdraw(800000);  // ✅ Rút 800000đ thành công
}
```

### 8.3. Private Methods (Phương thức riêng tư)

Tương tự, thêm `_` vào đầu tên phương thức để tạo private method. Private methods thường dùng cho **logic nội bộ** mà không muốn người dùng bên ngoài gọi trực tiếp.

**Ví dụ: BankAccount với Private Methods**

Tiếp tục ví dụ BankAccount ở trên, chúng ta sẽ thêm các **private methods** để xử lý logic nội bộ:

```dart
class BankAccount {
  String accountHolder;
  double _balance; // Private property

  BankAccount(this.accountHolder, this._balance);

  // Public getter để xem số dư
  double get balance => _balance;

  // Private method: kiểm tra số tiền hợp lệ
  bool _validateAmount(double amount) {
    if (amount <= 0) {
      print('❌ Số tiền phải lớn hơn 0!');
      return false;
    }
    return true;
  }

  // Private method: ghi log giao dịch
  void _logTransaction(String type, double amount, bool success) {
    String status = success ? '✅' : '❌';
    print('$status [$type] ${amount}đ - Số dư: ${_balance}đ');
  }

  // Public method: rút tiền
  void withdraw(double amount) {
    // Sử dụng private method để validate
    if (!_validateAmount(amount)) {
      _logTransaction('RÚT', amount, false);
      return;
    }

    if (amount > _balance) {
      print('❌ Số dư không đủ!');
      _logTransaction('RÚT', amount, false);
      return;
    }

    _balance -= amount;
    _logTransaction('RÚT', amount, true);
  }

  // Public method: nạp tiền
  void deposit(double amount) {
    // Sử dụng private method để validate
    if (!_validateAmount(amount)) {
      _logTransaction('NẠP', amount, false);
      return;
    }

    _balance += amount;
    _logTransaction('NẠP', amount, true);
  }

  // Public method: chuyển khoản
  void transfer(BankAccount recipient, double amount) {
    print('\n🔄 Chuyển khoản ${amount}đ từ $accountHolder đến ${recipient.accountHolder}');

    if (!_validateAmount(amount)) {
      return;
    }

    if (amount > _balance) {
      print('❌ Số dư không đủ để chuyển!');
      return;
    }

    _balance -= amount;
    recipient._balance += amount;
    print('✅ Chuyển khoản thành công!');
    print('   Số dư của $accountHolder: ${_balance}đ');
    print('   Số dư của ${recipient.accountHolder}: ${recipient._balance}đ');
  }
}

void main() {
  var account1 = BankAccount('Nguyễn Văn An', 1000000);
  var account2 = BankAccount('Trần Thị Bình', 500000);

  print('=== GIAO DỊCH CỦA ${account1.accountHolder} ===');
  print('Số dư ban đầu: ${account1.balance}đ\n');

  account1.deposit(500000);   // ✅ Nạp tiền hợp lệ
  account1.withdraw(-100000); // ❌ Số tiền không hợp lệ
  account1.withdraw(2000000); // ❌ Không đủ số dư
  account1.withdraw(800000);  // ✅ Rút tiền thành công

  // Chuyển khoản
  account1.transfer(account2, 300000);

  // ❌ KHÔNG thể gọi private methods từ bên ngoài
  // account1._validateAmount(1000);  // Lỗi compile!
  // account1._logTransaction('TEST', 100, true); // Lỗi compile!
}
```

**Đầu ra:**

```
=== GIAO DỊCH CỦA Nguyễn Văn An ===
Số dư ban đầu: 1000000.0đ

✅ [NẠP] 500000.0đ - Số dư: 1500000.0đ
❌ Số tiền phải lớn hơn 0!
❌ [RÚT] -100000.0đ - Số dư: 1500000.0đ
❌ Số dư không đủ!
❌ [RÚT] 2000000.0đ - Số dư: 1500000.0đ
✅ [RÚT] 800000.0đ - Số dư: 700000.0đ

🔄 Chuyển khoản 300000.0đ từ Nguyễn Văn An đến Trần Thị Bình
✅ Chuyển khoản thành công!
   Số dư của Nguyễn Văn An: 400000.0đ
   Số dư của Trần Thị Bình: 800000.0đ
```

**Lợi ích của Private Methods:**

- 🔒 Che giấu logic phức tạp bên trong (validation, logging)
- 🛡️ Người dùng chỉ gọi các method cần thiết (deposit, withdraw, transfer)
- 🔧 Dễ thay đổi logic nội bộ mà không ảnh hưởng code bên ngoài
- ♻️ Tái sử dụng code (cùng 1 logic validate cho nhiều method)

### 8.4. 🎯 Bài thực hành: Hệ thống quản lý điểm học sinh

**Yêu cầu:**

Tạo class `StudentGrades` để quản lý điểm của học sinh với:

1. **Private properties:**
   - `_mathScore`, `_physicsScore`, `_chemistryScore` (điểm 3 môn)
2. **Public properties:**

   - `studentName` (tên học sinh)

3. **Private methods:**

   - `_validateScore(double score)`: kiểm tra điểm hợp lệ (0-10)
   - `_calculateAverage()`: tính điểm trung bình
   - `_getGrade(double average)`: xếp loại (Giỏi >=8, Khá >=6.5, TB >=5, Yếu &lt;5)

4. **Public methods:**
   - `updateScore(String subject, double score)`:
     - Nhận tên môn học ('Toán', 'Lý', 'Hóa') và điểm mới
     - Sử dụng `_validateScore()` để kiểm tra
     - Nếu hợp lệ: cập nhật điểm và in thông báo "✅ Đã cập nhật điểm [Môn]: [Điểm]"
     - Nếu không hợp lệ: in thông báo lỗi
   - `showReport()`:
     - In báo cáo học tập bao gồm: tên học sinh, điểm 3 môn, điểm TB (làm tròn 2 chữ số), xếp loại
     - Sử dụng `_calculateAverage()` và `_getGrade()`

**Ví dụ đầu ra mong muốn:**

```
✅ Đã cập nhật điểm Toán: 8.5
✅ Đã cập nhật điểm Lý: 7.0
❌ Điểm phải từ 0 đến 10!
✅ Đã cập nhật điểm Hóa: 9.0

📊 BÁO CÁO HỌC TẬP: Nguyễn Văn An
   Toán: 8.5
   Lý: 7.0
   Hóa: 9.0
   Điểm TB: 8.17
   Xếp loại: Giỏi
```

<details>
<summary><b>💡 Gợi ý giải pháp</b></summary>

```dart
class StudentGrades {
  String studentName;
  double _mathScore = 0;
  double _physicsScore = 0;
  double _chemistryScore = 0;

  StudentGrades(this.studentName);

  // Private method: validate điểm
  bool _validateScore(double score) {
    if (score < 0 || score > 10) {
      print('❌ Điểm phải từ 0 đến 10!');
      return false;
    }
    return true;
  }

  // Private method: tính trung bình
  double _calculateAverage() {
    return (_mathScore + _physicsScore + _chemistryScore) / 3;
  }

  // Private method: xếp loại
  String _getGrade(double average) {
    if (average >= 8.0) return 'Giỏi';
    if (average >= 6.5) return 'Khá';
    if (average >= 5.0) return 'Trung bình';
    return 'Yếu';
  }

  // Public method: cập nhật điểm
  void updateScore(String subject, double score) {
    if (!_validateScore(score)) {
      return;
    }

    switch (subject.toLowerCase()) {
      case 'toán':
        _mathScore = score;
        print('✅ Đã cập nhật điểm Toán: $score');
        break;
      case 'lý':
        _physicsScore = score;
        print('✅ Đã cập nhật điểm Lý: $score');
        break;
      case 'hóa':
        _chemistryScore = score;
        print('✅ Đã cập nhật điểm Hóa: $score');
        break;
      default:
        print('❌ Môn học không hợp lệ! (Chỉ nhận: Toán, Lý, Hóa)');
    }
  }

  // Public method: hiển thị báo cáo
  void showReport() {
    double avg = _calculateAverage();
    String grade = _getGrade(avg);

    print('\n📊 BÁO CÁO HỌC TẬP: $studentName');
    print('   Toán: $_mathScore');
    print('   Lý: $_physicsScore');
    print('   Hóa: $_chemistryScore');
    print('   Điểm TB: ${avg.toStringAsFixed(2)}');
    print('   Xếp loại: $grade');
  }
}

void main() {
  var student = StudentGrades('Nguyễn Văn An');

  student.updateScore('Toán', 8.5);
  student.updateScore('Lý', 7.0);
  student.updateScore('Hóa', 12.0);  // ❌ Không hợp lệ
  student.updateScore('Hóa', 9.0);   // ✅ Hợp lệ

  student.showReport();

  // ❌ Không thể gọi private methods
  // student._calculateAverage(); // Lỗi!
  // student._getGrade(8.0);      // Lỗi!
}
```

</details>

### 8.5. Lưu ý về Private trong Dart

⚠️ **Quan trọng:** Trong Dart, "private" chỉ có hiệu lực ở **cấp độ file (library)**, không phải cấp độ class.

```dart
// Trong cùng một file
class BankAccount {
  double _balance;
  BankAccount(this._balance);
}

void hackAccount() {
  var acc = BankAccount(1000);
  acc._balance = 999999; // ✅ Vẫn truy cập được vì cùng file!
}
```

💡 **Best practice:** Để bảo vệ tốt hơn, tách class ra file riêng và chỉ export những gì cần thiết.

### 8.6. Tóm tắt

| Loại                 | Cú pháp          | Truy cập        | Khi nào dùng                      |
| :------------------- | :--------------- | :-------------- | :-------------------------------- |
| **Public property**  | `type name;`     | Ai cũng đọc/ghi | Dữ liệu an toàn, không cần bảo vệ |
| **Private property** | `type _name;`    | Chỉ trong file  | Dữ liệu nhạy cảm, cần validation  |
| **Public method**    | `void method()`  | Ai cũng gọi     | API cho người dùng bên ngoài      |
| **Private method**   | `void _method()` | Chỉ trong file  | Logic nội bộ, không muốn lộ       |

---

## 9. Getters và Setters

**Getter** và **Setter** là các phương thức đặc biệt để **đọc** (get) và **ghi** (set) giá trị của thuộc tính, giúp kiểm soát cách truy cập và thay đổi dữ liệu.

### 9.1. Tại sao cần Getter và Setter?

Khi cho phép truy cập trực tiếp thuộc tính, ta không thể:

- Kiểm tra tính hợp lệ của dữ liệu trước khi gán
- Tính toán giá trị động (ví dụ: điểm trung bình từ nhiều môn)
- Theo dõi khi nào thuộc tính bị thay đổi

**Getter** và **Setter** giải quyết những vấn đề này!

### 9.2. Getter - Đọc giá trị

**Getter** là phương thức để **lấy giá trị** của một thuộc tính, có thể trả về giá trị được tính toán.

**Cú pháp:**

```dart
returnType get propertyName {
  // Code tính toán và trả về giá trị
  return value;
}

// Hoặc dạng ngắn gọn (arrow function):
returnType get propertyName => expression;
```

**Ví dụ 1: Tính điểm trung bình tự động**

```dart
class Student {
  String name;
  double mathScore;
  double physicsScore;
  double chemistryScore;

  Student(this.name, this.mathScore, this.physicsScore, this.chemistryScore);

  // Getter: tính điểm trung bình tự động
  double get averageScore {
    return (mathScore + physicsScore + chemistryScore) / 3;
  }

  // Getter: kiểm tra học sinh giỏi
  bool get isExcellent => averageScore >= 8.0;

  // Getter: xếp loại học lực
  String get academicRank {
    if (averageScore >= 8.0) return 'Giỏi';
    if (averageScore >= 6.5) return 'Khá';
    if (averageScore >= 5.0) return 'Trung bình';
    return 'Yếu';
  }
}

void main() {
  var student = Student('An', 8.5, 7.0, 9.0);

  // Gọi getter như thuộc tính (không cần dấu ngoặc đơn)
  print('Tên: ${student.name}');
  print('Điểm TB: ${student.averageScore.toStringAsFixed(2)}'); // 8.17
  print('Xếp loại: ${student.academicRank}'); // Giỏi
  print('Học sinh giỏi: ${student.isExcellent}'); // true
}
```

**Ví dụ 2: Hiển thị thông tin định dạng**

```dart
class BankAccount {
  String accountNumber;
  double balance;

  BankAccount(this.accountNumber, this.balance);

  // Getter: hiển thị số dư có định dạng
  String get formattedBalance {
    return '${balance.toStringAsFixed(0)} VNĐ';
  }

  // Getter: ẩn một phần số tài khoản (bảo mật)
  String get maskedAccountNumber {
    return '***${accountNumber.substring(accountNumber.length - 4)}';
  }
}

void main() {
  var account = BankAccount('1234567890', 5000000);

  print('Số TK: ${account.maskedAccountNumber}'); // ***7890
  print('Số dư: ${account.formattedBalance}'); // 5000000 VNĐ
}
```

### 9.3. Setter - Gán giá trị với validation

**Setter** là phương thức để **gán giá trị** cho thuộc tính, có thể kiểm tra tính hợp lệ trước khi gán.

**Cú pháp:**

```dart
set propertyName(type value) {
  // Code kiểm tra và gán giá trị
}
```

**Ví dụ 1: Kiểm tra điểm hợp lệ**

```dart
class Student {
  String name;
  double _grade; // Thuộc tính private (có dấu _ ở đầu)

  Student(this.name, this._grade);

  // Getter: lấy điểm
  double get grade => _grade;

  // Setter: gán điểm với kiểm tra
  set grade(double value) {
    if (value < 0 || value > 10) {
      print('❌ Điểm không hợp lệ! Phải từ 0-10.');
      return;
    }
    _grade = value;
    print('✅ Cập nhật điểm thành công: $_grade');
  }
}

void main() {
  var student = Student('An', 8.5);

  print('Điểm hiện tại: ${student.grade}'); // 8.5

  student.grade = 9.0; // ✅ Cập nhật điểm thành công: 9.0
  student.grade = 15;  // ❌ Điểm không hợp lệ! Phải từ 0-10.
  student.grade = -2;  // ❌ Điểm không hợp lệ! Phải từ 0-10.

  print('Điểm cuối cùng: ${student.grade}'); // 9.0
}
```

**Ví dụ 2: Kiểm tra tuổi hợp lệ**

```dart
class Person {
  String name;
  int _age;

  Person(this.name, this._age);

  // Getter
  int get age => _age;

  // Setter với validation
  set age(int value) {
    if (value < 0) {
      print('❌ Tuổi không thể âm!');
      return;
    }
    if (value > 150) {
      print('❌ Tuổi không hợp lý!');
      return;
    }
    _age = value;
    print('✅ Cập nhật tuổi: $_age');
  }

  // Getter: kiểm tra trạng thái
  String get ageGroup {
    if (_age < 18) return 'Vị thành niên';
    if (_age < 60) return 'Người lớn';
    return 'Người cao tuổi';
  }
}

void main() {
  var person = Person('Bình', 16);

  print('${person.name} - ${person.ageGroup}'); // Bình - Vị thành niên

  person.age = 25; // ✅ Cập nhật tuổi: 25
  print('Nhóm tuổi: ${person.ageGroup}'); // Người lớn

  person.age = 200; // ❌ Tuổi không hợp lý!
}
```

### 9.4. 🎯 Bài thực hành: Quản lý sản phẩm

**Yêu cầu:**

1. Tạo class `Product` với:
   - Thuộc tính: `name`, `_price` (private), `_quantity` (private)
   - Getter `price` và setter `price` (kiểm tra giá > 0)
   - Getter `quantity` và setter `quantity` (kiểm tra số lượng >= 0)
   - Getter `totalValue`: tính tổng giá trị = price × quantity
   - Getter `status`: trả về "Hết hàng" nếu quantity = 0, "Còn hàng" nếu > 0
2. Tạo 3 sản phẩm và test các tính năng

<details>
<summary><b>💡 Gợi ý giải pháp</b></summary>

```dart
class Product {
  String name;
  double _price;
  int _quantity;

  Product(this.name, this._price, this._quantity);

  // Getter và Setter cho price
  double get price => _price;

  set price(double value) {
    if (value <= 0) {
      print('❌ Giá phải lớn hơn 0!');
      return;
    }
    _price = value;
    print('✅ Cập nhật giá: $_price VNĐ');
  }

  // Getter và Setter cho quantity
  int get quantity => _quantity;

  set quantity(int value) {
    if (value < 0) {
      print('❌ Số lượng không thể âm!');
      return;
    }
    _quantity = value;
    print('✅ Cập nhật số lượng: $_quantity');
  }

  // Getter: tính tổng giá trị
  double get totalValue => _price * _quantity;

  // Getter: trạng thái hàng
  String get status => _quantity == 0 ? 'Hết hàng' : 'Còn hàng';

  void showInfo() {
    print('📦 $name - Giá: ${_price}đ - SL: $_quantity - Tổng: ${totalValue}đ - ($status)');
  }
}

void main() {
  var products = [
    Product('iPhone 15', 25000000, 10),
    Product('MacBook Pro', 45000000, 0),
    Product('iPad Air', 15000000, 5),
  ];

  print('=== DANH SÁCH SẢN PHẨM ===');
  for (var p in products) {
    p.showInfo();
  }

  print('\n=== TEST VALIDATION ===');
  products[0].price = -1000; // ❌
  products[0].quantity = -5; // ❌

  print('\n=== CẬP NHẬT HỢP LỆ ===');
  products[1].quantity = 3; // ✅
  products[1].showInfo();

  print('\n=== TỔNG GIÁ TRỊ KHO ===');
  double total = products.fold(0, (sum, p) => sum + p.totalValue);
  print('Tổng giá trị: ${total}đ');
}
```

</details>

### 9.5. Tóm tắt

| Khái niệm             | Mục đích                       | Cú pháp                   | Ví dụ                                |
| :-------------------- | :----------------------------- | :------------------------ | :----------------------------------- |
| **Getter**            | Đọc giá trị (có thể tính toán) | `type get name => value;` | `double get average => total/count;` |
| **Setter**            | Gán giá trị (có kiểm tra)      | `set name(type value) {}` | `set age(int v) { if(v>0) _age=v; }` |
| **Private property**  | Thuộc tính riêng tư            | `_propertyName`           | `double _grade;`                     |
| **Computed property** | Thuộc tính tính toán           | Getter không có setter    | `bool get isPassed => grade>=5;`     |

---

## 10. Static Members (Thành viên tĩnh)

**Static members** (thuộc tính và phương thức tĩnh) thuộc về **class** chứ không thuộc về **instance** (đối tượng cụ thể). Chúng được chia sẻ chung cho tất cả các instance.

### 10.1. Tại sao cần Static?

**Tình huống:** Bạn muốn đếm số học sinh đã tạo ra từ class `Student`.

```dart
// ❌ Cách sai: mỗi instance có biến đếm riêng
class Student {
  String name;
  int count = 0; // Mỗi instance có count riêng!

  Student(this.name) {
    count++; // Chỉ tăng count của instance này
  }
}

void main() {
  var s1 = Student('An');
  var s2 = Student('Bình');
  var s3 = Student('Chi');

  print(s1.count); // 1 (không đúng!)
  print(s2.count); // 1 (không đúng!)
  print(s3.count); // 1 (không đúng!)
}
```

**Giải pháp:** Dùng **static** để chia sẻ biến chung!

```dart
// ✅ Cách đúng: dùng static để đếm chung
class Student {
  String name;
  static int count = 0; // Biến static: chung cho cả class

  Student(this.name) {
    count++; // Tăng biến chung
  }
}

void main() {
  var s1 = Student('An');
  var s2 = Student('Bình');
  var s3 = Student('Chi');

  print(Student.count); // 3 (đúng!)
  // Truy cập qua tên class, không qua instance
}
```

### 10.2. Static Properties (Thuộc tính tĩnh)

**Static properties** là các biến thuộc về class, được chia sẻ cho tất cả các instance.

**Ví dụ: Quản lý sĩ số theo lớp**

```dart
class ClassRoom {
  static int totalStudents = 0;     // Tổng học sinh toàn trường
  static int totalClasses = 0;      // Tổng số lớp

  String className;                  // Tên lớp (10A1, 10A2...)
  int studentCount;                  // Sĩ số lớp này

  ClassRoom(this.className, this.studentCount) {
    totalStudents += studentCount;   // Cộng vào tổng toàn trường
    totalClasses++;                  // Tăng số lớp
  }

  // Instance method: hiển thị thông tin lớp
  void showInfo() {
    print('Lớp $className: $studentCount học sinh');
  }

  // Static method: hiển thị thống kê toàn trường
  static void showSchoolStats() {
    print('\n📊 THỐNG KÊ TOÀN TRƯỜNG:');
    print('Tổng số lớp: $totalClasses');
    print('Tổng số học sinh: $totalStudents');
    if (totalClasses > 0) {
      double avg = totalStudents / totalClasses;
      print('Sĩ số trung bình: ${avg.toStringAsFixed(1)} học sinh/lớp');
    }
  }
}

void main() {
  print('=== ĐĂNG KÝ CÁC LỚP ===');
  var classes = [
    ClassRoom('10A1', 35),
    ClassRoom('10A2', 38),
    ClassRoom('10A3', 36),
    ClassRoom('11A1', 32),
    ClassRoom('11A2', 34),
  ];

  print('\n=== DANH SÁCH LỚP ===');
  for (var c in classes) {
    c.showInfo();
  }

  // Gọi static method qua tên class
  ClassRoom.showSchoolStats();
}
```

### 10.3. Static Methods (Phương thức tĩnh)

**Static methods** là các hàm thuộc về class, không cần tạo instance để gọi.

**Ví dụ 1: Hàm tiện ích (Utility functions)**

```dart
class MathHelper {
  // Hằng số PI
  static const double PI = 3.14159;

  // Tính diện tích hình tròn
  static double circleArea(double radius) {
    return PI * radius * radius;
  }

  // Tính chu vi hình tròn
  static double circlePerimeter(double radius) {
    return 2 * PI * radius;
  }

  // Kiểm tra số chẵn
  static bool isEven(int number) {
    return number % 2 == 0;
  }

  // Tìm max của 2 số
  static num max(num a, num b) {
    return a > b ? a : b;
  }
}

void main() {
  // Gọi trực tiếp qua tên class, không cần tạo instance
  print('Diện tích hình tròn r=5: ${MathHelper.circleArea(5)}');
  print('Chu vi hình tròn r=5: ${MathHelper.circlePerimeter(5)}');
  print('10 là số chẵn? ${MathHelper.isEven(10)}');
  print('Max(15, 23) = ${MathHelper.max(15, 23)}');
}
```

### 10.4. Kết hợp Static và Instance members

```dart
class Product {
  static int totalProducts = 0;      // Đếm tổng số sản phẩm
  static double totalRevenue = 0;    // Tổng doanh thu

  String name;
  double price;
  int sold;

  Product(this.name, this.price, {this.sold = 0}) {
    totalProducts++;
  }

  // Instance method: bán sản phẩm
  void sell(int quantity) {
    sold += quantity;
    double revenue = price * quantity;
    totalRevenue += revenue; // Cập nhật static variable
    print('✅ Đã bán $quantity $name - Thu: ${revenue}đ');
  }

  // Instance getter: doanh thu của sản phẩm này
  double get revenue => price * sold;

  // Static method: báo cáo tổng quan
  static void showReport() {
    print('\n📊 BÁO CÁO TỔNG QUAN');
    print('Tổng số sản phẩm: $totalProducts');
    print('Tổng doanh thu: ${totalRevenue}đ');
  }
}

void main() {
  var products = [
    Product('iPhone 15', 25000000),
    Product('MacBook Pro', 45000000),
    Product('iPad Air', 15000000),
  ];

  // Bán hàng
  products[0].sell(3);  // Bán 3 iPhone
  products[1].sell(1);  // Bán 1 MacBook
  products[2].sell(5);  // Bán 5 iPad

  // Báo cáo từng sản phẩm
  print('\n📦 Doanh thu từng sản phẩm:');
  for (var p in products) {
    print('${p.name}: ${p.revenue}đ');
  }

  // Báo cáo tổng (gọi static method)
  Product.showReport();
}
```

### 10.5. 🎯 Bài thực hành: Hệ thống quản lý xe

**Yêu cầu:**

1. Tạo class `Car` với:
   - Static properties: `totalCars` (tổng xe), `totalDistance` (tổng km đã chạy)
   - Instance properties: `id`, `brand`, `_distance` (private)
   - Constructor tự động tăng `totalCars` và gán ID
   - Method `drive(km)`: tăng `_distance` và `totalDistance`
   - Getter `distance`: lấy km đã chạy của xe này
   - Static method `showStatistics()`: in thống kê tổng quan
2. Tạo 3 xe, cho chạy một số km, in thống kê

<details>
<summary><b>💡 Gợi ý giải pháp</b></summary>

```dart
class Car {
  static int _nextId = 1;
  static int totalCars = 0;
  static double totalDistance = 0;

  int id;
  String brand;
  double _distance = 0;

  Car(this.brand) {
    id = _nextId++;
    totalCars++;
    print('🚗 Xe #$id ($brand) đã được đăng ký');
  }

  // Getter: lấy quãng đường đã chạy
  double get distance => _distance;

  // Method: lái xe
  void drive(double km) {
    if (km <= 0) {
      print('❌ Quãng đường phải > 0!');
      return;
    }
    _distance += km;
    totalDistance += km;
    print('🚗 Xe #$id đã chạy ${km}km (Tổng: ${_distance}km)');
  }

  // Static method: thống kê
  static void showStatistics() {
    print('\n📊 THỐNG KÊ HỆ THỐNG');
    print('Tổng số xe: $totalCars');
    print('Tổng quãng đường: ${totalDistance}km');
    print('Trung bình mỗi xe: ${(totalDistance / totalCars).toStringAsFixed(1)}km');
  }

  void showInfo() {
    print('Xe #$id - $brand - Đã chạy: ${_distance}km');
  }
}

void main() {
  print('=== ĐĂNG KÝ XE ===');
  var cars = [
    Car('Toyota'),
    Car('Honda'),
    Car('Mercedes'),
  ];

  print('\n=== LÁI XE ===');
  cars[0].drive(150);
  cars[0].drive(200);
  cars[1].drive(300);
  cars[2].drive(100);
  cars[1].drive(250);

  print('\n=== THÔNG TIN TỪNG XE ===');
  for (var car in cars) {
    car.showInfo();
  }

  Car.showStatistics();
}
```

</details>

### 10.6. Tóm tắt

| Loại                  | Thuộc về | Truy cập             | Khi nào dùng                 |
| :-------------------- | :------- | :------------------- | :--------------------------- |
| **Instance property** | Object   | `object.property`    | Mỗi object cần giá trị riêng |
| **Static property**   | Class    | `ClassName.property` | Chia sẻ chung cho tất cả     |
| **Instance method**   | Object   | `object.method()`    | Xử lý dữ liệu của object     |
| **Static method**     | Class    | `ClassName.method()` | Utility functions, Factory   |
| **Static const**      | Class    | `ClassName.CONST`    | Hằng số cấu hình             |

---

## 11. Ví dụ thực hành tổng hợp

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

## 12. Mini Project

### 🧮 13.1. Bài 1: Class `Student` (Cơ bản)

- Thuộc tính: `name`, `age`, `grade`
- Phương thức: `showInfo()`, `isExcellent()`
- In ra danh sách học sinh và những học sinh giỏi (grade >= 8)

### 📚 13.2. Bài 2: Class `Book` (Getter/Setter)

- Thuộc tính: `title`, `author`, `_year` (private), `_price` (private)
- Getter/Setter: `year` (kiểm tra > 1900), `price` (kiểm tra > 0)
- Getter: `ageOfBook` (năm hiện tại - năm xuất bản)
- Phương thức: `displayInfo()`

### 🌐 13.3. Bài 3: Class `FacebookPost` (Static members)

- Static: `totalPosts`, `totalLikes`
- Instance: `id`, `author`, `content`, `_likes` (private)
- Phương thức: `like()`, `showPost()`
- Khi gọi `like()` thì tăng `_likes` và `totalLikes`

### 🎬 13.4. Bài 4: Class `TiktokVideo` (Factory + Singleton)

- Factory constructor để cache video theo `videoId`
- Thuộc tính: `videoId`, `title`, `views`, `likes`
- Phương thức: `play()`, `like()`
- Static method: `getMostViewed()` (trả về video có views cao nhất)

### 🏦 13.5. Bài 5: Class `BankAccount` (Tổng hợp)

- Private: `_accountNumber`, `_balance`, `_pin`
- Getter/Setter: `balance` (chỉ đọc), setter cho `pin` (4 chữ số)
- Static: `totalAccounts`, `totalBalance`
- Factory: cache theo `accountNumber`
- Methods: `deposit()`, `withdraw()`, `checkPin()`

---

## 13. Tóm tắt

| Khái niệm    | Giải thích                            | Ví dụ                                |
| :----------- | :------------------------------------ | :----------------------------------- |
| **Class**    | Bản thiết kế cho đối tượng            | `class Student {}`                   |
| **Object**   | Thực thể được tạo từ class            | `var s = Student('An',16,8.5)`       |
| **Property** | Biến trong class, lưu dữ liệu         | `String name;`                       |
| **Method**   | Hàm trong class, định nghĩa hành vi   | `void showInfo(){}`                  |
| **this**     | Tham chiếu tới object hiện tại        | `this.name = name;`                  |
| **Instance** | Đối tượng cụ thể từ class             | `Student('Bình',17,7.8)`             |
| **Getter**   | Đọc giá trị (có thể tính toán)        | `double get average => total/count;` |
| **Setter**   | Gán giá trị (có validation)           | `set age(int v) { if(v>0) _age=v; }` |
| **Private**  | Thuộc tính/method riêng tư            | `double _balance;`                   |
| **Static**   | Thuộc về class, không phải instance   | `static int count = 0;`              |
| **Factory**  | Constructor có thể trả về instance cũ | `factory Color(r,g,b) {...}`         |

---

## 14. Bài tập về nhà

### **Bài 1: Quản lý xe (cơ bản)**

- Tạo class `Car` với các thuộc tính: `brand`, `year`, `price`.
- Viết phương thức `showInfo()` để in thông tin.
- Tạo danh sách **3 xe** và in ra thông tin từng xe.

### **Bài 2: Hình chữ nhật (Getter/Setter)**

- Tạo class `Rectangle` có thuộc tính `_width`, `_height` (private).
- Getter/Setter với validation (phải > 0)
- Getter `area` để tính diện tích, getter `perimeter` để tính chu vi
- Tạo đối tượng và in ra **diện tích** của từng hình.

### **Bài 3: Quản lý sản phẩm (Private + Getter/Setter)**

- Class `Product` với private properties: `_name`, `_price`, `_stock`
- Getter/Setter cho price (> 0), stock (>= 0)
- Method `sell(quantity)`: kiểm tra tồn kho trước khi bán
- Getter `status`: "Hết hàng" / "Sắp hết" (&lt;5) / "Còn hàng"
- Static: đếm tổng sản phẩm, tổng doanh thu

### **Bài 4: Hệ thống User (Static + Factory)**

- Class `User` với factory constructor cache theo `username`
- Static: `totalUsers`, `onlineUsers`
- Methods: `login()`, `logout()` (cập nhật `onlineUsers`)
- Private `_password`, public getter `isOnline`
- Static method `getUserByUsername(name)`

### **Bài 5: Thư viện sách (multi-key sort + search + de-dup)**

- Class `Book { String title; String author; int year; int pages; }`, danh sách **>= 10 sách**.
- Yêu cầu:
  1. Loại bỏ trùng `(title, author)`, giữ **bản mới nhất** (`year` lớn nhất).
  2. **Sắp xếp nhiều khóa**: `author` ↑, nếu trùng thì `title` ↑, nếu trùng tiếp thì `year` ↓.
  3. **Tìm kiếm** trong `title` (case-insensitive), trả về **top 5** theo `pages` ↓.
  4. **Thống kê** tổng số trang theo **từng tác giả**, in **tác giả có tổng trang cao nhất**.

### **Bài 6: Danh sách video TikTok (Factory + Static + ranking)**

- Class `TiktokVideo` với factory constructor cache theo `videoId`
- Properties: `videoId`, `title`, `views`, `likes`
- Getter `engagement` = `likes / views`
- Static: `totalViews`, `totalLikes`
- Methods: `play()` (tăng views), `like()` (tăng likes)
- Static method: `getTopVideos(n)` - top N videos theo engagement
- Yêu cầu:
  1. **Xếp hạng** theo `engagement` ↓; nếu bằng nhau, ưu tiên **views** cao hơn.
  2. Chia video thành 3 **bucket**: `<10k`, `10k–100k`, `>100k`; lấy **top 2 engagement** ở **mỗi bucket**.

### **Bài 7: Bảng điểm học sinh (Tổng hợp)**

- Class `Student` với:
  - Private: `_mathScore`, `_physicsScore`, `_chemistryScore`
  - Getter/Setter cho từng điểm (0-10)
  - Getter: `average`, `rank` (Giỏi/Khá/TB/Yếu), `isPassed`
  - Static: `totalStudents`, `excellentCount`
  - Factory constructor: cache theo `studentId`
- Yêu cầu:
  1. Lọc học sinh có `average >= 8.0` → sắp xếp `average` ↓, `name` ↑.
  2. **Tìm kiếm đa điều kiện**: theo `keyword` (tên), `minAge..maxAge`, `minGrade`.
  3. In **top 3** học sinh mỗi lớp theo `average` ↓.
  4. Static method: `showClassReport()` - thống kê số học sinh theo xếp loại

### **Bài 8 (Tuỳ chọn): Shopping Cart System**

- Class `Product` (như bài 3)
- Class `CartItem` với:
  - `product` (Product object)
  - `quantity`
  - Getter `subtotal` = `product.price * quantity`
- Class `ShoppingCart` với:
  - Static singleton instance
  - Private `_items` (`List<CartItem>`)
  - Methods: `addItem()`, `removeItem()`, `updateQuantity()`
  - Getter `total`, `itemCount`
  - Static factory để ensure singleton

### **Bài 9 (Tuỳ chọn): CLI mini-menu**

- Viết chương trình console với menu:
  1. Nhập dữ liệu (chọn Car/Book/Student)
  2. Sắp xếp theo tiêu chí nhập
  3. Tìm kiếm theo từ khóa + bộ lọc
  4. In top-K
  5. Hiển thị thống kê
  6. Thoát
- Yêu cầu:
  - Validate đầu vào (tránh crash).
  - Tách hàm: `sortBy`, `filterBy`, `searchBy`, `topK`.
  - Sử dụng Factory, Static, Private properties

---

_Chúc các em học tốt!_
