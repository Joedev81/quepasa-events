import React, { useEffect, useRef } from "react";
import "./Services.css";
import weddingImg from "../assets/service/wedding.jpg";
import birthdayImg from "../assets/service/birthday.jpg";
import corporateImg from "../assets/service/corporate.jpg";
import ruracioImg from "../assets/service/ruracio.jpeg";
import graduationImg from "../assets/service/graduation.jpeg";
import valentineImg from "../assets/service/valentine.jpeg";
import convoyImg from "../assets/service/convoy.jpeg";
import cateringImg from "../assets/service/catering.jpeg";

const services = [
  { title: "Wedding Setup", image: weddingImg, description: "We create elegant wedding setups to make your day unforgettable." },
  { title: "Birthday Parties", image: birthdayImg, description: "Fun, colorful, and memorable birthday events for all ages." },
  { title: "Corporate Events", image: corporateImg, description: "Professional setups for meetings, conferences, and corporate celebrations." },
  {title: "Ruracio Ceremony", image: ruracioImg, description: "Stylish and well-curated Ruracio Ceremonies that honor tradition while creating unforgettable moments."},
  {title: "Graduation Ceremony", image: graduationImg, description: "Bold, exciting and proud Graduation Ceremony to celebrate your milestone in the best way."},
  {title: "Valentine Setups", image: valentineImg, description: "Romanic and beautifully styled bedroom setups designed to create unforgettable Valentine's moments."},
  {title: "Car Convoy", image: convoyImg, description: "Sleek and vibrant car convoys that bring energy, style and excitements to your event."},
  {title: "Catering Services", image: cateringImg, description: "Exquisite catering experiences that combine flavor, elegance and top-tier service."},
];

export default function Services() {
  const containerRef = useRef(null);

  useEffect(() => {
    const items = containerRef.current.querySelectorAll(".service-card");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.1 }
    );

    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="services-page">
      <section className="services-title">
        <h1>Our Services</h1>
        <p>We provide everything you need to make your event unforgettable</p>
      </section>

      <section ref={containerRef} className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <img src={service.image} alt={service.title} />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </section>
    </div>
  );
}