import React from 'react';
import PropTypes from 'prop-types';

const JarPreviousTotal = props => {
  const { jarPreviousTotal } = props;
  return (
    <div className="jar__new-total">
      <span>Previous total: </span>
      <span>${jarPreviousTotal}</span>
    </div>
  );
};

JarPreviousTotal.propTypes = {
  jarPreviousTotal: PropTypes.number,
};

export default JarPreviousTotal;
