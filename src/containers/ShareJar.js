import { connect } from 'react-redux';
import C from '../store/constants';
import ShareJarConnected from '../components/Jars/ShareJarConnected';
import {
  setShareJarNoteAj, setShareJarValueAj, setShareJarTotalAj,
  setShareJarNoteJr, setShareJarValueJr, setShareJarTotalJr,
} from '../store/actions';

const mapStateToProps = state => ({
  flipJarShare: state.flipJarShare,
  submitTextJarShare: state.submitTextJarShare,
  shareJarNoteAj: state.ajData.shareJarNoteAj,
  shareJarValueAj: state.ajData.shareJarValueAj,
  shareJarTotalAj: state.ajData.shareJarTotalAj,
  shareJarNoteJr: state.jrData.shareJarNoteJr,
  shareJarValueJr: state.jrData.shareJarValueJr,
  shareJarTotalJr: state.jrData.shareJarTotalJr,
  handleUserAJ: state.handleUserAJ,
  handleUserJR: state.handleUserJR,
});

const mapDispatchToProps = dispatch => ({
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
  handleShareJarNoteChangeAj(e) {
    dispatch(
      setShareJarNoteAj(e.target.value),
    );
  },
  handleShareJarValueChangeAj(e) {
    dispatch(
      setShareJarValueAj(e.target.value),
    );
  },
  handleAddShareJarAj(shareJarValue, shareJarNote, shareJarTotal) {
    dispatch(
      setShareJarTotalAj('Share jar', shareJarValue, shareJarNote, shareJarTotal),
    );
  },
  handleMinusShareJarAj(shareJarValue, shareJarNote, shareJarTotal) {
    // We need to make the shareJarValue a negative number
    const negativeValue = shareJarValue * -1;
    dispatch(
      setShareJarTotalAj('Share jar', negativeValue, shareJarNote, shareJarTotal),
    );
  },
  handleShareJarNoteChangeJr(e) {
    dispatch(
      setShareJarNoteJr(e.target.value),
    );
  },
  handleShareJarValueChangeJr(e) {
    dispatch(
      setShareJarValueJr(e.target.value),
    );
  },
  handleAddShareJarJr(shareJarValue, shareJarNote, shareJarTotal) {
    console.log(`
    'handleAddSpendJar action':
    spendJarValue: ${shareJarValue}
    spendJarNote: ${shareJarNote}
    spendJarTotal: ${shareJarTotal}
    `);
    dispatch(
      setShareJarTotalJr('Share jar', shareJarValue, shareJarNote, shareJarTotal),
    );
  },
  handleMinusShareJarJr(shareJarValue, shareJarNote, shareJarTotal) {
    // We need to make the shareJarValue a negative number
    const negativeValue = shareJarValue * -1;
    dispatch(
      setShareJarTotalJr('Share jar', negativeValue, shareJarNote, shareJarTotal),
    );
  },
  handleAllowanceAddShareJarJr(shareJarTotal) {
    const allowanceValue = '0.50';
    const allowanceNote = 'Weekly share jar allowance deposit';
    console.log(`
    'handleAllowanceAddShareJarJr action':
    shareJarValue: ${allowanceValue}
    shareJarNote: ${allowanceNote}
    shareJarTotal: ${shareJarTotal}
    `);
    dispatch(
      setShareJarTotalJr('Share jar', allowanceValue, allowanceNote, shareJarTotal),
    );
  },
  handleAllowanceAddShareJarAj(shareJarTotal) {
    const allowanceValue = '0.25';
    const allowanceNote = 'Weekly share jar allowance deposit';
    console.log(`
    'handleAllowanceAddShareJarAj action':
    shareJarValue: ${allowanceValue}
    shareJarNote: ${allowanceNote}
    shareJarTotal: ${shareJarTotal}
    `);
    dispatch(
      setShareJarTotalAj('Share jar', allowanceValue, allowanceNote, shareJarTotal),
    );
  },
});

const ShareJar = connect(mapStateToProps, mapDispatchToProps)(ShareJarConnected);

export default ShareJar;
