import React, { useState } from "react";
import "../../styles/client/Freelancerprofile.css";

export default function FreelancerProfile() {
  const [showReviewsModal, setShowReviewsModal] = useState(false);

  const profile = {
    name: "Anshu Roy",
    username: "@onshurory2006",
    rating: 4.7,
    reviewCount: 530,
    title: "UI Designer | Backend Developer",
    avatar: "AR",
    about:
      "I'm a 4th-semester Computer Science student passionate about full-stack web development and building scalable applications with the MERN stack. I currently explore SDE DS/Algo opportunities where I can apply my skills in React, Node.js, Express, and MongoDB to solve real-world problems. Beyond web development, I'm fascinated by emerging technologies like quantum computing and robotics, constantly learning through hands-on projects and open-source contributions. I thrive on debugging complex issues, architecting efficient backend systems, and turning ideas into functional code."
  };

  const skills = ["Figma", "Node.js", "React", "MongoDB", "Express"];

  const reviews = [
    {
      id: 1,
      clientName: "Client Name ",
      clientUsername: "@client_id",
      rating: 4.7,
      review: "What a freelancer!",
      timeAgo: "1 month ago"
    },
    {
      id: 2,
      clientName: "Sarah Johnson",
      clientUsername: "@sarahj_dev",
      rating: 5.0,
      review:
        "Anshu delivered exceptional work on our e-commerce platform. The code was clean, well-documented, and deployed ahead of schedule. Highly recommend!",
      timeAgo: "2 weeks ago"
    },
    {
      id: 3,
      clientName: "Michael Chen",
      clientUsername: "@mchen_tech",
      rating: 4.5,
      review:
        "Great communication and problem-solving skills. Fixed our backend issues efficiently and provided valuable suggestions for optimization.",
      timeAgo: "3 weeks ago"
    },
    {
      id: 4,
      clientName: "Emily Rodriguez",
      clientUsername: "@emily_designs",
      rating: 4.8,
      review:
        "Outstanding UI/UX work! Anshu transformed our design concepts into a beautiful, responsive interface.",
      timeAgo: "1 month ago"
    },
    {
      id: 5,
      clientName: "David Kim",
      clientUsername: "@dkim_startup",
      rating: 5.0,
      review:
        "Incredible developer! Built our entire MVP from scratch with React and Node.js.",
      timeAgo: "2 months ago"
    }
  ];

  const projects = [
    { code: "PROJ-2401", category: "Full Stack Development", rating: 5.0 },
    { code: "PROJ-2389", category: "UI/UX Design", rating: 4.8 },
    { code: "PROJ-2356", category: "Backend API", rating: 4.9 },
    { code: "PROJ-2334", category: "Database Design", rating: 4.7 },
    { code: "PROJ-2298", category: "React Application", rating: 5.0 },
    { code: "PROJ-2267", category: "E-commerce Platform", rating: 4.8 }
  ];

  return (
    <div className="clientfl-page">
      {/* HEADER */}
      <div className="clientfl-header">
        <div className="clientfl-header-row">
          <div className="clientfl-avatar">
            <svg width="50" height="50" viewBox="0 0 50 50">
              <circle cx="25" cy="18" r="8" />
              <path d="M10 40C10 32 17 28 25 28C33 28 40 32 40 40" />
            </svg>
          </div>

          <div className="clientfl-info">
            <div className="clientfl-name-row">
              <h1>{profile.name}</h1>
              <span>rating {profile.rating}★</span>
              <span>({profile.reviewCount} Reviews)</span>
            </div>
            <div className="clientfl-username">{profile.username}</div>
            <div className="clientfl-title">{profile.title}</div>

            <div className="clientfl-skills">
              {skills.map((s, i) => (
                <span key={i} className="clientfl-skill">{s}</span>
              ))}
              <span className="clientfl-skill-expand">⌄</span>
            </div>
          </div>

          <div className="clientfl-price">price</div>
        </div>
      </div>

      {/* ABOUT */}
      <div className="clientfl-about">
        <h2>About this lancer</h2>
        <p>{profile.about}</p>
      </div>

      {/* REVIEWS PREVIEW */}
      <div className="clientfl-reviews">
        <div className="clientfl-reviews-header">
          <h2>What people loved about this freelancer</h2>
          <button className="clientfl-see-all-rev" onClick={() => setShowReviewsModal(true)}>
            See All Reviews
          </button>
        </div>

        <div className="clientfl-review-card">
          <div className="clientfl-review-user">
            <div className="clientfl-review-avatar" />
            <div>
              <div>
                <strong>{reviews[0].clientName}</strong>
                <span>Rating {reviews[0].rating}★</span>
              </div>
              <div>{reviews[0].clientUsername}</div>
            </div>
          </div>
          <div className="clientfl-review-text">{reviews[0].review}</div>
          <div className="clientfl-review-time">{reviews[0].timeAgo}</div>
        </div>
      </div>

      {/* WORK HISTORY */}
      <div className="clientfl-work">
        <h2>Work History</h2>

        <div className="clientfl-table">
          <div className="clientfl-table-head">
            <span>project code</span>
            <span>category</span>
            <span>rating</span>
          </div>

          {projects.map((p, i) => (
            <div key={i} className="clientfl-table-row">
              <div>{p.code}</div>
              <div>{p.category}</div>
              <div>{p.rating} ★</div>
            </div>
          ))}
        </div>
      </div>

      {/* MODAL */}
      {showReviewsModal && (
        <div className="clientfl-modal-overlay">
          <div className="clientfl-modal">
            <div className="clientfl-modal-header">
              <h2>All Reviews ({reviews.length})</h2>
              <button onClick={() => setShowReviewsModal(false)}>×</button>
            </div>

            <div className="clientfl-modal-body">
              {reviews.map(r => (
                <div key={r.id} className="clientfl-review-card">
                  <div className="clientfl-review-user">
                    <div className="clientfl-review-avatar" />
                    <div>
                      <div>
                        <strong>{r.clientName}</strong>
                        <span>Rating {r.rating}★</span>
                      </div>
                      <div>{r.clientUsername}</div>
                    </div>
                  </div>
                  <div className="clientfl-review-text">{r.review}</div>
                  <div className="clientfl-review-time">{r.timeAgo}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
