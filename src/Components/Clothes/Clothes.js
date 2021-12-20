import ClothesItem from "./ClothesItem/ClothesItem";
import classes from "./Clothes.module.css";
const DUMMY_CLOTHES = [
  {
    name: "t-shirt",
    description: "outdor",
    img: "https://images.pexels.com/photos/10461816/pexels-photo-10461816.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    price: 25.32,
    size: ["s"],
    id: 1,
  },
  {
    name: "shoes",
    description: "indor",
    img: "https://images.pexels.com/photos/4380970/pexels-photo-4380970.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=50nhj0",
    price: 30.3,
    size: ["s"],
    id: 2,
  },
  {
    name: "t-shirt",
    description: "outdor",
    img: "https://images.pexels.com/photos/10508327/pexels-photo-10508327.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    price: 25.32,
    size: ["s"],
    id: 3,
  },
  {
    name: "t-shirt",
    description: "outdor",
    img: "https://images.pexels.com/photos/914668/pexels-photo-914668.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    price: 25.32,
    size: ["s"],
    id: 4,
  },
  {
    name: "t-shirt",
    description: "outdor",
    img: "https://images.pexels.com/photos/10461816/pexels-photo-10461816.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    price: 25.32,
    size: ["s"],
    id: 5,
  },
  {
    name: "t-shirt",
    description: "outdor",
    img: "https://images.pexels.com/photos/10461816/pexels-photo-10461816.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    price: 25.32,
    size: ["s"],
    id: 6,
  },
];
const Clothes = (props) => {
  const clothesList = DUMMY_CLOTHES.map((clothes) => (
    <ClothesItem
      name={clothes.name}
      price={clothes.price}
      img={clothes.img}
      size={clothes.size}
      type={clothes.description}
      id={clothes.id}
      key={clothes.id}
    />
  ));
  return <div className={classes.clothes}>{clothesList}</div>;
};

export default Clothes;
