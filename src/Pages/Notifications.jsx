import React, { useState } from 'react';
import { ArrowLeft, Filter, Trash2 } from 'lucide-react';
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
    <>
      {/* ================= HOVER STYLES ================= */}
      <style>{`
      /* ================= DELETE BUTTON HOVER ================= */

.btn-delete {
  padding: 0.35rem;
  border-radius: 8px;
  background: transparent;
  border: none;
  cursor: pointer;

  transition:
    background-color 0.25s ease,
    transform 0.25s ease;
}

/* hover on the button */
.btn-delete:hover {
  background-color: rgba(0, 0, 0, 0.15);
  transform: scale(1.05);
}

/* icon inside delete button */
.icon-trash {
  width: 1.75rem;
  height: 1.75rem;
  color: #364652;
  opacity: 0.75;

  transition:
    transform 0.25s ease,
    opacity 0.25s ease,
    color 0.25s ease;
}

/* icon hover effect */
.btn-delete:hover .icon-trash {
  opacity: 1;
  transform: scale(1.15);
  color: #1f2933;
}

        .btn-back:hover {
          background-color: #A3BFCF;
          transform: scale(1.08);
        }

        .btn-filter:hover {
          background-color: #D1E1E9;
          transform: scale(1.06);
        }

        .notification-item:hover {
          background-color: #8CA8B7;
          transform: translateX(4px);
        }

        .btn-delete:hover {
          background-color: rgba(0,0,0,0.12);
          border-radius: 6px;
        }

        .btn-delete:hover svg {
          opacity: 1;
          transform: scale(1.1);
        }

        button {
          transition: all 0.25s ease;
        }
      `}</style>

      <div style={styles.page}>
        <div style={styles.card}>

          {/* HEADER */}
          <div style={styles.header}>
            <button className="btn-back" style={styles.backBtn} onClick={goBack}>
              <ArrowLeft strokeWidth={3} />
            </button>

            <button className="btn-filter" style={styles.filterBtn}>
              <Filter size={16} />
              <span>Filter</span>
            </button>
          </div>

          {/* LIST */}
          <div style={styles.list}>
            {notifications.map(note => (
              <div key={note.id} className="notification-item" style={styles.item}>
                <span style={styles.text}>{note.text}</span>
                <button className="btn-delete" style={styles.deleteBtn}>
                  <Trash2 size={22} />
                </button>
              </div>
            ))}
          </div>

        </div>
      </div>
    </>
  );
}

/* ================== BASE STYLES ================== */

const styles = {
  page: {
    minHeight: "100vh",
    backgroundColor: "#1A3342",
    paddingTop: "110px",
    display: "flex",
    justifyContent: "center",
  },

  card: {
    width: "100%",
    maxWidth: "56rem",
    border: "5px solid #D1DCE2",
    backgroundColor: "#1A3342",
    padding: "1rem",
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "1.5rem",
  },

  backBtn: {
    width: "2.5rem",
    height: "2.5rem",
    borderRadius: "50%",
    backgroundColor: "#8DAAB9",
    border: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
  },

  filterBtn: {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    padding: "0.3rem 1rem",
    backgroundColor: "#C1D1D9",
    borderRadius: "9999px",
    border: "none",
    cursor: "pointer",
    fontWeight: 500,
  },

  list: {
    display: "flex",
    flexDirection: "column",
    gap: "0.75rem",
  },

  item: {
    backgroundColor: "#7F9BAA",
    borderRadius: "1rem",
    padding: "1rem 1.5rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    cursor: "pointer",
  },

  text: {
    color: "white",
    fontSize: "1.25rem",
    fontWeight: 500,
  },

  deleteBtn: {
    background: "transparent",
    border: "none",
    cursor: "pointer",
    color: "#364652",
    opacity: 0.85,
  },
};
