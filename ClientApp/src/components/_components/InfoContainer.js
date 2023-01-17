import React, { Component } from "react";
import './InfoContainerStyle.css';

export class InfoContainer extends Component {
    render() {
        let infobio =
          "204 Beds (188 beds during the winter season beginning November 15 to March 15 only)Clientele: Single Males and Single Females; 10 beds for families with children 9 years or youngerLen [...]";
        let title = "Albuquerque Rescue Mission - Steelbridge";
        let Picturesrc = "https://www.homelessshelterdirectory.org/gallery/1444__txu.jpg";
        let Address = "525 2nd St SW Albuquerque, NM - 87102";
          return (
            <div className="container-info">
                <div className="info-header">
                <img className="img" src={Picturesrc} alt={title}c/>
                <h2>{title}</h2>
                </div>
                
                <div className="info-header">
                <a href={Address}>{Address}</a>
                <p>{infobio}</p>
                </div>
                <div className="info-header">
                    <button className="button">Call</button>
                    <button className="button">Location</button>
                    <button className="button">Message</button>
                    <button className="button">Profile</button>
                </div>
            </div>
        );
      }
}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               

export default InfoContainer;