import CartItem from "./CartItem";
import classes from "./Cart.module.css";
import { useCartButton } from "../../store/CartButtonProvider";
import { useCartButtonUpdate } from "../../store/CartButtonProvider";
import { useCartContext } from "../../store/CartProvider";
import { useUpdateOrderState } from "../../store/OrderProvider";
import { useOrderState } from "../../store/OrderProvider";
import { useEffect } from "react";
// const DUMMY_CART = [
//   {
//     name: "t-shirt",
//     description: "outdor",
//     img: "https://images.pexels.com/photos/10461816/pexels-photo-10461816.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
//     price: 25.32,
//     size: ["s"],
//     id: 1,
//   },
//   {
//     name: "shoes",
//     description: "indor",
//     img: "https://images.pexels.com/photos/4380970/pexels-photo-4380970.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=50nhj0",
//     price: 30.3,
//     size: ["s"],
//     id: 2,
//   },
//   {
//     name: "t-shirt",
//     description: "outdor",
//     img: "https://images.pexels.com/photos/10508327/pexels-photo-10508327.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
//     price: 25.32,
//     size: ["s"],
//     id: 3,
//   },
// ];
const Cart = (props) => {
  const cartContext = useCartContext();
  const toogleCart = useCartButtonUpdate();
 

  const cartList = cartContext.products.map((clothes) => (
    <CartItem
      src={clothes.img}
      name={clothes.name}
      price={clothes.price}
      amount={`${4}`}
      id={clothes.id}
      key={clothes.id}
    />
  ));
  const totalAmount = cartContext.totalAmount.toFixed(2);
  const amount = (
    <h2 className={classes["total-amount"]}>
      <p>Total amount:</p> ${totalAmount}
    </h2>
  );
  const btnClose = (
    <button onClick={toogleCart} className={classes["btn-close"]}>
      &times;
    </button>
  );
  const title = <h1 className={classes["cart-title"]}>Cart</h1>;
  
  const summary = totalAmount > 0 && (
    <div className={classes["cart-summary"]}>
      {amount}
    </div>
  );

  return (
    <div className={classes.cart}>
      {btnClose}
      {title}
      {cartList}
      {summary}
    </div>
  );
};

export default Cart;
