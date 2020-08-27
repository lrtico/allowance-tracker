import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SaveJar from '../../containers/SaveJar';
import SpendJar from '../../containers/SpendJar';
import ShareJar from '../../containers/ShareJar';
import LogJarConnected from '../Jars/LogJarConnected';

const Aj = props => {
  const { ajData: { logsAj } } = props;
  console.log('Aj\'s props', props);
  return (
    <div className="jars">
      <div className="flex jars__row">
        <SaveJar />
        <SpendJar />
      </div>
      <div className="flex jars__row">
        <ShareJar />
        <LogJarConnected logs={logsAj} />
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  ajData: state.ajData,
});

Aj.propTypes = {
  ajData: PropTypes.object,
};

export default connect(mapStateToProps)(Aj);
