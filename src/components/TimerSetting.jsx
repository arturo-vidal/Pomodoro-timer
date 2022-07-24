import React from "react";
import '../styles/TimerSetting.css';

function TimerSetting(props){
  return(
    <div>
      <h3 id={props.title==="Work minutes" ? "session-label" : "break-label"}>{props.title}</h3>
      <div id="set-minutes">
        <h4 id={props.title==="Work minutes" ? "session-increment" : "break-increment"}>+</h4>
        <h4 id={props.title==="Work minutes" ? "session-length" : "break-length"}>{props.preset}</h4>
        <h4 id={props.title==="Work minutes" ? "session-decrement" : "break-decrement"}>-</h4>
      </div>
    </div>
  );
}

export default TimerSetting;