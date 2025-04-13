---
title: Hướng dẫn xây dựng UI Calculator đơn giản
authors: [quanglm]
tags: [flutter, tutorial, layout, ui, beginner]
---

Chào mừng các bạn đến với bài hướng dẫn xây dựng một ứng dụng máy tính (Calculator) đơn giản bằng Flutter. Mục tiêu chính của bài này không phải là tạo ra một chiếc máy tính đầy đủ chức năng, mà là giúp các bạn làm quen với cách Flutter xây dựng UI thông qua các Widget layout cơ bản như `Column`, `Row`, và `Expanded`.

Chúng ta sẽ chỉ thực hiện hai phép tính cơ bản là cộng (+) và trừ (-).

**Kết quả cuối cùng trông sẽ như thế này:**

<img src="https://external-preview.redd.it/ios-18-pb5-calculator-app-is-retaining-the-previous-result-v0-Nm1leHZleXBhd2pkMTNIPyaMkjFcS3mNlAlxRFe6Kq3iTxqbm8bNNpfv74QF.png?format=pjpg&auto=webp&s=d82691da1c89be610d3ee496a7bf3a44d66c878b" alt="Calculator Preview" width="300"/>

Chúng ta sẽ chia bài học thành nhiều nhiệm vụ nhỏ, mỗi nhiệm vụ sẽ xây dựng thêm một phần cho ứng dụng và bạn có thể chạy thử code sau mỗi nhiệm vụ.

Bắt đầu nào!

## Nhiệm vụ 1: Khởi tạo Project và Phân chia Layout Chính

**Mục tiêu:** Tạo một project Flutter mới và sử dụng `Column`, `Expanded` để chia màn hình thành hai khu vực chính: khu vực hiển thị kết quả và khu vực bàn phím.

**Bước 1: Tạo Project Flutter mới**

Mở terminal hoặc command prompt của bạn và chạy lệnh sau:

```bash
flutter create simple_calculator
cd simple_calculator
```

Mở thư mục `simple_calculator` bằng VS Code hoặc Android Studio.

**Bước 2: Xóa code mặc định và chuẩn bị cấu trúc cơ bản**

Mở file `lib/main.dart`. Xóa toàn bộ nội dung và thay thế bằng cấu trúc cơ bản sau:

```dart
import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Simple Calculator',
      theme: ThemeData(
        primarySwatch: Colors.blue, // Bạn có thể chọn màu chủ đạo khác
      ),
      home: const CalculatorScreen(),
      debugShowCheckedModeBanner: false, // Ẩn banner debug
    );
  }
}

class CalculatorScreen extends StatelessWidget {
  const CalculatorScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      // Chúng ta sẽ xây dựng body ở đây
      body: SafeArea( // SafeArea để tránh các phần tử UI bị che bởi notch hoặc thanh trạng thái
        child: Text('Hello Calculator!'), // Tạm thởi hiển thị text
      ),
    );
  }
}
```

*   `main()`: Điểm khởi đầu của ứng dụng.
*   `MyApp`: Widget gốc, sử dụng `MaterialApp` để cung cấp các thành phần Material Design.
*   `CalculatorScreen`: Widget đại diện cho màn hình chính của chúng ta, sử dụng `Scaffold` làm cấu trúc cơ bản.
*   `SafeArea`: Đảm bảo nội dung không bị các yếu tố hệ thống (như tai thỏ) che khuất.

**Bước 3: Phân chia màn hình bằng Column và Expanded**

Bây giờ, chúng ta sẽ thay thế `Text('Hello Calculator!')` trong `Scaffold`'s `body` bằng một `Column` để xếp các thành phần theo chiều dọc. Bên trong `Column`, chúng ta sẽ dùng hai `Expanded` widget để chia không gian màn hình.

`Expanded` cho phép một widget con của `Row`, `Column`, hoặc `Flex` chiếm lấy không gian còn lại. Thuộc tính `flex` xác định tỷ lệ không gian mà mỗi `Expanded` sẽ chiếm.

```dart
import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Simple Calculator',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: const CalculatorScreen(),
      debugShowCheckedModeBanner: false,
    );
  }
}

class CalculatorScreen extends StatelessWidget {
  const CalculatorScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SafeArea(
        child: Column(
          children: <Widget>[
            // Khu vực hiển thị kết quả (chiếm 2 phần)
            Expanded(
              flex: 2,
              child: Container(
                color: Colors.blueGrey[100], // Màu nền tạm thởi
                child: const Center(
                  child: Text(
                    'Khu vực Hiển thị (flex: 2)',
                    style: TextStyle(fontSize: 18, color: Colors.black54),
                  ),
                ),
              ),
            ),
            // Khu vực bàn phím (chiếm 5 phần)
            Expanded(
              flex: 5,
              child: Container(
                color: Colors.grey[300], // Màu nền tạm thởi
                child: const Center(
                  child: Text(
                    'Khu vực Bàn phím (flex: 5)',
                    style: TextStyle(fontSize: 18, color: Colors.black54),
                  ),
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
```

**Chạy thử:**

Nhấn F5 hoặc chạy lệnh `flutter run` trong terminal. Bạn sẽ thấy màn hình được chia thành hai phần rõ rệt theo tỷ lệ 2:5 với màu nền khác nhau.

Vậy là chúng ta đã hoàn thành bước đầu tiên, tạo ra cấu trúc layout chính cho ứng dụng. Ở nhiệm vụ tiếp theo, chúng ta sẽ thiết kế chi tiết cho khu vực hiển thị kết quả.

---

## Nhiệm vụ 2: Thiết kế Khu vực Hiển thị Kết quả

