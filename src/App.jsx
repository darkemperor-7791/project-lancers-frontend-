import React, { useState } from "react";
import coin from "./assets/coin.png";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
  useNavigate
} from "react-router-dom";

import { Bell, Heart, Home, ShoppingCart } from "lucide-react";

/* ===================== PAGES ===================== */
import AuthPages from "./Pages/AuthPages";
import FindWorkPage from "./Pages/FindWorkPage";
import Notifications from "./Pages/notifications";
import Freelancers_list from "./Pages/Freelancers_list";

/* ===================== SETTINGS ===================== */
import SettingsProfile from "./Pages/Settings/Profile";
import SettingsAccount from "./Pages/Settings/Account";
import UPIIDsPage from "./Pages/Settings/Account_upi";
import BankAccounts from "./Pages/Settings/Account_bank";
import WalletsPage from "./Pages/Settings/Account_wallet";
import ChangePasswordForm from "./Pages/Settings/Account_changepass";
import BackupContactsForm from "./Pages/Settings/Account_backup";
import AccountActivity from "./Pages/Settings/Account_activity";
import TwoFactorAuth from "./Pages/Settings/Account_twofa";
import DeactivateAccount from "./Pages/Settings/Account_deactivate";
import PermanentlyDeleteAccount from "./Pages/Settings/Account_delete";
import NotificationSettings from "./Pages/Settings/Notification_settings";
import AppearanceSettings from "./Pages/Settings/Appearance";

/* ===================== STYLES ===================== */
import "./components/Navbar.css";
import "./App.css";

/* ==================================
   NAVBAR (UPDATED VERSION)
================================== */
function NavBar({ onHamburgerClick }) {
  const location = useLocation();
  const navigate = useNavigate();
  const path = location.pathname;

  // Hide navbar on specific routes
  const hideNavbarOn = ["/notif", "/fl"];
  if (hideNavbarOn.includes(path)) return null;

  const isLoginPage = path === "/";
  const isFindWorkPage = path === "/find-work";

  const handleSwitch = () => {
    navigate(isLoginPage ? "/find-work" : "/");
  };

  return (
    <nav className="navbar">
      {/* LEFT */}
      <div className="navbar-left">
        <button className="hamburger-btn" onClick={onHamburgerClick}>
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </button>

        {/* LANCE LOGO */}
        <div className="lance-logo">LANCE</div>

        <button
          className={`icon-btn home-btn ${isLoginPage ? "disabled" : ""}`}
          aria-label="Home"
          onClick={() => !isLoginPage && navigate("/find-work")}
          disabled={isLoginPage}
        >
          <Home size={20} />
        </button>

        {(isLoginPage || isFindWorkPage) && (
          <button className="nav-link login-findwork-btn" onClick={handleSwitch}>
            {isLoginPage ? "Find Work" : "Login"}
          </button>
        )}
      </div>

      {/* RIGHT */}
      <div className="navbar-right">
        {!isLoginPage && (
          <div className="coin-display">
            <span className="coin-count">2500</span>
            <img className = "coin-logo" src={coin} />
          </div>
        )}

        {!isLoginPage && (
          <button
            className="icon-btn cart-btn"
            onClick={() => navigate("/bilpay")}
          >
            <ShoppingCart size={20} />
          </button>
        )}

        {!isLoginPage && (
          <Link to="/fl" className="icon-btn">
            <Heart size={20} />
          </Link>
        )}

        {!isLoginPage && (
          <Link to="/notif" className="icon-btn">
            <Bell size={20} />
          </Link>
        )}

        {!isLoginPage && (
          <Link to="/setpf" className="profile-icon" title="Settings" />
        )}
      </div>
    </nav>
  );
}

/* ==================================
   APP (ROUTER OWNER)
================================== */
export default function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <Router>
      <NavBar onHamburgerClick={() => setIsSidebarOpen(v => !v)} />

      <div className="page-content">
        <Routes>
          <Route path="/" element={<AuthPages />} />
          <Route path="/find-work" element={<FindWorkPage />} />
          <Route path="/notif" element={<Notifications />} />
          <Route path="/fl" element={<Freelancers_list />} />

          {/* SETTINGS */}
          <Route path="/setpf" element={<SettingsProfile isSidebarOpen={isSidebarOpen} />} />
          <Route path="/setac" element={<SettingsAccount isSidebarOpen={isSidebarOpen} />} />
          <Route path="/acupi" element={<UPIIDsPage isSidebarOpen={isSidebarOpen} />} />
          <Route path="/acbank" element={<BankAccounts isSidebarOpen={isSidebarOpen} />} />
          <Route path="/acwallet" element={<WalletsPage isSidebarOpen={isSidebarOpen} />} />
          <Route path="/acchangepass" element={<ChangePasswordForm isSidebarOpen={isSidebarOpen} />} />
          <Route path="/acbackup" element={<BackupContactsForm isSidebarOpen={isSidebarOpen} />} />
          <Route path="/acactivity" element={<AccountActivity isSidebarOpen={isSidebarOpen} />} />
          <Route path="/actwofa" element={<TwoFactorAuth isSidebarOpen={isSidebarOpen} />} />
          <Route path="/acdvt" element={<DeactivateAccount isSidebarOpen={isSidebarOpen} />} />
          <Route path="/acdlt" element={<PermanentlyDeleteAccount isSidebarOpen={isSidebarOpen} />} />
          <Route path="/notiset" element={<NotificationSettings isSidebarOpen={isSidebarOpen} />} />
          <Route path="/appear" element={<AppearanceSettings isSidebarOpen={isSidebarOpen} />} />
        </Routes>
      </div>
    </Router>
  );
}
