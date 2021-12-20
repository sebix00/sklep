import Modal from "../../UI/Modal";
import classes from "./CartOrder.module.css";
import Slider from "../Slider/Slider";
import Cart from "../Cart/Cart";
const CartOrder = (props) => {
    const portal = document.querySelector("#cartOverlay");

   
  return (

    <Modal portal={portal}>
      <div className={classes.cartOrder}>
        <Slider />
        <Cart />
      </div>
    </Modal>
  );
};

export default CartOrder;
