import React from "react";
import Sidebar from "../../components/Sidebar";
import { useNavigate } from "react-router-dom";
import "../../styles/settings/Account_wallet.css";

export default function WalletsPage({ isSidebarOpen }) {
  const navigate = useNavigate();

  return (
    <div
      className={`settings-wallet-page ${
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
      <main className="awall-page">
        <div className="awall-outer">
          <div className="awall-inner">

            {/* HEADER */}
            <div className="awall-header">
              <div>
                <h1 className="awall-title">Wallets</h1>
                <div className="awall-title-underline"></div>
              </div>

              <button className="awall-add-btn">Add Wallet</button>
            </div>

            {/* WALLET LIST */}
            <div className="awall-list">

              <div className="awall-card">
                <div className="awall-row">
                  <span>Wallet Service : Paytm</span>
                </div>
                <div className="awall-row">
                  <span>Wallet ID :</span>
                </div>
                <div className="awall-row">
                  <span>Linked Mobile Number :</span>
                </div>
                <div className="awall-row awall-radio-row">
                  <span>Default Wallet :</span>
                  <input type="radio" name="defaultWallet" />
                </div>
              </div>

              <div className="awall-card">
                <div className="awall-row">
                  <span>Wallet Service : PhonePe</span>
                </div>
                <div className="awall-row">
                  <span>Wallet ID :</span>
                </div>
                <div className="awall-row">
                  <span>Linked Mobile Number :</span>
                </div>
                <div className="awall-row awall-radio-row">
                  <span>Default Wallet :</span>
                  <input type="radio" name="defaultWallet" />
                </div>
              </div>

            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
