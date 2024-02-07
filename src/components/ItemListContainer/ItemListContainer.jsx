import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import Spinner from "../Spinner/Spinner";
import styles from "./ItemListContainer.module.scss";
import { useState, useEffect } from "react";
import { db } from "../../firebase/config";
import { collection, query, where, getDocs } from "firebase/firestore";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    const productsCollection = collection(db, 'products')
    if (categoryId){
        const queryCollection = query(
            productsCollection,
            where('category', '==', categoryId)
        )
        getDocs(queryCollection).then(({ docs }) => {
            const products = docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }))
            setItems(products)
            setLoading(false)
        })
    } else {
         getDocs(productsCollection).then(({ docs }) => {
         const products = docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }))
            setItems(products)
            setLoading(false)
        })

    }
  }, [categoryId])

  return (
    <div className={styles["item-list-container"]}>
      <div className={styles["item-list-header"]}>
        <h2 className={styles["item-list-title"]}>
          {categoryId ? `${categoryId}` : "Todos los productos"}
        </h2>
      </div>
      {loading ? (
        <Spinner />
      ) : (
        <div className={styles["item-list"]}>
          <ItemList itemList={items} />
        </div>
      )}
    </div>
  );
};

export default ItemListContainer;
