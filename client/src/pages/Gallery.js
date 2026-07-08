import React, { useEffect, useRef } from "react";
import "./Gallery.css";

// Import gallery images
import gallery1 from "../assets/gallery/gallery1.jpeg";
import gallery2 from "../assets/gallery/gallery2.jpeg";
import gallery3 from "../assets/gallery/gallery3.jpeg";
import gallery4 from "../assets/gallery/gallery4.jpeg";
import gallery5 from "../assets/gallery/gallery5.jpeg";
import gallery6 from "../assets/gallery/gallery6.jpeg";
import gallery7 from "../assets/gallery/gallery7.jpeg";
import gallery8 from "../assets/gallery/gallery8.jpeg";
import gallery9 from "../assets/gallery/gallery9.jpeg";
import gallery10 from "../assets/gallery/gallery10.jpeg";
import gallery11 from "../assets/gallery/gallery11.jpeg";
import gallery12 from "../assets/gallery/gallery12.jpeg";
import gallery13 from "../assets/gallery/gallery13.jpeg";
import gallery14 from "../assets/gallery/gallery14.jpeg";
import gallery15 from "../assets/gallery/gallery15.jpeg";
import gallery16 from "../assets/gallery/gallery16.jpeg";
import gallery17 from "../assets/gallery/gallery17.jpeg";
import gallery18 from "../assets/gallery/gallery18.jpeg";
import gallery19 from "../assets/gallery/gallery19.jpeg";
import gallery20 from "../assets/gallery/gallery20.jpeg";
import gallery21 from "../assets/gallery/gallery21.jpeg";
import gallery22 from "../assets/gallery/gallery22.jpeg";
import gallery23 from "../assets/gallery/gallery23.jpeg";
import gallery24 from "../assets/gallery/gallery24.jpeg";
import gallery25 from "../assets/gallery/gallery25.jpeg";
import gallery26 from "../assets/gallery/gallery26.jpeg";
import gallery27 from "../assets/gallery/gallery27.jpeg";
import gallery28 from "../assets/gallery/gallery28.jpeg";
import gallery29 from "../assets/gallery/gallery29.jpeg";
import gallery30 from "../assets/gallery/gallery30.jpeg";
import gallery31 from "../assets/gallery/gallery31.jpeg";
import gallery32 from "../assets/gallery/gallery32.jpeg";
import gallery33 from "../assets/gallery/gallery33.jpeg";
import gallery34 from "../assets/gallery/gallery34.jpeg";
import gallery35 from "../assets/gallery/gallery35.jpeg";
import gallery36 from "../assets/gallery/gallery36.jpeg";
import gallery37 from "../assets/gallery/gallery37.jpeg";
import gallery38 from "../assets/gallery/gallery38.jpeg";
import gallery39 from "../assets/gallery/gallery39.jpeg";
import gallery40 from "../assets/gallery/gallery40.jpeg";
import gallery41 from "../assets/gallery/gallery41.jpeg";
import gallery42 from "../assets/gallery/gallery42.jpeg";
import gallery43 from "../assets/gallery/gallery43.jpeg";
import gallery44 from "../assets/gallery/gallery44.jpeg";
import gallery45 from "../assets/gallery/gallery45.jpeg";
import gallery46 from "../assets/gallery/gallery46.jpeg";
import gallery47 from "../assets/gallery/gallery47.jpeg";
import gallery48 from "../assets/gallery/gallery48.jpeg";
import gallery49 from "../assets/gallery/gallery49.jpeg";
import gallery50 from "../assets/gallery/gallery50.jpeg";
import gallery51 from "../assets/gallery/gallery51.jpeg";
import gallery52 from "../assets/gallery/gallery52.jpeg";
import gallery53 from "../assets/gallery/gallery53.jpeg";
import gallery54 from "../assets/gallery/gallery54.jpeg";
import gallery55 from "../assets/gallery/gallery55.jpeg";
import gallery56 from "../assets/gallery/gallery56.jpeg";
import gallery57 from "../assets/gallery/gallery57.jpeg";
import gallery58 from "../assets/gallery/gallery58.jpeg";
import gallery59 from "../assets/gallery/gallery59.jpeg";
import gallery60 from "../assets/gallery/gallery60.jpeg";
import gallery61 from "../assets/gallery/gallery61.jpeg";
import gallery62 from "../assets/gallery/gallery62.jpeg";
import gallery63 from "../assets/gallery/gallery63.jpeg";
import gallery64 from "../assets/gallery/gallery64.jpeg";
import gallery65 from "../assets/gallery/gallery65.jpeg";
import gallery66 from "../assets/gallery/gallery66.jpeg";
import gallery67 from "../assets/gallery/gallery67.jpeg";
import gallery68 from "../assets/gallery/gallery68.jpeg";
import gallery69 from "../assets/gallery/gallery69.jpeg";
import gallery70 from "../assets/gallery/gallery70.jpeg";
import gallery71 from "../assets/gallery/gallery71.jpeg";
import gallery72 from "../assets/gallery/gallery72.jpeg";
import gallery73 from "../assets/gallery/gallery73.jpeg";
import gallery74 from "../assets/gallery/gallery74.jpeg";
import gallery75 from "../assets/gallery/gallery75.jpeg";
import gallery76 from "../assets/gallery/gallery76.jpeg";
import gallery77 from "../assets/gallery/gallery77.jpeg";
import gallery78 from "../assets/gallery/gallery78.jpeg";
import gallery79 from "../assets/gallery/gallery79.jpeg";
import gallery80 from "../assets/gallery/gallery80.jpeg";
import gallery81 from "../assets/gallery/gallery81.jpeg";
import gallery82 from "../assets/gallery/gallery82.jpeg";
import gallery83 from "../assets/gallery/gallery83.jpeg";
import gallery84 from "../assets/gallery/gallery84.jpeg";
import gallery85 from "../assets/gallery/gallery85.jpeg";
import gallery86 from "../assets/gallery/gallery86.jpeg";
import gallery87 from "../assets/gallery/gallery87.jpeg";
import gallery88 from "../assets/gallery/gallery88.jpeg";
import gallery89 from "../assets/gallery/gallery89.jpeg";
import gallery90 from "../assets/gallery/gallery90.jpeg";
import gallery91 from "../assets/gallery/gallery91.jpeg";
import gallery92 from "../assets/gallery/gallery92.jpeg";
import gallery93 from "../assets/gallery/gallery93.jpeg";
import gallery94 from "../assets/gallery/gallery94.jpeg";
import gallery95 from "../assets/gallery/gallery95.jpeg";
import gallery96 from "../assets/gallery/gallery96.jpeg";
import gallery97 from "../assets/gallery/gallery97.jpeg";
import gallery98 from "../assets/gallery/gallery98.jpeg";
import gallery99 from "../assets/gallery/gallery99.jpeg";




