# KHUNG CHƯƠNG TRÌNH DẠY LẬP TRÌNH FLUTTER & DART BACKEND

_Dành cho học sinh cấp 3 - Tổng cộng 50 buổi_

---

## ĐỐI TƯỢNG & NGUYÊN TẮC THIẾT KẾ KHÓA HỌC

- Đối tượng: Học sinh cấp 3, chưa có kiến thức lập trình.
- Mục tiêu: Zero-to-fullstack Flutter + Dart backend, triển khai được ứng dụng cơ bản.
- Nguyên tắc:
  - 70% thực hành – 30% lý thuyết, mini-project mỗi buổi.
  - Tăng dần độ khó, kiến thức có lặp lại – củng cố (spiral learning).
  - Ưu tiên hiểu bản chất các kiến thức cơ bản (variables, control flow, data structures, async).
  - Bài tập về nhà 1-2 giờ/buổi.
  - Công cụ quen tay sớm: VS Code, Terminal, Git/GitHub.
  - Đánh giá liên tục: quiz ngắn, checkpoint, project-based.


## Cấu trúc và Timeline tổng

- Thời lượng: 50 buổi, chia thành 2 khóa, mỗi khóa 25 buổi.
- Nhịp độ mỗi buổi: 30' kiểm tra/ôn bài + 150' nội dung mới (demo, code along, mini-project). BTVN 1–2 giờ, nộp GitHub.
- Mốc chính theo tuần tự:
  - Khóa 1 (Buổi 1–25):
    - Buổi 12: Kiểm tra giữa kỳ (Dart, OOP, Async, Collections).
    - Buổi 24: Ôn tập và tích hợp mini-projects.
    - Buổi 25: Kiểm tra cuối khóa (Lý thuyết + Thực hành, yêu cầu app nhỏ).
  - Khóa 2 (Buổi 26–50):
    - Buổi 36: Kiểm tra giữa kỳ (SQL/PostgreSQL, thiết kế DB, truy vấn nâng cao).
    - Buổi 46–50: Dự án nhóm Fullstack (Planning/Setup → Backend → Frontend → Demo & Presentation).
- Công cụ/tech stack trọng tâm: Flutter, Dart, FutureBuilder/StreamBuilder, REST API (Shelf), PostgreSQL, Supabase (Auth, RLS, Realtime), State management (Provider/Riverpod/Bloc), Git/GitHub.



## 📑 **MỤC LỤC TỔNG QUAN**

### **KHOÁ 1: LẬP TRÌNH CƠ BẢN VỚI DART & FLUTTER (25 BUỔI)**

**Phần 1: Làm quen với lập trình (6 buổi)**

- Buổi 1: Giới thiệu lập trình
- Buổi 2: Biến và kiểu dữ liệu
- Buổi 3: Điều kiện if/else
- Buổi 4: Vòng lặp cơ bản
- Buổi 5: List (Danh sách)
- Buổi 6: Functions (Hàm)

**Phần 2: Lập trình hướng đối tượng & Async (6 buổi)**

- Buổi 7: Class và Object
- Buổi 8: Constructor và phương thức
- Buổi 9: Thực hành OOP
- Buổi 10: Map và ứng dụng
- Buổi 11: Async/Await và Future
- Buổi 12: Kiểm tra giữa kỳ và ôn tập (*)

**Phần 3: Flutter cơ bản - UI (11 buổi)**

- Buổi 13: Giới thiệu Flutter
- Buổi 14: Widget cơ bản - Text và Container
- Buổi 15: Layout - Column và Row
- Buổi 16: Layout - Stack và Positioned
- Buổi 17: Buttons và xử lý sự kiện
- Buổi 18: TextField và Form
- Buổi 19: ListView - Danh sách cuộn
- Buổi 20: Images và Icons
- Buổi 21: Navigation - Chuyển màn hình
- Buổi 22: StatefulWidget
- Buổi 23: State Management cơ bản

**Phần 4: Ôn tập và kiểm tra cuối khóa (2 buổi)**

- Buổi 24: Ôn tập và tích hợp mini projects
- Buổi 25: Kiểm tra cuối khóa (Lý thuyết + Thực hành) (*)

### **KHOÁ 2: XÂY DỰNG ỨNG DỤNG FULLSTACK (25 BUỔI)**

**Phần 1: Flutter Networking (4 buổi)**

- Buổi 26: Local Storage với SharedPreferences
- Buổi 27: JSON và Model Classes
- Buổi 28: HTTP và API Integration
- Buổi 29: FutureBuilder và StreamBuilder

**Phần 2: PostgreSQL Database (7 buổi)**

- Buổi 30: Giới thiệu PostgreSQL và Setup Supabase.
- Buổi 31: SQL cơ bản - CREATE, INSERT, SELECT
- Buổi 32: SQL nâng cao - UPDATE, DELETE, ALTER, DROP
- Buổi 33: Relationships và Foreign Keys
- Buổi 34: JOIN operations và Query phức tạp
- Buổi 35: Database Design và Normalization
- Buổi 36: Kiểm tra giữa kỳ và ôn tập PostgreSql (*)

**Phần 3: REST API với Dart & Shelf (3 buổi)**

- Buổi 37: REST API Concepts và Shelf Framework
- Buổi 38: HTTP Methods và Routing
- Buổi 39: Middleware và Authentication

**Phần 4: Flutter + Supabase Serverless (4 buổi)**

- Buổi 40: Supabase Authentication trong Flutter
- Buổi 41: Row Level Security và Policies
- Buổi 42: Realtime Subscriptions
- Buổi 43: Data Manipulation Layer

**Phần 5: Flutter Advanced Topics (3 buổi)**

- Buổi 44: Ôn tập State Management
- Buổi 45: Animations và Transitions
- Buổi 46: Adaptive UI/UX và Responsive Design

**Phần 6: Final Project (4 buổi)**

