import "./../styles/MiniNavbar.css";

export default function MiniNavbar() {
  return (
    <nav className="mini-navbar">
      {/* Left Side */}
      <div className="mini-nav-left">
        {["Events", "Shows", "Plays", "Movies", "Parties", "Conferences"].map((item) => (
          <button key={item} className="mini-nav-button">{item}</button>
        ))}
      </div>

      {/* Right Side */}
      <div className="mini-nav-right">
        {["Offers", "List Your Ticket", "List Your Shows"].map((item) => (
          <button key={item} className="mini-nav-button">{item}</button>
        ))}
      </div>
    </nav>
  );
}
