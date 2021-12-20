import classes from "./NavigationSlider.module.css";
const NavigationSlider = ({ activeIndex, onClick, formSlider }) => {
  const navList = formSlider.map((nav, index) => (
    <li
      key={index}
      className={`${
        activeIndex === index ? `${classes["nav-item"]} ${classes["nav-item__active"]}` : `${classes["nav-item"]}`
      }`}
      onClick={() =>{
        onClick(index);
       
      }}
    >
     {nav.title}
    </li>
  ));
  return <ul className={classes["nav-list"]}>{navList}</ul>;
};
export default NavigationSlider;
