import React, { Component } from 'react';
import { Collapse, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavFooter.css';

export class NavFooter extends Component {
  render() {
    return (
      <footer className='footer-layout'>
        © Jan 2023 Built using React.js |  By Roy
      </footer>
    );
  }
}
