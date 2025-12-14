import React from 'react';

export default function Sidebar({ isOpen }) {
  const styles = `
    /* Sidebar Container */
    .sidebar-component {
      background-color: #BCC6CC;
      display: flex;
      flex-direction: column;
      flex-shrink: 0;
      overflow: hidden; /* Hides content when width shrinks */
      white-space: nowrap; /* Prevents text wrapping during transition */
      
      /* Transition Logic */
      transition: width 0.3s ease-in-out, padding 0.3s ease-in-out, opacity 0.2s ease-in-out;
    }

    /* State: Open */
    .sidebar-component.open {
      width: 280px;
      padding: 2rem 1.5rem;
      opacity: 1;
    }

    /* State: Closed */
    .sidebar-component.closed {
      width: 0px;
      padding: 0;
      opacity: 0;
    }

    /* Title */
    .sidebar-title {
      font-size: 2.25rem;
      font-family: serif; 
      margin-bottom: 2rem;
      color: #000;
      font-weight: 500;
    }

    /* Menu Layout */
    .sidebar-menu {
      display: flex;
      flex-direction: column;
      gap: 1.25rem;
      flex: 1;
    }

    /* Links */
    .sidebar-link {
      text-decoration: none;
      color: #111;
      font-size: 1.1rem;
      font-weight: 400;
      transition: transform 0.2s;
      display: inline-block;
    }

    .sidebar-link:hover {
      transform: translateX(4px);
    }

    .sidebar-link.active {
      text-decoration: underline;
      text-underline-offset: 4px;
    }

    /* Footer */
    .sidebar-footer {
      margin-top: auto;
      border-top: 1px solid rgba(255,255,255,0.5);
      padding-top: 1rem;
    }

    /* Logout Button */
    .logout-btn {
      background: none;
      border: none;
      font-size: 1.1rem;
      color: #111;
      cursor: pointer;
      width: 100%;
      text-align: center;
      padding: 0.5rem;
      transition: background-color 0.2s;
    }

    .logout-btn:hover {
      background-color: rgba(0,0,0,0.05);
    }
  `;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: styles }} />
      <aside className={`sidebar-component ${isOpen ? 'open' : 'closed'}`}>
        <h1 className="sidebar-title">Settings</h1>
        
        <nav className="sidebar-menu">
          <a href="#" className="sidebar-link active">Profile</a>
          <a href="#" className="sidebar-link">Billing and Payments</a>
          <a href="#" className="sidebar-link">Account</a>
          <a href="#" className="sidebar-link">Notification Settings</a>
          <a href="#" className="sidebar-link">Appearance</a>
          <a href="#" className="sidebar-link">Account Analytics</a>
          <a href="#" className="sidebar-link">Support</a>
        </nav>

        <div className="sidebar-footer">
          <button className="logout-btn">Log out</button>
        </div>
      </aside>
    </>
  );
}