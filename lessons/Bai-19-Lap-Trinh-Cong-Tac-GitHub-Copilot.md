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

- ✅ Hiểu được **cơ chế hoạt động** của các AI coding (ChatGPT, Gemini, GitHub Copilot)
- ✅ Biết tại sao AI hay **"ảo giác"** và cách phòng tránh
- ✅ Nắm vững tầm quan trọng của **context** khi làm việc với AI
- ✅ Thành thạo kỹ thuật **"Think Before Prompt"** - suy nghĩ trước, prompt sau
- ✅ Sử dụng được GitHub Copilot với **Agent mode** và **Plan mode**

---

## Phần 1: AI Coding hoạt động như thế nào?

### 1.1. LLM - "Bộ não" của AI

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
└─────────────────────────────────────────────────────────────────┘
```

**Điểm quan trọng:**

| Đặc điểm                  | Giải thích                                                            |
| ------------------------- | --------------------------------------------------------------------- |
| **Dự đoán từ tiếp theo**  | LLM không "hiểu" code, nó **dự đoán** từ tiếp theo dựa trên xác suất  |
| **Không có trí nhớ**      | Mỗi cuộc hội thoại là độc lập, AI không nhớ project của em từ hôm qua |
| **Phụ thuộc vào context** | AI chỉ biết những gì em cung cấp trong cuộc hội thoại hiện tại        |

### 1.2. Tại sao AI hay "Ảo giác" (Hallucination)?

**Hallucination** là hiện tượng AI tự tin đưa ra thông tin **sai** hoặc **bịa đặt**.

**Ví dụ trong Flutter:**

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

| Nguyên nhân                        | Giải thích                                                |
| ---------------------------------- | --------------------------------------------------------- |
| 📅 **Kiến thức cũ**                | AI được train trên data cũ, Flutter có thể đã thay đổi    |
| 🔀 **Trộn lẫn thông tin**          | AI "nhớ" nhiều widget tương tự, có thể nhầm lẫn cách dùng |
| 🤷 **Không biết nói "Không biết"** | AI luôn cố gắng trả lời, hiếm khi thừa nhận không biết    |

**Ví dụ ảo giác phổ biến:**

| Loại ảo giác         | Ví dụ                                                     |
| -------------------- | --------------------------------------------------------- |
| Widget không tồn tại | `CoolButton` (bịa tên)                                    |
| API đã cũ            | `FlatButton` (đã đổi thành `TextButton`)                  |
| Tham số sai          | `Container(text: "Hi")` - Container không có tham số text |

---

## Phần 2: Context là Vua 👑

### 2.1. Tại sao Context quan trọng?

**Context** (ngữ cảnh) là tất cả thông tin mà AI có để hiểu yêu cầu của em.

> 🎭 **Ví dụ:** Em nhờ một người lạ chỉ đường đến "quán cà phê". Người đó sẽ hỏi: "Quán nào? Ở đâu?". Nếu em chỉ nói "quán cà phê" mà không nói thêm gì, họ sẽ **đoán bừa** → Giống như AI khi thiếu context!

### 2.2. So sánh Prompt có Context vs Không có Context

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

### 2.3. Các loại Context cần cung cấp

| Loại Context | Ví dụ                                         |
| ------------ | --------------------------------------------- |
| **UI**       | Màu sắc, layout, các widget cần dùng          |
| **Logic**    | Khi nhấn nút thì làm gì, validate như thế nào |
| **Cấu trúc** | StatelessWidget hay StatefulWidget, tên file  |

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

### 4.3. Những điều KHÔNG nên làm

| ❌ Tránh               | Tại sao                 |
| ---------------------- | ----------------------- |
| "Làm app cho em"       | Quá chung chung         |
| "Sửa lỗi đi"           | Không mô tả lỗi gì      |
| Copy 500 dòng code     | AI khó focus vào vấn đề |
| "Tạo app giống TikTok" | Scope quá lớn           |

---

## Phần 5: Sử dụng GitHub Copilot

### 5.1. Các chế độ của Copilot

| Chế độ       | Mô tả                       | Dùng khi                  |
| ------------ | --------------------------- | ------------------------- |
| 💬 **Ask**   | Hỏi đáp, giải thích         | Học concept, hỏi cách làm |
| ✏️ **Edit**  | Sửa code trong file đang mở | Refactor, sửa nhỏ         |
| 🤖 **Agent** | AI tự động làm nhiều bước   | Tạo feature mới           |

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

## Phần 6: Thực hành

### 6.1. Chuẩn bị

- Flutter project mới
- Extension GitHub Copilot trong VS Code
- Đã đăng nhập tài khoản GitHub

### 6.2. Bài thực hành: Tạo màn hình Profile đơn giản

**Bước 1: Lên kế hoạch**

Mở Copilot Chat, chọn Agent Mode, nhập:

```
@workspace Em muốn tạo màn hình Profile đơn giản cho app Flutter với:

1. AppBar có tiêu đề "Hồ sơ cá nhân"
2. CircleAvatar lớn ở giữa màn hình (dùng icon person)
3. Bên dưới có Card hiển thị:
   - Tên: "Nguyễn Văn A"
   - Email: "nguyenvana@email.com"
   - Số điện thoại: "0123456789"
4. Nút "Chỉnh sửa" ở cuối màn hình

Yêu cầu:
- Sử dụng StatelessWidget
- Màu chủ đạo xanh dương
- Code đơn giản, dễ hiểu

Hãy lên kế hoạch trước, chờ em confirm.
```

**Bước 2: Review plan và confirm**

Đọc kỹ plan, nếu OK thì gõ "OK, bắt đầu code"

**Bước 3: Hỏi giải thích**

Sau khi nhận code:

```
Giải thích code vừa tạo:
1. CircleAvatar hoạt động như thế nào?
2. Card và ListTile dùng để làm gì?
3. Tại sao dùng Column và các widget được sắp xếp như vậy?
```

**Bước 4: Tự mở rộng**

Thử tự prompt để:

- Thêm nút "Đăng xuất" màu đỏ
- Thêm thông tin "Ngày sinh"
- Đổi màu chủ đạo sang màu tím

### 6.3. Checklist tự kiểm tra

- [ ] Hiểu cách các widget trong code hoạt động
- [ ] Có thể tự thêm/sửa thông tin hiển thị
- [ ] Có thể giải thích code cho bạn khác

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

### Bài 1: Thử thách "Thám tử Bug" 🕵️‍♂️

Hãy copy đoạn code lỗi sau vào VS Code và hỏi Copilot cách sửa:

```dart
// Code lỗi: Bấm nút nhưng số không tăng?
class Counter extends StatelessWidget {
  int count = 0;

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Text("Số lần bấm: $count"),
        ElevatedButton(
          onPressed: () {
            count++; // Tại sao UI không cập nhật?
            print(count);
          },
          child: Text("Tăng số"),
        ),
      ],
    );
  }
}
```

**Yêu cầu:**

1. Hỏi Copilot: "Tại sao code này không cập nhật UI khi bấm nút?"
2. Áp dụng cách sửa mà Copilot gợi ý.
3. Ghi lại giải thích của Copilot về sự khác nhau giữa `StatelessWidget` và `StatefulWidget`.

### Bài 2: Tạo Mini-Game "Oẳn Tù Tì" 🎮

Sử dụng **Agent Mode** hoặc **Plan Mode** để tạo game Oẳn Tù Tì (Rock-Paper-Scissors) đơn giản.

**Gợi ý Prompt:**

```
Tạo game Oẳn Tù Tì đơn giản:
- UI: 3 nút hình (Búa, Bao, Kéo)
- Logic:
  + Người chơi chọn 1 nút
  + Máy chọn ngẫu nhiên
  + So sánh kết quả (Thắng/Thua/Hòa)
- Hiển thị kết quả lên màn hình
```

**Yêu cầu:**

- Review code xem AI xử lý logic random và so sánh như thế nào.
- Thử yêu cầu AI thêm tính năng: "Tính điểm" (Thắng +1 điểm).

---

_Chúc các em làm việc hiệu quả cùng AI! Nhớ rằng: AI là trợ thủ, nhưng em mới là người điều khiển! 🚀_