- Buổi 47: Workshop 1 - Project Planning & Setup
- Buổi 48: Workshop 2 - Backend Development
- Buổi 49: Workshop 3 - Frontend Development
- Buổi 50: Trình bày và bảo vệ Project cuối khóa (*)

---

## 📚 **KHOÁ 1: LẬP TRÌNH CƠ BẢN VỚI DART & FLUTTER (25 BUỔI)**

### **PHẦN 1: LÀM QUEN VỚI LẬP TRÌNH (Buổi 1-6)**

#### **Buổi 1: Giới thiệu lập trình**

**Mục tiêu:** Hiểu được lập trình là gì và làm quen với môi trường phát triển

**Nội dung:**

- Lập trình là gì? Ứng dụng trong cuộc sống
- Giới thiệu ngôn ngữ Dart
- Cài đặt và sử dụng DartPad (online)
- Cài đặt VS Code và Dart extension
- Làm quen Terminal/Command Prompt cơ bản (cd, ls, mkdir)
- Git và GitHub căn bản: init, commit, push; tạo repo và clone
- Cú pháp cơ bản: `main()`, `print()`
- Comments trong code

**Mini Project - Module Hồ sơ Học sinh:**

- Chương trình "Xin chào"
- In ra thông tin học sinh (tên, lớp, môn học yêu thích, điểm mục tiêu)
- _[Sẽ được sử dụng làm module hồ sơ trong app]_

---

#### **Buổi 2: Biến và kiểu dữ liệu**

**Mục tiêu:** Hiểu và sử dụng được các kiểu dữ liệu cơ bản

**Nội dung:**

- Biến là gì? Cách đặt tên biến
- Kiểu dữ liệu: `int`, `double`, `String`, `bool`
- Null safety cơ bản: non-nullable vs nullable (`?`), khởi tạo an toàn
- Kiểu suy luận `var`, bất biến `final`, hằng `const`
- Toán tử số học: `+`, `-`, `*`, `/`, `%`
- Chuyển kiểu số và làm tròn (`toInt()`, `toDouble()`)
- String interpolation: `$variable`, `${expression}`

**Mini Project - Module Tính điểm:**

- Tính điểm trung bình môn học
- Tính điểm GPA
- Quy đổi điểm số sang điểm chữ (A, B, C, D, F)
- _[Sẽ được tích hợp vào phần quản lý điểm]_

---

#### **Buổi 3: Điều kiện if/else**

**Mục tiêu:** Sử dụng câu lệnh điều kiện để điều khiển luồng chương trình

**Nội dung:**

- Câu lệnh `if`, `if-else`, `else if`
- Toán tử so sánh và logic
- `switch-case` (khi nào dùng thay `if-else`)
- Bảng chân trị (truth table) cơ bản
- Nested if (if lồng nhau)
- Toán tử ba ngôi

**Mini Project - Module Xếp loại Học lực:**

- Xếp loại học lực (Xuất sắc/Giỏi/Khá/TB/Yếu)
- Kiểm tra đủ điều kiện lên lớp
- Đưa ra lời khuyên học tập dựa trên điểm số
- _[Sẽ được dùng trong phần phân tích học tập]_

---

#### **Buổi 4: Vòng lặp cơ bản**

**Mục tiêu:** Sử dụng vòng lặp để thực hiện công việc lặp đi lặp lại

**Nội dung:**

- Vòng lặp `for`, `while`, `do-while`
- Vòng lặp `for-in` và lặp qua collection
- `break` và `continue`
- Nested loops

**Mini Project - Module Thời khóa biểu:**

- Tạo thời khóa biểu tuần
- In lịch học theo ngày
- Tính tổng số giờ học mỗi môn
- _[Sẽ được dùng để hiển thị lịch học]_

---

#### **Buổi 5: List (Danh sách)**

**Mục tiêu:** Làm việc với tập hợp dữ liệu

**Nội dung:**

- List là gì? Khai báo và sử dụng List
- Set là gì? Khi nào dùng Set thay List (tránh trùng lặp)
- Truy cập và thao tác với phần tử
- Các phương thức của List/Set
- Duyệt List/Set; tìm kiếm tuyến tính (linear search) cơ bản

**Mini Project - Module Quản lý Môn học:**

- Quản lý danh sách môn học
- Thêm/xóa/sửa môn học
- Sắp xếp môn học theo tên hoặc số tín chỉ
- _[Sẽ được dùng để quản lý môn học]_

---

#### **Buổi 6: Functions (Hàm)**

**Mục tiêu:** Tổ chức code với functions

**Nội dung:**

- Function là gì? Khai báo và gọi function
- Parameters và return values
- Arrow functions
- Scope của biến
- Null-aware operators: `?.`, `??`, `??=` và ứng dụng trong hàm
- Function types, callback cơ bản, pure function vs side effects

**Mini Project - Module Tiện ích Học tập:**

- Function tính thời gian học (logic hẹn giờ Pomodoro)
- Function chuyển đổi điểm
- Function tạo báo cáo học tập
- _[Sẽ được dùng làm các hàm tiện ích cho app]_

---

### **PHẦN 2: LẬP TRÌNH HƯỚNG ĐỐI TƯỢNG & ASYNC (Buổi 7-12)**

#### **Buổi 7: Class và Object**

**Mục tiêu:** Hiểu khái niệm OOP cơ bản

**Nội dung:**

- OOP là gì? Lợi ích của OOP
- Class và Object
- Properties và Methods
- `this` keyword

**Mini Project - Class Môn học & Bài tập:**

- Tạo class `MonHoc` với tên, giáo viên, số tín chỉ
- Tạo class `BaiTap` với tiêu đề, hạn nộp, điểm
- Methods để tính điểm và kiểm tra hạn nộp
- _[Core data models cho app]_

---

#### **Buổi 8: Constructor và phương thức**

**Mục tiêu:** Khởi tạo object và định nghĩa behaviors

