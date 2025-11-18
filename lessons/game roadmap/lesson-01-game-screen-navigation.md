# Bài 1: Nền Tảng Flutter App & Bố Cục Layout Cơ Bản

## Mục tiêu
- Hiểu cấu trúc một dự án Flutter chuẩn và vai trò của từng thư mục/tệp chính.
- Nắm được luồng khởi động app từ `main.dart` đến các màn hình trong `lib/`.
- Sử dụng tự tin các widget bố cục cơ bản: `Row`, `Column`, `Container`, `Text`, `ElevatedButton`.
- Luyện tập sắp xếp bố cục với màu sắc, khoảng cách và căn chỉnh để sẵn sàng dựng màn hình như `lib/screens/menu/menu_screen.dart`.

---

## 1. Bóc tách cấu trúc dự án Flutter

### 1.1 Tổng quan thư mục gốc

```
my_flutter_app/
├── android/        # Native config cho Android (Gradle, Manifest, biểu tượng...)
├── ios/            # Native config cho iOS (Xcode project, Info.plist...)
├── lib/            # Nơi đặt mã nguồn Dart chính
├── assets/         # Nơi chứa hình ảnh, font, âm thanh (tùy dự án)
├── test/           # Bài test widget/unit
├── pubspec.yaml    # Thông tin package, dependency, khai báo assets
└── analysis_options.yaml (tùy chọn) # Quy tắc linting
```

| Thư mục/tệp | Vai trò chính |
| --- | --- |
| `android/`, `ios/`, `macos/`, `windows/`, `linux/` | Giúp Flutter build ra từng nền tảng. Thường không chỉnh tay nhiều trừ khi cần native.
| `lib/` | Trái tim của ứng dụng Flutter. Bạn sẽ làm việc tại đây 90% thời gian.
| `pubspec.yaml` | Khai báo package phụ thuộc, phiên bản SDK, assets, font.
| `analysis_options.yaml` | Bật quy tắc lint để code thống nhất.
| `test/` | Viết kiểm thử widget hoặc logic.

### 1.2 Đào sâu thư mục `lib/`

```
lib/
├── main.dart                 # Điểm vào ứng dụng, gọi runApp
├── app.dart (tùy dự án)      # Có thể chứa cấu hình MaterialApp
├── screens/                  # Tổ chức các màn hình (menu, game, settings...)
│   ├── menu/                 
│   │   └── menu_screen.dart  # Ví dụ: màn hình menu trong word_guess_game
│   └── game/ ...             # Các màn hình khác
├── widgets/                  # Widget tái sử dụng (button, card, tile...)
├── managers/ or controllers/ # Quản lý state, session, audio...
└── services/                 # Giao tiếp API, lưu trữ
```

| Tệp/Thư mục | Dùng để |
| --- | --- |
| `main.dart` | Import `runApp` và gắn widget gốc (`MyApp`). Đặt breakpoint tại đây để debug khởi động.
| `screens/` | Mỗi màn hình trong app tương đương một widget lớn, chia theo folder để dễ bảo trì.
| `widgets/` | Thành phần nhỏ, có thể dùng ở nhiều màn hình (ví dụ: nút chơi lại, thẻ điểm).
| `managers/` | Quản lý logic, state dài hạn (ví dụ `GameSessionController`). Tách logic khỏi UI.
| `assets/` | Khi thêm ảnh/sound mới nhớ khai báo trong `pubspec.yaml` để Flutter bundle.

### 1.3 Dòng chảy khởi động

```
main.dart
  └─ runApp(const MyApp())
        └─ MaterialApp / CupertinoApp
              └─ home hoặc routes initialRoute
                    └─ Screen đầu tiên (ví dụ MenuScreen)
```

Việc hiểu luồng trên giúp bạn biết ở đâu cần cấu hình theme, routes, provider... trước khi UI chính được dựng.

---

## 2. Bố cục Flutter qua 5 widget nền tảng

### 2.1 Nguyên lý
- Mọi thứ trong Flutter đều là widget.
- Widget bố cục (layout) quyết định cấu trúc, widget hiển thị (display) như `Text` hoặc `Image` nằm bên trong.
- Thuộc tính `mainAxisAlignment`, `crossAxisAlignment`, `padding`, `margin` là công cụ chính để căn chỉnh.

