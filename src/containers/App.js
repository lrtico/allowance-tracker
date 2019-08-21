import { connect } from 'react-redux';
import AppConnected from '../components/App/App';
import C from '../store/constants';

const mapStateToProps = state => ({
  pageTrans: state.pageTrans,
  handleUserAJ: state.handleUserAJ,
  handleUserJR: state.handleUserJR,
});

const mapDispatchToProps = dispatch => ({
  handleSetUserAJWipe() {
    dispatch({
      type: C.SET_USER_AJ,
    });

    setTimeout(() => {
      dispatch({
        type: C.HIDE_WIPE,
      });
    }, 2000);
  },

  handleSetUserJRWipe() {
    dispatch({
      type: C.SET_USER_JR,
    });

    setTimeout(() => {
      dispatch({
        type: C.HIDE_WIPE,
      });
    }, 2000);
  },
});

const App = connect(mapStateToProps, mapDispatchToProps)(AppConnected);

export default App;
