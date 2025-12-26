import React, { useState } from 'react';
import "../../styles/settings/Profile_edit_account.css";
import { Mail, Phone } from 'lucide-react';
import Sidebar from "../../components/Sidebar";

export default function AccountCredentialsForm() {

    
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [emailVerified, setEmailVerified] = useState(false);
  const [phoneVerified, setPhoneVerified] = useState(false);
  
  // Store verified values to compare against
  const [verifiedEmail, setVerifiedEmail] = useState('');
  const [verifiedPhone, setVerifiedPhone] = useState('');
  
  // OTP states
  const [showEmailOTP, setShowEmailOTP] = useState(false);
  const [showPhoneOTP, setShowPhoneOTP] = useState(false);
  const [emailOTP, setEmailOTP] = useState('');
  const [phoneOTP, setPhoneOTP] = useState('');
  const [generatedEmailOTP, setGeneratedEmailOTP] = useState('');
  const [generatedPhoneOTP, setGeneratedPhoneOTP] = useState('');
  const [emailOTPError, setEmailOTPError] = useState('');
  const [phoneOTPError, setPhoneOTPError] = useState('');

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validatePhone = (phone) => /^[\d\s\-\+\(\)]{10,}$/.test(phone);

  const generateOTP = () => {
    return Math.floor(100000 + Math.random() * 900000).toString();
  };

  // Check if email has changed from verified value
  const isEmailChanged = () => {
    return emailVerified && email !== verifiedEmail;
  };

  // Check if phone has changed from verified value
  const isPhoneChanged = () => {
    return phoneVerified && phoneNumber !== verifiedPhone;
  };

  // Determine email button state
  const getEmailButtonState = () => {
    if (showEmailOTP) return { disabled: true, text: 'verify', verified: false };
    if (emailVerified && !isEmailChanged()) return { disabled: true, text: '✓ verified', verified: true };
    return { disabled: false, text: 'verify', verified: false };
  };

  // Determine phone button state
  const getPhoneButtonState = () => {
    if (showPhoneOTP) return { disabled: true, text: 'verify', verified: false };
    if (phoneVerified && !isPhoneChanged()) return { disabled: true, text: '✓ verified', verified: true };
    return { disabled: false, text: 'verify', verified: false };
  };

  const handleEmailChange = (value) => {
    setEmail(value);
    // If email changes from verified value, invalidate verification
    if (emailVerified && value !== verifiedEmail) {
      setEmailVerified(false);
    }
    // If email matches verified value again, restore verification
    if (!emailVerified && value === verifiedEmail && verifiedEmail !== '') {
      setEmailVerified(true);
    }
  };

  const handlePhoneChange = (value) => {
    setPhoneNumber(value);
    // If phone changes from verified value, invalidate verification
    if (phoneVerified && value !== verifiedPhone) {
      setPhoneVerified(false);
    }
    // If phone matches verified value again, restore verification
    if (!phoneVerified && value === verifiedPhone && verifiedPhone !== '') {
      setPhoneVerified(true);
    }
  };

  const handleEmailVerify = () => {
    if (!email) {
      alert('Please enter your email address');
      return;
    }
    if (!validateEmail(email)) {
      alert('Please enter a valid email address');
      return;
    }

    const otp = generateOTP();
    setGeneratedEmailOTP(otp);
    setShowEmailOTP(true);
    setEmailOTPError('');
    setEmailOTP('');
    alert(`Verification code sent to ${email}\nYour OTP is: ${otp} (for demo purposes)`);
  };

  const handlePhoneVerify = () => {
    if (!phoneNumber) {
      alert('Please enter your phone number');
      return;
    }
    if (!validatePhone(phoneNumber)) {
      alert('Please enter a valid phone number');
      return;
    }

    const otp = generateOTP();
    setGeneratedPhoneOTP(otp);
    setShowPhoneOTP(true);
    setPhoneOTPError('');
    setPhoneOTP('');
    alert(`Verification code sent to ${phoneNumber}\nYour OTP is: ${otp} (for demo purposes)`);
  };

  const handleEmailOTPVerify = () => {
    if (!emailOTP) {
      setEmailOTPError('Please enter the OTP code');
      return;
    }
    if (emailOTP !== generatedEmailOTP) {
      setEmailOTPError('Invalid OTP code. Please try again.');
      return;
    }
    
    setEmailVerified(true);
    setVerifiedEmail(email); // Store the verified email
    setShowEmailOTP(false);
    setEmailOTPError('');
    alert('Email verified successfully!');
  };

  const handlePhoneOTPVerify = () => {
    if (!phoneOTP) {
      setPhoneOTPError('Please enter the OTP code');
      return;
    }
    if (phoneOTP !== generatedPhoneOTP) {
      setPhoneOTPError('Invalid OTP code. Please try again.');
      return;
    }
    
    setPhoneVerified(true);
    setVerifiedPhone(phoneNumber); // Store the verified phone
    setShowPhoneOTP(false);
    setPhoneOTPError('');
    alert('Phone number verified successfully!');
  };

  const handleResendEmailOTP = () => {
    const otp = generateOTP();
    setGeneratedEmailOTP(otp);
    setEmailOTP('');
    setEmailOTPError('');
    alert(`New verification code sent to ${email}\nYour OTP is: ${otp} (for demo purposes)`);
  };

  const handleResendPhoneOTP = () => {
    const otp = generateOTP();
    setGeneratedPhoneOTP(otp);
    setPhoneOTP('');
    setPhoneOTPError('');
    alert(`New verification code sent to ${phoneNumber}\nYour OTP is: ${otp} (for demo purposes)`);
  };

  const handleComplete = () => {
    if (!email || !phoneNumber) {
      alert('Please fill in all mandatory fields');
      return;
    }
    if (!emailVerified) {
      alert('Please verify your email address');
      return;
    }
    if (!phoneVerified) {
      alert('Please verify your phone number');
      return;
    }

    alert('Account credentials completed successfully!');
  };

  const emailButtonState = getEmailButtonState();
  const phoneButtonState = getPhoneButtonState();

  return (
    
    <div className="pfac-page">
      <div className="pfac-card">
        {/* HEADER */}
        <div className="pfac-header">
          <h1 className="pfac-title">Account Credentials</h1>
          <p className="pfac-desc">
            Trust and safety is a big deal in our community. Please verify your email and phone
            number so that we can keep your account secure.
          </p>
        </div>

        {/* EMAIL SECTION */}
        <div className="pfac-section">
          <div className="pfac-row">
            <div className="pfac-label">
              <Mail size={20} />
              <span>Email*</span>
            </div>

            <input
              type="email"
              value={email}
              onChange={(e) => handleEmailChange(e.target.value)}
              disabled={showEmailOTP}
              placeholder="Enter your email"
              className={`pfac-input ${showEmailOTP ? 'pfac-input-disabled' : ''}`}
            />

            <button
              onClick={handleEmailVerify}
              disabled={emailButtonState.disabled}
              className={`pfac-verify-btn ${emailButtonState.verified ? 'pfac-verified' : ''}`}
            >
              {emailButtonState.text}
            </button>
          </div>

          {/* EMAIL OTP SECTION */}
          {showEmailOTP && !emailVerified && (
            <div className="pfac-otp-section">
              <div className="pfac-otp-container">
                <div className="pfac-otp-header">
                  <p className="pfac-otp-instruction">
                    Enter the 6-digit code sent to <strong>{email}</strong>
                  </p>
                </div>
                
                <div className="pfac-otp-input-group">
                  <input
                    type="text"
                    value={emailOTP}
                    onChange={(e) => {
                      const value = e.target.value.replace(/\D/g, '').slice(0, 6);
                      setEmailOTP(value);
                      setEmailOTPError('');
                    }}
                    placeholder="Enter 6-digit OTP"
                    maxLength="6"
                    className={`pfac-otp-input ${emailOTPError ? 'pfac-otp-input-error' : ''}`}
                  />
                  
                  <button
                    onClick={handleEmailOTPVerify}
                    className="pfac-otp-verify-btn"
                  >
                    Verify OTP
                  </button>
                </div>

                {emailOTPError && (
                  <p className="pfac-otp-error">{emailOTPError}</p>
                )}

                <div className="pfac-otp-actions">
                  <button
                    onClick={handleResendEmailOTP}
                    className="pfac-otp-resend"
                  >
                    Resend Code
                  </button>
                  <button
                    onClick={() => {
                      setShowEmailOTP(false);
                      setEmailOTP('');
                      setEmailOTPError('');
                    }}
                    className="pfac-otp-cancel"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* PHONE SECTION */}
        <div className="pfac-section pfac-section-last">
          <div className="pfac-row">
            <div className="pfac-label">
              <Phone size={20} />
              <span>Phone number*</span>
            </div>

            <input
              type="tel"
              value={phoneNumber}
              onChange={(e) => handlePhoneChange(e.target.value)}
              disabled={showPhoneOTP}
              placeholder="Enter your phone number"
              className={`pfac-input ${showPhoneOTP ? 'pfac-input-disabled' : ''}`}
            />

            <button
              onClick={handlePhoneVerify}
              disabled={phoneButtonState.disabled}
              className={`pfac-verify-btn ${phoneButtonState.verified ? 'pfac-verified' : ''}`}
            >
              {phoneButtonState.text}
            </button>
          </div>

          {/* PHONE OTP SECTION */}
          {showPhoneOTP && !phoneVerified && (
            <div className="pfac-otp-section">
              <div className="pfac-otp-container">
                <div className="pfac-otp-header">
                  <p className="pfac-otp-instruction">
                    Enter the 6-digit code sent to <strong>{phoneNumber}</strong>
                  </p>
                </div>
                
                <div className="pfac-otp-input-group">
                  <input
                    type="text"
                    value={phoneOTP}
                    onChange={(e) => {
                      const value = e.target.value.replace(/\D/g, '').slice(0, 6);
                      setPhoneOTP(value);
                      setPhoneOTPError('');
                    }}
                    placeholder="Enter 6-digit OTP"
                    maxLength="6"
                    className={`pfac-otp-input ${phoneOTPError ? 'pfac-otp-input-error' : ''}`}
                  />
                  
                  <button
                    onClick={handlePhoneOTPVerify}
                    className="pfac-otp-verify-btn"
                  >
                    Verify OTP
                  </button>
                </div>

                {phoneOTPError && (
                  <p className="pfac-otp-error">{phoneOTPError}</p>
                )}

                <div className="pfac-otp-actions">
                  <button
                    onClick={handleResendPhoneOTP}
                    className="pfac-otp-resend"
                  >
                    Resend Code
                  </button>
                  <button
                    onClick={() => {
                      setShowPhoneOTP(false);
                      setPhoneOTP('');
                      setPhoneOTPError('');
                    }}
                    className="pfac-otp-cancel"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* COMPLETE */}
        <div className="pfac-complete-wrapper">
          <button onClick={handleComplete} className="pfac-complete-btn">
            Complete
          </button>
        </div>
      </div>
    </div>
  );
}