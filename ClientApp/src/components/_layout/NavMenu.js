import React, { Component } from 'react';
import { Collapse, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink, DropdownToggle, DropdownMenu, DropdownItem, UncontrolledDropdown } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';

export class NavMenu extends Component {
  static displayName = NavMenu.name;

  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
//EBD8C3
//d31145
  render() {
    return (
      <header >
        <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-0 sticky-top" container light style={{ backgroundColor: "#EBD8C3" }}>
          <NavbarBrand tag={Link} to="/">New Mexico's Homeless Shelter Directory</NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!this.state.collapsed} navbar>
            <ul className="navbar-nav flex-grow">
              <NavItem>
                <NavLink tag={Link} className="text-dark" to="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} className="text-dark" to="/counter">Find Shelters</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} className="text-dark" to="/fetch-data"> Administrators</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Resources
                </DropdownToggle>
                <DropdownMenu right>
                <DropdownItem>NM |&nbsp;
                    <a href='https://www.cabq.gov/family/services/homeless-services'> Resources </a>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>US |&nbsp;
                    <a href='https://www.rentassistance.us'> Rent Assistance</a>
                  </DropdownItem>
                  <DropdownItem>US |&nbsp;
                    <a href='https://www.publichousing.com'> Public Housing</a>
                  </DropdownItem>
                 
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <NavLink tag={Link} className="text-dark" to="/fetch-data"> Drawings & Animations</NavLink>
              </NavItem>

            </ul>
          </Collapse>
        </Navbar>
      </header>
    );
  }
}
