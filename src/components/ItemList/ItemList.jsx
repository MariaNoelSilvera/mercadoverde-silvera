import styles from './ItemList.module.scss';
import PropTypes from 'prop-types';
import Item from '../Item/Item';

const ItemList = ({ itemList }) => {
  return (
    <div className={styles.itemlist}>
      {itemList.map(({ id, name, image, price }) => {
        return <Item key={id} id={id} name={name} image={image} price={price}  />
      })}
    </div>
  )
};

ItemList.propTypes = {
  itemList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      image: PropTypes.string,
      price: PropTypes.number,
    })
  ).isRequired,
};

export default ItemList;