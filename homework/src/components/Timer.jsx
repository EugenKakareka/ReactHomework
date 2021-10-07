import React, { useState, useEffect } from "react";

const Timer = () => {
  const [second, setSecond] = useState("00");
  const [minute, setMinute] = useState("00");
  const [counter, setCounter] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [pause,setPause] = useState(false)
 

  useEffect(() => {
    let intervalId;

    if (isActive) {
      intervalId = setInterval(() => {
        const secondCounter = counter % 60;
        const minuteCounter = Math.floor(counter / 60);

        const computedSecond = String(secondCounter).length === 1 ? `0${secondCounter}`: secondCounter;
        const computedMinute = String(minuteCounter).length === 1 ? `0${minuteCounter}`: minuteCounter;

        setSecond(computedSecond);
        setMinute(computedMinute);

        setCounter((counter) => counter + 1);
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [isActive, counter]);

  function stopTimer() {
    setIsActive(false);
    setPause(false);
    setCounter(0);
    setSecond("00");
    setMinute("00");
  }

  

  return (
    <div className="container">
      <div className="time">
        <span className="minute">{minute}</span>
        <span>:</span>
        <span className="second">{second}</span>
      </div>
      <div className="buttons">
        {pause 
        ? <button onClick={() => setIsActive(true)} className="continue">Continue</button> 
        : <button onClick={() => setIsActive(true)} className="start">Start</button>
        }
        <button onClick={() =>{setIsActive(false);setPause(true)}}  className="stop">Stop</button>
        <button onClick={stopTimer} className="reset">Reset</button>
      </div>
    </div>
  );
};

export default Timer;
