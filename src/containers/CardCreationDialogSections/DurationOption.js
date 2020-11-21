// https://stackoverflow.com/questions/16232774/html-put-a-fixed-text-on-an-input-text

import React from "react";
import "../../styles/DurationOption.scss";

export default function DurationOption() {
  return (
    <form className="duration">
      <div className="time-input">
        <input
          type="number"
          min="0"
          className="second input-field unique"
          placeholder="0"
        />
        <span className="unit">hr</span>
      </div>
      <div className="time-input">
        <input
          type="number"
          min="0"
          className="second input-field unique"
          placeholder="0"
        />
        <span className="unit">min</span>
      </div>
      <div className="time-input">
        <input
          type="number"
          min="0"
          className="second input-field unique"
          placeholder="0"
        />
        <span className="unit">sec</span>
      </div>
    </form>
  );
}
