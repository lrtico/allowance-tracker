import React from "react";
import PropTypes from "prop-types";

const JarLabel = props => {
  return (
    <div className="jar__label">
      <span>{props.jarLabel}</span>
    </div>
  );
};

JarLabel.propTypes = {
  jarLabel: PropTypes.string
};

export default JarLabel;
