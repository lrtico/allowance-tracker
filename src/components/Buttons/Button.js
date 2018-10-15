import React from "react";
import MaterialIcon from "react-google-material-icons";
import "./Button.css";

const Button = props => {
  console.log("Button add props, ", props);
  return (
    <button onClick={props.changeButtonText} className={props.addClass}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22">
        <circle
          className="button__circle"
          fill="none"
          stroke={props.strokeColor}
          strokeWidth="1"
          strokeMiterlimit="10"
          cx="11"
          cy="11"
          r="10"
        />
      </svg>
      <MaterialIcon icon={props.setIcon} size={36} />
    </button>
  );
};

export default Button;