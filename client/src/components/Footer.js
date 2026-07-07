import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import logo from "../assets/logo/quelogo.jpeg";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Brand */}
        <div className="footer-brand">
          <img src={logo} alt="Que Pasa Events Logo" className="footer-logo" />

          <h2>Que Pasa Events</h2>

          <p>
            creating elegant weddings, unforgettable parties and premium corporate events across Kenya.
          </p>
        </div>

        {/* Links */}
        <div className="footer-column">
          <h3>Quick Links</h3>

          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/allery">Gallery</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>

        {/* Contact */}
        <div className="footer-column">
          <h3>Contact</h3>

          <p>📍 Nairobi, Kenya</p>
          <p>📞 +254 723 112 396</p>
          <p>✉️ info@quepasaevents.com</p>
        </div>

        {/* Socials */}
        <div className="footer-column">
          <h3>Follow</h3>

          <a href="https://facebook.com/que_pasaevents" target="_blank" rel="noreferrer">Facebook</a>
          <a href="https://instagram.com/que_pasaevents" target="_blank" rel="noreferrer">Instagram</a>
          <a href="https://tiktok.com/que_pasaevents" target="_blank" rel="noreferrer">TikTok</a>
        </div>
      </div>

      <div className="footer-bottom">
        © 2026 <strong>Que Pasa Events™</strong>.All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;