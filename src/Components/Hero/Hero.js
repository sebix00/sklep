import classesGeneral from "../GeneralStyle.module.css";
import classes from "./Hero.module.css";
import FirstImg from "../../img/hero5.png";
import { useState } from "react";
const Hero = (props) => {
  const [displayLogIn, setDisplayLogIn] = useState(false);
  const displayLogInHandler = () => {
    setDisplayLogIn((prev) => !prev);
  };
  return (
    <section className={classes["section-hero"]}>
      <div className={classes.hero}>
        <div className={classes["hero-text-box"]}>
          <h1 className={classesGeneral["heading-primary"]}>
            Hey warderobe, meet the internet
          </h1>
          <p className={classes["hero-desc"]}>
            We created AnViol to get you the opportunity to purchase the best
            clothes at the best prices.
          </p>
          <div className={classes["btn-box"]}>
            <button className={classes.btn}>Get started &darr;</button>
            <button className={classes["btn-log-in"]} onClick={displayLogInHandler}>Log in </button>
          </div>
        </div>

        {displayLogIn ? (
            <form>
            <label> Imie </label>
            <input></input>
          </form>
       
        ) : (
          
             <div>
             <img src={FirstImg} alt="dupa" className={classes.img} />
           </div>
        )}
      </div>
    </section>
  );
};
export default Hero;
