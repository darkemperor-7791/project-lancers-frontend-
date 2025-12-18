import React from "react";
import "../../styles/settings/Profile.css";
import { Pencil } from "lucide-react";
import { useNavigate } from "react-router-dom";

import Sidebar from "../../components/Sidebar";
import useAutoResizeTextarea from "../../hooks/useAutoResizeTextarea";

export default function SettingsProfile({ isSidebarOpen }) {

  // auto-resize hooks
  const bio = useAutoResizeTextarea();
  const project = useAutoResizeTextarea();
  const navigate = useNavigate();

  return (
    <div
      className={`app-container settings-profile-page ${
        isSidebarOpen ? "settings-sidebar-open" : "settings-sidebar-closed"
      }`}
      style={{ paddingTop: "130px" }}
    >
      <main className="main-content">

        {/* ✅ UNIVERSAL SIDEBAR */}
        <Sidebar
  isOpen={isSidebarOpen}
  title="Settings"
footer={
  <button
    className="btn-logout"
    onClick={() => navigate("/")}
  >
    Log out
  </button>
}

>
  <a href="/setpf" className="sidebar-link active">Profile</a>
  <a href="/setac" className="sidebar-link">Account Security</a>
  <a href="#" className="sidebar-link">Billing & Payments</a>
  <a href="#" className="sidebar-link">Notification Settings</a>
  <a href="#" className="sidebar-link">Appearance</a>
  <a href="#" className="sidebar-link">User Analytics</a>
  <a href="#" className="sidebar-link">Support</a>
</Sidebar>


        {/* RIGHT CONTENT */}
        <div className="content-area">

          {/* PROFILE CARD */}
          <section className="card">
            <button className="edit-icon">
              <Pencil />
            </button>

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

            {/* BIO */}
            <div>
              <textarea
                ref={bio.textareaRef}
                onInput={bio.handleInput}
                className="bio-box"
                placeholder="Tell us about yourself......"
              />
            </div>
          </section>

          {/* SKILLS */}
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

          {/* EXPERIENCE */}
          <section className="card experience-layout">
            <span className="skills-label">Experience :</span>
            <span className="Add Projects +"></span>

            <div>
              <textarea
                ref={project.textareaRef}
                onInput={project.handleInput}
                className="project-box"
                placeholder="Project 1 : ................ "
              />
            </div>
          </section>

        </div>
      </main>
    </div>
  );
}
