import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import Shelters from "../_components/Shelters";
import { MapThing } from "../_components/Maps";

export class Home extends Component {
  static displayName = Home.name;
  render() {
    return (
      <div>
        <Row>
          <Col>
            <Container>
              <Shelters />
              <Shelters />
            </Container>
          </Col>
          <Col>
            <Container>
              {/* <MapThing /> */}
              {/* <div id="map" style="width: 50px; height: 50px"></div> */}
            </Container>
          </Col>
          <Col>
            <Container>
              <Shelters />
              <Shelters />
            </Container>
          </Col>
        </Row>
      </div>
    );
  }
}
const mapStyle = {
  container: {
    display: "flex",
    height: 400,
    maxWidth: 700,
    boxShadow: "0 0 4px 3px #cec7c759",
    alignItems: "center",
    padding: 10,
    margin: 10,
    borderRadius: 20,
    backgroundColor: "#93B5C6",
  },
};
