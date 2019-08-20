import { connect } from 'react-redux';
import AppConnected from '../components/App/App';
import C from '../store/constants';
import {
  setSaveJarNote, setSaveJarValue, setSaveJarTotal,
  setSpendJarNote, setSpendJarValue, setSpendJarTotal,
  setShareJarNote, setShareJarValue, setShareJarTotal,
} from '../store/actions';

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

const mapDispatchToProps = dispatch => ({
  handleAddButtonText() {
    dispatch({
      type: C.ADD_SAVE_JAR,
    });
  },
  handleMinusButtonText() {
    dispatch({
      type: C.MINUS_SAVE_JAR,
    });
  },
  cancelSaveJarChange() {
    dispatch({
      type: C.CLOSE_SAVE_JAR,
    });
  },
  handleSaveJarNoteChange(e) {
    dispatch(
      setSaveJarNote(e.target.value),
    );
  },
  handleSaveJarValueChange(e) {
    dispatch(
      setSaveJarValue(e.target.value),
    );
  },
  handleAddSaveJar({
    saveJarValue, saveJarNote, saveJarTotal,
  }) {
    dispatch(
      setSaveJarTotal('Save jar', saveJarValue, saveJarNote, saveJarTotal),
    );
  },
  handleMinusSaveJar({
    saveJarValue, saveJarNote, saveJarTotal,
  }) {
    // We need to make the saveJarValue a negative number
    const negativeValue = saveJarValue * -1;
    dispatch(
      setSaveJarTotal('Save jar', negativeValue, saveJarNote, saveJarTotal),
    );
  },
  handleAddButtonTextJarSpend() {
    dispatch({
      type: C.ADD_SPEND_JAR,
    });
  },
  handleMinusButtonTextJarSpend() {
    dispatch({
      type: C.MINUS_SPEND_JAR,
    });
  },
  cancelSpendJarChange() {
    dispatch({
      type: C.CLOSE_SPEND_JAR,
    });
  },
  handleSpendJarNoteChange(e) {
    dispatch(
      setSpendJarNote(e.target.value),
    );
  },
  handleSpendJarValueChange(e) {
    dispatch(
      setSpendJarValue(e.target.value),
    );
  },
  handleAddSpendJar({
    spendJarValue, spendJarNote, spendJarTotal,
  }) {
    dispatch(
      setSpendJarTotal('Spend jar', spendJarValue, spendJarNote, spendJarTotal),
    );
  },
  handleMinusSpendJar({
    spendJarValue, spendJarNote, spendJarTotal,
  }) {
    // We need to make the spendJarValue a negative number
    const negativeValue = spendJarValue * -1;
    dispatch(
      setSpendJarTotal('Spend jar', negativeValue, spendJarNote, spendJarTotal),
    );
  },
  handleAddButtonTextJarShare() {
    dispatch({
      type: C.ADD_SHARE_JAR,
    });
  },
  handleMinusButtonTextJarShare() {
    dispatch({
      type: C.MINUS_SHARE_JAR,
    });
  },
  cancelShareJarChange() {
    dispatch({
      type: C.CLOSE_SHARE_JAR,
    });
  },
  handleShareJarNoteChange(e) {
    dispatch(
      setShareJarNote(e.target.value),
    );
  },
  handleShareJarValueChange(e) {
    dispatch(
      setShareJarValue(e.target.value),
    );
  },
  handleAddShareJar({
    shareJarValue, shareJarNote, shareJarTotal,
  }) {
    dispatch(
      setShareJarTotal('Share jar', shareJarValue, shareJarNote, shareJarTotal),
    );
  },
  handleMinusShareJar({
    shareJarValue, shareJarNote, shareJarTotal,
  }) {
    // We need to make the shareJarValue a negative number
    const negativeValue = shareJarValue * -1;
    dispatch(
      setShareJarTotal('Share jar', negativeValue, shareJarNote, shareJarTotal),
    );
  },
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

const App = connect(mapStateToProps, mapDispatchToProps)(AppConnected);

export default App;
