import CartWidget from "../CartWidget/CartWidget";
import styles from './NavBar.module.scss'
import Logo from '../Logo/Logo'

const NavBar = () => {
    return (
    <div className={styles.navbar}>
      <Logo />
      <div className={styles.links}>
        <div>Todos los productos</div>
        <div>Plantas</div>
        <div>Macetas</div>
          </div>
     <CartWidget />
      </div>
     
  )
}

export default NavBar;
