// src/Pages/Settings/BankAccounts.jsx
import React from "react";
import Sidebar from "../../components/Sidebar";
import "../../styles/settings/Account_bank.css";
import { useNavigate } from "react-router-dom";

export default function BankAccounts({ isSidebarOpen }) {
  const navigate = useNavigate();

  return (
    <div
      className={`abk-settings-bank-page ${
        isSidebarOpen ? "settings-sidebar-open" : "settings-sidebar-closed"
      }`}
    >
      {/* SIDEBAR */}
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

      {/* MAIN CONTENT */}
      <main className="abk-bank-page">
        <div className="abk-bank-outer">
          <div className="abk-bank-inner">

            {/* HEADER */}
            <div className="abk-bank-header">
              <div className="abk-title-group">
                <h1 className="abk-page-title">Bank Accounts</h1>
                <div className="abk-title-underline"></div>
              </div>

              <button className="abk-add-btn">Add Bank Account</button>
            </div>

            {/* DETAILS CARD */}
            <div className="abk-details-card">
              <div className="abk-card-content">

                <div className="abk-info-row">
                  <p className="abk-label">Account Holder Name :</p>
                </div>

                <div className="abk-info-row">
                  <p className="abk-label">Bank Name :</p>
                  <div className="abk-logo-box">bank logo</div>
                </div>

                <div className="abk-info-row">
                  <p className="abk-label">Account Number :</p>
                </div>

                <div className="abk-info-row">
                  <p className="abk-label">IFSC Code :</p>
                </div>

                <div className="abk-info-row abk-upload-row">
                  <p className="abk-label">Upload Cancelled Cheque :</p>
                  <div className="abk-file-badge">Cancelled Cheque.pdf</div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}
