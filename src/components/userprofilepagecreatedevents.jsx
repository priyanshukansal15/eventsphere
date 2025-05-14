import React from "react";
import "../styles/UserProfile.css"; // Assuming you have a CSS file for styling
import { FaUserCircle } from "react-icons/fa";  // Importing icons from react-icons
import { FaUser, FaCalendarAlt, FaRegBookmark, FaRegCheckCircle, FaCog, FaSignOutAlt, FaBoxOpen } from "react-icons/fa"; // Importing icons from react-icons

const createdEvents = [
  {
    name: "Tech Conference 2025",
    description: "A gathering of tech enthusiasts to explore future technologies.",
    time: "10:00 AM - 4:00 PM",
    venue: "Tech Hub Auditorium",
  },
  {
    name: "Design Sprint Workshop",
    description: "Hands-on session for solving UI/UX problems collaboratively.",
    time: "2:00 PM - 5:00 PM",
    venue: "Design Studio 1",
  },
  {
    name: "Startup Pitch Night",
    description: "Pitch your startup ideas to a panel of investors and mentors.",
    time: "6:00 PM - 9:00 PM",
    venue: "Main Hall, Startup Center",
  },
  {
    name: "Web Dev Bootcamp",
    description: "Intensive bootcamp for beginners to learn full-stack development.",
    time: "9:00 AM - 3:00 PM",
    venue: "Coding Arena",
  },
  {
    name: "Marketing Essentials",
    description: "Learn the core principles of digital marketing and branding.",
    time: "11:00 AM - 1:00 PM",
    venue: "Room 201, Business Block",
  },
  {
    name: "AI & ML Hackathon",
    description: "24-hour hackathon to build AI/ML-based solutions for real problems.",
    time: "10:00 AM - 10:00 AM (Next Day)",
    venue: "Innovation Lab",
  },
];

export default function CreatedEventsPage() {
  return (
    <div className="created-events-container">
      <h2 className="page-title">Created Events</h2>
      <div className="events-grid">
        {createdEvents.map((event, index) => (
          <div key={index} className="event-card">
            <h3>{event.name}</h3>
            <p className="event-desc">{event.description}</p>
            <p><strong>Time:</strong> {event.time}</p>
            <p><strong>Venue:</strong> {event.venue}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
