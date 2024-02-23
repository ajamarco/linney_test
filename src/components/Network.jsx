import React from "react";
import "../styles/Network.css";

const Network = () => {
  return (
    <section className="pricing">
      <div className="pricing-text">
        <h1 className="pricing-text_title">Edge Network</h1>
        <p className="pricing-text_body">
          Scale your business on the most distributed compute, security, and delivery platform — from cloud to edge. New core compute regions launched.
          <a href="#">
            <span className="link_span"> Learn more. </span>
          </a>
        </p>
      </div>
      <div className="network_img" />
    </section>
  );
};

export default Network;
