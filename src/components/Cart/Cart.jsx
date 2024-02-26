import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import Item from '../Item/Item';
import Order from '../CheckoutForm/CheckoutForm';
import { useCartContext } from '../../context/CartContext';
import EmptyCart from '../EmptyCart/EmptyCart';
import GoBackIcon from "../GoBack/GoBack"; // Adjust the import path if needed
import styles from './Cart.module.scss';

const Cart = () => {
  const { itemsTotal, total, removeItem, cart } = useCartContext();

  const handleRemoveItem = (id) => {
    removeItem(id);
  };

  return (
    <div>
      <GoBackIcon />
      <div className={styles.cartContainer}>
        <Order className={styles.order} />
        <div className={styles.cartDetail}>
          {cart.length === 0 ? (
            <EmptyCart />
          ) : (
            <>
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
                    <div className={styles.itemDetails}>
                      <span className={styles.quantity}>Cantidad: {cartItem.quantity}</span>
                      <span className={styles.subtotal}>Subtotal: ${cartItem.quantity * cartItem.item.price}</span>
                    </div>
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
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;