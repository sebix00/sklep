import Slider from "./Slider";
import Modal from "../../UI/Modal";

const SliderModal =props =>{
    const portal = document.querySelector("#cartOverlay");

  return (
   
      <Modal portal={portal}>
        <Slider />
      </Modal>
    
  );

    
}
 export default SliderModal;