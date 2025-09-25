# Buổi 6: Functions (Hàm) trong Dart

**Giới thiệu:** Chào mừng các bạn đến với buổi học về `Function` trong Dart. Function là "trái tim" của mọi ngôn ngữ lập trình, giúp chúng ta tổ chức, tái sử dụng và làm cho code trở nên rõ ràng, dễ bảo trì hơn. Nắm vững function là bước cực kỳ quan trọng để trở thành một lập trình viên giỏi.

**Mục tiêu:**
- Hiểu rõ khái niệm và tầm quan trọng của function.
- Nắm vững cách khai báo, sử dụng các loại tham số và giá trị trả về.
- Biết cách viết code ngắn gọn hơn với Arrow Function.
- Hiểu về phạm vi của biến để tránh các lỗi không đáng có.
- Áp dụng kiến thức đã học vào các bài tập thực tế.

---

### 1. Function là gì? Tại sao cần Function?

**Function (Hàm)** là một khối code được đặt tên, dùng để thực hiện một công việc cụ thể. Thay vì viết đi viết lại cùng một đoạn code ở nhiều nơi, chúng ta có thể đóng gói nó vào một hàm và "gọi" nó bất cứ khi nào cần.

**Tại sao cần dùng Function?**
- **Tái sử dụng (Reusability):** Viết một lần, dùng nhiều lần. Tiết kiệm thời gian và công sức.
- **Tổ chức code (Organization):** Chia một chương trình lớn thành các hàm nhỏ hơn, mỗi hàm đảm nhiệm một chức năng riêng biệt. Điều này làm cho code dễ đọc, dễ hiểu hơn rất nhiều.
- **Dễ bảo trì và sửa lỗi (Maintainability):** Khi cần sửa một logic nào đó, bạn chỉ cần vào đúng hàm chứa nó để sửa, thay vì phải tìm và sửa ở nhiều nơi trong code.
- **Trừu tượng hóa (Abstraction):** Bạn chỉ cần biết hàm đó làm gì qua tên của nó, mà không cần quan tâm nó được triển khai bên trong như thế nào. Ví dụ: bạn gọi hàm `print()` để in ra màn hình mà không cần biết `print()` hoạt động ra sao.

---

### 2. Khai báo và gọi Function

Để sử dụng một hàm, bạn cần thực hiện 2 bước:
1.  **Khai báo (Declaration):** Định nghĩa hàm, bao gồm tên hàm, các tham số đầu vào và khối lệnh nó sẽ thực thi.
2.  **Gọi (Invocation/Calling):** Thực thi hàm bằng cách viết tên hàm kèm theo cặp dấu ngoặc đơn `()`.

#### Cú pháp
```dart
returnType functionName(parameter1, parameter2, ...) {
  // Body of the function
  // Code để thực thi
  return value; // (Nếu có)
}
```

#### Khai báo minh hoạ
```dart
// Hàm không có giá trị trả về
void sayHello() {
  print('Chào mừng bạn đến với Dart!');
}

// Hàm trả về một số nguyên
int getCurrentYear() {
  return 2025;
}
```

#### Giải thích cú pháp
- `returnType`: Kiểu dữ liệu mà hàm sẽ trả về (ví dụ: `int`, `String`, `bool`). Nếu hàm không trả về gì cả, ta dùng `void`.
- `functionName`: Tên của hàm (nên đặt theo quy tắc `camelCase`, ví dụ: `calculateSum`).
- `(parameter1, ...)`: Danh sách các tham số đầu vào.

#### Ví dụ cách gọi hàm
```dart
void main() {
  // Gọi hàm sayHello
  sayHello(); // Output: Chào mừng bạn đến với Dart!

  // Gọi hàm getCurrentYear và gán giá trị trả về cho một biến
  int year = getCurrentYear();
  print('Năm hiện tại là: $year'); // Output: Năm hiện tại là: 2025
}
```

---

### 3. Parameters (Tham số)

