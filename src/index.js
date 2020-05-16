import React from "react";
import ReactDOM from "react-dom";
import HeaderComponent from "./components/HeaderComponent";
import PomodoroTimerComponent from "./components/PomodoroTimerComponent";
import FooterComponent from "./components/FooterComponent";
import "./styles/index.css";

const App = (props) => {
  return (
    <>
      <HeaderComponent
        workingTime={props.workingTime}
        restingTime={props.restingTime}
      />
      <PomodoroTimerComponent
        workingTime={props.workingTime}
        restingTime={props.restingTime}
      />
      <FooterComponent />
    </>
  );
};

ReactDOM.render(
  <App workingTime={25} restingTime={5} />,
  document.getElementById("app")
);
