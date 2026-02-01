---
sidebar_position: 19
title: "Bài 19: Lập Trình Cộng Tác với GitHub Copilot"
description: Học cách sử dụng AI để hỗ trợ lập trình hiệu quả - Hiểu cơ chế LLM, kỹ thuật prompt và tư duy làm việc cùng AI
---

# Bài 19: Lập Trình Cộng Tác với GitHub Copilot

Chào các em! 👋

Trong thời đại AI phát triển mạnh mẽ, việc biết cách **làm việc cùng AI** là một kỹ năng quan trọng của lập trình viên hiện đại. Bài học hôm nay sẽ giúp các em hiểu cách AI coding hoạt động và làm sao để sử dụng chúng **hiệu quả** mà không bị phụ thuộc.

---

## Mục tiêu bài học

Sau buổi học này, các em sẽ:

- ✅ Hiểu được **cơ chế hoạt động** của các AI coding (ChatGPT, Gemini, GitHub Copilot)
- ✅ Biết tại sao AI hay **"ảo giác"** và cách phòng tránh
- ✅ Nắm vững tầm quan trọng của **context** khi làm việc với AI
- ✅ Thành thạo kỹ thuật **"Think Before Prompt"** - suy nghĩ trước, prompt sau
- ✅ Sử dụng được GitHub Copilot với **Agent mode** và **Plan mode**

---

## Phần 1: AI Coding hoạt động như thế nào?

### 1.1. 🎮 Game đoán từ - Hiểu cơ chế LLM

Trước khi đọc lý thuyết, hãy thử chơi game này để tự trải nghiệm cách AI "suy nghĩ".

**Cách chơi:** Đọc câu và đoán từ tiếp theo!

| Câu chưa hoàn thành           | Em đoán từ gì? | Đáp án phổ biến |
| ----------------------------- | -------------- | --------------- |
| "Xin chào, tôi tên là..."     | ?              | (tên người)     |
| "1, 2, 3, 4, ..."             | ?              | 5               |
| "Hà Nội là thủ đô của..."     | ?              | Việt Nam        |
| "Con mèo kêu..."              | ?              | meo meo         |
| "import 'package:flutter/..." | ?              | material.dart   |

**💡 Bài học rút ra:**

- Các em vừa làm **ĐÚNG như cách AI hoạt động!**
- AI không "hiểu" nghĩa - nó **đoán từ tiếp theo** dựa trên những gì đã thấy trước đó
- Càng có nhiều **context** (ngữ cảnh), càng đoán **chính xác** hơn

### 1.2. Thử nghiệm với AI thật

Hãy tự thử các prompt sau trên ChatGPT hoặc Copilot để thấy cách AI hoạt động!

**Thử nghiệm 1:** Gõ vào ChatGPT:

```
Hoàn thành câu sau: "Tôi đi học về, mở cửa nhà thì thấy..."
```

→ AI sẽ đoán tiếp câu chuyện!

**Thử nghiệm 2:** Gõ tiếp:

```
Hoàn thành code:
class MyApp extends
```

→ AI đoán `StatelessWidget` hoặc `StatefulWidget` vì đó là pattern phổ biến!

---

### 1.3. LLM - "Bộ não" của AI

**LLM** (Large Language Model) là "bộ não" đằng sau ChatGPT, Gemini, và GitHub Copilot. Hãy tưởng tượng LLM như một **học sinh siêu giỏi** đã đọc hàng tỷ trang sách, code, và tài liệu trên internet.

