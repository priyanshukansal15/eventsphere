import React from "react";

const EventDetailsModal = ({ event, onClose }) => {
  if (!event) return null; // Do not render if no event is selected

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>✖</button>
        <h2>{event.title}</h2>
        <p><strong>Location:</strong> {event.location}</p>
        <p><strong>Time:</strong> {event.time}</p>
        <p><strong>Price:</strong> {event.price}</p>
        <p><strong>Age Limit:</strong> {event.ageLimit}</p>
        <p><strong>Terms & Conditions:</strong> {event.terms}</p>
      </div>
    </div>
  );
};

export default EventDetailsModal;
