import React, { Component, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import { Layout } from './components/_layout/Layout';
import './custom.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';


export default class App extends Component {
  static displayName = App.name;
 
  render() {
    return (
      <Layout>
        <Routes>
        
          {AppRoutes.map((route, index) => {
            const { element, ...rest } = route;
            return <Route key={index} {...rest} element={element} />;
          })}
        </Routes>
      </Layout>
    );
  }
}