```
┌─────────────────────────────────────────────────────────────────┐
│                    Cách LLM Hoạt Động                           │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   📚 Training Data        🧠 Model          💬 Output           │
│   (Tỷ dòng code,    →    (Học patterns,  →  (Dự đoán từ        │
│    tài liệu, sách)        quy luật)          tiếp theo)        │
│                                                                 │
│   Ví dụ đơn giản:                                               │
│   "Con chó" → 99% là "sủa" (vì AI thấy pattern này nhiều)      │
│   "for (int i" → 90% là "= 0;" (vì code thường viết vậy)       │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

**Điểm quan trọng:**

| Đặc điểm                  | Giải thích                                                            | Ví dụ thực tế                      |
| ------------------------- | --------------------------------------------------------------------- | ---------------------------------- |
| **Dự đoán từ tiếp theo**  | LLM không "hiểu" code, nó **dự đoán** từ tiếp theo dựa trên xác suất  | Như game đoán từ vừa chơi!         |
| **Không có trí nhớ**      | Mỗi cuộc hội thoại là độc lập, AI không nhớ project của em từ hôm qua | Chat mới = AI quên hết             |
| **Phụ thuộc vào context** | AI chỉ biết những gì em cung cấp trong cuộc hội thoại hiện tại        | Như hỏi đường mà không nói địa chỉ |

### 1.4. Tại sao AI hay "Ảo giác" (Hallucination)?

**Hallucination** là hiện tượng AI tự tin đưa ra thông tin **sai** hoặc **bịa đặt**.

> 🎭 **Ví dụ ngoài đời:** Hỏi AI "Ai là tổng thống Việt Nam năm 2020?" - AI có thể tự tin trả lời một cái tên... hoàn toàn sai! (Việt Nam có Chủ tịch nước, không phải Tổng thống)

#### Ví dụ ảo giác trong cuộc sống:

| Câu hỏi                                    | AI có thể trả lời    | Sự thật                                        |
| ------------------------------------------ | -------------------- | ---------------------------------------------- |
| "Sách 'Đắc Nhân Tâm' có bao nhiêu chương?" | "15 chương" (tự tin) | Có thể sai vì AI đoán!                         |
| "Quán phở ngon nhất Hà Nội ở đâu?"         | Địa chỉ cụ thể       | Có thể là địa chỉ không tồn tại!               |
| "Công thức nấu phở có gì?"                 | Liệt kê nguyên liệu  | Có thể thiếu/thừa vì AI "trộn" nhiều công thức |

#### Ví dụ ảo giác trong lập trình:

```dart
// ❌ AI có thể gợi ý code SAI như này:
Text(
  text: "Hello",  // ❌ SAI! Text không có parameter "text"
  style: TextStyle(fontSize: 20),
)

