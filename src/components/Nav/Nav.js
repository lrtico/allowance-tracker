import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Nav = props => {
  const {
    handleSetUserAJWipe, handleSetUserJRWipe, handleUserAJ, handleUserJR,
  } = props;
  console.log("Nav's props", props);
  return (
    <nav className="flex">
      <div className="users flex--col">
        <Link to="/jr" className="user" id="jr" onClick={handleSetUserJRWipe}>
          <span className={handleUserJR ? 'user__name' : 'user__name user__name--deactive'}>JR</span>
          <div className="user__name--hover" />
        </Link>
        <Link to="/aj">
          <div className="user" id="aj" onClick={handleSetUserAJWipe}>
            <span className={handleUserAJ ? 'user__name' : 'user__name user__name--deactive'}>AJ</span>
            <div className="user__name--hover" />
          </div>
        </Link>
      </div>
      <div className="user__subnav user__subnav--darkgray" />
      <div className="user__subnav user__subnav--lightgray lattice-dollar-sign-bg" />
    </nav>
  );
};

Nav.propTypes = {
  handleSetUserAJWipe: PropTypes.func,
  handleSetUserJRWipe: PropTypes.func,
  handleUserAJ: PropTypes.bool,
  handleUserJR: PropTypes.bool,
};

export default Nav;
