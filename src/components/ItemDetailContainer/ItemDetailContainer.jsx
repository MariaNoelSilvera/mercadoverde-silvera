import  { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { collection, getDoc, doc } from "firebase/firestore";
import { db } from "../../firebase/config";
import ItemDetail from "../ItemDetail/ItemDetail";
import Spinner from "../Spinner/Spinner";
import GoBack from "../GoBack/GoBack";
import styles from './ItemDetailContainer.module.scss';

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const { productId } = useParams();

  useEffect(() => {
    const productsCollection = collection(db, 'products');
    const refDoc = doc(productsCollection, productId);

    getDoc(refDoc)
      .then((doc) => {
        setItem({ id: doc.id, ...doc.data() });
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [productId]);

  return (
    <div className={styles.ItemDetailContainer}>
      {item && <GoBack />}
      <div className={styles.centeredContent}>
        {loading ? <Spinner /> : <ItemDetail item={item} />}
      </div>
    </div>
  );
};

export default ItemDetailContainer;