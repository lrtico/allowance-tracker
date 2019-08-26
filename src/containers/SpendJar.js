import { connect } from 'react-redux';
import C from '../store/constants';
import SpendJarConnected from '../components/Jars/SpendJarConnected';
import {
  setSpendJarNoteAj, setSpendJarValueAj, setSpendJarTotalAj,
  setSpendJarNoteJr, setSpendJarValueJr, setSpendJarTotalJr,
} from '../store/actions';

const mapStateToProps = state => ({
  flipJarSpend: state.flipJarSpend,
  submitTextJarSpend: state.submitTextJarSpend,
  spendJarNoteAj: state.ajData.spendJarNoteAj,
  spendJarValueAj: state.ajData.spendJarValueAj,
  spendJarTotalAj: state.ajData.spendJarTotalAj,
  spendJarNoteJr: state.jrData.spendJarNoteJr,
  spendJarValueJr: state.jrData.spendJarValueJr,
  spendJarTotalJr: state.jrData.spendJarTotalJr,
  handleUserAJ: state.handleUserAJ,
  handleUserJR: state.handleUserJR,
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
  handleSpendJarNoteChangeAj(e) {
    dispatch(
      setSpendJarNoteAj(e.target.value),
    );
  },
  handleSpendJarNoteChangeJr(e) {
    dispatch(
      setSpendJarNoteJr(e.target.value),
    );
  },
  handleSpendJarValueChangeAj(e) {
    dispatch(
      setSpendJarValueAj(e.target.value),
    );
  },
  handleSpendJarValueChangeJr(e) {
    dispatch(
      setSpendJarValueJr(e.target.value),
    );
  },
  handleAddSpendJarAj(spendJarValue, spendJarNote, spendJarTotal) {
    dispatch(
      setSpendJarTotalAj('Spend jar', spendJarValue, spendJarNote, spendJarTotal),
    );
  },
  handleAddSpendJarJr(spendJarValue, spendJarNote, spendJarTotal) {
    console.log(`
    'handleAddSpendJar action':
    spendJarValue: ${spendJarValue}
    spendJarNote: ${spendJarNote}
    spendJarTotal: ${spendJarTotal}
    `);
    dispatch(
      setSpendJarTotalJr('Spend jar', spendJarValue, spendJarNote, spendJarTotal),
    );
  },
  handleMinusSpendJarAj(spendJarValue, spendJarNote, spendJarTotal) {
    // We need to make the spendJarValue a negative number
    const negativeValue = spendJarValue * -1;
    dispatch(
      setSpendJarTotalAj('Spend jar', negativeValue, spendJarNote, spendJarTotal),
    );
  },
  handleMinusSpendJarJr(spendJarValue, spendJarNote, spendJarTotal) {
    // We need to make the spendJarValue a negative number
    const negativeValue = spendJarValue * -1;
    dispatch(
      setSpendJarTotalJr('Spend jar', negativeValue, spendJarNote, spendJarTotal),
    );
  },
  handleAllowanceAddSpendJarJr(spendJarTotal) {
    const allowanceValue = '3';
    const allowanceNote = 'Weekly spend jar allowance deposit';
    console.log(`
    'handleAllowanceAddSpendJarJr action':
    spendJarValue: ${allowanceValue}
    spendJarNote: ${allowanceNote}
    spendJarTotal: ${spendJarTotal}
    `);
    dispatch(
      setSpendJarTotalJr('Spend jar', allowanceValue, allowanceNote, spendJarTotal),
    );
  },
  handleAllowanceAddSpendJarAj(spendJarTotal) {
    const allowanceValue = '1.25';
    const allowanceNote = 'Weekly spend jar allowance deposit';
    console.log(`
    'handleAllowanceAddSpendJarAj action':
    spendJarValue: ${allowanceValue}
    spendJarNote: ${allowanceNote}
    spendJarTotal: ${spendJarTotal}
    `);
    dispatch(
      setSpendJarTotalAj('Spend jar', allowanceValue, allowanceNote, spendJarTotal),
    );
  },
});

const SpendJar = connect(mapStateToProps, mapDispatchToProps)(SpendJarConnected);

export default SpendJar;
