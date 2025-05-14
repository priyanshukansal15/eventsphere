import React from "react";
import "../styles/ContactUs.css";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

const ContactUs = () => {
  const contactInfo = [
    {
      title: "Email Us",
      detail: "support@eventsphere.com",
    },
    {
      title: "Call Us",
      detail: "+91 98765 43210",
    },
    {
      title: "Visit Us",
      detail: "Event Sphere HQ, 4th Floor, TechHub Building, Bengaluru, India",
    },
  ];

  return (
    <div className="contact-page">
      <motion.div
        className="contact-container"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <motion.h1 className="section-title" variants={fadeInUp}>
          Get in Touch
        </motion.h1>
        <motion.p className="intro-text" variants={fadeInUp} custom={1}>
          Whether you're an event organizer, attendee, or just curious — we're here to assist you. Feel free to contact us through any of the methods below.
        </motion.p>

        <div className="contact-cards">
          {contactInfo.map((item, index) => (
            <motion.div
              key={item.title}
              className="contact-card"
              variants={fadeInUp}
              custom={index + 2}
            >
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </motion.div>
          ))}
        </div>

        <motion.form
          className="contact-form"
          variants={fadeInUp}
          custom={5}
          onSubmit={(e) => {
            e.preventDefault();
            alert("Message submitted! (Form handling not yet implemented.)");
          }}
        >
          <h2>Send Us a Message</h2>

          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" placeholder="Full Name " required />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="yourusername@domain"
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              placeholder="Regarding event collaboration..."
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              rows="5"
              placeholder="Write your message here..."
              required
            ></textarea>
          </div>

          <button type="submit" className="btn-submit">
            Send Message
          </button>
        </motion.form>
      </motion.div>
    </div>
  );
};

export default ContactUs;
