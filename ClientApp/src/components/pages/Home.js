import React, { Component } from "react";
import InfoContainer from "../infoconatiner/InfoContainer";
import "./HomeStyle.css";
import Leafletmap from "../Leafletmap";

export class Home extends Component {
  static displayName = Home.name;
  render() {
    return (
      <div className="home-style">
        <div className="card-left">
          <InfoContainer />
          <InfoContainer />
          <InfoContainer />
          <InfoContainer />
        </div>
        <div className="space">
          <Leafletmap />
        </div>
      </div>
    );
  }
}