**Mục tiêu:** Thêm và định dạng `Text` widget trong khu vực phía trên để hiển thị số (ban đầu là "0") giống như màn hình máy tính.

**Bước 1: Cập nhật Khu vực Hiển thị**

Trong file `lib/main.dart`, chúng ta sẽ sửa đổi `Container` đầu tiên (cái có `flex: 2`). Thay vì hiển thị text tạm thởi, chúng ta sẽ đặt một `Text` widget thực sự để hiển thị số "0". Chúng ta dùng `Alignment.bottomRight` để đẩy số về góc dướibên phải và `Padding` để tạo khoảng cách với mép.

```dart
import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Simple Calculator',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: const CalculatorScreen(),
      debugShowCheckedModeBanner: false,
    );
  }
}

class CalculatorScreen extends StatelessWidget {
  const CalculatorScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SafeArea(
        child: Column(
          children: <Widget>[
            // Khu vực hiển thị kết quả (Cập nhật)
            Expanded(
              flex: 2,
              child: Container(
                color: Colors.blueGrey[100], // Vẫn giữ màu nền tạm thởi
                alignment: Alignment.bottomRight, // Đẩy nội dung xuống góc phải dướ
                padding: const EdgeInsets.symmetric(
                  vertical: 24.0,
                  horizontal: 12.0,
                ), // Thêm padding
                child: const Text(
                  '0', // Hiển thị số 0 ban đầu
                  style: TextStyle(
                    fontSize: 48.0, // Kích thước font lớn
                    fontWeight: FontWeight.bold, // In đậm
                    color: Colors.black, // Màu chữ (sẽ đổi sau)
                  ),
                ),
              ),
            ),
            // Khu vực bàn phím (Giữ nguyên)
            Expanded(
              flex: 5,
              child: Container(
                color: Colors.grey[300],
                child: const Center(
                  child: Text(
                    'Khu vực Bàn phím (flex: 5)',
                    style: TextStyle(fontSize: 18, color: Colors.black54),
                  ),
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
```

**Giải thích:**

*   `alignment: Alignment.bottomRight`: Thuộc tính này của `Container` điều khiển vị trí của widget con bên trong nó. `bottomRight` nghĩa là đặt ở góc dướicùng bên phải.
*   `padding`: Tạo khoảng trống xung quanh widget con (`Text`). `EdgeInsets.symmetric` cho phép đặt padding khác nhau cho chiều dọc (`vertical`) và chiều ngang (`horizontal`).
*   `Text('0', ...)`: Hiển thị chuỗi '0'.
*   `style: TextStyle(...)`: Định dạng cho `Text`, bao gồm `fontSize` (kích thước chữ), `fontWeight` (độ đậm), và `color` (màu chữ).

**Chạy thử:**

Lưu file và chạy lại ứng dụng (`flutter run` hoặc hot reload). Bạn sẽ thấy khu vực hiển thị phía trên giờ đây có số "0" lớn, màu đen, nằm ở góc dướibên phải, bên trong vùng nền màu xanh xám nhạt.

Khu vực hiển thị đã ổn! Tiếp theo, chúng ta sẽ bắt tay vào xây dựng phần thú vị hơn: các nút bấm trong khu vực bàn phím.

---

## Nhiệm vụ 3: Xây dựng Hàm Tạo Button và Hàng Nút Đầu tiên

**Mục tiêu:** Tạo một hàm có thể tái sử dụng để xây dựng các nút bấm (`_buildButton`) và tạo hàng nút đầu tiên ('AC', '+/-', '%', '÷') trong khu vực bàn phím.

**Bước 1: Chuẩn bị Khu vực Bàn phím**

Trong `CalculatorScreen`, chúng ta sẽ thay thế `Center` widget bên trong `Expanded` thứ hai (`flex: 5`) bằng một `Column`. `Column` này sẽ chứa các hàng nút của chúng ta.

**Bước 2: Tạo Hàm `_buildButton`**

Để tránh lặp lại code khi tạo nhiều nút bấm giống nhau, chúng ta sẽ tạo một hàm trợ giúp. Vì `CalculatorScreen` hiện là `StatelessWidget`, chúng ta có thể định nghĩa hàm này ngay bên trong lớp.

Hàm này sẽ nhận vào `text` hiển thị trên nút và một `buttonColor` tùy chọn. Nó sẽ trả về một `Expanded` widget. Việc bọc `ElevatedButton` trong `Expanded` đảm bảo rằng mỗi nút sẽ cố gắng chiếm không gian bằng nhau theo chiều ngang trong `Row` chứa nó.

```dart
// Đặt hàm này bên trong lớp CalculatorScreen
Widget _buildButton(String buttonText, {Color? buttonColor}) {
  // Màu nền mặc định nếu không được cung cấp
  final bgColor = buttonColor ?? Colors.grey[700]; // Màu xám tối mặc định

  return Expanded(
    child: Padding(
      padding: const EdgeInsets.all(4.0), // Khoảng cách nhỏ giữa các nút
      child: ElevatedButton(
        onPressed: () {
          // Tạm thởi chưa làm gì cả
          print('$buttonText pressed');
        },
        style: ElevatedButton.styleFrom(
          backgroundColor: bgColor, // Màu nền nút
          foregroundColor: Colors.white, // Màu chữ
          shape: RoundedRectangleBorder( // Bo tròn nhẹ các góc
            borderRadius: BorderRadius.circular(12),
          ),
          padding: const EdgeInsets.symmetric(vertical: 18), // Tăng chiều cao nút
        ),
        child: Text(
          buttonText,
          style: const TextStyle(
            fontSize: 20.0,
            fontWeight: FontWeight.bold,
          ),
        ),
      ),
    ),
  );
}
```

