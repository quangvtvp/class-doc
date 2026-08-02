---
title: Đề thi thực hành — Agentic Software Development
---
# Đề thi thực hành — Agentic Software Development

> **Hình thức:** thực hành trên máy, được dùng AI agent
> **Thời gian:** 120 phút — **Tổng điểm:** 100 (+10 điểm thưởng)

## Đề bài

Xây dựng **chatbot tư vấn hướng nghiệp** giúp học sinh THPT chọn ngành đại học:

- Bot trò chuyện tiếng Việt, gợi ý ngành học phù hợp (Gemini API)
- Deploy công khai lên GitHub Pages

## Mockup giao diện

👉 [Mở mockup tương tác](pathname:///mockups/career-advisor-bot.html) — bản demo click được, bot trả lời theo kịch bản mẫu.

```text
┌────────────────────────────────────┐
│ Tư vấn hướng nghiệp                │
├────────────────────────────────────┤
│ (Bot)  Chào bạn! Bạn thích môn     │
│        học nào nhất?               │
│                                    │
│     Mình thích Toán, Tin học (Bạn) │
│                                    │
│ (Bot)  ... đang trả lời            │
├────────────────────────────────────┤
│ [ Nhập tin nhắn...          ][Gửi] │
└────────────────────────────────────┘
```

## Yêu cầu

### 1. Khởi tạo project trên GitHub — GitHub CLI (15đ)

- Tạo Flutter project, push lên GitHub bằng `gh repo create` (không dùng web UI)
- Có `.gitignore` chuẩn Flutter, `README.md`, commit message rõ nghĩa

**Keyword:** `gh auth login` · `gh repo create --public --source=. --push`

### 2. UI chat (25đ)

- Danh sách tin nhắn dạng bubble, phân biệt người dùng / bot
- Ô nhập + nút gửi; loading khi chờ AI, khóa nút gửi, tự cuộn xuống cuối

**Keyword:** `ListView.builder` · chat bubble · `TextField` · `ScrollController` · loading state

### 3. Chatbot Gemini + system prompt tư vấn ngành học (35đ)

- System prompt: vai trò **tư vấn viên hướng nghiệp** tiếng Việt; **hỏi ngược** về sở thích, môn thế mạnh, tính cách trước khi kết luận; gợi ý **2–3 ngành** kèm lý do và khối thi; **từ chối** chủ đề ngoài hướng nghiệp
- Multi-turn: bot nhớ thông tin các lượt trước (history role `user` / `model`)
- Xử lý lỗi API, không crash; API key qua `--dart-define`, không commit

**Keyword:** `generateContent` · `systemInstruction` · conversation history · `--dart-define=GEMINI_API_KEY`

### 4. Deploy GitHub Pages — GitHub Actions + GitHub CLI (25đ)

- Workflow tự build và deploy khi push: `flutter build web --release --base-href "/ten-repo/"`
- Secret cấp bằng `gh secret set`
- Workflow chạy xanh; link Pages chat và nhận tư vấn được ngay

**Keyword:** `deploy.yml` · `actions/deploy-pages` · `gh secret set` · `gh run watch`

## Điểm thưởng — Login Supabase (+10đ, không bắt buộc)

- Thiết lập bằng Supabase CLI: `supabase init`, `supabase link`
- Đăng nhập / đăng ký email + mật khẩu, đăng xuất; chưa login thì không vào được màn chat
- Dùng `anon public key` qua `--dart-define`; **không** commit `service_role key`

**Keyword:** `supabase_flutter` · `Supabase.initialize` · `signInWithPassword` · `signOut` · `session`

## Nộp bài

1. Link repo GitHub (public)
2. Link app trên GitHub Pages
3. Khuyến khích: file `PROMPTS.md` ghi các prompt chính đã dùng và cách kiểm chứng
4. Nếu làm phần thưởng: kèm tài khoản demo để giám khảo đăng nhập

## Quy định

- Không copy repo của bạn khác — lịch sử commit sẽ được kiểm tra
- Lộ API key (Gemini, Supabase `service_role`) trong repo: **trừ 10 điểm**
- Có thể vấn đáp 2–3 câu về code; không giải thích được phần nào thì không tính điểm phần đó