### 2.2 `Row` và `Column`

#### Constructor & tham số quan trọng

```dart
const Row({
  Key? key,
  MainAxisAlignment mainAxisAlignment = MainAxisAlignment.start,
  MainAxisSize mainAxisSize = MainAxisSize.max,
  CrossAxisAlignment crossAxisAlignment = CrossAxisAlignment.center,
  TextDirection? textDirection,
  VerticalDirection verticalDirection = VerticalDirection.down,
  TextBaseline? textBaseline,
  required List<Widget> children,
})
```

- `mainAxisAlignment`: phân bố phần tử trên trục ngang (start, center, spaceBetween...).
- `crossAxisAlignment`: căn chỉnh trên trục dọc (start, center, end, stretch...).
- `mainAxisSize`: dùng `MainAxisSize.min` nếu muốn Row co theo nội dung.

```dart
const Column({
  Key? key,
  MainAxisAlignment mainAxisAlignment = MainAxisAlignment.start,
  MainAxisSize mainAxisSize = MainAxisSize.max,
  CrossAxisAlignment crossAxisAlignment = CrossAxisAlignment.center,
  TextDirection? textDirection,
  VerticalDirection verticalDirection = VerticalDirection.down,
  TextBaseline? textBaseline,
  required List<Widget> children,
})
```

- Tham số giống `Row` nhưng trục chính là dọc.
- Khi mix `Row` + `Column`, luôn nhớ trục chính (main) và trục phụ (cross) để đặt thuộc tính đúng.

| Thuộc tính | Row (trục ngang) | Column (trục dọc) |
| --- | --- | --- |
| `mainAxisAlignment` | Căn theo chiều ngang | Căn theo chiều dọc |
| `crossAxisAlignment` | Căn theo chiều dọc | Căn theo chiều ngang |
| `Expanded`/`Flexible` | Chia đều chiều ngang | Chia đều chiều dọc |

#### Hình dung `mainAxisAlignment`

```
Row - mainAxisAlignment: spaceAround
|   [A]   |   [B]   |   [C]   |

Row - mainAxisAlignment: spaceBetween
|[A]        [B]        [C]|

Column - mainAxisAlignment: center
--
  [A]

  [B]

  [C]
--
```

#### Hình dung `crossAxisAlignment`

```
Row - crossAxisAlignment: start
-----------------
|[A]
|[B]
|[C]
-----------------

Column - crossAxisAlignment: stretch
------------
|  [A]     |
|  [B]     |
|  [C]     |
------------
```

### 2.3 `Container`

#### Constructor & tham số quan trọng

```dart
Container({
  Key? key,
  AlignmentGeometry? alignment,
  EdgeInsetsGeometry? padding,
  Color? color,
  Decoration? decoration,
  Decoration? foregroundDecoration,
  double? width,
  double? height,
  EdgeInsetsGeometry? margin,
  Matrix4? transform,
  BoxConstraints? constraints,
  Widget? child,
})
```

- `padding`/`margin`: thêm khoảng cách bên trong/bên ngoài hộp.
- `decoration`: đặt nền gradient, bo góc, viền, shadow (dùng `BoxDecoration`).
- `constraints`: giới hạn kích thước nếu muốn kiểm soát chặt chẽ.
- Nếu dùng `color`, không nên truyền thêm `decoration.color` để tránh conflict.

- Cho phép cấu hình kích thước, nền, bo góc, viền, margin/padding.
- Kết hợp `Container` + `Row`/`Column` để dựng layout có màu sắc rõ ràng.

```dart
Container(
  width: 200,
  padding: const EdgeInsets.all(16),
  margin: const EdgeInsets.symmetric(vertical: 8),
  decoration: BoxDecoration(
    color: Colors.blue.shade300,
    borderRadius: BorderRadius.circular(16),
  ),
  child: const Text('Card title'),
)
```

### 2.4 `Text`

