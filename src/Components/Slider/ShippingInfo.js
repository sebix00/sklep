import classes from "./ShippingInfo.module.css"
import ReactMapGl from "react-map-gl";
import { useState } from "react";



const ShippingInfo = (props) => {
  const [viewPort,setViewPort] = useState({
    latitude:45.4211,
    longitude:-75.6903,
    width:"100%",
    height:"100%",
    zoom:13
  })
  console.log(process.env)
  return (
    <div className={classes.test}>
      <h1>{process.env.REACT_APP_TITLE} chuj</h1>
      <div>
        <p>Information</p>
        <div className={classes.map}>
          <ReactMapGl
          {...viewPort}
          mapboxApiAccessToken={process.env.REACT_APP_SECRET}
          
          >

          </ReactMapGl>
        </div>
      </div>
      <h1>Shipping Method</h1>
      <div>
          First method
      </div>
      <div>
          Second method
      </div>
    </div>
  );
};
export default ShippingInfo;