import styles from "./TrustedPartners.module.css"


const TrustedPartners = () => {
  return (
    <div className={styles.trustedPartnersContainer}>
        <h1 >Trusted by most popular brands </h1>
        <ol>
            <li><i className="fi fi-brands-apple"></i></li>
            <li><i className="fi fi-brands-spotify"></i></li>
            <li><i className="fi fi-brands-ibm"></i></li>
            <li><i className="fi fi-brands-samsung"></i></li>
            <li><i className="fi fi-brands-meta"></i></li>
            <li><i className="fi fi-brands-janseen"></i></li>
        </ol>
        <h3>Join over 1 000 000 customers worldwide </h3>
        <hr className={styles.horizontalLine}/>
    </div>
  )
}

export default TrustedPartners