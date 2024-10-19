import styles from './Nav.module.css'
import logo from '../../assets/homePageLogo.png'
import Logo from '../Logo/Logo'
import { toggleTheme } from '../../redux/themeSlice'
import { useDispatch, useSelector } from 'react-redux'




const Nav = ({toggle}) => {

  const dispatch = useDispatch();


  return (
    <div className={styles.navbar}>
         <div className={styles.navbarLogo}>
          <a href="/" style={{
            color: 'white'
          }}><Logo/></a>
        </div>
      <div className={styles.navbarMenu}>
       <div className={styles.brackets}>
        <ul>
          <li ><a href="/">Home</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#products">Products</a></li>
          <li><a href="#about">About</a></li>
          <li><input type="checkbox" className={styles.themeCheckbox} onChange={() => dispatch(toggleTheme())}></input></li>


          <button className="btn btn-primary px-8"> <a href="#signup">SIGN UP</a></button>
        </ul>
        </div>
      </div>
     
    </div>
  )
}

export default Nav