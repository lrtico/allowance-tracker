import { connect } from 'react-redux';
import JarFrontConnected from '../components/Jars/JarFrontConnected';

const mapStateToProps = state => ({
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
});

const JarFront = connect(mapStateToProps, mapDispatchToProps)(JarFrontConnected);

export default JarFront;
