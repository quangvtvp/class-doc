---
sidebar_position: 14
title: "Bài 14: ListView & GridView"
description: Học cách sử dụng ListView và GridView để hiển thị danh sách trong Flutter
---

# Bài 14: ListView & GridView

Chào các em! Sau khi đã thành thạo StatefulWidget và quản lý trạng thái, hôm nay chúng ta sẽ học về hai widget quan trọng để hiển thị danh sách: **ListView** và **GridView**.

---

## Mục tiêu

- Hiểu sự khác nhau giữa `ListView` và `GridView`
- Biết khi nào dùng `ListView.builder` vs `ListView`
- Xử lý sự kiện tap trên item trong list/grid
- Hoàn thành 3 mini projects thực hành

---

## Phần 1: ListView

### 1.1 ListView là gì?

`ListView` là widget hiển thị danh sách các item có thể cuộn (scroll). Đây là widget bạn sẽ dùng rất nhiều trong các ứng dụng thực tế như: danh sách chat, feed mạng xã hội, danh sách sản phẩm...

### 1.2 So sánh ListView và Column

| Đặc điểm | Column | ListView |
|----------|--------|----------|
| Cuộn được | ❌ Không (cần wrap trong SingleChildScrollView) | ✅ Có sẵn |
| Hiệu năng | Render tất cả item cùng lúc | Có thể lazy load |
| Dùng khi | Ít item, không cần cuộn | Nhiều item, cần cuộn |

### 1.3 Cách tạo ListView

#### Cách 1: ListView với children (danh sách nhỏ)

<details>
<summary>Code: ListView example</summary>

```dart
ListView(
  children: [
    ListTile(title: Text('Item 1')),
    ListTile(title: Text('Item 2')),
    ListTile(title: Text('Item 3')),
  ],
)
```

</details>

**Nhược điểm:** Tất cả item được tạo cùng lúc, tốn bộ nhớ nếu danh sách dài.

#### Cách 2: ListView.builder (danh sách lớn - KHUYÊN DÙNG)

<details>
<summary>Code: ListView.builder example</summary>

```dart
ListView.builder(
  itemCount: 100,  // Số lượng item
  itemBuilder: (context, index) {
    // Chỉ được gọi khi item cần hiển thị
    return ListTile(
      title: Text('Item $index'),
    );
  },
)
```

</details>

**Ưu điểm:** Lazy loading - chỉ tạo item khi cần, tiết kiệm bộ nhớ.

#### Cách 3: ListView.separated (có divider)

<details>
<summary>Code: ListView.separated example</summary>

```dart
ListView.separated(
  itemCount: 10,
  itemBuilder: (context, index) {
    return ListTile(title: Text('Item $index'));
  },
  separatorBuilder: (context, index) {
    return const Divider();  // Đường kẻ giữa các item
  },
)
```

</details>

### 1.4 Thuộc tính quan trọng

| Thuộc tính | Mô tả | Giá trị mặc định |
|------------|-------|------------------|
| `scrollDirection` | Hướng cuộn | `Axis.vertical` |
| `padding` | Khoảng cách xung quanh | `null` |
| `reverse` | Đảo ngược thứ tự | `false` |

### 1.5 Ví dụ: ListView cuộn ngang

<details>
<summary>Code: Horizontal ListView example</summary>

```dart
SizedBox(
  height: 120,  // Bắt buộc có height khi cuộn ngang
  child: ListView.builder(
    scrollDirection: Axis.horizontal,
    itemCount: 10,
    itemBuilder: (context, index) {
      return Container(
        width: 100,
        margin: const EdgeInsets.all(8),
        decoration: BoxDecoration(
          color: Colors.blue.shade100,
          borderRadius: BorderRadius.circular(12),
        ),
        child: Center(child: Text('Card $index')),
      );
    },
  ),
)
```

</details>

---

## Phần 2: GridView

### 2.1 GridView là gì?

`GridView` hiển thị các item theo dạng lưới 2 chiều (hàng và cột). Thường dùng cho: gallery ảnh, bàn cờ game, grid sản phẩm...

### 2.2 Các cách tạo GridView

#### Cách 1: GridView.count (cố định số cột)

<details>
<summary>Code: GridView.count example</summary>

