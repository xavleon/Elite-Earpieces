import styles from './Nav.module.css'
import logo from '../../assets/homePageLogo.png'
const Nav = () => {
  return (
    <header className={styles.navbar}>
         <div className={styles.navbarLogo}>
          <a href="#home" style={{
            color: 'white'
          }}><img src={logo}/></a>
        </div>
      <nav className={styles.navbarMenu}>
       
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#products">Products</a></li>
          <li><a href="#about">About</a></li>
          <button className="btn btn-primary px-8"> <a href="#signup">SIGN UP</a></button>
        </ul>
      </nav>
     
    </header>
  )
}

export default Nav