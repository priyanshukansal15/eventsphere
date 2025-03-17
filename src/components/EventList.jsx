import React, { useState } from "react";
import EventCard from "./EventCard";
import EventDetailsModal from "./EventDetailsModal";
import "../styles/Events.css";

const eventsData = [
  {
    id: 1,
    title: "Music Concert",
    description: "An electrifying night with top artists.",
    location: "Delhi, India",
    timing: "7:00 PM - 11:00 PM",
    price: "₹999",
    ageLimit: "18+",
    terms: "No refunds. ID required.",
  },
  {
    id: 2,
    title: "Tech Conference",
    description: "The latest trends in AI & ML.",
    location: "Bangalore, India",
    timing: "10:00 AM - 5:00 PM",
    price: "₹1499",
    ageLimit: "All ages",
    terms: "Pre-registration required.",
  },
  {
    id: 3,
    title: "Food Festival",
    description: "Taste exotic dishes from around the world.",
    location: "Mumbai, India",
    timing: "12:00 PM - 10:00 PM",
    price: "₹499",
    ageLimit: "All ages",
    terms: "Outside food not allowed.",
  },
];

const EventsList = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  return (
    <div className="events-list-container">
      <h2 className="section-title">Upcoming Events</h2>
      <div className="events-grid">
        {eventsData.map((event) => (
          <EventCard key={event.id} event={event} onSelect={setSelectedEvent} />
        ))}
      </div>
      {selectedEvent && (
        <EventDetailsModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />
      )}
    </div>
  );
};

export default EventsList;
