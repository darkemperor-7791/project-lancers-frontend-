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
        <a href="/setpf" className="sidebar-link">Profile</a>
        <a href="/setac" className="sidebar-link active">Account Security</a>
        <a href="/bilpay" className="sidebar-link">Billing & Payments</a>
        <a href="/notiset" className="sidebar-link">Notification Settings</a>
        <a href="/appear" className="sidebar-link">Appearance</a>
        <a href="/useranal" className="sidebar-link">User Analytics</a>
        <a href="/support" className="sidebar-link">Support</a>
      </Sidebar>

      {/* ===== PAGE WRAPPER ===== */}
      <div
        className={`aa-activity-page ${
          isSidebarOpen ? "settings-sidebar-open" : "settings-sidebar-closed"
        }`}
      >
        <div className="aa-activity-container">
          <div className="aa-activity-outer-frame">
            <div className="aa-activity-content-box">

              <h2 className="aa-activity-title">
                Active sessions and Login Activity
              </h2>

              <p className="aa-activity-description">
                All devices where your account is currently logged in and all the
                sessions are shown here. Review your account activity and sign out
                of sessions and devices you don’t recognize.
              </p>

              <div className="aa-two-column-layout">

                <div className="aa-left-column">
                  <h3 className="aa-section-heading">Current Session</h3>

                  <div className="aa-current-session-card">
                    <div className="aa-session-info-line">Chrome on Windows 11</div>
                    <div className="aa-session-info-line">India · IP 103.xxx</div>
                    <div className="aa-session-info-line">Logged in at 12 Aug 2025</div>
                    <span className="aa-status-active">Active (This device)</span>
                  </div>

                  <div className="aa-active-sessions-section">
                    <h3 className="aa-section-heading-white">Active Sessions</h3>

                    <div className="aa-session-card">
                      iPhone 14 · Safari<br />
                      Mumbai · IP xxx<br />
                      Last active: 2 mins ago
                      <button className="aa-session-signout-button">Sign out</button>
                    </div>

                    <div className="aa-session-card">
                      MacBook · Chrome<br />
                      Delhi · IP xxx<br />
                      Last active: 3 days ago
                      <button className="aa-session-signout-button">Sign out</button>
                    </div>
                  </div>
                </div>

                <div className="aa-right-column">
                  <div className="aa-login-activity-section">
                    <h3 className="aa-section-heading-white">Recent Login Activity</h3>

                    <div className="aa-login-entry">
                      <div className="aa-login-date">Aug 10 20XX</div>
                      <div className="aa-login-device">Chrome · Windows</div>
                      <div className="aa-login-status-success">Success</div>
                    </div>

                    <div className="aa-login-entry">
                      <div className="aa-login-date">Sept 19 20XX</div>
                      <div className="aa-login-device">Chrome · Windows</div>
                      <div className="aa-login-status-failed">Failed</div>
                    </div>
                  </div>
                </div>

              </div>

              <div className="aa-bottom-actions">
                <button className="aa-action-button-1">Sign out of all devices</button>
                <Link to="/acchangepass" className="aa-action-button-2">
                  Change Password
                </Link>
              </div>

            </div>
          </div>
        </div>

        {showPopup && (
          <div className="aa-popup-overlay">
            <div className="aa-popup-content">
              <div className="aa-popup-message">Action successful</div>
              <button
                className="aa-popup-ok-button"
                onClick={() => setShowPopup(false)}
              >
                OK
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
