import React, { useEffect, useRef } from "react";
import "./About.css";

export default function About() {
  const cardRef = useRef(null);
  const testimonialRef = useRef(null);

  useEffect(() => {
    const cards = cardRef.current.querySelectorAll(".about-card");
    const testimonials = testimonialRef.current.querySelectorAll(".testimonial-card");

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

    cards.forEach((card) => observer.observe(card));
    testimonials.forEach((testimonial) => observer.observe(testimonial));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="about-page">
      {/* Page Title */}
      <section className="about-title">
        <h1>About Que Pasa Events</h1>
        <p>We provide everything you need to make your event unforgettable</p>
      </section>

      {/* Mission / Vision / Values */}
      <section ref={cardRef} className="about-content">
        <div className="about-card">
          <h2>Our Mission</h2>
          <p>
            To deliver exceptional event experiences by providing reliable, 
            creative, and fully customizable solutions that leave lasting memories. 
            Our mission is to ensure every celebration is seamless, joyful, 
            and unforgettable for our clients and their guests.
          </p>
        </div>

        <div className="about-card">
          <h2>Our Vision</h2>
          <p>
            To be the most trusted and innovative event management company 
            in Kenya, recognized for creativity, attention to detail, and 
            excellence in customer service. We aim to set the standard 
            for unforgettable celebrations and professional event execution.
          </p>
        </div>

        <div className="about-card">
          <h2>Our Values</h2>
          <p>
            Quality, Creativity, and Integrity guide everything we do. 
            We value strong relationships with clients, vendors, and our team, 
            ensuring honesty, respect, and excellence in every event we deliver.
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section ref={testimonialRef} className="testimonials">
        <h2>What Our Clients Say</h2>
        <p>We’re proud to have earned the trust of our clients through quality events and seamless service.</p>

        <div className="testimonial-grid">
          <div className="testimonial-card">
            <p>“Que Pasa Events made our wedding day unforgettable. Every detail was perfect and the team was professional and attentive.”</p>
            <div className="testimonial-author">
              <div className="avatar">M</div>
              <div>
                <h4>Michael Otieno</h4>
                <span>Bridegroom</span>
              </div>
            </div>
          </div>

          <div className="testimonial-card">
            <p>“Our corporate launch was a success thanks to Que Pasa Events. The planning and execution were flawless.”</p>
            <div className="testimonial-author">
              <div className="avatar">G</div>
              <div>
                <h4>Grace Njeri</h4>
                <span>CEO, GreenHarvest Co.</span>
              </div>
            </div>
          </div>

          <div className="testimonial-card">
            <p>“Highly recommend Que Pasa Events! They handled our birthday party with creativity, fun, and professionalism.”</p>
            <div className="testimonial-author">
              <div className="avatar">P</div>
              <div>
                <h4>Peter Mwangi</h4>
                <span>Birthday Client</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}