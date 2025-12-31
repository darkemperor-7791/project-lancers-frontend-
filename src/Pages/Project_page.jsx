import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import "../styles/Project_page.css";

const ProjectDetailsPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [rating, setRating] = useState(3.3);

  const handlePrevSlide = () => {
    setCurrentSlide(prev => (prev === 0 ? 1 : prev - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide(prev => (prev === 1 ? 0 : prev + 1));
  };

  const handleApply = () => {
    alert('Application submitted!');
  };

  const handleShortlist = () => {
    alert('Added to shortlist!');
  };

  // ⭐ Accurate fractional stars (masking method)
  const renderStars = (ratingValue) => {
    const safeRating = Math.min(5, Math.max(0, ratingValue));

    return Array.from({ length: 5 }, (_, i) => {
      const fillPercent = Math.max(0, Math.min(1, safeRating - i)) * 100;

      return (
        <div key={i} className="ppg-star">
          <Star size={18} className="ppg-star-icon ppg-star-empty" />
          <div
            className="ppg-star-mask"
            style={{ width: `${fillPercent}%` }}
          >
            <Star size={18} className="ppg-star-icon ppg-star-filled" />
          </div>
        </div>
      );
    });
  };

  return (
    <div className="ppg-wrapper">
      <div className="ppg-main-container">

        {/* Header */}
        <div className="ppg-header">
          <div className="ppg-header-left">
            <h1 className="ppg-project-title">Project Title</h1>
          </div>
          <div className="ppg-header-right">
            <div className="ppg-header-text">Total Amount :</div>
            <div className="ppg-header-text">Deadline :</div>
          </div>
        </div>

        {/* Content */}
        <div className="ppg-content-wrapper">

          {/* Description */}
          <div className="ppg-section ppg-description">
            <h2 className="ppg-section-heading">Project Description</h2>
            <ul className="ppg-list">
              <li>Line one</li>
              <li>Line 2</li>
              <li>Line 3</li>
            </ul>
          </div>

          {/* Sliding Container */}
          <div className="ppg-section ppg-slider-container">
            <div
              className="ppg-slider-wrapper"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {/* Client Details */}
              <div className="ppg-slide">
                <h2 className="ppg-section-heading">Client Details</h2>

                <div className="ppg-client-content">
                  <div className="ppg-detail-line">Platform age : 3 years</div>

                  <div className="ppg-detail-line ppg-rating-line">
                    <span>Ratings :</span>

                    <div className="ppg-stars">
                      {renderStars(rating)}
                    </div>

                    <span className="ppg-rating-number">
                      {rating.toFixed(1)}
                    </span>
                  </div>

                  <div className="ppg-detail-line">
                    Punctuality score : 8.95/10
                  </div>
                  <div className="ppg-detail-line">
                    Projects Managed : 17
                  </div>
                </div>
              </div>

              {/* Image Gallery */}
              <div className="ppg-slide">
                <h2 className="ppg-section-heading-img">Image Gallery</h2>
                <div className="ppg-gallery-content">
                  <div className="ppg-image-box"></div>
                  <div className="ppg-image-box"></div>
                  <div className="ppg-image-box"></div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="ppg-navigation">
              <button className="ppg-nav-button" onClick={handlePrevSlide}>
                <ChevronLeft size={20} />
              </button>
              <button className="ppg-nav-button" onClick={handleNextSlide}>
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="ppg-footer">
          <div className="ppg-tech-row">
            <span className="ppg-tech-label">Tech Required:</span>
            <button className="ppg-tech-btn">Python</button>
            <button className="ppg-tech-btn">JavaScript</button>
            <button className="ppg-tech-btn">C++</button>
            <button className="ppg-tech-btn">Java</button>
          </div>

          <div className="ppg-action-row">
            <button className="ppg-action-btn ppg-apply" onClick={handleApply}>
              Apply Now
            </button>
            <button className="ppg-action-btn ppg-shortlist" onClick={handleShortlist}>
              Shortlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailsPage;
