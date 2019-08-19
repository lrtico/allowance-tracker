import { connect } from 'react-redux';
import JarAmounty from '../components/JarAmount/JarAmount';

const mapStateToProps = state => {
  return {
    jarTotal: state.saveJarTotal,
  };
};

const JarAmount = connect(mapStateToProps)(JarAmounty);

export default JarAmount;
