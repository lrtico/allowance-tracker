import React from "react";

const Input = props => {
  console.log("Input props, ", props);
  return (
    <input
      maxLength={props.maximumLength}
      type={props.inputType}
      value={props.jarValue}
      onChange={props.handleJarValueChange}
    />
  );
};

export default Input;
