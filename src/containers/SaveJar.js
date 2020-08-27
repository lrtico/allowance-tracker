import { connect } from 'react-redux';
import C from '../store/constants';
import SaveJarConnected from '../components/Jars/SaveJarConnected';
import {
  setSaveJarNoteAj, setSaveJarValueAj, setSaveJarTotalAj,
  setSaveJarNoteJr, setSaveJarValueJr, setSaveJarTotalJr,
} from '../store/actions';

const mapStateToProps = state => ({
  flipJarSave: state.flipJarSave,
  submitTextJarSave: state.submitTextJarSave,
  saveJarNoteAj: state.ajData.saveJarNoteAj,
  saveJarValueAj: state.ajData.saveJarValueAj,
  saveJarTotalAj: state.ajData.saveJarTotalAj,
  saveJarNoteJr: state.jrData.saveJarNoteJr,
  saveJarValueJr: state.jrData.saveJarValueJr,
  saveJarTotalJr: state.jrData.saveJarTotalJr,
  handleUserAJ: state.handleUserAJ,
  handleUserJR: state.handleUserJR,
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
  handleSaveJarNoteChangeAj(e) {
    dispatch(
      setSaveJarNoteAj(e.target.value),
    );
  },
  handleSaveJarNoteChangeJr(e) {
    dispatch(
      setSaveJarNoteJr(e.target.value),
    );
  },
  handleSaveJarValueChangeAj(e) {
    dispatch(
      setSaveJarValueAj(e.target.value),
    );
  },
  handleSaveJarValueChangeJr(e) {
    dispatch(
      setSaveJarValueJr(e.target.value),
    );
  },
  handleAddSaveJarAj(saveJarValue, saveJarNote, saveJarTotal) {
    console.log(`
    'handleAddSaveJar action':
    saveJarValue: ${saveJarValue}
    saveJarNote: ${saveJarNote}
    saveJarTotal: ${saveJarTotal}
    `);
    dispatch(
      setSaveJarTotalAj('Save jar', saveJarValue, saveJarNote, saveJarTotal),
    );
  },
  handleAddSaveJarJr(saveJarValue, saveJarNote, saveJarTotal) {
    console.log(`
    'handleAddSaveJar action':
    saveJarValue: ${saveJarValue}
    saveJarNote: ${saveJarNote}
    saveJarTotal: ${saveJarTotal}
    `);
    dispatch(
      setSaveJarTotalJr('Save jar', saveJarValue, saveJarNote, saveJarTotal),
    );
  },
  handleMinusSaveJarAj(saveJarValue, saveJarNote, saveJarTotal) {
    // We need to make the saveJarValue a negative number
    const negativeValue = saveJarValue * -1;
    dispatch(
      setSaveJarTotalAj('Save jar', negativeValue, saveJarNote, saveJarTotal),
    );
  },
  handleMinusSaveJarJr(saveJarValue, saveJarNote, saveJarTotal) {
    // We need to make the saveJarValue a negative number
    const negativeValue = saveJarValue * -1;
    dispatch(
      setSaveJarTotalJr('Save jar', negativeValue, saveJarNote, saveJarTotal),
    );
  },
});

const SaveJar = connect(mapStateToProps, mapDispatchToProps)(SaveJarConnected);

export default SaveJar;