**Bước 3: Xây dựng Hàng Nút Đầu tiên**

Bây giờ, trong `Column` của khu vực bàn phím, chúng ta sẽ thêm một `Expanded` chứa `Row`. `Row` này sẽ chứa 4 nút đầu tiên, được tạo bằng hàm `_buildButton` vừa viết. Chúng ta sẽ đặt `flex: 1` cho `Expanded` này (và các `Expanded` chứa các hàng nút sau) để các hàng nút chia đều không gian theo chiều dọc.

Cập nhật lại `build` method của `CalculatorScreen`:

```dart
import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Simple Calculator',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: const CalculatorScreen(),
      debugShowCheckedModeBanner: false,
    );
  }
}

class CalculatorScreen extends StatelessWidget {
  const CalculatorScreen({super.key});

  // Hàm tạo nút (đặt bên trong class)
  Widget _buildButton(String buttonText, {Color? buttonColor}) {
    final bgColor = buttonColor ?? Colors.grey[700];

    return Expanded(
      child: Padding(
        padding: const EdgeInsets.all(4.0),
        child: ElevatedButton(
          onPressed: () {
            print('$buttonText pressed');
          },
          style: ElevatedButton.styleFrom(
            backgroundColor: bgColor,
            foregroundColor: Colors.white,
            shape: RoundedRectangleBorder(
              borderRadius: BorderRadius.circular(12),
            ),
            padding: const EdgeInsets.symmetric(vertical: 18),
          ),
          child: Text(
            buttonText,
            style: const TextStyle(
              fontSize: 20.0,
              fontWeight: FontWeight.bold,
            ),
          ),
        ),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SafeArea(
        child: Column(
          children: <Widget>[
            // Khu vực hiển thị kết quả (Giữ nguyên)
            Expanded(
              flex: 2,
              child: Container(
                color: Colors.blueGrey[100],
                alignment: Alignment.bottomRight,
                padding: const EdgeInsets.symmetric(
                  vertical: 24.0,
                  horizontal: 12.0,
                ),
                child: const Text(
                  '0',
                  style: TextStyle(
                    fontSize: 48.0,
                    fontWeight: FontWeight.bold,
                    color: Colors.black,
                  ),
                ),
              ),
            ),
            // Khu vực bàn phím (Cập nhật)
            Expanded(
              flex: 5,
              child: Container(
                color: Colors.grey[300], // Vẫn giữ màu nền tạm thởi
                child: Column( // Bắt đầu Column cho các hàng nút
                  children: <Widget>[
                    // Hàng nút đầu tiên
                    Expanded( // Mỗi hàng nút chiếm không gian bằng nhau
                      flex: 1,
                      child: Row(
                        crossAxisAlignment: CrossAxisAlignment.stretch, // Kéo dãn nút theo chiều cao
                        children: <Widget>[
                          _buildButton('AC', buttonColor: Colors.grey[500]), // Màu khác cho AC
                          _buildButton('+/-', buttonColor: Colors.grey[500]),
                          _buildButton('%', buttonColor: Colors.grey[500]),
                          _buildButton('÷', buttonColor: Colors.orange[700]), // Màu cam cho toán tử
                        ],
                      ),
                    ),
                    // Các hàng nút tiếp theo sẽ được thêm vào đây...
                  ],
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
```

**Giải thích:**

*   `Container` của bàn phím giờ chứa một `Column`.
*   `Column` này chứa các `Expanded` (với `flex: 1`), mỗi `Expanded` đại diện cho một hàng nút.
*   Bên trong `Expanded` đầu tiên là một `Row`.
*   `crossAxisAlignment: CrossAxisAlignment.stretch` trong `Row` làm cho các nút con (là các `Expanded` trả về từ `_buildButton`) tự động kéo dãn chiều cao để lấp đầy `Row`.
*   Chúng ta gọi `_buildButton` 4 lần, truyền các text khác nhau và màu tùy chỉnh cho nút 'AC', '+/-', '%' (màu xám nhạt hơn) và nút chia '÷' (màu cam).
*   `onPressed` hiện chỉ in ra console tên nút được nhấn để kiểm tra.

**Chạy thử:**

Lưu file và chạy lại ứng dụng. Bạn sẽ thấy hàng nút đầu tiên xuất hiện bên dướikhu vực hiển thị. Các nút được căn chỉnh và có màu sắc khác nhau.

Tuyệt vời! Chúng ta đã tái sử dụng code hiệu quả với hàm `_buildButton` và tạo ra hàng nút đầu tiên. Ở nhiệm vụ tiếp theo, chúng ta sẽ hoàn thiện toàn bộ bàn phím bằng cách thêm các hàng nút còn lại.

---

## Nhiệm vụ 4: Hoàn thiện Layout Bàn phím

**Mục tiêu:** Sử dụng hàm `_buildButton` để thêm tất cả các hàng nút còn lại, hoàn thiện giao diện tĩnh của calculator.

**Bước 1: Thêm các Hàng Nút Còn Lại**

Chúng ta sẽ tiếp tục thêm các `Expanded` chứa `Row` vào `Column` bên trong `Container` của khu vực bàn phím. Mỗi `Row` sẽ đại diện cho một hàng nút.

Cập nhật lại `build` method của `CalculatorScreen` để bao gồm tất cả các hàng nút:

