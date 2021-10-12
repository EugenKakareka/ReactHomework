import React from "react";

function TimerList({ timesList }) {
  return (
    <div className="containerList">
      <ol>
        {timesList.map((time) => (
          <li>{time}</li>
        ))}
      </ol>
    </div>
  );
}

export default TimerList;
