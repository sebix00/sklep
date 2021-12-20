// import Cart from "./Cart";
import OrderProvider from "../../store/OrderProvider";
import Modal from "../../UI/Modal";
import { useCartButton } from "../../store/CartButtonProvider";
import { useCartButtonUpdate } from "../../store/CartButtonProvider";
import classes from "./Cart.module.css";
import CartOrder from "../Order/CartOrder";

const CartModal = (props) => {
    const toogleCart = useCartButtonUpdate();

  const portal = document.querySelector("#cartOverlay");

  return (
   
      <Modal onClose={toogleCart} className={classes.cart} portal={portal}>
        <CartOrder />
      </Modal>
    
  );
};
export default CartModal;