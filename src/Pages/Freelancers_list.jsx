import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Filter, Trash2, Star } from 'lucide-react';
import '../styles/Freelancers_list.css';

export default function FreelancerList() {
  const navigate = useNavigate();
  const [freelancers, setFreelancers] = useState([
    { id: 1, name: "Freelancer 1", rating: 4.9, skills: "", projects: "" },
    { id: 2, name: "Freelancer 2", rating: 4.9, skills: "", projects: "" },
    { id: 3, name: "Freelancer 3", rating: 4.9, skills: "", projects: "" },
  ]);

  const handleDelete = (id) => {
    setFreelancers(freelancers.filter(f => f.id !== id));
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="frl-app-container">
      <div className="frl-main-card">

        {/* Header */}
        <div className="frl-header">
          <button className="frl-btn-back" onClick={handleBack}>
  <ArrowLeft
    className="frl-icon-back"
    size={28}
    strokeWidth={3}
  />


          </button>

          <button className="frl-btn-filter">
            <Filter className="frl-icon-filter" />
            <span className="frl-filter-text">Filter</span>
          </button>
        </div>

        {/* List */}
        <div className="frl-freelancer-list">
          {freelancers.map((freelancer) => (
            <div key={freelancer.id} className="frl-freelancer-item">

              {/* Left */}
              <div className="frl-item-left">
                <div className="frl-avatar"></div>
                <div className="frl-info-block">
                  <span className="frl-name-text">{freelancer.name}</span>
                  <span className="frl-skills-text">
                    Skills : {freelancer.skills}
                  </span>
                </div>
              </div>

              {/* Right */}
              <div className="frl-item-right">
                <div className="frl-stats-block">
                  <div className="frl-rating-row">
                    <span>Rating : {freelancer.rating}</span>
                    <Star className="frl-star-icon" />
                  </div>
                  <span className="frl-projects-text">
                    Projects done : {freelancer.projects}
                  </span>
                </div>

                <button
                  className="frl-btn-delete"
                  onClick={() => handleDelete(freelancer.id)}
                >
                  <Trash2 className="frl-icon-trash" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
