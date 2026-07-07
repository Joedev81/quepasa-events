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

// Gallery images
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



const services = [

  {
    title: "Wedding Setup",
    images: [weddingImg, gallery1, gallery9, gallery10],
    description:
      "We create elegant wedding setups to make your day unforgettable."
  },


  {
    title: "Birthday Parties",
    images: [birthdayImg, gallery19],
    description:
      "Fun, colorful, and memorable birthday events for all ages."
  },


  {
    title: "Corporate Events",
    images: [corporateImg,  gallery2, gallery3, gallery11, gallery12],
    description:
      "Professional setups for meetings, conferences, and corporate celebrations."
  },


  {
    title: "Ruracio Ceremony",
    images: [ruracioImg, gallery30, gallery31, gallery34, gallery35, gallery36],
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
    images: [convoyImg, gallery48, gallery50, gallery51],
    description:
      "Sleek and vibrant car convoys that bring energy and style to your event."
  },


  {
    title: "Catering Services",
    images: [cateringImg, gallery8, gallery11, gallery12, gallery13],
    description:
      "Exquisite catering experiences combining flavor, elegance and top-tier service."
  }

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