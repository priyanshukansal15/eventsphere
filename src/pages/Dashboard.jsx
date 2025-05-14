import React from "react";
import "../styles/Dashboard.css";
import adminImage from "../images/admin.jpeg";
import {
  FaCalendarAlt,
  FaUsers,
  FaBook,
  FaBell,
  FaCog,
  FaSignOutAlt,
  FaPlus,
  FaBullhorn,
  FaTrash,
  FaEdit,
  FaSearch,
} from "react-icons/fa";

function Dashboard() {
  return (
    <div className="dashboard-container">
      {/* Sidebar Navigation */}
      <aside className="sidebar">
  <h2>EventSphere Admin</h2>
  <nav>
    <ul>
      <li className="sidebar-section-title">Main</li>
      <li className="sidebar-item"><FaCalendarAlt /> <span>Dashboard Overview</span></li>

      <li className="sidebar-section-title">Event Management</li>
      <li className="sidebar-item"><FaUsers /> <span>Manage Events</span></li>
      <li className="sidebar-item"><FaPlus /> <span>Create Event</span></li>
      <li className="sidebar-item"><FaEdit /> <span>Edit Event</span></li>
      <li className="sidebar-item"><FaTrash /> <span>Delete Event</span></li>

      <li className="sidebar-section-title">Users & Bookings</li>
      <li className="sidebar-item"><FaUsers /> <span>Manage Users</span></li>
      <li className="sidebar-item"><FaBook /> <span>Bookings</span></li>

      <li className="sidebar-section-title">Other</li>
      <li className="sidebar-item"><FaBullhorn /> <span>Announcements</span></li>
      <li className="sidebar-item"><FaCog /> <span>Settings</span></li>
      <li className="sidebar-item"><FaSignOutAlt /> <span>Logout</span></li>
    </ul>
  </nav>
</aside>

      {/* Main Content */}
      <main className="main-content">
        {/* Topbar */}
        <div className="topbar">
          <div>Welcome, Admin</div>
          <div className="admin-profile">
            <img src={adminImage} alt="Admin" />
          </div>
        </div>

        {/* Dashboard Summary Cards */}
        <section className="dashboard-overview">
          <div className="card">
            <h4>Total Events</h4>
            <p>15</p>
          </div>
          <div className="card">
            <h4>Registered Users</h4>
            <p>300</p>
          </div>
          <div className="card">
            <h4>Total Bookings</h4>
            <p>45</p>
          </div>
          <div className="card">
            <h4>Upcoming Events</h4>
            <p>3</p>
          </div>
        </section>

        {/* Quick Admin Actions */}
        <section className="admin-actions">
          <h3>Quick Actions</h3>
          <div className="actions">
            <button className="action-btn"><FaPlus /> Add Event</button>
            <button className="action-btn"><FaTrash /> Delete Event</button>
            <button className="action-btn"><FaEdit /> Update Event</button>
            <button className="action-btn"><FaSearch /> Search Event</button>
            <button className="action-btn"><FaBullhorn /> Make Announcement</button>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Dashboard;
