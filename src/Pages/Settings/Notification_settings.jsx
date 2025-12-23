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
          <div className="ns-container">

            {/* PROJECTS */}
            <section className="ns-block">
              <button className="ns-header" onClick={() => toggleSection("projects")}>
                <span>Project & Client Notifications</span>
                <ChevronDown className={openSection === "projects" ? "rotate" : ""} />
              </button>

              {openSection === "projects" && (
                <div className="ns-list">
                  {[
                    "New Project Invitations",
                    "Project Deadlines & Reminders",
                    "Client Messages / Chat Alerts",
                    "Proposal Updates — Accepted / Rejected",
                  ].map(text => (
                    <label key={text} className="ns-item ns-checkbox-item">
                      <input type="checkbox" />
                      <span>{text}</span>
                    </label>
                  ))}
                </div>
              )}
            </section>

            {/* PAYMENTS */}
            <section className="ns-block">
              <button className="ns-header" onClick={() => toggleSection("payments")}>
                <span>Payments and Transactions</span>
                <ChevronDown className={openSection === "payments" ? "rotate" : ""} />
              </button>

              {openSection === "payments" && (
                <div className="ns-list">
                  {[
                    "Payment Received — Tokens or money added to wallet",
                    "Withdrawal Status Updates — Withdrawal success or failure",
                    "Token Purchase Confirmation",
                    "Billing or Invoice Alerts",
                  ].map(text => (
                    <label key={text} className="ns-item ns-checkbox-item">
                      <input type="checkbox" />
                      <span>{text}</span>
                    </label>
                  ))}
                </div>
              )}
            </section>

            {/* SECURITY */}
            <section className="ns-block">
              <button className="ns-header" onClick={() => toggleSection("security")}>
                <span>Account and Security</span>
                <ChevronDown className={openSection === "security" ? "rotate" : ""} />
              </button>

              {openSection === "security" && (
                <div className="ns-list">
                  {[
                    "Password Change Confirmation",
                    "Security Alerts — new device login",
                    "Promotional Offers",
                    "Weekly Summary Emails",
                  ].map(text => (
                    <label key={text} className="ns-item ns-checkbox-item">
                      <input type="checkbox" />
                      <span>{text}</span>
                    </label>
                  ))}
                </div>
              )}
            </section>

            {/* SOURCES */}
            <section className="ns-block ns-sources-block">
              <div className="ns-sources-header">Notification sources :</div>

              <div className="ns-sources-list">
                {["E-mail", "SMS", "Browser Push Notifications"].map(src => (
                  <label key={src} className="ns-source-item">
                    <input type="checkbox" />
                    <span>{src}</span>
                  </label>
                ))}
              </div>
            </section>

          </div>
        </div>
      </main>
    </div>
  );
}
