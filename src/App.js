import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import ConferencesPage from "./pages/ConferencePage";
import EventsPage from "./pages/EventsPage";
import MoviesPage from "./pages/MoviesPage";
import PartiesPage from "./pages/PartiesPage";
import PlaysPage from "./pages/PlaysPage";
import ShowsPage from "./pages/ShowsPage";
import ListYourShow from "./pages/ListYourShows";
import ListYourTickets from "./pages/ListYourTickets";
// import AboutUs from "./pages/AboutUs";
// import ContactUs from "./pages/ContactUs";
// import PrivacyPolicy from "./pages/PrivacyPolicy";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/conferences" element={<ConferencesPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/parties" element={<PartiesPage />} />
          <Route path="/plays" element={<PlaysPage />} />
          <Route path="/shows" element={<ShowsPage />} />
          <Route path="/list-shows" element={<ListYourShow />} />
          <Route path="/list-ticket" element={<ListYourTickets />} />
          {/* <Route path="/about-us" element={<AboutUs />} /> */}
          {/* <Route path="/contact-us" element={<ContactUs />} /> */}
          {/* <Route path="/privacy-policy" element={<PrivacyPolicy />} /> */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App; // ✅ Ensure this is at the end
