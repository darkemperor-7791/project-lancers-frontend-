import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import Sidebar from "../../components/Sidebar";
import coin from "../../assets/coin-light.png";
import "../../styles/settings/Billing_payments.css";
import { Filter } from "lucide-react";

export default function BillingPayments({ isSidebarOpen }) {
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <div
      className={`bp-billing-page ${
        isSidebarOpen ? "billing-sidebar-open" : "billing-sidebar-closed"
      }`}
    >
      <div className="bp-billing-layout">
        <div className="bp-billing-container">
          <Sidebar
            isOpen={isSidebarOpen}
            title="Settings"
            footer={
              <button className="btn-logout">
                Log out
              </button>
            }
          >
            <a href="/setpf" className="sidebar-link">Profile</a>
            <a href="/setac" className="sidebar-link">Account Security</a>
            <a href="/bilpay" className="sidebar-link active">Billing & Payments</a>
            <a href="/notiset" className="sidebar-link">Notification Settings</a>
            <a href="/appear" className="sidebar-link">Appearance</a>
            <a href="/useranal" className="sidebar-link">User Analytics</a>
            <a href="/support" className="sidebar-link">Support</a>
          </Sidebar>

          <div className="bp-billing-tabs">
            {["dashboard", "buy", "history", "withdraw"].map(tab => (
              <button
                key={tab}
                className={`bp-billing-tab ${activeTab === tab ? "active" : ""}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab === "dashboard"
                  ? "Dashboard"
                  : tab === "buy"
                  ? "Buy Tokens"
                  : tab === "history"
                  ? "History"
                  : "Withdraw"}
              </button>
            ))}
          </div>

          {activeTab === "dashboard" && (
            <>
              <div className="bp-billing-card">
                <div className="bp-billing-balance-row">
                  <span>Current Balance :</span>
                  <div className="bp-billing-balance">
                    <span className="bp-billing-value">20</span>
                    <img className="bp-coin-image-balance" src={coin} />
                  </div>
                </div>

                <div className="bp-billing-divider">
                  <span className="bp-billing-statement">Last transaction :</span>
                  <span className="bp-billing-positive">+15</span>
                  <img className="bp-coin-image" src={coin} />
                  <p className="bp-billing-sender-details">
                    from : <span className="bp-biller">Sender</span>
                  </p>
                </div>
              </div>

              <div className="bp-billing-card">
                <div className="bp-billing-stat-header">
                  <span>Total Earnings :</span>

                  <button className="bp-filter-button">
                    <Filter size={20} />
                    <span className="bp-filter-button-text">Filter</span>
                  </button>
                </div>

                <div className="bp-amount-details">
                  <p>Total Amount Withdrawn :</p>
                  <p>Pending Clearance :</p>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
