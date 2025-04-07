import { Link } from "react-router-dom";
import "./../styles/MiniNavbar.css";

export default function MiniNavbar() {
  return (
    <nav className="mini-navbar">
      {/* Left Side */}
      <div className="mini-nav-left">
        {[
          { name: "Events", path: "/events" },
          { name: "Shows", path: "/shows" },
          { name: "Plays", path: "/plays" },
          { name: "Movies", path: "/movies" },
          { name: "Parties", path: "/parties" },
          { name: "Conferences", path: "/conferences" }
        ].map((item) => (
          <Link key={item.name} to={item.path} className="mini-nav-button">
            {item.name}
          </Link>
        ))}
      </div>

      {/* Right Side */}
      <div className="mini-nav-right">
        {[
          { name: "Offers", path: "/offers" },
          { name: "List Your Ticket", path: "/list-ticket" },
          { name: "List Your Shows", path: "/list-shows" }
        ].map((item) => (
          <Link key={item.name} to={item.path} className="mini-nav-button">
            {item.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}
