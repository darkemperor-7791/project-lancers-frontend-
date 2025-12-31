import React from "react";
import "../../styles/settings/Profile.css";
import { Pencil } from "lucide-react";
import { useNavigate } from "react-router-dom";

import Sidebar from "../../components/Sidebar";

export default function SettingsProfile({ isSidebarOpen }) {


  return (
    <div
      className={`app-container pf-settings-profile-page ${
        isSidebarOpen ? "settings-sidebar-open" : "settings-sidebar-closed"
      }`}
      style={{ paddingTop: "130px" }}
    >
      <main className="pf-main-content">

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
          <a href="bilpay" className="sidebar-link">Billing & Payments</a>
          <a href="/notiset" className="sidebar-link">Notification Settings</a>
          <a href="/appear" className="sidebar-link">Appearance</a>
          <a href="/useranal" className="sidebar-link">User Analytics</a>
          <a href="/support" className="sidebar-link">Support</a>
        </Sidebar>

        <div className="pf-content-area">

          <section className="pf-card">
            <a href="/setpfps" className="pf-edit-icon">
              <Pencil />
            </a>

            <div className="pf-profile-header">
              <div className="pf-profile-avatar"></div>

              <div className="pf-profile-info">
                <h3 className="pf-profile-name">Freelancer's Name</h3>

                <div className="pf-profile-details">
                  <p>E-mail : gmail@putin.com</p>
                  <p>Phone No. : +2 9352462176</p>
                  <p>Date of Birth : 14 / 03 / 1998</p>
                  <p>Country : Russia</p>
                  <p><strong>Time since joined :</strong> 3 years</p>
                </div>
              </div>
            </div>
            <div className="pf-user-description">
            <span className="pf-about-user">A note about user :</span>
            <div className="pf-bio-box">
                <span className="pf-bio">Tell us about yourself......</span>
              </div>
            </div>
          </section>

          <section className="pf-card pf-skills-container">
            <div className="pf-skills-row">
              <span className="pf-skills-label">Skills :</span>
              <div className="pf-tags-wrapper">
                {["Python", "JavaScript", "C++", "Java"].map(skill => (
                  <span key={skill} className="pf-tag">{skill}</span>
                ))}
              </div>
            </div>

            <div className="pf-skills-row">
              <span className="pf-skills-label">Domains :</span>
              <div className="pf-tags-wrapper">
                {["Data Science", "Web Development"].map(domain => (
                  <span key={domain} className="pf-tag">{domain}</span>
                ))}
              </div>
            </div>
          </section>

          <section className="pf-card pf-experience-layout">
            <span className="pf-skills-label">Experience :</span>

            <div>
              <div className="pf-project-box">
                <span className="pf-project-line">Project 1 :  . . . . . . . . . . . . . . . . </span>
                </div>
             
            </div>
          </section>

        </div>
      </main>
    </div>
  );
}
