// src/Pages/Settings/BankAccounts.jsx
import React from "react";
import Sidebar from "../../components/Sidebar";
import "../../styles/settings/Account_cards.css";
import { useNavigate } from "react-router-dom";

export default function SavedCards({ isSidebarOpen }) {
  const navigate = useNavigate();

  return (
    <div
      className={`asc-settings-cards-page ${
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
      <main className="asc-cards-page">
        <div className="asc-cards-outer">
          <div className="asc-cards-inner">

            {/* HEADER */}
            <div className="asc-cards-header">
              <div className="asc-title-group">
                <h1 className="asc-page-title">Saved Cards</h1>
                <div className="asc-title-underline"></div>
              </div>

              <button className="asc-add-btn">Add Card</button>
            </div>

            {/* DETAILS CARD */}
            <div className="asc-details-card">
              <div className="asc-card-content">

                <div className="asc-info-row">
                  <p className="asc-label">Card Number :
                  <span className="asc-label-value-number"> 0530-XXXX-XXXX-4782</span>
                  </p>
                </div>

                <div className="asc-info-row">
                  <p className="asc-label">Card Type :
                    <span className="asc-label-value-type">Debit</span>
                  </p>
                  <div className="asc-logo-box">card logo</div>
                </div>

                <div className="asc-info-row">
                  <p className="asc-label">Card Holder Name :
                    <span className="asc-label-value-name">Breakfast Prajapati </span>
                  </p>
                </div>

                <div className="asc-info-row">
                  <p className="asc-label">Expiry Date :
                    <span className="asc-label-value-date">09/27</span>
                  </p>
                </div>

                <div className="asc-info-row">
                  <p className="asc-label">Issuing Bank :
                    <span className="asc-label-value-cards">HDFC Bank</span>
                  </p>
                </div>

              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}
