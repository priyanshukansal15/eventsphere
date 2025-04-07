import React, { useState } from "react";
import EventCard from "./EventCard";
import EventDetailsModal from "./EventDetailsModal";
import "../styles/Events.css";

const eventsData = [
  { id: 1, title: "Music Concert", description: "An electrifying night with top artists.", location: "Delhi, India", timing: "7:00 PM - 11:00 PM", price: "₹999", ageLimit: "18+", terms: "No refunds. ID required." },
  { id: 2, title: "Tech Conference", description: "The latest trends in AI & ML.", location: "Bangalore, India", timing: "10:00 AM - 5:00 PM", price: "₹1499", ageLimit: "All ages", terms: "Pre-registration required." },
  { id: 3, title: "Food Festival", description: "Taste exotic dishes from around the world.", location: "Mumbai, India", timing: "12:00 PM - 10:00 PM", price: "₹499", ageLimit: "All ages", terms: "Outside food not allowed." },
  { id: 4, title: "Stand-up Comedy Night", description: "A hilarious evening with top comedians.", location: "Kolkata, India", timing: "8:00 PM - 10:30 PM", price: "₹799", ageLimit: "16+", terms: "No heckling allowed." },
  { id: 5, title: "Startup Pitch Event", description: "Showcase your startup to investors.", location: "Hyderabad, India", timing: "9:00 AM - 4:00 PM", price: "₹1999", ageLimit: "18+", terms: "Business attire required." },
  { id: 6, title: "Art Exhibition", description: "Discover paintings and sculptures from renowned artists.", location: "Chennai, India", timing: "10:00 AM - 7:00 PM", price: "₹299", ageLimit: "All ages", terms: "No photography allowed." },
  { id: 7, title: "Dance Workshop", description: "Learn contemporary and hip-hop dance styles.", location: "Pune, India", timing: "5:00 PM - 8:00 PM", price: "₹599", ageLimit: "12+", terms: "Casual wear recommended." },
  { id: 8, title: "Cricket Tournament", description: "A weekend cricket league for enthusiasts.", location: "Delhi, India", timing: "8:00 AM - 6:00 PM", price: "₹999", ageLimit: "All ages", terms: "Team registration required." },
  { id: 9, title: "Yoga Retreat", description: "A day of relaxation and meditation.", location: "Rishikesh, India", timing: "6:00 AM - 6:00 PM", price: "₹1299", ageLimit: "15+", terms: "Bring your own yoga mat." },
  { id: 10, title: "Coding Bootcamp", description: "Learn full-stack web development.", location: "Bangalore, India", timing: "9:00 AM - 6:00 PM", price: "₹4999", ageLimit: "18+", terms: "Laptop required." },
  { id: 11, title: "Book Fair", description: "Explore books from various genres.", location: "Lucknow, India", timing: "10:00 AM - 8:00 PM", price: "Free", ageLimit: "All ages", terms: "Book signing at 4 PM." },
  { id: 12, title: "Gaming Tournament", description: "Compete in popular video games.", location: "Mumbai, India", timing: "11:00 AM - 9:00 PM", price: "₹799", ageLimit: "16+", terms: "Console provided." },
  { id: 13, title: "Photography Workshop", description: "Learn the art of photography.", location: "Jaipur, India", timing: "3:00 PM - 7:00 PM", price: "₹999", ageLimit: "16+", terms: "Bring your camera." },
  { id: 14, title: "Cycling Marathon", description: "Race through scenic routes.", location: "Shimla, India", timing: "6:00 AM - 2:00 PM", price: "₹599", ageLimit: "18+", terms: "Helmet required." },
  { id: 15, title: "Film Festival", description: "Screening of award-winning films.", location: "Chennai, India", timing: "2:00 PM - 10:00 PM", price: "₹399", ageLimit: "All ages", terms: "No outside food allowed." },
  { id: 16, title: "Poetry Slam", description: "Express yourself through words.", location: "Kolkata, India", timing: "5:00 PM - 9:00 PM", price: "₹299", ageLimit: "14+", terms: "No offensive content." },
  { id: 17, title: "Space Exploration Seminar", description: "Learn about the future of space travel.", location: "Hyderabad, India", timing: "10:00 AM - 3:00 PM", price: "₹1499", ageLimit: "16+", terms: "No late entries." },
  { id: 18, title: "Handicraft Fair", description: "Traditional crafts from artisans.", location: "Pune, India", timing: "10:00 AM - 7:00 PM", price: "₹199", ageLimit: "All ages", terms: "Support local artisans." },
  { id: 19, title: "Rock Climbing Event", description: "Challenge yourself to the highest peaks.", location: "Manali, India", timing: "8:00 AM - 5:00 PM", price: "₹899", ageLimit: "12+", terms: "Safety gear provided." },
  { id: 20, title: "Chess Championship", description: "Test your skills against the best.", location: "Ahmedabad, India", timing: "9:00 AM - 6:00 PM", price: "₹699", ageLimit: "10+", terms: "Pre-registration required." },
  { id: 21, title: "AI Workshop", description: "Hands-on workshop on AI and ML.", location: "Bangalore, India", timing: "10:00 AM - 4:00 PM", price: "₹2499", ageLimit: "18+", terms: "Laptop required." },
  { id: 22, title: "Marathon Run", description: "Run for a cause and stay fit.", location: "Mumbai, India", timing: "5:00 AM - 10:00 AM", price: "₹499", ageLimit: "16+", terms: "Running shoes mandatory." },
  { id: 23, title: "Robotics Expo", description: "Explore cutting-edge robotics innovations.", location: "Delhi, India", timing: "10:00 AM - 6:00 PM", price: "₹999", ageLimit: "All ages", terms: "Photography allowed." },
  { id: 24, title: "Folk Music Night", description: "An evening of traditional folk tunes.", location: "Jaipur, India", timing: "7:00 PM - 10:00 PM", price: "₹599", ageLimit: "All ages", terms: "No alcohol allowed." },
  { id: 25, title: "Science Fair", description: "Innovative projects from young minds.", location: "Hyderabad, India", timing: "9:00 AM - 5:00 PM", price: "₹399", ageLimit: "All ages", terms: "No disruptive behavior." },
  { id: 26, title: "Astronomy Night", description: "Stargazing with expert astronomers.", location: "Shimla, India", timing: "8:00 PM - 12:00 AM", price: "₹899", ageLimit: "12+", terms: "Bring your telescope if you have one." },
  { id: 27, title: "Fashion Show", description: "A runway show featuring top designers.", location: "Chennai, India", timing: "6:00 PM - 10:00 PM", price: "₹1999", ageLimit: "18+", terms: "Formal attire required." },
  { id: 28, title: "Ethnic Food Carnival", description: "Taste authentic dishes from different cultures.", location: "Kolkata, India", timing: "11:00 AM - 9:00 PM", price: "₹799", ageLimit: "All ages", terms: "Food coupons available." },
  { id: 29, title: "Theater Play", description: "A live drama performance by renowned artists.", location: "Pune, India", timing: "7:00 PM - 9:30 PM", price: "₹999", ageLimit: "14+", terms: "No late entries." },
  { id: 30, title: "Digital Art Contest", description: "Showcase your creativity in digital art.", location: "Lucknow, India", timing: "10:00 AM - 5:00 PM", price: "₹499", ageLimit: "16+", terms: "Laptop or tablet required." }

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
