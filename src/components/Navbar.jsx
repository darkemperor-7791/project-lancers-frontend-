import { Link, useLocation } from "react-router-dom";

export default function NavBar() {
  const location = useLocation();
  const currentPath = location.pathname;

  // Hide navbar on floating pages
  const hideNavbarOn = ["/notif", "/fl"];
  if (hideNavbarOn.includes(currentPath)) return null;

  const isLoginPage = currentPath === "/";

  // Placeholder function for your sidebar toggle
  const handleSidebarToggle = () => {
    console.log("Toggle sidebar..."); 
    // Add your sidebar logic here later
  };

  return (
    <nav className="navbar">
      {/* LEFT - Hamburger & Logo */}
      <div className="navbar-left">
        {/* Hamburger Menu - Leftmost Item */}
        <button 
          className="hamburger-btn" 
          aria-label="Open menu"
          onClick={handleSidebarToggle}
        >
          <span className="hamburger-bar"></span>
          <span className="hamburger-bar"></span>
          <span className="hamburger-bar"></span>
        </button>

        {/* Logo - Shifted slightly right by the gap in CSS */}
        <span className="logo-text">LANCE</span>
      </div>

      {/* MIDDLE - Navigation Links */}
      <div className="nav-middle">
        {!isLoginPage && (
          <Link to="/find-work" className="nav-link">
            Find Work
          </Link>
        )}
      </div>

      {/* RIGHT - Auth & Icons */}
      <div className="navbar-right">
        <Link
          to={isLoginPage ? "/find-work" : "/"}
          className="nav-button"
        >
          {isLoginPage ? "Find Work" : "Login"}
        </Link>

        <Link to="/fl" className="icon-btn">❤</Link>

        <Link
          to="/notif"
          state={{ background: location }}
          className="icon-btn"
        >
          🔔
        </Link>

        <Link to="/setpf" className="profile-icon" />
      </div>
    </nav>
  );
}