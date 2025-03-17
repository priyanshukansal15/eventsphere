import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../styles/EventFilter.css"; // Import the CSS file

const EventFilter = () => {
  const [selectedEvent, setSelectedEvent] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);

  const eventTypes = ["Events", "Shows", "Plays", "Movies", "Parties", "Conferences"];
  const locations = ["New Delhi", "Mumbai", "Bangalore", "Kolkata", "Chennai", "Hyderabad"];

  const handleSearch = () => {
    alert(`Searching for ${selectedEvent} in ${selectedLocation} on ${selectedDate}`);
  };

  return (
    <div className="event-filter">
      <select value={selectedEvent} onChange={(e) => setSelectedEvent(e.target.value)}>
        <option value="">Select Event Type</option>
        {eventTypes.map((event, index) => (
          <option key={index} value={event}>
            {event}
          </option>
        ))}
      </select>

      <select value={selectedLocation} onChange={(e) => setSelectedLocation(e.target.value)}>
        <option value="">Select Location</option>
        {locations.map((location, index) => (
          <option key={index} value={location}>
            {location}
          </option>
        ))}
      </select>

      <DatePicker 
        selected={selectedDate} 
        onChange={(date) => setSelectedDate(date)} 
        placeholderText="Select Date"
      />

      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default EventFilter;
