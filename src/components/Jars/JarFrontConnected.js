import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Buttons/Button';
import JarAmount from '../JarAmount/JarAmount';
import JarLabel from '../JarLabel/JarLabel';

const JarFrontConnected = ({
  jarFrontClassname, handleAddButtonText, handleMinusButtonText, saveJarTotal, jarLabel,
}) => {
  console.log('JarFrontConnected props', props);
  return (
    <div className={`jar__front ${jarFrontClassname}`}>
      <div className="flex flex--between">
        <Button
          setIcon="add"
          strokeColor="#ffffff"
          changeButtonText={handleAddButtonText}
        />
        <Button
          setIcon="remove"
          strokeColor="#ffffff"
          changeButtonText={handleMinusButtonText}
        />
      </div>
      <JarAmount jarTotal={saveJarTotal} />
      <JarLabel jarLabel={jarLabel} />
    </div>
  );
};

JarFrontConnected.propTypes = {
  jarFrontClassname: PropTypes.string,
  handleAddButtonText: PropTypes.func,
  handleMinusButtonText: PropTypes.func,
  saveJarTotal: PropTypes.number,
  jarLabel: PropTypes.string,
};

export default JarFrontConnected;
