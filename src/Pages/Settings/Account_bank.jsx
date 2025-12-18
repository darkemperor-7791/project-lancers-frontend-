// src/Pages/Settings/BankAccounts.jsx
import React from "react";
import Sidebar from "../../components/Sidebar";
import "../../styles/settings/Account_bank.css";

export default function BankAccounts({ isSidebarOpen }) {
  return (
    <div
      className={`settings-bank-page ${
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
              <a href="#" className="sidebar-link">Billing & Payments</a>
              <a href="#" className="sidebar-link">Notification Settings</a>
              <a href="#" className="sidebar-link">Appearance</a>
              <a href="#" className="sidebar-link">User Analytics</a>
              <a href="#" className="sidebar-link">Support</a>
            </Sidebar>

      {/* MAIN CONTENT */}
      <main className="bank-page">
        <div className="bank-outer">
          <div className="bank-inner">
            {/* Header */}
            <div className="bank-header">
              <div className="title-group">
                <h1 className="page-title">Bank Accounts</h1>
                <div className="title-underline"></div>
              </div>

              <button className="add-btn">Add Bank Account</button>
            </div>

            {/* Details Card */}
            <div className="details-card">
              <div className="card-content">
                <div className="info-row">
                  <p className="label">Account Holder Name :</p>
                </div>

                <div className="info-row">
                  <p className="label">Bank Name :</p>
                  <div className="logo-box">bank logo</div>
                </div>

                <div className="info-row">
                  <p className="label">Account Number :</p>
                </div>

                <div className="info-row">
                  <p className="label">IFSC Code :</p>
                </div>

                <div className="info-row upload-row">
                  <p className="label">Upload Cancelled Cheque :</p>
                  <div className="file-badge">Cancelled Cheque.pdf</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
