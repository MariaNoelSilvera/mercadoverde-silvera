import styles from './cart.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import Item from '../Item/Item';
import Order from '../Order/Order';
import { useCartContext } from '../../context/CartContext';

const Cart = () => {
  const { itemsTotal, total, removeItem, cart } = useCartContext();

  const handleRemoveItem = (id) => {
    removeItem(id);
  };

  return (
    <div className={styles.cartContainer}>
      <div className={styles.leftContent}>
        <Order />
      </div>
      <div className={styles.rightContent}>
        <div className={styles.cartContent}>
          <h2>Detalle del pedido</h2>
          <ul className={styles.cartList}>
            {cart.map((cartItem) => (
              <li key={cartItem.item.id} className={styles.cartItem}>
                <Item
                  id={cartItem.item.id}
                  name={cartItem.item.name}
                  image={cartItem.item.image}
                  price={cartItem.item.price}
                />
                <span className={styles.quantity}>Cantidad: {cartItem.quantity}</span>
                <span className={styles.subtotal}>Subtotal: ${cartItem.quantity * cartItem.item.price}</span>
                <button onClick={() => handleRemoveItem(cartItem.item.id)} className={styles.removeButton}>
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </li>
            ))}
          </ul>
          <div className={styles.totalContainer}>
            <span className={styles.totalLabel}>Cantidad de items:</span>
            <span className={styles.totalAmount}>{itemsTotal}</span>
            <span className={styles.totalLabel}>Total:</span>
            <span className={styles.totalAmount}>${total}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
