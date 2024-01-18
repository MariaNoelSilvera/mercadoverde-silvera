import styles from './Item.module.scss';
import PropTypes from 'prop-types';

const Item = ({ name, img, price }) => {
  return (
    <div className={styles.item}>
      <div className={styles.item__image}>
      <img src={img} alt={name} className='ItemImg' />
      </div>
      <div className={styles.item__info}>
        <h2 className={styles.item__info__title}>{name}</h2>
        <p className={styles.item__info__price}>${price}</p>
        <button className={styles.item__info__button}>Ver más</button>
      </div>
    </div>
  )
};

Item.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default Item;