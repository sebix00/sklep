import CartForm from "./CartForm";
import classes from "./CartItem.module.css";
import { useCartContext } from "../../store/CartProvider";
const CartItem = (props) => {
  const cartCTX = useCartContext();
  const removeProductHandler = (id) => {
    cartCTX.removeProduct(id);
    console.log(id);
  };

  return (
    <li className={classes["list-item"]}>
      <img src={props.src} className={classes["item-img"]} />

      <div className={classes["item-information"]}>
        <h3 className={classes["item-name"]}>{props.name}</h3>
        <button
          onClick={() => {
            removeProductHandler(props.id);
          }}
          className={classes.btn}
        >
          Remove
        </button>
      </div>
    </li>
  );
};
export default CartItem;
