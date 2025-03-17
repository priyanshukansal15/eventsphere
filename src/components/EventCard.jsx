import React from "react";
import { MapPin, Clock, Info } from "lucide-react";
import "../styles/Events.css";

const EventCard = ({ event, onSelect }) => {
  return (
    <div className="event-card" onClick={() => onSelect(event)}>
      <h3 className="event-title">{event.title}</h3>
      <p className="event-description">{event.description}</p>
      <div className="event-details">
        <p><MapPin size={16} /> {event.location}</p>
        <p><Clock size={16} /> {event.timing}</p>
        <p><Info size={16} /> {event.price}</p>
      </div>
    </div>
  );
};

export default EventCard;
