// Footer.js
import React from 'react';
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <ul className="footer-list">
          <li><a href="/contact-us">Contact Us</a></li>
          {/* <li><a href="/help">Help</a></li> */}
          <li><a href="/about-us">About Us</a></li>
          <li><a href="/privacy-policy">Privacy Policy</a></li>
        </ul>
      </div>

      <div className="footer-middle">
        <ul className="footer-list">
          <li><a href="/events">Events</a></li>
          <li><a href="/shows">Shows</a></li>
          <li><a href="/plays">Plays</a></li>
          <li><a href="/movies">Movies</a></li>
          <li><a href="/parties">Parties</a></li>
          <li><a href="/conferences">Conferences</a></li>
        </ul>
      </div>

      <div className="footer-right">
        <ul className="footer-list">
          <li><a href="/list-ticket">List Your Ticket</a></li>
          <li><a href="/list-shows">List Your Shows</a></li>
        </ul>
      </div>

      {/* Add a copyright section at the bottom */}
      <div className="footer-copyright">
        <p>&copy; 2025 EventSphere. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;