import styles from './CheckoutForm.module.scss';
import { db } from '../../firebase/config';
import { useState } from 'react';
import { collection, addDoc } from "firebase/firestore";
import { useCartContext } from '../../context/CartContext';

const Order = () => {
  const { clearCart, cart } = useCartContext();

  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
  });

  const [docId, setDocId] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const ordersCollection = collection(db, 'orders');
      const docRef = await addDoc(ordersCollection, { ...formData });
      setDocId(docRef.id);

      setFormData({
        name: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
      });
      clearCart();
    } catch (error) {
      console.error('Error submitting order:', error);
    }
  };

  return (
    <div className={styles.orderContainer}>
      {cart.length > 0 && (
        <div className={styles.formContainer}>
          {docId ? (
            <p>Pedido enviado! Nro de orden: {docId}</p>
          ) : (
            <>
              <h2>Detalles del cliente</h2>
              <form onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                  <label htmlFor="name">Nombre:</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="lastName">Apellido:</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="email">Email:</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="phone">Teléfono:</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="address">Dirección:</label>
                  <textarea
                    id="address"
                    name="address"
                    rows="4"
                    required
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  />
                </div>
                <button type="submit">Realizar Pedido</button>
              </form>
            </>
          )}
        </div>
      )}

      {docId && cart.length === 0 && (
        <div className={styles.successMessage}>
          <p>¡Pedido enviado!</p>
          <p>Nro de orden: {docId}</p>
        </div>
      )}
    </div>
  );
};

export default Order;
