import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
  useNavigate
} from "react-router-dom";

import { Bell, Heart } from "lucide-react";

import AuthPages from "./Pages/AuthPages";
import FindWorkPage from "./Pages/FindWorkPage";
import Notifications from "./Pages/notifications";
import Freelancers_list from "./Pages/Freelancers_list";
import SettingsProfile from "./Pages/settings_profile";

import "./styles/Navbar.css";

function NavBar({ onHamburgerClick }) {
  const location = useLocation();
  const navigate = useNavigate();

  const path = location.pathname;

  // Pages where navbar should NOT appear
  const hideNavbarOn = ["/notif", "/fl"];
  if (hideNavbarOn.includes(path)) return null;

  // Determine which button to show
  const isLoginPage = path === "/";
  const isFindWorkPage = path === "/find-work";

  const handleSwitch = () => {
    if (isLoginPage) navigate("/find-work");
    else navigate("/");
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <button className="hamburger-btn" aria-label="Open menu" onClick={onHamburgerClick}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        {/* OLD BUTTON STYLE RESTORED (nav-link) */}
        {(isLoginPage || isFindWorkPage) && (
          <button className="nav-link" onClick={handleSwitch}>
            {isLoginPage ? "Find Work" : "Login"}
          </button>
        )}

      </div>

      <div className="navbar-right">
        {/* Favorites - Hide on login page */}
        {!isLoginPage && (
          <Link to="/fl" className="icon-btn" aria-label="Freelancers">
            <Heart size={20} />
          </Link>
        )}

        {/* Notifications - Hide on login page */}
        {!isLoginPage && (
          <Link
            to="/notif"
            state={{ background: location }}
            className="icon-btn"
            aria-label="Notifications"
          >
            <Bell size={20} />
          </Link>
        )}

        {/* Profile Settings */}
        <Link to="/setpf" className="profile-icon" title="Settings"></Link>
      </div>
    </nav>
  );
}


/* ---------------- MAIN APP ---------------- */

export default function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleHamburgerClick = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Router>
      <NavBar onHamburgerClick={handleHamburgerClick} />

      <Routes>
        <Route path="/" element={<AuthPages />} />
        <Route path="/find-work" element={<FindWorkPage />} />

        {/* Floating pages — hide navbar */}
        <Route path="/notif" element={<Notifications />} />
        <Route path="/fl" element={<Freelancers_list />} />

        {/* Settings */}
        <Route path="/setpf" element={<SettingsProfile isSidebarOpen={isSidebarOpen} />} />
      </Routes>
    </Router>
  );
}