import cart from "./assets/cart.png";

const CartWidget = () => {
  const cartCount = 0;
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <img src={cart} alt="cart-widget" style={{ marginRight: "5px" }} />
      <span style={{ color: "white" }}>{cartCount}</span>
    </div>
  );
};

export default CartWidget;