Parameters (tham số) là các biến được khai báo trong phần định nghĩa của hàm, cho phép chúng ta truyền dữ liệu từ bên ngoài vào cho hàm xử lý.

#### 3.1. Required Parameters (Tham số bắt buộc)

Đây là các tham số bắt buộc phải được truyền giá trị khi gọi hàm. Chúng được khai báo theo thứ tự.

##### Cú pháp
```dart
functionName(type param1, type param2)
```

##### Khai báo minh hoạ
```dart
void printUserInfo(String name, int age) {
  print('Tên: $name, Tuổi: $age');
}
```

##### Cách gọi
```dart
// Phải truyền đủ và đúng thứ tự
printUserInfo('Bình', 25); // Output: Tên: Bình, Tuổi: 25

// Lỗi nếu gọi thiếu tham số: printUserInfo('Bình');
// Lỗi nếu sai thứ tự kiểu dữ liệu: printUserInfo(25, 'Bình');
```

#### 3.2. Optional Positional Parameters `[]` (Tham số tùy chọn vị trí)

Cho phép bỏ qua một vài tham số khi gọi hàm. Các tham số này phải được đặt trong cặp ngoặc vuông `[]` và nằm ở cuối danh sách tham số. Nếu không được truyền giá trị, chúng sẽ có giá trị mặc định là `null`.

##### Cú pháp
```dart
functionName(requiredParam, [optionalParam1, optionalParam2])
```
##### Khai báo minh hoạ
```dart
// team và jerseyNumber là optional, có thể là null (do có dấu ?)
void printPlayerInfo(String name, [String? team, int? jerseyNumber]) {
  String info = 'Cầu thủ: $name';
  if (team != null) {
    info += ', Đội: $team';
  }
  if (jerseyNumber != null) {
    info += ', Số áo: $jerseyNumber';
  }
  print(info);
}
```
##### Cách gọi
```dart
printPlayerInfo('Quang Hải'); // Output: Cầu thủ: Quang Hải
printPlayerInfo('Quang Hải', 'Công An Hà Nội'); // Output: Cầu thủ: Quang Hải, Đội: Công An Hà Nội
printPlayerInfo('Quang Hải', 'Công An Hà Nội', 19); // Output: Cầu thủ: Quang Hải, Đội: Công An Hà Nội, Số áo: 19
```

#### 3.3. Named Parameters `{}` (Tham số tùy chọn đặt tên)

Đây là loại tham số được sử dụng **phổ biến nhất trong Flutter**. Chúng cho phép truyền giá trị bằng cách gọi tên của tham số, không cần quan tâm đến thứ tự.

##### Cú pháp
```dart
functionName({param1, param2})
```
##### Khai báo minh hoạ
```dart
// Các tham số là optional và có thể là null
void createButton({double? width, double? height, String? text}) {
  print('Tạo button với text: $text, width: $width, height: $height');
}
```
##### Cách gọi
```dart
createButton(text: 'Login'); // Output: Tạo button với text: Login, width: null, height: null
createButton(height: 50.0, width: 200.0, text: 'Submit'); // Thứ tự không quan trọng
createButton(); // Output: Tạo button với text: null, width: null, height: null
```

##### (Bổ sung quan trọng) Từ khóa `required` cho Named Parameters:
Trong các phiên bản Dart mới, để bắt buộc một named parameter phải được truyền giá trị (không được `null`), ta thêm từ khóa `required` phía trước nó.
```dart
// Khai báo minh hoạ
void createPost({required String title, String? content}) {
  print('Bài viết mới: $title');
  if (content != null) {
    print('Nội dung: $content');
  }
}

// Cách gọi
createPost(title: 'Học Dart thật vui'); // Hợp lệ
// createPost(content: 'Abc'); // Lỗi! Vì thiếu tham số `title` được đánh dấu `required`.
```

#### 3.4. Default Values (Giá trị mặc định)

Có thể gán giá trị mặc định cho các tham số optional (cả positional và named). Nếu khi gọi hàm, tham số đó không được truyền giá trị, nó sẽ lấy giá trị mặc định này.

