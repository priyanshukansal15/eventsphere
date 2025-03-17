import React from "react";
import { X } from "lucide-react";
import "../styles/Events.css";



const EventDetailsModal = ({ event, onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>
          <X size={20} />
        </button>
        <h2>{event.title}</h2>
        <p><strong>Description:</strong> {event.description}</p>
        <p><strong>Location:</strong> {event.location}</p>
        <p><strong>Timings:</strong> {event.timing}</p>
        <p><strong>Price:</strong> {event.price}</p>
        <p><strong>Age Limit:</strong> {event.ageLimit}</p>
        <p><strong>Terms & Conditions:</strong> {event.terms}</p>
      </div>
    </div>
  );
};

export default EventDetailsModal;
