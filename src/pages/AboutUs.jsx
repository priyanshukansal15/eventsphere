import React from 'react';
import '../styles/AboutUs.css';
import { motion } from 'framer-motion';

const teamMembers = [
  {
    name: 'Priyanshu Kansal',
    role: 'Founder & CEO',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-nMTqkRU8jkPkRJC2ivjP-qHkGDG2PLeG3A&s',
  },
  {
    name: 'Arnav Uniyal',
    role: 'Product Manager',
    image: 'https://business.wisc.edu/wp-content/uploads/2022/01/WSB_Prod_Management_Tech_header-1024x683.jpg',
  },
  {
    name: 'Kartik Jain',
    role: 'Lead Developer',
    image: 'https://img.freepik.com/premium-vector/lead-management-flat-icon-from-reputation-management-collection-simple-line-element-lead-management-symbol-templates-web-design-infographics_676904-2257.jpg',
  },
  {
    name: 'Saksham',
    role: 'Marketing Head',
    image: 'https://thumbs.dreamstime.com/b/marketing-manager-icon-isolated-vector-illustration-professions-collection-editable-sing-symbol-can-be-use-web-site-146046972.jpg',
  },
];

const AboutUs = () => {
  return (
    <div className="about-us-container">
      {/* Hero Section */}
      <motion.header 
        className="hero" 
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}
      >
        <h1 className="hero-title">Welcome to <span>Event Sphere</span></h1>
        <p className="hero-subtitle">Where unforgettable experiences begin.</p>
      </motion.header>

      {/* Main Sections */}
      <main className="main-content">
        {/* What We Do */}
        <motion.section className="section" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
          <h2>What We Do</h2>
          <p>
            At Event Sphere, we empower people to create, explore, and connect through events. From hosting a fest to selling spare concert tickets, our platform brings joy to every step.
          </p>
          <ul>
            <li>🎉 Create & manage your own events</li>
            <li>🎟️ Book tickets with confidence</li>
            <li>🤝 Buy and sell tickets easily</li>
          </ul>
        </motion.section>

        {/* Why Choose Us */}
        <motion.section className="section" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.2 }}>
          <h2>Why Choose Us?</h2>
          <ul>
            <li><strong>🚀 Minimal interface</strong> with powerful features</li>
            <li><strong>🛠️ Fully customizable</strong> for any type of event</li>
            <li><strong>🔒 Reliable & trusted</strong> by thousands</li>
          </ul>
        </motion.section>

        {/* Our Vision */}
        <motion.section className="section" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.4 }}>
          <h2>Our Vision</h2>
          <p>
            We envision a world where organizing or attending an event is always joyful and seamless. We're building that reality—one experience at a time.
          </p>
        </motion.section>

        {/* Team Section */}
        <motion.section className="team-section" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.7 }}>
          <h2>Meet the Team</h2>
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                className="team-card"
                whileHover={{ scale: 1.05 }}
              >
                <img src={member.image} alt={member.name} />
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Closing Tagline */}
        <motion.section className="closing-tagline" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
          <p>Every event should feel special.</p>
          <h3>That’s why there’s <span>Event Sphere</span>.</h3>
        </motion.section>
      </main>
    </div>
  );
};

export default AboutUs;