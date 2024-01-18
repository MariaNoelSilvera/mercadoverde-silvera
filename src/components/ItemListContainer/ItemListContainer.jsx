import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { getProducts } from "../../utils/MockData";
import Spinner from '../Spinner/Spinner';

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getProducts()
        .then(response => {
            setItems(response)
            setLoading(false)
        })
        .catch(error => {
            console.error(error)
        })

    },[])
    return loading ? (<Spinner />) : (<><ItemList itemList={items} /></>
  )
};

// Define prop types for ItemListContainer
ItemListContainer.propTypes = {
  greeting: PropTypes.string.isRequired,
};

export default ItemListContainer;