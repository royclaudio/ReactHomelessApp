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
          <h1 className="titlestyle">Homeless Shelters</h1>
          <InfoContainer />
          <InfoContainer />
          <InfoContainer />
          <InfoContainer />
        </div>
        <div className="mainbodydisp">
          <h1 className="titlestyle">Community Services</h1>
          <InfoContainer />
          <InfoContainer />
          <InfoContainer />
          <InfoContainer />
          <InfoContainer />
          <InfoContainer />
          <InfoContainer />
          <InfoContainer />
          <InfoContainer />
          <InfoContainer />
          <InfoContainer />
          <InfoContainer />
          <InfoContainer />
          <InfoContainer />
          <InfoContainer />
          <InfoContainer />
          <InfoContainer />
          <InfoContainer />
          <InfoContainer />
          <InfoContainer />
          <InfoContainer />
          <InfoContainer />
          <InfoContainer />
          <InfoContainer />
        </div>
      </div>
    );
  }
}