```dart
GridView.count(
  crossAxisCount: 3,  // 3 cột
  children: [
    Container(color: Colors.red),
    Container(color: Colors.green),
    Container(color: Colors.blue),
    Container(color: Colors.yellow),
    Container(color: Colors.purple),
    Container(color: Colors.orange),
  ],
)
```

</details>

#### Cách 2: GridView.builder (lazy loading - KHUYÊN DÙNG)

<details>
<summary>Code: GridView.builder example</summary>

```dart
GridView.builder(
  gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
    crossAxisCount: 4,        // 4 cột
    mainAxisSpacing: 8,       // Khoảng cách dọc giữa các item
    crossAxisSpacing: 8,      // Khoảng cách ngang giữa các item
    childAspectRatio: 1.0,    // Tỷ lệ width/height của item
  ),
  itemCount: 16,
  itemBuilder: (context, index) {
    return Container(
      decoration: BoxDecoration(
        color: Colors.blue.shade200,
        borderRadius: BorderRadius.circular(8),
      ),
      child: Center(child: Text('$index')),
    );
  },
)
```

</details>

### 2.3 Các thuộc tính của SliverGridDelegate

| Thuộc tính | Mô tả |
|------------|-------|
| `crossAxisCount` | Số cột (bắt buộc) |
| `mainAxisSpacing` | Khoảng cách theo trục chính (dọc) |
| `crossAxisSpacing` | Khoảng cách theo trục phụ (ngang) |
| `childAspectRatio` | Tỷ lệ width/height (1.0 = vuông) |

---

## Phần 3: Xử lý sự kiện Tap

### 3.1 GestureDetector

`GestureDetector` bọc quanh widget để bắt các sự kiện chạm.

<details>
<summary>Code: GestureDetector example</summary>

```dart
GestureDetector(
  onTap: () {
    print('Đã tap!');
  },
  child: Container(
    width: 100,
    height: 100,
    color: Colors.blue,
    child: const Center(child: Text('Tap me')),
  ),
)
```

</details>

### 3.2 Truyền index vào callback

Khi dùng trong ListView/GridView, ta cần biết item nào được tap:

<details>
<summary>Code: GridView with Tap example</summary>

```dart
GridView.builder(
  itemCount: 9,
  gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
    crossAxisCount: 3,
  ),
  itemBuilder: (context, index) {
    return GestureDetector(
      onTap: () {
        // Biết được item nào được tap nhờ index
        print('Đã tap item $index');
      },
      child: Container(
        margin: const EdgeInsets.all(4),
        color: Colors.blue,
        child: Center(child: Text('$index')),
      ),
    );
  },
)
```

</details>

---

## Phần 4: Mini Projects

### 🎯 Mini Project 1: Danh sách có thể chọn

**Mục tiêu:** Tạo danh sách item, tap để chọn/bỏ chọn.

<details>
<summary>Code: SelectableListScreen</summary>

```dart
import 'package:flutter/material.dart';

class SelectableListScreen extends StatefulWidget {
  const SelectableListScreen({super.key});

  @override
  State<SelectableListScreen> createState() => _SelectableListScreenState();
}

class _SelectableListScreenState extends State<SelectableListScreen> {
  // Lưu các index đã được chọn
  final Set<int> _selectedItems = {};

  void _toggleItem(int index) {
    setState(() {
      if (_selectedItems.contains(index)) {
        _selectedItems.remove(index);
      } else {
        _selectedItems.add(index);
      }
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Đã chọn: ${_selectedItems.length} item'),
        backgroundColor: Colors.teal,
        foregroundColor: Colors.white,
      ),
      body: ListView.builder(
        itemCount: 20,
        itemBuilder: (context, index) {
          final isSelected = _selectedItems.contains(index);
          
          return ListTile(
            leading: Icon(
              isSelected ? Icons.check_circle : Icons.circle_outlined,
              color: isSelected ? Colors.teal : Colors.grey,
            ),
            title: Text('Item ${index + 1}'),
            subtitle: Text('Mô tả cho item ${index + 1}'),
            tileColor: isSelected ? Colors.teal.shade50 : null,
            onTap: () => _toggleItem(index),
          );
        },
      ),
    );
  }
}
```

</details>

**Kiến thức áp dụng:**
- `Set<int>` để lưu các index (không trùng lặp)
- `contains()` kiểm tra xem đã chọn chưa
- Thay đổi màu sắc dựa trên trạng thái