**Nội dung:**

- Constructors các loại (mặc định, named, redirecting)
- Factory constructors (khi nào nên dùng)
- Getters và Setters
- Private properties
- Static members

**Mini Project - Class Học sinh & Sổ điểm:**

- Class `HocSinh` với thông tin cá nhân
- Class `SoDiem` quản lý điểm các môn
- Methods: themDiem(), tinhDiemTB(), layMonHocTotNhat()
- _[Logic chính cho app]_

---

#### **Buổi 9: Thực hành OOP**

**Mục tiêu:** Củng cố kiến thức OOP qua thực hành

**Nội dung:**

- Review OOP concepts
- Best practices
- Composition patterns
- Kế thừa đơn (`extends`), ghi đè (`override`), lớp trừu tượng cơ bản (`abstract`)

**Mini Project - Hệ thống Quản lý Học tập:**

- Kết hợp các classes: HocSinh, MonHoc, BaiTap, SoDiem
- Class `QuanLyHocTap` quản lý toàn bộ
- Implement các tính năng: theo dõi bài tập, tính điểm
- _[Phiên bản console hoàn chỉnh của app]_

---

#### **Buổi 10: Map và ứng dụng**

**Mục tiêu:** Sử dụng Map để lưu trữ key-value pairs

**Nội dung:**

- Map là gì? Khai báo và sử dụng
- Thao tác với Map
- So sánh List và Map

**Mini Project - Tùy chọn Học tập:**

- Lưu cài đặt: giờ nhắc nhở, mục tiêu học tập
- Map môn học với màu sắc hiển thị
- Lưu trữ phím tắt và ghi chú nhanh
- _[Sẽ được dùng cho màn hình cài đặt]_

---

#### **Buổi 11: Async/Await và Future**

**Mục tiêu:** Xử lý tác vụ bất đồng bộ

**Nội dung:**

- Synchronous vs Asynchronous
- `Future` class
- `async` và `await`
- Error handling trong async: `try/catch/finally`, `Future.timeout`
- Giới thiệu `Stream` và `StreamController` (preview)

**Mini Project - Mô phỏng Đồng bộ Dữ liệu:**

- Mô phỏng đồng bộ dữ liệu điểm số
- Trạng thái loading cho tải bài tập
- Tự động lưu với độ trễ
- _[Chuẩn bị cho việc làm việc với APIs]_

---

#### **Buổi 12: KIỂM TRA GIỮA KỲ**

**Mục tiêu:** Đánh giá kiến thức Dart cơ bản

**Nội dung:**

- Kiểm tra lý thuyết:
  - Variables và Data types
  - Control flow
  - Functions
  - OOP concepts
  - Async programming
- Kiểm tra thực hành:
  - Xây dựng mini project theo yêu cầu
  - Debug và fix code có sẵn

---

### **PHẦN 3: FLUTTER CƠ BẢN - UI (Buổi 13-23)**

#### **Buổi 13: Giới thiệu Flutter**

**Mục tiêu:** Làm quen với Flutter framework

**Nội dung:**

- Flutter là gì? Ưu điểm của Flutter
- Cài đặt Flutter SDK
- Flutter Doctor
- Cấu trúc project Flutter
- Widget tree concept
- Hot reload vs Hot restart
- `MaterialApp`, `Scaffold`
- Tổng quan theming (Material 3), màu sắc và typography

**Mini Project - Khung App:**

- Setup Flutter project "Hỗ trợ Học tập"
- MaterialApp cơ bản với theme học đường
- Scaffold với AppBar "Học tập của tôi"
- _[Nền tảng cho toàn bộ app]_

---

#### **Buổi 14: Widget cơ bản - Text và Container**

**Mục tiêu:** Sử dụng các widget cơ bản nhất

**Nội dung:**

- `Text` widget: style, textAlign, overflow
- `Container` widget: padding, margin, decoration
- `Center` widget
- `SizedBox` widget
- Áp dụng theme: `ThemeData`, `TextTheme`, màu và typography nhất quán

**Mini Project - Thẻ Điểm GPA:**

- Hiển thị thẻ với GPA hiện tại
- Text được định dạng cho điểm số
- Container với gradient theo học lực
- _[Thẻ chính trên bảng điều khiển]_

---

#### **Buổi 15: Layout - Column và Row**

**Mục tiêu:** Sắp xếp widgets theo chiều dọc và ngang

**Nội dung:**

- `Column` widget: mainAxisAlignment, crossAxisAlignment
- `Row` widget với các properties tương tự
- `Expanded`, `Flexible`, `Spacer` widgets
- Hiểu constraints và xử lý overflow cơ bản

**Mini Project - Lưới Môn học:**

- Row cho lịch học hôm nay
- Column cho bài tập sắp tới
- Grid layout cho các môn học
- _[Layout bảng điều khiển của app]_

---

#### **Buổi 16: Layout - Stack và Positioned**

**Mục tiêu:** Xếp chồng và định vị widgets

**Nội dung:**

- `Stack` widget: alignment, fit
- `Positioned` widget: top, bottom, left, right
- `Align` widget
- Z-order trong Stack

**Mini Project - Đồng hồ Học tập:**

- Stack cho hiển thị đồng hồ
- Chỉ báo tiến độ overlay
- Nút học/nghỉ nổi
- _[Giao diện đồng hồ Pomodoro]_

---

#### **Buổi 17: Buttons và xử lý sự kiện**

**Mục tiêu:** Tương tác với user qua buttons

**Nội dung:**

- `ElevatedButton`, `TextButton`, `IconButton`
- `FloatingActionButton`
- `onPressed` callback
- `setState()` để update UI

**Mini Project - Hành động Nhanh:**

- Nút thêm bài tập
- Bắt đầu phiên học
- Đánh dấu hoàn thành
- Kết nối với logic Dart
- _[Các tương tác chính]_

