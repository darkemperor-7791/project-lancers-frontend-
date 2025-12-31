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
  const [generatedEmailOtp, setGeneratedEmailOtp] = useState('');

  const [phone, setPhone] = useState('');
  const [phoneOtp, setPhoneOtp] = useState('');
  const [phoneVerified, setPhoneVerified] = useState(false);
  const [phoneOtpSent, setPhoneOtpSent] = useState(false);
  const [generatedPhoneOtp, setGeneratedPhoneOtp] = useState('');

  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [showOtpSentPopup, setShowOtpSentPopup] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [otpSentMessage, setOtpSentMessage] = useState('');

  // Validation functions
  const isValidEmail = (email) => {
    return email.trim().endsWith('@gmail.com') && email.trim().length > 10;
  };

  const isValidPhone = (phone) => {
    return /^\d{10}$/.test(phone);
  };

  const isValidOtp = (otp) => {
    return /^\d{6}$/.test(otp);
  };

  const generateOtp = () => {
    return Math.floor(100000 + Math.random() * 900000).toString();
  };

  // Email handlers
  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    if (emailCodeSent) {
      setEmailCodeSent(false);
      setEmailCode('');
      setGeneratedEmailOtp('');
    }
  };

  const handleVerifyEmail = () => {
    if (isValidEmail(email)) {
      const otp = generateOtp();
      setGeneratedEmailOtp(otp);
      setEmailCodeSent(true);
      setOtpSentMessage('OTP has been sent to your email');
      setShowOtpSentPopup(true);
      console.log('Email OTP:', otp);
    } else {
      alert('Please enter a valid Gmail address (must end with @gmail.com)');
    }
  };

  const handleEmailCodeChange = (e) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, 6);
    setEmailCode(value);
  };

  const handleSubmitEmailCode = () => {
    if (!isValidOtp(emailCode)) {
      alert('Please enter a valid 6-digit OTP');
      return;
    }
    
    if (emailCode === generatedEmailOtp) {
      setEmailVerified(true);
      setSuccessMessage(`${email} has been added as your backup email successfully.`);
      setShowSuccessPopup(true);
    } else {
      alert('Invalid OTP. Please try again.');
    }
  };

  const handleRemoveEmail = () => {
    setEmail('');
    setEmailCode('');
    setEmailCodeSent(false);
    setEmailVerified(false);
    setGeneratedEmailOtp('');
  };

  // Phone handlers
  const handlePhoneChange = (e) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, 10);
    setPhone(value);
    if (phoneOtpSent) {
      setPhoneOtpSent(false);
      setPhoneOtp('');
      setGeneratedPhoneOtp('');
    }
  };

  const handleSendPhoneOtp = () => {
    if (isValidPhone(phone)) {
      const otp = generateOtp();
      setGeneratedPhoneOtp(otp);
      setPhoneOtpSent(true);
      setOtpSentMessage('OTP has been sent to your phone number');
      setShowOtpSentPopup(true);
      console.log('Phone OTP:', otp);
    } else {
      alert('Please enter a valid 10-digit phone number');
    }
  };

  const handlePhoneOtpChange = (e) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, 6);
    setPhoneOtp(value);
  };

  const handleSubmitPhoneOtp = () => {
    if (!isValidOtp(phoneOtp)) {
      alert('Please enter a valid 6-digit OTP');
      return;
    }
    
    if (phoneOtp === generatedPhoneOtp) {
      setPhoneVerified(true);
      setSuccessMessage(`${phone} has been added as your backup phone number successfully.`);
      setShowSuccessPopup(true);
    } else {
      alert('Invalid OTP. Please try again.');
    }
  };

  const handleRemovePhone = () => {
    setPhone('');
    setPhoneOtp('');
    setPhoneOtpSent(false);
    setPhoneVerified(false);
    setGeneratedPhoneOtp('');
  };

  const handleCloseSuccessPopup = () => {
    setShowSuccessPopup(false);
    setSuccessMessage('');
  };

  const handleCloseOtpSentPopup = () => {
    setShowOtpSentPopup(false);
    setOtpSentMessage('');
  };

  return (
    <div className="abu-backup-container">

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

      <div className="abu-backup-outer-frame">
        <div className="abu-backup-form-box">

          <h1 className="abu-backup-title">Backup Contacts Information</h1>

          <p className="abu-backup-subtitle">
            These will be used only to recover your account if you lose access to your primary email or phone number.
          </p>

          {/* EMAIL */}
          <div className="abu-backup-section abu-email-section">
            <h3 className="abu-backup-section-title">Backup Email Address</h3>

            <div className="abu-backup-input-row">
              <input 
                className="abu-backup-input" 
                type="text"
                placeholder="Enter your email"
                value={email}
                onChange={handleEmailChange}
                disabled={emailVerified}
              />

              <button 
                className={`abu-backup-button ${emailVerified ? 'disabled' : ''}`}
                onClick={handleVerifyEmail}
                disabled={emailVerified}
              >
                Verify
              </button>
              <button 
                className="abu-backup-button abu-remove-button"
                onClick={handleRemoveEmail}
              >
                Remove<br />Backup Email
              </button>
            </div>

            <div className="abu-backup-code-row">
              <input 
                className="abu-backup-code-input" 
                type="text"
                placeholder="Enter OTP"
                value={emailCode}
                onChange={handleEmailCodeChange}
                disabled={!emailCodeSent || emailVerified}
              />
              <button 
                className={`abu-backup-button ${(!emailCodeSent || emailVerified) ? 'disabled' : ''}`}
                onClick={handleSubmitEmailCode}
                disabled={!emailCodeSent || emailVerified}
              >
                Submit
              </button>
            </div>
          </div>

          {/* PHONE */}
          <div className="abu-backup-section abu-phone-section">
            <h3 className="abu-backup-section-title">Backup Phone Number</h3>

            <div className="abu-backup-input-row abu-phone-input-row">
              <input 
                className="abu-backup-input" 
                type="text"
                placeholder="Enter your phone number"
                value={phone}
                onChange={handlePhoneChange}
                disabled={phoneVerified}
              />
              <button 
                className={`abu-backup-button ${phoneVerified ? 'disabled' : ''}`}
                onClick={handleSendPhoneOtp}
                disabled={phoneVerified}
              >
                Send OTP
              </button>
              <button 
                className="abu-backup-button abu-remove-phone-button"
                onClick={handleRemovePhone}
              >
                Remove<br />Backup Phone<br />Number
              </button>
            </div>

            <div className="abu-backup-code-row abu-phone-code-row">
              <input 
                className="abu-backup-code-input" 
                type="text"
                placeholder="Enter OTP"
                value={phoneOtp}
                onChange={handlePhoneOtpChange}
                disabled={!phoneOtpSent || phoneVerified}
              />
              <button 
                className={`abu-backup-button ${(!phoneOtpSent || phoneVerified) ? 'disabled' : ''}`}
                onClick={handleSubmitPhoneOtp}
                disabled={!phoneOtpSent || phoneVerified}
              >
                Submit
              </button>
            </div>
          </div>

          <div className="abu-backup-actions">
            <button className="abu-backup-action-button">Save Backup Details</button>
            <button className="abu-backup-action-button" onClick={goBack}>Cancel</button>
          </div>

        </div>
      </div>

      {/* OTP Sent Popup */}
      {showOtpSentPopup && (
        <div className="abu-backup-popup-overlay">
          <div className="abu-backup-popup-box">
            <div className="abu-backup-popup-checkmark">📧</div>
            <h2 className="abu-backup-popup-title">{otpSentMessage}</h2>
            <button 
              className="abu-backup-popup-button"
              onClick={handleCloseOtpSentPopup}
            >
              OK
            </button>
          </div>
        </div>
      )}

      {/* Success Popup */}
      {showSuccessPopup && (
        <div className="abu-backup-popup-overlay">
          <div className="abu-backup-popup-box">
            <div className="abu-backup-popup-checkmark">✓</div>
            <h2 className="abu-backup-popup-title">{successMessage}</h2>
            <button 
              className="abu-backup-popup-button"
              onClick={handleCloseSuccessPopup}
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
}