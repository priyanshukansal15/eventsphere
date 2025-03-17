import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { FaMapMarkerAlt, FaSearch } from "react-icons/fa";
import "../styles/NavBar.css";
import logo from "../images/logo-transparent.png";

function NavBar() {
  const [location, setLocation] = useState("Select Location");
  const [showLocationDropdown, setShowLocationDropdown] = useState(false);
  const locationDropdownRef = useRef(null);
  const navigate = useNavigate(); // Hook for navigation

  const locations = ["New Delhi", "Mumbai", "Bangalore", "Kolkata", "Chennai", "Hyderabad"];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (locationDropdownRef.current && !locationDropdownRef.current.contains(event.target)) {
        setShowLocationDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="main-navbar">
      {/* Left Section */}
      <div className="left-section">
        <img 
          src={logo} 
          alt="EventMaster Logo" 
          className="logo-img" 
          onClick={() => navigate("/")} // Redirect to homepage
          style={{ cursor: "pointer" }} // Make cursor pointer
        />
        
        <div
          className="location-selector"
          role="button"
          tabIndex={0}
          onClick={() => setShowLocationDropdown((prev) => !prev)}
          ref={locationDropdownRef}
        >
          <FaMapMarkerAlt className="location-icon" />
          <span>{location}</span>
          {/* Location Dropdown */}
          {showLocationDropdown && (
            <div className="location-dropdown">
              {locations.map((loc, index) => (
                <div
                  key={index}
                  className="location-item"
                  onClick={() => {
                    setLocation(loc);
                    setShowLocationDropdown(false);
                  }}
                >
                  {loc}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Center Search Bar */}
      <div className="search-container">
        <input type="text" placeholder="Search for events, movies, plays..." className="search-input" />
      </div>

      {/* Right Section - Auth Buttons */}
      <div className="right-section">
        <button className="auth-btn login-btn" onClick={() => navigate("/login")}>Login</button>
        <button className="auth-btn signup-btn" onClick={() => navigate("/signup")}>Sign Up</button> 
      </div>
    </nav>
  );
}

export default NavBar;
