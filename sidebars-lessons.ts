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
          id: 'Bai-14-listview-gridview',
          label: 'Bài 14: ListView & GridView',
        },
        {
          type: 'doc',
          id: 'Bai-15-memory-card-game',
          label: 'Bài 15: Memory Card Game',
        },
      ],
    },
  ],
};

export default sidebars;