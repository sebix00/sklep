import { useContext, createContext, useState } from "react";

const OrderContext = createContext();
const OrderUpdateContext = createContext();
// own hook
export function useOrderState() {
  return useContext(OrderContext);
}
export function useUpdateOrderState() {
  return useContext(OrderUpdateContext);
}

const OrderProvider = (props) => {

  const [orderState, setOrderState] = useState(false);
 const orderStateHandler = ()=>{
     setOrderState(prev=>!prev);
     console.log(orderState)
 }
 console.log(`OrderState ${orderState}`)


  return (
    <OrderContext.Provider value={orderState}>
      <OrderUpdateContext.Provider value={orderStateHandler}>
        {props.children}
      </OrderUpdateContext.Provider>
    </OrderContext.Provider>
  );
};

export default OrderProvider;
