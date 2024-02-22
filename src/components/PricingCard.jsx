import React from "react";
import "../styles/PricingCard.css";

const PricingCard = ({ features, price, background, mainPlan }) => {
  const mainPlanHeight = mainPlan ? "560px" : "540px";
  return (
    <div className="pricing_card" style={{ height: mainPlanHeight }}>
      <div className="pricing_card-price">
        <p className="pricing_card-price_text" style={{ background: background, backgroundClip: "text" }}>
          {price}
        </p>
      </div>
      <div className="pricing_card-img" />
      <div className="pricing_card-features">
        {features.map((feature, index) => {
          return (
            <p key={index} className="pricing_card-features_feature">
              {feature}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default PricingCard;
