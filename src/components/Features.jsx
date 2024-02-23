import React from "react";
import "../styles/Features.css";
import securityImg from "../assets/img_security.png";
import edgeNetworkImg from "../assets/img_edge_network.png";
import ddosImg from "../assets/img_ddos.png";
import backupsImg from "../assets/img_backups.png";
import FeatureCard from "./FeatureCard";

const Features = () => {
  return (
    <section className="pricing">
      <div className="pricing-text">
        <h1 className="pricing-text_title">Features</h1>
        <p className="pricing-text_body">From edge locations world wide, to unparalleled security and DDOS protection, we’ve got you covered.</p>
      </div>
      <div className="features">
        <FeatureCard
          title={"EDGE NETWORK"}
          paragraphs={[
            "Discover our industry leading edge network, with over 300 edge nodes scattered around the globe.",
            "Give your customers the best performance in every corner of the world.",
          ]}
          img={edgeNetworkImg}
        />
        <FeatureCard
          title={"SECURITY"}
          paragraphs={["Stay safe from threats without slowing down.", "SuperNet surrounds and protects your entire ecosystem — clouds, apps, APIs, and users."]}
          img={securityImg}
        />

        <FeatureCard
          title={"DDOS PROTECTION"}
          paragraphs={["Highly rated web, application & network DDoS protection.", "Keeping bots and malicious users at bay."]}
          img={ddosImg}
        />

        <FeatureCard
          title={"BACKUPS"}
          paragraphs={["Fully managed automatic daily, weekly, and biweekly backups of your Compute Instances.", "Have peace of mind knowing that your data is always safe."]}
          img={backupsImg}
        />
      </div>
    </section>
  );
};

export default Features;
