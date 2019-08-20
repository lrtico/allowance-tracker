import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Buttons/Button';
import JarLabel from '../JarLabel/JarLabel';

const LogJarConnected = (props) => {
  const {
    flipJarLog, handleFlipJarLog, handleClosingLog, logs,
  } = props;
  return (
    <div
      className={
        flipJarLog
          ? 'jar jar--log jar--flip'
          : 'jar jar--log'
      }
    >
      <div className="jar__front jar__front--log">
        <div className="flex flex--end">
          <Button
            setIcon="arrow_upward"
            strokeColor="#ffffff"
            addClass="jar__arrow_upward--rotate45deg"
            changeButtonText={handleFlipJarLog}
          />
        </div>
        <div className="flex flex--horz-center jar__amount">
          <span>LOG</span>
        </div>
        <JarLabel jarLabel="History" />
      </div>
      <div className="jar__back jar__back--log">
        <div>
          <div className="flex flex--between">
            <Button
              setIcon="close"
              strokeColor="#4c4c4c"
              changeButtonText={handleClosingLog}
            />
          </div>
          <div className="jar__back__log">
            {logs.map((l, index) => (
              <div
                className="jar__back__log__item flex flex--between"
                key={index}
              >
                <div className="jar__back__log__item__details">
                  <p>
                    <strong>{`${l.jar}, `}</strong>
                    <span>{`${l.date}:`}</span>
                  </p>
                  <p>{l.note}</p>
                </div>
                <div className="jar__back__log__item__amount">
                  <p>{l.value}</p>
                </div>
                <div className="jar__back__log__item__total">
                  <strong>{l.newTotal}</strong>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

LogJarConnected.propTypes = {
  flipJarLog: PropTypes.bool,
  handleFlipJarLog: PropTypes.func,
  handleClosingLog: PropTypes.func,
  logs: PropTypes.array,
};

export default LogJarConnected;
