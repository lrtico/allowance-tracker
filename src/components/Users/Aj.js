import React from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SpendJar from '../../containers/SpendJar';
import ShareJar from '../../containers/ShareJar';
import LogJarConnected from '../Jars/LogJarConnected';
import SaveJarConnected from '../Jars/SaveJarConnected';

const Aj = props => {
  const { ajData: { logsAj } } = props;
  console.log('Aj\'s props', props);
  return (
    <div className="jars">
      <div className="flex jars__row">
        <SaveJarConnected />
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

// The Plan:
// Refactor the combinedReducer to create a tree with two branches (users)
// Grab (mapStateToProps) AJ's tree from the store in the AJ.js file (make this AJConnected.js)
// Pass down AJ's data from the store to the jars
// I think the dumb Jars can handle dispatching actions like they are currently
