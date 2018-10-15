import React from "react";
import "./Validation.css";

const InputValueError = props => {
  return (
    <div id={props.inputValueErrorJar} className="jar-input-error">
      <p>{props.inputValueErrorMessage}</p>
    </div>
  );
};

export default InputValueError;
