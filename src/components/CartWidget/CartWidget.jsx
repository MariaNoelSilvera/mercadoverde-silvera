import cart from '../../assets/cart.png';
import styles from "./CartWidget.module.scss";
import { useCartContext } from "../../context/CartContext";

const CartWidget = () => {
   const { itemsTotal } = useCartContext()
  return (
    <div className={styles["cart-widget-container"]}>
      <img className={styles["cart-icon"]} src={cart} alt="cart-widget" />
      <span className={styles["cart-count"]}>{itemsTotal}</span>
    </div>
  );
};

export default CartWidget;