---

### 🎮 Mini Project 2: Grid Card Preview (Chuẩn bị cho Game)

**Mục tiêu:** Tạo grid 4x4 hiển thị các emoji - làm tiền đề cho game Memory Card ở bài sau.

Chúng ta sẽ làm theo 2 bước:

#### Bước 1: Hiển thị Grid các thẻ bài (StatelessWidget)

Đầu tiên, tạo giao diện grid đơn giản hiển thị tất cả các thẻ:

<details>
<summary>Code: CardGridStep1</summary>

```dart
import 'package:flutter/material.dart';

class CardGridStep1 extends StatelessWidget {
  const CardGridStep1({super.key});

  // 8 cặp emoji (16 thẻ)
  final List<String> emojis = const [
    '🎯', '🎯', '🌟', '🌟', 
    '🎨', '🎨', '🎭', '🎭',
    '🎪', '🎪', '🎢', '🎢', 
    '🎡', '🎡', '🎠', '🎠',
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.grey.shade100,
      appBar: AppBar(
        title: const Text('Card Grid - Step 1'),
        centerTitle: true,
        backgroundColor: Colors.deepPurple,
        foregroundColor: Colors.white,
      ),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: GridView.builder(
          gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
            crossAxisCount: 4,          // 4 cột
            mainAxisSpacing: 8,         // Khoảng cách dọc
            crossAxisSpacing: 8,        // Khoảng cách ngang
            childAspectRatio: 1.0,      // Thẻ vuông
          ),
          itemCount: emojis.length,
          itemBuilder: (context, index) {
            return Container(
              decoration: BoxDecoration(
                color: Colors.white,
                borderRadius: BorderRadius.circular(12),
                border: Border.all(
                  color: Colors.deepPurple.shade300,
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
                  emojis[index],
                  style: const TextStyle(fontSize: 32),
                ),
              ),
            );
          },
        ),
      ),
    );
  }
}
```

</details>

**Kết quả:** Grid 4x4 hiển thị tất cả emoji. Chưa có tương tác.

---

#### Bước 2: Thêm action lật thẻ và nút Reset (StatefulWidget)

Bây giờ chuyển sang `StatefulWidget` để thêm tính năng lật thẻ:

<details>
<summary>Code: CardGridStep2</summary>

```dart
import 'package:flutter/material.dart';

class CardGridStep2 extends StatefulWidget {
  const CardGridStep2({super.key});

  @override
  State<CardGridStep2> createState() => _CardGridStep2State();
}

class _CardGridStep2State extends State<CardGridStep2> {
  // 8 cặp emoji (16 thẻ)
  final List<String> _emojis = [
    '🎯', '🎯', '🌟', '🌟', 
    '🎨', '🎨', '🎭', '🎭',
    '🎪', '🎪', '🎢', '🎢', 
    '🎡', '🎡', '🎠', '🎠',
  ];

  // Lưu các thẻ đã được "lật" (dùng Set để không trùng lặp)
  final Set<int> _flippedCards = {};

  // Xử lý khi tap vào thẻ
  void _onCardTap(int index) {
    setState(() {
      if (_flippedCards.contains(index)) {
        // Nếu đã lật → úp lại
        _flippedCards.remove(index);
      } else {
        // Nếu chưa lật → lật lên
        _flippedCards.add(index);
      }
    });
  }

  // Reset tất cả thẻ về trạng thái úp
  void _resetAllCards() {
    setState(() {
      _flippedCards.clear();
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.grey.shade100,
      appBar: AppBar(
        title: const Text('Card Grid - Step 2'),
        centerTitle: true,
        backgroundColor: Colors.deepPurple,
        foregroundColor: Colors.white,
        actions: [
          // Nút Reset
          IconButton(
            icon: const Icon(Icons.refresh),
            tooltip: 'Reset tất cả',
            onPressed: _resetAllCards,
          ),
        ],
      ),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          children: [
            // Hướng dẫn
            Container(
              padding: const EdgeInsets.all(12),
              decoration: BoxDecoration(
                color: Colors.deepPurple.shade50,
                borderRadius: BorderRadius.circular(12),
              ),
              child: const Row(
                children: [
                  Icon(Icons.info_outline, color: Colors.deepPurple),
                  SizedBox(width: 8),
                  Expanded(
                    child: Text(
                      'Tap vào thẻ để lật. Đây là preview cho game Memory Card!',
                      style: TextStyle(color: Colors.deepPurple),
                    ),
                  ),
                ],
              ),
            ),
            
            const SizedBox(height: 16),
            
            // Số thẻ đã lật
            Text(
              'Đã lật: ${_flippedCards.length} / 16 thẻ',
              style: const TextStyle(
                fontSize: 16,
                fontWeight: FontWeight.bold,
              ),
            ),
            
            const SizedBox(height: 16),
            
            // Grid thẻ bài
            Expanded(
              child: GridView.builder(
                gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
                  crossAxisCount: 4,
                  mainAxisSpacing: 8,
                  crossAxisSpacing: 8,
                  childAspectRatio: 1.0,
                ),
                itemCount: _emojis.length,
                itemBuilder: (context, index) {
                  final isFlipped = _flippedCards.contains(index);
                  
                  return GestureDetector(
                    onTap: () => _onCardTap(index),
                    child: Container(
                      decoration: BoxDecoration(
                        // Màu thay đổi theo trạng thái
                        color: isFlipped ? Colors.white : Colors.deepPurple,
                        borderRadius: BorderRadius.circular(12),
                        border: Border.all(
                          color: Colors.deepPurple.shade300,
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
                          // Hiển thị emoji hoặc dấu ?
                          isFlipped ? _emojis[index] : '?',
                          style: TextStyle(
                            fontSize: 32,
                            color: isFlipped ? null : Colors.white,
                          ),
                        ),
                      ),
                    ),
                  );
                },
              ),
            ),
          ],
        ),
      ),
    );
  }
}
```

