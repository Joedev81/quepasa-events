import React, { useEffect } from "react";
import Hero from "../components/Hero";
import "./Home.css";
import AOS from "aos";
import "aos/dist/aos.css";

// Import your service images
import service1 from "../assets/service/wedding.jpg";
import service2 from "../assets/service/birthday.jpg";
import service3 from "../assets/service/corporate.jpg";

const featuredServices = [
  { title: "Wedding Setup", image: service1 },
  { title: "Corporate Events", image: service2 },
  { title: "Birthday Parties", image: service3 },
];

const whyChooseUs = [
  { title: "Elegant Designs", desc: "Our setups bring sophistication and style to every event." },
  { title: "Professional Team", desc: "Experienced staff ensuring every detail is perfect." },
  { title: "Custom Solutions", desc: "Every event is unique and tailored to your vision." },
];

function Home() {
  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-in-out", once: true });
  }, []);

  return (
    <div className="home-container">
      {/* Hero Section */}
      <Hero />

      {/* Featured Services */}
      <section
        className="featured-services"
        style={{ padding: "60px 20px", backgroundColor: "#f8f7fb" }}
        data-aos="fade-up"
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "32px",
            color: "#6b21a8",
            marginBottom: "40px",
            fontWeight: 700,
          }}
        >
          Our Featured Services
        </h2>

        <div
          className="featured-services-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "30px",
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          {featuredServices.map((service, index) => (
            <div
              key={index}
              className="service-card"
              data-aos="fade-up"
              data-aos-delay={index * 200}
              style={{
                borderRadius: "15px",
                overflow: "hidden",
                boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
                e.currentTarget.style.boxShadow = "0 15px 30px rgba(0,0,0,0.3)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "0 10px 25px rgba(0,0,0,0.2)";
              }}
            >
              <img
                src={service.image}
                alt={service.title}
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                  display: "block",
                }}
              />
              <h3
                style={{
                  textAlign: "center",
                  fontSize: "20px",
                  color: "#6b21a8",
                  margin: "15px 0",
                }}
              >
                {service.title}
              </h3>
            </div>
          ))}
        </div>

        {/* View All Services Button */}
        <div style={{ textAlign: "center", marginTop: "40px" }}>
          <a
            href="/services"
            style={{
              padding: "12px 30px",
              backgroundColor: "#6b21a8",
              color: "#fff",
              textDecoration: "none",
              borderRadius: "8px",
              fontWeight: "bold",
              transition: "background-color 0.3s ease, transform 0.3s ease",
              display: "inline-block",
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = "#9333ea";
              e.target.style.transform = "scale(1.05)";
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = "#6b21a8";
              e.target.style.transform = "scale(1)";
            }}
          >
            View All Services
          </a>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-us" style={{ padding: "60px 20px" }}>
        <h2
          style={{
            textAlign: "center",
            fontSize: "32px",
            color: "#6b21a8",
            marginBottom: "50px",
            fontWeight: 700,
          }}
          data-aos="fade-up"
        >
          Why Choose Que Pasa Events
        </h2>

        <div
          className="features"
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "30px",
          }}
        >
          {whyChooseUs.map((item, index) => (
            <div
              key={index}
              className="feature"
              style={{
                width: "300px",
                backgroundColor: "#fff",
                padding: "30px 20px",
                borderRadius: "15px",
                boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
              data-aos="fade-up"
              data-aos-delay={index * 200}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.boxShadow = "0 15px 30px rgba(0,0,0,0.25)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 10px 25px rgba(0,0,0,0.2)";
              }}
            >
              <h3
                style={{
                  color: "#6b21a8",
                  fontSize: "22px",
                  marginBottom: "15px",
                  textAlign: "center",
                }}
              >
                {item.title}
              </h3>
              <p style={{ color: "#333", fontSize: "16px", lineHeight: "1.6", textAlign: "center" }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;