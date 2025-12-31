import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import "../../styles/settings/Account_deactivate.css";

export default function AccountDeactivate({ isSidebarOpen }) {
  const navigate = useNavigate();

  const [reasonOther, setReasonOther] = useState("");
  const [otpMethod, setOtpMethod] = useState("email");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);

  const handleCancel = () => navigate(-1);

  const handleSendOTP = () => {
    const generatedOTP = Math.floor(100000 + Math.random() * 900000).toString();
    setOtpSent(true);
    alert(`OTP sent to your ${otpMethod}: ${generatedOTP}\n(This is for demo purposes)`);
  };

  const handleResendOTP = () => {
    const generatedOTP = Math.floor(100000 + Math.random() * 900000).toString();
    setOtp(''); // Clear previous OTP input
    alert(`New OTP sent to your ${otpMethod}: ${generatedOTP}\n(This is for demo purposes)`);
  };

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
                <li className="advt-happens-item">You won't receive emails</li>
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
                <div className="advt-otp-method-container">
                  <div className="advt-radio-group">
                    <label className="advt-radio-label">
                      <input
                        type="radio"
                        className="advt-radio-btn"
                        checked={otpMethod === "email"}
                        onChange={() => setOtpMethod("email")}
                      />
                      <div className="advt-options">E-mail</div>
                    </label>
                    <label className="advt-radio-label">
                      <input
                        className="advt-radio-btn"
                        type="radio"
                        checked={otpMethod === "phone"}
                        onChange={() => setOtpMethod("phone")}
                      />
                      <div className="advt-options">Phone Number</div>
                    </label>
                  </div>
                  <div className="advt-otp-buttons-group">
                    <button 
                      type="button" 
                      className="advt-send-otp-button"
                      onClick={handleSendOTP}
                      disabled={otpSent}
                    >
                      {otpSent ? 'OTP Sent' : 'Send OTP'}
                    </button>
                    {otpSent && (
                      <button 
                        type="button" 
                        className="advt-resend-otp-button"
                        onClick={handleResendOTP}
                      >
                        Resend OTP
                      </button>
                    )}
                  </div>
                </div>
              </div>

              <div className="advt-form-row">
                <label className="advt-field-label">Enter OTP*</label>
                 <input
                  className="advt-field-input"
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