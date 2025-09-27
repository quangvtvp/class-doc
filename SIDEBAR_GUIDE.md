# Hướng dẫn sử dụng Sidebar

## Tính năng Ẩn/Hiện Sidebar

Website này đã được cấu hình để có thể ẩn/hiện sidebar (menu bên trái) một cách linh hoạt:

### Cách sử dụng:

1. **Trên máy tính**:

   - Tìm nút có 3 gạch ngang ở góc trên bên trái của sidebar
   - Click vào nút đó để ẩn/hiện sidebar
   - Sidebar sẽ trượt mượt mà vào/ra

2. **Trên thiết bị di động**:
   - Docusaurus tự động xử lý sidebar trên mobile
   - Sidebar sẽ hiển thị dưới dạng overlay khi cần

### Tính năng bổ sung:

- **Auto-collapse Categories**: Các danh mục trong sidebar có thể thu gọn tự động
- **Smooth Animation**: Hiệu ứng chuyển động mượt mà khi ẩn/hiện
- **Responsive Design**: Tự động thích ứng với các kích thước màn hình khác nhau
- **Custom Scrollbar**: Thanh cuộn tùy chỉnh cho sidebar

### Lợi ích:

- **Tiết kiệm không gian**: Ẩn sidebar khi cần tập trung vào nội dung
- **Linh hoạt**: Dễ dàng chuyển đổi giữa việc hiện/ẩn sidebar
- **Trải nghiệm tốt**: Hiệu ứng mượt mà, không giật lag

## Cấu hình đã thêm:

1. **docusaurus.config.ts**:

   - Thêm `hideable: true` cho sidebar
   - Thêm `autoCollapseCategories: true`
   - Thêm `sidebarCollapsible: true` cho tất cả docs

2. **custom.css**:

   - Thêm CSS transitions cho hiệu ứng mượt
   - Cải thiện trải nghiệm mobile
   - Custom scrollbar cho sidebar

3. **SidebarToggle Component**:
   - Component React tùy chỉnh (nếu cần mở rộng thêm)
   - Styles riêng cho toggle button
