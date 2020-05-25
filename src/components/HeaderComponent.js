import React from "react";
import PropTypes from 'prop-types';
import tomatoIcon from "../images/tomato.png";
import DescriptionDialogComponent from "./DescriptionDialogComponent";


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
        For a total time of {props.workingTime + props.restingTime} minutes. <DescriptionDialogComponent />
      </p>
    </header>
  );
};

// 验证
HeaderComponent.propTypes = {
  workingTime: PropTypes.number,
  restingTime: PropTypes.number
}

// 预设值
HeaderComponent.defaultProps = {
  workingTime: 25,
  restingTime: 5
}


export default HeaderComponent;

