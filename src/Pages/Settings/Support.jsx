import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  Search,
  ArrowLeft,
  User,
  FileText,
  DollarSign,
  Shield,
  Users,
  Star,
  CreditCard,
  Instagram,
  Facebook,
  Linkedin,
  Twitter,
} from "lucide-react";
import Sidebar from "../../components/Sidebar";
import "../../styles/settings/Support.css";

export default function SupportPage({ isSidebarOpen }) {
  const [activeTab, setActiveTab] = useState("freelancers");
  const [searchQuery, setSearchQuery] = useState("");

    const [showPopup, setShowPopup] = useState(false);
    const navigate = useNavigate();

  const handleSearch = () => {
    if (searchQuery.trim()) {
      alert(`Searching for: ${searchQuery}`);
    }
  };

  const freelancerCategories = [
    {
      icon: <User size={32} />,
      title: "Account settings & security",
      subtitle: "How do I create my account?",
      topics: [
        "Accessing my account",
        "Password security questions (e.g., factor authentication)",
        "Phone verification: Secure your Lance account",
      ],
    },
    {
      icon: <FileText size={32} />,
      title: "Order management",
      subtitle: "Managing your orders: A user's guide to lance process",
      topics: ["Reviews and ratings for freelancers"],
    },
    {
      icon: <DollarSign size={32} />,
      title: "Withdrawals & Finance",
      subtitle: "Withdrawing your earnings & managing payout methods",
      topics: ["Freelance taxes"],
    },
    {
      icon: <Shield size={32} />,
      title: "Trust & Safety",
      subtitle: "Our Commitment to you: Staying safe on lance",
      topics: [
        "Avoiding spam & staying safe on lance",
        "How to report content & behavior?",
        "Stay protected with Lance's policy",
      ],
    },
  ];

  const clientCategories = [
    {
      icon: <Users size={32} />,
      title: "Find a freelancer",
      subtitle: "The best place to work for clients",
      topics: [
        "Professional catalogs for clients",
        "Searching freelancers on lance guides",
        "Using inbox notifications",
      ],
    },
    {
      icon: <Star size={32} />,
      title: "Order management",
      subtitle: "The complete guide to Orders: status and process",
      topics: ["Milestones", "Reviews and ratings"],
    },
    {
      icon: <CreditCard size={32} />,
      title: "Payments & Finances",
      subtitle: "Paying for orders:custom custom offers",
      topics: ["Payment methods", "Payment troubleshooting"],
    },
  ];

  const currentCategories =
    activeTab === "freelancers" ? freelancerCategories : clientCategories;

  const popularArticles = [
    { left: "Accessing my account", right: "How do I create my account?" },
    { left: "Your earnings page", right: "Hourly orders for clients" },
    {
      left: "Withdrawing your earnings & managing payout methods",
      right: "Paying for orders:extras,custom offers",
    },
  ];

  return (

    
    <div className="supp-help-page">
                <Sidebar
                  isOpen={isSidebarOpen}
                  title="Settings"
                  footer={
                    <button className="appr-btn-logout" onClick={() => navigate("/")}>
                      Log out
                    </button>
                  }
                >
                  <a href="/setpf" className="sidebar-link">Profile</a>
                  <a href="/setac" className="sidebar-link">Account Security</a>
                  <a href="/bilpay" className="sidebar-link">Billing & Payments</a>
                  <a href="/notiset" className="sidebar-link">Notification Settings</a>
                  <a href="/appear" className="sidebar-link">Appearance</a>
                  <a href="/useranal" className="sidebar-link">User Analytics</a>
                  <a href="/support" className="sidebar-link active">Support</a>
                </Sidebar>

        
      {/* HEADER */}
      <header className="supp-header">
        <button
          className="supp-back-btn"
          onClick={() => window.history.back()}
        >
          <ArrowLeft size={24} />
        </button>

        <div className="supp-header-actions">
          <button className="supp-header-btn">Go to Lancers</button>
          <button className="supp-header-btn">My Request</button>
        </div>
      </header>

      {/* HERO */}
      <section className="supp-hero">
        <h1 className="supp-hero-title">How can we help you?</h1>

        <div className="supp-search">
          <input
            className="supp-search-input"
            placeholder="Search the help center"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          />
          <button className="supp-search-btn" onClick={handleSearch}>
            <Search size={20} />
          </button>
        </div>
      </section>

      {/* TABS */}
      <div className="supp-tabs">
        <button
          className={`supp-tab ${activeTab === "freelancers" ? "active" : ""}`}
          onClick={() => setActiveTab("freelancers")}
        >
          For Freelancers
        </button>
        <button
          className={`supp-tab ${activeTab === "clients" ? "active" : ""}`}
          onClick={() => setActiveTab("clients")}
        >
          For Clients
        </button>
      </div>

      {/* CATEGORIES */}
      <section className="supp-categories">
        <div className="supp-categories-scroll">
          {currentCategories.map((cat, i) => (
            <div key={i} className="supp-category-card">
              <div className="supp-category-icon">{cat.icon}</div>
              <h3 className="supp-category-title">{cat.title}</h3>
              <p className="supp-category-subtitle">{cat.subtitle}</p>

              <ul className="supp-category-topics">
                {cat.topics.map((t, j) => (
                  <li key={j}>{t}</li>
                ))}
              </ul>

              <button className="supp-see-all">See all articles</button>
            </div>
          ))}
        </div>
      </section>

      {/* POPULAR */}
      <section className="supp-popular">
        <div className="supp-popular-box">
          <div className="supp-popular-title">Popular articles

          <div className="supp-popular-grid">
            {popularArticles.map((a, i) => (
              <React.Fragment key={i}>
                <button className="supp-popular-link">{a.left}</button>
                <button className="supp-popular-link">{a.right}</button>
              </React.Fragment>
            ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="supp-contact">
        <h3>Can't find what you're looking for?</h3>
        <p>We're here to help!</p>
        <button className="supp-contact-btn">Contact us</button>
      </section>

      {/* FOOTER */}
      <footer className="supp-footer">
        <div className="supp-footer-links">
          <a href="#">Terms of Service</a>
          <a href="#">Privacy policy</a>
        </div>

        <div className="supp-footer-social">
          <span>Follow us</span>
          <Instagram size={20} />
          <Facebook size={20} />
          <Linkedin size={20} />
          <Twitter size={20} />
        </div>
      </footer>
    </div>
  );
}
