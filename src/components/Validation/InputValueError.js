import React from "react";
import PropTypes from "prop-types";
import "./Validation.css";

const InputValueError = props => {
  return (
    <div id={props.inputValueErrorJar} className="jar-input-error">
      <p>{props.inputValueErrorMessage}</p>
    </div>
  );
};

InputValueError.propTypes = {
  inputValueErrorJar: PropTypes.string,
  inputValueErrorMessage: PropTypes.string
};

export default InputValueError;
