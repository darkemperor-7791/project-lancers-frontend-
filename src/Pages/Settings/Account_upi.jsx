// src/Pages/Settings/Account_upi.jsx

import React, { useState } from "react";
import { Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import "../../styles/settings/Account_upi.css";

export default function UPIIDsPage({ isSidebarOpen }) {
  const navigate = useNavigate();
  const [upiIds, setUpiIds] = useState([
    { id: 1, upi: "freelancer@okhdfcbank", isDefault: false },
    { id: 2, upi: "freelancer@okaxis", isDefault: true },
    { id: 3, upi: "freelancer@okhsbi", isDefault: false }
  ]);

  const setAsDefault = (id) => {
    setUpiIds(
      upiIds.map((upi) => ({
        ...upi,
        isDefault: upi.id === id
      }))
    );
  };

  const deleteUPI = (id) => {
    setUpiIds(upiIds.filter((upi) => upi.id !== id));
  };

  return (
    <div
      className={`settings-page ${
        isSidebarOpen ? "settings-sidebar-open" : "settings-sidebar-closed"
      }`}
    >
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

      <main className="upi-page">
        <div className="upi-outer">
          <div className="upi-inner">
            <div className="upi-header">
              <div>
                <h1 className="upi-title">UPI ID's</h1>
                <div className="upi-title-underline" />
              </div>

              <button className="add-upi-btn">Add UPI ID</button>
            </div>

            <div className="upi-list">
              {upiIds.map((upi) => (
                <div key={upi.id} className="upi-card">
                  <div className="upi-info">
                    <span className="upi-label">UPI ID :</span>
                    <span className="upi-value">{upi.upi}</span>
                  </div>

                  <div className="upi-actions">
                    {upi.isDefault ? (
                      <span className="upi-default">Default</span>
                    ) : (
                      <button
                        onClick={() => setAsDefault(upi.id)}
                        className="upi-set-default"
                      >
                        Set as Default
                      </button>
                    )}

                    <button
                      onClick={() => deleteUPI(upi.id)}
                      className="upi-delete-btn"
                    >
                      <Trash2 size={22} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
