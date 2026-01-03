import React, { useState } from 'react';
import {
  Filter,
  Search,
  Star,
  ChevronLeft,
  ChevronRight,
  Heart,
  Save
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import '../styles/FindWorkPage.css';
import coin from "../assets/coin.png";

// ============================================
// JOB POSTS DATA STRUCTURE
// ============================================
const jobPostsData = [
  {
    id: 1,
    customerId: "Client id",
    deliveryTime: "2 Day Delivery",
    loyalty: 4.9,
    projectTitle: "Project Title",
    category: "Web Dev, Graphics",
    tokens: 10,
    postedTime: "1 hour ago",
    images: [
      { id: 1, url: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500" },
      { id: 2, url: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500" },
      { id: 3, url: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500" },
      { id: 4, url: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=500" }
    ]
  },
  {
    id: 2,
    customerId: "Client id",
    deliveryTime: "3 Day Delivery",
    loyalty: 4.5,
    projectTitle: "Mobile App Development",
    category: "App Development, UI/UX",
    tokens: 25,
    postedTime: "3 hours ago",
    images: [
      { id: 1, url: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500" },
      { id: 2, url: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=500" },
      { id: 3, url: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?w=500" }
    ]
  },
  {
    id: 3,
    customerId: "Client id",
    deliveryTime: "1 Day Delivery",
    loyalty: 4.8,
    projectTitle: "E-commerce Website",
    category: "Web Dev, Database",
    tokens: 35,
    postedTime: "5 hours ago",
    images: [
      { id: 1, url: "https://images.unsplash.com/photo-1557821552-17105176677c?w=500" },
      { id: 2, url: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500" },
      { id: 3, url: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=500" },
      { id: 4, url: "https://images.unsplash.com/photo-1556740772-1a741367b93e?w=500" }
    ]
  }
];

/* ================= FilterSection ================= */
const FilterSection = () => {
  return (
    <aside className="fw-filter-section">
      <button className="fw-filter-btn">
        <Filter size={18} />
        <span>Filter By</span>
      </button>

      <div className="fw-category-section">
        <h3 className="fw-category-title">CATEGORY</h3>
        <ul className="fw-category-list">
          <li>Domain</li>
          <li>Skills</li>
          <li>Fee</li>
          <li>Availability</li>
        </ul>
      </div>
    </aside>
  );
};

/* ================= Job Card ================= */
const JobPostCard = ({ jobPost }) => {
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrevImage = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  const handleNextImage = () => {
    if (currentImageIndex < jobPost.images.length - 2) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  return (
    <article className="fw-card">
      <header className="fw-card-header">
        <div className="fw-user-info">
          <div className="fw-avatar-circle" />
          <span className="fw-username">{jobPost.customerId}</span>
        </div>

        <div className="fw-tags">
          <span className="fw-tag fw-tag-delivery">{jobPost.deliveryTime}</span>
          <span className="fw-tag fw-tag-loyalty">
            Loyalty : {jobPost.loyalty} <Star size={12} fill="black" stroke="none" />
          </span>
        </div>
      </header>

      <div className="fw-card-body">
        <h3 className="fw-project-title">{jobPost.projectTitle}</h3>
        <p className="fw-project-category">Category: {jobPost.category}</p>
      </div>

      {/* CAROUSEL */}
      <div className="fw-carousel-section">
        <button 
          className="fw-arrow-btn fw-arrow-left"
          onClick={handlePrevImage}
          disabled={currentImageIndex === 0}
        >
          <ChevronLeft size={22} />
        </button>

        <div className="fw-images-wrapper">
          <div 
            className="fw-images-container"
            style={{ transform: `translateX(-${currentImageIndex * 51}%)` }}
          >
            {jobPost.images.map((image, index) => (
              <div 
                key={image.id} 
                className="fw-image-box"
                style={{
                  backgroundImage: `url(${image.url})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              />
            ))}
          </div>
        </div>

        <button 
          className="fw-arrow-btn fw-arrow-right"
          onClick={handleNextImage}
          disabled={currentImageIndex >= jobPost.images.length - 2}
        >
          <ChevronRight size={22} />
        </button>
      </div>

      <footer className="fw-card-footer">
        <div className="fw-footer-actions">
          <button className="fw-btn-tokens">
            {jobPost.tokens} <img className='fw-coin' src={coin} alt="coin" />
          </button>
          <button
            type='button'
            onClick={() => navigate('/project-page')}
            className="fw-btn-apply"
          >
            Apply
          </button>
        </div>
        <span className="fw-posted-time">Posted {jobPost.postedTime}</span>
      </footer>
    </article>
  );
};

/* ================= Page ================= */
export default function FindWorkPage({ isSidebarOpen, setIsSidebarOpen }) {
  const navigate = useNavigate();

  React.useEffect(() => {
    document.body.classList.add("page-find-work");
    return () => document.body.classList.remove("page-find-work");
  }, []);

  return (
    <div className="fw-page-container">
      <Sidebar
        isOpen={isSidebarOpen}
        title="Home"
        footer={
          <button className="btn-logout" onClick={() => navigate("/")}>
            Log out
          </button>
        }
      >
        <a href="/setac" className="sidebar-link">Settings</a>
        <a href="/##" className="sidebar-link">Shortlisted Projects</a>
        <a href="/act-proj" className="sidebar-link">Active Projects</a>
        <a href="/appear" className="sidebar-link">Appearance</a>
        <a href="/useranal" className="sidebar-link">User Analytics</a>
        <a href="/support" className="sidebar-link">Support</a>
      </Sidebar>

      <div className={`fw-layout ${isSidebarOpen ? "sidebar-open" : ""}`}>
        <FilterSection />

        <main className="fw-main-content">
          {/* FIXED SEARCH BAR */}
          <div className="fw-search-bar-container">
            <div className="fw-search-input-wrapper">
              <Search className="fw-search-icon" size={20} />
              <input type="text" className="fw-search-input" placeholder="Search projects..." />
            </div>
            <button className="btn fw-sort-btn">Sort By</button>
          </div>

          {/* SCROLLABLE JOB FEED */}
          <div className="fw-job-feed">
            {jobPostsData.map(jobPost => (
              <JobPostCard key={jobPost.id} jobPost={jobPost} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}