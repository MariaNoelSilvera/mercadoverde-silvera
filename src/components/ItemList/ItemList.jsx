
import styles from './ItemList.module.scss';
import PropTypes from 'prop-types';
import Item from '../Item/Item';

const ItemList = ({ itemList }) => {
  return (
    <div className={styles.itemlist}>
      {itemList.map(({ id, name, img, price }) => {
        return <Item key={id} name={name} img={img} price={price}  />
      })}
    </div>
  )
};

ItemList.propTypes = {
  itemList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default ItemList;