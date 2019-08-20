import { connect } from 'react-redux';
import C from '../store/constants';
import SaveJarConnected from '../components/Jars/SaveJarConnected';
import { setSaveJarNote, setSaveJarValue, setSaveJarTotal } from '../store/actions';

const mapStateToProps = state => ({
  flipJarSave: state.flipJarSave,
  submitTextJarSave: state.submitTextJarSave,
  saveJarNote: state.saveJarNote,
  saveJarValue: state.saveJarValue,
  saveJarTotal: state.saveJarTotal,
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
});

const SaveJar = connect(mapStateToProps, mapDispatchToProps)(SaveJarConnected);

export default SaveJar;
