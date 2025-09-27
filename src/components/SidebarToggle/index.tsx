import React from 'react';
import { useThemeConfig } from '@docusaurus/theme-common';
import './styles.css';

interface SidebarToggleProps {
  onClick?: () => void;
  isOpen?: boolean;
}

const SidebarToggle: React.FC<SidebarToggleProps> = ({ onClick, isOpen = false }) => {
  return (
    <button
      className={`sidebar-toggle ${isOpen ? 'sidebar-toggle--open' : ''}`}
      onClick={onClick}
      aria-label={isOpen ? 'Ẩn sidebar' : 'Hiện sidebar'}
      title={isOpen ? 'Ẩn sidebar' : 'Hiện sidebar'}
    >
      <div className="sidebar-toggle__icon">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </button>
  );
};

export default SidebarToggle;