import './About.css';
import React from "react";
import image from "./nicole.jpeg";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'



function About() {

    return (
        <div className='aboutMe' id='about'>
            {/* <div id="bg" >
                <h2>About me</h2>
                
                <p> My name is Nicole Sharrock-Hayes I am a Full Stack Developer student. Currently in the process of a career change. I'm hoping one day to work with a big company and continue to help thier company grow with my HTML and CSS skills.</p>
            </div> */}


            <div class="row justify-content-center">
                <div class="col-4">
                    <Col lg={4} md={6} sm={12}>
                        <img src={image} />
                    </Col>
                </div>
                {/* <div class="col-4">
                    <Col lg={8} md={6} sm={12}>
                        <h1>About</h1>
                        <p>
                            My name is Nicole Sharrock-Hayes I am a Full Stack Developer student.
                            Currently in the process of a career change. I'm hoping one day to work
                            with a big company and continue to help thier company grow with my HTML
                            and CSS skills.
                        </p>
                    </Col>
                </div> */}
            </div>


        </div >
    )
}

export default About;