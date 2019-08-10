import React from "react";
import PropTypes from "prop-types";
import "./JarAmount.css";

const JarAmount = props => {
  return (
    <div className="flex flex--horz-center jar__amount">
      <span>$</span>
      <span>{props.jarTotal}</span>
    </div>
  );
};

JarAmount.propTypes = {
  jarTotal: PropTypes.number
};

export default JarAmount;
