import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Button from 'react-bootstrap/Button';

const NavBar = () => {
    return (
        <>
            <nav className="navbar navbar-light" style={{ backgroundColor: '#e3f2fd' }}>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Button className="nav-link btn">Link</Button>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
};


export default NavBar;