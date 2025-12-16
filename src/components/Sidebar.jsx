import "./Sidebar.css";

import React from "react";

/**
 * Universal Sidebar Component
 *
 * Props:
 * - isOpen (boolean): controls open / closed state
 * - title (string): sidebar heading
 * - children (JSX): sidebar menu items (links / buttons)
 * - footer (JSX): optional footer content (e.g., logout)
 */
export default function Sidebar({ isOpen, title, children, footer }) {
  return (
    <aside className={`sidebar ${isOpen ? "sidebar-open" : "sidebar-closed"}`}>
      
      {title && <h2 className="sidebar-title">{title}</h2>}

      <nav className="sidebar-menu">
        {children}
      </nav>

      {footer && (
        <div className="logout-container">
          {footer}
        </div>
      )}
    </aside>
  );
}