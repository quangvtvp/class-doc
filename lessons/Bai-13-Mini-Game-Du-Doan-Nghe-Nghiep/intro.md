---
sidebar_position: 1
title: "Giới thiệu: AI Gợi Ý Ngành Học"
description: Tổng quan về ứng dụng AI phân tích và gợi ý ngành nghề phù hợp
---

# AI Gợi Ý Ngành Học

Chào các em! Hôm nay chúng ta sẽ cùng nhau xây dựng một ứng dụng thực tế: **AI Gợi Ý Ngành Học**.

Đây là một ứng dụng giúp các em thực hành kỹ năng xây dựng giao diện (UI), quản lý trạng thái (State), và tích hợp API trong Flutter.

## Ứng dụng này làm gì?

Ứng dụng hoạt động như một "cố vấn hướng nghiệp AI":

1. Người dùng nhập tên và đặc điểm của học sinh.
2. Bấm nút "Phân tích với AI".
3. Ứng dụng gọi Gemini API để phân tích và đưa ra gợi ý ngành học phù hợp.

### Các tính năng chính

1. **Form nhập liệu**: Sử dụng `TextField` để nhập Tên và Đặc điểm của học sinh.

2. **Tích hợp AI (Gemini API)**: Gọi API để nhận gợi ý ngành học dựa trên đặc điểm đã nhập.

3. **Danh sách kết quả**: Hiển thị danh sách các học sinh đã được phân tích cùng với kết quả gợi ý.

---

## Kiến thức lập trình sẽ học

Qua bài thực hành này, các em sẽ nắm vững các Widget và kỹ thuật quan trọng:

### 1. Cấu trúc và Bố cục (Layout)

| Widget | Mô tả |
|--------|-------|
| `Scaffold` | Khung chính của màn hình, chứa AppBar và body |
| `Column` | Sắp xếp các widget theo chiều dọc |
| `Expanded` | Chiếm hết không gian còn lại trong Column/Row |
| `SingleChildScrollView` | Cho phép cuộn nội dung khi tràn màn hình |
| `Padding` | Thêm khoảng cách xung quanh widget |
| `SizedBox` | Tạo khoảng cách cố định giữa các widget |

### 2. Widget hiển thị dữ liệu

| Widget | Mô tả |
|--------|-------|
| `Card` | Thẻ có đổ bóng, thường dùng để nhóm thông tin |
| `ListTile` | Widget chuẩn để hiển thị một dòng thông tin (leading, title, subtitle) |
| `CircleAvatar` | Hiển thị avatar hình tròn |
| `Text` | Hiển thị văn bản |

### 3. Nhập liệu và Tương tác

| Widget/Class | Mô tả |
|--------------|-------|
| `TextField` | Ô nhập văn bản |
| `TextEditingController` | Đọc và quản lý nội dung TextField |
| `ElevatedButton` | Nút bấm để kích hoạt hành động |
| `ScaffoldMessenger.showSnackBar` | Hiển thị thông báo ở cuối màn hình |

### 4. Quản lý trạng thái (State Management)

| Khái niệm | Mô tả |
|-----------|-------|
| `StatelessWidget` | Widget không có trạng thái, chỉ hiển thị UI tĩnh |
| `StatefulWidget` | Widget có trạng thái, UI có thể thay đổi |
| `setState()` | Hàm báo Flutter vẽ lại UI khi dữ liệu thay đổi |

### 5. Xử lý bất đồng bộ (Async)

| Khái niệm | Mô tả |
|-----------|-------|
| `async/await` | Cú pháp xử lý tác vụ bất đồng bộ |
| `Future` | Đại diện cho một giá trị sẽ có trong tương lai |
| `showDialog` | Hiển thị dialog (dùng cho loading) |
| `mounted` | Kiểm tra widget còn tồn tại trước khi dùng context |

---

## Lộ trình học

Chúng ta sẽ xây dựng ứng dụng theo 5 phiên bản, mỗi phiên bản thêm một khái niệm mới:

| Version | Nội dung | Kiến thức chính |
|---------|----------|-----------------|
| V1 | Form tĩnh | StatelessWidget, TextField, Button |
| V2 | Thêm danh sách cứng | for loop, ListTile, Expanded |
| V3 | Danh sách động | StatefulWidget, setState, TextEditingController |
| V4 | Thêm loading | async/await, showDialog, mounted |
| V5 | Tích hợp AI | Gọi API, xử lý lỗi với try/catch |

---

Sẵn sàng chưa? Hãy chuyển sang bài hướng dẫn để bắt đầu code nào!
