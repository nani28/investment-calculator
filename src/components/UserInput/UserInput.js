import { useState } from "react";
import classes from "./UserInput.module.css";

const InitialUserInput = {
  "current-savings": 10000,
  "yearly-contribution": 1200,
  "expected-return": 7,
  duration: 15,
};
const UserInput = (props) => {
  const [formInput, setFormInput] = useState(InitialUserInput);
  const formSubmitHandler = (event) => {
    event.preventDefault();
    props.onCalculate(formInput);
  };
  const formResetHandler = () => {
    setFormInput(InitialUserInput);
    props.onCalculate(null);
  };

  const changeHandler = (input, value) => {
    setFormInput((preValues) => {
      return { ...preValues, [input]: +value };
    });
  };

  return (
    <form
      onSubmit={formSubmitHandler}
      onReset={formResetHandler}
      className={classes.form}>
      <div className={classes["input-group"]}>
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            onChange={(event) => {
              changeHandler("current-savings", event.target.value);
            }}
            value={formInput["current-savings"]}
            type="number"
            id="current-savings"
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            onChange={(event) => {
              changeHandler("yearly-contribution", event.target.value);
            }}
            value={formInput["yearly-contribution"]}
            type="number"
            id="yearly-contribution"
          />
        </p>
      </div>
      <div className={classes["input-group"]}>
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            onChange={(event) => {
              changeHandler("expected-return", event.target.value);
            }}
            value={formInput["expected-return"]}
            type="number"
            id="expected-return"
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            onChange={(event) => {
              changeHandler("duration", event.target.value);
            }}
            value={formInput.duration}
            type="number"
            id="duration"
          />
        </p>
      </div>
      <p className={classes.actions}>
        <button type="reset" className={classes.buttonAlt}>
          Reset
        </button>
        <button type="submit" className={classes.button}>
          Calculate
        </button>
      </p>
    </form>
  );
};

export default UserInput;
