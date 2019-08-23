import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import './App.css';
import Jr from '../Users/Jr';
import Aj from '../Users/Aj';
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
          <Route exact path="/" component={Jr} />
          <Route exact path="/aj" component={Aj} />
          <Route exact path="/jr" component={Jr} />
        </Switch>
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
