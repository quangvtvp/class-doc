import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  lessonsSidebar: [
    {
      type: 'doc',
      id: 'index',
      label: '📚 Tổng quan Bài Giảng',
    },
    {
      type: 'category',
      label: 'Phần 1: Cơ bản về Dart',
      items: [
        {
          type: 'doc',
          id: 'Bai-01-Gioi-Thieu-Lap-Trinh-Dart',
          label: 'Bài 1: Giới thiệu lập trình Dart',
        },
        {
          type: 'doc',
          id: 'Bai-02-Bien-Kieu-Du-Lieu-Dart',
          label: 'Bài 2: Biến và kiểu dữ liệu',
        },
        {
          type: 'doc',
          id: 'Bai-03-Dieu-kien-if-else',
          label: 'Bài 3: Điều kiện if-else',
        },
        {
          type: 'doc',
          id: 'Bai-04-Vong-lap-co-ban',
          label: 'Bài 4: Vòng lặp cơ bản',
        },
      ],
    },
    {
      type: 'category',
      label: 'Phần 2: Cấu trúc dữ liệu',
      items: [
        {
          type: 'doc',
          id: 'Bai-05-Collection-trong-Dart',
          label: 'Bài 5: Collection trong Dart',
        },
        {
          type: 'doc',
          id: 'Bai-06-function',
          label: 'Bài 6: Hàm trong Dart',
        },
      ],
    },
  ],
};

export default sidebars;