const galleryImages = [
  gallery1,
  gallery2,
  gallery3,
  gallery4,
  gallery5,
  gallery6,
  gallery7,
  gallery8,
  gallery9,
  gallery10,
  gallery11,
  gallery12,
  gallery13,
  gallery14,
  gallery15,
  gallery16,
  gallery17,
  gallery18,
  gallery19,
  gallery20,
  gallery21,
  gallery22,
  gallery23,
  gallery24,
  gallery25,
  gallery26,
  gallery27,
  gallery28,
  gallery29,
  gallery30,
  gallery31,
  gallery32,
  gallery33,
  gallery34,
  gallery35,
  gallery36,
  gallery37,
  gallery38,
  gallery39,
  gallery40,
  gallery41,
  gallery42,
  gallery43,
  gallery44,
  gallery45,
  gallery46,
  gallery47,
  gallery48,
  gallery49,
  gallery50,
  gallery51,
  gallery52,
  gallery53,
  gallery54,
  gallery55,
  gallery56,
  gallery57,
  gallery58,
  gallery59,
  gallery60,
  gallery61,
  gallery62,
  gallery63,
  gallery64,
  gallery65,
  gallery66,
  gallery67,
  gallery68,
  gallery69,
  gallery70,
  gallery71,
  gallery72,
  gallery73,
  gallery74,
  gallery75,
  gallery76,
  gallery77,
  gallery78,
  gallery79,
  gallery80,
  gallery81,
  gallery82,
  gallery83,
  gallery84,
  gallery85,
  gallery86,
  gallery87,
  gallery88,
  gallery89,
  gallery90,
  gallery91,
  gallery92,
  gallery93,
  gallery94,
  gallery95,
  gallery96,
  gallery97,
  gallery98,
  gallery99,
];

export default function Gallery() {
  const containerRef = useRef(null);

  useEffect(() => {
    const items = containerRef.current.querySelectorAll(".gallery-item");

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
    <div className="gallery-page">
      <section className="gallery-title">
        <h1>Que Pasa Events Gallery</h1>
        <p>Take a peek at some of our most memorable events!</p>
      </section>

      <section ref={containerRef} className="gallery-grid">
        {galleryImages.map((img, index) => (
          <div
            key={index}
            className="gallery-item"
            onMouseOver={(e) =>
              (e.currentTarget.style.transform = "scale(1.05)")
            }
            onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <img src={img} alt={`Gallery ${index + 1}`} />
          </div>
        ))}
      </section>
    </div>
  );
}