import React from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SaveJar from '../../containers/SaveJar';
import SpendJar from '../../containers/SpendJar';
import ShareJar from '../../containers/ShareJar';
import LogJarConnected from '../../components/Jars/LogJarConnected';

const Jr = props => {
  const { jrData: { logsJr } } = props;
  console.log('JrConnected props', props);
  return (
    <div className="jars">
      <div className="flex jars__row">
        <SaveJar />
        <SpendJar />
      </div>
      <div className="flex jars__row">
        <ShareJar />
        <LogJarConnected logs={logsJr} />
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  jrData: state.jrData,
});

Jr.propTypes = {
  jrData: PropTypes.object,
};

export default connect(mapStateToProps)(Jr);
