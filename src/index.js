import React from "react";
import  ReactDOM  from "react-dom"
import CartButtonProvider from "./store/CartButtonProvider";

import App from "./App";
const Global = ()=>{
    return (
        <CartButtonProvider>
            <App />
        </CartButtonProvider>
    )
}


ReactDOM.render(<Global/>, document.getElementById("root"))