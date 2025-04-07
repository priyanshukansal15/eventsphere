import React from "react";
import { Link } from "react-router-dom";
import "../styles/ListYourShows.css";

const ListYourShow = () => {
  return (
    <div>
      <div className="background-pattern"></div>

      <div className="container">
        <h2>List Your Show</h2>
        <p className="subtitle">
          Fill in the details to showcase your event and reach a wider audience!
        </p>

        <form>
          {/* Show Name */}
          <div className="input-group">
            <label htmlFor="show-name">Show Name</label>
            <input type="text" id="show-name" placeholder="Enter show name" required />
          </div>

          {/* Show Category */}
          <div className="input-group">
            <label htmlFor="category">Show Category</label>
            <select id="category" required>
              <option value="">Select category</option>
              <option value="music">Music Concert</option>
              <option value="theatre">Theatre & Drama</option>
              <option value="comedy">Stand-up Comedy</option>
              <option value="workshop">Workshop</option>
              <option value="sports">Sports Event</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Venue */}
          <div className="input-group">
            <label htmlFor="venue">Venue</label>
            <input type="text" id="venue" placeholder="Enter venue" required />
          </div>

          {/* Date & Time */}
          <div className="input-row">
            <div className="input-group">
              <label htmlFor="date">Date</label>
              <input type="date" id="date" required />
            </div>
            <div className="input-group">
              <label htmlFor="time">Time</label>
              <input type="time" id="time" required />
            </div>
          </div>

          {/* Ticket Price */}
          <div className="input-group">
            <label htmlFor="price">Ticket Price (₹)</label>
            <input type="number" id="price" placeholder="Enter price" required />
          </div>

          {/* Contact Details */}
          <div className="input-group">
            <label htmlFor="contact">Organizer Contact</label>
            <input type="tel" id="contact" placeholder="Enter contact number" required />
          </div>

          {/* Description */}
          <div className="input-group">
            <label htmlFor="description">Show Description</label>
            <textarea id="description" rows="4" placeholder="Describe your show" required></textarea>
          </div>

          {/* Upload Image */}
          <div className="input-group">
            <label htmlFor="image">Upload Show Poster</label>
            <input type="file" id="image" accept="image/*" />
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn">Submit Show</button>
        </form>

        {/* Navigation */}
        <div className="nav-links">
          <Link to="/" className="back-link">Back to Home</Link>
        </div>
      </div>
    </div>
  );
};

export default ListYourShow;
