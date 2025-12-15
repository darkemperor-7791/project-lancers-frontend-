import React from "react";
import "../styles/settings_profile.css";
import { Pencil } from "lucide-react";
import useAutoResizeTextarea from "../hooks/useAutoResizeTextarea"; // ✅ ADDED

export default function SettingsProfile({ isSidebarOpen }) {

  // ✅ ADDED: call the hook
  const { textareaRef, handleInput } = useAutoResizeTextarea();

  return (
    <div
      className={`app-container settings-profile-page ${
        isSidebarOpen ? "settings-sidebar-open" : "settings-sidebar-closed"
      }`}
      style={{ paddingTop: "130px" }}
    >
      {/* Removed internal header — global NavBar handles everything */}

      <main className="main-content">

        {/* SIDEBAR */}
        <aside className={`sidebar ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
          <h2 className="sidebar-title">Settings</h2>

          <ul className="sidebar-menu">
            <li className="menu-item active">Profile</li>
            <li className="menu-item">Billing and Payments</li>
            <li className="menu-item">Account</li>
            <li className="menu-item">Notification Settings</li>
            <li className="menu-item">Appearance</li>
            <li className="menu-item">Account Analytics</li>
            <li className="menu-item">Support</li>
          </ul>

          <div className="logout-container">
            <button className="btn-logout">Log out</button>
          </div>
        </aside>

        {/* RIGHT CONTENT */}
        <div className="content-area">
          <section className="card">
            <Pencil className="edit-icon" />

            <div className="profile-header">
              <div className="profile-avatar"></div>

              <div className="profile-info">
                <h3 className="profile-name">Freelancer's Name</h3>

                <div className="profile-details">
                  <p>E-mail : gmail@putin.com</p>
                  <p>Phone No. : +2 9352462176</p>
                  <p>Date of Birth : 14 / 03 / 1998</p>
                  <p>Country : Russia</p>
                  <p><strong>Time since joined :</strong> 3 years</p>
                </div>
              </div>
            </div>

            {/* ✅ ONLY THIS TEXTAREA WAS TOUCHED */}
            <div>
              <textarea
                ref={textareaRef}          // ✅ ADDED
                onInput={handleInput}      // ✅ ADDED
                className="bio-box"
                placeholder="Tell us about yourself......"
              />
            </div>
          </section>

          <section className="card skills-container">
            <div className="skills-row">
              <span className="skills-label">Skills :</span>

              <div className="tags-wrapper">
                {["Python", "JavaScript", "C++", "Java"].map(skill => (
                  <span key={skill} className="tag">{skill}</span>
                ))}
              </div>
            </div>

            <div className="skills-row">
              <span className="skills-label">Domains :</span>

              <div className="tags-wrapper">
                {["Data Science", "Web Development"].map(domain => (
                  <span key={domain} className="tag">{domain}</span>
                ))}
              </div>
            </div>
          </section>

          <section className="card experience-layout">
            <span className="skills-label">Experience :</span>
            <span className="Add Projects +"></span>

            <div className="project-box">
              <textarea
                ref={textareaRef}          // ✅ ADDED
                onInput={handleInput}      // ✅ ADDED
                className="bio-box"
                placeholder = "Project 1 : ................ "
              />
            </div>
          </section>

        </div>
      </main>
    </div>
  );
}