// ✅ Code ĐÚNG:
Text(
  "Hello",  // ✅ Text nhận String trực tiếp
  style: TextStyle(fontSize: 20),
)
```

**Nguyên nhân AI "ảo giác":**

| Nguyên nhân                        | Giải thích                                             | Ví dụ dễ hiểu                                       |
| ---------------------------------- | ------------------------------------------------------ | --------------------------------------------------- |
| 📅 **Kiến thức cũ**                | AI được train trên data cũ, thế giới đã thay đổi       | Như đọc sách địa lý năm 2010, không biết có cầu mới |
| 🔀 **Trộn lẫn thông tin**          | AI "nhớ" nhiều thứ tương tự, có thể nhầm lẫn           | Như nhớ mặt bạn A nhưng gọi tên bạn B               |
| 🤷 **Không biết nói "Không biết"** | AI luôn cố gắng trả lời, hiếm khi thừa nhận không biết | Như bạn sĩ diện không dám nói "tao không biết"      |

**Ví dụ ảo giác phổ biến trong Flutter:**

| Loại ảo giác          | Ví dụ                                                     | Cách phát hiện           |
| --------------------- | --------------------------------------------------------- | ------------------------ |
| Widget không tồn tại  | `CoolButton`, `SuperCard` (bịa tên)                       | Hover xem có gợi ý không |
| API đã cũ             | `FlatButton` (đã đổi thành `TextButton`)                  | Thấy gạch vàng warning   |
| Tham số sai           | `Container(text: "Hi")` - Container không có tham số text | Lỗi đỏ khi compile       |
| Package không tồn tại | `import 'package:super_ui/super_ui.dart'`                 | Lỗi khi pub get          |

> ⚠️ **Quy tắc vàng:** Luôn **chạy thử code** và **kiểm tra lỗi** trước khi tin AI!

---

## Phần 2: Context là Vua 👑

### 2.1. Tại sao Context quan trọng?

**Context** (ngữ cảnh) là tất cả thông tin mà AI có để hiểu yêu cầu của em.

> 🎭 **Ví dụ:** Em nhờ một người lạ chỉ đường đến "quán cà phê". Người đó sẽ hỏi: "Quán nào? Ở đâu?". Nếu em chỉ nói "quán cà phê" mà không nói thêm gì, họ sẽ **đoán bừa** → Giống như AI khi thiếu context!

### 2.2. 🧪 Thí nghiệm: Cùng 1 câu hỏi, 3 cách hỏi

Hãy thử chạy 3 prompt sau trên ChatGPT/Copilot và quan sát sự khác biệt!

#### Thí nghiệm 1: Hỏi về cuộc sống

| Cấp độ               | Prompt                                                                      | Kết quả AI trả về                         |
| -------------------- | --------------------------------------------------------------------------- | ----------------------------------------- |
| ❌ **Không context** | "Cho tôi công thức"                                                         | AI hỏi lại: "Công thức gì?" hoặc đoán bừa |
| 😐 **Ít context**    | "Cho tôi công thức nấu phở"                                                 | AI cho công thức chung chung              |
| ✅ **Đủ context**    | "Cho tôi công thức nấu phở bò Nam Định cho 4 người, tôi không ăn được hành" | AI cho công thức chi tiết, đúng yêu cầu   |

#### Thí nghiệm 2: Hỏi về code Flutter

| Cấp độ               | Prompt                                                                                                                 | Kết quả AI trả về              |
| -------------------- | ---------------------------------------------------------------------------------------------------------------------- | ------------------------------ |
| ❌ **Không context** | "Tạo button"                                                                                                           | Button đơn giản, không style   |
| 😐 **Ít context**    | "Tạo button màu xanh trong Flutter"                                                                                    | ElevatedButton màu xanh cơ bản |
| ✅ **Đủ context**    | "Tạo button 'Đăng nhập' trong Flutter: màu xanh dương (#2196F3), bo góc 12px, full width, khi nhấn thì print('Login')" | Code chính xác như mong muốn   |

💡 **Hãy thử:** Chạy cả 3 prompt và so sánh code output để thấy sự khác biệt!

#### Thí nghiệm 3: Nhờ việc ngoài đời

| Cấp độ               | Prompt                                                                                                 | AI sẽ hiểu                     |
| -------------------- | ------------------------------------------------------------------------------------------------------ | ------------------------------ |
| ❌ **Không context** | "Viết email"                                                                                           | Email gì? Cho ai? Về việc gì?  |
| 😐 **Ít context**    | "Viết email xin nghỉ học"                                                                              | Thiếu: lý do, ngày nào, gửi ai |
| ✅ **Đủ context**    | "Viết email xin nghỉ học gửi cô giáo chủ nhiệm, lý do bị ốm, nghỉ ngày mai (thứ 3), giọng văn lịch sự" | Email hoàn chỉnh, đúng tone    |

### 2.3. So sánh Prompt có Context vs Không có Context (Flutter)

**❌ Prompt THIẾU context:**

```
Tạo màn hình login
```

→ AI sẽ đoán bừa về màu sắc, layout, có validate hay không...

**✅ Prompt ĐẦY ĐỦ context:**

```
Tạo màn hình Login cho app Flutter với:
- 2 TextField: email và password
- Password có icon để ẩn/hiện
- Nút "Đăng nhập" màu xanh dương, full width
- Link "Chưa có tài khoản? Đăng ký" ở dưới
- Sử dụng StatefulWidget
```

→ AI hiểu rõ và tạo code phù hợp!

### 2.4. Các loại Context cần cung cấp

| Loại Context  | Ví dụ                                         | Tại sao cần?                      |
| ------------- | --------------------------------------------- | --------------------------------- |
| **UI**        | Màu sắc, layout, các widget cần dùng          | Để UI đúng design                 |
| **Logic**     | Khi nhấn nút thì làm gì, validate như thế nào | Để code hoạt động đúng            |
| **Cấu trúc**  | StatelessWidget hay StatefulWidget, tên file  | Để code phù hợp với project       |
| **Ràng buộc** | Không dùng package ngoài, code đơn giản       | Tránh AI dùng thứ mình không muốn |

---

## Phần 3: Tư duy "Think Before Prompt" 🧠

### 3.1. Vấn đề khi Prompt trước, Nghĩ sau

```
┌─────────────────────────────────────────────────────────────────┐
│  ❌ Cách làm SAI                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   Yêu cầu    →   Prompt AI   →   Copy code   →   Paste & Run   │
│   mơ hồ          ngay             không hiểu       cầu may     │
│                                                                 │
│   Kết quả: Code chạy may mắn, nhưng không hiểu, không sửa được │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### 3.2. Workflow đúng

