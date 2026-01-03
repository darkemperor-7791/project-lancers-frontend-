import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Sidebar from "../../components/Sidebar";
import coin from "../../assets/coin-light.png";

import {
  Search,
  Filter,
  ChevronRight,
  ChevronLeft,
  Heart,
  Star
} from "lucide-react";

import "../../styles/client/FindFreelancerpage.css";

// ============================================
// FREELANCER DATA STRUCTURE
// ============================================
const freelancersData = [
  {
    id: 1,
    name: "Freelancer Name",
    userId: "User ID",
    avatar: "", // URL to avatar image if needed
    projectsDone: 17,
    rating: 4.9,
    skills: ["JavaScript", "Python"],
    workingFields: ["Data Science", "Web Development"],
    pricePerProject: 160,
    projects: [
      { id: 1, title: "Project 1" },
      { id: 2, title: "Project 2" },
      { id: 3, title: "Project 3" }
    ]
  },
  {
    id: 2,
    name: "Freelancer Name",
    userId: "User ID",
    avatar: "",
    projectsDone: 14,
    rating: 4.2,
    skills: ["Java", "C++"],
    workingFields: ["App Development", "Web Development"],
    pricePerProject: 120,
    projects: [
      { id: 1, title: "Project 1" },
      { id: 2, title: "Project 2" },
      { id: 3, title: "Project 3" }
    ]
  },
  {
    id: 3,
    name: "Freelancer Name",
    userId: "User ID",
    avatar: "",
    projectsDone: 18,
    rating: 4.9,
    skills: ["Java", "C++"],
    workingFields: ["App Development", "Web Development"],
    pricePerProject: 200,
    projects: [
      { id: 1, title: "Project 1" },
      { id: 2, title: "Project 2" },
      { id: 3, title: "Project 3" }
    ]
  }
  // Add more freelancers here as needed
];

// ============================================
// FREELANCER PROFILE COMPONENT
// ============================================
function FreelancerProfile({ freelancer }) {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [isFavorited, setIsFavorited] = useState(false);
  const navigate = useNavigate();

  const handlePrevious = () => {
    if (currentProjectIndex > 0) {
      setCurrentProjectIndex(v => v - 1);
    }
  };

  const handleNext = () => {
    if (currentProjectIndex < freelancer.projects.length - 2) {
      setCurrentProjectIndex(v => v + 1);
    }
  };

  const toggleFavorite = () => {
    setIsFavorited(v => !v);
  };

  return (
    <div className="fm-profile-tile">
      <div className="fm-card-outer">
        <div className="fm-card-inner">

          <div className="fm-profile-header-pill">
            <div className="fm-avatar" />
            <span className="fm-name">{freelancer.name}</span>
            <span className="fm-uid">({freelancer.userId})</span>

            <div className="fm-header-right">
              <div className="fm-pill">Projects done : {freelancer.projectsDone}</div>
              <div className="fm-pill">
                Rating : {freelancer.rating} <Star size={16} fill="#2a4a58" />
              </div>

              <button className="fm-fav-btn" onClick={toggleFavorite}>
                <Heart
                  size={24}
                  fill={isFavorited ? "#2a4a58" : "white"}
                  stroke="#2a4a58"
                  strokeWidth={isFavorited ? 0 : 2}
                />
              </button>
            </div>
          </div>

          <div className="fm-skills">
            <div className="fm-details">
              <b>Freelancer skills :</b> {freelancer.skills.join(", ")}
            </div>
            <div className="fm-details">
              <b>Working fields :</b> {freelancer.workingFields.join(", ")}
            </div>
          </div>

          <div className="fm-carousel">
            <div
              className="fm-carousel-track"
              style={{ transform: `translateX(-${currentProjectIndex * 51}%)` }}
            >
              {freelancer.projects.map((p, i) => (
                <div key={p.id} className={`fm-project ${i === 0 ? "active" : ""}`}>
                  {p.title}
                </div>
              ))}
            </div>

            <button 
              className="fm-nav left" 
              onClick={handlePrevious} 
              disabled={currentProjectIndex === 0}
            >
              <ChevronLeft size={24} />
            </button>

            <button 
              className="fm-nav right" 
              onClick={handleNext} 
              disabled={currentProjectIndex >= freelancer.projects.length - 2}
            >
              <ChevronRight size={24} />
            </button>
          </div>

          <div className="fm-actions">
            <div className="fm-action-left">
              <button className="fm-btn" onClick={() => navigate("/client-fl-prof")} >View Profile</button>
              <button className="fm-btn-hn">Hire Now</button>
            </div>
            <div className="fm-price">
              From {freelancer.pricePerProject} <img className="fm-coin" src={coin} alt="coin" /> / Project
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

// ============================================
// MAIN COMPONENT
// ============================================
export default function ClientScreen({ isSidebarOpen, setIsSidebarOpen }) {
  React.useEffect(() => {
    document.body.classList.add("page-find-fl");
    return () => document.body.classList.remove("page-find-fl");
  }, []);

  const navigate = useNavigate();

  return (
    <div className="fm-page">
      <Sidebar
        isOpen={isSidebarOpen}
        title="Home"
        footer={
          <button className="btn-logout" onClick={() => navigate("/")}>
            Log out
          </button>
        }
      >
        <a href="/setpf" className="sidebar-link">Profile</a>
        <a href="/setac" className="sidebar-link active">Account Security</a>
        <a href="/bilpay" className="sidebar-link">Billing & Payments</a>
        <a href="/notiset" className="sidebar-link">Notification Settings</a>
        <a href="/appear" className="sidebar-link">Appearance</a>
        <a href="/useranal" className="sidebar-link">User Analytics</a>
        <a href="/support" className="sidebar-link">Support</a>
      </Sidebar>

      <div className={`fm-layout ${isSidebarOpen ? "sidebar-open" : ""}`}>
        {/* ===== FILTER PANEL ===== */}
        <div className="fm-sidebar">
          <div className="fm-filter-header">
            <Filter size={20} />
            Filter By
          </div>

          <div className="fm-bg-plate">
            {["Domain", "Skills", "Ratings", "Fee", "Availability"].map(f => (
              <div className="fm-filter-item" key={f}>
                {f}
                <ChevronRight size={20} />
              </div>
            ))}
          </div>
        </div>

        {/* ===== MAIN CONTENT ===== */}
        <div className="fm-main">

          {/* FIXED TOP */}
          <div className="fm-main-top">
            <div className="fm-topbar">
              <div className="fm-search">
                <Search className="fm-search-icon" size={24} />
                <input placeholder="Search freelancers..." />
              </div>
              <div className="fm-sort">Sort By</div>
            </div>
          </div>

          {/* SCROLLABLE */}
          <div className="fm-main-scroll">
            {freelancersData.map(freelancer => (
              <FreelancerProfile 
                key={freelancer.id} 
                freelancer={freelancer} 
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}