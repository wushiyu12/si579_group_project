// import 'bootstrap/dist/css/bootstrap.min.css';
// import React from 'react';
// import Button from 'react-bootstrap/Button';

// The nav bar need to take props
// and set someval in it parent components
// but it still not done yet

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";

const NavBar = (props) => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand >SI 579 Team Project</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">
                  <Link to="/">Home</Link>
                </Nav.Link>
                <Nav.Link href="#link">
                  <Link to="/listView">List View</Link>
                </Nav.Link>
                <Nav.Link href="#link">
                  <Link to="/mapView">Map View</Link>
                </Nav.Link>
                <Nav.Link href="#link">
                  <Link to="/calendarView">Calendar View</Link>
                </Nav.Link>
                
              </Nav>
            </Navbar.Collapse>
            
          </Container>
        </Navbar>
      );
};


export default NavBar;