import React, { useState } from "react";
import coin from "./assets/coin.png";
import sa from "./assets/support-agent.png";
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
import ProjectOverviewPage from "./Pages/Project_page.jsx";

/* ===================== SETTINGS ===================== */
import SettingsProfile from "./Pages/Settings/Profile";
import ProfilePersonal from "./Pages/Settings/Profile_edit_personal";
import ProfessionalInfoForm from "./Pages/Settings/Profile_edit_professional.jsx";
import AccountCredentialsForm from "./Pages/Settings/Profile_edit_account";
import SettingsAccount from "./Pages/Settings/Account";
import BillingPayments from "./Pages/Settings/Billing_payments";
import UPIIDsPage from "./Pages/Settings/Account_upi";
import SavedCards from "./Pages/Settings/Account_cards";
import WalletsPage from "./Pages/Settings/Account_wallet";
import ChangePasswordForm from "./Pages/Settings/Account_changepass";
import BackupContactsForm from "./Pages/Settings/Account_backup";
import AccountActivity from "./Pages/Settings/Account_activity";
import TwoFactorAuth from "./Pages/Settings/Account_twofa";
import DeactivateAccount from "./Pages/Settings/Account_deactivate";
import PermanentlyDeleteAccount from "./Pages/Settings/Account_delete";
import NotificationSettings from "./Pages/Settings/Notification_settings";
import AppearanceSettings from "./Pages/Settings/Appearance";
import SupportPage from "./Pages/Settings/Support";


/* ===================== COMPONENTS ===================== */
import Footer from "./components/Footer";

/* ===================== STYLES ===================== */
import "./components/Navbar.css";
import "./components/Footer.css";
import "./App.css";

/* ================================== NAVBAR (FIXED COLOR – UNCHANGED) ================================== */
function NavBar({ onHamburgerClick }) {
  const location = useLocation();
  const navigate = useNavigate();
  const path = location.pathname;

  const hideNavbarOn = ["/notif", "/fl"];
  if (hideNavbarOn.includes(path)) return null;

  const isLoginPage = path === "/";
  const isFindWorkPage = path === "/find-work";

  const handleSwitch = () => {
    navigate(isLoginPage ? "/find-work" : "/");
  };

  return (
    <nav
      className="navbar"
      style={{ backgroundColor: "rgba(170, 184, 192, 0.95)" }}
    >
      <div className="navbar-left">
        <button className="hamburger-btn" onClick={onHamburgerClick}>
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </button>

        <div className="lance-logo">LANCERS</div>

        {!isLoginPage && (
        <button
          className="icon-btn home-btn"
          title="Home"
          onClick={(e) => {
            e.currentTarget.blur();
            navigate("/find-work");
          }}
        >
          <Home size={22} strokeWidth={2.4} />
        </button>
      )}



        <button
          className="icon-btn"
          title="Support"
          onClick={() => navigate("/support")}>
            <img className = "support-agent" src={sa}/>
        </button>

        {(isLoginPage || isFindWorkPage) && (
          <button className="nav-link login-findwork-btn" onClick={handleSwitch}>
            {isLoginPage ? "Find Work" : "Login"}
          </button>
        )}
      </div>

      <div className="navbar-right">
        {!isLoginPage && (
          <div className="coin-display">
            <span className="coin-count">2500</span>
            <img className="coin-logo" src={coin} alt="coins" />
          </div>
        )}

        {!isLoginPage && (
          <button
            title="Buy Tokens"
            className="icon-btn cart-btn"
            onClick={() => navigate("/bilpay", { state: { tab: "buy" } })}
          >
            <ShoppingCart size={20} />
          </button>
        )}

        {!isLoginPage && (
          <Link to="/fl" className="icon-btn"><Heart size={20} /></Link>
        )}

        {!isLoginPage && (
          <Link to="/notif" className="icon-btn"><Bell size={20} /></Link>
        )}

        {!isLoginPage && (
          <Link to="/setpf" className="profile-icon" />
        )}
      </div>
    </nav>
  );
}

