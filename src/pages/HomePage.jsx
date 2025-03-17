import React from "react";
import MiniNavbar from "../components/MiniNavbar";
import Slider from "../components/Slider";
import EventFilter from "../components/EventFilter";
import EventsList from "../components/EventList";


export default function HomePage() {
  return (
    <div>
      <MiniNavbar />
      <Slider />
      <EventFilter />
      <EventsList />
    </div>
  );
}
