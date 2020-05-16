import React, { useState, useEffect } from "react";
import alarm from "../audio/alarm.mp3";

let audio = new Audio(alarm);
function playAlarm() {
  audio.play();
}

function FullScreen() {
  var elem = document.getElementsByClassName("timer")[0];
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.msRequestFullscreen) {
    elem.msRequestFullscreen();
  } else if (elem.mozRequestFullScreen) {
    elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) {
    elem.webkitRequestFullscreen();
  }
}

export const PomodoroTimerComponent = (props) => {
  const [workTimer, setWorkTimer] = useState(props.workingTime * 60);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    workTimer === props.workingTime * 60 || workTimer === 0
      ? (document.title = "Pomodoro Timer App")
      : (document.title = document.getElementsByClassName(
        "timer"
      )[0].textContent);

    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setWorkTimer((workTimer) => workTimer - 1);
      }, 1000);
    } else if (!isActive) {
      clearInterval(interval);
    }

    if (workTimer === 0) {
      clearInterval(interval);
      playAlarm();
      alert("Time up");
      audio.pause();
      audio.currentTime = 0;
    }
    return () => clearInterval(interval);
    // eslint-disable-next-line
  }, [isActive, workTimer]);

  const handelTimerStart = () => {
    console.log(isActive ? "handelTimerPause" : "handelTimerStart");
    setIsActive(!isActive);
  };

  const handelTimerRest = () => {
    setWorkTimer(props.workingTime * 60);
    setIsActive(false);
    console.log("handelTimerRest");
  };

  return (
    <>
      <p className="timer">
        {" "}
        {Math.floor(workTimer / 60)}:
        {workTimer - Math.floor(workTimer / 60) * 60 < 10 ? "0" : ""}
        {workTimer - Math.floor(workTimer / 60) * 60}
      </p>
      <i className="fas fa-expand" onClick={FullScreen}></i>
      <br />
      <button
        onClick={handelTimerStart}
        disabled={workTimer === 0 ? true : false}
      >
        {isActive ? "Pause" : "Start"}
      </button>
      <button onClick={handelTimerRest}>Rest</button>
    </>
  );
};

export default PomodoroTimerComponent;
