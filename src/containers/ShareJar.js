import { connect } from 'react-redux';
import C from '../store/constants';
import ShareJarConnected from '../components/Jars/ShareJarConnected';
import { setShareJarNote, setShareJarValue, setShareJarTotal } from '../store/actions';

const mapStateToProps = state => ({
  flipJarShare: state.flipJarShare,
  submitTextJarShare: state.submitTextJarShare,
  shareJarNote: state.shareJarNote,
  shareJarValue: state.shareJarValue,
  shareJarTotal: state.shareJarTotal,
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
});

const ShareJar = connect(mapStateToProps, mapDispatchToProps)(ShareJarConnected);

export default ShareJar;
