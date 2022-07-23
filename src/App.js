import React from 'react';
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props);
    
  }
  render(){
    return (
    <div className="app-container">
      <div id="setting-container">
        <TimerSetting />
        <TimerSetting />
      </div>
      <div id="timer-container">
        
      </div>
    </div>
  );
  }
}

export default App;
