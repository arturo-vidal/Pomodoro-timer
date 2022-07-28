import React from "react";
import '../styles/TimerSetting.css';

function TimerSetting(props){
  return(
    <div>
      <h3 id={props.title==="Work minutes" ? "session-label" : "break-label"}>{props.title}</h3>
      <div id="set-minutes">
        <h4 id={props.title==="Work minutes" ? "session-increment" : "break-increment"} onClick={props.addMin}>+</h4>
        <h4 id={props.title==="Work minutes" ? "session-length" : "break-length"}>{props.preset}</h4>
        <h4 id={props.title==="Work minutes" ? "session-decrement" : "break-decrement"} onClick={props.sustrMin}>-</h4>
      </div>
    </div>
  );
}

export default TimerSetting;