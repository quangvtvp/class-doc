---
sidebar_position: 1
id: intro-career-prophet
title: 🔮 Giới thiệu: Máy Tiên Tri Nghề Nghiệp
description: Tổng quan về Mini Game dự đoán nghề nghiệp tương lai
---

# 🔮 Máy Tiên Tri Nghề Nghiệp

Chào các em! 👋 Hôm nay chúng ta sẽ cùng nhau xây dựng một ứng dụng cực kỳ vui nhộn mang tên **"Máy Tiên Tri Nghề Nghiệp"**.

Đây là một mini game giúp các em thực hành kỹ năng xây dựng giao diện (UI) và xử lý logic cơ bản trong Flutter mà **không cần dùng đến StatefulWidget**.

## 🎮 Game này có gì thú vị?

Game hoạt động như một "thầy bói" công nghệ:

1.  Bạn nhập tên một người bạn.
2.  Bấm nút "Dự đoán".
3.  Máy sẽ chọn ngẫu nhiên một nghề nghiệp hài hước cho người đó và hiển thị ra màn hình.

### Các tính năng chính:

1.  **Form nhập liệu đẹp mắt**:

    - Sử dụng `TextField` để nhập Tên và Mô tả.
    - Trang trí khung nhập liệu với viền và đổ bóng (Shadow).

2.  **Cỗ máy tiên tri (Random Logic)**:

    - Hệ thống tự động chọn ngẫu nhiên 1 nghề nghiệp từ danh sách có sẵn.
    - Tự động tạo màu Avatar đại diện ngẫu nhiên.

3.  **Danh sách kết quả**:
    - Hiển thị danh sách các người bạn đã được "xem bói" ngay bên dưới.
    - Danh sách có thể cuộn được khi quá dài.

## 🛠️ Kiến thức lập trình sẽ học

Qua bài thực hành này, các em sẽ nắm vững các Widget và kỹ thuật quan trọng:

### 1. Cấu trúc & Bố cục (Layout)

- **`Column` & `Row`**: Hai widget cơ bản nhất để sắp xếp giao diện dọc và ngang.
- **`Expanded`**: Widget cực kỳ quan trọng để chia không gian màn hình, giúp phần danh sách tự động chiếm hết chỗ trống còn lại.
- **`SingleChildScrollView`**: Tạo khả năng cuộn cho nội dung khi bị tràn màn hình (thay thế cho ListView trong các danh sách đơn giản).

### 2. Nhập liệu & Tương tác

- **`TextField`**: Ô nhập văn bản.
- **`TextEditingController`**: "Cánh tay nối dài" giúp code đọc được những gì người dùng nhập vào.
- **`ElevatedButton`**: Nút bấm để kích hoạt hành động.

### 3. Trang trí (Decoration)

- **`Container` với `BoxDecoration`**: Tạo khung, bo góc (borderRadius), viền (border) và đổ bóng (boxShadow) để giao diện trông chuyên nghiệp hơn.

### 4. Quản lý trạng thái (State Management)

- **`StatelessWidget`**: Chúng ta sẽ xây dựng toàn bộ màn hình chỉ bằng Widget không trạng thái.
- **`ValueNotifier`**: Bí quyết để cập nhật giao diện (thêm người mới vào danh sách) mà không cần dùng `setState`.

:::tip Thử thách nhỏ
Trước khi bắt đầu, hãy thử nghĩ ra 5 nghề nghiệp "kỳ quặc" nhất mà em có thể tưởng tượng (ví dụ: _Chuyên gia ngủ gật_, _Kỹ sư chém gió_...) để đưa vào game nhé!
:::

Sẵn sàng chưa? Hãy chuyển sang bài hướng dẫn để bắt đầu code nào! 🚀
