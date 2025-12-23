import React, { useState } from 'react';
import '../../styles/settings/Account_changepass.css';
import Sidebar from "../../components/Sidebar";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function ChangePasswordForm({ isSidebarOpen }) {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

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

  const handleUpdatePassword = () => {
    if (isPasswordValid()) setShowSuccessPopup(true);
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

            {/* SIDEBAR */}
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
                  >👁</button>
                </div>
              </div>
              <div className="acp-forgot-password-wrapper">
                <a href="#" className="acp-forgot-password-link">Forgot Password?</a>
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
                  >👁</button>
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
                  >👁</button>
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
                      boxShadow: index < strength ? '0 0 5px rgba(0,0,0,0.3)' : 'none'
                    }}
                  />
                ))}
              </div>
            </div>

            {/* BUTTONS */}
            <div className="acp-button-container">
              <button
                onClick={handleUpdatePassword}
                disabled={!isPasswordValid()}
                className="acp-form-button acp-update-button"
                style={{
                  backgroundColor: !isPasswordValid() ? '#9a9a9a' : '#d4dbd9',
                  color: !isPasswordValid() ? '#666666' : '#000000',
                  cursor: !isPasswordValid() ? 'not-allowed' : 'pointer',
                  opacity: !isPasswordValid() ? 0.6 : 1
                }}
              >
                Update Password
              </button>

              <button className="acp-form-button" onClick={goBack}>
                Cancel
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* POPUP */}
      {showSuccessPopup && (
        <div className="acp-popup-overlay">
          <div className="acp-popup-box">
            <div className="acp-popup-checkmark">✓</div>
            <h2 className="acp-popup-title">Password updated successfully</h2>
            <Link
              to="/setac"
              onClick={() => setShowSuccessPopup(false)}
              className="acp-popup-button"
            >
              OK
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
