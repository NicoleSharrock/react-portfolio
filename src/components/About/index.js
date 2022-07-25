import './About.css';
import React from "react";
import Image from "./nicole.jpeg";
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Image from 'react-bootstrap/Image'



function About() {

    return (
        <div id="about" className='about-section'>
            <h1 className='about-title'>ABOUT</h1>
            <div className="cover">
                <img src={Image} alt="cover" />
            </div>
            <p>
                My name is Nicole Sharrock-Hayes I am a Full Stack Developer student.
                Currently in the process of a career change. I'm hoping one day to work
                with a big company and continue to help thier company grow with my HTML
                and CSS skills.
            </p>
        </div>
    );
}

export default About;