```dart
const Text(
  String data, {
  Key? key,
  TextStyle? style,
  StrutStyle? strutStyle,
  TextAlign? textAlign,
  TextDirection? textDirection,
  Locale? locale,
  bool? softWrap,
  TextOverflow? overflow,
  double? textScaleFactor,
  int? maxLines,
  String? semanticsLabel,
  TextWidthBasis? textWidthBasis,
})
```

- `style`: thiết kế chữ, nên tái sử dụng từ `Theme.of(context).textTheme`.
- `textAlign`: căn lề trái/phải/giữa.
- `maxLines` + `overflow`: kiểm soát xuống dòng và hiển thị `...` khi tràn.

### 2.5 `ElevatedButton`

```dart
ElevatedButton({
  Key? key,
  required VoidCallback? onPressed,
  VoidCallback? onLongPress,
  ButtonStyle? style,
  FocusNode? focusNode,
  bool autofocus = false,
  Clip clipBehavior = Clip.none,
  required Widget? child,
})
```

- `onPressed`: null sẽ disable, dùng để khóa nút khi đang tải dữ liệu.
- `style`: tùy chỉnh kích thước, màu, shape (`ElevatedButton.styleFrom` hoặc `ButtonStyle`).
- `child`: có thể là `Text`, `Row` (icon + label) tùy ý.

```dart
ElevatedButton(
  onPressed: () {},
  style: ElevatedButton.styleFrom(
    minimumSize: const Size(double.infinity, 56),
    shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(28)),
  ),
  child: const Text('Bắt đầu'),
)
```

---

## 3. Mini bài tập layout

### Bài tập 1: Hộp màu ngang
Mục tiêu: luyện `Row`, `mainAxisAlignment`, `Container`.

Yêu cầu:
1. Tạo `Row` với 3 `Container` kích thước 80x80.
2. Mỗi box có màu khác nhau (đỏ, xanh, vàng) và bo góc 12.
3. Thử các giá trị `mainAxisAlignment`: `spaceBetween`, `center`, `spaceAround` và ghi nhận sự khác nhau.

Gợi ý sơ đồ:

```
| [Red]   [Green]   [Yellow] |
```

<details>
<summary>Gợi ý code</summary>

```dart
Row(
  mainAxisAlignment: MainAxisAlignment.spaceAround,
  children: const [
    _ColorBox(color: Colors.red),
    _ColorBox(color: Colors.green),
    _ColorBox(color: Colors.yellow),
  ],
)

class _ColorBox extends StatelessWidget {
  const _ColorBox({required this.color});
  final Color color;

  @override
  Widget build(BuildContext context) {
    return Container(
      width: 80,
      height: 80,
      decoration: BoxDecoration(
        color: color,
        borderRadius: BorderRadius.circular(12),
      ),
    );
  }
}
```

</details>

### Bài tập 2: Layout dọc có header, content, footer
Mục tiêu: luyện `Column`, `Expanded`, `crossAxisAlignment`.

Yêu cầu:
1. `Column` gồm 3 phần: Header (cao 100), Body (chiếm phần còn lại), Footer (cao 80).
2. Body sử dụng `Expanded` + `Container` màu nhạt để dễ phân biệt.
3. Trong Body, chèn thêm `Column` nhỏ với `Text` căn giữa.

Sơ đồ mong muốn:

```
Header (màu tím nhạt)
---------------------
|                   |
|      Body         |
|   (Expanded)      |
|                   |
---------------------
Footer (màu xám)
```

<details>
<summary>Gợi ý code</summary>

```dart
Column(
  children: [
    Container(
      height: 100,
      alignment: Alignment.center,
      color: Colors.purple.shade200,
      child: const Text('Header'),
    ),
    Expanded(
      child: Container(
        color: Colors.purple.shade50,
        child: const Center(
          child: Text('Body content goes here'),
        ),
      ),
    ),
    Container(
      height: 80,
      alignment: Alignment.center,
      color: Colors.grey.shade300,
      child: const Text('Footer'),
    ),
  ],
)
```

</details>

### Bài tập 3: Thẻ thông tin
Mục tiêu: kết hợp `Row` + `Column` + `Text` + `ElevatedButton`.

