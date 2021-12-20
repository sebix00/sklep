import classes from "./Slider.module.css";
const SliderContent = (props) => {
   console.log(props.formSlider);
  const content = props.formSlider.map((form, index) => (
    <div
      key={index}
      className={index === props.activeIndex ? `${classes.forms} ${classes.active}` : `${classes.inactive}`}
    >
      {form.component}
    </div>
  ));
  return <section>{content}</section>;
};
export default SliderContent;
