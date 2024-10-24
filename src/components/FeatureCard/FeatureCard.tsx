type FeatureProp = {
  feature: {
    Title: string;
    icon: string;
    Description: string;
  };
};

import styles from "./FeatureCard.module.css";

const FeatureCard = ({ feature }: FeatureProp) => {
  return (
    <div className={styles.featureCard}>
      <i className={feature.icon}></i>
      <div className={styles.feaureCardTitle}>
        <h1>{feature.Title}</h1>
        <h3>{feature.Description}</h3> {/* Corrected spelling */}
      </div>
    </div>
  );
};

export default FeatureCard;