Yêu cầu:
1. `Container` bo góc 20, padding 16, nền trắng, shadow nhẹ (`BoxShadow`).
2. Bên trong có `Row`: bên trái là `Column` (tiêu đề, mô tả), bên phải là `ElevatedButton`.
3. Dùng `crossAxisAlignment: CrossAxisAlignment.start` cho `Column` để text căn trái.

<details>
<summary>Gợi ý code</summary>

```dart
Container(
  padding: const EdgeInsets.all(16),
  decoration: BoxDecoration(
    color: Colors.white,
    borderRadius: BorderRadius.circular(20),
    boxShadow: const [
      BoxShadow(
        color: Colors.black12,
        blurRadius: 8,
        offset: Offset(0, 4),
      ),
    ],
  ),
  child: Row(
    children: [
      Expanded(
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: const [
            Text('Daily Challenge', style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold)),
            SizedBox(height: 8),
            Text('Hoàn thành trong 3 phút để nhận 50 điểm thưởng'),
          ],
        ),
      ),
      ElevatedButton(
        onPressed: () {},
        child: const Text('Bắt đầu'),
      ),
    ],
  ),
)
```

</details>

### Bài tập 4: Lưới mềm bằng `Row` + `Expanded`
Mục tiêu: tạo lưới 2x2 chỉ với `Column` và `Row`.

Yêu cầu:
1. Dùng `Column` chứa hai `Expanded`, mỗi phần là một `Row`.
2. Mỗi `Row` gồm hai `Expanded` với `Container` màu khác nhau.
3. Thêm `SizedBox(height: 12)` giữa các hàng và `SizedBox(width: 12)` giữa các cột.

<details>
<summary>Gợi ý code</summary>

```dart
Column(
  children: [
    Expanded(
      child: Row(
        children: const [
          Expanded(child: _ColorCard(color: Colors.teal)),
          SizedBox(width: 12),
          Expanded(child: _ColorCard(color: Colors.orange)),
        ],
      ),
    ),
    SizedBox(height: 12),
    Expanded(
      child: Row(
        children: const [
          Expanded(child: _ColorCard(color: Colors.blue)),
          SizedBox(width: 12),
          Expanded(child: _ColorCard(color: Colors.pink)),
        ],
      ),
    ),
  ],
)

class _ColorCard extends StatelessWidget {
  const _ColorCard({required this.color});
  final Color color;

  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: BoxDecoration(
        color: color,
        borderRadius: BorderRadius.circular(16),
      ),
    );
  }
}
```

</details>

### Bài tập 5: Dashboard tỷ lệ 2-1
Mục tiêu: luyện `Flexible` và `Expanded`.

Yêu cầu:
1. Dùng `Row` với hai thẻ: thẻ trái chiếm 2 phần, thẻ phải chiếm 1 phần.
2. Bên trong thẻ trái, đặt `Column` với tiêu đề và danh sách 3 ô nhỏ (`Container`).
3. Bên trong thẻ phải, căn giữa `Text` lớn.

<details>
<summary>Gợi ý code</summary>

```dart
Row(
  children: [
    Expanded(
      flex: 2,
      child: Container(
        padding: const EdgeInsets.all(16),
        decoration: BoxDecoration(
          color: Colors.indigo.shade50,
          borderRadius: BorderRadius.circular(20),
        ),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            const Text('Nhiệm vụ hôm nay', style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold)),
            const SizedBox(height: 12),
            ...List.generate(
              3,
              (index) => Container(
                margin: const EdgeInsets.only(bottom: 8),
                padding: const EdgeInsets.all(12),
                decoration: BoxDecoration(
                  color: Colors.white,
                  borderRadius: BorderRadius.circular(12),
                ),
                child: Text('Task ${index + 1}'),
              ),
            ),
          ],
        ),
      ),
    ),
    const SizedBox(width: 16),
    Expanded(
      flex: 1,
      child: Container(
        decoration: BoxDecoration(
          color: Colors.amber.shade200,
          borderRadius: BorderRadius.circular(20),
        ),
        child: const Center(
          child: Text('Best Score', style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold)),
        ),
      ),
    ),
  ],
)
```

</details>

---

