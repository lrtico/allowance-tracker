import React from 'react';
import PropTypes from 'prop-types';

const JarLabel = props => {
  const { jarLabel } = props;
  return (
    <div className="jar__label">
      <span>{jarLabel}</span>
    </div>
  );
};

JarLabel.propTypes = {
  jarLabel: PropTypes.string,
};

export default JarLabel;
