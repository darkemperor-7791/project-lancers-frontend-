import React from 'react';
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
import '../styles/FindWorkPage.css';

/* ================= Page ================= */
export default function FindWorkPage() {
      const navigate = useNavigate();
  return (
    <div className="fw-page-container" style={{ paddingTop: '120px' }}>
      <div className="fw-layout">
        <Sidebar />

        <main className="fw-main-content">
          <div className="fw-search-bar-container">
            <div className="fw-search-input-wrapper">
              <Search className="fw-search-icon" size={20} />
              <input type="text" className="fw-search-input" />
            </div>
            <button className="btn fw-sort-btn">Sort By</button>
          </div>

          <div className="fw-job-feed">
            <JobPostCard />
            <JobPostCard />
          </div>
        </main>
      </div>
    </div>
  );
}

/* ================= Sidebar ================= */
const Sidebar = () => {
  return (
    <aside className="fw-sidebar">
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
const JobPostCard = () => {
    const navigate = useNavigate();
  return (
    
    <article className="fw-card">
      <header className="fw-card-header">
        <div className="fw-user-info">
          <div className="fw-avatar-circle" />
          <span className="fw-username">customer id</span>
        </div>

        <div className="fw-tags">
          <span className="fw-tag fw-tag-delivery">2 Day Delivery</span>
          <span className="fw-tag fw-tag-loyalty">
            Loyalty : 4.9 <Star size={12} fill="black" stroke="none" />
          </span>
        </div>
      </header>

      <div className="fw-card-body">
        <h3 className="fw-project-title">Project Title</h3>
        <p className="fw-project-category">Category: Web Dev, Graphics</p>
      </div>

      {/* CAROUSEL */}
      <div className="fw-carousel-section">
        <button className="fw-arrow-btn fw-arrow-left">
          <ChevronLeft size={22} />
        </button>

        <div className="fw-images-container">
          <div className="fw-image-box">
          </div>

          <div className="fw-image-box" />
        </div>

        <button className="fw-arrow-btn fw-arrow-right">
          <ChevronRight size={22} />
        </button>
      </div>

      <footer className="fw-card-footer">
        <div className="fw-footer-actions">
          <button className="fw-btn-tokens">10 Tokens</button>
          <button
          type='button'
          onClick={() => navigate('/project-page')}
          className="fw-btn-apply">Apply</button>
        </div>
        <span className="fw-posted-time">Posted 1 hour ago</span>
      </footer>
    </article>
  );
};

