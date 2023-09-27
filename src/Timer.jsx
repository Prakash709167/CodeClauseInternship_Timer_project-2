import React, {useEffect, useState, useRef}  from "react";
import "./Timer.css";
export const Timer = () => {
  const [days, SetDays] = useState(0);
  const [hrs, SetHrs] = useState(0);
  const [mins, SetMins] = useState(0);
  const [secs, SetSecs] = useState(0);


  let interval = useRef();
  const startTImer = () =>{
    const countdownDate = new Date('oct 2, 2023 00:00:00').getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      const days = Math.floor(distance /(1000 * 60 * 60 * 24));
      const hrs = Math.floor((distance %(1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
      const mins = Math.floor((distance %(1000 * 60 * 60)) / (1000 * 60));
      const secs = Math.floor((distance %(1000 * 60 )) / 1000);


      if (distance < 0){
        clearInterval(interval.current);
      }
      else{
        SetDays(days);
        SetHrs(hrs);
        SetMins(mins);
        SetSecs(secs);
      }

    }, 1000);


  };

  useEffect(() => {
    startTImer();
    return () => {
      clearInterval(interval.current);
    };
  });

  return (
    <section className="timer-container">
      <section className="timer">
        <div className="first"> 
          <h1>Countdown Timer</h1>
        </div>
        <div className="second">
          <section>
            <p>{days}</p>
            <p>
              <small>Days</small>
            </p>
          </section>
          <span>:</span>
          <section>
            <p>{hrs}</p>
            <p>
              <small>Hrs</small>
            </p>
          </section>
          <span>:</span>
          <section>
            <p>{mins}</p>
            <p>
              <small>Mins</small>
            </p>
          </section>
          <span>:</span>
          <section>
            <p>{secs}</p>
            <p>
              <small>Secs</small>
            </p>
          </section>
        </div>
        {/* <div className="third">
        <section className="countdown-input-button">
            <input className="countdown-input" onChange={onChangeHandler} />
            <button className="countdown-button" onClick={onClickHandler}>Start</button>
          </section>
        </div> */}
      </section>
    </section>
  );
};

export default Timer;
