import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import "../../styles/settings/Account.css";

export default function SettingsAccount({ isSidebarOpen }) {
  const navigate = useNavigate();
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (sectionName) => {
    setOpenSection(openSection === sectionName ? null : sectionName);
  };

  return (
    <div
      className={`accpg-page ${
        isSidebarOpen ? "accpg-sidebar-open" : "accpg-sidebar-closed"
      }`}
      style={{ paddingTop: "130px" }}
    >
      <main className="accpg-main">

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
        <div className="accpg-content">
          <div className="accpg-container">

            {/* ================= SECURITY ================= */}
            <section className="accpg-block">
              <button
                className="accpg-header"
                onClick={() => toggleSection("security")}
              >
                <span>Security and Privacy</span>
                <ChevronDown
                  className={openSection === "security" ? "accpg-rotate" : ""}
                />
              </button>

              {openSection === "security" && (
                <div className="accpg-list">
                  <Link to="/acchangepass" className="accpg-item">Change Password</Link>
                  <Link to="/acbackup" className="accpg-item">Add backup phone / e-mail</Link>
                  <Link to="/acactivity" className="accpg-item">Session & Login Activity</Link>
                  <Link to="/actwofa" className="accpg-item">2-Factor Authentication</Link>
                </div>
              )}
            </section>

            {/* ================= ACCOUNT ================= */}
            <section className="accpg-block">
              <button
                className="accpg-header"
                onClick={() => toggleSection("account")}
              >
                <span>Your Payment Methods</span>
                <ChevronDown
                  className={openSection === "account" ? "accpg-rotate" : ""}
                />
              </button>

              {openSection === "account" && (
                <div className="accpg-list">
                  <Link to="/acbank" className="accpg-item">Bank Accounts</Link>
                  <Link to="/acupi" className="accpg-item">UPI IDs</Link>
                  <Link to="/acwallet" className="accpg-item">Saved Wallets</Link>
                </div>
              )}
            </section>

            {/* ================= PAYMENTS ================= */}
            <section className="accpg-block">
              <button
                className="accpg-header"
                onClick={() => toggleSection("payment")}
              >
                <span>Account Management</span>
                <ChevronDown
                  className={openSection === "payment" ? "accpg-rotate" : ""}
                />
              </button>

              {openSection === "payment" && (
                <div className="accpg-list">
                  <Link to="/acdvt" className="accpg-item accpg-danger">Deactivate Account</Link>
                  <Link to="/acdlt" className="accpg-item accpg-danger">Delete Account</Link>
                  <div className="accpg-item">Download Account Data</div>
                </div>
              )}
            </section>

          </div>
        </div>
      </main>
    </div>
  );
}
