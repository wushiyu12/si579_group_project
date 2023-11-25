// import 'bootstrap/dist/css/bootstrap.min.css';
// import React from 'react';
// import Button from 'react-bootstrap/Button';

// The nav bar need to take props
// and set someval in it parent components
// but it still not done yet

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link , useLocation} from "react-router-dom";

const NavBar = (props) => {
  const location = useLocation();

    const isActive = (pathname) => location.pathname === pathname;

    const linkStyle = (pathname) => ({
        fontWeight: 'bold',
        color: '#1565c0',
        textDecorationLine: isActive(pathname) ? 'underline' : 'none'
    });
    return (
        // <Navbar expand="lg" className="bg-body-tertiary">
        <Navbar expand="lg" className=" shadow-sm" >
          <Container>
            {/* <Navbar.Brand > */}
            {/* <Navbar.Brand className="font-weight-bold text-primary">
              SI 579 Team Project</Navbar.Brand> */}
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            {/* <Navbar.Collapse id="basic-navbar-nav"> */}
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-around">
              {/* <Nav className="me-auto"> */}
              <Nav className="ml-auto">
                {/* <Nav.Link href="#home">
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
                </Nav.Link> */}
                <Nav.Item className="mx-2">
                  <Link to="/" className="nav-link" style={linkStyle('/')}>
                    Home
                  </Link>
                </Nav.Item>
                <Nav.Item className="mx-2">
                  <Link to="/listView" className="nav-link" style={linkStyle('/listView')}>
                    List View
                  </Link>
                </Nav.Item>
                <Nav.Item className="mx-2">
                  <Link to="/calendarView" className="nav-link" style={linkStyle('/calendarView')}>
                    Calendar View
                  </Link>
                </Nav.Item>
                <Nav.Item className="mx-2">
                  <Link to="/mapView" className="nav-link" style={linkStyle('/mapView')}>
                    Map View
                  </Link>
                </Nav.Item>
                
              </Nav>
            </Navbar.Collapse>
            
          </Container>
        </Navbar>
      );
};


export default NavBar;