import React, { useState, useRef } from "react";
import "../../styles/settings/Profile_edit_personal.css";
import { useNavigate } from "react-router-dom";

export default function ProfilePersonal() {
  const navigate = useNavigate();

  /* =======================
     STATE
  ======================= */
  const [profilePicture, setProfilePicture] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [description, setDescription] = useState("");

  const hiddenDateRef = useRef(null);

  /* =======================
     HANDLERS
  ======================= */
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

    navigate("/setpfpro");
  };

  /* =======================
     JSX
  ======================= */
  return (
    <div className="pfep-profile-page">
      <div className="pfep-profile-card">

        {/* HEADER */}
        <div className="pfep-profile-header">
          <h1 className="pfep-heading">Personal Information</h1>
          <p className="pfep-page-desc">
            Tell us about yourself. This information will appear on your public profile
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
                placeholder="Last Name"
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
              placeholder="Type your display name / username"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
            />
          </div>

          {/* DATE OF BIRTH */}
<div className="pfep-form-row">
  <label>Date of Birth*</label>

  <div className="dob-wrapper">
    {/* Single visible input */}


    {/* Truly hidden native date picker */}
    <input
      ref={hiddenDateRef}
      type="date"
      tabIndex={-1}
      max={new Date().toISOString().split("T")[0]}
      onChange={(e) => {
        if (!e.target.value) return;
        const [yyyy, mm, dd] = e.target.value.split("-");
        setDateOfBirth(`${dd}-${mm}-${yyyy}`);
      }}
      className="dob-native-hidden"
    />
  </div>
</div>


          {/* USER DESCRIPTION */}
          <div className="pfep-form-row pfep-textarea-row">
            <label>User Description</label>

            <div className="pfep-textarea-wrapper">
              <textarea
                className="pfep-desc-box"
                rows={15}
                maxLength={500}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Ambitions, interests, career goals, or motto."
              />

              <div className="pfep-textarea-footer">
                <span>min. 150 characters</span>
                <span>{description.length}/500</span>
              </div>
            </div>
          </div>

          {/* CONTINUE */}
          <div className="pfep-continue-wrapper">
            <button onClick={handleContinue}>Continue</button>
          </div>

        </div>
      </div>
    </div>
  );
}
