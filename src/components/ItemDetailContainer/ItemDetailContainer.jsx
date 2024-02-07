import ItemDetail from "../ItemDetail/ItemDetail";
import Spinner from "../Spinner/Spinner";
import { useParams } from "react-router-dom";
import styles from './ItemDetailContainer.module.scss';
import { useState, useEffect } from "react";
import { collection, getDoc, doc } from "firebase/firestore";
import { db } from "../../firebase/config";

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const { productId } = useParams();

useEffect(() => {
  const productsCollection = collection(db, 'products')
  const refDoc = doc(productsCollection, productId)
  getDoc(refDoc)
  .then((doc) => {
    setItem({id: doc.id, ...doc.data()});
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
