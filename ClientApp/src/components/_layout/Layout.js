import React, { Component } from 'react';
import { NavMenu } from './NavMenu';
import { NavFooter } from './NavFooter'
//3C4043
//FFEEEE
//ff7a66
//ffc172
const bodystyle = {
  backgroundColor: "#FFEEEE",
  height: 'calc(100vh - 90px)',
  // width: '100vw',
  margin: 0,
  padding: 10,
  textAlign: "center",
  color: "white",
  overflow: "auto",
};
export class Layout extends Component {
  static displayName = Layout.name;
  render() {
    return (
      <div>
        <NavMenu  className="sticky-top"/>
        <div style={bodystyle}>
          <div className="">
          {this.props.children}
          </div>
        </div>
        <NavFooter /> 
      </div>
    );
  }
}