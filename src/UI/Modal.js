import reactDom from "react-dom";
import classes from "./Modal.module.css";

const Background = (props) => {
  return <div className={classes.background} onClick={props.onClose}></div>;
};
const ModalOverlay = (props) => {
  return (
    <div className={`${classes.modal }`}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};
const Modal = (props) => {
    const portal = props.portal;
  return <>
  {reactDom.createPortal(<Background onClose={props.onClose}/>,portal)}
  {reactDom.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,portal)}
  </>;
};

export default Modal;