/* ==================================
   APP SHELL (CORRECT BOUNDARY LOGIC)
================================== */
function AppShell() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  const stripColorMap = {
    "/": "#1b3038",
    "/fl": "#1b3038",
    "/find-work": "#1b3038",
    "/project-page": 'rgb(149, 149, 149)',
    "/setpf": "#1A3342",
    "/setpfps": '#1a1a1a',
    "/setpfpro": '#1a1a1a',
    "/setpfac": '#1a1a1a',
    "/setac": "#1A3342",
    "/accards": "#1a1a1a",
    "/acupi": "#1a1a1a",
    "/acwallet": "#1a1a1a",
    "/bilpay": "#1a1a1a",
    "/acbackup": "#1a1a1a",
    "/acchangepass": "#1a1a1a",
    "/acactivity": "#1a1a1a",
    "/actwofa": "#1a1a1a",
    "/acdvt": "#1a1a1a",
    "/acdlt": "#1a1a1a",
    "/support": "#8fa5b8"
  };

  const stripColor = stripColorMap[location.pathname] || "#1A3342";
  const showFooter = location.pathname === "/";


  return (
    <div className="app-root" style={{ backgroundColor: stripColor }}>
      
      {/* STRIP BEHIND NAVBAR */}
      <div className="navbar-strip" style={{ backgroundColor: stripColor }} />

      <NavBar onHamburgerClick={() => setIsSidebarOpen(v => !v)} />

      {/* 🔒 SCROLL CONTAINER (ARTIFICIAL BOUNDARY RESTORED) */}
      <div className="app-scroll-container">
        <Routes>
          <Route path="/" element={<AuthPages />} />
          <Route path="/find-work" element={<FindWorkPage isSidebarOpen={isSidebarOpen}/>} />
          <Route path="/notif" element={<Notifications />} />
          <Route path="/fl" element={<Freelancers_list />} />
          <Route path="/project-page" element={<ProjectOverviewPage isSidebarOpen={isSidebarOpen} />} />
          <Route path="/setpf" element={<SettingsProfile isSidebarOpen={isSidebarOpen} />} />
          <Route path="/setpfps" element={<ProfilePersonal isSidebarOpen={isSidebarOpen} />} />
          <Route path="/setpfpro" element={<ProfessionalInfoForm isSidebarOpen={isSidebarOpen} />} />
          <Route path="/setpfac" element={<AccountCredentialsForm isSidebarOpen={isSidebarOpen} />} />
          <Route path="/setac" element={<SettingsAccount isSidebarOpen={isSidebarOpen} />} />
          <Route path="/acupi" element={<UPIIDsPage isSidebarOpen={isSidebarOpen} />} />
          <Route path="/accards" element={<SavedCards isSidebarOpen={isSidebarOpen} />} />
          <Route path="/acwallet" element={<WalletsPage isSidebarOpen={isSidebarOpen} />} />
          <Route path="/acchangepass" element={<ChangePasswordForm isSidebarOpen={isSidebarOpen} />} />
          <Route path="/acbackup" element={<BackupContactsForm isSidebarOpen={isSidebarOpen} />} />
          <Route path="/acactivity" element={<AccountActivity isSidebarOpen={isSidebarOpen} />} />
          <Route path="/actwofa" element={<TwoFactorAuth isSidebarOpen={isSidebarOpen} />} />
          <Route path="/acdvt" element={<DeactivateAccount isSidebarOpen={isSidebarOpen} />} />
          <Route path="/acdlt" element={<PermanentlyDeleteAccount isSidebarOpen={isSidebarOpen} />} />
          <Route path="/notiset" element={<NotificationSettings isSidebarOpen={isSidebarOpen} />} />
          <Route path="/appear" element={<AppearanceSettings isSidebarOpen={isSidebarOpen} />} />
          <Route path="/bilpay" element={<BillingPayments isSidebarOpen={isSidebarOpen} />} />
          <Route path="/support" element={<SupportPage isSidebarOpen={isSidebarOpen} />} />
        </Routes>

        {showFooter && <Footer />}
      </div>
    </div>
  );
}

/* ==================================
   ROOT
================================== */
export default function App() {
  return (
    <Router>
      <AppShell />
    </Router>
  );
}