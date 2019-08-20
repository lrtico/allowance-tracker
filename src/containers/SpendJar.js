import { connect } from 'react-redux';
import C from '../store/constants';
import SpendJarConnected from '../components/Jars/SpendJarConnected';
import { setSpendJarNote, setSpendJarValue, setSpendJarTotal } from '../store/actions';

const mapStateToProps = state => ({
  flipJarSpend: state.flipJarSpend,
  submitTextJarSpend: state.submitTextJarSpend,
  spendJarNote: state.spendJarNote,
  spendJarValue: state.spendJarValue,
  spendJarTotal: state.spendJarTotal,
});

const mapDispatchToProps = dispatch => ({
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
});

const SpendJar = connect(mapStateToProps, mapDispatchToProps)(SpendJarConnected);

export default SpendJar;
