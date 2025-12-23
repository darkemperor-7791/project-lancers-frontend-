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
      <div className="aup-main-container" style={{ paddingTop: "120px" }}>
        {isLogin ? (
          <div className="aup-auth-box">
            <h1 className="aup-auth-title">Login</h1>
            <div className="aup-auth-form">

              <div className="aup-input-group">
                <input type="text" className="aup-input-field" placeholder="username" />
                <span className="aup-input-icon">👤</span>
              </div>

              <div className="aup-input-group">
                <input
                  type={showLoginPassword ? "text" : "password"}
                  className="aup-input-field"
                  placeholder="password"
                />
                <button
                  className="aup-input-icon aup-reveal-btn"
                  style={{ cursor: 'pointer' }}
                  onClick={() => setShowLoginPassword(!showLoginPassword)}
                >
                  👁
                </button>
              </div>

              <div className="aup-forgot-password">
                <a href="#">forget password?</a>
              </div>

              <button className="aup-btn-submit">Login</button>

              <div className="aup-switch-text">
                dont have an account?{" "}
                <a href="#" onClick={(e) => { e.preventDefault(); showRegister(); }}>
                  Register
                </a>
              </div>

              <button className="aup-btn-submit" onClick={showRegister}>Register</button>

              <button className="aup-btn-google">
                Login with Google
              </button>
            </div>
          </div>
        ) : (
          <div className="aup-auth-box">
            <h1 className="aup-auth-title">Register</h1>

            <div className="aup-auth-form">

              <div className="aup-input-group">
                <input type="text" className="aup-input-field" placeholder="username" />
                <span className="aup-input-icon">👤</span>
              </div>

              <div className="aup-input-group">
                <input
                  type={showRegisterPassword ? "text" : "password"}
                  className="aup-input-field"
                  placeholder="password"
                />
                <span
                  className="aup-input-icon"
                  style={{ cursor: 'pointer' }}
                  onClick={() => setShowRegisterPassword(!showRegisterPassword)}
                >
                  👁
                </span>
              </div>

              <div className="aup-input-group">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  className="aup-input-field"
                  placeholder="confirm password"
                />
                <span
                  className="aup-input-icon"
                  style={{ cursor: 'pointer' }}
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  👁
                </span>
              </div>

              <button className="aup-btn-submit">Register</button>

              <div className="aup-switch-text">
                already have an account?{" "}
                <a href="#" onClick={(e) => { e.preventDefault(); showLogin(); }}>
                  Login
                </a>
              </div>

              <button className="aup-btn-submit" onClick={showLogin}>Login</button>

              <button className="aup-btn-google">
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
