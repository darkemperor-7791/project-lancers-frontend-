import React, { useState } from 'react';
import '../../styles/settings/Account_twofa.css';
import { ChevronDown } from "lucide-react";
import Sidebar from "../../components/Sidebar";

export default function TwoFactorAuth({ isSidebarOpen }) {

  /* 🔒 CLOSED BY DEFAULT */
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

  return (
    <div className="tfa-page" style={{ paddingLeft: isSidebarOpen ? '240px' : '0' }}>
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
                      <a href="#" className="sidebar-link">Billing & Payments</a>
                      <a href="#" className="sidebar-link">Notification Settings</a>
                      <a href="#" className="sidebar-link">Appearance</a>
                      <a href="#" className="sidebar-link">User Analytics</a>
                      <a href="#" className="sidebar-link">Support</a>
                    </Sidebar>
      <div className="tfa-wrapper">
        <div className="tfa-outer">
          <div className="tfa-inner">

            {/* HEADER */}
            <div className="tfa-header">
              <h1>2-Factor Authentication</h1>
              <span className="tfa-date">Added on Aug 15, 2025</span>
            </div>

            <p className="tfa-description">
              Add a second layer of security to protect user accounts even if the password is compromised.
            </p>

            {/* ================= AUTH APP ================= */}
            <div className="tfa-section">
              <div className="tfa-section-header" onClick={() => setAuthAppExpanded(!authAppExpanded)}>
                <h3>Authenticator App</h3>
                <ChevronDown className={`arrow ${authAppExpanded ? "open" : ""}`} />
              </div>

              {authAppExpanded && (
                <div className="tfa-section-body">

                  {/* ENABLE / DISABLE SWITCH */}
                  <div className="toggle-row">
                    <span>Enable Authenticator App</span>
                    <label className="android-switch">
                      <input
                        type="checkbox"
                        checked={authAppStatus}
                        onChange={e => setAuthAppStatus(e.target.checked)}
                      />
                      <span className="slider"></span>
                    </label>
                  </div>

                  <div className="qr-block">
                    <div className="qr-box">(QR Code)</div>
                    <p className="qr-guide">Scan the QR code using Authenticator App</p>
                  </div>

                  <div className="input-row">
                    <label>Enter 6 digit verification code :</label>
                    <input type="number" value={authCode} onChange={e => setAuthCode(e.target.value)} />
                    <button>Verify and enable</button>
                  </div>

                  <div className="recovery-block">
                    <button className="link-btn">View/Make recovery code</button>
                    <div className="recovery-code">XXXX-XXXX-XXXX-XXXX</div>
                  </div>
                </div>
              )}
            </div>

            {/* ================= SMS ================= */}
            <div className="tfa-section">
              <div className="tfa-section-header" onClick={() => setSmsExpanded(!smsExpanded)}>
                <h3>SMS Verification</h3>
                <ChevronDown className={`arrow ${smsExpanded ? "open" : ""}`} />
              </div>

              {smsExpanded && (
                <div className="tfa-section-body">

                  <div className="toggle-row">
                    <span>Enable SMS Verification</span>
                    <label className="android-switch">
                      <input
                        type="checkbox"
                        checked={smsStatus}
                        onChange={e => setSmsStatus(e.target.checked)}
                      />
                      <span className="slider"></span>
                    </label>
                  </div>

                  <div className="input-row">
                    <label>Phone Number :</label>
                    <input type="number" value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} />
                    <button>Verify</button>
                  </div>

                  <div className="input-row">
                    <label>Enter the OTP :</label>
                    <input type="number" value={otp} onChange={e => setOtp(e.target.value)} />
                    <button onClick={() => setSmsVerified(true)}>Submit OTP</button>
                  </div>

                  {smsVerified && (
                    <div className="verified-box">
                      <div className="verified-banner">VERIFICATION SUCCESSFUL</div>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* ================= EMAIL ================= */}
            <div className="tfa-section">
              <div className="tfa-section-header" onClick={() => setEmailExpanded(!emailExpanded)}>
                <h3>Email Verification</h3>
                <ChevronDown className={`arrow ${emailExpanded ? "open" : ""}`} />
              </div>

              {emailExpanded && (
                <div className="tfa-section-body">

                  <div className="toggle-row">
                    <span>Enable Email Verification</span>
                    <label className="android-switch">
                      <input
                        type="checkbox"
                        checked={emailStatus}
                        onChange={e => setEmailStatus(e.target.checked)}
                      />
                      <span className="slider"></span>
                    </label>
                  </div>

                  <div className="input-row">
                    <label>Email Id :</label>
                    <input type="email" value={emailId} onChange={e => setEmailId(e.target.value)} />
                    <button>Verify</button>
                  </div>

                  <div className="input-row">
                    <label>Enter the code :</label>
                    <input type="number" value={emailCode} onChange={e => setEmailCode(e.target.value)} />
                    <button onClick={() => setEmailVerified(true)}>Submit Code</button>
                  </div>

                  {emailVerified && (
                    <div className="verified-box">
                      <div className="verified-banner">VERIFICATION SUCCESSFUL</div>
                    </div>
                  )}
                </div>
              )}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
