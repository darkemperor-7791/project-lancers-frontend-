import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import "../../styles/settings/Account.css";

export default function SettingsAccount({ isSidebarOpen }) {
  const navigate = useNavigate();

  // simple state: which section is open
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

        {/* ===== RIGHT CONTENT ===== */}
        <div className="content-area">
          <div className="account-container">

            {/* ================= SECURITY ================= */}
            <section className="account-block">
              <button
                className="account-header"
                onClick={() => toggleSection("security")}
              >
                <span>Security and Privacy</span>
                <ChevronDown
                  className={openSection === "security" ? "rotate" : ""}
                />
              </button>

              {openSection === "security" && (
                <div className="account-list">
                  <Link to =  "/acchangepass" className="account-item">Change Password</Link>
                  <Link to = "/acbackup" className="account-item">Add backup phone / e-mail</Link>
                  <Link to = "/acactivity" className="account-item">Session & Login Activity</Link>
                  <Link to = "/actwofa" className="account-item">2-Factor Authentication</Link>
                </div>
              )}
            </section>

            {/* ================= ACCOUNT ================= */}
            <section className="account-block">
              <button
                className="account-header"
                onClick={() => toggleSection("account")}
              >
                <span>Your Payment Methods</span>
                <ChevronDown
                  className={openSection === "account" ? "rotate" : ""}
                />
              </button>

              {openSection === "account" && (
                <div className="account-list">
                  <Link to = "/acbank" className="account-item">Bank Accounts</Link>
                  <Link to = "/acupi" className="account-item">UPI IDs</Link>
                  <Link to = "/acwallet" className="account-item">Saved Wallets</Link>
                </div>
              )}
            </section>

            {/* ================= PAYMENTS ================= */}
            <section className="account-block">
              <button
                className="account-header"
                onClick={() => toggleSection("payment")}
              >
                <span>Account Management</span>
                <ChevronDown
                  className={openSection === "payment" ? "rotate" : ""}
                />
              </button>

              {openSection === "payment" && (
                <div className="account-list">
                  <Link to = "/acdvt" className="account-item danger">Deactivate Account</Link>
                  <Link to = "/acdlt" className="account-item danger">Delete Account</Link>
                  <div className="account-item">Download Account Data</div>
                </div>
              )}
            </section>

          </div>
        </div>
      </main>
    </div>
  );
}