```
┌─────────────────────────────────────────────────────────────────┐
│  ✅ Cách làm ĐÚNG                                                │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   1. PHÂN TÍCH         2. LÊN KẾ HOẠCH                         │
│   ┌─────────────┐      ┌─────────────────┐                     │
│   │ Hiểu yêu cầu│  →   │ Chia nhỏ thành  │                     │
│   │ cần làm gì  │      │ các bước        │                     │
│   └─────────────┘      └─────────────────┘                     │
│          │                     │                                │
│          ▼                     ▼                                │
│   3. PROMPT TỪNG PHẦN   4. REVIEW & HIỂU                       │
│   ┌─────────────────┐   ┌─────────────────┐                    │
│   │ Prompt với      │ → │ Đọc hiểu code   │                    │
│   │ context rõ ràng │   │ AI tạo ra       │                    │
│   └─────────────────┘   └─────────────────┘                    │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### 3.3. Ví dụ áp dụng

**Yêu cầu:** Tạo màn hình hiển thị danh sách sản phẩm

**Bước 1: PHÂN TÍCH**

```
Màn hình cần gì?
├── AppBar với tiêu đề "Sản phẩm"
├── ListView hiển thị các sản phẩm
├── Mỗi item có: hình ảnh, tên, giá
└── Nhấn vào item thì in ra console
```

**Bước 2: PROMPT TỪNG PHẦN**

```
Prompt 1: "Tạo StatelessWidget ProductListScreen với AppBar
tiêu đề 'Sản phẩm' và một ListView.builder rỗng"

Prompt 2: "Tạo widget ProductCard hiển thị Card với Row chứa:
Image network 80x80, Column có Text tên và Text giá"

Prompt 3: "Kết hợp ProductCard vào ListView, tạo list mẫu
5 sản phẩm và xử lý onTap in ra console"
```

---

## Phần 4: Kỹ thuật Prompt Hiệu quả

### 4.1. Công thức Prompt tốt

```
[CONTEXT] + [TASK] + [CHI TIẾT]

• CONTEXT: Em đang làm gì, dùng Flutter
• TASK: Yêu cầu cụ thể cần AI thực hiện
• CHI TIẾT: Các yêu cầu về UI, logic, tên biến...
```

**Ví dụ:**

```
[CONTEXT]
Em đang làm app Flutter hiển thị thông tin cá nhân.

[TASK]
Tạo ProfileCard widget hiển thị thông tin user.