---

#### **Buổi 18: TextField và Form**

**Mục tiêu:** Nhận input từ người dùng

**Nội dung:**

- `TextField` widget: controller, decoration
- `Form` widget, `TextFormField`
- Form validation
- `GlobalKey<FormState>`
- UX nhập liệu: `keyboardType`, `textInputAction`, `FocusNode`, `InputFormatter` cơ bản

**Mini Project - Form Thêm Bài tập:**

- Form nhập chi tiết bài tập
- Dropdown chọn môn học
- Chọn ngày cho hạn nộp
- Chọn mức độ ưu tiên
- _[Form nhập liệu chính]_

---

#### **Buổi 19: ListView - Danh sách cuộn**

**Mục tiêu:** Hiển thị danh sách dữ liệu

**Nội dung:**

- `ListView`, `ListView.builder`, `ListView.separated`
- `ListTile` widget
- `Scrollbar`, `RefreshIndicator`
- Hiệu năng danh sách: itemExtent, cacheExtent; giới thiệu Slivers (optional)

**Mini Project - Danh sách Bài tập:**

- ListView hiển thị bài tập
- Nhóm theo môn học hoặc hạn nộp
- Vuốt để hoàn thành/xóa
- _[View danh sách chính]_

---

#### **Buổi 20: Images và Icons**

**Mục tiêu:** Làm việc với hình ảnh và biểu tượng

**Nội dung:**

- `Image` widget: asset, network
- `Icon` widget
- `CircleAvatar`
- Adding assets trong pubspec.yaml

**Mini Project - Biểu tượng Môn học:**

- Icon cho mỗi môn học
- Huy hiệu thành tích
- Hình minh họa trạng thái trống
- _[Các yếu tố hình ảnh]_

---

#### **Buổi 21: Navigation - Chuyển màn hình**

**Mục tiêu:** Điều hướng giữa các màn hình

**Nội dung:**

- `Navigator.push()`, `Navigator.pop()`
- `MaterialPageRoute`
- Passing data between screens
- Bottom Navigation Bar
- Named routes (cơ bản); giới thiệu Navigator 2.0 (optional)

**Mini Project - App Đa màn hình:**

- Màn hình Bảng điều khiển
- Màn hình Môn học
- Màn hình Bài tập
- Màn hình Đồng hồ học
- Màn hình Cài đặt
- _[Cấu trúc điều hướng]_

---

#### **Buổi 22: StatefulWidget chi tiết**

**Mục tiêu:** Hiểu sâu về State management

**Nội dung:**

- StatelessWidget vs StatefulWidget
- State lifecycle
- When to use StatefulWidget
- Keys trong Flutter

**Mini Project - Tính năng Động:**

- Cập nhật GPA thời gian thực
- Lọc bài tập theo trạng thái
- Bộ đếm chuỗi ngày học
- Chuyển đổi giao diện
- _[Các tính năng động]_

---

#### **Buổi 23: Provider State Management cơ bản**

**Mục tiêu:** Học cách quản lý state chuyên nghiệp với Provider

**Nội dung:**

- State Management là gì? Tại sao cần?
- Giới thiệu Provider package
- ChangeNotifier và ChangeNotifierProvider
- Consumer và Provider.of
- MultiProvider
- Khi nào dùng setState vs Provider
- Best practices với Provider
- Cấu trúc thư mục đơn giản (models, providers, views)
- Tư duy test sớm: tách logic khỏi UI để dễ test (intro)

**Mini Project - Refactor với Provider:**

- Cài đặt provider package
- Tạo `ThemeProvider` để quản lý theme
- Tạo `TaskProvider` để quản lý danh sách bài tập
- Tạo `StudyTimerProvider` cho Pomodoro timer
- Refactor các StatefulWidget sang dùng Provider
- _[Nâng cấp state management cho toàn app]_

---

### **PHẦN 4: ÔN TẬP VÀ KIỂM TRA CUỐI KHOÁ (Buổi 24-25)**

#### **Buổi 24: ÔN TẬP VÀ TÍCH HỢP MINI PROJECTS**

**Mục tiêu:** Củng cố kiến thức và hoàn thiện app tổng hợp

**Phần 1: Tích hợp Mini Projects (1.5 giờ)**

- Kết hợp tất cả modules từ buổi 1-23
- Kết nối logic Dart backend với Flutter UI
- Integrate Provider cho state management
- Polish UI/UX và animations
- Testing trên nhiều thiết bị

**App Hoàn chỉnh - Hỗ trợ Học tập:**

- **Bảng điều khiển:** Thẻ GPA, lịch học hôm nay, bài tập cần làm
- **Môn học:** Quản lý môn học, xem điểm
- **Bài tập:** Theo dõi bài tập về nhà, dự án, bài kiểm tra
- **Đồng hồ học:** Pomodoro timer với thống kê
- **Cài đặt:** Hồ sơ, mục tiêu học tập, theme switcher
- **State Management:** Provider pattern cho toàn app

**Phần 2: Ôn tập Lý thuyết (1.5 giờ)**

- **Dart Programming Review:**
  - Variables, data types, control flow
  - Functions và OOP concepts
  - Async programming với Future
  - Collections: List và Map
- **Flutter Framework Review:**
  - Widget tree và các loại widgets
  - Layout strategies và best practices
  - Navigation và routing
  - Form handling và validation
  - State management: setState vs Provider

**Phần 3: Practice và Q&A (30 phút)**

- Giải đáp thắc mắc
- Tips cho bài kiểm tra
- Code review nhanh
- Common mistakes cần tránh

---

#### **Buổi 25: KIỂM TRA CUỐI KHOÁ**

**Mục tiêu:** Đánh giá toàn diện kiến thức và kỹ năng

**Cấu trúc bài kiểm tra:**

**Phần 1: Lý thuyết (30 phút)**

