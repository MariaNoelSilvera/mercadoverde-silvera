import { Link } from 'react-router-dom';
import styles from './Item.module.scss';
import PropTypes from 'prop-types';

const Item = ({ id, name, image, price }) => {
  return (
    <div className={styles.item}>
      <div className={styles.item__image}>
        <img src={image} alt={name} className={styles.ItemImg} />
      </div>
      <div className={styles.item__info}>
        <h2 className={styles.item__info__title}>{name}</h2>
        <p className={styles.item__info__price}>${price}</p>
        <Link to={`/product/${id}`} className={styles.Option}>
          Ver detalle
        </Link>
      </div>
    </div>
  );
};

Item.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.number,
};

export default Item;
