import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import styles from './ItemDetail.module.scss';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useCartContext } from '../../context/CartContext';

const ItemDetail = ({ item }) => {
  const { name, price, image, stock, description } = item;
  const [quantityAdded, setQuantityAdded] = useState(0);
  const { addItem } = useCartContext()

  const handleOnAdd = (quantity) => {
    setQuantityAdded(quantity);
    addItem(item, quantity);
  };

  return (
    <article className={styles.CardItem}>
      <header className={styles.Header}>
        <h2 className={styles.ItemHeader}>{name}</h2>
      </header>
      <picture>
        <img src={image} alt={name} className={styles.ItemImage} />
      </picture>
      <section>
        <p className={styles.Description}>Descripción: {description}</p>
        <p className={styles.Stock}>Stock: {stock}</p>
        <p className={styles.Price}>Precio: ${price}</p>
      </section>
      <footer className={styles.ItemFooter}>
        {quantityAdded > 0 ? (
          <div>
            <Link to='/cart' className="Button">
            <p className={styles.SuccessText}>{`Agregaste ${quantityAdded} ${name} al carrito`}</p>
              <button className={styles.Button}>Finalizar compra</button>
            </Link>
          </div>
        ) : (
          <ItemCount stock={stock} initial={1} onAdd={handleOnAdd} />
        )}
      </footer>
    </article>
  );
};

ItemDetail.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.number,
    category: PropTypes.string,
    image: PropTypes.string,
    stock: PropTypes.number,
    description: PropTypes.string,
  }).isRequired,
};

export default ItemDetail;