## 4. Lắp ráp thành màn hình hoàn chỉnh

### 4.1 Checklist dựng menu giống `menu_screen.dart`
- Header chứa nút setting và toggle theme (Row, căn hai đầu).
- Phần giữa: `Column` với tiêu đề lớn, mô tả, các nút hành động.
- Sử dụng `ElevatedButton` (nút chính) và `OutlinedButton` (nút phụ) trên toàn chiều ngang.
- Phần nền: `Container` với `BoxDecoration` gradient.
- Bọc toàn bộ trong `SafeArea` + `Padding` để tránh dính cạnh màn hình.

### 4.2 Gợi ý quy trình
1. Khởi đầu với `Scaffold(body: Container(...))`.
2. Dùng `SafeArea` để tránh notch.
3. Dựng `Column` lớn theo thứ tự: header, spacer, nội dung, spacer, button.
4. Mỗi phần tách thành widget riêng nếu bắt đầu dài (giúp code sạch hơn).
5. Áp dụng kiến thức Row/Column vừa luyện để căn chỉnh.

### 4.3 Mở rộng sang màn hình khác
- Áp dụng cùng bộ widget để dựng màn hình leaderboard, settings.
- Chỉ cần thay đổi `Row`/`Column`, `Text`, `Button`, bạn đã có thể mô phỏng bố cục mới.
- Khi gặp layout khó, hãy vẽ sơ đồ ASCII trước rồi chuyển thành widget.

---

## 5. Bài tập về nhà

1. **Trang chủ game tối giản**: Dựng màn hình gồm logo (Text lớn), 3 nút chức năng xếp dọc và một banner nhỏ ở dưới cùng. Tập trung căn chỉnh khoảng cách đều giữa các thành phần.
2. **Bảng xếp hạng dạng thẻ**: Tạo danh sách 5 thẻ điểm số với `ListView` hoặc `Column` + `Expanded`. Mỗi thẻ hiển thị hạng, tên người chơi, điểm và avatar hình tròn (dùng `Container` bo tròn hoặc `CircleAvatar`).
3. **Màn hình cài đặt**: Chia layout thành hai cột. Cột trái là danh sách menu (General, Sound, Notifications...). Cột phải hiển thị nội dung tương ứng với từng lựa chọn, bắt đầu bằng phần Sound gồm 2 công tắc (`SwitchListTile`).
4. **HUD trong game đơn giản**: Dùng `Stack` + `Positioned` để mô phỏng điểm số ở góc trái, tiến trình ở giữa, nút pause góc phải. Bên dưới Stack đặt bảng điều khiển (Row với 3 nút) để luyện layering.

*Gợi ý*: Mỗi bài tập nên bắt đầu bằng wireframe ASCII → chuyển thành layout Flutter → so sánh với `menu_screen.dart` để học cách đặt màu, padding, typography.

---

## 6. Tài liệu nên xem thêm
- [Widget Catalog](https://docs.flutter.dev/ui/widgets) (tra cứu nhanh từng widget).
- [Layout Basics](https://docs.flutter.dev/ui/layout/tutorial) (ví dụ chính thức).
- `lib/screens/menu/menu_screen.dart` trong dự án `word_guess_game` (xem cách kết hợp thực tế).

---

## 7. Kết luận & bước tiếp theo
- Bạn đã nắm được cấu trúc dự án Flutter, hiểu nơi cần chỉnh khi thêm màn hình mới.
- `Row`, `Column`, `Container`, `Text`, `ElevatedButton` là bộ công cụ cốt lõi để ráp UI.
- Thực hành các bài tập màu sắc giúp bạn cảm nhận rõ các thuộc tính alignment.
- Sau bài này, hãy dựng lại màn hình menu theo ý tưởng riêng và thử nhân bản để tạo thêm màn hình mới (ví dụ màn hình hướng dẫn, bảng xếp hạng).
  - Mục tiêu: đạt layout tương đương `lib/screens/menu/menu_screen.dart` nhưng với nội dung của bạn.

Khi đã quen với bố cục, chúng ta sẽ tiếp tục với chủ đề quản lý state và điều hướng ở bài kế tiếp.
