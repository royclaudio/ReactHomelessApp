import React, { Component } from "react";
import "./Map.css";
// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// import "leaflet/dist/leaflet.css";

const position = [51.505, -0.09];

export class MapThing extends Component {
  render() {
    return (
      <div id={"map"}>
        {/* <MapContainer
          center={[this.state.lat, this.state.lng]}
          zoom={this.state.zoom}
          style={{ width: "100%", height: "900px" }}
        >
          <div id="map" style="width: 50px; height: 50px"></div>
        </MapContainer> */}
      </div>
    );
  }
}
export default MapThing;
