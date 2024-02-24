import CartWidget from "../CartWidget/CartWidget";
import styles from './NavBar.module.scss'
import Logo from '../Logo/Logo'
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react'
import { db } from "../../firebase/config"
import { collection, getDocs } from "firebase/firestore"

const NavBar = () => {
    const [categories, setCategories] = useState([])


  useEffect(() => {
    const fetchCategories = async () => {
      const productsCollection = collection(db, 'products');
      const querySnapshot = await getDocs(productsCollection);
      const uniqueCategories = new Set();

      querySnapshot.forEach((doc) => {
        const data = doc.data();
        if (data.category) {
          uniqueCategories.add(data.category);
        }
      });

      setCategories(Array.from(uniqueCategories));
    };

    fetchCategories();
  }, []);

 return (
    <div className={styles.navbar}>
      <Link to="/">
        <Logo />
      </Link>
      <div className={styles["Categories"]}>
        <Link
            to='/'>
               <div className={styles["category-link"]}>Home</div>
          </Link>
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
      <Link to="/cart">
        <CartWidget />
      </Link>
    </div>
  );
}

export default NavBar;
