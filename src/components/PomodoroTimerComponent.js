import React, { useState, useEffect } from "react";
import RestTimerComponent from "./RestTimerComponent";
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
  const [showRestDialog, setShowRestDialog] = useState(false);
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
      setShowRestDialog(true);
    }
    return () => { clearInterval(interval); setShowRestDialog(false); };
    // eslint-disable-next-line
  }, [isActive, workTimer]);

  const handelTimerStart = () => {
    console.log(isActive ? "handelTimerPause" : "handelTimerStart");
    setIsActive(!isActive);
  };

  const handelTimerReset = () => {
    setWorkTimer(props.workingTime * 60);
    setIsActive(false);
    console.log("handelTimerReset");
  };

  return (
    <>
      <p className={isActive ? "timer circle" : "timer"}>
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
        className="action-button"
      >
        {isActive ? "PAUSE" : "START"}
      </button>
      <button onClick={handelTimerReset} className="action-button">RESET</button>
      {showRestDialog ? <RestTimerComponent restingTime={props.restingTime} /> : null}
    </>
  );
};

export default PomodoroTimerComponent;