</details>

**Kiến thức áp dụng:**
- `GridView.builder` với 4 cột
- `Set<int>` để lưu trạng thái các thẻ đã lật
- `GestureDetector` + `onTap` để xử lý tap
- `setState()` để cập nhật giao diện
- Thay đổi màu sắc dựa trên trạng thái `isFlipped`

**📝 Ghi chú:** Ở bài 15, chúng ta sẽ phát triển thêm:
- Logic so sánh 2 thẻ
- Đếm số lượt
- Âm thanh khi lật thẻ
- Animation lật thẻ

---

### 🎴 Mini Project 3: English Flashcard (Horizontal List)

**Mục tiêu:** Tạo danh sách flashcard tiếng Anh cuộn ngang với UI đẹp mắt.

<details>
<summary>Code: FlashcardScreen</summary>

```dart
import 'package:flutter/material.dart';

// Model cho Flashcard
class Flashcard {
  final String word;
  final String pronunciation;
  final String meaning;
  final String example;
  final Color color;

  const Flashcard({
    required this.word,
    required this.pronunciation,
    required this.meaning,
    required this.example,
    required this.color,
  });
}

class FlashcardScreen extends StatelessWidget {
  const FlashcardScreen({super.key});

  // Danh sách flashcard mẫu
  static const List<Flashcard> flashcards = [
    Flashcard(
      word: 'Serendipity',
      pronunciation: '/ˌserənˈdɪpɪti/',
      meaning: 'Sự tình cờ may mắn',
      example: 'Finding that book was pure serendipity.',
      color: Color(0xFF6366F1),
    ),
    Flashcard(
      word: 'Ephemeral',
      pronunciation: '/ɪˈfemərəl/',
      meaning: 'Phù du, ngắn ngủi',
      example: 'The ephemeral beauty of cherry blossoms.',
      color: Color(0xFFEC4899),
    ),
    Flashcard(
      word: 'Eloquent',
      pronunciation: '/ˈeləkwənt/',
      meaning: 'Hùng biện, lưu loát',
      example: 'She gave an eloquent speech.',
      color: Color(0xFF14B8A6),
    ),
    Flashcard(
      word: 'Resilience',
      pronunciation: '/rɪˈzɪliəns/',
      meaning: 'Sự kiên cường, bền bỉ',
      example: 'Her resilience helped her overcome challenges.',
      color: Color(0xFFF59E0B),
    ),
    Flashcard(
      word: 'Wanderlust',
      pronunciation: '/ˈwɒndəlʌst/',
      meaning: 'Đam mê du lịch, khám phá',
      example: 'His wanderlust took him around the world.',
      color: Color(0xFF8B5CF6),
    ),
    Flashcard(
      word: 'Euphoria',
      pronunciation: '/juːˈfɔːriə/',
      meaning: 'Trạng thái vô cùng hạnh phúc',
      example: 'She felt euphoria after winning the race.',
      color: Color(0xFFEF4444),
    ),
    Flashcard(
      word: 'Luminous',
      pronunciation: '/ˈluːmɪnəs/',
      meaning: 'Rực rỡ, tỏa sáng',
      example: 'The luminous moon lit up the night sky.',
      color: Color(0xFF0EA5E9),
    ),
    Flashcard(
      word: 'Tranquil',
      pronunciation: '/ˈtræŋkwɪl/',
      meaning: 'Yên bình, thanh thản',
      example: 'We enjoyed the tranquil atmosphere of the lake.',
      color: Color(0xFF22C55E),
    ),
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color(0xFFF8FAFC),
      appBar: AppBar(
        title: const Text('English Flashcards'),
        centerTitle: true,
        backgroundColor: Colors.white,
        foregroundColor: Colors.black87,
        elevation: 0,
        actions: [
          Container(
            margin: const EdgeInsets.only(right: 16),
            padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 6),
            decoration: BoxDecoration(
              color: Colors.blue.shade50,
              borderRadius: BorderRadius.circular(20),
            ),
            child: Row(
              children: [
                Icon(Icons.style, size: 16, color: Colors.blue.shade700),
                const SizedBox(width: 4),
                Text(
                  '${flashcards.length} cards',
                  style: TextStyle(
                    color: Colors.blue.shade700,
                    fontWeight: FontWeight.w600,
                  ),
                ),
              ],
            ),
          ),
        ],
      ),
      body: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          // Header
          Padding(
            padding: const EdgeInsets.all(20),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                const Text(
                  '✨ Vocabulary of the Day',
                  style: TextStyle(
                    fontSize: 24,
                    fontWeight: FontWeight.bold,
                    color: Color(0xFF1E293B),
                  ),
                ),
                const SizedBox(height: 8),
                Text(
                  'Swipe left to see more words',
                  style: TextStyle(
                    fontSize: 14,
                    color: Colors.grey.shade600,
                  ),
                ),
              ],
            ),
          ),

          // Flashcard List (Horizontal)
          SizedBox(
            height: 280,
            child: ListView.builder(
              scrollDirection: Axis.horizontal,
              padding: const EdgeInsets.symmetric(horizontal: 16),
              itemCount: flashcards.length,
              itemBuilder: (context, index) {
                return _buildFlashcard(flashcards[index]);
              },
            ),
          ),

          const SizedBox(height: 24),

          // Instruction
          Padding(
            padding: const EdgeInsets.symmetric(horizontal: 20),
            child: Container(
              padding: const EdgeInsets.all(16),
              decoration: BoxDecoration(
                color: Colors.white,
                borderRadius: BorderRadius.circular(16),
                border: Border.all(color: Colors.grey.shade200),
              ),
              child: Row(
                children: [
                  Container(
                    padding: const EdgeInsets.all(10),
                    decoration: BoxDecoration(
                      color: Colors.amber.shade50,
                      borderRadius: BorderRadius.circular(12),
                    ),
                    child: const Text('💡', style: TextStyle(fontSize: 24)),
                  ),
                  const SizedBox(width: 16),
                  const Expanded(
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Text(
                          'Learning Tip',
                          style: TextStyle(
                            fontWeight: FontWeight.bold,
                            fontSize: 16,
                          ),
                        ),
                        SizedBox(height: 4),
                        Text(
                          'Try to use each new word in a sentence today!',
                          style: TextStyle(
                            color: Colors.grey,
                            fontSize: 13,
                          ),
                        ),
                      ],
                    ),
                  ),
                ],
              ),
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildFlashcard(Flashcard card) {
    return Container(
      width: 260,
      margin: const EdgeInsets.only(right: 16, bottom: 8),
      decoration: BoxDecoration(
        gradient: LinearGradient(
          begin: Alignment.topLeft,
          end: Alignment.bottomRight,
          colors: [
            card.color,
            card.color.withOpacity(0.8),
          ],
        ),
        borderRadius: BorderRadius.circular(24),
        boxShadow: [
          BoxShadow(
            color: card.color.withOpacity(0.3),
            blurRadius: 20,
            offset: const Offset(0, 10),
          ),
        ],
      ),
      child: Padding(
        padding: const EdgeInsets.all(24),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            // Word
            Text(
              card.word,
              style: const TextStyle(
                fontSize: 28,
                fontWeight: FontWeight.bold,
                color: Colors.white,
                letterSpacing: 0.5,
              ),
            ),

            const SizedBox(height: 4),

            // Pronunciation
            Text(
              card.pronunciation,
              style: TextStyle(
                fontSize: 14,
                color: Colors.white.withOpacity(0.8),
                fontStyle: FontStyle.italic,
              ),
            ),

            const SizedBox(height: 16),

            // Divider
            Container(
              height: 1,
              color: Colors.white.withOpacity(0.3),
            ),

            const SizedBox(height: 16),

            // Meaning
            Row(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                const Text('🇻🇳 ', style: TextStyle(fontSize: 16)),
                Expanded(
                  child: Text(
                    card.meaning,
                    style: const TextStyle(
                      fontSize: 16,
                      color: Colors.white,
                      fontWeight: FontWeight.w500,
                    ),
                  ),
                ),
              ],
            ),

            const Spacer(),

            // Example
            Container(
              padding: const EdgeInsets.all(12),
              decoration: BoxDecoration(
                color: Colors.white.withOpacity(0.2),
                borderRadius: BorderRadius.circular(12),
              ),
              child: Row(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  const Text('📝 ', style: TextStyle(fontSize: 14)),
                  Expanded(
                    child: Text(
                      card.example,
                      style: TextStyle(
                        fontSize: 13,
                        color: Colors.white.withOpacity(0.95),
                        fontStyle: FontStyle.italic,
                      ),
                    ),
                  ),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}
```

