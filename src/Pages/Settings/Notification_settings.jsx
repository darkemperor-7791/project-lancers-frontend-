import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import "../../styles/settings/Notification_settings.css";

export default function NotificationSettings({ isSidebarOpen }) {
  const navigate = useNavigate();
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (sectionName) => {
    setOpenSection(openSection === sectionName ? null : sectionName);
  };

  return (
    <div
      className={`settings-profile-page ${
        isSidebarOpen ? "settings-sidebar-open" : "settings-sidebar-closed"
      }`}
      style={{ paddingTop: "130px" }}
    >
      <main className="main-content">
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
          <a href="/setac" className="sidebar-link">Account Security</a>
          <a href="/bilpay" className="sidebar-link">Billing & Payments</a>
          <a href="/notiset" className="sidebar-link active">Notification Settings</a>
          <a href="/appear" className="sidebar-link">Appearance</a>
          <a href="/useranal" className="sidebar-link">User Analytics</a>
          <a href="/support" className="sidebar-link">Support</a>
        </Sidebar>

        <div className="content-area">
          <div className="account-container">

            {/* PROJECT & CLIENT */}
            <section className="account-block">
              <button className="account-header" onClick={() => toggleSection("projects")}>
                <span>Project & Client Notifications</span>
                <ChevronDown className={openSection === "projects" ? "rotate" : ""} />
              </button>

              {openSection === "projects" && (
                <div className="account-list">
                  <label className="account-item checkbox-item">
                    <input type="checkbox" />
                    <span>New Project Invitations</span>
                  </label>
                  <label className="account-item checkbox-item">
                    <input type="checkbox" />
                    <span>Project Deadlines & Reminders</span>
                  </label>
                  <label className="account-item checkbox-item">
                    <input type="checkbox" />
                    <span>Client Messages / Chat Alerts</span>
                  </label>
                  <label className="account-item checkbox-item">
                    <input type="checkbox" />
                    <span>Proposal Updates — Accepted / Rejected</span>
                  </label>
                </div>
              )}
            </section>

            {/* PAYMENTS */}
            <section className="account-block">
              <button className="account-header" onClick={() => toggleSection("payments")}>
                <span>Payments and Transactions</span>
                <ChevronDown className={openSection === "payments" ? "rotate" : ""} />
              </button>

              {openSection === "payments" && (
                <div className="account-list">
                  <label className="account-item checkbox-item">
                    <input type="checkbox" />
                    <span>Payment Received — Tokens or money added to wallet</span>
                  </label>
                  <label className="account-item checkbox-item">
                    <input type="checkbox" />
                    <span>Withdrawal Status Updates  — Withdrawal success or failure</span>
                  </label>
                  <label className="account-item checkbox-item">
                    <input type="checkbox" />
                    <span>Token Purchase Confirmation  — when tokens are bought successfully</span>
                  </label>
                  <label className="account-item checkbox-item">
                    <input type="checkbox" />
                    <span>Billing or Invoice Alerts  — when a new invoice is generated</span>
                  </label>
                </div>
              )}
            </section>

            {/* ACCOUNT & SECURITY */}
            <section className="account-block">
              <button className="account-header" onClick={() => toggleSection("security")}>
                <span>Account and Security</span>
                <ChevronDown className={openSection === "security" ? "rotate" : ""} />
              </button>

              {openSection === "security" && (
                <div className="account-list">
                  <label className="account-item checkbox-item">
                    <input type="checkbox" />
                    <span>Password Change Confirmation — Confirmation of password update</span>
                  </label>
                  <label className="account-item checkbox-item">
                    <input type="checkbox" />
                    <span>Security Alerts — login from new device, password change, etc.(New device, login)</span>
                  </label>
                  <label className="account-item checkbox-item">
                    <input type="checkbox" />
                    <span>Promotional Offers — token discounts or feature trials</span>
                  </label>
                  <label className="account-item checkbox-item">
                    <input type="checkbox" />
                    <span>Weekly Summary Emails — short recap of activity and earnings</span>
                  </label>
                </div>
              )}
            </section>

            {/* ===== STATIC NOTIFICATION SOURCES (NEW) ===== */}
            <section className="account-block notification-sources-block">
              <div className="notification-sources-header">
                Notification sources :
              </div>

              <div className="notification-sources-list">
                <label className="notification-source-item">
                  <input type="checkbox" />
                  <span>E-mail</span>
                </label>

                <label className="notification-source-item">
                  <input type="checkbox" />
                  <span>SMS</span>
                </label>

                <label className="notification-source-item">
                  <input type="checkbox" />
                  <span>Browser Push Notifications</span>
                </label>
              </div>
            </section>

          </div>
        </div>
      </main>
    </div>
  );
}
