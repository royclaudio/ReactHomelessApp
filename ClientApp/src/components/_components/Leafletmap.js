import React, { Component } from "react";
import { MapContainer, TileLayer  } from 'https://cdn.esm.sh/react-leaflet';
        const position = [51.505, -0.09]

export class LeafletMap extends Component {
    
    render() {
        return (
            <div>
                
        {/* <MapContainer
          center={{ lat: 51.505, lng: -0.09 }}
          zoom={13}
          scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </MapContainer> */}
        </div>
      );
    }
}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               

export default LeafletMap;