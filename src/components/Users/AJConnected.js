import React from 'react'
import PropTypes from 'prop-types';
import SaveJar from '../../containers/SaveJar';
import SpendJar from '../../containers/SpendJar';
import ShareJar from '../../containers/ShareJar';
import LogJar from '../../containers/LogJar';

const AJConnected = props => {
  const { ajData } = props;
  return (
    <div className="jars">
      <div className="flex jars__row">
        <SaveJar data={ajData} />
        <SpendJar data={ajData} />
      </div>
      <div className="flex jars__row">
        <ShareJar data={ajData} />
        <LogJar data={ajData} />
      </div>
    </div>
  );
};

AJConnected.propTypes = {
  ajData: PropTypes.object,
};

export default AJConnected;

// The Plan:
// Refactor the combinedReducer to create a tree with two branches (users)
// Grab (mapStateToProps) AJ's tree from the store in the AJ.js file (make this AJConnected.js)
// Pass down AJ's data from the store to the jars
// I think the dumb Jars can handle dispatching actions like they are currently
