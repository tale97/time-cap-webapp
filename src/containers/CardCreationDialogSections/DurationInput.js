// https://stackoverflow.com/questions/16232774/html-put-a-fixed-text-on-an-input-text

import React, { useState, useEffect } from "react";
import "../../styles/DurationOption.scss";

export default function DurationInput({ setDuration }) {
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);

  useEffect(() => {
    let duration = [hour, minute, second];
    setDuration(duration);
  }, [hour, minute, second, setDuration]);

  return (
    <form className="duration">
      <div className="time-input">
        <input
          type="number"
          min="0"
          className="second input-field unique"
          placeholder="0"
          onChange={(event) => setHour(event.target.value)}
        />
        <span className="unit">hr</span>
      </div>
      <div className="time-input">
        <input
          type="number"
          min="0"
          className="second input-field unique"
          placeholder="0"
          onChange={(event) => setMinute(event.target.value)}
        />
        <span className="unit">min</span>
      </div>
      <div className="time-input">
        <input
          type="number"
          min="0"
          className="second input-field unique"
          placeholder="0"
          onChange={(event) => setSecond(event.target.value)}
        />
        <span className="unit">sec</span>
      </div>
    </form>
  );
}
