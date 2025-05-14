// File: userprofile.jsx
import React from "react";
import { FaUserCircle, FaCalendarAlt, FaRegBookmark, FaRegCheckCircle, FaCog, FaSignOutAlt, FaUser, FaBoxOpen } from "react-icons/fa";
import "../styles/userprofile.css"; // Import your CSS file for styling

// Sample user data
const users = [
  { 
    name: "Garv Gupta", 
    username: "@garvgupta", 
    email: "garv.gupta@example.com", 
    phone: "+91 9876543210", 
    bio: "A passionate developer and tech enthusiast.", 
    social: "@garvgupta on Twitter", 
    location: "New Delhi, India", 
    occupation: "Full-Stack Developer", 
    skills: "React, Node.js, UI/UX, AI", 
    joined: "January 2023", 
    registeredEvents: 5, 
    totalBookings: 10 
  },
  { 
    name: "Priyanshu Kansal", 
    username: "@priyanshu", 
    email: "priyanshu.kansal@example.com", 
    phone: "+91 9012345678", 
    bio: "Creative thinker and full-stack developer.", 
    social: "@priyanshu on Twitter", 
    location: "Ghaziabad, India", 
    occupation: "Full-Stack Engineer", 
    skills: "React, Express.js, MongoDB, Figma, TailwindCSS", 
    joined: "March 2024", 
    registeredEvents: 8, 
    totalBookings: 15 
  },
  { 
    name: "Saksham", 
    username: "@saksham", 
    email: "saksham@example.com", 
    phone: "+91 9988776655", 
    bio: "Loves coding and exploring new tech trends.", 
    social: "@saksham on LinkedIn", 
    location: "Noida, India", 
    occupation: "Software Engineer", 
    skills: "Java, Python, DevOps", 
    joined: "February 2023", 
    registeredEvents: 6, 
    totalBookings: 12 
  }
];

export default function UserProfilePage() {
  const user = users[1]; // Using Priyanshu Kansal as the selected user

  return (
    <div className="user-profile-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <div>
          <div className="profile-section left-align">
            <FaUserCircle className="profile-icon" />
            <p className="greeting">Hi, {user.name}!</p>
          </div>

          <div className="nav-section">
            <div className="nav-item left-align">
              <FaUser className="icon" /> <span>My Profile</span>
            </div>

            <ul>
              <li className="nav-item left-align">
                <FaCalendarAlt className="icon" /> <span>Created Events</span>
              </li>
              <li className="nav-item left-align">
                <FaRegCheckCircle className="icon" /> <span>Registered Events</span>
              </li>
              <li className="nav-item left-align">
                <FaRegBookmark className="icon" /> <span>Saved Events</span>
              </li>
              <li className="nav-item left-align">
                <FaBoxOpen className="icon" /> <span>My Orders</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bottom-links">
          <div className="nav-item left-align">
            <FaCog className="icon" /> <span>Settings</span>
          </div>
          <div className="nav-item left-align">
            <FaSignOutAlt className="icon" /> <span>Logout</span>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="profile-main">
        <div className="profile-card">
          <div className="profile-header">
            <FaUserCircle className="profile-pic" />
            <div>
              <h1>{user.name}</h1>
              <p>{user.username}</p>
            </div>
          </div>

          <div className="profile-content">
            <div>
              <h2>Email</h2>
              <p>{user.email}</p>
            </div>
            <div>
              <h2>Phone</h2>
              <p>{user.phone}</p>
            </div>
            <div>
              <h2>Location</h2>
              <p>{user.location}</p>
            </div>
            <div>
              <h2>Occupation</h2>
              <p>{user.occupation}</p>
            </div>
            <div>
              <h2>Bio</h2>
              <p>{user.bio}</p>
            </div>
            <div>
              <h2>Skills & Interests</h2>
              <p>{user.skills}</p>
            </div>
            <div>
              <h2>Social Media</h2>
              <p className="social">{user.social}</p>
            </div>
            <div>
              <h2>Member Since</h2>
              <p>{user.joined}</p>
            </div>

            {/* Registered Events and Bookings */}
            <div className="profile-stats">
              <div className="stat-item">
                <h3>Registered Events</h3>
                <p>{user.registeredEvents}</p>
              </div>
              <div className="stat-item">
                <h3>Total Bookings</h3>
                <p>{user.totalBookings}</p>
              </div>
            </div>

            {/* Profile Completion */}
            <div className="progress-section">
              <h2>Profile Completion</h2>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: "85%" }}></div>
              </div>
              <p>85% complete</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
