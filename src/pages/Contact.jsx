import React, { useRef } from "react";
import emailjs from "emailjs-com";
import "../styles/Contact.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "your_service_id",     // Replace with your actual EmailJS service ID
        "your_template_id",    // Replace with your actual EmailJS template ID
        form.current,
        "your_user_id"         // Replace with your actual EmailJS public key
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
        },
        (error) => {
          alert("Failed to send message. Please try again later.");
        }
      );

    e.target.reset();
  };

  return (
    <section id="contact" className="contact-section">
      <h2 className="contact-title">Let's Connect</h2>
      <p className="contact-subtitle">
        I'm always interested in new opportunities and exciting projects. Feel free to reach out if you'd like to collaborate or just say hello!
      </p>

      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <input
          type="text"
          name="user_name"
          placeholder="Your Name"
          className="contact-input"
          required
        />
        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          className="contact-input"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          className="contact-textarea"
          required
        ></textarea>
        <button type="submit" className="contact-button">
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