</details>

**Kiến thức áp dụng:**
- `ListView.builder` với `scrollDirection: Axis.horizontal`
- `SizedBox` với `height` cố định cho horizontal list
- Tạo `Model` class cho dữ liệu flashcard
- `LinearGradient` để tạo màu nền gradient đẹp mắt
- `BoxShadow` để tạo hiệu ứng đổ bóng
- Layout với `Column`, `Row`, `Expanded`, `Spacer`

---

## Phần 5: Tổng kết

### Kiến thức đã học

| Chủ đề | Widget/Concept |
|--------|----------------|
| Hiển thị danh sách | `ListView`, `ListView.builder`, `ListView.separated` |
| Hiển thị lưới | `GridView`, `GridView.builder`, `SliverGridDelegate` |
| Xử lý sự kiện | `GestureDetector`, `onTap` |
| Quản lý state | `Set<int>`, toggle state, count items |

### So sánh nhanh

| Tình huống | Widget phù hợp |
|------------|----------------|
| Danh sách dọc, cuộn được | `ListView.builder` |
| Danh sách ngang (carousel) | `ListView` với `scrollDirection: Axis.horizontal` |
| Lưới hình ảnh, game board | `GridView.builder` |
| Ít item, không cuộn | `Column` hoặc `Row` |

### Checklist hoàn thành

- [ ] Hiểu sự khác nhau giữa `ListView` và `Column`
- [ ] Biết khi nào dùng `.builder` constructor
- [ ] Tạo được `GridView` với số cột tùy chỉnh
- [ ] Xử lý được sự kiện tap với index
- [ ] Hoàn thành Mini Project 1: Danh sách có thể chọn
- [ ] Hoàn thành Mini Project 2: Grid Card Preview
- [ ] Hoàn thành Mini Project 3: Danh sách sản phẩm

---

## Bài tập về nhà

1. **Thêm tính năng "Chọn tất cả"** cho Mini Project 1
2. **Xáo trộn thẻ** trong Mini Project 2 khi nhấn nút refresh (gợi ý: dùng `.shuffle()`)
3. **Thêm thanh tìm kiếm** cho Mini Project 3 để lọc sản phẩm theo tên

---

## Tài liệu tham khảo

- [ListView class - Flutter docs](https://api.flutter.dev/flutter/widgets/ListView-class.html)
- [GridView class - Flutter docs](https://api.flutter.dev/flutter/widgets/GridView-class.html)

---

**Bài tiếp theo:** Bài 15 - Memory Card Game với Animation & Sound 🎮🔊
