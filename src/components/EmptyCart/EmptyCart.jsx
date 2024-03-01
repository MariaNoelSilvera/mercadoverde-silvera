import cart from '../../assets/cart.png';
import styles from './EmptyCart.module.scss';

const EmptyCart = () => {
  return (
    <div className={styles['empty-cart-container']}>
      <img
        src={cart}
        alt="Empty Cart Icon"
        className={styles['empty-cart-icon']}
      />
      <p className={styles['empty-cart-message']}>Tu carrito está vacío</p>
    </div>
  );
};

export default EmptyCart;
