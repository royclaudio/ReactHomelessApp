import React, { Component } from "react";
import { ButtonDropdown, ButtonGroup, Row } from "reactstrap";

export class Shelters extends Component {
  
  constructor(props) {
    super(props);
    this.state = { seconds: 0 };
  }
  tick() {
    this.setState((state) => ({
      seconds: state.seconds + 1,
    }));
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    
    let infobio =
      "204 Beds (188 beds during the winter season beginning November 15 to March 15 only)Clientele: Single Males and Single Females; 10 beds for families with children 9 years or youngerLen [...]";
    return (
      <div style={cardStyles.container}>
        <div style={cardStyles.Title}>
          Albuquerque Rescue Mission - Steelbridge
        </div>
        <span style={cardStyles.Picture}>
          <img
            src="https://www.homelessshelterdirectory.org/gallery/1444__txu.jpg"
            alt="Albuquerque Rescue Mission - Steelbridge"
            style={{ height: "200px", width: "200px", borderRadius: "400px/3" }}
          />
        </span>

        <div style={cardStyles.info}>{infobio.substring(1, 160)}</div>
        <a
          style={{ width: "200px", borderRadius: "400px/3" }}
          href="https://www.google.com?q=525+2nd+St+SW+Albuquerque+NM"
        >
          Address 525 2nd St SW Albuquerque, NM - 87102
          <div style={cardStyles.info}>Seconds: {this.state.seconds}</div>

        </a>
        <Row>
          <ButtonGroup>
            <button style={cardStyles.button}>Profile</button>
            <button style={cardStyles.button}>Location</button>
          </ButtonGroup>
          <ButtonGroup>
            <button style={cardStyles.button}>Call</button>
            <button style={cardStyles.button}>Message</button>
          </ButtonGroup>
        </Row>
      </div>
    );
  }
}
const cardStyles = {
  container: {
    display: "grid",
    gridTemplateColumns: "auto auto",
    height: 400,
    maxWidth: 700,
    boxShadow: "0 0 4px 3px #cec7c759",
    alignItems: "center",
    padding: 10,
    margin: 10,
    borderRadius: 20,
    backgroundColor: "#93B5C6",
  },
  Title: {
    gridColumnStart: 1,
    gridColumnEnd: 3,
    fontWeight: "bold",
    fontSize: 25,
    color: "black",
  },

  button: {
    gridColumnStart: 2,
    backgroundColor: "blue",
    color: "white",
    fontSize: "20px",
    padding: "10px",
    borderRadius: "5px",
    border: "2px solid white",
    height: 40,
    width: 120,
    margin: "5px 5px",
    justifyContent: "start",
    alignItems: "start",
    cursor: "pointer",
  },

  Picture: {
    display: "box",
    justifyContent: "start",
    margin: "0px -5px",
    alignItems: "start",
    color: "white",
    height: 200,
    borderRadius: "200px",
    padding: 10,
    roundedSize: 20,
  },
  info: {
    display: "flex",
    alignItems: "start",
    margin: "0px 0px 0px px",
    justifyContent: "start",
    color: "black",
    fontSize: 20,
  },
};
export default Shelters;
