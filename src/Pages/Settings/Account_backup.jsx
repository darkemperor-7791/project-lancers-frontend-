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
              <input className="abu-backup-input" />
              <button className="abu-backup-button">Verify</button>
              <button className="abu-backup-button abu-remove-button">
                Remove<br />Backup Email
              </button>
            </div>

            <div className="abu-backup-code-row">
              <input className="abu-backup-code-input" />
              <button className="abu-backup-button">Submit</button>
            </div>
          </div>

          {/* PHONE */}
          <div className="abu-backup-section abu-phone-section">
            <h3 className="abu-backup-section-title">Backup Phone Number</h3>

            <div className="abu-backup-input-row abu-phone-input-row">
              <input className="abu-backup-input" />
              <button className="abu-backup-button">Send OTP</button>
              <button className="abu-backup-button abu-remove-phone-button">
                Remove<br />Backup Phone<br />Number
              </button>
            </div>

            <div className="abu-backup-code-row abu-phone-code-row">
              <input className="abu-backup-code-input" />
              <button className="abu-backup-button">Submit</button>
            </div>
          </div>

          <div className="abu-backup-actions">
            <button className="abu-backup-action-button">Save Backup Details</button>
            <button className="abu-backup-action-button" onClick={goBack}>Cancel</button>
          </div>

        </div>
      </div>

      {showSuccessPopup && (
        <div className="abu-backup-popup-overlay">
          <div className="abu-backup-popup-box">
            <div className="abu-backup-popup-checkmark">✓</div>
            <h2 className="abu-backup-popup-title">{successMessage}</h2>
            <button className="abu-backup-popup-button">OK</button>
          </div>
        </div>
      )}
    </div>
  );
}
