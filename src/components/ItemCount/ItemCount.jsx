import PropTypes from "prop-types";
import { useState } from "react";

const ItemCount = ({stock, initial, onAdd}) => {
    const [quantity, setQuantity] = useState(initial)

    const increment = () => {
        if(quantity < stock) {
            setQuantity(quantity+1)
        }
    }

        const decrement = () => {
        if(quantity > 1 ) {
            setQuantity(quantity-1)
        }
    }


  return (
    <div className='Counter'>
        <div className='Controls'>
        <button className="Button" onClick={decrement}>-</button>
        <h4 className="Number">{quantity}</h4>
        <button className="Button" onClick={increment}>+</button>
    </div>   
        <button className="Button" onClick={() => onAdd(quantity)} disabled={!stock}>
        Agregar al carrito
        </button>
    </div>
  );
};

// Define prop types for ItemCount
ItemCount.propTypes = {
  stock: PropTypes.number.isRequired,
  initial: PropTypes.number.isRequired,
  onAdd: PropTypes.func.isRequired,
};

export default ItemCount;