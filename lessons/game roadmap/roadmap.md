# Khóa Học Phát Triển Game 2D với Flutter
## Xây Dựng Game Thực Tế với Casual Games Toolkit

**Đối Tượng**: Lập trình viên Dart chưa có kinh nghiệm Flutter  
**Định Dạng Khóa Học**: 13 bài (9 bài học + 3 bài dự án + 1 bài thi cuối khóa)  
**Mục Tiêu**: Xây dựng một game 2D hoàn chỉnh và hiểu các nguyên lý cơ bản phát triển game Flutter  
**Phương Pháp**: Học thông qua việc xây dựng các thành phần game trong mỗi bài học

---

## Tổng Quan Khóa Học

Khóa học này dạy phát triển game Flutter thông qua **thực hành xây dựng thực tế**. Mỗi bài học tập trung vào việc tạo một thành phần game cụ thể mà bạn sẽ sử dụng trong dự án cuối kỳ. Các khái niệm Flutter được giới thiệu khi cần thiết trong quá trình xây dựng các tính năng game thực tế.

**Cấu Trúc Khóa Học:**
- **Bài 1-9**: Xây dựng các thành phần game riêng lẻ (widgets, cơ chế, hệ thống)
- **Bài 10-12**: Tích hợp các thành phần thành một dự án game hoàn chỉnh
- **Bài 13**: Thi cuối khóa - Xây dựng game độc lập

---

## 📚 CÁC BÀI HỌC LÝ THUYẾT (1-9)

### Bài 1: Thiết Lập Màn Hình Game & Điều Hướng
**Bạn Sẽ Xây Dựng**: Menu chính và điều hướng màn hình game

**Thành Phần Game:**
- Màn hình menu chính với nút "Chơi" và "Cài đặt"
- Điều hướng giữa các màn hình
- Bố cục màn hình game cơ bản

**Khái Niệm Flutter Học Được:**
- Cơ bản về Widgets (Stateless/Stateful)
- MaterialApp và routing
- Stack, Container, Center widgets
- GestureDetector để xử lý nhấn nút
- Navigator.push/pop

**Kết Quả Thực Tế**: Khung game có thể điều hướng với luồng menu → game → menu

---

### Bài 2: Tài Nguyên Game & Các Yếu Tố Hình Ảnh
**Bạn Sẽ Xây Dựng**: Hệ thống render sprite

**Thành Phần Game:**
- Hiển thị sprite game (người chơi, kẻ địch, vật phẩm)
- Tải và tổ chức tài nguyên game
- Định vị các phần tử trên màn hình

**Khái Niệm Flutter Học Được:**
- Cấu hình asset trong pubspec.yaml
- Widget Image.asset
- Widget Positioned cho định vị tuyệt đối
- Cấu trúc thư mục asset tốt nhất

**Kết Quả Thực Tế**: Màn hình game với các sprite được định vị chính xác

---

### Bài 3: Xử Lý Chạm & Điều Khiển Người Chơi
**Bạn Sẽ Xây Dựng**: Bộ điều khiển di chuyển người chơi

**Thành Phần Game:**
- Chạm để di chuyển người chơi
- Kéo để điều khiển vị trí
- Phát hiện cử chỉ vuốt

**Khái Niệm Flutter Học Được:**
- GestureDetector (onTap, onPanUpdate, onPanEnd)
- Tọa độ chạm và vị trí màn hình
- setState() để cập nhật UI
- Quản lý state cục bộ

**Kết Quả Thực Tế**: Nhân vật người chơi có thể điều khiển và phản hồi với chạm

---

### Bài 4: Hoạt Hình & Vòng Lặp Game
**Bạn Sẽ Xây Dựng**: Hệ thống hoạt hình và vòng lặp cập nhật

**Thành Phần Game:**
- Hoạt hình đi bộ/đứng yên của người chơi
- Vòng lặp game cơ bản
- Sinh kẻ địch theo thời gian
- Di chuyển tự động

**Khái Niệm Flutter Học Được:**
- AnimationController và Ticker
- Tween animations
- Timer và Duration
- Cập nhật theo frame

**Kết Quả Thực Tế**: Nhân vật có hoạt hình và kẻ địch xuất hiện tự động

---

### Bài 5: Phát Hiện Va Chạm & Điểm Số
**Bạn Sẽ Xây Dựng**: Hệ thống va chạm và theo dõi điểm

