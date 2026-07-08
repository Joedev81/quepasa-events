import React, { useEffect, useRef } from "react";
import "./Services.css";

import ServiceCard from "../components/ServiceCard";


import weddingImg from "../assets/service/wedding.jpg";
import birthdayImg from "../assets/service/birthday.jpg";
import corporateImg from "../assets/service/corporate.jpg";
import ruracioImg from "../assets/service/ruracio.jpeg";
import graduationImg from "../assets/service/graduation.jpeg";
import valentineImg from "../assets/service/valentine.jpeg";
import convoyImg from "../assets/service/convoy.jpeg";
import cateringImg from "../assets/service/catering.jpeg";
import babyshowerImg from "../assets/service/babyshower.jpeg";
import funeralImg from "../assets/service/funeral.jpeg";

// Gallery images
import gallery1 from "../assets/gallery/gallery1.jpeg";
import gallery2 from "../assets/gallery/gallery2.jpeg";
import gallery3 from "../assets/gallery/gallery3.jpeg";
import gallery4 from "../assets/gallery/gallery4.jpeg";
import gallery5 from "../assets/gallery/gallery5.jpeg";
import gallery8 from "../assets/gallery/gallery8.jpeg";
import gallery9 from "../assets/gallery/gallery9.jpeg";
import gallery10 from "../assets/gallery/gallery10.jpeg";
import gallery11 from "../assets/gallery/gallery11.jpeg";
import gallery12 from "../assets/gallery/gallery12.jpeg";
import gallery13 from "../assets/gallery/gallery13.jpeg";
import gallery19 from "../assets/gallery/gallery19.jpeg";
import gallery30 from "../assets/gallery/gallery30.jpeg";
import gallery31 from "../assets/gallery/gallery31.jpeg";
import gallery32 from "../assets/gallery/gallery32.jpeg";
import gallery34 from "../assets/gallery/gallery34.jpeg";
import gallery35 from "../assets/gallery/gallery35.jpeg";
import gallery36 from "../assets/gallery/gallery36.jpeg";
import gallery38 from "../assets/gallery/gallery38.jpeg";
import gallery39 from "../assets/gallery/gallery39.jpeg";
import gallery50 from "../assets/gallery/gallery50.jpeg";
import gallery51 from "../assets/gallery/gallery51.jpeg";
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


const services = [

  {
    title: "Wedding Setup",
    images: [weddingImg, gallery1, gallery9, gallery10, gallery74, gallery75,
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
      gallery90],
    description:
      "We create elegant wedding setups to make your day unforgettable."
  },


  {
    title: "Birthday Parties",
    images: [birthdayImg, gallery19, gallery96,
      gallery97,
      gallery98,
      gallery99],
    description:
      "Fun, colorful, and memorable birthday events for all ages."
  },


  {
    title: "Corporate Events",
    images: [corporateImg, gallery2, gallery3, gallery11, gallery12,  gallery93,
      gallery94,
      gallery95],
    description:
      "Professional setups for meetings, conferences, and corporate celebrations."
  },


  {
    title: "Ruracio Ceremony",
    images: [ruracioImg, gallery30, gallery31, gallery34, gallery35, gallery36, gallery53, gallery54, gallery55, gallery56, gallery57, gallery58, gallery59, gallery60, gallery61, gallery62, gallery63, gallery64, gallery65, gallery66, gallery67, gallery68],
    description:
      "Stylish and well-curated Ruracio Ceremonies that honor tradition while creating unforgettable moments."
  },


  {
    title: "Graduation Ceremony",
    images: [graduationImg, gallery38, gallery39],
    description:
      "Bold, exciting and proud Graduation Ceremony to celebrate your milestone."
  },


  {
    title: "Valentine Setups",
    images: [valentineImg, gallery32, gallery2, gallery4, gallery5],
    description:
      "Romantic and beautifully styled setups designed to create unforgettable moments."
  },


  {
    title: "Car Convoy",
    images: [convoyImg, gallery50, gallery51, gallery69, gallery70, gallery71, gallery72, gallery73],
    description:
      "Sleek and vibrant car convoys that bring energy and style to your event."
  },


  {
    title: "Catering Services",
    images: [cateringImg, gallery8, gallery11, gallery12, gallery13, gallery91,
      gallery92],
    description:
      "Exquisite catering experiences combining flavor, elegance and top-tier service."
  },

  {
    title: "Baby Shower",
    images: [babyshowerImg],
    description:
      "Beautifully themed baby shower setups with elegant decor, balloon styling, floral arrangements and memorable celebrations for welcoming your little one.",
  },

  {
    title: "Funeral & Memorial Services",
    images: [funeralImg],
    description:
      "Professional and respectful funeral setups including tents, seating arrangements, decor, public address systems and catering to honor your loved ones with dignity.",
  },

];



export default function Services() {


  const containerRef = useRef(null);



  useEffect(() => {


    const items =
      containerRef.current.querySelectorAll(".service-card");


    const observer =
      new IntersectionObserver(

        (entries) => {

          entries.forEach(entry => {

            if (entry.isIntersecting) {

              entry.target.classList.add("show");

            }

          });

        },

        { threshold: 0.1 }

      );



    items.forEach(item => observer.observe(item));


    return () => observer.disconnect();


  }, []);



  return (

    <div className="services-page">


      <section className="services-title">

        <h1>Our Services</h1>

        <p>
          We provide everything you need to make your event unforgettable
        </p>

      </section>



      <section
        ref={containerRef}
        className="services-grid"
      >


        {

          services.map((service, index) => (

            <ServiceCard

              key={index}

              service={service}

            />

          ))

        }


      </section>


    </div>

  );


}