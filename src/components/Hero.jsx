import React from "react";
import "../styles/Hero.css";

const Hero = () => {
  return (
    <section className="hero-container">
      <div className="hero-content_element">
        <h1>
          Cloud Computing <br />
          Developers Trust
        </h1>
        <p className="hero-content_description">
          Build, run, and secure your cloud workloads on SuperNet Connected Cloud, a massively distributed edge and cloud platform. Sign up today or contact us to learn more.
        </p>
      </div>
      <div className="hero-content_element signup_form">
        <div className="btn btn-primary">
          <div className="btn-primary-icon" />
          <p className="btn-primary-text">Sign Up With Google</p>
        </div>
        <div className="form_divider" />
        <div className="btn btn-secondary">
          <div className="btn-secondary-icon-github" />
          <p className="btn-secondary-text">Github</p>
        </div>
        <div className="btn btn-secondary">
          <div className="btn-secondary-icon-email" />
          <p className="btn-secondary-text">Email</p>
        </div>
        <p className="form_tc">
          By providing your email address or using a single sign-on provider to create an account, you agree to our Terms of Service and that you have reviewed our Privacy Policy
          and Cookie Policy.
        </p>
      </div>
    </section>
  );
};

export default Hero;
