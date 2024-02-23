import React from "react";

const FeatureCard = ({ title, paragraphs, img }) => {
  return (
    <div className="feature_card">
      <div className="feature_card_text">
        <h2>{title}</h2>
        {paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
      <div className="feature_card_img" style={{ backgroundImage: `url(${img})` }} />
    </div>
  );
};

export default FeatureCard;
