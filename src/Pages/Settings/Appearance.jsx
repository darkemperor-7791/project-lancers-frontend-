import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import "../../styles/settings/Appearance.css";
import { Link } from "react-router-dom";

export default function AppearanceSettings({ isSidebarOpen }) {
  const navigate = useNavigate();
  const [themeMode, setThemeMode] = useState("system");
  const [accentColor, setAccentColor] = useState("default");

  return (
    <div
      className={`appearance-page coming-soon-wrapper ${
        isSidebarOpen ? "settings-sidebar-open" : "settings-sidebar-closed"
      }`}
    >
      {/* 🔒 LOCK LAYER */}
      <div className="coming-soon-lock">
        <button className="coming-soon-label" onClick={() => navigate(-1)} >Coming Soon</button>
      </div>

      {/* 🔓 BLURRED CONTENT */}
      <div className="appearance-container">
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
          <a href="/setac" className="sidebar-link">Account Security</a>
          <a href="/bilpay" className="sidebar-link">Billing & Payments</a>
          <a href="/notiset" className="sidebar-link">Notification Settings</a>
          <a href="/appear" className="sidebar-link active">Appearance</a>
          <a href="/useranal" className="sidebar-link">User Analytics</a>
          <a href="/support" className="sidebar-link">Support</a>
        </Sidebar>

        <div className="appearance-content">

          <section className="appearance-section">
            <h3 className="section-title">Theme and Mode</h3>

            <div className="radio-options-row">
              <label className="radio-option">
                <input
                  type="radio"
                  name="theme"
                  checked={themeMode === "light"}
                  onChange={() => setThemeMode("light")}
                />
                Light Mode
              </label>

              <label className="radio-option">
                <input
                  type="radio"
                  name="theme"
                  checked={themeMode === "dark"}
                  onChange={() => setThemeMode("dark")}
                />
                Dark Mode
              </label>

              <label className="radio-option">
                <input
                  type="radio"
                  name="theme"
                  checked={themeMode === "system"}
                  onChange={() => setThemeMode("system")}
                />
                System Default
              </label>
            </div>
          </section>

          <section className="appearance-section">
            <h3 className="section-title">Accent Colour / Theme Colour</h3>

            <div className="radio-options-grid">
              <label className="radio-option">
                <input
                  type="radio"
                  name="accent"
                  checked={accentColor === "default"}
                  onChange={() => setAccentColor("default")}
                />
                Default
              </label>

              <label className="radio-option">
                <input
                  type="radio"
                  name="accent"
                  checked={accentColor === "red"}
                  onChange={() => setAccentColor("red")}
                />
                Red
              </label>

              <label className="radio-option">
                <input
                  type="radio"
                  name="accent"
                  checked={accentColor === "green"}
                  onChange={() => setAccentColor("green")}
                />
                Green
              </label>

              <label className="radio-option">
                <input
                  type="radio"
                  name="accent"
                  checked={accentColor === "custom"}
                  onChange={() => setAccentColor("custom")}
                />
                Custom
              </label>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