[CHI TIẾT]
- Sử dụng Card với bo góc 16
- Có CircleAvatar hiển thị icon person
- Text hiển thị tên (bold) và email
- Có nút Edit với icon ở góc phải
- Sử dụng StatelessWidget
```

### 4.2. Các kiểu Prompt hữu ích

| Kiểu Prompt    | Khi nào dùng          | Ví dụ                                     |
| -------------- | --------------------- | ----------------------------------------- |
| **Tạo mới**    | Cần tạo widget/screen | "Tạo màn hình Home với..."                |
| **Giải thích** | Không hiểu code       | "Giải thích đoạn code này làm gì"         |
| **Sửa lỗi**    | Code bị lỗi           | "Code này lỗi [error], giúp em sửa"       |
| **Cải tiến**   | Muốn code đẹp hơn     | "Làm đẹp UI này, thêm padding và màu sắc" |

### 4.3. 📊 Bảng so sánh: Prompt TỆ vs Prompt TỐT

Đây là phần quan trọng! Hãy xem sự khác biệt rõ ràng giữa prompt tệ và prompt tốt.

#### Ví dụ trong cuộc sống:

| ❌ Prompt TỆ          | ✅ Prompt TỐT                                                                                       | Tại sao tốt hơn?               |
| --------------------- | --------------------------------------------------------------------------------------------------- | ------------------------------ |
| "Giúp tôi học"        | "Giúp tôi ôn tập Toán chương hàm số lớp 10, tập trung vào dạng bài tìm tập xác định"                | Cụ thể môn, chương, dạng bài   |
| "Viết văn cho tôi"    | "Viết đoạn văn 150 từ nghị luận xã hội về tác hại của điện thoại, phong cách học sinh cấp 3"        | Rõ độ dài, thể loại, đối tượng |
| "Dịch sang tiếng Anh" | "Dịch sang tiếng Anh đoạn giới thiệu bản thân sau, giọng formal cho phỏng vấn xin việc: [đoạn văn]" | Rõ ngữ cảnh sử dụng            |

#### Ví dụ trong lập trình Flutter:

| ❌ Prompt TỆ  | ✅ Prompt TỐT                                                                                                 | Kết quả khác biệt           |
| ------------- | ------------------------------------------------------------------------------------------------------------- | --------------------------- |
| "Tạo app"     | "Tạo StatelessWidget hiển thị Card chứa tên và avatar người dùng"                                             | Từ cả app → 1 widget cụ thể |
| "Sửa lỗi đi"  | "Code này lỗi 'setState() called after dispose()'. Em đang dùng StatefulWidget gọi API. Giúp em sửa"          | AI hiểu ngay vấn đề         |
| "Làm đẹp UI"  | "Thêm padding 16 cho Card, bo góc 12, đổ bóng nhẹ elevation 2, màu nền trắng"                                 | UI đúng như ý muốn          |
| "Tạo list"    | "Tạo ListView.builder hiển thị 10 sản phẩm, mỗi item là Card có hình ảnh 80x80 bên trái, tên và giá bên phải" | Layout rõ ràng              |
| "Xử lý click" | "Khi nhấn vào item trong ListView, navigate sang màn DetailScreen và truyền product id qua constructor"       | Logic hoàn chỉnh            |

### 4.4. Những điều KHÔNG nên làm

| ❌ Tránh               | Tại sao                 | Thay bằng                                 |
| ---------------------- | ----------------------- | ----------------------------------------- |
| "Làm app cho em"       | Quá chung chung         | Chia nhỏ thành từng màn hình              |
| "Sửa lỗi đi"           | Không mô tả lỗi gì      | Dán lỗi cụ thể + giải thích bối cảnh      |
| Copy 500 dòng code     | AI khó focus vào vấn đề | Chỉ copy phần liên quan + chỉ rõ dòng lỗi |
| "Tạo app giống TikTok" | Scope quá lớn           | "Tạo màn hình feed video cuộn dọc"        |

---

## Phần 5: Sử dụng GitHub Copilot

### 5.1. Các chế độ của Copilot

| Chế độ       | Mô tả                                              | Dùng khi                     |
| ------------ | -------------------------------------------------- | ---------------------------- |
| 💬 **Ask**   | Hỏi đáp, giải thích                                | Học concept, hỏi cách làm    |
| ✏️ **Edit**  | Sửa code trong file đang mở                        | Refactor, sửa nhỏ            |
| 🤖 **Agent** | AI tự động làm nhiều bước                          | Tạo feature mới              |
| 📋 **Plan**  | AI lên kế hoạch trước, em review rồi mới thực hiện | Task phức tạp, cần kiểm soát |

### 5.2. Agent Mode

**Agent Mode** cho phép Copilot:

- Tự động tạo/sửa nhiều files
- Chạy terminal commands
- Đọc và phân tích project

**Cách dùng:**

1. Mở Copilot Chat (Ctrl+Shift+I / Cmd+Shift+I)
2. Chọn "Agent" ở dropdown
3. Nhập prompt

### 5.3. Plan Mode

**Plan Mode** giúp Copilot lên kế hoạch trước, em review rồi mới thực hiện.

**Cách dùng:** Thêm yêu cầu lên plan trong prompt:

```
Tạo màn hình hiển thị danh sách todo với:
- Mỗi todo có checkbox, tiêu đề, nút xóa
- Có TextField để thêm todo mới
- Dùng StatefulWidget

