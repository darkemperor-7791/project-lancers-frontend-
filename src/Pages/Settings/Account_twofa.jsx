import React, { useState } from 'react';
import '../../styles/settings/Account_twofa.css';
import { ChevronDown } from "lucide-react";
import Sidebar from "../../components/Sidebar";
import { useNavigate } from "react-router-dom";

export default function TwoFactorAuth({ isSidebarOpen }) {
  const navigate = useNavigate();

  const [authAppExpanded, setAuthAppExpanded] = useState(false);
  const [smsExpanded, setSmsExpanded] = useState(false);
  const [emailExpanded, setEmailExpanded] = useState(false);

  const [authAppStatus, setAuthAppStatus] = useState(false);
  const [smsStatus, setSmsStatus] = useState(false);
  const [emailStatus, setEmailStatus] = useState(false);

  const [authCode, setAuthCode] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [emailId, setEmailId] = useState('');
  const [emailCode, setEmailCode] = useState('');

  const [smsVerified, setSmsVerified] = useState(false);
  const [emailVerified, setEmailVerified] = useState(false);

  // OTP generation and verification states
  const [generatedSmsOtp, setGeneratedSmsOtp] = useState('');
  const [generatedEmailOtp, setGeneratedEmailOtp] = useState('');
  const [smsOtpSent, setSmsOtpSent] = useState(false);
  const [emailOtpSent, setEmailOtpSent] = useState(false);

  // Popup states
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

  // SMS handlers
  const handlePhoneChange = (e) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, 10);
    setPhoneNumber(value);
    if (smsOtpSent) {
      setSmsOtpSent(false);
      setOtp('');
      setGeneratedSmsOtp('');
    }
  };

  const handleVerifySms = () => {
    if (isValidPhone(phoneNumber)) {
      const otpCode = generateOtp();
      setGeneratedSmsOtp(otpCode);
      setSmsOtpSent(true);
      setOtpSentMessage('OTP has been sent to your phone number');
      setShowOtpSentPopup(true);
      console.log('SMS OTP:', otpCode);
    } else {
      alert('Please enter a valid 10-digit phone number');
    }
  };

  const handleSmsOtpChange = (e) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, 6);
    setOtp(value);
  };

  const handleSubmitSmsOtp = () => {
    if (!isValidOtp(otp)) {
      alert('Please enter a valid 6-digit OTP');
      return;
    }
    
    if (otp === generatedSmsOtp) {
      setSmsVerified(true);
      setSuccessMessage(`${phoneNumber} has been verified successfully.`);
      setShowSuccessPopup(true);
    } else {
      alert('Invalid OTP. Please try again.');
    }
  };

  // Email handlers
  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmailId(value);
    if (emailOtpSent) {
      setEmailOtpSent(false);
      setEmailCode('');
      setGeneratedEmailOtp('');
    }
  };

  const handleVerifyEmail = () => {
    if (isValidEmail(emailId)) {
      const otpCode = generateOtp();
      setGeneratedEmailOtp(otpCode);
      setEmailOtpSent(true);
      setOtpSentMessage('OTP has been sent to your email');
      setShowOtpSentPopup(true);
      console.log('Email OTP:', otpCode);
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
      setSuccessMessage(`${emailId} has been verified successfully.`);
      setShowSuccessPopup(true);
    } else {
      alert('Invalid OTP. Please try again.');
    }
  };

  // Auth App code handler
  const handleAuthCodeChange = (e) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, 6);
    setAuthCode(value);
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
    <div className="a2fa-page" style={{ paddingLeft: isSidebarOpen ? '240px' : '0' }}>
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

      <div className="a2fa-wrapper">
        <div className="a2fa-outer">
          <div className="a2fa-inner">

            <div className="a2fa-header">
              <h1 className="a2fa-title">2-Factor Authentication</h1>
              <span className="a2fa-date">Added on Aug 15, 2025</span>
            </div>

            <p className="a2fa-description">
              Add a second layer of security to protect user accounts even if the password is compromised.
            </p>

            {/* AUTH APP */}
            <div className="a2fa-section">
              <div
                className="a2fa-section-header"
                onClick={() => setAuthAppExpanded(!authAppExpanded)}
              >
                <h3 className="a2fa-section-title">Authenticator App</h3>
                <ChevronDown className={`a2fa-arrow ${authAppExpanded ? "a2fa-arrow-open" : ""}`} />
              </div>

              {authAppExpanded && (
                <div className="a2fa-section-body">

                  <div className="a2fa-toggle-row">
                    <span>Enable Authenticator App</span>
                    <label className="a2fa-android-switch">
                      <input
                        type="checkbox"
                        checked={authAppStatus}
                        onChange={e => setAuthAppStatus(e.target.checked)}
                      />
                      <span className="a2fa-slider"></span>
                    </label>
                  </div>

                  <div className="a2fa-qr-block">
                    <div className="a2fa-qr-box">(QR Code)</div>
                    <p className="a2fa-qr-guide">
                      Scan the QR code using Authenticator App
                    </p>
                  </div>

                  <div className="a2fa-input-row">
                    <label>Enter 6 digit verification code :</label>
                    <input
                      className='a2fa-code-input'
                      type="text"
                      maxLength={6}
                      inputMode="numeric"
                      pattern="[0-9]*"
                      value={authCode}
                      onChange={handleAuthCodeChange}
                    />
                    <button>Verify and enable</button>
                  </div>

                  <div className="a2fa-recovery-block">
                    <button className="a2fa-link-btn">View/Make recovery code</button>
                    <div className="a2fa-recovery-code">XXXX-XXXX-XXXX-XXXX</div>
                  </div>
                </div>
              )}
            </div>

            {/* SMS */}
            <div className="a2fa-section">
              <div
                className="a2fa-section-header"
                onClick={() => setSmsExpanded(!smsExpanded)}
              >
                <h3 className="a2fa-section-title">SMS Verification</h3>
                <ChevronDown className={`a2fa-arrow ${smsExpanded ? "a2fa-arrow-open" : ""}`} />
              </div>

              {smsExpanded && (
                <div className="a2fa-section-body">

                  <div className="a2fa-toggle-row">
                    <span>Enable SMS Verification</span>
                    <label className="a2fa-android-switch">
                      <input
                        type="checkbox"
                        checked={smsStatus}
                        onChange={e => setSmsStatus(e.target.checked)}
                      />
                      <span className="a2fa-slider"></span>
                    </label>
                  </div>

                  <div className="a2fa-input-row">
                    <label>Phone Number :</label>
                    <input
                      maxLength={10}
                      type="text"
                      value={phoneNumber}
                      onChange={handlePhoneChange}
                      disabled={smsVerified}
                    />
                    <button 
                      onClick={handleVerifySms}
                      disabled={smsVerified}
                    >
                      Verify
                    </button>
                  </div>

                  <div className="a2fa-input-row">
                    <label>Enter the OTP :</label>
                    <input
                      maxLength={6}
                      type="text"
                      value={otp}
                      onChange={handleSmsOtpChange}
                      disabled={!smsOtpSent || smsVerified}
                    />
                    <button 
                      onClick={handleSubmitSmsOtp}
                      disabled={!smsOtpSent || smsVerified}
                    >
                      Submit
                    </button>
                  </div>

                  {smsVerified && (
                    <div className="a2fa-verified-box">
                      <div className="a2fa-verified-banner">VERIFICATION SUCCESSFUL</div>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* EMAIL */}
            <div className="a2fa-section">
              <div
                className="a2fa-section-header"
                onClick={() => setEmailExpanded(!emailExpanded)}
              >
                <h3 className="a2fa-section-title">Email Verification</h3>
                <ChevronDown className={`a2fa-arrow ${emailExpanded ? "a2fa-arrow-open" : ""}`} />
              </div>

              {emailExpanded && (
                <div className="a2fa-section-body">

                  <div className="a2fa-toggle-row">
                    <span>Enable Email Verification</span>
                    <label className="a2fa-android-switch">
                      <input
                        type="checkbox"
                        checked={emailStatus}
                        onChange={e => setEmailStatus(e.target.checked)}
                      />
                      <span className="a2fa-slider"></span>
                    </label>
                  </div>

                  <div className="a2fa-input-row">
                    <label>Email Id :</label>
                    <input 
                      type="text" 
                      value={emailId} 
                      onChange={handleEmailChange}
                      disabled={emailVerified}
                    />
                    <button 
                      onClick={handleVerifyEmail}
                      disabled={emailVerified}
                    >
                      Verify
                    </button>
                  </div>

                  <div className="a2fa-input-row">
                    <label>Enter the code :</label>
                    <input
                      maxLength={6}
                      type="text"
                      value={emailCode}
                      onChange={handleEmailCodeChange}
                      disabled={!emailOtpSent || emailVerified}
                    />
                    <button 
                      onClick={handleSubmitEmailCode}
                      disabled={!emailOtpSent || emailVerified}
                    >
                      Submit Code
                    </button>
                  </div>

                  {emailVerified && (
                    <div className="a2fa-verified-box">
                      <div className="a2fa-verified-banner">VERIFICATION SUCCESSFUL</div>
                    </div>
                  )}
                </div>
              )}
            </div>

          </div>
        </div>
      </div>

      {/* OTP Sent Popup */}
      {showOtpSentPopup && (
        <div className="a2fa-popup-overlay">
          <div className="a2fa-popup-box">
            <div className="a2fa-popup-checkmark">📧</div>
            <h2 className="a2fa-popup-title">{otpSentMessage}</h2>
            <button 
              className="a2fa-popup-button"
              onClick={handleCloseOtpSentPopup}
            >
              OK
            </button>
          </div>
        </div>
      )}

      {/* Success Popup */}
      {showSuccessPopup && (
        <div className="a2fa-popup-overlay">
          <div className="a2fa-popup-box">
            <div className="a2fa-popup-checkmark">✓</div>
            <h2 className="a2fa-popup-title">{successMessage}</h2>
            <button 
              className="a2fa-popup-button"
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