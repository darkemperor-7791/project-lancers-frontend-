import React, { useState } from "react";
import "../../styles/settings/Profile_edit_personal.css";
import { useNavigate } from "react-router-dom";
import useAutoResizeTextarea from "../../hooks/useAutoResizeTextarea";

export default function ProfilePersonal() {
  const [profilePicture, setProfilePicture] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const desc = useAutoResizeTextarea();

  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => setProfilePicture(reader.result);
    reader.readAsDataURL(file);
  };

  const handleContinue = () => {
  if (!firstName || !lastName || !displayName || !dateOfBirth) {
    alert("Please fill in all mandatory fields");
    return;
  }

  if (description && description.length < 150) {
    alert("If provided, description must be at least 150 characters");
    return;
  }

  // ✅ everything valid → go to professional details page
  navigate("/setpfpro");
};


  return (
    <div className="pfep-profile-page">
      <div className="pfep-profile-card">
        {/* HEADER */}
        <div className="pfep-profile-header">
          <h1 className="pfep-heading">Personal Information</h1>
          <p className="pfep-page-desc">
            Tell us about yourself. This information will appear on your public
            profile
            </p>
          <span className="pfep-mandatory-note">*Mandatory fields</span>
        </div>

        {/* FORM */}
        <div className="pfep-profile-form">
          {/* PROFILE PICTURE */}
          <div className="pfep-profile-picture-row">
            <label className="pfep-profile-picture-label">Profile Picture</label>

            <label htmlFor="profile-pic-input" className="pfep-profile-pic-wrapper">
              <input
                id="profile-pic-input"
                type="file"
                accept="image/*"
                hidden
                onChange={handleProfilePictureChange}
              />

              <div className="pfep-profile-pic-circle">
                {profilePicture ? (
                  <img src={profilePicture} alt="Profile" />
                ) : (
                  <span>Click to upload</span>
                )}
              </div>
            </label>
          </div>

          {/* FULL NAME */}
          <div className="pfep-form-row">
            <label>Full Name*</label>
            <div className="pfep-inline-inputs">
              <input
                className="pfep-name-boxes"
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <input
                className="pfep-name-boxes"
                type="text"
                placeholder="Last name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>

          {/* DISPLAY NAME */}
          <div className="pfep-form-row">
            <label className="pfep-display-name">Display Name*</label>
            <input
              className="pfep-name-boxes"
              type="text"
              placeholder="type your display name/username"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
            />
          </div>

          {/* DATE OF BIRTH */}
          <div className="pfep-form-row">
            <label>Date of Birth*</label>
            <input
            className="pfep-name-boxes"
              type="text"
              placeholder="Enter Date of birth"
              value={dateOfBirth}
              onChange={(e) => setDateOfBirth(e.target.value)}
              onFocus={(e) => (e.target.type = "date")}
              onBlur={(e) => {
                if (!e.target.value) e.target.type = "text";
              }}
            />
          </div>

          {/* USER DESCRIPTION */}
          <div className="pfep-form-row pfep-textarea-row">
            <label>User Description</label>

            <div className="pfep-textarea-wrapper">
              <textarea
                className="pfep-desc-box"
                
                rows={6}
                maxLength={500}
                ref={desc.textareaRef}
                onInput={desc.handleInput}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Ambitions and areas of interests, or about your career goals or motto to work here."
              />

              <div className="pfep-textarea-footer">
                <span>min. 150 characters</span>
                <span>{description.length}/500</span>
              </div>
            </div>
          </div>

          {/* CONTINUE */}
          <div className="pfep-continue-wrapper">
            <button href="/setpfps" onClick={handleContinue}>Continue</button>
          </div>
        </div>
      </div>
    </div>
  );
}
