import React from "react";
import "../styles/PricingCard.css";

const PricingCard = ({ features, price, background, mainPlan }) => {
  const priceSplit = price.split(" ");
  console.log("price split", priceSplit);
  const mainPlanHeight = mainPlan ? "560px" : "540px";
  return (
    <div className="pricing_card" style={{ height: mainPlanHeight }}>
      <div className="pricing_card-price">
        <p className="pricing_card-price_text" style={{ background: background, backgroundClip: "text" }}>
          {/* iterate over price - every whitespace - and add a breakline between */}
          {priceSplit[0]}
          <br />
          {priceSplit[1]}
        </p>
      </div>
      <div className="pricing_card-img" style={{ backgroundSize: "cover", backgroundRepeat: "no-repeat" }} />
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
