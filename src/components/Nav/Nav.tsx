import styles from './Nav.module.css'

const Nav = () => {
  return (
    <header className={styles.navbar}>
         <div className={styles.navbarLogo}>
          <a href="#home" style={{
            color: 'white'
          }}>LOGO</a>
        </div>
      <nav className={styles.navbarMenu}>
       
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#products">Products</a></li>
          <a href="#signup" className={styles.signupBtn}>SIGN UP</a>
        </ul>
      </nav>
     
    </header>
  )
}

export default Nav