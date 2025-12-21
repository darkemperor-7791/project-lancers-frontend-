// =========================
// PermanentlyDeleteAccount.jsx (PAGE-REFORMED & FIXED)
// =========================

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import "../../styles/settings/Account_delete.css";

export default function PermanentlyDeleteAccount({ isSidebarOpen }) {
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [otpMethod, setOtpMethod] = useState("email");
  const [otp, setOtp] = useState("");
  const [confirmText, setConfirmText] = useState("");
  const [isAgreed, setIsAgreed] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const expectedText =
    "I wish to delete this account by my own will and with full responsibility of it.";

  const isConfirmationValid =
    password.trim() !== "" &&
    otp.trim() !== "" &&
    confirmText.trim() === expectedText &&
    isAgreed;

  const handleDelete = () => {
    if (!isConfirmationValid) return;
    setShowPopup(true);
  };

  return (
    <div
      className={`delete-page ${
        isSidebarOpen ? "settings-sidebar-open" : "settings-sidebar-closed"
      }`}
    >
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
        <a href="#" className="sidebar-link">Billing & Payments</a>
        <a href="#" className="sidebar-link">Notification Settings</a>
        <a href="#" className="sidebar-link">Appearance</a>
        <a href="#" className="sidebar-link">User Analytics</a>
        <a href="#" className="sidebar-link">Support</a>
      </Sidebar>

      <div className="delete-container">
        <div className="delete-outer">
          <div className="delete-inner">

            {/* HEADER */}
            <div className="delete-header">
              <h1>Permanently Delete your account</h1>
              <span>*mandatory</span>
            </div>

            <p className="delete-danger-text">
              This action can’t be undone!!!
            </p>

            <p className="delete-description">
              This will permanently delete your Lancers account and all related data.
            </p>

            {/* LISTS */}
            <section>
              <h3>What Will Be Deleted?</h3>
              <ul>
                <li>Profile & personal data</li>
                <li>Projects & proposals</li>
                <li>Messages (except legal records)</li>
                <li>Wallet balance</li>
                <li>Reviews & ratings</li>
              </ul>
            </section>

            <section>
              <h3>What Cannot Be Recovered?</h3>
              <ul>
                <li>Username</li>
                <li>Transaction history</li>
                <li>Messages</li>
                <li>Reputation score</li>
              </ul>
            </section>

            {/* WARNING */}
            <div className="delete-warning">
              ⚠ You must complete or cancel all active projects before deleting your account.
            </div>

            {/* FORM */}
            <label>Confirm Password*</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <label>Choose OTP method*</label>
            <button className="send-otp">Send OTP</button>

            <div className="radio-group">
              <label>
                <input
                  type="radio"
                  checked={otpMethod === "email"}
                  onChange={() => setOtpMethod("email")}
                />
                E-mail
              </label>
              <label>
                <input
                  type="radio"
                  checked={otpMethod === "phone"}
                  onChange={() => setOtpMethod("phone")}
                />
                Phone Number
              </label>
            </div>

            <label>Enter OTP*</label>
            <input
              type="number"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />

            <label className="confirm-text-label">
              Type the confirmation sentence exactly:
              <br />
              “I wish to delete this account by my own will and with full responsibility of it.”
            </label>

            <textarea
              className="consent-box"
              value={confirmText}
              onChange={(e) => setConfirmText(e.target.value)}
            />

            {/* CONSENT */}
            <label className="checkbox-label">
              <input
                type="checkbox"
                checked={isAgreed}
                onChange={() => setIsAgreed(prev => !prev)}/>

              <span>
                I understand this action is
                <span className="consent-highlight"> permanent</span>.
              </span>
            </label>

            {/* BUTTONS */}
            <div className="button-group">
              <button
                className="danger-btn"
                onClick={handleDelete}
                disabled={!isConfirmationValid}
              >
                Delete Account
              </button>

              <button
                className="cancel-btn"
                onClick={() => navigate(-1)}
              >
                Cancel
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* POPUP */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-box">
            <div className="popup-check">✓</div>
            <h2>Account deletion request submitted</h2>
            <button className = "popup-ok" onClick={() => setShowPopup(false)}>OK</button>
          </div>
        </div>
      )}
    </div>
  );
}
