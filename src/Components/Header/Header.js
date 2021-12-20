import Navigation from "./Navigation";
import classes from "./Header.module.css";
import { useCartButton } from "../../store/CartButtonProvider";
import CartModal from "../Cart/CartModal";
import { useOrderState } from "../../store/OrderProvider";
// import Order from "../Order/Order";
import Slider from "../Slider/Slider";
import SliderModal from "../Slider/SliderModal";




import Cart from "../Cart/Cart";
import CartOrder from "../CartOrder/CartOrder"


const Header = (props) => {
    const showCart = useCartButton();
    const showOrderForm = useOrderState();
  return (
    <header className={classes.header}>
      <h1>AnViol</h1>
      <Navigation />
      {showCart&& <CartOrder />}
      {/* {showOrderForm&& <Order /> } */}


    </header>
  );
};

export default Header;
