import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import Shelters from "../_components/Shelters";

export class Home extends Component {
  static displayName = Home.name;
  render() {
    return (
        <div style={homePage.wrapper}>
          <div style={homePage.gridItem}>
            <Shelters/>
          </div>
          <div style={homePage.gridItem}>
          <Shelters/>
          </div>
          <div style={homePage.gridItem}>
          <Shelters/>
          </div>
        </div>
    );
  }
}
const homePage = {
    wrapper: {
      display: "grid",
      gridTemplateColumns: "auto auto auto",
      gap:"10px",
      width: "auto",
      height: "auto",
    },
    gridItem: {
      backgroundColor: "black",
      height: "200px",
      color: "#ffffff",
      display: "grid",
      placeItems: "center",
      border: "1px solid #ffffff",
      }
};