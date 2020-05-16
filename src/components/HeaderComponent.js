import React from "react";
import tomatoIcon from "../images/tomato.png";

export const HeaderComponent = (props) => {
  return (
    <header>
      <h1>
        <img className="icon" src={tomatoIcon} alt="tomato icon" />
        Pomodoro Timer App
      </h1>
      <p>
        This timer runs for {props.workingTime} minutes, followed by rest of{" "}
        {props.restingTime}
        minutes.
        <br />
        For a total time of {props.workingTime + props.restingTime} minutes.
      </p>
    </header>
  );
};

export default HeaderComponent;

/*
      <details>
        <summary>Description</summary>
        <p>There are six steps in the original technique:</p>
        <p>1.Decide on the task to be done.</p>
        <p>2.Set the pomodoro timer (traditionally to 25 minutes).</p>
        <p>3.Work on the task.</p>
        <p>
          4.End work when the timer rings and put a checkmark on a piece of
          paper.
        </p>
        <p>
          5.If you have fewer than four checkmarks, take a short break (3–5
          minutes), then go to step 2.
        </p>
        <p>
          6.After four pomodoros, take a longer break (15–30 minutes), reset
          your checkmark count to zero, then go to step 1.
        </p>
      </details>
*/
