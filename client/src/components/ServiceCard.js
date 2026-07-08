import React, { useEffect, useState } from "react";
import ImageModal from "./ImageModal";
import "./ServiceCard.css";

function ServiceCard({ service }) {
  const [currentImage, setCurrentImage] = useState(0);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % service.images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [service.images.length]);

  return (
    <>
      <div className="service-card">
        <div className="service-image">
          <img
            key={currentImage}
            src={service.images[currentImage]}
            alt={service.title}
            className="service-image fade-image"
          />

          <div className="image-overlay"></div>

          <span className="service-badge">Premium</span>
        </div>

        <div className="service-content">
          <h3>{service.title}</h3>

          <div className="service-rating">
            ★★★★★
            <span> Luxury Experience</span>
          </div>

          <p>{service.description}</p>

          <div className="service-features">
            <p>✓ Luxury Styling</p>
            <p>✓ Custom Design</p>
            <p>✓ Professional Team</p>
          </div>

          <div className="card-actions">

            <button
               className="explore-btn"
               onClick={() => 
                setShowModal(true)
               }
            >Explore Gallery →
            </button>

            <button  
               className="book-btn"
               onClick={() => 
                window.location.href="/contact"}
            >Book This Services</button>
          </div>
        </div>
      </div>

      {showModal && (
        <ImageModal
          title={service.title}
          images={service.images}
          close={() => setShowModal(false)}
        />
      )}
    </>
  );
}

export default ServiceCard;