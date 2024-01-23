import CartWidget from "../CartWidget/CartWidget";
import styles from './NavBar.module.scss'
import Logo from '../Logo/Logo'
import { Link } from "react-router-dom";
import { getCategories } from "../../utils/MockData";
import { useEffect, useState } from 'react'

const NavBar = () => {
    
    const [categories, setCategories] = useState([])

      useEffect(() => {
         getCategories().then((categories) => {
            setCategories(categories)
    })
  }, [])

 return (
    <div className={styles.navbar}>
      <Link to="/">
        <Logo />
      </Link>
      <div className={styles["Categories"]}>
          <Link
            to='/products'
            className={({ isactive }) =>
            isactive ? "ActiveOption" : "Option"}>
            <div className={styles["category-link"]}>Todos los productos</div>
          </Link>
        {categories.map((category, index) => (
          <Link
            to={`/products/${category}`}
            key={index}
            className={({ isactive }) =>
            isactive ? "ActiveOption" : "Option"}>
            <div className={styles["category-link"]}>{category}</div>
          </Link>
        ))}
      </div>
      <CartWidget />
    </div>
  );
}


export default NavBar;
