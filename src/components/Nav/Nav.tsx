import styles from './Nav.module.css'
import logo from '../../assets/homePageLogo.png'
import Logo from '../Logo/Logo'
const Nav = () => {
  return (
    <div className={styles.navbar}>
         <div className={styles.navbarLogo}>
          <a href="#home" style={{
            color: 'white'
          }}><Logo/></a>
        </div>
      <div className={styles.navbarMenu}>
       <div className={styles.brackets}>
        <ul>
          <li ><a href="#home">Home</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#products">Products</a></li>
          <li><a href="#about">About</a></li>
          <button className="btn btn-primary px-8"> <a href="#signup">SIGN UP</a></button>
        </ul>
        </div>
      </div>
     
    </div>
  )
}

export default Nav