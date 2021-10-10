import React, { useState, useEffect } from "react";

const Timer = () => {
  const [second, setSecond] = useState("00");
  const [minute, setMinute] = useState("00");
  const [hour,setHour] = useState("00")
  const [counter, setCounter] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [pause, setPause] = useState(false);
  const [timesList, setTimesList] = useState([]);

  useEffect(() => {
    let intervalId;

    if (isActive) {
      intervalId = setInterval(() => {
        const secondCounter = counter % 60;
        const minuteCounter = Math.floor(counter / 60);
        const hourCounter = Math.floor(counter/ 3600)

        const computedSecond = String(secondCounter).length === 1? `0${secondCounter}`: secondCounter;
        const computedMinute = String(minuteCounter).length === 1? `0${minuteCounter}`: minuteCounter;
        const computedHour = String(hourCounter).length ===1 ? `0${hourCounter}`: hourCounter;

        setSecond(computedSecond);
        setMinute(computedMinute);
        setHour(computedHour);

        setCounter((counter) => counter + 1);
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [isActive, counter]);

  function resetTimer() {
    setIsActive(false);
    setPause(false);
    setCounter(0);
    setSecond("00");
    setMinute("00");
    setHour("00");
    setTimesList([...timesList,`${hour}:${minute}:${second}`])
  }

  function stopTimer(){
    setIsActive(false);
    setPause(true);
    setTimesList([...timesList,`${hour}:${minute}:${second}`])
  }

  
    
  return (
    <div className="container">
      <div className="containerTime">
        <div className="time">
          <span className="hour">{hour}</span>
          <span>:</span>
          <span className="minute">{minute}</span>
          <span>:</span>
          <span className="second">{second}</span>
        </div>
        <div className="buttons">
          {pause ? (<button onClick={() => setIsActive(true)} className="continue">Continue</button>) 
          : (<button onClick={() => setIsActive(true)} className="start">Start</button>)
          }
          <button onClick={stopTimer} className="stop">Stop</button>
          <button onClick={resetTimer} className="reset">Reset</button>
        </div>
      </div>

      <div className="containerList">
        <ol>
          {timesList.map((time)=>(<li>{time}</li>))}
        </ol>
      </div>
    </div>
  );
};

export default Timer;