```dart
import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Simple Calculator',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: const CalculatorScreen(),
      debugShowCheckedModeBanner: false,
    );
  }
}

class CalculatorScreen extends StatelessWidget {
  const CalculatorScreen({super.key});

  // Hàm tạo nút (Thêm tham số onPressed kiểu VoidCallback)
  Widget _buildButton(String buttonText, {Color? buttonColor, int flex = 1, required VoidCallback onPressed}) {
    
    Color finalButtonColor;
    Color finalTextColor = Colors.white;

    // Xác định màu dựa trên text
    if (['AC', '+/-', '%'].contains(buttonText)) {
        finalButtonColor = Colors.grey; 
        finalTextColor = Colors.black;
    } else if (['÷', 'x', '-', '+', '='].contains(buttonText)) {
        finalButtonColor = Colors.orange;
    } else {
        finalButtonColor = const Color(0xFF333333); // Màu số mặc định
    }
    
    // Ghi đè màu nếu được cung cấp trực tiếp (ít dùng hơn)
    if (buttonColor != null) {
      finalButtonColor = buttonColor;
    }

    return Expanded(
      flex: flex,
      child: Padding(
        padding: const EdgeInsets.all(5.0), // Tăng nhẹ padding
        child: ElevatedButton(
          onPressed: onPressed, 
          style: ElevatedButton.styleFrom(
            backgroundColor: finalButtonColor,
            foregroundColor: finalTextColor,
            shape: const CircleBorder(), // Làm nút tròn hoàn toàn
            padding: EdgeInsets.zero, // Để Text tự căn giữa trong Circle
          ),
          // Cần 1 Container để căn giữa Text trong nút tròn
          child: Center(
            child: Text(
              buttonText,
              style: const TextStyle(
                fontSize: 26.0, // Tăng cỡ chữ nút
                fontWeight: FontWeight.w500, // Điều chỉnh độ đậm
              ),
            ),
          ),
        ),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SafeArea(
        child: Column(
          children: <Widget>[
            // Khu vực hiển thị kết quả (Giữ nguyên)
            Expanded(
              flex: 2,
              child: Container(
                color: Colors.blueGrey[100],
                alignment: Alignment.bottomRight,
                padding: const EdgeInsets.symmetric(
                  vertical: 24.0,
                  horizontal: 12.0,
                ),
                child: const Text(
                  '0',
                  style: TextStyle(
                    fontSize: 48.0,
                    fontWeight: FontWeight.bold,
                    color: Colors.black,
                  ),
                ),
              ),
            ),
            // Khu vực bàn phím (Hoàn thiện)
            Expanded(
              flex: 5,
              child: Container(
                color: Colors.grey[300], // Vẫn giữ màu nền tạm thởi
                child: Column( 
                  children: <Widget>[
                    // Hàng 1
                    Expanded(
                      child: Row(
                        crossAxisAlignment: CrossAxisAlignment.stretch,
                        children: <Widget>[
                          _buildButton('AC', onPressed: () => print('AC pressed')),
                          _buildButton('+/-', onPressed: () => print('+/- pressed')),
                          _buildButton('%', onPressed: () => print('% pressed')),
                          _buildButton('÷', onPressed: () => print('÷ pressed')),
                        ],
                      ),
                    ),
                    // Hàng 2
                    Expanded(
                      child: Row(
                        crossAxisAlignment: CrossAxisAlignment.stretch,
                        children: <Widget>[
                          _buildButton('7', onPressed: () => print('7 pressed')),
                          _buildButton('8', onPressed: () => print('8 pressed')),
                          _buildButton('9', onPressed: () => print('9 pressed')),
                          _buildButton('x', onPressed: () => print('x pressed')),
                        ],
                      ),
                    ),
                    // Hàng 3
                    Expanded(
                      child: Row(
                        crossAxisAlignment: CrossAxisAlignment.stretch,
                        children: <Widget>[
                          _buildButton('4', onPressed: () => print('4 pressed')),
                          _buildButton('5', onPressed: () => print('5 pressed')),
                          _buildButton('6', onPressed: () => print('6 pressed')),
                          _buildButton('-', onPressed: () => print('- pressed')),
                        ],
                      ),
                    ),
                    // Hàng 4
                    Expanded(
                      child: Row(
                        crossAxisAlignment: CrossAxisAlignment.stretch,
                        children: <Widget>[
                          _buildButton('1', onPressed: () => print('1 pressed')),
                          _buildButton('2', onPressed: () => print('2 pressed')),
                          _buildButton('3', onPressed: () => print('3 pressed')),
                          _buildButton('+', onPressed: () => print('+ pressed')),
                        ],
                      ),
                    ),
                    // Hàng 5
                    Expanded(
                      child: Row(
                        crossAxisAlignment: CrossAxisAlignment.stretch,
                        children: <Widget>[
                          // Nút '0' chiếm 2 phần không gian
                          _buildButton('0', flex: 2, onPressed: () => print('0 pressed')),
                          _buildButton('.', onPressed: () => print('. pressed')),
                          _buildButton('=', onPressed: () => print('= pressed')),
                        ],
                      ),
                    ),
                    const SizedBox(height: 10), // Thêm khoảng trống nhỏ ở dướicùng
                  ],
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
```

**Giải thích:**

*   Chúng ta đã thêm 4 khối `Expanded(child: Row(...))` nữa vào `Column`.
*   Hàm `_buildButton` được cập nhật để nhận thêm tham số `flex` (mặc định là 1). Điều này cho phép chúng ta làm cho nút '0' rộng gấp đôi các nút khác bằng cách truyền `flex: 2`.
*   Các biến màu được định nghĩa ở đầu phương thức `build` để dễ dàng thay đổi và quản lý (`operatorColor`, `topButtonColor`, `numberButtonColor`). Bạn có thể điều chỉnh các giá trị màu này theo ý thích.
*   Các nút số và nút '.' sử dụng `numberButtonColor` (màu xám tối mặc định).
*   Các nút phép tính ('÷', 'x', '-', '+', '=') sử dụng `operatorColor` (màu cam).
*   Các nút chức năng hàng đầu ('AC', '+/-', '%') sử dụng `topButtonColor` (màu xám sáng).
*   Tất cả các `onPressed` vẫn chỉ đang in ra console.

