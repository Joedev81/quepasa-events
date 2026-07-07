import "./Contact.css";

export default function Contact() {
  const sendToWhatsApp = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const event = e.target.event.value;
    const message = e.target.message.value;

    const phone = "254723112396";

    const text = encodeURIComponent(
      `Hello Que Pasa Events 👋

Name: ${name}
Email: ${email}
Event Type: ${event || "Not specified"}
Message: ${message}`
    );

    const url = `https://wa.me/${phone}?text=${text}`;

    window.open(url, "_blank");
  };

  return (

    <div className="contact-page">
      <div className="contact-title">
        <h1>Let’s Plan Your Event</h1>
        <p>We reply fast — usually within a few minutes on WhatsApp.</p>
      </div>

      <div className="contact-container">
        {/* FORM */}
        <div className="contact-form">
          <h2>Send Message</h2>

          <form onSubmit={sendToWhatsApp}>
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />

            <input type="text" name="event" placeholder="Event Type (optional)" />

            <textarea
              name="message"
              rows="5"
              placeholder="Tell us about your event..."
              required
            ></textarea>

            <button type="submit">Send via WhatsApp</button>
          </form>
        </div>

        {/* INFO */}
        <div className="contact-info">
          <h2>Contact Info</h2>

          <div className="info-item">📍 Nairobi, Kenya</div>
          <div className="info-item">📞 +254 723 112 396</div>
          <div className="info-item">✉️ info@quepasaevents.com</div>

          <div className="map">
            <iframe
              title="map"
              src="https://maps.google.com/maps?q=nairobi&t=&z=13&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="250"
              style={{ border: 0 }}
            ></iframe>
          </div>
        </div>
      </div>

      <a
        href="https://wa.me/254723112396"
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
          alt="WhatsApp"
        />
      </a>
    </div>
  );
}