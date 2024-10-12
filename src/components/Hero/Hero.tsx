import TypingEffect from '../TypingEffect/TypingEffect';
import styles from './Hero.module.css'
import { FaFacebook,FaInstagram,FaSquareTwitter, FaSquareYoutube  } from "react-icons/fa6";

const Hero = () => {
  return (
    
   
<div className={styles.main}>
   <section className={`${styles.section} ${styles.banner} ${styles.bannerSection}`}>
      <div className={`${styles.container} ${styles.bannerColumn}`}>
         <img className={styles.bannerImage} src="https://i.ibb.co/vB5LTFG/Headphone.png" alt="banner"/>
         <div className={styles.bannerInner}>
            <h1 className={styles.headingXl}>Experience Media Like Never Before</h1>
            <p className={styles.paragraph}>
               Enjoy award-winning stereo beats with wireless listening freedom and sleek,
               streamlined with premium padded and delivering first-rate playback.
            </p>
            <button className={`${styles.btn} ${styles.btnDarken} ${styles.btnInline}`}>
               Our Products<i className={`${styles.bx} ${styles.bxRightArrowAlt}`}></i>
            </button>

            
         </div>
         <div className={styles.bannerLinks} >
            <a href="#" title=""><i className={`${styles.bx} ${styles.bxlFacebook}`}>
            </i><FaFacebook /></a>
            <a href="#" title=""><i className={`${styles.bx} ${styles.bxlInstagram}`}></i><FaInstagram /></a>
            

            <a href="#" title=""><i className={`${styles.bx} ${styles.bxlTwitter}`}></i><FaSquareTwitter /></a>
            
            <a href="#" title=""><i className={`${styles.bx} ${styles.bxlYoutube}`}></i><FaSquareYoutube /></a>
            
         </div>
      </div>

      <div className={styles.typingEffectContainer}>

      </div>
   </section>
</div>
  )
}

export default Hero