##### Cú pháp
```dart
// Dạng named
functionName({param1 = defaultValue1})

// Dạng positional
functionName([param1 = defaultValue1])
```
##### Khai báo minh hoạ
```dart
void orderCoffee({String type = 'Latte', String size = 'M'}) {
  print('Đặt một ly $type, size $size.');
}
```
##### Cách gọi
```dart
orderCoffee(); // Output: Đặt một ly Latte, size M.
orderCoffee(type: 'Espresso'); // Output: Đặt một ly Espresso, size M.
orderCoffee(size: 'L', type: 'Cappuccino'); // Output: Đặt một ly Cappuccino, size L.
```

---

### 4. Return Values (Giá trị trả về)

Hàm có thể thực hiện tính toán và "trả về" một kết quả cho nơi đã gọi nó bằng từ khóa `return`.

#### Cú pháp
```dart
returnType functionName(params) {
  // ...
  return value;
}
```
#### Khai báo minh hoạ
```dart
// Hàm trả về tổng của 2 số
int sum(int a, int b) {
  return a + b;
}

// Hàm trả về true nếu một số là số chẵn
bool isEven(int number) {
  if (number % 2 == 0) {
    return true;
  } else {
    return false;
  }
}
```
#### Ví dụ cách gọi hàm
```dart
int total = sum(10, 5);
print('Tổng là: $total'); // Output: Tổng là: 15

bool numberIsEven = isEven(99);
print('Số 99 có phải là số chẵn không? $numberIsEven'); // Output: Số 99 có phải là số chẵn không? false
```

---

### 5. Arrow Functions `=>` (Hàm mũi tên)

Đây là một cú pháp ngắn gọn để khai báo hàm khi thân hàm chỉ có **một biểu thức (expression)** duy nhất và giá trị của biểu thức đó cũng chính là giá trị trả về của hàm.

#### Cú pháp
`returnType functionName(params) => expression;`
(Tương đương với: `returnType functionName(params) { return expression; }`)

#### Khai báo minh hoạ
```dart
// Hàm sum viết lại bằng Arrow Function
int sumArrow(int a, int b) => a + b;

// Hàm isEven viết lại bằng Arrow Function
bool isEvenArrow(int number) => number % 2 == 0;

// Hàm không trả về giá trị (void)
void printName(String name) => print('Tên của bạn là: $name');
```
#### Ví dụ cách gọi hàm
```dart
print('Tổng (arrow): ${sumArrow(10, 5)}'); // Output: Tổng (arrow): 15
print('Số 100 có chẵn không? ${isEvenArrow(100)}'); // Output: Số 100 có chẵn không? true
printName('Linh'); // Output: Tên của bạn là: Linh
```

---

### 6. (Bổ sung) Anonymous Functions (Hàm ẩn danh)

Là hàm không có tên. Chúng thường được tạo ra và truyền trực tiếp vào một hàm khác như một tham số (callback). Đây là khái niệm cực kỳ quan trọng trong lập trình bất đồng bộ và UI trong Flutter.

#### Cú pháp
```dart
(parameters) {
  // body
}

// Hoặc dạng arrow
(parameters) => expression;
```
#### Ví dụ minh hoạ
Trong Flutter, bạn sẽ thấy nó ở khắp mọi nơi, ví dụ `onPressed` của một `ElevatedButton`.
```dart
void main() {
  List<String> fruits = ['Táo', 'Chuối', 'Cam'];

  // Sử dụng hàm ẩn danh với forEach để in ra từng phần tử
  fruits.forEach((fruit) {
    print('Tôi thích ăn $fruit');
  });

  // Flutter (ví dụ giả định)
  /*
  ElevatedButton(
    onPressed: () { // Đây là một hàm ẩn danh
      print('Button được nhấn!');
    },
    child: Text('Click Me'),
  )
  */
}
```

---

### 7. (Bổ sung) Higher-Order Functions (Hàm bậc cao)

