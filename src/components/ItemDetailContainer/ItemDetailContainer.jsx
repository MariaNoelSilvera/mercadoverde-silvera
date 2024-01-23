import ItemDetail from "../ItemDetail/ItemDetail";
import Spinner from "../Spinner/Spinner";
import { getProductsById } from "../../utils/MockData";
import { useParams } from "react-router-dom";
import styles from './ItemDetailContainer.module.scss';
import { useState, useEffect } from "react";

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const { productId } = useParams();

useEffect(() => {
  const numericProductId = parseInt(productId, 10);
  getProductsById(numericProductId).then((product) => {
    setItem(product);
    setLoading(false);
  }).catch((error) => {
    console.error(error);
  });
}, [productId]);

  return loading ? (
    <Spinner />
  ) : (
    <div className={styles.ItemDetailContainer}>
    <ItemDetail item={item} />
    </div>
  );
};

ItemDetailContainer.propTypes = {};

export default ItemDetailContainer;
