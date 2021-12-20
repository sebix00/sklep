import { createContext, useContext, useReducer } from "react";

const CartContext = createContext({
  products: [],
  totalAmount: 0,
  addProduct: (id) => {},
  removeProduct: () => {},
});
const intitalCartState = {
  products: [],
  totalAmount: 0,
};

//custom hooks
export function useCartContext() {
  return useContext(CartContext);
}

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updateProducts = state.products.concat(action.product);
    const updateAmount =
      state.totalAmount + action.product.price;

    return {
      products: updateProducts,
      totalAmount: updateAmount,
    };
  } else if (action.type === "REMOVE") {
    const updateProducts = state.products.filter((product) => product.id !== action.id);
    const productPrice = state.products.find(product=>product.id === action.id).price;

    const updateAmount = state.totalAmount - productPrice;
    return {
      products: updateProducts,
      totalAmount: updateAmount,
    };
  }
  return intitalCartState;
};
const CartProvider = (props) => {
  const [cartState, dispatchCartState] = useReducer(
    cartReducer,
    intitalCartState
  );

  const addProductHandler = (product) => {
    dispatchCartState({ type: "ADD", product: product });
  };
  const removeProductHandler = (id) => {
    dispatchCartState({ type: "REMOVE", id: id });
  };

  const cartContext = {
    products: cartState.products,
    totalAmount: cartState.totalAmount,
    addProduct: addProductHandler,
    removeProduct: removeProductHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