- Hình thức: Trắc nghiệm online
- Số câu: 30 câu
- Nội dung:
  - Dart basics (10 câu)
  - OOP concepts (5 câu)
  - Flutter widgets (10 câu)
  - State management (5 câu)
- Điểm: 30% tổng điểm

**Phần 2: Thực hành (2.5 giờ)**

- Hình thức: Coding trên máy
- Đề bài: Xây dựng ứng dụng Flutter theo yêu cầu

**Yêu cầu app thực hành:**

- **Chủ đề:** Ứng dụng Flashcard học từ vựng
- **Chức năng bắt buộc:**
  - Màn hình danh sách flashcard
  - Màn hình thêm/sửa flashcard
  - Màn hình luyện tập (lật thẻ)
  - Lưu dữ liệu local
  - Form validation
  - Navigation giữa các màn
  - Ít nhất 2 StatefulWidget

**Tiêu chí chấm điểm thực hành:**

- Chạy được không lỗi: 20%
- Đầy đủ chức năng: 25%
- UI/UX hợp lý: 15%
- Code structure: 5%
- Bonus features: 5%

**Quy định:**

- Được sử dụng tài liệu và Internet
- Nộp bài qua GitHub
- Thời gian: 3 giờ tổng cộng

---

## 📚 **KHOÁ 2: XÂY DỰNG ỨNG DỤNG FULLSTACK (25 BUỔI)**

### **PHẦN 1: FLUTTER NETWORKING (Buổi 26-29)**

#### **Buổi 26: Local Storage với SharedPreferences**

**Mục tiêu:** Lưu trữ dữ liệu offline trên thiết bị

**Nội dung:**

- SharedPreferences là gì? Các tình huống sử dụng (use cases)
- Cài đặt và cấu hình (setup) package
- Lưu và đọc các kiểu dữ liệu:
  - Primitive types: String, int, double, bool
  - List<String>
- Tuần tự hóa (serialize) đơn giản: encode/decode JSON string để lưu object
- Các mẫu lưu trữ key-value (key-value storage patterns)
- Thao tác bất đồng bộ (async operations) với SharedPreferences
- Thực hành tốt (best practices) và các giới hạn (limitations)

**Mini Project:**

- Ứng dụng Ghi chú (Note) với lưu trữ offline
- Trình quản lý cài đặt (Settings manager) với tùy chọn theme (theme preferences)
- Quản lý phiên người dùng (user session management)

---

#### **Buổi 27: JSON và Model Classes**

**Mục tiêu:** Làm việc với dữ liệu có cấu trúc

**Nội dung:**

- Định dạng và cấu trúc JSON (JSON format & structure)
- Phân tích/biến đổi JSON (parsing): `json.encode()` và `json.decode()`
- Tạo Model classes:
  - Tuần tự hóa thủ công (manual serialization)
  - Factory constructors
  - Phương thức `fromJson()` và `toJson()`
- Đối tượng lồng nhau (nested objects) và mảng (arrays)
- Đảm bảo an toàn kiểu (type safety) với models
- Package json_serializable (tùy chọn) và build_runner

**Mini Project:**

- Ứng dụng cơ sở dữ liệu phim (Movie database) với JSON phức tạp
- Parse các phản hồi API lồng nhau (nested)
- Lưu cache dữ liệu JSON cục bộ

---

#### **Buổi 28: HTTP và API Integration**

**Mục tiêu:** Kết nối Flutter app với REST APIs

**Nội dung:**

- Kiến thức cơ bản về giao thức HTTP (HTTP protocol basics)
- Cài đặt và cấu hình package http
- Triển khai các phương thức HTTP (HTTP methods implementation):
  - GET requests
  - POST với body
  - PUT và PATCH
  - DELETE
- Headers (tiêu đề) và authentication
- Xử lý lỗi (error handling) và mã trạng thái (status codes)
- Timeout và logic retry
- Tổng quan package dio (tùy chọn: interceptors, logging)

**Mini Project:**

- Ứng dụng thời tiết (Weather app) với OpenWeatherMap API
- Ứng dụng đọc tin (News reader) với phân trang (pagination)
- Thực hiện CRUD với JSONPlaceholder

---

#### **Buổi 29: FutureBuilder và StreamBuilder**

**Mục tiêu:** Sử dụng FutureBuilder và StreamBuilder để xử lý dữ liệu bất đồng bộ trong UI

**Nội dung:**

- FutureBuilder widget:
  - Trạng thái kết nối (ConnectionState)
  - Ảnh chụp kết quả bất đồng bộ (AsyncSnapshot)
  - Trạng thái tải dữ liệu (loading states)
  - Xử lý lỗi (error handling)
- StreamBuilder widget:
  - Khái niệm Stream
  - Cập nhật thời gian thực (real-time updates)
  - StreamController (single vs broadcast)
- Kết hợp với các yêu cầu HTTP
- Thực hành best practices và tối ưu hiệu năng

**Mini Project:**

- Xây dựng UI chat thời gian thực với StreamBuilder
- Tính năng tìm kiếm có debounce
- Bảng điều khiển dữ liệu trực tiếp (live data dashboard)

---

### **PHẦN 2: POSTGRESQL DATABASE (Buổi 30-36)**

#### **Buổi 30: Giới thiệu PostgreSQL và Setup Supabase**

**Mục tiêu:** Làm quen với PostgreSQL và Supabase platform

**Nội dung:**

- PostgreSQL là gì? Ưu điểm
- Relational database concepts
- Tổng quan Supabase (Supabase overview):
  - Tạo dự án (Create project)
  - Bảng điều khiển cơ sở dữ liệu (Database dashboard)
  - Trình chỉnh sửa bảng (Table editor)
  - Trình soạn thảo SQL (SQL editor)
- Connection string và credentials
- Database structure: schemas, tables, columns

**Mini Project:**

- Setup Supabase project
- Create first database
- Explore Supabase features

---

