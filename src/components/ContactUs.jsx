import React from "react";
import "../styles/ContactUs.css";

const ContactUs = () => {
  return (
    <section className="contact-us-container">
      <div className="contact-us_text_container">
        <h2>Ready to get started or have questions?</h2>
        <p>Set up your free account today or contact a sales consultant to learn more</p>
      </div>
      <div className="contact-us_buttons">
        <div className="contact-us_btn_create_account">
          <p className="contact-us_btn_text">Create Account</p>
        </div>
        <div className="contact-us_btn_contact_sales">
          <p className="contact-us_btn_text">Contact Sales</p>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
