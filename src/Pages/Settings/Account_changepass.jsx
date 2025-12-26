
import React, { useState } from 'react';
import "../../styles/settings/Account_changepass.css";
import { useNavigate } from "react-router-dom";

export default function ChangePasswordForm() {
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const navigate = useNavigate();

  // OTP States
  const [otpGenerated, setOtpGenerated] = useState(false);
  const [generatedOTP, setGeneratedOTP] = useState('');
  const [otpInput, setOtpInput] = useState('');
  const [otpVerified, setOtpVerified] = useState(false);
  const [otpError, setOtpError] = useState('');

  const calculatePasswordStrength = (password) => {
    const len = password.length;
    if (len === 0) return 0;
    if (len <= 2) return 1;
    if (len === 3) return 2;
    if (len <= 5) return 3;
    if (len === 6) return 4;
    if (len === 7) return 5;
    if (len <= 9) return 6;
    if (len <= 12) return 7;
    if (len <= 14) return 8;
    return 9;
  };

  const strength = calculatePasswordStrength(newPassword);

  const isPasswordValid = () =>
    currentPassword.trim() !== '' &&
    strength >= 5 &&
    newPassword === confirmPassword &&
    confirmPassword !== '';

  const handleGenerateOTP = () => {
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    setGeneratedOTP(otp);
    setOtpGenerated(true);
    setOtpVerified(false);
    setOtpInput('');
    setOtpError('');
    alert(`Your OTP is: ${otp}\n(This is for demo purposes. In production, this would be sent to your registered email/phone)`);
  };

  const handleOTPInputChange = (e) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, 6);
    setOtpInput(value);
    setOtpError('');
  };

  const handleVerifyOTP = () => {
    if (!otpInput) {
      setOtpError('Please enter the OTP code');
      return;
    }
    if (otpInput !== generatedOTP) {
      setOtpError('Invalid OTP. Please try again.');
      return;
    }
    setOtpVerified(true);
    setOtpError('');
    alert('OTP verified successfully! You can now update your password.');
  };

  const handleResendOTP = () => {
    handleGenerateOTP();
  };

  const handleUpdatePassword = () => {
    if (isPasswordValid() && otpVerified) {
      setShowSuccessPopup(true);
    } else if (!otpVerified) {
      alert('Please verify OTP before updating password');
    }
  };

  const handleOKClick = () => {
    setShowSuccessPopup(false);
    navigate("/setac")
    alert('Redirecting to Account Security page...');
  };

  const getCircleColor = (index) => {
    if (index < 2) return '#ff4444';
    if (index < 5) return '#ffcc00';
    return '#44ff44';
  };

  return (
    <div className="acp-container">
      <div className="acp-outer-box">
        <div className="acp-form-box">
          <h1 className="acp-form-title">Change Password</h1>

          <div className="acp-form-content">
            {/* CURRENT PASSWORD */}
            <div className="acp-field-wrapper">
              <div className="acp-field-row">
                <label className="acp-field-label">Current Password :</label>
                <div className="acp-input-container">
                  <input
                    type={showCurrentPassword ? 'text' : 'password'}
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    className="acp-password-input"
                  />
                  <button
                    onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                    className="acp-eye-button"
                  >
                    👁
                  </button>
                </div>
              </div>
              <div className="acp-forgot-password-wrapper">
                <a href="#" className="acp-forgot-password-link">
                  Forgot Password?
                </a>
              </div>
            </div>

            {/* NEW PASSWORD */}
            <div className="acp-field-wrapper">
              <div className="acp-field-row">
                <label className="acp-field-label">New Password :</label>
                <div className="acp-input-container">
                  <input
                    type={showNewPassword ? 'text' : 'password'}
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    className="acp-password-input"
                  />
                  <button
                    onClick={() => setShowNewPassword(!showNewPassword)}
                    className="acp-eye-button"
                  >
                    👁
                  </button>
                </div>
              </div>
            </div>

            {/* CONFIRM PASSWORD */}
            <div className="acp-field-wrapper">
              <div className="acp-field-row">
                <label className="acp-field-label">Confirm Password :</label>
                <div className="acp-input-container">
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="acp-password-input"
                  />
                  <button
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="acp-eye-button"
                  >
                    👁
                  </button>
                </div>
              </div>

              {confirmPassword && newPassword !== confirmPassword && (
                <div className="acp-error-message">Passwords don't match</div>
              )}
            </div>

            {/* STRENGTH */}
            <div className="acp-strength-indicator">
              <span className="acp-strength-label">Password Strength :</span>
              <div className="acp-strength-dots">
                {[...Array(9)].map((_, index) => (
                  <span
                    key={index}
                    className="acp-strength-dot"
                    style={{
                      backgroundColor: index < strength ? getCircleColor(index) : '#8a9a9a',
                      boxShadow: index < strength ? '0 0 5px rgba(0,0,0,0.3)' : 'none',
                    }}
                  />
                ))}
              </div>
            </div>

            {/* OTP GENERATION BUTTON */}
            {isPasswordValid() && !otpVerified && (
              <div className="acp-otp-generate-section">
                <button
                  onClick={handleGenerateOTP}
                  className="acp-generate-otp-button"
                  disabled={otpGenerated}
                  style={{
                    backgroundColor: otpGenerated ? '#9a9a9a' : '#4a9dbf',
                    cursor: otpGenerated ? 'not-allowed' : 'pointer',
                    opacity: otpGenerated ? 0.7 : 1,
                  }}
                >
                  {otpGenerated ? 'OTP Sent' : 'Generate OTP'}
                </button>
              </div>
            )}

            {/* OTP VERIFICATION SECTION */}
            {otpGenerated && !otpVerified && (
              <div className="acp-otp-verification-section">
                <div className="acp-otp-box">
                  <p className="acp-otp-instruction">
                    Enter the 6-digit OTP sent to your registered email/phone
                  </p>

                  <div className="acp-otp-input-row">
                    <input
                      type="text"
                      value={otpInput}
                      onChange={handleOTPInputChange}
                      placeholder="Enter 6-digit OTP"
                      maxLength="6"
                      className="acp-otp-input"
                    />
                    <button onClick={handleVerifyOTP} className="acp-verify-otp-button">
                      Verify OTP
                    </button>
                  </div>

                  {otpError && <div className="acp-otp-error">{otpError}</div>}

                  <button onClick={handleResendOTP} className="acp-resend-otp-button">
                    Resend OTP
                  </button>
                </div>
              </div>
            )}

            {/* OTP VERIFIED MESSAGE */}
            {otpVerified && (
              <div className="acp-otp-verified-message">
                <span className="acp-verified-checkmark">✓</span>
                <span className="acp-verified-text">OTP Verified Successfully</span>
              </div>
            )}

            {/* BUTTONS */}
            <div className="acp-button-container">
              <button
                onClick={handleUpdatePassword}
                disabled={!isPasswordValid() || !otpVerified}
                className="acp-form-button acp-update-button"
                style={{
                  backgroundColor: !isPasswordValid() || !otpVerified ? '#9a9a9a' : '#d4dbd9',
                  color: !isPasswordValid() || !otpVerified ? '#666666' : '#000000',
                  cursor: !isPasswordValid() || !otpVerified ? 'not-allowed' : 'pointer',
                  opacity: !isPasswordValid() || !otpVerified ? 0.6 : 1,
                }}
              >
                Update Password
              </button>

              <button className="acp-form-button" onClick={() => alert('Cancelled')}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* SUCCESS POPUP */}
      {showSuccessPopup && (
        <div className="acp-popup-overlay">
          <div className="acp-popup-box">
            <div className="acp-popup-checkmark">✓</div>
            <h2 className="acp-popup-title">Password changed successfully</h2>
            <button onClick={handleOKClick} className="acp-popup-button" useNavigate>
              OK
            </button>
          </div>
        </div>
      )}</div>
      )}