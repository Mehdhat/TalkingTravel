import React from 'react';
import { Navbar, Nav, NavItem, NavLink, NavDropdown } from 'react-bootstrap';

function ResponsiveAppBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="#home">
        <img src="logo.png" alt="Logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#story">Story</Nav.Link>
          <Nav.Link href="#gallery">Gallery</Nav.Link>
          <Nav.Link href="#contact">Contact Us</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="#search">
            <i className="fa fa-search" />
          </Nav.Link>
          <Nav.Link href="#user">
            <i className="fa fa-user" />
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default ResponsiveAppBar;
