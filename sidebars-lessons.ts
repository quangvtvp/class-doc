import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  lessonsSidebar: [
    {
      type: 'doc',
      id: 'index',
      label: 'Tổng quan Bài Giảng',
    },
    {
      type: 'category',
      label: 'Phần 1: Làm quen với lập trình',
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'Bai-01-Gioi-Thieu-Lap-Trinh-Dart',
          label: 'Buổi 1: Giới thiệu lập trình',
        },
        {
          type: 'doc',
          id: 'Bai-02-Bien-Kieu-Du-Lieu-Dart',
          label: 'Buổi 2: Biến và kiểu dữ liệu',
        },
        {
          type: 'doc',
          id: 'Bai-03-Dieu-kien-if-else',
          label: 'Buổi 3: Điều kiện if/else',
        },
        {
          type: 'doc',
          id: 'Bai-04-Vong-lap-co-ban',
          label: 'Buổi 4: Vòng lặp cơ bản',
        },
        {
          type: 'doc',
          id: 'Bai-05-Collection-trong-Dart',
          label: 'Bài 5: Collection trong Dart',
        },
        {
          type: 'doc',
          id: 'Bai-06-function',
          label: 'Buổi 6: Functions (Hàm)',
        },
        {
          type: 'doc',
          id: 'bai-07-object-and-class',
          label: 'Buổi 7: Object và Class',
        },
        {
          type: 'doc',
          id: 'Bai-11-async',
          label: 'Lập trình bất đồng bộ',
        },
      ],
    },
    {
      type: 'category',
      label: 'Phần 2: Lập trình Flutter',
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'flutter-01-basic-structure-layout',
          label: 'Flutter application',
        },
        {
          type: 'category',
          label: 'Bài 13: Mini Game Dự Đoán Nghề Nghiệp',
          collapsed: false,
          items: [
            {
              type: 'doc',
              id: 'Bai-13-Mini-Game-Du-Doan-Nghe-Nghiep/intro',
              label: '1. Giới thiệu',
            },
            {
              type: 'doc',
              id: 'Bai-13-Mini-Game-Du-Doan-Nghe-Nghiep/stateful_widget_guide',
              label: 'Kiến thức bổ trợ: StatefulWidget',
            },
            {
              type: 'doc',
              id: 'Bai-13-Mini-Game-Du-Doan-Nghe-Nghiep/tutorial',
              label: '2. Hướng dẫn Code',
            },
          ],
        },
        {
          type: 'doc',
          id: 'Bai-15-listview-gridview',
          label: 'Bài 15: ListView & GridView',
        },
        {
          type: 'doc',
          id: 'Bai-16-memory-card-game',
          label: 'Bài 16: Memory Card Game',
        },
        {
          type: 'doc',
          id: 'Bai-17-navigation-data-passing',
          label: 'Bài 17: Navigation & Data Passing',
        },
        {
          type: 'doc',
          id: 'Bai-18-http-request',
          label: 'Bài 18: HTTP Request',
        },
        {
          type: 'doc',
          id: 'Bai-19-Lap-Trinh-Cong-Tac-GitHub-Copilot',
          label: 'Bài 19: Lập Trình Cộng Tác với GitHub Copilot',
        },
        {
          type: 'doc',
          id: 'end-course-project',
          label: 'Dự án cuối khoá',
        }
      ],
    },
    {
      type: 'category',
      label: 'Agentic software development',
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'agentic software development/Bai-01-Tu-Game-Caro-Offline-Den-He-Thong-Ung-Dung',
          label: 'Buổi 1: Tổng quan kiến trúc hệ thống',
        },
        {
          type: 'doc',
          id: 'agentic software development/Bai-02-Ra-Soat-Project-Khoa-1-Va-Dinh-Huong-Nang-Cap',
          label: 'Buổi 2: Rà soát project khóa 1',
        },
        {
          type: 'doc',
          id: 'agentic software development/Bai-03-Thiet-Lap-Backend-Foundation-Va-Auth-Co-Ban',
          label: 'Buổi 3: Backend foundation và Supabase Auth',
        },
        {
          type: 'doc',
          id: 'agentic software development/Bai-05-Prompt-Engineering-Co-Ban-Cho-Xay-Dung-Ung-Dung',
          label: 'Buổi 5: Prompt engineering cơ bản',
        },
      ],
    },
  ],
};

export default sidebars;