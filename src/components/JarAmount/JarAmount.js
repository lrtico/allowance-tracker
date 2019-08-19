import React from 'react';
// import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './JarAmount.css';

const JarAmount = props => {
  const { jarTotal } = props;
  return (
    <div className="flex flex--horz-center jar__amount">
      <span>$</span>
      <span>{jarTotal}</span>
    </div>
  );
};

JarAmount.propTypes = {
  jarTotal: PropTypes.number,
};

export default JarAmount;
