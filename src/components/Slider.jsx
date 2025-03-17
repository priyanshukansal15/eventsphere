import React, { useState, useEffect } from 'react';
import '../styles/Slider.css';

import panel1 from '../images/confrences.jpeg';
import panel2 from '../images/theatre.jpeg';      
import panel3 from '../images/movie.jpeg';
import panel4 from '../images/parties.jpeg';
import panel5 from '../images/shows.webp';
import panel6 from '../images/weddings.jpeg';
import panel7 from "../images/concerts.jpeg";
import panel8 from "../images/sports.jpeg";

const slides = [
  { id: 1, content: 'Conferences', image: panel1 },
  { id: 2, content: 'Theatre', image: panel2 },
  { id: 3, content: 'Movies', image: panel3 },
  { id: 4, content: 'Parties', image: panel4 },
  { id: 5, content: 'Shows', image: panel5 },
  { id: 6, content: 'Weddings', image: panel6 },
  { id: 7, content: 'Concerts', image: panel7 },
  { id: 8, content: 'Sports', image: panel8 } 

];

const totalSlides = slides.length;

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 2) % totalSlides);
    }, 7000); // Slower transition (5s)

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider-container">
      {/* <h1 className="slider-heading">Welcome to EventSphere</h1> Added heading */}
      <div
        className="slider-inner"
        style={{ transform: `translateX(-${currentSlide * 50}vw)` }} // Move 2 images at a time
      >
        {[...slides, ...slides.slice(0, 2)].map((slide, index) => ( // Duplicate first two slides for smooth cycling
          <div className="slide" key={index}>
            <img src={slide.image} alt={slide.content} />
            <div className="event-text">{slide.content}</div> {/* Event name below image */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
