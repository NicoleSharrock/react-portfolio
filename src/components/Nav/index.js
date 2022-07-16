import React from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';




function Nav() {
    return (
        <nav className="navbar navbar-expand-lg sticky-top" style={{ background: 'rgb(82, 57, 25)' }}>
            <Container>
                <Navbar.Brand href="#about">
                    <img
                        src="/assets/images/aboutme.png"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt="About me logo"
                    />
                </Navbar.Brand>
                <br />
                <Navbar.Brand href="#projects">
                    <img
                        src="/assets/images/projects.png"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt="Projects logo"
                    />
                </Navbar.Brand>
                <br />
                <Navbar.Brand href="#resume">
                    <img
                        src="/assets/images/resume.png"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt="Resume logo"
                    />
                </Navbar.Brand>
                <br />
                <Navbar.Brand href="#contact">
                    <img
                        src="/assets/images/contact.png"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt="Contact logo"
                    />
                </Navbar.Brand>
            </Container>
        </nav>
    );
}

export default Nav;

