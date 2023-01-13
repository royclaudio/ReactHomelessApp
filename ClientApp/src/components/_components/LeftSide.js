import React, { Component } from 'react';

export class LeftSide extends Component {
    constructor(props) {
      super(props);
      this.state = { seconds: 0 };
    }
  
    tick() {
      this.setState(state => ({
        seconds: state.seconds + 1
      }));
    }
  
    componentDidMount() {
      this.interval = setInterval(() => this.tick(), 1000);
    }
  
    componentWillUnmount() {
      clearInterval(this.interval);
    }
  
    render() {
      return (
        <div style={{color:"black"}}>
          Seconds: {this.state.seconds}
        </div>
      );
    }
  }
  
  export default LeftSide;
