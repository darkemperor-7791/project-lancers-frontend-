import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import coin from "../../assets/coin-light.png";
import "../../styles/settings/Billing_payments.css";
import "../../styles/settings/B_P_BuyTokens.css";
import { Filter } from "lucide-react";
import BuyTokens from "./B_P_BuyTokens";
import PaymentHistory from "./B_P_History";
import Withdraw from "./B_P_Withdraw";


export default function BillingPayments({ isSidebarOpen }) {
  const location = useLocation();

  const [activeTab, setActiveTab] = useState(
    location.state?.tab || "dashboard"
  );

  useEffect(() => {
    if (location.state?.tab) {
      setActiveTab(location.state.tab);
    }
  }, [location.state]);

  return (
    <div
      className={`bp-billing-page ${
        isSidebarOpen ? "billing-sidebar-open" : "billing-sidebar-closed"
      } bp-tab-${activeTab}`}
    >
      <div className="bp-billing-layout">
        <div className="bp-billing-container">

          <Sidebar isOpen={isSidebarOpen} title="Settings">
            <a href="/setpf" className="sidebar-link">Profile</a>
            <a href="/setac" className="sidebar-link">Account Security</a>
            <a href="/bilpay" className="sidebar-link active">Billing & Payments</a>
            <a href="/notiset" className="sidebar-link">Notification Settings</a>
            <a href="/appear" className="sidebar-link">Appearance</a>
            <a href="/useranal" className="sidebar-link">User Analytics</a>
            <a href="/support" className="sidebar-link">Support</a>
          </Sidebar>

          {/* TABS */}
          <div className="bp-billing-tabs-wrapper">
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
          </div>

          {/* DASHBOARD */}
          {activeTab === "dashboard" && (
            <>
              <div className="bp-billing-card">
                <div className="bp-billing-balance-row">
                  <span>Current Balance :</span>
                  <div className="bp-billing-balance">
                    <span className="bp-billing-value">20</span>
                    <img className="bp-coin-image-balance" src={coin} alt="coins" />
                  </div>
                </div>

                <div className="bp-billing-divider">
                  <span className="bp-billing-statement">Last transaction :</span>
                  <span className="bp-billing-positive">+15</span>
                  <span>Tokens</span>
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

          {/* BUY TOKENS */}
          {activeTab === "buy" && (
            <BuyTokens isSidebarOpen={isSidebarOpen} />
          )}

          {/* HISTORY */}
          {activeTab === "history" && (
            <PaymentHistory isSidebarOpen={isSidebarOpen} />
          )}

          {/* WITHDRAW */}
          {activeTab === "withdraw" && (
            <Withdraw isSidebarOpen={isSidebarOpen} />
          )}


        </div>
      </div>
    </div>
  );
}
