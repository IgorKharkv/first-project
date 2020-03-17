import React, { Component } from 'react';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';

class NavigationBar extends Component {
  render(){
    return(
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">CinemaCafeteria</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#popcorn">Popcorn</Nav.Link>
            <Nav.Link href="#drinks">Drinks</Nav.Link>
            <NavDropdown title="More" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#snacks">Snacks</NavDropdown.Item>
              <NavDropdown.Item href="#icecream">Ice Cream</NavDropdown.Item>
              <NavDropdown.Item href="#specials">Specials</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#login">Login</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavigationBar;