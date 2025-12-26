---
sidebar_position: 15
title: "Bài 15: Memory Card Game với Animation & Sound"
description: Hoàn thiện game lật thẻ tìm cặp với hiệu ứng và âm thanh
---

# Bài 15: Memory Card Game với Animation & Sound

Chào các em! Ở bài trước, chúng ta đã học cách tạo Grid và hiển thị các thẻ bài. Hôm nay, chúng ta sẽ hoàn thiện game **Memory Card** với đầy đủ:
- ✅ Logic so sánh 2 thẻ
- ✅ Đếm số lượt chơi
- ✅ Hiệu ứng animation đơn giản
- ✅ Âm thanh khi lật thẻ

---

## Mục tiêu

- Hiểu logic game Memory Card (lật thẻ tìm cặp)
- Sử dụng `Future.delayed` để tạo delay
- Thêm animation đơn giản với `AnimatedContainer`
- Tích hợp âm thanh với package `audioplayers`
- Hoàn thành game có thể chơi được!

---

## Phần 1: Phân tích Game Logic

### 1.1 Luật chơi

1. Bảng 4x4 gồm 16 thẻ (8 cặp emoji giống nhau)
2. Các thẻ ban đầu đều úp
3. Người chơi tap để lật thẻ
4. Mỗi lượt lật 2 thẻ:
   - Nếu **giống nhau** → Giữ nguyên (matched ✅)
   - Nếu **khác nhau** → Úp lại sau 1 giây
5. Thắng khi tìm được tất cả 8 cặp

### 1.2 Các trạng thái cần quản lý

| Biến | Kiểu | Mô tả |
|------|------|-------|
| `_cards` | `List<CardModel>` | Danh sách 16 thẻ |
| `_firstCardIndex` | `int?` | Index thẻ đầu tiên đã lật |
| `_secondCardIndex` | `int?` | Index thẻ thứ hai đã lật |
| `_moves` | `int` | Số lượt đã chơi |
| `_isProcessing` | `bool` | Đang xử lý so sánh (không cho tap) |

### 1.3 Flow xử lý khi tap thẻ

<details>
<summary>Game Logic Flow</summary>

```
Tap thẻ
    │
    ▼
┌─────────────────────────────────┐
│ Kiểm tra:                       │
│ - Đang xử lý? → bỏ qua          │
│ - Thẻ đã lật? → bỏ qua          │
│ - Thẻ đã matched? → bỏ qua      │
└─────────────────────────────────┘
    │
    ▼
Lật thẻ (isFlipped = true)
    │
    ▼
┌─────────────────┐      ┌──────────────────────┐
│ Thẻ đầu tiên?   │──NO──▶ Lưu thẻ thứ 2        │
│ (firstCard==null)       │ Tăng _moves          │
└────────┬────────┘       │ Đặt _isProcessing    │
         │                │ Gọi _checkMatch()    │
        YES               └──────────────────────┘
         │
         ▼
    Lưu thẻ đầu tiên
```

</details>

---

## Phần 2: Xây dựng Game từng bước

### Bước 1: Tạo Model cho thẻ bài

Tạo file `lib/models/card_model.dart`:

<details>
<summary>Code: `lib/models/card_model.dart`</summary>

```dart
class CardModel {
  final int id;           // ID duy nhất (0-15)
  final String emoji;     // Emoji hiển thị
  bool isFlipped;         // Đang lật hay úp
  bool isMatched;         // Đã tìm được cặp chưa

  CardModel({
    required this.id,
    required this.emoji,
    this.isFlipped = false,
    this.isMatched = false,
  });
}
```

</details>

### Bước 2: Tạo màn hình game cơ bản

Tạo file `lib/screens/memory_game_screen.dart`:

<details>
<summary>Code: `lib/screens/memory_game_screen.dart` (Basic Game)</summary>

```dart
import 'package:flutter/material.dart';
import '../models/card_model.dart';

class MemoryGameScreen extends StatefulWidget {
  const MemoryGameScreen({super.key});

  @override
  State<MemoryGameScreen> createState() => _MemoryGameScreenState();
}

class _MemoryGameScreenState extends State<MemoryGameScreen> {
  // Danh sách emoji (8 cặp)
  final List<String> _emojis = ['🎯', '🌟', '🎨', '🎭', '🎪', '🎢', '🎡', '🎠'];
  
  // State của game
  List<CardModel> _cards = [];
  int? _firstCardIndex;
  int? _secondCardIndex;
  int _moves = 0;
  bool _isProcessing = false;

  @override
  void initState() {
    super.initState();
    _initializeGame();
  }

  // Khởi tạo game mới
  void _initializeGame() {
    List<CardModel> cards = [];
    
    // Tạo 16 thẻ (mỗi emoji 2 lần)
    for (int i = 0; i < _emojis.length; i++) {
      cards.add(CardModel(id: i * 2, emoji: _emojis[i]));
      cards.add(CardModel(id: i * 2 + 1, emoji: _emojis[i]));
    }
    
    // Xáo trộn
    cards.shuffle();
    
    setState(() {
      _cards = cards;
      _firstCardIndex = null;
      _secondCardIndex = null;
      _moves = 0;
      _isProcessing = false;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.grey.shade100,
      appBar: AppBar(
        title: const Text('Memory Card Game'),
        centerTitle: true,
        backgroundColor: Colors.deepPurple,
        foregroundColor: Colors.white,
      ),
      body: SafeArea(
        child: Padding(
          padding: const EdgeInsets.all(16.0),
          child: Column(
            children: [
              // Hiển thị số lượt
              _buildScoreBoard(),
              
              const SizedBox(height: 16),
              
              // Grid thẻ bài
              Expanded(
                child: _buildCardGrid(),
              ),
              
              const SizedBox(height: 16),
              
              // Nút chơi lại
              _buildRestartButton(),
            ],
          ),
        ),
      ),
    );
  }

  Widget _buildScoreBoard() {
    return Container(
      padding: const EdgeInsets.symmetric(vertical: 12, horizontal: 24),
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.circular(20),
        boxShadow: [
          BoxShadow(
            color: Colors.deepPurple.withOpacity(0.1),
            blurRadius: 10,
            offset: const Offset(0, 4),
          ),
        ],
      ),
      child: Row(
        mainAxisSize: MainAxisSize.min,
        children: [
          const Icon(Icons.touch_app, color: Colors.deepPurple),
          const SizedBox(width: 8),
          Text(
            'Số lượt: $_moves',
            style: const TextStyle(
              fontSize: 18,
              fontWeight: FontWeight.bold,
              color: Colors.deepPurple,
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildCardGrid() {
    return GridView.builder(
      physics: const NeverScrollableScrollPhysics(),
      gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
        crossAxisCount: 4,
        mainAxisSpacing: 8,
        crossAxisSpacing: 8,
        childAspectRatio: 1.0,
      ),
      itemCount: _cards.length,
      itemBuilder: (context, index) {
        return _buildCard(index);
      },
    );
  }

  Widget _buildCard(int index) {
    final card = _cards[index];
    final isVisible = card.isFlipped || card.isMatched;
    
    return GestureDetector(
      onTap: () => _onCardTap(index),
      child: Container(
        decoration: BoxDecoration(
          color: card.isMatched
              ? Colors.green.shade100
              : isVisible
                  ? Colors.white
                  : Colors.deepPurple,
          borderRadius: BorderRadius.circular(12),
          border: Border.all(
            color: card.isMatched ? Colors.green : Colors.deepPurple.shade300,
            width: 2,
          ),
          boxShadow: [
            BoxShadow(
              color: Colors.black.withOpacity(0.1),
              blurRadius: 4,
              offset: const Offset(0, 2),
            ),
          ],
        ),
        child: Center(
          child: Text(
            isVisible ? card.emoji : '?',
            style: TextStyle(
              fontSize: 32,
              color: isVisible ? null : Colors.white,
            ),
          ),
        ),
      ),
    );
  }

  Widget _buildRestartButton() {
    return ElevatedButton.icon(
      onPressed: _initializeGame,
      icon: const Icon(Icons.refresh),
      label: const Text('Chơi lại'),
      style: ElevatedButton.styleFrom(
        backgroundColor: Colors.deepPurple,
        foregroundColor: Colors.white,
        minimumSize: const Size(200, 50),
        shape: RoundedRectangleBorder(
          borderRadius: BorderRadius.circular(25),
        ),
      ),
    );
  }

  // XỬ LÝ KHI TAP THẺ
  void _onCardTap(int index) {
    // Bỏ qua nếu đang xử lý
    if (_isProcessing) return;
    // Bỏ qua nếu thẻ đã lật
    if (_cards[index].isFlipped) return;
    // Bỏ qua nếu thẻ đã matched
    if (_cards[index].isMatched) return;
    
    setState(() {
      // Lật thẻ
      _cards[index].isFlipped = true;
      
      if (_firstCardIndex == null) {
        // Đây là thẻ đầu tiên
        _firstCardIndex = index;
      } else {
        // Đây là thẻ thứ hai
        _secondCardIndex = index;
        _moves++;
        _isProcessing = true;
        
        // Kiểm tra sau 1 giây
        _checkMatch();
      }
    });
  }

  // KIỂM TRA 2 THẺ CÓ GIỐNG NHAU KHÔNG
  void _checkMatch() {
    final firstCard = _cards[_firstCardIndex!];
    final secondCard = _cards[_secondCardIndex!];
    
    // Delay 1 giây để người chơi nhìn thấy 2 thẻ
    Future.delayed(const Duration(milliseconds: 1000), () {
      // Kiểm tra widget còn tồn tại không
      if (!mounted) return;
      
      setState(() {
        if (firstCard.emoji == secondCard.emoji) {
          // MATCHED! Đánh dấu cả 2 thẻ
          firstCard.isMatched = true;
          secondCard.isMatched = true;
        } else {
          // Không khớp, úp lại
          firstCard.isFlipped = false;
          secondCard.isFlipped = false;
        }
        
        // Reset trạng thái
        _firstCardIndex = null;
        _secondCardIndex = null;
        _isProcessing = false;
        
        // Kiểm tra thắng
        _checkWin();
      });
    });
  }

  // KIỂM TRA THẮNG
  void _checkWin() {
    final allMatched = _cards.every((card) => card.isMatched);
    
    if (allMatched) {
      // Hiển thị dialog thắng
      showDialog(
        context: context,
        barrierDismissible: false,
        builder: (context) => AlertDialog(
          shape: RoundedRectangleBorder(
            borderRadius: BorderRadius.circular(20),
          ),
          title: const Text('🎉 Chúc mừng!', textAlign: TextAlign.center),
          content: Column(
            mainAxisSize: MainAxisSize.min,
            children: [
              const Text('🏆', style: TextStyle(fontSize: 60)),
              const SizedBox(height: 16),
              Text(
                'Hoàn thành trong $_moves lượt!',
                textAlign: TextAlign.center,
                style: const TextStyle(fontSize: 18),
              ),
            ],
          ),
          actions: [
            Center(
              child: ElevatedButton(
                onPressed: () {
                  Navigator.of(context).pop();
                  _initializeGame();
                },
                style: ElevatedButton.styleFrom(
                  backgroundColor: Colors.deepPurple,
                  foregroundColor: Colors.white,
                ),
                child: const Text('Chơi lại'),
              ),
            ),
          ],
        ),
      );
    }
  }
}
```

</details>

### Bước 3: Chạy thử game

Cập nhật `lib/main.dart`:

<details>
<summary>Code: `lib/main.dart`</summary>

```dart
import 'package:flutter/material.dart';
import 'screens/memory_game_screen.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Memory Card Game',
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(seedColor: Colors.deepPurple),
        useMaterial3: true,
      ),
      home: const MemoryGameScreen(),
    );
  }
}
```

</details>

**🎮 Chạy thử:** Lúc này game đã hoạt động! Bạn có thể lật thẻ và tìm cặp.

---

## Phần 3: Thêm Animation

### 3.1 AnimatedContainer là gì?

`AnimatedContainer` tự động animate khi các thuộc tính thay đổi:

<details>
<summary>Code: AnimatedContainer example</summary>

```dart
AnimatedContainer(
  duration: const Duration(milliseconds: 300),
  width: isExpanded ? 200 : 100,
  height: isExpanded ? 200 : 100,
  color: isExpanded ? Colors.blue : Colors.red,
  child: const Text('Tap me'),
)
```

</details>

Khi `isExpanded` thay đổi, Container sẽ animate mượt mà giữa 2 trạng thái.

### 3.2 Cập nhật `_buildCard` với Animation

Thay thế hàm `_buildCard`:

<details>
<summary>Code: `_buildCard` with Animation</summary>

```dart
Widget _buildCard(int index) {
  final card = _cards[index];
  final isVisible = card.isFlipped || card.isMatched;
  
  return GestureDetector(
    onTap: () => _onCardTap(index),
    child: AnimatedContainer(
      duration: const Duration(milliseconds: 300),
      curve: Curves.easeInOut,
      decoration: BoxDecoration(
        color: card.isMatched
            ? Colors.green.shade100
            : isVisible
                ? Colors.white
                : Colors.deepPurple,
        borderRadius: BorderRadius.circular(12),
        border: Border.all(
          color: card.isMatched ? Colors.green : Colors.deepPurple.shade300,
          width: card.isMatched ? 3 : 2,
        ),
        boxShadow: [
          BoxShadow(
            color: (card.isMatched ? Colors.green : Colors.deepPurple)
                .withOpacity(isVisible ? 0.3 : 0.1),
            blurRadius: isVisible ? 8 : 4,
            offset: const Offset(0, 2),
          ),
        ],
      ),
      child: Center(
        child: AnimatedSwitcher(
          duration: const Duration(milliseconds: 200),
          child: Text(
            isVisible ? card.emoji : '?',
            key: ValueKey(isVisible),
            style: TextStyle(
              fontSize: isVisible ? 36 : 32,
              color: isVisible ? null : Colors.white,
            ),
          ),
        ),
      ),
    ),
  );
}
```

</details>

**Giải thích:**
- `AnimatedContainer`: Animate màu nền, border, shadow
- `AnimatedSwitcher`: Animate chuyển đổi giữa `?` và emoji
- `curve: Curves.easeInOut`: Hiệu ứng mượt mà
- `key: ValueKey(isVisible)`: Giúp Flutter biết khi nào cần animate

### 3.3 Thêm hiệu ứng scale khi matched

Thêm animation scale khi tìm được cặp:

<details>
<summary>Code: `_buildCard` with Scale Animation</summary>

```dart
Widget _buildCard(int index) {
  final card = _cards[index];
  final isVisible = card.isFlipped || card.isMatched;
  
  return GestureDetector(
    onTap: () => _onCardTap(index),
    child: AnimatedScale(
      scale: card.isMatched ? 1.05 : 1.0,
      duration: const Duration(milliseconds: 200),
      child: AnimatedContainer(
        duration: const Duration(milliseconds: 300),
        curve: Curves.easeInOut,
        decoration: BoxDecoration(
          color: card.isMatched
              ? Colors.green.shade100
              : isVisible
                  ? Colors.white
                  : Colors.deepPurple,
          borderRadius: BorderRadius.circular(12),
          border: Border.all(
            color: card.isMatched ? Colors.green : Colors.deepPurple.shade300,
            width: card.isMatched ? 3 : 2,
          ),
          boxShadow: [
            BoxShadow(
              color: (card.isMatched ? Colors.green : Colors.deepPurple)
                  .withOpacity(isVisible ? 0.3 : 0.1),
              blurRadius: isVisible ? 8 : 4,
              offset: const Offset(0, 2),
            ),
          ],
        ),
        child: Center(
          child: AnimatedSwitcher(
            duration: const Duration(milliseconds: 200),
            child: Text(
              isVisible ? card.emoji : '?',
              key: ValueKey(isVisible),
              style: TextStyle(
                fontSize: isVisible ? 36 : 32,
                color: isVisible ? null : Colors.white,
              ),
            ),
          ),
        ),
      ),
    ),
  );
}
```

</details>

---

## Phần 4: Thêm Âm thanh

### 4.1 Cài đặt package `audioplayers`

Thêm vào `pubspec.yaml`:

<details>
<summary>Code: `pubspec.yaml` (Audio dependencies)</summary>

```yaml
dependencies:
  flutter:
    sdk: flutter
  audioplayers: ^5.2.1
```

</details>

Chạy lệnh:

<details>
<summary>Command: Install dependencies</summary>

```bash
flutter pub get
```

</details>

### 4.2 Chuẩn bị file âm thanh

Tạo thư mục `assets/sounds/` và thêm các file:
- `flip.mp3` - Âm thanh lật thẻ
- `match.mp3` - Âm thanh tìm được cặp
- `win.mp3` - Âm thanh chiến thắng

Khai báo trong `pubspec.yaml`:

<details>
<summary>Code: `pubspec.yaml` (Assets)</summary>

```yaml
flutter:
  assets:
    - assets/sounds/
```

</details>

### 4.3 Tích hợp âm thanh vào game

Cập nhật `memory_game_screen.dart`:

<details>
<summary>Code: `MemoryGameScreen` with Audio</summary>

```dart
import 'package:flutter/material.dart';
import 'package:audioplayers/audioplayers.dart';
import '../models/card_model.dart';

class MemoryGameScreen extends StatefulWidget {
  const MemoryGameScreen({super.key});

  @override
  State<MemoryGameScreen> createState() => _MemoryGameScreenState();
}

class _MemoryGameScreenState extends State<MemoryGameScreen> {
  // Danh sách emoji
  final List<String> _emojis = ['🎯', '🌟', '🎨', '🎭', '🎪', '🎢', '🎡', '🎠'];
  
  // State của game
  List<CardModel> _cards = [];
  int? _firstCardIndex;
  int? _secondCardIndex;
  int _moves = 0;
  bool _isProcessing = false;

  // THÊM MỚI: Audio players
  final AudioPlayer _flipPlayer = AudioPlayer();
  final AudioPlayer _matchPlayer = AudioPlayer();
  final AudioPlayer _winPlayer = AudioPlayer();

  @override
  void initState() {
    super.initState();
    _initializeGame();
  }

  @override
  void dispose() {
    // QUAN TRỌNG: Giải phóng audio players
    _flipPlayer.dispose();
    _matchPlayer.dispose();
    _winPlayer.dispose();
    super.dispose();
  }

  // Phát âm thanh lật thẻ
  Future<void> _playFlipSound() async {
    await _flipPlayer.play(AssetSource('sounds/flip.mp3'));
  }

  // Phát âm thanh matched
  Future<void> _playMatchSound() async {
    await _matchPlayer.play(AssetSource('sounds/match.mp3'));
  }

  // Phát âm thanh chiến thắng
  Future<void> _playWinSound() async {
    await _winPlayer.play(AssetSource('sounds/win.mp3'));
  }

  void _initializeGame() {
    List<CardModel> cards = [];
    
    for (int i = 0; i < _emojis.length; i++) {
      cards.add(CardModel(id: i * 2, emoji: _emojis[i]));
      cards.add(CardModel(id: i * 2 + 1, emoji: _emojis[i]));
    }
    
    cards.shuffle();
    
    setState(() {
      _cards = cards;
      _firstCardIndex = null;
      _secondCardIndex = null;
      _moves = 0;
      _isProcessing = false;
    });
  }

  void _onCardTap(int index) {
    if (_isProcessing) return;
    if (_cards[index].isFlipped) return;
    if (_cards[index].isMatched) return;
    
    // THÊM: Phát âm thanh lật thẻ
    _playFlipSound();
    
    setState(() {
      _cards[index].isFlipped = true;
      
      if (_firstCardIndex == null) {
        _firstCardIndex = index;
      } else {
        _secondCardIndex = index;
        _moves++;
        _isProcessing = true;
        _checkMatch();
      }
    });
  }

  void _checkMatch() {
    final firstCard = _cards[_firstCardIndex!];
    final secondCard = _cards[_secondCardIndex!];
    
    Future.delayed(const Duration(milliseconds: 800), () {
      if (!mounted) return;
      
      setState(() {
        if (firstCard.emoji == secondCard.emoji) {
          firstCard.isMatched = true;
          secondCard.isMatched = true;
          
          // THÊM: Phát âm thanh matched
          _playMatchSound();
        } else {
          firstCard.isFlipped = false;
          secondCard.isFlipped = false;
        }
        
        _firstCardIndex = null;
        _secondCardIndex = null;
        _isProcessing = false;
        
        _checkWin();
      });
    });
  }

  void _checkWin() {
    final allMatched = _cards.every((card) => card.isMatched);
    
    if (allMatched) {
      // THÊM: Phát âm thanh chiến thắng
      _playWinSound();
      
      showDialog(
        context: context,
        barrierDismissible: false,
        builder: (context) => AlertDialog(
          shape: RoundedRectangleBorder(
            borderRadius: BorderRadius.circular(20),
          ),
          title: const Text('🎉 Chúc mừng!', textAlign: TextAlign.center),
          content: Column(
            mainAxisSize: MainAxisSize.min,
            children: [
              const Text('🏆', style: TextStyle(fontSize: 60)),
              const SizedBox(height: 16),
              Text(
                'Hoàn thành trong $_moves lượt!',
                textAlign: TextAlign.center,
                style: const TextStyle(fontSize: 18),
              ),
            ],
          ),
          actions: [
            Center(
              child: ElevatedButton(
                onPressed: () {
                  Navigator.of(context).pop();
                  _initializeGame();
                },
                style: ElevatedButton.styleFrom(
                  backgroundColor: Colors.deepPurple,
                  foregroundColor: Colors.white,
                ),
                child: const Text('Chơi lại'),
              ),
            ),
          ],
        ),
      );
    }
  }

  // ... phần build giữ nguyên ...
}
```

</details>

### 4.4 Sử dụng âm thanh miễn phí (nếu không có file)

Nếu chưa có file âm thanh, bạn có thể sử dụng âm thanh từ URL:

<details>
<summary>Code: UrlSource example</summary>

```dart
// Thay vì AssetSource, dùng UrlSource
await _flipPlayer.play(UrlSource('https://example.com/flip.mp3'));
```

</details>

Hoặc tạo âm thanh đơn giản với `flutter_beep` package.

---

## Phần 5: Code hoàn chỉnh

Đây là code đầy đủ cho file `lib/screens/memory_game_screen.dart`:

<details>
<summary>Code: `MemoryGameScreen` Full Implementation</summary>

```dart
import 'package:flutter/material.dart';
// import 'package:audioplayers/audioplayers.dart'; // Uncomment khi có file âm thanh

class CardModel {
  final int id;
  final String emoji;
  bool isFlipped;
  bool isMatched;

  CardModel({
    required this.id,
    required this.emoji,
    this.isFlipped = false,
    this.isMatched = false,
  });
}

class MemoryGameScreen extends StatefulWidget {
  const MemoryGameScreen({super.key});

  @override
  State<MemoryGameScreen> createState() => _MemoryGameScreenState();
}

class _MemoryGameScreenState extends State<MemoryGameScreen> {
  final List<String> _emojis = ['🎯', '🌟', '🎨', '🎭', '🎪', '🎢', '🎡', '🎠'];
  
  List<CardModel> _cards = [];
  int? _firstCardIndex;
  int? _secondCardIndex;
  int _moves = 0;
  bool _isProcessing = false;

  // Uncomment khi có file âm thanh:
  // final AudioPlayer _flipPlayer = AudioPlayer();
  // final AudioPlayer _matchPlayer = AudioPlayer();
  // final AudioPlayer _winPlayer = AudioPlayer();

  @override
  void initState() {
    super.initState();
    _initializeGame();
  }

  @override
  void dispose() {
    // Uncomment khi có audio players:
    // _flipPlayer.dispose();
    // _matchPlayer.dispose();
    // _winPlayer.dispose();
    super.dispose();
  }

  void _initializeGame() {
    List<CardModel> cards = [];
    
    for (int i = 0; i < _emojis.length; i++) {
      cards.add(CardModel(id: i * 2, emoji: _emojis[i]));
      cards.add(CardModel(id: i * 2 + 1, emoji: _emojis[i]));
    }
    
    cards.shuffle();
    
    setState(() {
      _cards = cards;
      _firstCardIndex = null;
      _secondCardIndex = null;
      _moves = 0;
      _isProcessing = false;
    });
  }

  void _onCardTap(int index) {
    if (_isProcessing) return;
    if (_cards[index].isFlipped) return;
    if (_cards[index].isMatched) return;
    
    // Phát âm thanh lật thẻ (uncomment khi có audio):
    // _flipPlayer.play(AssetSource('sounds/flip.mp3'));
    
    setState(() {
      _cards[index].isFlipped = true;
      
      if (_firstCardIndex == null) {
        _firstCardIndex = index;
      } else {
        _secondCardIndex = index;
        _moves++;
        _isProcessing = true;
        _checkMatch();
      }
    });
  }

  void _checkMatch() {
    final firstCard = _cards[_firstCardIndex!];
    final secondCard = _cards[_secondCardIndex!];
    
    Future.delayed(const Duration(milliseconds: 800), () {
      if (!mounted) return;
      
      setState(() {
        if (firstCard.emoji == secondCard.emoji) {
          firstCard.isMatched = true;
          secondCard.isMatched = true;
          // Phát âm thanh matched:
          // _matchPlayer.play(AssetSource('sounds/match.mp3'));
        } else {
          firstCard.isFlipped = false;
          secondCard.isFlipped = false;
        }
        
        _firstCardIndex = null;
        _secondCardIndex = null;
        _isProcessing = false;
        
        _checkWin();
      });
    });
  }

  void _checkWin() {
    final allMatched = _cards.every((card) => card.isMatched);
    
    if (allMatched) {
      // Phát âm thanh chiến thắng:
      // _winPlayer.play(AssetSource('sounds/win.mp3'));
      
      showDialog(
        context: context,
        barrierDismissible: false,
        builder: (context) => AlertDialog(
          shape: RoundedRectangleBorder(
            borderRadius: BorderRadius.circular(20),
          ),
          title: const Text('🎉 Chúc mừng!', textAlign: TextAlign.center),
          content: Column(
            mainAxisSize: MainAxisSize.min,
            children: [
              const Text('🏆', style: TextStyle(fontSize: 60)),
              const SizedBox(height: 16),
              Text(
                'Hoàn thành trong $_moves lượt!',
                textAlign: TextAlign.center,
                style: const TextStyle(fontSize: 18),
              ),
              const SizedBox(height: 8),
              Text(
                _getPerformanceMessage(),
                style: TextStyle(
                  color: Colors.grey.shade600,
                  fontSize: 14,
                ),
              ),
            ],
          ),
          actions: [
            Center(
              child: ElevatedButton(
                onPressed: () {
                  Navigator.of(context).pop();
                  _initializeGame();
                },
                style: ElevatedButton.styleFrom(
                  backgroundColor: Colors.deepPurple,
                  foregroundColor: Colors.white,
                ),
                child: const Text('Chơi lại'),
              ),
            ),
          ],
        ),
      );
    }
  }

  String _getPerformanceMessage() {
    if (_moves <= 10) return '🌟 Xuất sắc! Trí nhớ siêu phàm!';
    if (_moves <= 15) return '👏 Tuyệt vời! Bạn rất giỏi!';
    if (_moves <= 20) return '👍 Khá tốt! Tiếp tục cố gắng!';
    return '💪 Cố gắng lên! Lần sau sẽ tốt hơn!';
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.grey.shade100,
      appBar: AppBar(
        title: const Text('Memory Card Game'),
        centerTitle: true,
        backgroundColor: Colors.deepPurple,
        foregroundColor: Colors.white,
        elevation: 0,
      ),
      body: SafeArea(
        child: Padding(
          padding: const EdgeInsets.all(16.0),
          child: Column(
            children: [
              _buildScoreBoard(),
              const SizedBox(height: 24),
              Expanded(child: _buildCardGrid()),
              const SizedBox(height: 24),
              _buildRestartButton(),
              const SizedBox(height: 16),
            ],
          ),
        ),
      ),
    );
  }

  Widget _buildScoreBoard() {
    final matchedPairs = _cards.where((c) => c.isMatched).length ~/ 2;
    
    return Container(
      padding: const EdgeInsets.symmetric(vertical: 16, horizontal: 24),
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.circular(20),
        boxShadow: [
          BoxShadow(
            color: Colors.deepPurple.withOpacity(0.1),
            blurRadius: 10,
            offset: const Offset(0, 4),
          ),
        ],
      ),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceAround,
        children: [
          Column(
            children: [
              const Icon(Icons.touch_app, color: Colors.deepPurple, size: 28),
              const SizedBox(height: 4),
              Text(
                '$_moves',
                style: const TextStyle(
                  fontSize: 24,
                  fontWeight: FontWeight.bold,
                  color: Colors.deepPurple,
                ),
              ),
              const Text('Lượt', style: TextStyle(color: Colors.grey)),
            ],
          ),
          Container(
            width: 1,
            height: 50,
            color: Colors.grey.shade300,
          ),
          Column(
            children: [
              const Icon(Icons.check_circle, color: Colors.green, size: 28),
              const SizedBox(height: 4),
              Text(
                '$matchedPairs / 8',
                style: const TextStyle(
                  fontSize: 24,
                  fontWeight: FontWeight.bold,
                  color: Colors.green,
                ),
              ),
              const Text('Cặp', style: TextStyle(color: Colors.grey)),
            ],
          ),
        ],
      ),
    );
  }

  Widget _buildCardGrid() {
    return Center(
      child: AspectRatio(
        aspectRatio: 1.0,
        child: GridView.builder(
          physics: const NeverScrollableScrollPhysics(),
          gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
            crossAxisCount: 4,
            mainAxisSpacing: 8,
            crossAxisSpacing: 8,
            childAspectRatio: 1.0,
          ),
          itemCount: _cards.length,
          itemBuilder: (context, index) => _buildCard(index),
        ),
      ),
    );
  }

  Widget _buildCard(int index) {
    final card = _cards[index];
    final isVisible = card.isFlipped || card.isMatched;
    
    return GestureDetector(
      onTap: () => _onCardTap(index),
      child: AnimatedScale(
        scale: card.isMatched ? 1.05 : 1.0,
        duration: const Duration(milliseconds: 200),
        child: AnimatedContainer(
          duration: const Duration(milliseconds: 300),
          curve: Curves.easeInOut,
          decoration: BoxDecoration(
            color: card.isMatched
                ? Colors.green.shade100
                : isVisible
                    ? Colors.white
                    : Colors.deepPurple,
            borderRadius: BorderRadius.circular(12),
            border: Border.all(
              color: card.isMatched ? Colors.green : Colors.deepPurple.shade300,
              width: card.isMatched ? 3 : 2,
            ),
            boxShadow: [
              BoxShadow(
                color: (card.isMatched ? Colors.green : Colors.deepPurple)
                    .withOpacity(isVisible ? 0.3 : 0.1),
                blurRadius: isVisible ? 8 : 4,
                offset: const Offset(0, 2),
              ),
            ],
          ),
          child: Center(
            child: AnimatedSwitcher(
              duration: const Duration(milliseconds: 200),
              child: Text(
                isVisible ? card.emoji : '?',
                key: ValueKey(isVisible),
                style: TextStyle(
                  fontSize: isVisible ? 36 : 32,
                  color: isVisible ? null : Colors.white,
                ),
              ),
            ),
          ),
        ),
      ),
    );
  }

  Widget _buildRestartButton() {
    return ElevatedButton.icon(
      onPressed: _initializeGame,
      icon: const Icon(Icons.refresh),
      label: const Text('Chơi lại'),
      style: ElevatedButton.styleFrom(
        backgroundColor: Colors.deepPurple,
        foregroundColor: Colors.white,
        minimumSize: const Size(200, 50),
        shape: RoundedRectangleBorder(
          borderRadius: BorderRadius.circular(25),
        ),
      ),
    );
  }
}
```

</details>

---

## Phần 6: Tổng kết

### Kiến thức đã học

| Chủ đề | Kiến thức |
|--------|-----------|
| Game Logic | Quản lý state phức tạp, so sánh 2 item |
| Xử lý bất đồng bộ | `Future.delayed`, `mounted` check |
| Animation | `AnimatedContainer`, `AnimatedScale`, `AnimatedSwitcher` |
| Sound | Package `audioplayers`, `AssetSource` |
| UX | Dialog thắng, hiển thị điểm, feedback âm thanh |

### Các hàm quan trọng

| Hàm | Chức năng |
|-----|-----------|
| `_initializeGame()` | Reset game, xáo trộn thẻ |
| `_onCardTap(index)` | Xử lý khi người chơi tap thẻ |
| `_checkMatch()` | So sánh 2 thẻ đã lật |
| `_checkWin()` | Kiểm tra thắng game |

### Checklist hoàn thành

- [ ] Hiểu logic game Memory Card
- [ ] Tạo được Model cho thẻ bài
- [ ] Xử lý được tap và so sánh 2 thẻ
- [ ] Thêm animation với `AnimatedContainer`
- [ ] Tích hợp âm thanh (tùy chọn)
- [ ] Game hoạt động đầy đủ!

---

## Bài tập về nhà

### Bài tập 1: Thêm bộ đếm thời gian ⏱️

Thêm timer đếm ngược từ 60 giây. Hết giờ → Game Over.

**Gợi ý:**
<details>
<summary>Answer: Exercise 1 - Timer</summary>

```dart
import 'dart:async';

Timer? _timer;
int _timeLeft = 60;

void _startTimer() {
  _timer = Timer.periodic(const Duration(seconds: 1), (timer) {
    if (_timeLeft > 0) {
      setState(() => _timeLeft--);
    } else {
      timer.cancel();
      _showGameOver();
    }
  });
}
```

</details>

### Bài tập 2: Thêm màn chơi 🎮

- Level 1: Grid 3x4 (6 cặp) - 45 giây
- Level 2: Grid 4x4 (8 cặp) - 60 giây  
- Level 3: Grid 4x5 (10 cặp) - 90 giây

### Bài tập 3: Lưu kỷ lục 🏆

Sử dụng `shared_preferences` để lưu best score (số lượt ít nhất).

---

## Tài liệu tham khảo

- [AnimatedContainer - Flutter docs](https://api.flutter.dev/flutter/widgets/AnimatedContainer-class.html)
- [audioplayers package](https://pub.dev/packages/audioplayers)
- [Implicit Animations - Flutter docs](https://docs.flutter.dev/ui/animations/implicit-animations)

---

**Bài tiếp theo:** Bài 16 - Navigation và Multi-screen App 🚀
