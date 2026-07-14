import React, { useState, useEffect } from "react";
import "./Hero.css";
import { useNavigate } from "react-router-dom";

import setup1 from "../assets/images/setup1.jpg";
import setup2 from "../assets/images/setup2.jpg";
import setup3 from "../assets/images/setup3.jpg";

const slides = [setup1, setup2, setup3];

function Hero() {
  const [current, setCurrent] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const navigate = useNavigate();

  // PRELOAD IMAGES
 useEffect(() => {
  let loadedCount = 0;

  slides.forEach((img) => {
    const image = new Image();
    image.src = img;

    image.onload = () => {
      loadedCount += 1;

      if (loadedCount === slides.length)
      {
        setLoaded(true);
      }
    };
  });
 }, []);
 
  // SLIDER TIMER
  useEffect(() => {
    if (!loaded) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) %
    slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [loaded]);

  return (
    <section className="hero">
      {slides.map((img, index) => (
        <div
          key={index}
          className={`hero-slide ${index === current ? "active" : ""}`}
          style={{ backgroundImage: `url(${img})` }}
        />
      ))}

      <div className="hero-overlay"></div>

      <div className="hero-content">
        <h1>Transforming Events Into Luxury Experiences</h1>
        <p>Elegant setups for weddings, parties and corporate events</p>
        <button 
           className="hero-btn"
           onClick={() => navigate("/contact")}
        >
          Book Your Event
        </button>
      </div>
    </section>
  );
}

export default Hero;