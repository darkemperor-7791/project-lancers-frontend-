import React from "react";
import Sidebar from "../../components/Sidebar";
import "../../styles/settings/Account_wallet.css";

export default function WalletsPage({ isSidebarOpen }) {
  return (
    <div
      className={`settings-profile-page ${
        isSidebarOpen ? "settings-sidebar-open" : "settings-sidebar-closed"
      }`}
    >
      {/* Sidebar */}
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

      {/* Main Page */}
      <main className="wallet-page">
        <div className="wallet-outer">
          <div className="wallet-inner">

            {/* Header */}
            <div className="wallet-header">
              <div>
                <h1 className="wallet-title">Wallets</h1>
                <div className="wallet-title-underline"></div>
              </div>

              <button className="wallet-add-btn">Add Wallet</button>
            </div>

            {/* Wallet Cards */}
            <div className="wallet-list">

              <div className="wallet-card">
                <div className="wallet-row">
                  <span>Wallet Service : Paytm</span>
                </div>
                <div className="wallet-row">
                  <span>Wallet Id :</span>
                </div>
                <div className="wallet-row">
                  <span>Linked Mobile Number :</span>
                </div>
                <div className="wallet-row radio-row">
                     <span>Default Wallet :</span>
                    <input type="radio" name="defaultWallet"/>
                </div>
              </div>

              <div className="wallet-card">
                <div className="wallet-row">
                  <span>Wallet Service : PhonePe</span>
                </div>
                <div className="wallet-row">
                  <span>Wallet Id :</span>
                </div>
                <div className="wallet-row">
                  <span>Linked Mobile Number :</span>
                </div>
                <div className="wallet-row radio-row">
                     <span>Default Wallet :</span>
                    <input type="radio" name="defaultWallet"/>
                </div>
              </div>

            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