**Thành Phần Game:**
- Phát hiện va chạm giữa các đối tượng
- Hiển thị điểm số (HUD)
- Hệ thống mạng sống
- Phát hiện game over

**Khái Niệm Flutter Học Được:**
- Tính toán Rect và Offset
- Phương thức overlaps()
- Provider cho quản lý state
- ChangeNotifier pattern

**Kết Quả Thực Tế**: Hệ thống va chạm hoạt động với điểm số và màn hình game over

---

### Bài 6: Hiệu Ứng Âm Thanh & Nhạc Nền
**Bạn Sẽ Xây Dựng**: Trình quản lý âm thanh

**Thành Phần Game:**
- Nhạc nền
- Hiệu ứng âm thanh (thu thập, va chạm, thắng, thua)
- Bật/tắt âm thanh

**Khái Niệm Flutter Học Được:**
- Hệ thống âm thanh Casual Games Toolkit
- Sử dụng AudioController
- Phát âm thanh khi có sự kiện
- Quản lý tài nguyên âm thanh

**Kết Quả Thực Tế**: Game với nhạc nền và hiệu ứng âm thanh phản hồi

---

### Bài 7: Cài Đặt & Lưu Trữ Dữ Liệu
**Bạn Sẽ Xây Dựng**: Màn hình cài đặt và hệ thống lưu

**Thành Phần Game:**
- Màn hình cài đặt (âm thanh, độ khó)
- Lưu điểm cao
- Lưu trữ tùy chọn người chơi

**Khái Niệm Flutter Học Được:**
- SharedPreferences
- async/await để tải dữ liệu
- Mô hình dữ liệu cài đặt
- Form inputs và switches

**Kết Quả Thực Tế**: Màn hình cài đặt với điểm cao được lưu trữ

---

### Bài 8: Hiệu Ứng Hình Ảnh & Particle
**Bạn Sẽ Xây Dựng**: Hiệu ứng particle và animations nâng cao

**Thành Phần Game:**
- Hiệu ứng nổ particle khi va chạm
- Hoạt hình popup điểm số
- Hiệu ứng rung màn hình
- Transform và scale effects

**Khái Niệm Flutter Học Được:**
- CustomPainter cho particles
- Overlay widgets
- Opacity và fade animations
- Transform widget (xoay, scale)

**Kết Quả Thực Tế**: Game với hiệu ứng hình ảnh hấp dẫn

---

### Bài 9: Tổng Hợp & Tối Ưu Hóa
**Bạn Sẽ Xây Dựng**: Hoàn thiện và tối ưu các thành phần

**Thành Phần Game:**
- Review tất cả các thành phần đã học
- Tối ưu hiệu suất
- Xử lý edge cases
- Chuẩn bị cho dự án cuối kỳ

**Khái Niệm Flutter Học Được:**
- Best practices cho game Flutter
- Quản lý memory
- Performance profiling
- Code organization

**Kết Quả Thực Tế**: Hiểu rõ cách tích hợp tất cả thành phần vào một game hoàn chỉnh

---

## 🎮 CÁC BÀI HỌC DỰ ÁN (10-12)

## 🎮 CÁC BÀI HỌC DỰ ÁN (10-12)

### Bài 10: Thiết Kế Game Của Bạn
**Lập Kế Hoạch Dự Án Cuối Kỳ**

**Hoạt Động:**
- Chọn loại game của bạn (endless runner, bắt trái cây, game chạm, v.v.)
- Thiết kế cơ chế game sử dụng các thành phần đã học (Bài 1-9)
- Lập kế hoạch bố cục màn hình và luồng
- Tạo danh sách tài nguyên và quy tắc game
- Vẽ wireframe/mockup các màn hình

**Sản Phẩm Bàn Giao**: Tài liệu thiết kế game bao gồm:
- Mô tả ý tưởng game chi tiết
- Kế hoạch sử dụng các thành phần từ 9 bài học
- Mockup màn hình
- Quy tắc và hệ thống tính điểm
- Danh sách assets cần thiết

---

### Bài 11: Xây Dựng Game Của Bạn
**Phiên Triển Khai - Phần 1**

