import { connect } from 'react-redux';
import App from '../components/App/App';
import C from '../store/constants';

const mapStateToProps = state => ({
  flipJarSave: state.flipJarSave,
  submitTextJarSave: state.submitTextJarSave,
  saveJarNote: state.saveJarNote,
  saveJarValue: state.saveJarValue,
  saveJarTotal: state.saveJarTotal,
  flipJarSpend: state.flipJarSpend,
  submitTextJarSpend: state.submitTextJarSpend,
  spendJarNote: state.spendJarNote,
  spendJarValue: state.spendJarValue,
  spendJarTotal: state.spendJarTotal,
  flipJarShare: state.flipJarShare,
  submitTextJarShare: state.submitTextJarShare,
  shareJarNote: state.shareJarNote,
  shareJarValue: state.shareJarValue,
  shareJarTotal: state.shareJarTotal,
  flipJarLog: state.flipJarLog,
  logs: state.logs,
});

const mapDispatchToProps = dispatch => {
  return {
    handleAddButtonText() {
      dispatch({
        type: C.ADD_SAVE_JAR,
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