#### **Buổi 31: SQL cơ bản - CREATE, INSERT, SELECT**

**Mục tiêu:** Tạo tables và query data

**Nội dung:**

- Cú pháp CREATE TABLE (CREATE TABLE syntax):
  - Kiểu dữ liệu (data types)
  - Ràng buộc (constraints)
  - Khóa chính (primary keys)
- INSERT INTO:
  - Single row
  - Multiple rows
  - Default values
- SELECT queries:
  - Basic SELECT
  - WHERE clause
  - ORDER BY
  - LIMIT và OFFSET
- Toán tử và hàm SQL (SQL operators & functions)

**Mini Project:**

- Tạo database cho hệ thống quản lý trường học (school management)
- Chèn dữ liệu mẫu (insert sample data)
- Truy vấn với bộ lọc (filters)

---

#### **Buổi 32: SQL nâng cao - UPDATE, DELETE, ALTER, DROP**

**Mục tiêu:** Thay đổi dữ liệu và cấu trúc (modify data & structure)

**Nội dung:**

- Câu lệnh UPDATE:
  - Cập nhật một/nhiều dòng
  - Cập nhật có điều kiện
  - Cập nhật với JOIN
- Thao tác DELETE:
  - Xóa an toàn (safe deletion)
  - Xóa dây chuyền (cascade delete)
- ALTER TABLE:
  - Thêm/xóa cột
  - Điều chỉnh ràng buộc
  - Đổi tên bảng/cột
- DROP và TRUNCATE
- Kiến thức cơ bản về giao dịch (transactions)

**Mini Project:**

- Script migration dữ liệu
- Cập nhật hàng loạt (bulk updates)
- Tiến hóa schema (schema evolution)

---

#### **Buổi 33: Relationships và Foreign Keys**

**Mục tiêu:** Thiết kế relational database

**Nội dung:**

- Relationship types:
  - One-to-One
  - One-to-Many
  - Many-to-Many
- Foreign key constraints:
  - Creating foreign keys
  - Referential integrity
  - ON DELETE/UPDATE actions
- Junction tables
- Self-referencing tables
- Indexing foreign keys

**Mini Project:**

- E-commerce database design
- Social media relationships
- Hierarchical data structure

---

#### **Buổi 34: JOIN operations và Query phức tạp**

**Mục tiêu:** Thành thạo truy vấn phức tạp

**Nội dung:**

- Các loại JOIN:
  - INNER JOIN
  - LEFT/RIGHT JOIN
  - FULL OUTER JOIN
  - CROSS JOIN
- JOIN nhiều bảng (multiple table joins)
- Subqueries (truy vấn lồng):
  - Trong SELECT
  - Trong FROM
  - Trong WHERE
- Hàm tổng hợp (aggregate functions):
  - COUNT, SUM, AVG
  - GROUP BY
  - HAVING
- Kiến thức cơ bản về Window functions và CTEs (`WITH`)

**Mini Project:**

- Báo cáo doanh số với nhiều JOIN
- Phân tích hiệu suất học sinh
- Lọc phức tạp với subqueries

---

#### **Buổi 35: Database Design và Normalization**

**Mục tiêu:** Thiết kế cơ sở dữ liệu hiệu quả

**Nội dung:**

- Nguyên tắc thiết kế cơ sở dữ liệu
- Chuẩn hóa (Normalization):
  - 1NF, 2NF, 3NF
  - Khi nào nên phi chuẩn hóa (denormalize)
- Sơ đồ thực thể - quan hệ (Entity-Relationship diagrams)
- Quy ước đặt tên (naming conventions)
- Cân nhắc hiệu năng:
  - Chiến lược chỉ mục (indexes strategy)
  - Tối ưu truy vấn (query optimization)
  - Phân tích truy vấn với EXPLAIN ANALYZE
- Chiến lược sao lưu và phục hồi dữ liệu

**Mini Project:**

- Thiết kế DB hoàn chỉnh cho hệ thống trường học
- Tối ưu cơ sở dữ liệu hiện có
- Tạo sơ đồ ER

---

#### **Buổi 36: Kiểm tra giữa kỳ và ôn tập PostgreSQL**

**Mục tiêu:** Củng cố kỹ năng PostgreSQL

**Nội dung:**

- Ôn tập toàn bộ các khái niệm SQL
- Yêu cầu dự án phức tạp
- Điều chỉnh hiệu năng (performance tuning)
- Tổng kết best practices
- Các lỗi thường gặp (common pitfalls)
- Tính năng nâng cao:
  - Views
  - Stored procedures
  - Triggers

**Mini Project:**

- Xây dựng backend database hoàn chỉnh cho:
  - Hệ thống quản lý thư viện
  - Hệ thống bệnh viện
  - Hệ thống trường học
- Thực hiện đầy đủ CRUD với các quan hệ phức tạp

---

### **PHẦN 3: REST API VỚI DART & SHELF (Buổi 37-39)**

#### **Buổi 37: REST API Concepts và Shelf Framework**

**Mục tiêu:** Hiểu kiến trúc REST và framework Shelf

**Nội dung:**

- Các nguyên tắc REST (REST principles):
  - Tài nguyên (Resources)
  - Ánh xạ phương thức HTTP (HTTP methods mapping)
  - Stateless
  - Client-Server
- Best practices trong thiết kế API
- Framework Shelf:
  - Cài đặt (installation)
  - Cấu trúc dự án (project structure)
  - Server đầu tiên (first server)
  - Request/Response
- Tiêu chuẩn JSON API
- Phiên bản API (API versioning)

**Mini Project:**

- Thiết lập (setup) dự án Shelf
- Tạo API server cơ bản
- Endpoint kiểm tra sức khỏe (health check)

---

#### **Buổi 38: HTTP Methods và Routing**

**Mục tiêu:** Triển khai đầy đủ REST API

**Nội dung:**

