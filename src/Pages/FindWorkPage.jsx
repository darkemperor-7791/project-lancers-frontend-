import React from 'react';
// Make sure to install lucide-react if you haven't: npm install lucide-react
import { 
    Filter, 
    Search, 
    ChevronDown, 
    Star, 
    ChevronLeft, 
    ChevronRight, 
    Heart, 
    Save 
} from 'lucide-react';

// Corrected import path based on your VS Code screenshot
import '../styles/FindWorkPage.css';

// --- Sub-Component: Sidebar ---
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

// --- Sub-Component: Job Post Card ---
const JobPostCard = () => {
    return (
        <article className="fw-card">
            {/* Header: User Info & Tags */}
            <header className="fw-card-header">
                <div className="fw-user-info">
                    <div className="fw-avatar-circle"></div>
                    <span className="fw-username">customer id</span>
                </div>
                <div className="fw-tags">
                    <span className="fw-tag fw-tag-delivery">2 Day Delivery</span>
                    <span className="fw-tag fw-tag-loyalty">
                        Loyalty : 4.9 <Star size={12} fill="black" stroke="none" />
                    </span>
                </div>
            </header>

            {/* Body: Description */}
            <div className="fw-card-body">
                <h3 className="fw-project-title">project description</h3>
                <p className="fw-project-category">Category: Web Dev, Graphics</p>
            </div>

            {/* Carousel Section */}
            <div className="fw-carousel-section">
                <button className="fw-arrow-btn fw-arrow-left">
                    <ChevronLeft size={20} />
                </button>
                
                <div className="fw-images-container">
                    {/* Image Placeholder 1 */}
                    <div className="fw-image-box">
                         {/* Overlay Icons */}
                        <div className="fw-image-actions">
                            <Heart size={16} />
                            <div className="fw-divider"></div>
                            <Save size={16} />
                        </div>
                    </div>
                    {/* Image Placeholder 2 */}
                    <div className="fw-image-box"></div>
                </div>

                <button className="fw-arrow-btn fw-arrow-right">
                    <ChevronRight size={20} />
                </button>
            </div>

            {/* Footer: Actions & Time */}
            <footer className="fw-card-footer">
                <div className="fw-footer-actions">
                    <button className="fw-btn-tokens">10 Tokens</button>
                    <button className="fw-btn-apply">Apply</button>
                </div>
                <span className="fw-posted-time">Posted 1 hour ago</span>
            </footer>
        </article>
    );
};

// --- Main Page Component ---
export default function FindWorkPage() {
    return (
        <div className="fw-page-container" style={{ paddingTop: "120px" }}>
            <div className="fw-layout">
                {/* Left Sidebar */}
                <Sidebar />

                {/* Main Content Area */}
                <main className="fw-main-content">
                    {/* Search & Sort Bar */}
                    <div className="fw-search-bar-container">
                        <div className="fw-search-input-wrapper">
                            <Search className="fw-search-icon" size={20} />
                            <input 
                                type="text" 
                                className="fw-search-input" 
                            />
                        </div>
                        <button className="btn fw-sort-btn">
                            Sort By
                        </button>
                    </div>

                    {/* Job Feed */}
                    <div className="fw-job-feed">
                        <JobPostCard />
                        <JobPostCard />
                    </div>
                </main>
            </div>
        </div>
    );
}