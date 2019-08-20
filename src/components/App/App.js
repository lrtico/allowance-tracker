import React from 'react';
import PropTypes from 'prop-types';
import './App.css';
import SaveJar from '../../containers/SaveJar';
import SpendJar from '../../containers/SpendJar';
import ShareJar from '../../containers/ShareJar';
import LogJar from '../../containers/LogJar';

const handleWipe = () => {
  this.setState(prevState => ({
    pageTrans: !prevState.pageTrans,
  }));

  setTimeout(() => {
    this.setState({
      pageTrans: false,
    });
  }, 2000);
};

const App = props => {
  const { pageTrans } = props;
  console.log('App props:', props);
  return (
    <div className={pageTrans ? 'flex root menu-open' : 'flex root'}>
      <div id="page-trans" />
      <nav className="flex">
        <div className="users flex--col">
          <div className="user" id="jr" onClick={handleWipe}>
            <span className="user__name">JR</span>
            <div className="user__name--hover" />
          </div>
          <div className="user" id="aj">
            <span className="user__name user__name--deactive">AJ</span>
            <div className="user__name--hover" />
          </div>
        </div>
        <div className="user__subnav user__subnav--darkgray" />
        <div className="user__subnav user__subnav--lightgray lattice-dollar-sign-bg" />
      </nav>
      <div className="jars">
        <div className="flex jars__row">
          <SaveJar />
          <SpendJar />
        </div>
        <div className="flex jars__row">
          <ShareJar />
          <LogJar />
        </div>
      </div>
    </div>
  );
};

App.propTypes = {
  pageTrans: PropTypes.bool,
};

export default App;

// const App = connect(mapStateToProps, mapDispatchToProps)(AppConnected);
// export default App;

// export default connect(mapStateToProps, mapDispatchToProps)(App);