Là một hàm thỏa mãn một trong hai điều kiện sau (hoặc cả hai):
1.  Chấp nhận một hoặc nhiều hàm khác làm tham số.
2.  Trả về một hàm.

Các hàm như `forEach`, `map`, `where` trên `List` chính là ví dụ điển hình.

#### Ví dụ minh hoạ
```dart
// 1. Hàm nhận một hàm khác làm tham số
void performOperation(int a, int b, Function(int, int) operation) {
  int result = operation(a, b);
  print('Kết quả là: $result');
}

// Các hàm riêng biệt để thực hiện phép toán
int add(int x, int y) => x + y;
int subtract(int x, int y) => x - y;

void main() {
  // Truyền hàm `add` và `subtract` vào như một tham số
  performOperation(10, 5, add); // Output: Kết quả là: 15
  performOperation(10, 5, subtract); // Output: Kết quả là: 5

  // Hoặc truyền một hàm ẩn danh trực tiếp
  performOperation(20, 4, (x, y) => x * y); // Output: Kết quả là: 80
}
```

---

### 8. Scope của biến (Phạm vi của biến)

Scope (phạm vi) quyết định nơi mà một biến có thể được truy cập và sử dụng.
- **Global Scope (Toàn cục):** Biến được khai báo bên ngoài tất cả các hàm. Nó có thể được truy cập từ bất kỳ đâu trong file. (Nên hạn chế dùng)
- **Local Scope (Cục bộ):** Biến được khai báo bên trong một hàm hoặc một khối lệnh (như trong `if`, `for`). Nó chỉ có thể được truy cập từ bên trong hàm/khối lệnh đó.

#### Ví dụ minh hoạ
```dart
String globalVariable = "Tôi là biến toàn cục"; // Global scope

void myFunction() {
  String localVariable = "Tôi là biến cục bộ"; // Local scope
  print(localVariable); // Hợp lệ, có thể truy cập
  print(globalVariable); // Hợp lệ, có thể truy cập
}

void main() {
  myFunction();

  print(globalVariable); // Hợp lệ

  // print(localVariable); // Lỗi! Không thể truy cập `localVariable` từ bên ngoài `myFunction`.
}
```
**Quy tắc:** Dart sẽ luôn ưu tiên tìm biến trong scope gần nhất (local) trước khi tìm ra scope lớn hơn (global).

---

### Mini Project

#### 1. Game đoán số (1-100)

##### **Yêu cầu**

Viết một chương trình dòng lệnh (command-line) cho phép người dùng chơi game đoán số.
-   Khi bắt đầu, máy tính sẽ tự động sinh ra một số nguyên ngẫu nhiên trong khoảng từ 1 đến 100.
-   Chương trình yêu cầu người dùng nhập vào một số để đoán.
-   Nếu số người dùng đoán nhỏ hơn số bí mật, chương trình sẽ in ra: "Số bạn đoán nhỏ quá!".
-   Nếu số người dùng đoán lớn hơn số bí mật, chương trình sẽ in ra: "Số bạn đoán lớn quá!".
-   Nếu người dùng đoán đúng, chương trình in ra: "Chính xác! Bạn đã đoán đúng số bí mật là [số bí mật]." và kết thúc lượt chơi.
-   Trò chơi sẽ lặp lại việc yêu cầu người dùng đoán cho đến khi họ đoán đúng.

##### **Gợi ý cấu trúc (Hãy thử tự làm trước khi xem gợi ý này!)**

Để tổ chức code cho tốt, bạn nên chia chương trình thành các hàm con với nhiệm vụ rõ ràng:

-   **`startGame()`**: Hàm chính để bắt đầu và điều khiển toàn bộ luồng chơi. Hàm này sẽ:
    -   Gọi hàm sinh số ngẫu nhiên để có số bí mật.
    -   Tạo một vòng lặp `while` hoặc `do-while` để liên tục hỏi người dùng.
    -   Trong vòng lặp, gọi hàm để lấy số người dùng đoán.
    -   Gọi hàm kiểm tra và thông báo kết quả cho người dùng.
    -   Vòng lặp sẽ dừng khi người dùng đoán đúng.

