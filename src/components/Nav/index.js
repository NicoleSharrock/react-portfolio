import React from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


function Nav() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg sticky-top" style={{ background: 'rgb(82, 57, 25)' }}>
                <Container>
                    <Navbar.Brand href="#about">
                        <img
                            src="/assets/images/aboutme.png"
                            width="30"
                            height="30"
                            className="d-inline-block align-top name-display"
                            alt="About me logo"
                        />

                    </Navbar.Brand>
                    <br />
                    <Navbar.Brand href="#projects">
                        <img
                            src="/assets/images/projects.png"
                            width="30"
                            height="30"
                            className="d-inline-block align-top name-display"
                            alt="Projects logo"
                        />
                    </Navbar.Brand>
                    <br />
                    <Navbar.Brand href="#contact">
                        <img
                            src="/assets/images/contact.png"
                            width="30"
                            height="30"
                            className="d-inline-block align-top name-display"
                            alt="Contact logo"
                        />
                    </Navbar.Brand>
                    <br />
                    <Navbar.Brand href="#resume">
                        <a className="resume-link"
                            href="https://docs.google.com/document/d/1kwfJ5fuK71a4uEh4Vra1JaDffX473ljvpSsKuuqoiIU/edit?usp=sharing">
                            <img
                                src="/assets/images/resume.png"
                                width="30"
                                height="30"
                                className="d-inline-block align-top name-display"
                                alt="Resume logo"
                            />
                        </a>
                    </Navbar.Brand>
                </Container>
            </nav>
        </div >
    );
}

export default Nav;

