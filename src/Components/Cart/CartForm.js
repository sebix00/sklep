import classes from "./CartForm.module.css";
const CartForm = props =>{
    
    return (
        <from className={classes["cart-form"]}>
            <label >Amount</label>
            <input type="number" min="1" step="1" />
            <button>+</button>
            <button>-</button>
        </from>
    )


}

export default CartForm;