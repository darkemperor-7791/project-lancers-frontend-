import React, { useState } from "react";
import { ArrowLeft, Filter, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import "../styles/Notifications.css";

export default function Notifications() {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  const [notifications] = useState([
    { id: 1, text: "notification 1" },
    { id: 2, text: "notification 2" },
    { id: 3, text: "notification 3" },
    { id: 4, text: "notification 4" },
    { id: 5, text: "notification 5" },
    { id: 6, text: "notification 6" },
    { id: 7, text: "notification 7" },
  ]);

  return (
    
    <div className="ntf-page">
      <div className="ntf-card">

        {/* HEADER */}
        <div className="ntf-header">
          <button className="ntf-btn-back" onClick={goBack}>
            <ArrowLeft size={22} strokeWidth={3} />
          </button>

          <button className="ntf-btn-filter">
            <Filter size={16} />
            <span>Filter</span>
          </button>
        </div>

        {/* LIST */}
        <div className="ntf-list">
          {notifications.map((note) => (
            <div key={note.id} className="ntf-notification-item">
              <span className="ntf-text">{note.text}</span>

              <button className="ntf-btn-delete">
                <Trash2 className="ntf-icon-trash" size={22} />
              </button>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
