import cart from "./assets/cart.png";
import styles from "./CartWidget.module.scss";

const CartWidget = () => {
  const cartCount = 0;
  return (
    <div className={styles["cart-widget-container"]}>
      <img className={styles["cart-icon"]} src={cart} alt="cart-widget" />
      <span className={styles["cart-count"]}>{cartCount}</span>
    </div>
  );
};

export default CartWidget;