- Triển khai HTTP methods:
  - GET: lấy tài nguyên
  - POST: tạo tài nguyên
  - PUT/PATCH: cập nhật tài nguyên
  - DELETE: xóa tài nguyên
- Định tuyến (routing) với shelf_router:
  - Tham số route (route parameters)
  - Tham số truy vấn (query parameters)
  - Nhóm route (route groups)
- Kiểm tra dữ liệu đầu vào (request validation)
- Định dạng phản hồi (response formatting)
- Best practices với status codes

**Mini Project:**

- Hoàn thiện CRUD API
- Endpoints tài nguyên theo RESTful
- Tài liệu API

---

#### **Buổi 39: Middleware và Authentication**

**Mục tiêu:** Secure và enhance API

**Nội dung:**

- Middleware concept:
  - Execution pipeline
  - Custom middleware
- CORS configuration
- Authentication:
  - JWT basics
  - Token generation
  - Token validation
- Authorization:
  - Role-based access
  - Protected routes
- Error handling middleware
- Logging và monitoring
- Kiểm thử API với Postman/Thunder Client; viết test handler đơn giản
- Triển khai thử lên Render/Railway (free tier) và cấu hình env

**Mini Project:**

- Secure API với JWT
- Role-based endpoints
- API rate limiting

---

### **PHẦN 4: FLUTTER + SUPABASE SERVERLESS (Buổi 40-43)**

#### **Buổi 40: Supabase Authentication trong Flutter**

**Mục tiêu:** Triển khai hệ thống xác thực (auth) hoàn chỉnh

**Nội dung:**

- Thiết lập Supabase Auth:
  - Email/Password
  - OAuth providers
  - Magic links
- Tích hợp với Flutter:
  - Package supabase_flutter
  - Quản lý trạng thái xác thực (Auth state management)
  - Lưu phiên (Session persistence)
- Hồ sơ người dùng (User profiles)
- Quy trình đặt lại mật khẩu (Password reset flow)
- Xác minh email (Email verification)
- Đăng nhập mạng xã hội (Social logins)

**Mini Project:**

- Ứng dụng hoàn chỉnh luồng xác thực (auth flow)
- Xác thực với nhiều nhà cung cấp (multi-provider authentication)
- Quản lý hồ sơ cá nhân (profile management)

---

#### **Buổi 41: Row Level Security và Policies**

**Mục tiêu:** Secure data at database level

**Nội dung:**

- RLS concept và importance
- Enable RLS on tables
- Policy types:
  - SELECT policies
  - INSERT policies
  - UPDATE policies
  - DELETE policies
- Policy conditions:
  - auth.uid()
  - auth.role()
  - Custom checks
- Testing policies
- Performance impact

**Mini Project:**

- Multi-tenant app security
- User-specific data access
- Role-based permissions

---

#### **Buổi 42: Realtime Subscriptions**

**Mục tiêu:** Build real-time features

**Nội dung:**

- Supabase Realtime:
  - Enable realtime
  - Channel subscriptions
  - Presence tracking
- Flutter integration:
  - Subscribe to changes
  - Filter subscriptions
  - Handle events
- Use cases:
  - Live chat
  - Notifications
  - Collaborative editing
- Performance considerations

**Mini Project:**

- Real-time chat app
- Live dashboard
- Collaborative todo list

---

#### **Buổi 43: Data Manipulation Layer**

**Mục tiêu:** Xây dựng tầng dữ liệu (data layer) vững chắc

**Nội dung:**

- Repository pattern
- Thiết kế service layer
- Các phương thức của Supabase client:
  - Truy vấn phức tạp (complex queries)
  - Giao dịch (transactions)
  - Thao tác hàng loạt (batch operations)
- Chiến lược xử lý lỗi (error handling strategies)
- Hỗ trợ offline:
  - Chiến lược cache
  - Cơ chế đồng bộ (sync mechanisms)
- Kiểm thử tầng dữ liệu (mock client, test happy/sad paths)

**Mini Project:**

- Hoàn thiện kiến trúc data layer
- Ứng dụng ưu tiên offline (offline-first)
- Đồng bộ dữ liệu (data synchronization)

---

### **PHẦN 5: FLUTTER ADVANCED TOPICS (Buổi 44-46)**

#### **Buổi 44: Advanced State Management (Riverpod/Bloc)**

**Mục tiêu:** Làm chủ các mẫu quản lý trạng thái nâng cao

**Nội dung:**

- So sánh các phương pháp quản lý trạng thái
- Riverpod chuyên sâu (deep dive):
  - Các loại Provider
  - Modifiers
  - Testing (giới thiệu unit test cho logic)
- Bloc pattern:
  - Events và States
  - BlocBuilder
  - BlocListener
- Mẫu kiến trúc (architecture patterns):
  - Clean Architecture
  - MVVM
  - Repository pattern

**Mini Project:**

- Refactor app với Riverpod
- Các kịch bản state phức tạp
- Kiểm thử state management

---

#### **Buổi 45: Animations và Transitions**

**Mục tiêu:** Tạo trải nghiệm người dùng mượt mà

**Nội dung:**

- Kiến thức cơ bản về animation:
  - AnimationController
  - Tween
  - Curves
- Implicit animations:
  - AnimatedContainer
  - AnimatedOpacity
  - AnimatedPadding
- Explicit animations:
  - AnimatedBuilder
  - Custom animations
- Hero animations
- Page transitions
- Staggered animations
- Mẹo tối ưu hiệu năng

**Mini Project:**

- Onboarding có animation
- Custom page transitions
- Interactive animations

---

#### **Buổi 46: Adaptive UI/UX và Responsive Design**

**Mục tiêu:** Xây dựng UI đa màn hình

**Nội dung:**

- Nguyên tắc thiết kế responsive
- MediaQuery và LayoutBuilder
- Adaptive widgets:
  - UI theo nền tảng (platform-specific UI)
  - Thích ứng kích thước màn hình
