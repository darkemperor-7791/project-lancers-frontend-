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
      className={`adlt-delete-page ${
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

      <div className="adlt-delete-container">
        <div className="adlt-delete-outer">
          <div className="adlt-delete-inner">

            <div className="adlt-delete-header">
              <h1>Permanently Delete your account</h1>
              <span>*mandatory</span>
            </div>

            <p className="adlt-delete-danger-text">
              This action can’t be undone!!!
            </p>

            <p className="adlt-delete-description">
              This will permanently delete your Lancers account and all related data.
            </p>

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

            <div className="adlt-delete-warning">
              ⚠️ You must complete or cancel all active projects before deleting your account.
            </div>

            <label>Confirm Password*</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <label>Choose OTP method*</label>
            <button className="adlt-send-otp">Send OTP</button>

            <div className="adlt-radio-group">
              <label>
                <input
                className = "adlt-radio-button"
                  type="radio"
                  checked={otpMethod === "email"}
                  onChange={() => setOtpMethod("email")}
                />
                <span className = "adlt-email">E-mail</span>
              </label>
              <label>
                <input
                  className = "adlt-radio-button"
                  type="radio"
                  checked={otpMethod === "phone"}
                  onChange={() => setOtpMethod("phone")}
                />
                <span className = "adlt-email">Phone Number</span>
              </label>
            </div>

            <label>Enter OTP*</label>
                 <input
                  type="text"
                  inputMode="numeric"
                  autoComplete="one-time-code"
                  maxLength={6}
                  placeholder="Enter 6-digit OTP"
                  value={otp}
                  onChange={(e) => {
                    const value = e.target.value.replace(/[^0-9]/g, "");
                    setOtp(value);
                  }}
                  onKeyDown={(e) => {
                    if (
                      !/[0-9]/.test(e.key) &&
                      e.key !== "Backspace" &&
                      e.key !== "Delete" &&
                      e.key !== "ArrowLeft" &&
                      e.key !== "ArrowRight" &&
                      e.key !== "Tab"
                    ) {
                      e.preventDefault();
                    }
                  }}
                  required
                />

            <label className="adlt-confirm-text-label">
              Type the confirmation sentence exactly:
              <br/>
              <span className = "adlt-consent">“I wish to delete this account by my own will and with full responsibility of it.”</span>
            </label>

            <textarea
              className="adlt-consent-box"
              value={confirmText}
              onChange={(e) => setConfirmText(e.target.value)}
            />

            <label className="adlt-checkbox-label">
              <input
              className = "adlt-checkbox"
                type="checkbox"
                checked={isAgreed}
                onChange={() => setIsAgreed(prev => !prev)}
              />
              <span className="adlt-cbox-line">
                I understand this action is
                <span className="adlt-consent-highlight"> permanent</span>.
              </span>
            </label>

            <div className="adlt-button-group">
              <button
                className="adlt-danger-btn"
                onClick={handleDelete}
                disabled={!isConfirmationValid}
              >
                Delete Account
              </button>

              <button
                className="adlt-cancel-btn"
                onClick={() => navigate(-1)}
              >
                Cancel
              </button>
            </div>

          </div>
        </div>
      </div>

      {showPopup && (
        <div className="adlt-popup-overlay">
          <div className="adlt-popup-box">
            <div className="adlt-popup-check">✓</div>
            <h2>Account deletion request submitted</h2>
            <button
              className="adlt-popup-ok"
              onClick={() => setShowPopup(false)}
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
