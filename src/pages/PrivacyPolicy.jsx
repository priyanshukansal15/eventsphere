import React from "react";
import "../styles/PrivacyPolicy.css";
import { motion } from "framer-motion";

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const PrivacyPolicy = () => {
  return (
    <div className="privacy-page">
      <div className="privacy-container">
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
        >
          Privacy Policy
        </motion.h1>

        <motion.p
          className="intro"
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
        >
          At Event Sphere, your privacy is important to us. This policy outlines
          how we collect, use, and protect your personal information.
        </motion.p>

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
        >
          <h2>1. Information We Collect</h2>
          <p>
            We collect basic information such as your name, email address,
            contact details, and any other information you provide when using
            our platform.
          </p>
        </motion.section>

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
        >
          <h2>2. How We Use Your Information</h2>
          <p>Your data helps us:</p>
          <ul>
            <li>Process bookings and ticket listings</li>
            <li>Provide customer support</li>
            <li>Send relevant updates and event notifications</li>
            <li>Improve user experience on our platform</li>
          </ul>
        </motion.section>

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
        >
          <h2>3. Data Sharing</h2>
          <p>
            We do not sell or rent your personal data. We may share information
            with trusted third parties who help us operate our website — all
            under strict confidentiality.
          </p>
        </motion.section>

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
        >
          <h2>4. Cookies</h2>
          <p>
            We use cookies to personalize your experience and analyze site
            traffic. You can control or disable cookies through your browser
            settings.
          </p>
        </motion.section>

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
        >
          <h2>5. Data Security</h2>
          <p>
            We implement industry-standard measures to protect your information
            from unauthorized access or loss.
          </p>
        </motion.section>

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
        >
          <h2>6. Your Rights</h2>
          <p>
            You have the right to access, update, or delete your personal
            information at any time. Contact us at{" "}
            <strong>privacy@eventsphere.com</strong> for any requests.
          </p>
        </motion.section>

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
        >
          <h2>7. Updates to This Policy</h2>
          <p>
            We may occasionally update this policy. When we do, we’ll notify you
            via email or platform notification.
          </p>
        </motion.section>

        <motion.p
          className="closing"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
        >
          If you have any questions or concerns, feel free to reach out at{" "}
          <strong>support@eventsphere.com</strong>.
        </motion.p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
