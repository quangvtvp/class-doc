# Bài 16: Quan hệ dữ liệu và vận hành Cơ sở dữ liệu cho ứng dụng

## Mục tiêu bài học

- Hiểu rõ bản chất của sự lặp lại dữ liệu và vai trò của Khóa ngoại (Foreign Key) trong việc liên kết các bảng.
- Vận dụng nguyên lý quan hệ dữ liệu vào cấu trúc thực tế của một dự án ứng dụng (ví dụ: hệ thống trò chơi, quản lý chi tiêu).
- Sử dụng Supabase CLI kết hợp AI để thiết lập các bảng có mối quan hệ ràng buộc.
- Nắm bắt cơ chế bảo mật cấp dòng (Row Level Security - RLS) để phân quyền truy cập dữ liệu.

## 1. Khóa ngoại (Foreign Key) và thiết kế cơ sở dữ liệu tối ưu

Trở lại ví dụ quản lý lớp học, khi cần xác định thông tin chi tiết của học sinh có điểm số cao nhất trong sổ điểm, người quản lý sử dụng "Mã học sinh" để đối chiếu lại với sổ gốc.

Trong Cơ sở dữ liệu, quá trình liên kết này được thực hiện thông qua **Khóa ngoại (Foreign Key)**. Khóa ngoại là một trường dữ liệu trong bảng này tham chiếu đến Khóa chính (Primary Key) của bảng khác. Sự liên kết này giúp duy trì tính toàn vẹn dữ liệu và loại bỏ sự trùng lặp (ví dụ, không cần lưu lại tên và ngày sinh của học sinh trong bảng lưu điểm số).

## 2. Xây dựng cấu trúc dữ liệu cho ứng dụng thực tế

Khi chuyển đổi từ mô hình quản lý lớp học sang mô hình phát triển ứng dụng (như một trò chơi hoặc ứng dụng quản lý cá nhân), nguyên lý tổ chức dữ liệu vẫn giữ nguyên:

| Mô hình quản lý trường học | Mô hình Ứng dụng/Trò chơi |
| :--- | :--- |
| Sổ chủ nhiệm (Danh sách học sinh) | Bảng người dùng (`users` / `profiles`) |
| Sổ điểm (Lịch sử điểm số) | Bảng lịch sử thao tác (`game_matches` / `transactions`) |

Một người dùng (User) có thể thực hiện nhiều thao tác hoặc tham gia nhiều ván đấu, tạo thành mối quan hệ 1-Nhiều (One-to-Many). Bảng lịch sử chỉ cần lưu trữ định danh người dùng (`user_id`) thông qua cơ chế Khóa ngoại thay vì sao chép toàn bộ hồ sơ.

## 3. Khởi tạo quan hệ dữ liệu bằng Supabase CLI và AI

Quy trình thiết lập mối quan hệ giữa các bảng yêu cầu định nghĩa rõ ràng về Khóa ngoại và các ràng buộc đi kèm.

**Bước 1: Viết Prompt thiết lập bảng liên kết**

*Mẫu yêu cầu (Prompt):*
```text
Tôi đã có bảng "profiles" đại diện cho người dùng.
Hãy viết mã SQL Migration cho Supabase để tạo bảng "game_matches" nhằm lưu trữ lịch sử trận đấu:
- id: UUID, Primary Key.
- player_id: UUID, Foreign Key tham chiếu tới bảng profiles(id). Thiết lập ON DELETE CASCADE (xóa lịch sử khi người dùng bị xóa).
- result: Text (ví dụ: 'win', 'loss', 'draw').
- duration_seconds: Integer.
- created_at: Timestamp.
```

**Bước 2: Triển khai qua CLI**
1. Tạo tệp migration mới: `supabase migration new create_game_matches`
2. Cập nhật mã SQL và đồng bộ: `supabase db push`
3. Truy cập Supabase Portal (phần Schema Visualizer) để quan sát sơ đồ liên kết giữa hai bảng. Sơ đồ này cung cấp cái nhìn tổng quan về cấu trúc quan hệ đã được thiết lập.

## 4. Quản lý quyền truy cập dữ liệu (Row Level Security)

Trong một hệ thống ứng dụng, không phải mọi dữ liệu đều có thể được truy cập tự do. 

Cơ chế **Row Level Security (RLS)** trên Supabase cho phép thiết lập các chính sách bảo mật chi tiết đến từng bản ghi (dòng dữ liệu):
- Dữ liệu công khai (Public): Bảng xếp hạng chung (Leaderboard) cho phép mọi người dùng xem, nhưng chỉ hệ thống mới có quyền ghi.
- Dữ liệu cá nhân (Private): Lịch sử cá nhân (nhật ký, giao dịch) chỉ cho phép chủ sở hữu tài khoản (thông qua đối chiếu `user_id` với phiên đăng nhập hiện tại) được quyền xem, sửa hoặc xóa.

Việc thiết lập RLS đảm bảo dữ liệu được cách ly an toàn, ngăn chặn rủi ro rò rỉ hoặc can thiệp trái phép giữa các người dùng.

## 5. Bài tập thực hành

**Yêu cầu:** 
Mỗi học sinh tự phân tích ứng dụng cá nhân (dự án từ khóa 1) và thực hiện các bước sau:
1. Xác định hai bảng dữ liệu chính cần có (ví dụ: Bảng người dùng và Bảng nội dung phát sinh như sách đã lưu, chi tiêu hàng ngày).
2. Viết yêu cầu (Prompt) để AI khởi tạo mã SQL cho hai bảng, bao gồm Khóa chính và Khóa ngoại.
3. Thực thi mã thông qua Supabase CLI và kiểm tra cấu trúc trên Supabase Portal.
