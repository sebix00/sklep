import CartIcon from "./CartIcon";
import classes from "./CartButton.module.css";
import {
  useCartButtonUpdate,
  useCartButton,
} from "../../store/CartButtonProvider";
import { useCartContext } from "../../store/CartProvider";

const CartButton = (props) => {
  const toogleCart = useCartButtonUpdate();
  const cartState = useCartButton();
  const cartCTX = useCartContext();
  const amount = cartCTX.products.length;
  return (
    <button className={classes.button} onClick={toogleCart}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span className={classes.mark}> {amount}</span>
    </button>
  );
};
export default CartButton;