-   **`generateRandomNumber()`**:
    -   Không cần tham số.
    -   Trả về (`return`) một số nguyên ngẫu nhiên từ 1 đến 100.
    -   *Gợi ý nhỏ:* Bạn sẽ cần import thư viện `dart:math`.

-   **`getPlayerGuess()`**:
    -   Không cần tham số.
    -   In ra màn hình một thông báo yêu cầu người dùng nhập số.
    -   Đọc dữ liệu người dùng nhập từ bàn phím.
    -   Chuyển đổi chuỗi nhập vào thành số nguyên và `return` số đó.
    -   *Gợi ý nhỏ:* Bạn sẽ cần import thư viện `dart:io`.

-   **`checkGuess(int guess, int correctNumber)`**:
    -   Nhận vào 2 tham số: số người dùng đoán và số bí mật.
    -   So sánh hai số và in ra thông báo gợi ý ("lớn hơn", "nhỏ hơn", "chính xác").
    -   Hàm này nên trả về một giá trị `bool` (`true` nếu đoán đúng, `false` nếu đoán sai) để hàm `startGame` biết khi nào nên dừng vòng lặp.
<!--
##### **Lời giải mẫu**

```dart
import 'dart:io';
import 'dart:math';

// Hàm chính, điều khiển luồng game
void startGame() {
  print("--- Chào mừng đến với Game Đoán Số ---");
  int correctNumber = generateRandomNumber();
  bool guessedCorrectly = false;
  int attempts = 0;

  do {
    int guess = getPlayerGuess();
    attempts++; // Tăng số lần đoán
    guessedCorrectly = checkGuess(guess, correctNumber);
  } while (!guessedCorrectly);

  print("Bạn đã hoàn thành game sau $attempts lần đoán!");
}

// Hàm sinh số ngẫu nhiên từ 1 đến 100
int generateRandomNumber() {
  Random random = Random();
  return random.nextInt(100) + 1; // nextInt(100) sinh số từ 0-99, nên +1
}

// Hàm lấy số người dùng đoán
int getPlayerGuess() {
  while (true) {
    try {
      stdout.write("Hãy đoán một số (1-100): ");
      String? input = stdin.readLineSync();
      return int.parse(input!);
    } catch (e) {
      print("Dữ liệu nhập không hợp lệ. Vui lòng nhập một số nguyên.");
    }
  }
}

// Hàm kiểm tra số đoán và trả về true nếu đúng
bool checkGuess(int guess, int correctNumber) {
  if (guess < correctNumber) {
    print("Số bạn đoán nhỏ quá!");
    return false;
  } else if (guess > correctNumber) {
    print("Số bạn đoán lớn quá!");
    return false;
  } else {
    print("Chính xác! Bạn đã đoán đúng số bí mật là $correctNumber.");
    return true;
  }
}

void main() {
  startGame();
}
```
-->
---

#### 2. Chương trình tính toán với menu lựa chọn

##### **Yêu cầu**

Xây dựng một máy tính bỏ túi đơn giản trên giao diện dòng lệnh.
-   Chương trình sẽ hiển thị một menu các phép toán: Cộng, Trừ, Nhân, Chia và một lựa chọn để Thoát.
-   Người dùng chọn một phép toán.
-   Chương trình yêu cầu người dùng nhập vào hai số.
-   Chương trình thực hiện phép toán tương ứng và in kết quả ra màn hình.
-   Sau khi hoàn thành một phép toán, chương trình sẽ hiển thị lại menu và tiếp tục cho đến khi người dùng chọn "Thoát".
-   **Yêu cầu đặc biệt:** Với phép chia, cần kiểm tra nếu người dùng nhập số chia là 0 thì phải báo lỗi "Không thể chia cho 0!" và không thực hiện phép tính.

##### **Gợi ý cấu trúc**

