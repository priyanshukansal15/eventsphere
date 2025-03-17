import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/SignUp.css";

export default function SignupPage() {
    const navigate = useNavigate();

    return (
        <div className="signup-wrapper">
            <div className="signup-left-panel">
                <h2 className="signup-left-heading">Welcome Back!</h2>
                <p className="signup-left-text">
                    To keep connected with us, please login with your personal info.
                </p>
                <button className="btn-sign-in" onClick={() => navigate("/")}>
                    Sign In
                </button>
            </div>

            <div className="signup-right-panel">
                <h2 className="signup-right-heading">Create Account</h2>
                <div className="signup-input-box">
                    <input type="text" className="signup-input-field signup-name-input" placeholder="Full Name" required />
                </div>
                <div className="signup-input-box">
                    <input type="email" className="signup-input-field signup-email-input" placeholder="Email" required />
                </div>
                <div className="signup-input-box">
                    <input type="tel" className="signup-input-field signup-phone-input" placeholder="Phone Number" required />
                </div>
                <div className="signup-input-box">
                    <input type="password" className="signup-input-field signup-password-input" placeholder="Password" required />
                </div>
                <div className="signup-input-box">
                    <input type="password" className="signup-input-field signup-confirm-password-input" placeholder="Confirm Password" required />
                </div>
                <button className="btn-create-account">Create Account</button>
                <p className="signup-login-link">
                    Already have an account? <span className="signup-login-anchor" onClick={() => navigate("/login")}>Login</span>
                </p>
            </div>
        </div>
    );
}