**Chạy thử:**

Lưu file và chạy lại ứng dụng. Bây giờ bạn sẽ thấy giao diện máy tính hoàn chỉnh về mặt layout, với đầy đủ các nút bấm được sắp xếp và tô màu.

Layout đã xong! Bước tiếp theo, chúng ta sẽ làm cho các nút số hoạt động và cập nhật giá trị trên màn hình hiển thị.

---

## Nhiệm vụ 5: Thêm Trạng thái và Cập nhật Hiển thị khi Nhấn Số

**Mục tiêu:** Chuyển sang `StatefulWidget`, làm cho việc nhấn các nút số (0-9) cập nhật giá trị hiển thị, và áp dụng màu sắc cuối cùng cho ứng dụng.

**Bước 1: Chuyển sang StatefulWidget**

Để lưu trữ và cập nhật giá trị hiển thị (`_displayString`), chúng ta cần trạng thái. Do đó, `CalculatorScreen` cần trở thành một `StatefulWidget`.

Thay đổi cấu trúc của `CalculatorScreen` như sau:

```dart
import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    // Sử dụng theme tối làm cơ sở
    return MaterialApp(
      title: 'Simple Calculator',
      theme: ThemeData.dark().copyWith(
        scaffoldBackgroundColor: Colors.black, // Nền đen mặc định
      ),
      home: const CalculatorScreen(),
      debugShowCheckedModeBanner: false,
    );
  }
}

// Chuyển thành StatefulWidget
class CalculatorScreen extends StatefulWidget {
  const CalculatorScreen({super.key});

  @override
  State<CalculatorScreen> createState() => _CalculatorScreenState();
}

// Lớp State tương ứng
class _CalculatorScreenState extends State<CalculatorScreen> {
  // Biến trạng thái để lưu chuỗi hiển thị trên màn hình
  String _displayString = '0';

  // --- Hàm _buildButton và build() sẽ được chuyển vào đây --- 

  @override
  Widget build(BuildContext context) {
    // ... Nội dung của phương thức build cũ ...
    // ... sẽ được chuyển vào đây và điều chỉnh ...
    return Scaffold(); // Tạm thởi
  }
}
```

**Bước 2: Di chuyển Logic Build và Cập nhật Màu sắc**

Di chuyển hàm `_buildButton` và nội dung của phương thức `build` từ `StatelessWidget` cũ vào bên trong lớp `_CalculatorScreenState`. Đồng thởi, cập nhật màu sắc cho giao diện cuối cùng:

*   `Scaffold`: `backgroundColor: Colors.black` (đã đặt trong theme)
*   `Container` hiển thị và bàn phím: Bỏ màu nền.
*   Màu chữ hiển thị: `Colors.white`
*   Màu nút: Xám tối cho số, Cam cho toán tử, Xám sáng cho chức năng.