**Hoạt Động:**
- Thiết lập cấu trúc dự án Flutter
- Triển khai các màn hình cơ bản (Menu, Game, Settings)
- Tích hợp các thành phần đã học:
  - Điều hướng & màn hình (Bài 1)
  - Sprites & assets (Bài 2)
  - Input & điều khiển (Bài 3)
  - Hoạt hình & vòng lặp (Bài 4)
  - Va chạm & điểm số (Bài 5)

**Sản Phẩm Bàn Giao**: Game có gameplay cơ bản hoạt động được

---

### Bài 12: Hoàn Thiện Game Của Bạn
**Phiên Triển Khai - Phần 2**

**Hoạt Động:**
- Tích hợp các thành phần nâng cao:
  - Âm thanh & nhạc nền (Bài 6)
  - Cài đặt & lưu dữ liệu (Bài 7)
  - Hiệu ứng hình ảnh (Bài 8)
  - Tối ưu hóa (Bài 9)
- Sửa lỗi và kiểm thử
- Hoàn thiện UI/UX
- Kiểm thử trên thiết bị thật

**Sản Phẩm Bàn Giao**: Game 2D hoàn chỉnh, được hoàn thiện và sẵn sàng chơi

---

## 📝 DỰ ÁN CUỐI KHÓA (Bài 13)

### Bài 13: Dự Án Cuối Khóa - Xây Dựng Game Độc Lập
**Đánh Giá Tổng Hợp Kỹ Năng**

**Yêu Cầu:**
Xây dựng một game 2D mới **hoàn toàn khác** với dự án bài 10-12. Sinh viên làm **ở nhà** và submit code + video demo.

**Thời gian:** 1 tuần để hoàn thành

**Đề Bài:**
Sinh viên sẽ được giao một trong các đề bài sau (random hoặc tự chọn):

1. **Game Học Từ Vựng (Vocabulary Learning Game)**
   - Từ vựng tiếng Anh hoặc tiếng Hàn rơi từ trên xuống
   - Hiển thị nghĩa tiếng Việt, chọn từ đúng
   - Tap vào từ đúng để ghi điểm
   - Sai 3 lần = game over
   - Có ít nhất 20-30 từ vựng

2. **Game Ghép Từ (Word Matching)**
   - Hiển thị từ tiếng Anh/Hàn bên trái, nghĩa bên phải
   - Kéo thả để ghép đúng cặp
   - Có timer và điểm số
   - Nhiều cấp độ (dễ → khó)

3. **Game Nhảy Tránh (Jump & Dodge)**
   - Nhân vật chạy tự động
   - Tap để nhảy tránh chướng ngại vật
   - Tốc độ tăng dần

4. **Game Lật Thẻ (Card Flip)**
   - Lật thẻ tìm cặp giống nhau
   - Đếm số lượt lật
   - Đồng hồ đếm ngược

5. **Game Đuổi Bắt (Chase Game)**
   - Điều khiển nhân vật bắt vật phẩm
   - Tránh bom/chướng ngại vật
   - Thời gian giới hạn

**Tiêu Chí Chấm Điểm (100 điểm):**

| Tiêu Chí | Điểm | Mô Tả |
|----------|------|-------|
| **Màn hình & Navigation** | 10 | Menu chính, game screen, navigation hoạt động |
| **Hiển thị Sprites** | 10 | Load và hiển thị assets đúng vị trí |
| **Xử lý Input** | 15 | Tap/drag/swipe hoạt động chính xác |
| **Hoạt hình & Chuyển động** | 15 | Sprite có animation mượt mà |
| **Game Loop** | 15 | Vòng lặp game và timing hoạt động |
| **Va chạm** | 15 | Phát hiện va chạm chính xác |
| **Điểm & Game Over** | 10 | Tính điểm và phát hiện game over |
| **Code Quality** | 5 | Code sạch, có comments, structure tốt |
| **Sáng tạo** | 5 | Thêm tính năng/hiệu ứng riêng |

**Lưu Ý:**
- Không bắt buộc có âm thanh (bonus +5 điểm nếu có)
- Không bắt buộc lưu điểm cao (bonus +5 điểm nếu có)
- Focus vào gameplay hoạt động tốt
- Có thể tham khảo code từ 9 bài học trước
- **Không được sao chép code dự án bài 10-12**
- Đối với game học ngôn ngữ: Data từ vựng có thể hardcode trong code

