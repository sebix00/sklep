import classes from "./CustomerInfo.module.css";
const CustomerInfo = (props) => {
  return (
    <div>
      <h1 className={classes["customer-title"]}>Customer Information</h1>
      <form className={classes["customer-form"]}>
        <div className={classes["firs-column"]}>
          <label>first name</label>
          <input type="text" />
        </div>
        <div className={classes["second-column"]}>
          <label>last name</label>
          <input type="text" />
        </div>
        <div className={classes["one-column"]}>
          <label>adress</label>
          <input type="text" />
        </div>
        <div className={classes["firs-column"]}>
          <label>country</label>
          <input type="text" />
        </div>
        <div className={classes["second-column"]}>
          <label>city</label>
          <input type="text" />
        </div>
        <div className={classes["firs-column"]}>
          <label>post code</label>
          <input type="text" />
        </div>
        <div className={classes["second-column"]}>
          <label>phone</label>
          <input type="tel" />
        </div>
      </form>
    </div>
  );
};
export default CustomerInfo;
