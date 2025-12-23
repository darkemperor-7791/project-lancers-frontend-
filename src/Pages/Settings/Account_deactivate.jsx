import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import "../../styles/settings/Account_deactivate.css";

export default function AccountDeactivate({ isSidebarOpen }) {
  const navigate = useNavigate();

  const [reasonOther, setReasonOther] = useState("");
  const [otpMethod, setOtpMethod] = useState("email");
  const [otp, setOtp] = useState("");

  const handleCancel = () => navigate(-1);

  const handleDeactivate = (e) => {
    e.preventDefault();
    console.log({ reasonOther, otpMethod, otp });
  };

  return (
    <div
      className={`advt-deactivate-page ${
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

      <div className="advt-deactivate-container">
        <div className="advt-deactivate-outer-frame">
          <div className="advt-deactivate-content-box">

            <div className="advt-deactivate-header">
              <h1 className="advt-deactivate-title">Deactivate your account</h1>
              <span className="advt-mandatory-label">*mandatory</span>
            </div>

            <p className="advt-deactivate-description">
              This will temporarily disable your Lancers account. You can reactivate your account anytime.
            </p>

            <section className="advt-flow-section">
              <h2 className="advt-section-title">What Happens After Deactivation ?</h2>
              <ul className="advt-happens-list">
                <li className="advt-happens-item">Your profile is hidden</li>
                <li className="advt-happens-item">Your projects & bids are paused</li>
                <li className="advt-happens-item">Messages are preserved</li>
                <li className="advt-happens-item">You won’t receive emails</li>
                <li className="advt-happens-item advt-happens-item-green">
                  You can always log back in to reactivate
                </li>
              </ul>
            </section>

            <section className="advt-flow-section">
              <h2 className="advt-section-title">Why are you deactivating?</h2>

              <div className="advt-reasons-list">
                <label className="advt-reason-row">
                  <input type="checkbox" className="advt-reason-checkbox" />
                  <span className="advt-reason-text">Taking a break</span>
                </label>

                <label className="advt-reason-row">
                  <input type="checkbox" className="advt-reason-checkbox" />
                  <span className="advt-reason-text">Too many notifications</span>
                </label>

                <label className="advt-reason-row">
                  <input type="checkbox" className="advt-reason-checkbox" />
                  <span className="advt-reason-text">Privacy concerns</span>
                </label>

                <label className="advt-reason-row">
                  <input type="checkbox" className="advt-reason-checkbox" />
                  <span className="advt-reason-text">Not finding enough work</span>
                </label>

                <div className="advt-reason-row advt-reason-other-row">
                  <label className="advt-reason-row">
                    <input type="checkbox" className="advt-reason-checkbox" />
                    <span className="advt-reason-text">Other</span>
                  </label>

                  <input
                    type="text"
                    className="advt-other-input"
                    value={reasonOther}
                    onChange={(e) => setReasonOther(e.target.value)}
                  />
                </div>
              </div>
            </section>

            <section className="advt-flow-section">
              <div className="advt-warning-box">
                <span className="advt-warning-icon">⚠️</span>
                <p className="advt-warning-text">
                  You must complete or cancel all active projects and make all pending transactions before deactivating your account.
                </p>
              </div>
            </section>

            <form className="advt-flow-section" onSubmit={handleDeactivate}>
              <div className="advt-form-row">
                <label className="advt-field-label">Confirm Password*</label>
                <input type="password" className="advt-field-input" required />
              </div>

              <div className="advt-form-row">
                <span className="advt-field-label">Choose method for OTP generation*</span>
                <div className="advt-radio-group">
                  <label className="advt-radio-label">
                    <input
                      type="radio"
                      checked={otpMethod === "email"}
                      onChange={() => setOtpMethod("email")}
                    />
                    E-mail
                  </label>
                  <label className="advt-radio-label">
                    <input
                      type="radio"
                      checked={otpMethod === "phone"}
                      onChange={() => setOtpMethod("phone")}
                    />
                    Phone Number
                  </label>
                </div>
              </div>

              <div className="advt-form-row">
                <label className="advt-field-label">Enter OTP*</label>
                <input
                  type="number"
                  className="advt-field-input"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  required
                />
              </div>

              <div className="advt-button-group">
                <button type="submit" className="advt-deactivate-button">
                  Deactivate Account
                </button>
                <button type="button" className="advt-cancel-button" onClick={handleCancel}>
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
