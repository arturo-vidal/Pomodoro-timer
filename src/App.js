import React from 'react';
import './App.css';
import TimerSetting from './components/TimerSetting';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      breakCount: 5,
      sessionCount: 25,
      currentTimer: "Session",
      clockCount: 25 * 60
    }
  }
    
    
  toTime=(count)=>{
    let minutes= Math.floor(count/60);
    minutes= (minutes < 10) ? ("0" + minutes) : minutes;
    let seconds= count % 60;
    seconds= (seconds < 10) ? ("0" + seconds) : seconds;
    return(`${minutes}:${seconds}`);
  }

  addWorkMinutes=()=>{
    const {sessionCount}= this.state;
    if(sessionCount < 60){
      this.setState({sessionCount: sessionCount + 1});
    }
  }

  sustrWorkMinutes=()=>{
    const {sessionCount}= this.state;
    if(sessionCount > 1){
      this.setState({sessionCount: sessionCount -1});
    }
  }

  addBreakMinutes=()=>{
    const {breakCount}= this.state;
    if(breakCount < 60){
      this.setState({breakCount: breakCount + 1});
    }
  }

  sustrBreakMinutes=()=>{
    const {breakCount}= this.state;
    if(breakCount > 1){
      this.setState({breakCount: breakCount - 1});
    }
  }

  
  render(){
    return (
    <div className="app-container">
      <div id="setting-container">
        <TimerSetting title="Work minutes" preset={this.state.sessionCount} addMin={this.addWorkMinutes} sustrMin={this.sustrWorkMinutes} />
        <TimerSetting title="Break minutes" preset={this.state.breakCount} addMin={this.addBreakMinutes} sustrMin={this.sustrBreakMinutes} />
      </div>
      <div id="timer-container">
        <h3 id="timer-label">{this.state.currentTimer}</h3>
        <h1 id="time-left">{this.toTime(this.state.clockCount)}</h1>
        <div className="buttons">
          <button id="start-stop"></button>
          <button id="reset"></button>
        </div>
      </div>
    </div>
  );
  }
}

export default App;
