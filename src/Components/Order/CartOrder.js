import classes from "./CartOrder.module.css";
import OrderForm from "./OrderForm";
import Cart from "./Cart";
import Slider from "../Slider/Slider";

const CartOrder = (props) => {
  return (
    <div className={classes.cartOrder}>
      <Slider />
      <OrderForm />
    </div>
  );
};

export default CartOrder;
