import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialsSidebar: [
    {
      type: 'doc',
      id: 'index',
      label: '🚀 Tổng quan Tutorials',
    },
    {
      type: 'category',
      label: 'Flutter Tutorials',
      items: [
        {
          type: 'doc',
          id: 'calculator-tutorial',
          label: 'Calculator Tutorial',
        },
        {
          type: 'doc',
          id: 'navigation-pattern',
          label: 'Navigation Pattern',
        },
        {
          type: 'doc',
          id: 'networking-part1',
          label: 'Networking Part 1',
        },
        {
          type: 'doc',
          id: 'networking-part2',
          label: 'Networking Part 2',
        },
      ],
    },
    {
      type: 'category',
      label: 'Development Tools',
      items: [
        {
          type: 'doc',
          id: 'git-flow-team-beginner',
          label: 'Git Flow for Beginners',
        },
        {
          type: 'doc',
          id: 'supabase',
          label: 'Supabase Guide',
        },
      ],
    },
  ],
};

export default sidebars;