```dart
import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Simple Calculator',
      theme: ThemeData.dark().copyWith(
        scaffoldBackgroundColor: Colors.black,
      ),
      home: const CalculatorScreen(),
      debugShowCheckedModeBanner: false,
    );
  }
}

class CalculatorScreen extends StatefulWidget {
  const CalculatorScreen({super.key});

  @override
  State<CalculatorScreen> createState() => _CalculatorScreenState();
}

class _CalculatorScreenState extends State<CalculatorScreen> {
  String _displayString = '0';

  // === Hàm xử lý logic khi nhấn nút ===
  void _handleButtonPress(String text) {
    // Xử lý nút số
    if (int.tryParse(text) != null) { // Kiểm tra xem có phải là số không
      setState(() {
        if (_displayString == '0') {
          _displayString = text; // Thay thế số 0 ban đầu
        } else {
          // Thêm giới hạn độ dài để tránh tràn màn hình (tùy chọn)
          if (_displayString.length < 9) { 
             _displayString += text; // Nối số vào chuỗi hiện tại
          }
        }
      });
    } else {
      // Xử lý các nút khác (AC, +, -, =, ...) sẽ ở Nhiệm vụ 6
      if (text == 'AC') {
         setState(() {
           _displayString = '0';
           // Reset các biến khác nếu có (sẽ thêm ở N6)
         });
      }
      // ... logic cho các nút khác ...
    }
  }

  // Hàm tạo nút (Thêm tham số onPressed kiểu VoidCallback)
  Widget _buildButton(String buttonText, {Color? buttonColor, int flex = 1, required VoidCallback onPressed}) {
    
    Color finalButtonColor;
    Color finalTextColor = Colors.white;

    // Xác định màu dựa trên text
    if (['AC', '+/-', '%'].contains(buttonText)) {
        finalButtonColor = Colors.grey; 
        finalTextColor = Colors.black;
    } else if (['÷', 'x', '-', '+', '='].contains(buttonText)) {
        finalButtonColor = Colors.orange;
    } else {
        finalButtonColor = const Color(0xFF333333); // Màu số mặc định
    }
    
    // Ghi đè màu nếu được cung cấp trực tiếp (ít dùng hơn)
    if (buttonColor != null) {
      finalButtonColor = buttonColor;
    }

    return Expanded(
      flex: flex,
      child: Padding(
        padding: const EdgeInsets.all(5.0), // Tăng nhẹ padding
        child: ElevatedButton(
          onPressed: onPressed, 
          style: ElevatedButton.styleFrom(
            backgroundColor: finalButtonColor,
            foregroundColor: finalTextColor,
            shape: const CircleBorder(), // Làm nút tròn hoàn toàn
            padding: EdgeInsets.zero, // Để Text tự căn giữa trong Circle
          ),
          // Cần 1 Container để căn giữa Text trong nút tròn
          child: Center(
            child: Text(
              buttonText,
              style: const TextStyle(
                fontSize: 26.0, // Tăng cỡ chữ nút
                fontWeight: FontWeight.w500, // Điều chỉnh độ đậm
              ),
            ),
          ),
        ),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SafeArea(
        child: Column(
          children: <Widget>[
            // Khu vực hiển thị
            Expanded(
              flex: 2,
              child: Container(
                alignment: Alignment.bottomRight,
                padding: const EdgeInsets.symmetric(
                  vertical: 10.0, // Giảm padding dọc
                  horizontal: 20.0, // Tăng padding ngang
                ),
                child: Text(
                  _displayString, // Sử dụng biến trạng thái
                  style: const TextStyle(
                    fontSize: 72.0, // Tăng mạnh cỡ chữ hiển thị
                    fontWeight: FontWeight.w300,
                    color: Colors.white,
                  ),
                  maxLines: 1,
                  overflow: TextOverflow.ellipsis,
                ),
              ),
            ),
            // Khu vực bàn phím
            Expanded(
              flex: 5,
              child: Padding( // Thêm padding cho toàn bộ bàn phím
                padding: const EdgeInsets.symmetric(horizontal: 8.0),
                child: Column( 
                  children: <Widget>[
                    // Hàng 1
                    Expanded( // Mỗi hàng nút chiếm không gian bằng nhau
                      flex: 1,
                      child: Row(
                        crossAxisAlignment: CrossAxisAlignment.stretch, // Kéo dãn nút theo chiều cao
                        children: <Widget>[
                          _buildButton('AC', onPressed: () => _handleButtonPress('AC')),
                          _buildButton('+/-', onPressed: () => _handleButtonPress('+/-')),
                          _buildButton('%', onPressed: () => _handleButtonPress('%')),
                          _buildButton('÷', onPressed: () => _handleButtonPress('÷')),
                        ],
                      ),
                    ),
                    // Hàng 2
                    Expanded(
                      child: Row(
                        crossAxisAlignment: CrossAxisAlignment.stretch,
                        children: <Widget>[
                          _buildButton('7', onPressed: () => _handleButtonPress('7')),
                          _buildButton('8', onPressed: () => _handleButtonPress('8')),
                          _buildButton('9', onPressed: () => _handleButtonPress('9')),
                          _buildButton('x', onPressed: () => _handleButtonPress('x')),
                        ],
                      ),
                    ),
                    // Hàng 3
                    Expanded(
                      child: Row(
                        crossAxisAlignment: CrossAxisAlignment.stretch,
                        children: <Widget>[
                          _buildButton('4', onPressed: () => _handleButtonPress('4')),
                          _buildButton('5', onPressed: () => _handleButtonPress('5')),
                          _buildButton('6', onPressed: () => _handleButtonPress('6')),
                          _buildButton('-', onPressed: () => _handleButtonPress('-')),
                        ],
                      ),
                    ),
                    // Hàng 4
                    Expanded(
                      child: Row(
                        crossAxisAlignment: CrossAxisAlignment.stretch,
                        children: <Widget>[
                          _buildButton('1', onPressed: () => _handleButtonPress('1')),
                          _buildButton('2', onPressed: () => _handleButtonPress('2')),
                          _buildButton('3', onPressed: () => _handleButtonPress('3')),
                          _buildButton('+', onPressed: () => _handleButtonPress('+')),
                        ],
                      ),
                    ),
                    // Hàng 5
                    Expanded(
                      child: Row(
                        crossAxisAlignment: CrossAxisAlignment.stretch,
                        children: <Widget>[
                          _buildButton('0', flex: 2, onPressed: () => _handleButtonPress('0')),
                          _buildButton('.', onPressed: () => _handleButtonPress('.')),
                          _buildButton('=', onPressed: () => _handleButtonPress('=')),
                        ],
                      ),
                    ),
                    const SizedBox(height: 10), // Thêm khoảng trống nhỏ ở dướicùng
                  ],
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
```

**Giải thích Logic trong `_handleButtonPress`:**

*   **Số:** Nếu đang chờ nhập số thứ hai (`_isEnteringSecondOperand` là true), thì số mới nhấn sẽ thay thế `_displayString`. Nếu không, nó sẽ nối vào `_displayString` như trước.
*   **AC:** Reset tất cả các biến trạng thái về giá trị ban đầu.
*   **Toán tử (+, -):**
    *   Kiểm tra xem đã có `_operand1` chưa. Nếu chưa, lưu `_displayString` hiện tại vào `_operand1`, lưu toán tử vào `_operator`, và đặt `_isEnteringSecondOperand` thành `true` để báo hiệu rằng lần nhấn số tiếp theo sẽ là bắt đầu của toán hạng thứ hai.
    *   *Lưu ý:* Logic này rất cơ bản và không xử lý chuỗi phép tính (ví dụ: 5 + 3 - 2). Nó chỉ hoạt động cho `số1 toán_tử số2 =`.
*   **Dấu bằng (=):**
    *   Kiểm tra xem `_operand1`, `_operator` đã có giá trị chưa và có đang nhập số thứ hai không (`!_isEnteringSecondOperand` - nghĩa là số thứ hai đã nhập xong).
    *   Nếu đủ điều kiện, gọi hàm `_calculate()`.
    *   Reset `_operand1` và `_operator` để chuẩn bị cho phép tính tiếp theo.

