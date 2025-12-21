import React, { useState } from "react";
import "../../styles/settings/Account_activity.css";
import Sidebar from "../../components/Sidebar";
import { useNavigate, Link } from "react-router-dom";

export default function AccountActivity({ isSidebarOpen }) {
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      {/* ===== SIDEBAR ===== */}
      <Sidebar
        isOpen={isSidebarOpen}
        title="Settings"
        footer={
          <button className="btn-logout" onClick={() => navigate("/")}>
            Log out
          </button>
        }
      >
        <Link to="/setpf" className="sidebar-link">Profile</Link>
        <Link to="/setac" className="sidebar-link active">Account Security</Link>
        <Link to="#" className="sidebar-link">Billing & Payments</Link>
        <Link to="#" className="sidebar-link">Notification Settings</Link>
        <Link to="#" className="sidebar-link">Appearance</Link>
        <Link to="#" className="sidebar-link">User Analytics</Link>
        <Link to="#" className="sidebar-link">Support</Link>
      </Sidebar>

      {/* ===== PAGE WRAPPER (ONLY SHIFTS) ===== */}
      <div
        className={`activity-page ${
          isSidebarOpen ? "settings-sidebar-open" : "settings-sidebar-closed"
        }`}
      >
        {/* ===== CENTERED CONTENT ===== */}
        <div className="activity-container">
          <div className="activity-outer-frame">
            <div className="activity-content-box">

              <h2 className="activity-title">
                Active sessions and Login Activity
              </h2>

              <p className="activity-description">
                All devices where your account is currently logged in and all the
                sessions are shown here. Review your account activity and sign out
                of sessions and devices you don’t recognize.
              </p>

              <div className="two-column-layout">

                <div className="left-column">
                  <h3 className="section-heading">Current Session</h3>

                  <div className="current-session-card">
                    <div className="session-info-line">Chrome on Windows 11</div>
                    <div className="session-info-line">India · IP 103.xxx</div>
                    <div className="session-info-line">Logged in at 12 Aug 2025</div>
                    <span className="status-active">Active (This device)</span>
                  </div>

                  <div className="active-sessions-section">
                    <h3 className="section-heading-white">Active Sessions</h3>

                    <div className="session-card">
                      iPhone 14 · Safari<br />
                      Mumbai · IP xxx<br />
                      Last active: 2 mins ago
                      <button className="session-signout-button">Sign out</button>
                    </div>

                    <div className="session-card">
                      MacBook · Chrome<br />
                      Delhi · IP xxx<br />
                      Last active: 3 days ago
                      <button className="session-signout-button">Sign out</button>
                    </div>
                  </div>
                </div>

                <div className="right-column">
                  <div className="login-activity-section">
                    <h3 className="section-heading-white">Recent Login Activity</h3>

                    <div className="login-entry">
                      <div className="login-date">Aug 10 20XX</div>
                      <div className="login-device">Chrome · Windows</div>
                      <div className="login-status-success">Success</div>
                    </div>

                    <div className="login-entry">
                      <div className="login-date">Sept 19 20XX</div>
                      <div className="login-device">Chrome · Windows</div>
                      <div className="login-status-failed">Failed</div>
                    </div>
                  </div>
                </div>

              </div>

              <div className="bottom-actions">
                <button className="action-button-1">Sign out of all devices</button>
                <Link to="/acchangepass" className="action-button-2">
                  Change Password
                </Link>
              </div>

            </div>
          </div>
        </div>

        {showPopup && (
          <div className="popup-overlay">
            <div className="popup-content">
              <div className="popup-message">Action successful</div>
              <button className="popup-ok-button" onClick={() => setShowPopup(false)}>
                OK
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
