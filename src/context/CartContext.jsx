/* eslint-disable react-refresh/only-export-components */
import PropTypes from 'prop-types';
import { createContext, useContext, useState } from 'react'

const cartContext = createContext()

const { Provider } = cartContext

export const useCartContext = () => useContext(cartContext)

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])
  const [itemsTotal, setItemsTotal] = useState(0) 
  const [total, setTotal] = useState(0) 

  const addItem = (item, quantity) => {
    setItemsTotal(itemsTotal + quantity)
    setTotal(total + item.price * quantity)

    if (isInCart(item.id)) {
      const newCart = cart.map((cartItem) => {
        if (cartItem.item.id === item.id) {
          return { ...cartItem, quantity: cartItem.quantity + quantity }
        } else {
          return cartItem
        }
      })
      setCart(newCart)
    } else {
      setCart([...cart, { item, quantity }])
    }
  }

    const removeItem = (id) => {
    const updatedCart = cart.filter((cartItem) => cartItem.item.id !== id);
    const removedItem = cart.find((cartItem) => cartItem.item.id === id);

    if (removedItem) {
      setCart(updatedCart);
      setItemsTotal(itemsTotal - removedItem.quantity);
      setTotal(total - removedItem.item.price * removedItem.quantity);
    }
  };

  const clear = () => {
    setCart([])
    setItemsTotal(0)
    setTotal(0)
  }

  const isInCart = (id) => cart.find((item) => item.item.id === id)

  const contextValue = { cart, itemsTotal, addItem, removeItem, clear, total }

  return <Provider value={contextValue}>{children}</Provider>
}

CartProvider.propTypes = {
  children: PropTypes.node.isRequired, 
};

export default CartProvider