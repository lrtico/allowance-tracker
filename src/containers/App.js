import { connect } from 'react-redux';
import AppConnected from '../components/App/App';
import C from '../store/constants';

const mapStateToProps = state => ({
  pageTrans: state.pageTrans,
  handleUserAJ: state.handleUserAJ,
  handleUserJR: state.handleUserJR,
  saveJarTotalJr: state.jrData.saveJarTotalJr,
  spendJarTotalJr: state.jrData.spendJarTotalJr,
  shareJarTotalJr: state.jrData.shareJarTotalJr,
});

const mapDispatchToProps = dispatch => ({
  handleSetUserAJWipe() {
    dispatch({
      type: C.SHOW_WIPE,
    });

    setTimeout(() => {
      dispatch({
        type: C.HIDE_WIPE,
      });
    }, 1500);

    setTimeout(() => {
      dispatch({
        type: C.SET_USER_AJ,
      });
    }, 750);
  },

  handleSetUserJRWipe() {
    dispatch({
      type: C.SHOW_WIPE,
    });

    setTimeout(() => {
      dispatch({
        type: C.HIDE_WIPE,
      });
    }, 1500);

    setTimeout(() => {
      dispatch({
        type: C.SET_USER_JR,
      });
    }, 750);
  },
});

const App = connect(mapStateToProps, mapDispatchToProps)(AppConnected);

export default App;
