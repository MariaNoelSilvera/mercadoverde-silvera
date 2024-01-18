import logo from '../../assets/logo.png';
import styles from './Logo.module.scss'

const Logo = () => {
  return (
    <img className={styles.logo} src={logo} alt=''/>
  )
}

export default Logo