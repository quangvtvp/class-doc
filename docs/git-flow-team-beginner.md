---
title: Hướng dẫn Git Flow cho làm việc nhóm
---

# Hướng dẫn Git Flow cho làm việc nhóm

## Phần 1: Đẩy code dự án Flutter lên GitHub repo mới

### Bối cảnh
- Bạn đã có một dự án Flutter trên máy tính (đang trỏ đến một repo GitHub cũ).
- Cần đẩy code lên repo mới trên GitHub (repo này đang rỗng).

### Các bước thực hiện

#### Bước 1: Kiểm tra remote hiện tại
```bash
git remote -v
```
Nếu thấy remote đang trỏ đến repo cũ (ví dụ: `origin  git@github.com:quangvtvp/flutter-app-01.git`), bạn cần đổi sang repo mới.

#### Bước 2: Xóa remote cũ (nếu có)
```bash
git remote remove origin
```

#### Bước 3: Thêm remote mới
Dán lệnh sau để trỏ đến repo mới:
```bash
git remote add origin git@github.com:quangvtvp/flashcard-2025.git
```
*(Lưu ý: nhóm Quizz thì hãy sử dụng github repo url của nhóm mình: https://github.com/quangvtvp/quizapp-2025.git)*

#### Bước 4: Đẩy toàn bộ code lên repo mới
```bash
git push -u origin main
```

---

## Phần 2: Làm việc nhóm với Git để tránh conflict

### 1. Quy trình làm việc nhóm cơ bản

#### Bước 1: Luôn pull code mới nhất về trước khi làm
```bash
git pull origin main
```

#### Bước 2: Mỗi người nên làm việc ở folder/module riêng
- Ví dụ: Tạo folder theo tên cá nhân hoặc tên chức năng/module.
- Khi làm việc, chỉ sửa code trong folder/module của mình.

##### Ví dụ cho Flutter:
```
lib/
├── ngoc_home/      # Ngọc làm màn hình Home
├── phong_profile/  # Phong làm màn hình Profile
├── hoang_flashcard/ # Hoàng làm màn hình Flashcard
├── widgets/        # Các widget dùng chung
```

#### Bước 3: Khi hoàn thành, commit và push code
```bash
git add .
git commit -m "Thêm màn hình Home cho Ngoc"
git push origin main
```

#### Bước 4: Lặp lại quy trình: pull code mới nhất về trước khi tiếp tục làm
```bash
git pull origin main
```

### 2. Một số lưu ý giúp tránh conflict
- Không sửa code của người khác nếu không trao đổi trước.
- Chia nhỏ chức năng, mỗi người phụ trách 1 phần rõ ràng.
- Nếu cần làm chung 1 file, nên trao đổi và thống nhất thứ tự làm việc. Ví dụ thống nhất Hoàng làm xong rồi thì Push code lên và Phong sẽ pull code về để làm tiếp.
- Thường xuyên pull code mới nhất về trước khi push.

### 3. Ví dụ thực tế cho nhóm học Flutter
Giả sử nhóm có 3 bạn: Ngọc, Phong, Hoàng. Mỗi bạn tạo 1 folder riêng trong `lib/`:
```
lib/
├── ngoc_home/
├── phong_profile/
├── hoang_flashcard/
```
- Ngọc chỉ làm việc trong `ngoc_home/`, Phong chỉ làm trong `phong_profile/`, Hoàng chỉ làm trong `hoang_flashcard/`.
- Khi xong, mỗi bạn commit và push phần của mình lên nhánh `main`.

### 4. Tổng kết quy trình làm việc nhóm với Git
1. Pull code mới nhất về trước khi làm.
2. Làm việc trong folder/module của mình.
3. Commit và push code lên repo chung.
4. Lặp lại: pull code mới nhất về trước khi tiếp tục.

---

Lưu ý: Đây không phải là git flow làm dự án trong thực tế, chỉ là cách đơn giản để làm việc nhóm trong môi trường học tập.
Khi các em học ở mức nâng cao hơn thì sẽ áp dụng git flow chuyên nghiệp hơn.

Chúc các bạn làm việc nhóm hiệu quả với Git và Flutter!
