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
      
    }
  }
  render(){
    return (
    <div className="app-container">
      <div id="setting-container">
        <TimerSetting title="Work minutes" preset={this.state.sessionCount} />
        <TimerSetting title="Break minutes" preset={this.state.breakCount} />
      </div>
      <div id="timer-container">
        <h3 id="timer-label">{this.state.currentTimer}</h3>
        <h1 id="time-left">00:00</h1>
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
