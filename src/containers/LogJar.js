import { connect } from 'react-redux';
import C from '../store/constants';
import LogJarConnected from '../components/Jars/LogJarConnected';

const mapStateToProps = state => ({
  flipJarLog: state.flipJarLog,
  // logs: state.logs,
  // ajData: state.ajData,
});

const mapDispatchToProps = dispatch => ({
  handleFlipJarLog() {
    dispatch({
      type: C.SHOW_LOG,
    });
  },
  handleClosingLog() {
    dispatch({
      type: C.CLOSE_LOG,
    });
  },
});

const LogJar = connect(mapStateToProps, mapDispatchToProps)(LogJarConnected);

export default LogJar;
