import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/AuthPages.css';

const AuthPages = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showLoginPassword, setShowLoginPassword] = useState(false);
  const [showRegisterPassword, setShowRegisterPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const showLogin = () => setIsLogin(true);
  const showRegister = () => setIsLogin(false);

  return (
    <>
      {/* REMOVE old header — Global NavBar now handles this */}

      <div className="main-container" style={{ paddingTop: "120px" }}>
        {isLogin ? (
          <div className="auth-box">
            <h1 className="auth-title">Login</h1>
            <div className="auth-form">
              <div className="input-group">
                <input type="text" className="input-field" placeholder="username" />
                <span className="input-icon">👤</span>
              </div>

              <div className="input-group">
                <input
                  type={showLoginPassword ? "text" : "password"}
                  className="input-field"
                  placeholder="password"
                />
                <span
                  className="input-icon"
                  style={{ cursor: 'pointer' }}
                  onClick={() => setShowLoginPassword(!showLoginPassword)}
                >
                  👁
                </span>
              </div>

              <div className="forgot-password">
                <a href="#">forget password?</a>
              </div>

              <button className="btn-submit">Login</button>

              <div className="switch-text">
                dont have an account?{" "}
                <a href="#" onClick={(e) => { e.preventDefault(); showRegister(); }}>
                  Register
                </a>
              </div>

              <button className="btn-submit" onClick={showRegister}>Register</button>

              <button className="btn-google">
                Login with Google
              </button>
            </div>
          </div>
        ) : (
          <div className="auth-box">
            <h1 className="auth-title">Register</h1>

            <div className="auth-form">
              <div className="input-group">
                <input type="text" className="input-field" placeholder="username" />
                <span className="input-icon">👤</span>
              </div>

              <div className="input-group">
                <input
                  type={showRegisterPassword ? "text" : "password"}
                  className="input-field"
                  placeholder="password"
                />
                <span
                  className="input-icon"
                  style={{ cursor: 'pointer' }}
                  onClick={() => setShowRegisterPassword(!showRegisterPassword)}
                >
                  👁
                </span>
              </div>

              <div className="input-group">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  className="input-field"
                  placeholder="confirm password"
                />
                <span
                  className="input-icon"
                  style={{ cursor: 'pointer' }}
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  👁
                </span>
              </div>

              <button className="btn-submit">Register</button>

              <div className="switch-text">
                already have an account?{" "}
                <a href="#" onClick={(e) => { e.preventDefault(); showLogin(); }}>
                  Login
                </a>
              </div>

              <button className="btn-submit" onClick={showLogin}>Login</button>

              <button className="btn-google">
                Login with Google
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default AuthPages;
