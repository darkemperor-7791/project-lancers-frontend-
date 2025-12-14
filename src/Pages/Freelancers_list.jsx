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
    <div className="app-container">
      <div className="main-card">
        
        {/* Header */}
        <div className="header">
          <button className="btn-back" onClick={handleBack}>
            <ArrowLeft className="icon-back" />
          </button>
          <button className="btn-filter">
            <Filter className="icon-filter" />
            <span className="filter-text">Filter</span>
          </button>
        </div>

        {/* List */}
        <div className="freelancer-list">
          {freelancers.map((freelancer) => (
            <div key={freelancer.id} className="freelancer-item">
              
              {/* Left: Avatar & Name */}
              <div className="item-left">
                <div className="avatar"></div>
                <div className="info-block">
                  <span className="name-text">{freelancer.name}</span>
                  <span className="skills-text">Skills : {freelancer.skills}</span>
                </div>
              </div>

              {/* Right: Rating & Trash */}
              <div className="item-right">
                <div className="stats-block">
                  <div className="rating-row">
                    <span>Rating : {freelancer.rating}</span>
                    <Star className="star-icon" />
                  </div>
                  <span className="projects-text">Projects done : {freelancer.projects}</span>
                </div>
                
                <button className="btn-delete" onClick={() => handleDelete(freelancer.id)}>
                  <Trash2 className="icon-trash" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}