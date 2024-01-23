import ItemCount from '../ItemCount/ItemCount';
import styles from './ItemDetail.module.scss';
import PropTypes from 'prop-types';

const ItemDetail = ({ item }) => {
      const { name, price, image, stock, description } = item

  return (
    <article className={styles.CardItem}>
      <header className={styles.Header}>
        <h2 className={styles.ItemHeader}>{name}</h2>
      </header>
      <picture>
        <img src={image} alt={name} className={styles.ItemImage} />
      </picture>
      <section>
        <p className={styles.Info}>Descripción: {description}</p>
        <p className={styles.Info}>Stock: {stock}</p>
        <p className={styles.Info}>Precio: ${price}</p>
      </section>
      <footer className={styles.ItemFooter}>
        <ItemCount stock={stock} initial={1} onAdd={(quantity) => console.log('Agregaste', quantity, name, 'al carrito')} />
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
