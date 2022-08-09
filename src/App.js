import React from 'react';
import './App.css';
import TimerSetting from './components/TimerSetting';
import {BsFillPlayFill, BsFillPauseFill, BsLinkedin, BsGithub} from 'react-icons/bs';
import {VscDebugRestart} from 'react-icons/vsc';
import {SiCodepen} from 'react-icons/si';

const audio= document.getElementById("beep");

class App extends React.Component{
  constructor(props){
    super(props);
    this.loop=undefined;
    this.state={
      breakCount: 5,
      sessionCount: 25,
      currentTimer: "Session",
      clockCount: 25 * 60,
      isPlaying: false,
      loop: undefined
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
    const {sessionCount, clockCount}= this.state;
    if(sessionCount < 60){
      this.setState({sessionCount: sessionCount + 1});
      if(this.state.currentTimer==="Session"){
        this.setState({clockCount: clockCount + 60});
      }
    }
  }

  sustrWorkMinutes=()=>{
    const {sessionCount, clockCount}= this.state;
    if(sessionCount > 1){
      this.setState({sessionCount: sessionCount -1});
      if(this.state.currentTimer==="Session"){
        this.setState({clockCount: clockCount - 60});
      }
    }
  }

  addBreakMinutes=()=>{
    const {breakCount, clockCount}= this.state;
    if(breakCount < 60){
      this.setState({breakCount: breakCount + 1});
      if(this.state.currentTimer==="Break"){
        this.setState({clockCount: clockCount + 60});
      }
    }
  }

  sustrBreakMinutes=()=>{
    const {breakCount, clockCount}= this.state;
    if(breakCount > 1){
      this.setState({breakCount: breakCount - 1});
      if(this.state.currentTimer==="Break"){
        this.setState({clockCount: clockCount - 60});
      }
    }
  }

  handlePlayPause=()=>{
    const {isPlaying}= this.state;
    if(isPlaying){
      clearInterval(this.loop);
      this.setState({isPlaying: false});
    }else{
      this.setState({isPlaying: true});
      this.loop= setInterval(()=>{
        const {clockCount, currentTimer, breakCount, sessionCount}= this.state;
        if(clockCount=== 0){
          this.setState({currentTimer: (currentTimer==="Session") ? "Break" : "Session",
            clockCount: (currentTimer==="Session") ? (breakCount * 60) : (sessionCount * 60)});
          audio.play();
        }else{
          this.setState({clockCount: clockCount - 1});
        }
      }, 1000);
    }
  }

  handleReset=()=>{
    this.setState({
      clockCount: 25 * 60,
      currentTimer: "Session",
      breakCount: 5,
      sessionCount: 25,
      isPlaying: false});
    clearInterval(this.loop);
    audio.pause();
    audio.currentTime=0;
  }

  componentWillUnmount(){
    clearInterval(this.loop);
  }
  
  render(){
    return (
      <div id="page">
      <div className="app-container">
        <div id="setting-container">
          <TimerSetting title="Work minutes" preset={this.state.sessionCount} addMin={this.addWorkMinutes} sustrMin={this.sustrWorkMinutes} />
          <TimerSetting title="Break minutes" preset={this.state.breakCount} addMin={this.addBreakMinutes} sustrMin={this.sustrBreakMinutes} />
        </div>
        <div id="timer-container">
          <h3 id="timer-label">{this.state.currentTimer}</h3>
          <h1 id="time-left">{this.toTime(this.state.clockCount)}</h1>
          <div className="buttons">
            <button id="start-stop" onClick={this.handlePlayPause}><BsFillPlayFill /><BsFillPauseFill /></button>
            <button id="reset" onClick={this.handleReset} ><VscDebugRestart /></button>
          </div>
        </div>
      </div>
        <footer>
          <hr/>
          <p>Code by Arturo Vidal</p>
          <p>Contact:</p>
          <div id="contacts">
             <a className="contact-link" target="_blank" href="https://codepen.io/arturo_vidal"><SiCodepen /> Code Pen</a>
             <a className="contact-link" target="_blank" href="https://www.linkedin.com/in/garturovidal/"><BsLinkedin /> Linkedin</a>
             <a className="contact-link" target="_blank" href="https://github.com/arturo-vidal"><BsGithub /> Github</a>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
