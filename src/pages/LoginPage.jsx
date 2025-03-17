import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";

export default function LoginPage() {
    const navigate = useNavigate();

    return (
        <div className="login-wrapper">
            <div className="login-left-panel">
                <h2 className="login-left-heading">Welcome Back!</h2>
                <p className="login-left-text">
                    Please login with your personal info.
                </p>
                <button className="btn-sign-up" onClick={() => navigate("/signup")}>
                    Sign Up
                </button>
            </div>

            <div className="login-right-panel">
                <h2 className="login-right-heading">Login to Your Account</h2>
                <div className="login-input-box">
                    <input type="email" className="login-input-field" placeholder="Email" required />
                </div>
                <div className="login-input-box">
                    <input type="password" className="login-input-field" placeholder="Password" required />
                </div>
                <button className="btn-login">Login</button>
                <p className="login-signup-link">
                    Don't have an account? <span className="login-signup-anchor" onClick={() => navigate("/signup")}>Sign Up</span>
                </p>
            </div>
        </div>
    );
}
