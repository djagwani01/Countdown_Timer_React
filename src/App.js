import React from 'react';
import './App.css';
import ClockInput from './TimerComponents/ClockInput';
import Clock from './TimerComponents/Clock';
import ClockButton from './TimerComponents/ClockButton'

class App extends React.Component{

  constructor(props){
    super(props)
    this.state={
      seconds: '00',  //for seconds
      minutes: '00'     //for minutes
    };

    this.remainingSeconds = null;
    this.handleInterval = null;
  }

  onHandleChange = (e) => {
    e.preventDefault()
    let minutes = this.state.minutes
    minutes = e.target.value===""? '00': e.target.value

    this.setState({
      minutes
    })
  }

  tick = () => {
      let min = Math.floor(this.remainingSeconds / 60),
          sec = this.remainingSeconds - (min * 60);
      this.setState({
        minutes: min,
        seconds: sec
      })
      if (sec < 10) {
        this.setState({
          seconds: "0" + this.state.seconds,
        })
      }
      if (min < 10) {
      this.setState({
        value: "0" + min,
       })
      }
      if (min === 0 & sec === 0) {
      clearInterval(this.handleInterval);
      }
      this.remainingSeconds--
  }

  startCountDown = (e) => {
    e.preventDefault()
    this.handleInterval = setInterval(this.tick, 1000/2);
    let time = this.state.minutes;
    this.remainingSeconds = time * 60;
    }

  stopCountDown = (e) => {
    e.preventDefault()
    clearInterval(this.handleInterval);
    this.setState({
      minutes: '00',
      seconds: '00'
    })
  }


  render(){
    return (
      <div className="App">
          <ClockInput 
          minutes={this.state.minutes}
          onHandleChange={this.onHandleChange} />
          <Clock
          minutes={this.state.minutes}
          seconds={this.state.seconds} />
         <ClockButton
         startCountDown = {this.startCountDown}
         stopCountDown = {this.stopCountDown}/>
      </div>
    );
  }
}

export default App;
