import FeatureCard from "../FeatureCard/FeatureCard";
import featureData from "./FeatureData";
import styles from "./Features.module.css"
const Features = () => {
  return (
    <div>
      <h1>Features</h1>
      <div className={styles.featureCards}>

      {featureData.map((feature, index) => {
        return <FeatureCard key = {index}  feature={feature} />;
      })}
      </div>
    </div>
  );
};

export default Features;