-   **`main()`**: Hàm chính sẽ chứa vòng lặp `while(true)` để chương trình chạy liên tục.
    -   Bên trong vòng lặp: gọi `showMenu()`, đọc lựa chọn của người dùng.
    -   Sử dụng cấu trúc `switch-case` hoặc `if-else if` để xử lý lựa chọn.
    -   Nếu người dùng chọn 1-4, yêu cầu nhập 2 số, sau đó gọi hàm tính toán tương ứng và in kết quả.
    -   Nếu người dùng chọn 0, in thông báo tạm biệt và dùng `break` để thoát khỏi vòng lặp.

-   **`showMenu()`**:
    -   Không có tham số, không trả về giá trị (`void`).
    -   Chỉ có nhiệm vụ `print` ra các dòng text của menu.

-   **`getTwoNumbers()`**:
    -   Hàm này có thể được thiết kế để trả về một `List<double>` chứa 2 số mà người dùng nhập. Điều này giúp tránh lặp lại code yêu cầu nhập số.

-   **Các hàm tính toán**:
    -   `add(double a, double b)`: Trả về `a + b`.
    -   `subtract(double a, double b)`: Trả về `a - b`.
    -   `multiply(double a, double b)`: Trả về `a * b`.
    -   `divide(double a, double b)`: Kiểm tra nếu `b == 0` thì in lỗi, ngược lại trả về `a / b`. Hàm này có thể trả về `double?` (một số hoặc `null`) để biểu thị phép tính có thành công hay không.

<!--
##### **Lời giải mẫu**

```dart
import 'dart:io';

// Hiển thị menu lựa chọn
void showMenu() {
  print("\n--- MÁY TÍNH BỎ TÚI ---");
  print("1. Cộng");
  print("2. Trừ");
  print("3. Nhân");
  print("4. Chia");
  print("0. Thoát chương trình");
  print("------------------------");
}

// Hàm lấy lựa chọn từ người dùng
int getChoice() {
  while (true) {
    try {
      stdout.write("Mời bạn chọn phép tính: ");
      return int.parse(stdin.readLineSync()!);
    } catch (e) {
      print("Lựa chọn không hợp lệ. Vui lòng nhập số từ 0-4.");
    }
  }
}

// Hàm yêu cầu nhập 2 số
List<double> getTwoNumbers() {
  while (true) {
    try {
      stdout.write("Nhập số thứ nhất: ");
      double num1 = double.parse(stdin.readLineSync()!);
      stdout.write("Nhập số thứ hai: ");
      double num2 = double.parse(stdin.readLineSync()!);
      return [num1, num2];
    } catch (e) {
      print("Dữ liệu nhập không hợp lệ. Vui lòng nhập số.");
    }
  }
}

// Các hàm thực hiện phép toán
double add(double a, double b) => a + b;
double subtract(double a, double b) => a - b;
double multiply(double a, double b) => a * b;

// Hàm chia có xử lý lỗi
void performDivision(double a, double b) {
  if (b == 0) {
    print("Lỗi: Không thể chia cho 0!");
  } else {
    print("Kết quả: $a / $b = ${a / b}");
  }
}

void main() {
  while (true) {
    showMenu();
    int choice = getChoice();

    if (choice == 0) {
      print("Cảm ơn đã sử dụng chương trình. Tạm biệt!");
      break; // Thoát vòng lặp
    }
    
    if (choice < 1 || choice > 4) {
        print("Lựa chọn không nằm trong menu, vui lòng chọn lại.");
        continue; // Bỏ qua phần còn lại và lặp lại
    }

    List<double> numbers = getTwoNumbers();
    double num1 = numbers[0];
    double num2 = numbers[1];

    switch (choice) {
      case 1:
        print("Kết quả: $num1 + $num2 = ${add(num1, num2)}");
        break;
      case 2:
        print("Kết quả: $num1 - $num2 = ${subtract(num1, num2)}");
        break;
      case 3:
        print("Kết quả: $num1 * $num2 = ${multiply(num1, num2)}");
        break;
      case 4:
        performDivision(num1, num2);
        break;
    }
  }
}
```
-->