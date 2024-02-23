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
          Build, run, and secure your cloud workloads on <b>SuperNet Connected Cloud</b>, a massively distributed edge and cloud platform.
          <a href="#">
            <span className="link_span">Sign up</span>
          </a>{" "}
          today or
          <a href="#">
            <span className="link_span">contact us</span>
          </a>{" "}
          to learn more.
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
          By providing your email address or using a single sign-on provider to create an account, you agree to our
          <a href="#">
            <span className="link_span"> Terms of Service </span>
          </a>
          and that you have reviewed our{" "}
          <a href="#">
            <span className="link_span"> Privacy Policy </span>
          </a>
          and{" "}
          <a href="#">
            <span className="link_span"> Cookie Policy </span>
          </a>
          .
        </p>
      </div>
    </section>
  );
};

export default Hero;
