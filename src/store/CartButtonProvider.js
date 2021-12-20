import { createContext, useContext } from "react";
import { useState } from "react";
const CartButtonContext = createContext();
const CartButtonUpdateContext = createContext();

export function useCartButton() {
  return useContext(CartButtonContext);
}
export function useCartButtonUpdate() {
  console.log("wrok")
  return useContext(CartButtonUpdateContext);
}

const CartButtonProvider = (props) => {
  const [cartIsShown, setCartIsShown] = useState(false);

  const cartIsShownHandler = () => {
    setCartIsShown(prev=>!prev);

  };

  return (
    <CartButtonContext.Provider value={cartIsShown}>
      <CartButtonUpdateContext.Provider value={cartIsShownHandler}>
        {props.children}
      </CartButtonUpdateContext.Provider>
    </CartButtonContext.Provider>
  );
};

export default CartButtonProvider;
