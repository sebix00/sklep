import classes from "./Navigation.module.css";
import CartButton from "./CartButton";
const Navigation = (props) => {
  return (
 
      <>
       <nav className={classes["main-nav"]}>
        <ul className={classes["main-nav-list"]}>
          <li className={classes["main-nav-item"]} >How it works</li>
          <li className={classes["main-nav-item"]} >Meals</li>
          <li className={classes["main-nav-item"]} >Testimonials</li>
          <li className={classes["main-nav-item"]} >Pricin</li>
          <li className={classes["main-nav-item"]} ><CartButton/></li>
        </ul>
    </nav>
      </>
  );
};

export default Navigation;
