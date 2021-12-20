import classes from "./ClothesItem.module.css";
import { useCartContext } from "../../../store/CartProvider";
const ClothesItem = (props) => {

  const cartCTX = useCartContext();

  const addProductHandler = ()=>{
    cartCTX.addProduct({
      id:props.id,
      name:props.name,
      price:props.price,
      img:props.img
    })
    console.log(props.id);
  }
  
  const showImg = ()=>{
    console.log(props.img)
  }
  
  return (
    <>
      <div className={classes["clothes-item"]}>
        <img
          src={props.img}
          className={classes["clothes__img"]}
        />
        <div className={classes["clothes__description"] }>
          <h2 className={classes["clothes__name"]}>{props.name}</h2>
          <p className={classes["clothes__type"]}>{props.type}</p>
          <p className={classes["clothes__size"]}>{props.size}</p>
          <div className={classes["price__container"]}>
            <p className={classes["clothes__price"]}>${props.price}</p>
            <button onClick={addProductHandler} className={classes["clothes__btn"]} >Add to cart</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClothesItem;
