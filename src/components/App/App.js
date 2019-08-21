import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import './App.css';
import Jr from '../Users/Jr';
import AJConnected from '../Users/AJConnected';
import SaveJar from '../../containers/SaveJar';
import SpendJar from '../../containers/SpendJar';
import ShareJar from '../../containers/ShareJar';
import LogJar from '../../containers/LogJar';
import Nav from '../Nav/Nav';

const AppConnected = props => {
  const {
    pageTrans, handleSetUserJRWipe, handleSetUserAJWipe, handleUserJR, handleUserAJ,
  } = props;
  console.log('App props:', props);
  return (
    <Router>
      <div className={pageTrans ? 'flex root menu-open' : 'flex root'}>
        <div id="page-trans" />
        <Nav
          handleUserJR={handleUserJR}
          handleUserAJ={handleUserAJ}
          handleSetUserJRWipe={() => handleSetUserJRWipe()}
          handleSetUserAJWipe={() => handleSetUserAJWipe()}
        />
        <Switch>
          <Route exact path="/aj" component={AJConnected} />
          <Route exact path="/jr" component={Jr} />
        </Switch>
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
    </Router>
  );
};

AppConnected.propTypes = {
  pageTrans: PropTypes.bool,
  handleSetUserAJWipe: PropTypes.func,
  handleSetUserJRWipe: PropTypes.func,
  handleUserAJ: PropTypes.bool,
  handleUserJR: PropTypes.bool,
};

export default AppConnected;

// const App = connect(mapStateToProps, mapDispatchToProps)(AppConnected);
// export default App;

// export default connect(mapStateToProps, mapDispatchToProps)(App);

// I think having two routes might work for diff users
// so, /jr is a jr.js file that has the same components as aj.js,
// but I do need to refactor some of the reducers and actions for jr and aj
