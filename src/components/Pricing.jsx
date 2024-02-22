import React from "react";
import "../styles/Pricing.css";
import PricingCard from "./PricingCard";

const Pricing = () => {
  return (
    <section className="pricing">
      <div className="pricing-text">
        <h1 className="pricing-text_title">Pricing</h1>
        <p className="pricing-text_body">Cut your cloud bills in half with bundled extras like DDoS Protection, cloud firewalls, and generous transfer.</p>
      </div>
      <div className="pricing-cards">
        <PricingCard
          features={["10 GB of space", "Unlimited Traffic", "Forum Access", "Support at $25/hour"]}
          price={"$9/mo Standard"}
          background={"linear-gradient(90deg, #ff9b9b -20.37%, #fb3434 113.89%)"}
        />
        <PricingCard
          features={["30 GB of space", "Unlimited Traffic", "Forum Access", "Support at $5/hour"]}
          price={"$49/mo Professional"}
          background={"linear-gradient(90deg, #ACFFAF -3.4%, #43FE4A 100.34%)"}
          mainPlan={true}
        />
        <PricingCard
          features={["50 GB of space", "Unlimited Traffic", "Forum Access", "Free Support"]}
          price={"$159/mo Enterprise"}
          background={"linear-gradient(90deg, #ACCCFC -10.4%, #5F9FFF 100.4%)"}
        />
      </div>
    </section>
  );
};

export default Pricing;
