import React from "react";
import "./AddNote.css";

const AddNote = props => {
  return (
    <div className="jar__back__note">
      <div className="flex input--highlight">
        <label htmlFor="">Note:</label>
        <input
          maxLength="75"
          type="text"
          value={props.jarValue}
          onChange={props.handleJarValueChange}
        />
      </div>
    </div>
  );
};

export default AddNote;