- Chiến lược breakpoints
- Xử lý orientation
- Lưu ý cho Flutter Web
- Khả năng truy cập (accessibility):
  - Semantics
  - Screen readers
  - Độ tương phản màu (color contrast)
- Tối ưu hiệu năng

**Mini Project:**

- Responsive dashboard
- Adaptive app layout
- Cross-platform UI

---

### **PHẦN 6: FINAL PROJECT (Buổi 47-50)**

#### **Buổi 47: Workshop 1 - Project Planning & Setup**

**Mục tiêu:** Lập kế hoạch và thiết lập hạ tầng dự án

Dự án: Nền tảng E-Learning

Hoạt động:

- Phân tích yêu cầu (requirements analysis)
- Thiết kế cơ sở dữ liệu:
  - Sơ đồ ER (ER diagram)
  - Cấu trúc bảng (table structures)
  - Quan hệ (relationships)
- Đặc tả API (API specification)
- Thiết kế UI/UX (mockups)
- Lựa chọn công nghệ (technology stack decision)
- Khởi tạo kho Git (git repository setup)
- Kiến thức cơ bản về CI/CD pipeline

Sản phẩm bàn giao (deliverables):

- Tài liệu dự án (project documentation)
- Lược đồ cơ sở dữ liệu (database schema)
- Tài liệu API (API documentation)
- Thiết kế Figma

---

#### **Buổi 48: Workshop 2 - Backend Development**

**Mục tiêu:** Xây dựng hoàn chỉnh backend

Hoạt động:

- Triển khai cơ sở dữ liệu:
  - Tạo tất cả các bảng
  - Thiết lập các quan hệ
  - Thêm dữ liệu mẫu
- Cấu hình Supabase:
  - Thiết lập Authentication
  - Chính sách RLS
  - Functions/Triggers
- Phát triển API (tùy chọn):
  - REST endpoints
  - Authentication
  - Testing

Sản phẩm bàn giao:

- Cơ sở dữ liệu hoạt động (working database)
- Hệ thống xác thực (auth system)
- Các endpoint API
- Bộ sưu tập Postman (Postman collection)

---

#### **Buổi 49: Workshop 3 - Frontend Development**

**Mục tiêu:** Hoàn thiện ứng dụng Flutter

Hoạt động:

- Cấu trúc ứng dụng Flutter
- Luồng xác thực (authentication flow):
  - Login/Register (Đăng nhập/Đăng ký)
  - Profile management (Quản lý hồ sơ)
- Tính năng cốt lõi:
  - Danh sách khóa học (course listing)
  - Trình phát video (video player)
  - Theo dõi tiến độ (progress tracking)
  - Hệ thống quiz
- State management
- Hỗ trợ offline
- Testing

Sản phẩm bàn giao:

- Ứng dụng Flutter hoàn chỉnh
- Tích hợp với backend
- Đã kiểm thử cơ bản

---

#### **Buổi 50: Trình bày và bảo vệ Project cuối khóa**

**Mục tiêu:** Trình diễn và tổng kết dự án hoàn chỉnh

Hoạt động:

- Trình bày dự án (1.5 giờ):
  - Demo trực tiếp (live demonstration)
  - Giới thiệu tính năng (feature walkthrough)
  - Kiến trúc kỹ thuật (technical architecture)
  - Thách thức và giải pháp (challenges & solutions)
- Code review (1 giờ):
  - Best practices
  - Chất lượng mã nguồn (code quality)
  - Phân tích hiệu năng (performance analysis)
  - Đánh giá bảo mật (security review)
- Tổng kết khóa học (30 phút):
  - Trao chứng nhận (certificate ceremony)
  - Định hướng nghề nghiệp (career guidance)
  - Lộ trình học tiếp theo (next learning paths)
  - Chia sẻ tài nguyên (resources sharing)

Đánh giá cuối cùng (Final Assessment):

- Mức độ hoàn thiện dự án (project completeness): 40%
- Chất lượng mã (code quality): 20%
- Trình bày (presentation): 20%
- Sáng tạo (innovation): 10%
- Làm việc nhóm (teamwork): 10%

---

## 📋 **THÔNG TIN CHUNG**

### **Cấu trúc mỗi buổi học:**

- **30 phút:** Kiểm tra bài cũ
  - Quiz nhanh
  - Review code bài tập về nhà
  - Q&A
- **2.5 giờ:** Học mới
  - Lý thuyết với demo
  - Code along với giáo viên
  - Thực hành mini project
  - Wrap-up và bài tập về nhà
- Tỉ lệ mục tiêu: 30% lý thuyết – 70% thực hành; yêu cầu nộp bài lên GitHub mỗi buổi
- Chuẩn bị trước buổi học: tài liệu/clip 10–15 phút (flipped classroom nhẹ)

### **Yêu cầu:**

- Laptop cá nhân
- Kết nối Internet
- Tài khoản GitHub (nộp bài, theo dõi tiến độ)
- Tài khoản Supabase (free tier)
- Sẵn sàng cài đặt: Flutter SDK, VS Code, Git

### **Tài liệu tham khảo:**

- [Dart Documentation](https://dart.dev/guides)
- [Flutter Documentation](https://flutter.dev/docs)
- [Supabase Documentation](https://supabase.com/docs)
- [Shelf Package](https://pub.dev/packages/shelf)

### **Mục tiêu sau khoá học:**

Học sinh có thể:

- ✅ Viết code Dart thành thạo
- ✅ Xây dựng UI với Flutter cho mobile và web
- ✅ Thiết kế và implement PostgreSQL database
- ✅ Viết và optimize complex SQL queries
- ✅ Build REST APIs với Dart/Shelf
- ✅ Develop serverless apps với Supabase
- ✅ Implement advanced Flutter patterns
- ✅ Deploy production-ready applications
- ✅ Complete fullstack development cycle
