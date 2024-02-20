import styles from './Order.module.scss';

const Order = () => {
  return (
    <div className={styles.formContainer}>
      <h2>Detalles del cliente</h2>
      <form>
        <div className={styles.formGroup}>
          <label htmlFor="name">Nombre:</label>
          <input type="text" id="name" name="name" required />
        </div>
          <div className={styles.formGroup}>
          <label htmlFor="name">Apellido:</label>
          <input type="text" id="lastName" name="lastName" required />
        </div>
         <div className={styles.formGroup}>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="phone">Teléfono:</label>
          <input type="tel" id="phone" name="phone" required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="address">Dirección:</label>
          <textarea id="address" name="address" rows="4" required />
        </div>
       
        <button type="submit">Realizar Pedido</button>
      </form>
    </div>
  );
};

export default Order;
