import React, { Component } from "react";
import InfoContainer from "../_components/InfoContainer";
import './HomeStyle.css';
import Leafletmap from "../_components/Leafletmap";

export class Home extends Component {
  static displayName = Home.name;
  render() {
    return (
        <div className="grid-home">
          <div className="card-left">
          <InfoContainer/>    
          <InfoContainer/>   
          <InfoContainer/>   
          <InfoContainer/>   
          <InfoContainer/>   
          </div>
          <div className="card-right">
          </div>
        </div>
    );
  }
}