Hãy lên kế hoạch trước, liệt kê các bước sẽ làm.
Chờ em confirm rồi mới code.
```

### 5.4. Tips sử dụng

| Tip                       | Mô tả                       |
| ------------------------- | --------------------------- |
| `@workspace`              | Copilot đọc toàn bộ project |
| `@file:tên.dart`          | Reference file cụ thể       |
| Chọn code rồi hỏi         | Hỏi về phần code đang chọn  |
| "Giải thích code vừa tạo" | Luôn hỏi để hiểu            |

---

## Phần 6: Thực hành 💻

Phần này chia thành 3 mini-task, mỗi task khoảng 12-15 phút. Hãy làm theo từng bước!

### 6.1. Chuẩn bị (5 phút)

**Checklist trước khi bắt đầu:**

- [ ] Mở VS Code với Flutter project (có thể dùng project cũ hoặc tạo mới)
- [ ] Đảm bảo extension GitHub Copilot đã cài và đăng nhập
- [ ] Mở Copilot Chat: `Ctrl+Shift+I` (Windows) hoặc `Cmd+Shift+I` (Mac)

---

### 6.2. Mini-Task 1: Hỏi AI giải thích code (12 phút)

**Mục tiêu:** Học cách dùng AI để hiểu code, không chỉ để tạo code.

**Bước 1:** Copy đoạn code sau vào file Dart:

```dart
class ProductCard extends StatelessWidget {
  final String name;
  final double price;
  final VoidCallback onTap;

  const ProductCard({
    super.key,
    required this.name,
    required this.price,
    required this.onTap,
  });

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: onTap,
      child: Card(
        child: Padding(
          padding: const EdgeInsets.all(16.0),
          child: Row(
            children: [
              const Icon(Icons.shopping_bag, size: 40),
              const SizedBox(width: 16),
              Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(name, style: const TextStyle(fontWeight: FontWeight.bold)),
                  Text('${price.toStringAsFixed(0)}đ'),
                ],
              ),
            ],
          ),
        ),
      ),
    );
  }
}
```

**Bước 2:** Bôi đen code, nhấn chuột phải → "Copilot" → "Explain"

**Bước 3:** Đọc giải thích và trả lời câu hỏi:

- `VoidCallback` là gì?
- Tại sao dùng `const` trước `EdgeInsets.all`?
- `crossAxisAlignment.start` có nghĩa gì?

**⏱️ Checkpoint:** Các em đã hiểu cách dùng Explain chưa?

---

### 6.3. Mini-Task 2: Dùng Ask Mode để tạo widget (15 phút)

**Mục tiêu:** Tạo widget mới với prompt có đầy đủ context.

**Bước 1:** Mở Copilot Chat, chọn mode **Ask**

**Bước 2:** Nhập prompt (đã có sẵn context đầy đủ):

```
Tạo StatelessWidget tên UserInfoCard hiển thị thông tin người dùng:

- Là một Card bo góc 12
- Bên trong có Row:
  + Bên trái: CircleAvatar với icon person, size 50
  + Bên phải: Column chứa 2 Text (tên user bold, email màu xám)
- Có padding 16 bên trong Card
- Nhận 2 tham số: String name, String email

Chỉ tạo widget, không cần main() hay MaterialApp.
```

**Bước 3:** Nhận code từ Copilot, **ĐỌC HIỂU** trước khi copy

**Bước 4:** Hỏi tiếp để hiểu:

```
Giải thích tại sao dùng Column với crossAxisAlignment.start?
```

**⏱️ Checkpoint:** Code có chạy được không? Có hiểu các widget không?

---

### 6.4. Mini-Task 3: Dùng Agent Mode để tạo màn hình (15 phút)

**Mục tiêu:** Trải nghiệm Agent Mode - AI tự động tạo và sửa file.

**Bước 1:** Mở Copilot Chat, chọn mode **Agent**

**Bước 2:** Nhập prompt:

```
@workspace Tạo màn hình Profile đơn giản trong file lib/screens/profile_screen.dart:

