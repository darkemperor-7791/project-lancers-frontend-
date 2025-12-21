import React, { useState } from 'react';
import '../../styles/settings/Account_backup.css';
import Sidebar from "../../components/Sidebar";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function BackupContactsForm({ isSidebarOpen }) {
        const navigate = useNavigate();
    const goBack = () => {
      navigate(-1);
    };
  const [email, setEmail] = useState('');
  const [emailCode, setEmailCode] = useState('');
  const [emailVerified, setEmailVerified] = useState(false);
  const [emailCodeSent, setEmailCodeSent] = useState(false);
  
  const [phone, setPhone] = useState('');
  const [phoneOtp, setPhoneOtp] = useState('');
  const [phoneVerified, setPhoneVerified] = useState(false);
  const [phoneOtpSent, setPhoneOtpSent] = useState(false);
  
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const handleVerifyEmail = () => {
    if (email.trim() === '') {
      alert('Please enter an email address');
      return;
    }
    setEmailCodeSent(true);
    setSuccessMessage('Verification code sent to ' + email);
    setShowSuccessPopup(true);
  };

  const handleSubmitEmail = () => {
    if (emailCode.trim() === '') {
      alert('Please enter the verification code');
      return;
    }
    setEmailVerified(true);
    setSuccessMessage('Email verified successfully!');
    setShowSuccessPopup(true);
  };

  const handleRemoveEmail = () => {
    setEmail('');
    setEmailCode('');
    setEmailVerified(false);
    setEmailCodeSent(false);
    setSuccessMessage('Backup email removed');
    setShowSuccessPopup(true);
  };

  const handleSendOtp = () => {
    if (phone.trim() === '') {
      alert('Please enter a phone number');
      return;
    }
    setPhoneOtpSent(true);
    setSuccessMessage('OTP sent to ' + phone);
    setShowSuccessPopup(true);
  };

  const handleSubmitPhone = () => {
    if (phoneOtp.trim() === '') {
      alert('Please enter the OTP');
      return;
    }
    setPhoneVerified(true);
    setSuccessMessage('Phone number verified successfully!');
    setShowSuccessPopup(true);
  };

  const handleRemovePhone = () => {
    setPhone('');
    setPhoneOtp('');
    setPhoneVerified(false);
    setPhoneOtpSent(false);
    setSuccessMessage('Backup phone number removed');
    setShowSuccessPopup(true);
  };

  const handleSave = () => {
    if (!emailVerified && !phoneVerified) {
      alert('Please verify at least one backup contact method');
      return;
    }
    setSuccessMessage('Backup details saved successfully!');
    setShowSuccessPopup(true);
  };

  const handleCancel = () => {
    setEmail('');
    setEmailCode('');
    setEmailVerified(false);
    setEmailCodeSent(false);
    setPhone('');
    setPhoneOtp('');
    setPhoneVerified(false);
    setPhoneOtpSent(false);
  };

  return (
    <div className="backup-container">
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
                                <a href="/bilpay" className="sidebar-link">Billing & Payments</a>
                                <a href="/notiset" className="sidebar-link">Notification Settings</a>
                                <a href="/appear" className="sidebar-link">Appearance</a>
                                <a href="/useranal" className="sidebar-link">User Analytics</a>
                                <a href="/support" className="sidebar-link">Support</a>
                            </Sidebar>
      <div className="backup-outer-frame">
        <div className="backup-form-box">
          {/* Title */}
          <h1 className="backup-title">Backup Contacts Information</h1>

          {/* Subtitle */}
          <p className="backup-subtitle">
            These will be used only to recover your account if you lose access to your primary email or phone number.
          </p>

          {/* Backup Email Section */}
          <div className="backup-section email-section">
            <h3 className="backup-section-title">Backup Email Address</h3>

            <div className="backup-input-row">
              <input
                type="text"
                placeholder="Enter Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={emailVerified}
                className="backup-input"
              />
              <button
                onClick={handleVerifyEmail}
                disabled={emailVerified}
                className={`backup-button ${emailVerified ? 'disabled' : ''}`}
              >
                Verify
              </button>
              <button
                onClick={handleRemoveEmail}
                className="backup-button remove-button"
              >
                Remove<br/>Backup Email
              </button>
            </div>

            <div className="backup-code-row">
              <input
                type="number"
                placeholder="Enter Code"
                value={emailCode}
                onChange={(e) => setEmailCode(e.target.value)}
                disabled={!emailCodeSent || emailVerified}
                className="backup-code-input"
              />
              <button
                onClick={handleSubmitEmail}
                disabled={!emailCodeSent || emailVerified}
                className={`backup-button ${(!emailCodeSent || emailVerified) ? 'disabled' : ''}`}
              >
                Submit
              </button>
            </div>
          </div>

          {/* Backup Phone Section */}
          <div className="backup-section phone-section">
            <h3 className="backup-section-title">Backup Phone Number</h3>

            <div className="backup-input-row phone-input-row">
              <input
                type="tel"
                placeholder="Enter Phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                disabled={phoneVerified}
                className="backup-input"
              />
              <button
                onClick={handleSendOtp}
                disabled={phoneVerified}
                className={`backup-button ${phoneVerified ? 'disabled' : ''}`}
              >
                Send OTP
              </button>
              <button
                onClick={handleRemovePhone}
                className="backup-button remove-phone-button"
              >
                Remove<br/>Backup Phone<br/>Number
              </button>
            </div>

            <div className="backup-code-row phone-code-row">
              <input
                type="text"
                placeholder="Enter OTP"
                value={phoneOtp}
                onChange={(e) => setPhoneOtp(e.target.value)}
                disabled={!phoneOtpSent || phoneVerified}
                className="backup-code-input"
              />
              <button
                onClick={handleSubmitPhone}
                disabled={!phoneOtpSent || phoneVerified}
                className={`backup-button ${(!phoneOtpSent || phoneVerified) ? 'disabled' : ''}`}
              >
                Submit
              </button>
            </div>
          </div>

          {/* Bottom Buttons */}
          <div className="backup-actions">
            <button
              onClick={handleSave}
              className="backup-action-button"
            >
              Save Backup Details
            </button>
            <button
              onClick={goBack}
              className="backup-action-button"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>

      {/* Success Popup */}
      {showSuccessPopup && (
        <div className="backup-popup-overlay">
          <div className="backup-popup-box">
            <div className="backup-popup-checkmark">✓</div>
            <h2 className="backup-popup-title">{successMessage}</h2>
            <button
              onClick={() => setShowSuccessPopup(false)}
              className="backup-popup-button"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
}