**Thời Gian & Cách Nộp:**
- **Thời gian làm bài:** 1 tuần (làm ở nhà)
- **Hình thức nộp:** 
  - Link GitHub repository (public) hoặc file ZIP
  - Video demo game chạy được (2-3 phút)
  - File README với hướng dẫn chạy

**Sản Phẩm Bàn Giao:**
- ✅ Source code đầy đủ (Flutter project)
- ✅ Video demo gameplay (MP4, 2-3 phút)
- ✅ File README.md bao gồm:
  - Tên game và mô tả
  - Hướng dẫn cài đặt và chạy
  - Các tính năng đã triển khai
  - Screenshot/GIF demo (nếu có)
  - Danh sách thành phần từ 9 bài học đã sử dụng

**Hạn Nộp:**
- Submit trước deadline qua email/platform của lớp
- Trễ hạn: -10 điểm/ngày

---

## 📦 Thiết Lập Yêu Cầu

### Các Package Cần Cài Đặt:
```yaml
dependencies:
  flutter:
    sdk: flutter
  provider: ^6.0.0
  shared_preferences: ^2.0.0
  audioplayers: ^5.0.0  # hoặc games_services audio

dev_dependencies:
  flutter_test:
    sdk: flutter
```

### Cấu Trúc Dự Án:
```
lib/
├── main.dart
├── screens/
│   ├── menu_screen.dart
│   ├── game_screen.dart
│   ├── settings_screen.dart
│   └── game_over_screen.dart
├── components/
│   ├── player.dart
│   ├── enemy.dart
│   └── collectible.dart
├── managers/
│   ├── game_state.dart
│   ├── audio_manager.dart
│   └── collision_manager.dart
└── utils/
    └── constants.dart

assets/
├── images/
├── audio/
└── fonts/
```

---

## 🎯 Ví Dụ Ý Tưởng Game Cho Dự Án Cuối Kỳ

### 1. **Bắt Trái Cây (Fruit Catcher)**
- Trái cây rơi từ trên xuống
- Người chơi di chuyển giỏ trái/phải
- Bắt trái cây tốt, tránh bom
- Điểm số dựa trên số lượng bắt được

### 2. **Chạm & Nổ (Tap & Pop)**
- Bong bóng nổi lên từ dưới
- Chạm để làm nổ trước khi chúng chạm đỉnh
- Màu sắc khác nhau = điểm khác nhau
- Tốc độ tăng theo thời gian

### 3. **Ghép Chữ Nhanh (Word Blitz)**
- Các chữ cái rơi xuống màn hình
- Chạm các chữ cái để đánh vần từ
- Từ hợp lệ cho điểm
- Thử thách với đồng hồ

### 4. **Bay Vô Tận (Endless Flyer)**
- Nhân vật tự động bay về phía trước
- Chạm để vỗ cánh/nhảy
- Tránh chướng ngại vật
- Thu thập xu

### 5. **Ghép Đôi Trí Nhớ (Memory Match)**
- Game lật thẻ bài
- Ghép các cặp thẻ giống nhau
- Đồng hồ và bộ đếm nước đi
- Các cấp độ khó

---

## ✅ Kết Quả Học Tập

Sau khi hoàn thành khóa học, bạn sẽ:
- ✅ Hiểu hệ thống widget Flutter thông qua các thành phần game
- ✅ Xử lý input chạm và cử chỉ
- ✅ Tạo hoạt hình mượt mà và hiệu ứng hình ảnh
- ✅ Triển khai vòng lặp game và hệ thống timing
- ✅ Phát hiện va chạm giữa các đối tượng game
- ✅ Quản lý trạng thái game với Provider
- ✅ Tích hợp âm thanh và hiệu ứng âm thanh
- ✅ Lưu và tải dữ liệu game
- ✅ Xây dựng một game 2D hoàn chỉnh, có thể chơi được
- ✅ Có nền tảng để tạo các game phức tạp hơn

---

## 📖 Triết Lý Khóa Học

**Học Bằng Thực Hành**: Mỗi bài học tạo ra một thành phần game hoạt động  
**Xây Dựng Dần Dần**: Mỗi thành phần được xây dựng dựa trên các bài học trước  
**Tập Trung Thực Tế**: Lý thuyết chỉ được giới thiệu khi cần thiết  
**Sản Phẩm Game Thực Tế**: Kết thúc với một game thực sự mà bạn có thể khoe với người khác