1. AppBar tiêu đề "Hồ sơ"
2. Body có Column căn giữa:
   - CircleAvatar lớn (radius 50) với icon person
   - SizedBox height 20
   - Text tên "Nguyễn Văn A" (bold, size 24)
   - Text email "nguyenvana@email.com" (màu xám)
3. StatelessWidget, không cần xử lý logic

Hãy tạo file và viết code.
```

**Bước 3:** Xem Copilot tự động:

- Tạo folder `screens` nếu chưa có
- Tạo file `profile_screen.dart`
- Viết code hoàn chỉnh

**Bước 4:** Review code và chạy thử

**⏱️ Checkpoint:** File đã được tạo chưa? App có chạy được không?

---

### 6.5. Tự mở rộng (nếu còn thời gian)

Thử tự prompt để:

- Thêm nút "Chỉnh sửa" màu xanh dương
- Thêm thông tin số điện thoại
- Thêm Divider giữa các thông tin

### 6.6. Checklist cuối buổi

- [ ] Biết cách dùng **Explain** để hiểu code
- [ ] Biết cách dùng **Ask** để tạo widget
- [ ] Biết cách dùng **Agent** để tạo file mới
- [ ] Hiểu tầm quan trọng của context trong prompt

---

## Phần 7: Nguyên tắc quan trọng

### 7.1. 5 Nguyên tắc vàng

```
┌─────────────────────────────────────────────────────────────────┐
│         🌟 5 NGUYÊN TẮC VÀNG 🌟                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  1. 🧠 NGHĨ TRƯỚC, PROMPT SAU                                   │
│     Phân tích yêu cầu trước khi nhờ AI                         │
│                                                                 │
│  2. 📖 LUÔN ĐỌC HIỂU CODE                                       │
│     Không copy-paste mà không hiểu                             │
│                                                                 │
│  3. 🔍 KIỂM TRA KẾT QUẢ                                         │
│     Chạy thử code, xem có lỗi không                            │
│                                                                 │
│  4. 📝 CUNG CẤP CONTEXT ĐẦY ĐỦ                                  │
│     Context càng rõ, code càng chính xác                       │
│                                                                 │
│  5. 🎯 CHIA NHỎ TASK                                            │
│     Không prompt cả app một lúc                                │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### 7.2. AI là công cụ, không phải thay thế

```
┌─────────────────────────────────────────────────────────────────┐
│   👨‍💻 Developer  +  🤖 AI  =  💪 Super Developer                │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   AI giúp em:                  AI KHÔNG thể thay thế:          │
│   • Code nhanh hơn             • Tư duy logic của em           │
│   • Học cách dùng widget       • Khả năng hiểu vấn đề          │
│   • Giải thích code            • Sáng tạo ý tưởng              │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

## Tóm tắt

| Chủ đề                  | Ghi nhớ                                       |
| ----------------------- | --------------------------------------------- |
| **LLM**                 | AI dự đoán từ tiếp theo, không thực sự "hiểu" |
| **Ảo giác**             | AI có thể đưa thông tin sai, luôn kiểm tra    |
| **Context**             | Cung cấp đủ thông tin: UI, logic, chi tiết    |
| **Think Before Prompt** | Phân tích → Plan → Prompt từng phần → Review  |
| **Agent Mode**          | AI tự động làm nhiều bước                     |
| **Plan Mode**           | Yêu cầu AI lên kế hoạch trước                 |

---

## Bài tập về nhà

> **💡 Mẹo:** Làm bài tập theo thứ tự từ dễ đến khó. Bài 1 và 2 là bắt buộc, Bài 3 là thử thách thêm.

### Bài 1: Debug với AI (⭐ Dễ - 15 phút)

**Mục tiêu:** Luyện kỹ năng hỏi AI để hiểu và sửa lỗi.

Hãy copy đoạn code lỗi sau vào VS Code:

```dart
// Code lỗi: Bấm nút nhưng số không tăng trên màn hình?
class Counter extends StatelessWidget {
  int count = 0;

