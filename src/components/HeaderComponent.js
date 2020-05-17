import React from "react";
import tomatoIcon from "../images/tomato.png";
import DescriptionComponent from "./DescriptionComponent";

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
        For a total time of {props.workingTime + props.restingTime} minutes. <DescriptionComponent />
      </p>
    </header>
  );
};

export default HeaderComponent;