**Giải thích Logic trong `_calculate`:**

*   Chuyển `_operand1` và `_displayString` (là số thứ hai) thành kiểu `double` để tính toán. Sử dụng `tryParse` để tránh lỗi nếu chuỗi không hợp lệ (mặc dù logic hiện tại nên đảm bảo chúng hợp lệ).
*   Thực hiện phép cộng hoặc trừ dựa trên `_operator`.
*   Chuyển kết quả `double` trở lại `String`. Có một bước kiểm tra nhỏ để xem kết quả có phải là số nguyên không (ví dụ: `5.0`). Nếu có, hiển thị dạng số nguyên (`5`) thay vì `5.0`.
*   Giới hạn độ dài kết quả hiển thị. Nếu quá dài, hiển thị ở dạng số mũ.
*   Cập nhật `_displayString` với kết quả.

**Bước 3: Cập nhật Code Đầy Đủ**

Kết hợp tất cả các thay đổi vào file `main.dart`:

```dart
import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Simple Calculator',
      theme: ThemeData.dark().copyWith(
        scaffoldBackgroundColor: Colors.black,
      ),
      home: const CalculatorScreen(),
      debugShowCheckedModeBanner: false,
    );
  }
}

class CalculatorScreen extends StatefulWidget {
  const CalculatorScreen({super.key});

  @override
  State<CalculatorScreen> createState() => _CalculatorScreenState();
}

class _CalculatorScreenState extends State<CalculatorScreen> {
  String _displayString = '0';
  String? _operand1;
  String? _operator;
  bool _isEnteringSecondOperand = false;

  // === Hàm xử lý logic khi nhấn nút ===
  void _handleButtonPress(String text) {
    setState(() {
      if (int.tryParse(text) != null) { // Xử lý nút SỐ
        if (_isEnteringSecondOperand) {
          _displayString = text;
          _isEnteringSecondOperand = false;
        } else {
          if (_displayString == '0') {
            _displayString = text;
          } else {
            if (_displayString.length < 9) { 
              _displayString += text;
            }
          }
        }
      } else if (text == 'AC') { // Xử lý nút AC
        _displayString = '0';
        _operand1 = null;
        _operator = null;
        _isEnteringSecondOperand = false;
      } else if (['+', '-'].contains(text)) { // Xử lý nút TOÁN TỬ (+, -)
        if (_operand1 == null) { 
          _operand1 = _displayString;
          _operator = text;
          _isEnteringSecondOperand = true; 
        }
        // Logic phức tạp hơn (chuỗi phép tính, thay đổi toán tử) có thể thêm ở đây
      } else if (text == '=') { // Xử lý nút BẰNG
        if (_operand1 != null && _operator != null && !_isEnteringSecondOperand) {
          _calculate();
          // Giữ lại kết quả trên màn hình, nhưng reset trạng thái phép tính
          _operand1 = null; 
          _operator = null;
          // _isEnteringSecondOperand = false; // Không cần thiết vì _calculate không set nó
        }
      } 
      // TODO: Handle '.', '+/-', '%', 'x', '÷' in future improvements
    });
  }

  // === Hàm thực hiện phép tính ===
  void _calculate() {
    final double num1 = double.tryParse(_operand1!) ?? 0.0;
    final double num2 = double.tryParse(_displayString) ?? 0.0;
    double result = 0.0;

    if (_operator == '+') {
      result = num1 + num2;
    } else if (_operator == '-') {
      result = num1 - num2;
    } // TODO: Add 'x' and '÷' cases

    // Chuyển kết quả về String
    if (result == result.toInt()) {
      _displayString = result.toInt().toString();
    } else {
      _displayString = result.toString();
    }

    if (_displayString.length > 9) {
      // Cố gắng làm tròn thay vì dùng số mũ nếu có thể
      _displayString = result.toStringAsFixed(3);
      // Nếu vẫn quá dài sau khi làm tròn, mới dùng số mũ
      if (_displayString.length > 9) {
         _displayString = result.toStringAsExponential(3);
      }
    }
  }

  // Hàm tạo nút (Không thay đổi từ Nhiệm vụ 5)
  Widget _buildButton(String buttonText, {Color? buttonColor, int flex = 1, required VoidCallback onPressed}) {
    
    Color finalButtonColor;
    Color finalTextColor = Colors.white;

    if (['AC', '+/-', '%'].contains(buttonText)) {
        finalButtonColor = Colors.grey; 
        finalTextColor = Colors.black;
    } else if (['÷', 'x', '-', '+', '='].contains(buttonText)) {
        finalButtonColor = Colors.orange;
    } else {
        finalButtonColor = const Color(0xFF333333);
    }
    
    if (buttonColor != null) {
      finalButtonColor = buttonColor;
    }

    return Expanded(
      flex: flex,
      child: Padding(
        padding: const EdgeInsets.all(5.0),
        child: ElevatedButton(
          onPressed: onPressed, 
          style: ElevatedButton.styleFrom(
            backgroundColor: finalButtonColor,
            foregroundColor: finalTextColor,
            shape: const CircleBorder(),
            padding: EdgeInsets.zero,
          ),
          child: Center(
            child: Text(
              buttonText,
              style: const TextStyle(
                fontSize: 26.0,
                fontWeight: FontWeight.w500,
              ),
            ),
          ),
        ),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SafeArea(
        child: Column(
          children: <Widget>[
            // Khu vực hiển thị (Không đổi từ N5)
            Expanded(
              flex: 2,
              child: Container(
                alignment: Alignment.bottomRight,
                padding: const EdgeInsets.symmetric(vertical: 10.0, horizontal: 20.0),
                child: Text(
                  _displayString,
                  style: const TextStyle(fontSize: 72.0, fontWeight: FontWeight.w300, color: Colors.white),
                  maxLines: 1,
                  overflow: TextOverflow.ellipsis,
                ),
              ),
            ),
            // Khu vực bàn phím (Chỉ thay đổi onPressed)
            Expanded(
              flex: 5,
              child: Padding(
                padding: const EdgeInsets.symmetric(horizontal: 8.0),
                child: Column( 
                  children: <Widget>[
                    Expanded(
                      child: Row(
                        crossAxisAlignment: CrossAxisAlignment.stretch,
                        children: <Widget>[
                          _buildButton('AC', onPressed: () => _handleButtonPress('AC')),
                          _buildButton('+/-', onPressed: () => _handleButtonPress('+/-')), // Chưa xử lý
                          _buildButton('%', onPressed: () => _handleButtonPress('%')),   // Chưa xử lý
                          _buildButton('÷', onPressed: () => _handleButtonPress('÷')),   // Chưa xử lý
                        ],
                      ),
                    ),
                    Expanded(
                      child: Row(
                        crossAxisAlignment: CrossAxisAlignment.stretch,
                        children: <Widget>[
                          _buildButton('7', onPressed: () => _handleButtonPress('7')),
                          _buildButton('8', onPressed: () => _handleButtonPress('8')),
                          _buildButton('9', onPressed: () => _handleButtonPress('9')),
                          _buildButton('x', onPressed: () => _handleButtonPress('x')),   // Chưa xử lý
                        ],
                      ),
                    ),
                    Expanded(
                      child: Row(
                        crossAxisAlignment: CrossAxisAlignment.stretch,
                        children: <Widget>[ 
                          _buildButton('4', onPressed: () => _handleButtonPress('4')),
                          _buildButton('5', onPressed: () => _handleButtonPress('5')),
                          _buildButton('6', onPressed: () => _handleButtonPress('6')),
                          _buildButton('-', onPressed: () => _handleButtonPress('-')),
                        ],
                      ),
                    ),
                    Expanded(
                      child: Row(
                        crossAxisAlignment: CrossAxisAlignment.stretch,
                        children: <Widget>[
                          _buildButton('1', onPressed: () => _handleButtonPress('1')),
                          _buildButton('2', onPressed: () => _handleButtonPress('2')),
                          _buildButton('3', onPressed: () => _handleButtonPress('3')),
                          _buildButton('+', onPressed: () => _handleButtonPress('+')),
                        ],
                      ),
                    ),
                    Expanded(
                      child: Row(
                        crossAxisAlignment: CrossAxisAlignment.stretch,
                        children: <Widget>[
                          _buildButton('0', flex: 2, onPressed: () => _handleButtonPress('0')),
                          _buildButton('.', onPressed: () => _handleButtonPress('.')),   // Chưa xử lý
                          _buildButton('=', onPressed: () => _handleButtonPress('=')),
                        ],
                      ),
                    ),
                    const SizedBox(height: 10),
                  ],
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
```