  @override
  Widget build(BuildContext context) {
    return Column(
      mainAxisAlignment: MainAxisAlignment.center,
      children: [
        Text("Số lần bấm: $count", style: TextStyle(fontSize: 24)),
        SizedBox(height: 20),
        ElevatedButton(
          onPressed: () {
            count++;
            print("Count = $count"); // In ra console thì thấy số tăng
          },
          child: Text("Bấm tôi!"),
        ),
      ],
    );
  }
}
```

**Các bước làm:**

1. Chạy thử code, nhấn nút vài lần, quan sát console và màn hình
2. Bôi đen code, hỏi Copilot: _"Tại sao khi bấm nút, console in ra số tăng nhưng màn hình không đổi?"_
3. Làm theo hướng dẫn của Copilot để sửa
4. **Ghi chép lại:** StatelessWidget và StatefulWidget khác nhau thế nào?

---

### Bài 2: Tạo Card thông tin (⭐⭐ Trung bình - 20 phút)

**Mục tiêu:** Luyện kỹ năng viết prompt có đầy đủ context.

Dùng Copilot tạo widget hiển thị thông tin một bài hát yêu thích.

**Yêu cầu widget:**

- Tên: `SongCard`
- Hiển thị: tên bài hát, ca sĩ, thời lượng
- Có icon nhạc bên trái
- Có nút play bên phải

**Các bước làm:**

1. **Tự viết prompt** với đầy đủ context (tham khảo công thức ở Phần 4)
2. Nhận code từ Copilot
3. Hỏi tiếp: _"Giải thích widget này hoạt động như thế nào?"_
4. Chạy thử và chụp ảnh kết quả

**Nộp bài:** Screenshot màn hình + prompt em đã dùng

---

### Bài 3: Thử thách sáng tạo (⭐⭐⭐ Khó - 30 phút) - TÙY CHỌN

**Mục tiêu:** Áp dụng tất cả kỹ năng đã học để tạo một màn hình hoàn chỉnh.

**Chọn 1 trong 2 đề:**

**Đề A - Màn hình Hồ sơ Game:**

```
Tạo màn hình hiển thị hồ sơ người chơi game với:
- Avatar tròn lớn ở trên
- Tên người chơi (nickname)
- Level và số điểm kinh nghiệm
- 3 badge/huy hiệu đã đạt được (dùng icon)
- Nút "Chỉnh sửa hồ sơ"
```

**Đề B - Màn hình Thời tiết:**

```
Tạo màn hình hiển thị thời tiết với:
- Icon thời tiết lớn (mặt trời/mây/mưa)
- Nhiệt độ hiện tại (số lớn)
- Tên thành phố
- Độ ẩm và tốc độ gió
- Dùng màu gradient cho background
```

**Quy trình làm:**

1. Phân tích yêu cầu → Liệt kê các widget cần dùng
2. Viết prompt cho từng phần (không làm 1 lần)
3. Review và hiểu code từng phần
4. Ghép lại thành màn hình hoàn chỉnh
5. Hỏi AI giải thích bất kỳ phần nào chưa hiểu

**Nộp bài:** Video ngắn (1-2 phút) demo app và giải thích 1 phần code em thấy hay.

---

## 📝 Mẫu ghi chép bài học

Các em có thể dùng mẫu sau để ghi chép:

```
🗓️ Ngày: ___________

1. AI hoạt động như thế nào?
   → Trả lời: ________________________________

2. "Ảo giác" của AI là gì?
   → Trả lời: ________________________________

3. Tại sao context quan trọng?
   → Trả lời: ________________________________

4. Một prompt tốt cần có gì?
   → Trả lời: ________________________________

5. Điều em thấy hay nhất về việc dùng AI:
   → _______________________________________

6. Điều em cần cẩn thận khi dùng AI:
   → _______________________________________
```

---

_Chúc các em làm việc hiệu quả cùng AI! Nhớ rằng: **AI là trợ thủ, nhưng em mới là người điều khiển!** 🚀_

_Có thắc mắc gì, hãy hỏi trên nhóm lớp hoặc dùng chính Copilot để tìm hiểu thêm!_
