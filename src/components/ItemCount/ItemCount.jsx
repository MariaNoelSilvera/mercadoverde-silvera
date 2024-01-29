import PropTypes from "prop-types";
import { useState } from "react";
import styles from "./ItemCount.module.scss";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [quantity, setQuantity] = useState(initial);

  const increment = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className={styles.Counter}>
      <div className={styles.ControlsContainer}>
        <div className={styles.Controls}>
          <button className={styles.Button} onClick={decrement}>
            -
          </button>
          <h4 className={styles.Number}>{quantity}</h4>
          <button className={styles.Button} onClick={increment}>
            +
          </button>
        </div>
        <button
          className={styles.Button}
          onClick={() => onAdd(quantity)}
          disabled={!stock}
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

ItemCount.propTypes = {
  stock: PropTypes.number.isRequired,
  initial: PropTypes.number.isRequired,
  onAdd: PropTypes.func.isRequired,
};

export default ItemCount;