**Chạy thử:**

Lưu file và chạy lại ứng dụng. Bây giờ bạn có thể thực hiện các phép tính cộng và trừ đơn giản!

1.  Nhấn `5`. Màn hình hiển thị `5`.
2.  Nhấn `+`. Màn hình vẫn hiển thị `5`.
3.  Nhấn `3`. Màn hình hiển thị `3`.
4.  Nhấn `=`. Màn hình hiển thị `8`.
5.  Nhấn `AC`. Màn hình hiển thị `0`.

**Hoàn thành!**

Bạn đã xây dựng thành công một ứng dụng máy tính đơn giản bằng Flutter, từ việc thiết lập giao diện người dùng đến việc triển khai logic tính toán cơ bản. Đây là nền tảng tốt để bạn tiếp tục khám phá và mở rộng ứng dụng với nhiều tính năng hơn.

---

## Tổng kết và Hướng phát triển tiếp theo

Qua 6 nhiệm vụ, chúng ta đã:

*   Tạo dự án Flutter và cấu trúc `main.dart`.
*   Xây dựng giao diện người dùng với `Scaffold`, `Column`, `Row`, `Expanded`, `Text`, `ElevatedButton`.
*   Sử dụng `StatefulWidget` và `setState` để quản lý trạng thái và cập nhật UI.
*   Triển khai logic cơ bản cho các nút số, 'AC', '+', '-', và '='.
*   Áp dụng styling để ứng dụng trông giống máy tính iOS.

**Các bước tiếp theo bạn có thể thử:**

*   **Thêm phép nhân và chia:** Mở rộng `_handleButtonPress` và `_calculate`.
*   **Hỗ trợ số thập phân:** Xử lý nút '.' và đảm bảo tính toán chính xác.
*   **Nút '+/-' và '%':** Thêm logic cho các nút chức năng này.
*   **Xử lý lỗi:** Ví dụ: chia cho 0.
*   **Cải thiện logic tính toán:** Hỗ trợ chuỗi phép tính (ví dụ: 5 + 3 - 2 =) thay vì chỉ `số1 op số2 =`.
*   **Sử dụng Provider hoặc BLoC/Cubit:** Cho quản lý trạng thái phức tạp hơn khi ứng dụng lớn dần.
*   **Thêm hoạt ảnh (Animations).**

Chúc mừng bạn đã hoàn thành hướng dẫn này! Hy vọng bạn thấy nó hữu ích và có thêm động lực để tiếp tục học Flutter.
