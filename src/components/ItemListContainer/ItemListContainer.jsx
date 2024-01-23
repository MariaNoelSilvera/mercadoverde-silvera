import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import Spinner from "../Spinner/Spinner";
import { getProducts } from "../../utils/MockData";
import styles from "./ItemListContainer.module.scss";
import { useState, useEffect } from "react";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    getProducts().then((products) => {
      if (categoryId) {
        const filteredProducts = products.filter(
          (product) => product.category === categoryId
        )
        setItems(filteredProducts)
      } else {
        setItems(products)
        setLoading(false)
      }
    })
  }, [categoryId])

  return (
    <div className={styles["item-list-container"]}>
      <div className={styles["item-list-header"]}>
        <h2 className={styles["item-list-title"]}>
          {categoryId ? `Productos en ${categoryId}` : "Todos los productos"}
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
