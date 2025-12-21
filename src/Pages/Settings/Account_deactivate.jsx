import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import "../../styles/settings/Account_deactivate.css";

export default function AccountDeactivate({ isSidebarOpen }) {
  const navigate = useNavigate();

  const [reasonOther, setReasonOther] = useState("");
  const [otpMethod, setOtpMethod] = useState("email");
  const [otp, setOtp] = useState("");

  const handleCancel = () => {
    navigate(-1);
  };

  const handleDeactivate = (e) => {
    e.preventDefault();
    console.log({ reasonOther, otpMethod, otp });
  };

  return (
    <div
      className={`deactivate-page ${
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
        <a href="#" className="sidebar-link">Billing & Payments</a>
        <a href="#" className="sidebar-link">Notification Settings</a>
        <a href="#" className="sidebar-link">Appearance</a>
        <a href="#" className="sidebar-link">User Analytics</a>
        <a href="#" className="sidebar-link">Support</a>
      </Sidebar>

      <div className="deactivate-container">
        <div className="deactivate-outer-frame">
          <div className="deactivate-content-box">

            <div className="deactivate-header">
              <h1 className="deactivate-title">Deactivate your account</h1>
              <span className="mandatory-label">*mandatory</span>
            </div>

            <p className="deactivate-description">
              This will temporarily disable your Lancers account. You can reactivate your account anytime.
            </p>

            <section className="flow-section">
              <h2 className="section-title">What Happens After Deactivation ?</h2>
              <ul className="happens-list">
                <li className="happens-item">Your profile is hidden</li>
                <li className="happens-item">Your projects & bids are paused</li>
                <li className="happens-item">Messages are preserved</li>
                <li className="happens-item">You won’t receive emails</li>
                <li className="happens-item happens-item-green">
                  You can always log back in to reactivate
                </li>
              </ul>
            </section>

            <section className="flow-section">
              <h2 className="section-title">Why are you deactivating?</h2>

              <div className="reasons-list">
                <label className="reason-row">
                  <input type="checkbox" className="reason-checkbox" />
                  <span className="reason-text">Taking a break</span>
                </label>

                <label className="reason-row">
                  <input type="checkbox" className="reason-checkbox" />
                  <span className="reason-text">Too many notifications</span>
                </label>

                <label className="reason-row">
                  <input type="checkbox" className="reason-checkbox" />
                  <span className="reason-text">Privacy concerns</span>
                </label>

                <label className="reason-row">
                  <input type="checkbox" className="reason-checkbox" />
                  <span className="reason-text">Not finding enough work</span>
                </label>

                <div className="reason-row reason-other-row">
                  <label className="reason-row">
                    <input type="checkbox" className="reason-checkbox" />
                    <span className="reason-text">Other</span>
                  </label>

                  <input
                    type="text"
                    className="other-input"
                    value={reasonOther}
                    onChange={(e) => setReasonOther(e.target.value)}
                  />
                </div>
              </div>
            </section>

            <section className="flow-section">
              <div className="warning-box">
                <span className="warning-icon">⚠️</span>
                <p className="warning-text">
                  You must complete or cancel all active projects and make all pending transactions before deactivating your account.
                </p>
              </div>
            </section>

            <form className="flow-section" onSubmit={handleDeactivate}>
              <div className="form-row">
                <label className="field-label">Confirm Password*</label>
                <input type="password" className="field-input" required />
              </div>

              <div className="form-row">
                <span className="field-label">Choose method for OTP generation*</span>
                <div className="radio-group">
                  <label className="radio-label">
                    <input
                      type="radio"
                      checked={otpMethod === "email"}
                      onChange={() => setOtpMethod("email")}
                    />
                    E-mail
                  </label>
                  <label className="radio-label">
                    <input
                      type="radio"
                      checked={otpMethod === "phone"}
                      onChange={() => setOtpMethod("phone")}
                    />
                    Phone Number
                  </label>
                </div>
              </div>

              <div className="form-row">
                <label className="field-label">Enter OTP*</label>
                <input
                  type="number"
                  className="field-input"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  required
                />
              </div>

              <div className="button-group">
                <button type="submit" className="deactivate-button">
                  Deactivate Account
                </button>
                <button type="button" className="cancel-button" onClick={handleCancel}>
                  Cancel
                </button>
              </div>
            </form>

          </div>
        </div>
      </div>
    </div>
  );
}
