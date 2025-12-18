import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
  useNavigate
} from "react-router-dom";

import { Bell, Heart, Home } from "lucide-react";

import AuthPages from "./Pages/AuthPages";
import FindWorkPage from "./Pages/FindWorkPage";
import Notifications from "./Pages/notifications";
import Freelancers_list from "./Pages/Freelancers_list";
import SettingsProfile from "./Pages/Settings/Profile";
import SettingsAccount from "./Pages/Settings/Account";
import UPIIDsPage from "./Pages/Settings/Account_upi";
import BankAccounts from "./Pages/Settings/Account_bank";
import WalletsPage from "./Pages/Settings/Account_wallet";

import "./components/Navbar.css";

function NavBar({ onHamburgerClick }) {
  const location = useLocation();
  const navigate = useNavigate();
  const path = location.pathname;

  const hideNavbarOn = ["/notif", "/fl"];
  if (hideNavbarOn.includes(path)) return null;

  const isLoginPage = path === "/";
  const isFindWorkPage = path === "/find-work";

  const handleSwitch = () => {
    if (isLoginPage) navigate("/find-work");
    else navigate("/");
  };

  return (
    <nav className="navbar">

      {/* LEFT */}
      <div className="navbar-left">
        <button className="hamburger-btn" onClick={onHamburgerClick}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>



        <button
          className={`icon-btn home-btn ${isLoginPage ? "disabled" : ""}`}
          aria-label="Home"
          onClick={() => {
            if (!isLoginPage) navigate("/find-work");
          }}
          disabled = {isLoginPage}
          >
          <Home size={20}/>
        </button>

        {(isLoginPage || isFindWorkPage) && (
          <button className="nav-link" onClick={handleSwitch}>
            {isLoginPage ? "Find Work" : "Login"}
          </button>
        )}
      </div>
      {/* RIGHT */}
      <div className="navbar-right">
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

export default function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <Router>
      <NavBar onHamburgerClick={() => setIsSidebarOpen(!isSidebarOpen)} />

      <Routes>
        <Route path="/" element={<AuthPages />} />
        <Route path="/find-work" element={<FindWorkPage />} />
        <Route path="/notif" element={<Notifications />} />
        <Route path="/fl" element={<Freelancers_list />} />
        <Route path="/setpf" element={<SettingsProfile isSidebarOpen={isSidebarOpen} />} />
        <Route path="/setac" element={<SettingsAccount isSidebarOpen={isSidebarOpen} />} />
        <Route path="/acupi" element={<UPIIDsPage isSidebarOpen={isSidebarOpen}/>} />
        <Route path="/acbank" element={<BankAccounts isSidebarOpen={isSidebarOpen}/>} />
        <Route path="/acwallet" element={<WalletsPage isSidebarOpen={isSidebarOpen}/>} />
      </Routes>
    </Router>
  );
}
