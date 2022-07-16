import './About.css';
import React from "react";
import image from "./nicole.jpeg";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



function About() {

    return (
        <div className='aboutMe' id='about'>
            {/* <div id="bg" >
                <h2>About me</h2>
                
                <p> My name is Nicole Sharrock-Hayes I am a Full Stack Developer student. Currently in the process of a career change. I'm hoping one day to work with a big company and continue to help thier company grow with my HTML and CSS skills.</p>
            </div> */}
            <Container className="bg-tana text-white rounded p-0">
                <Row>
                    <Col lg={4} md={6} sm={12}>
                        <img id="me" src={image} />
                    </Col>
                    <Col lg={8} md={6} sm={12}>
                        <h1 className="text-info">About</h1>
                        <p>
                            My name is Nicole Sharrock-Hayes I am a Full Stack Developer student.
                            Currently in the process of a career change. I'm hoping one day to work
                            with a big company and continue to help thier company grow with my HTML
                            and CSS skills.
                        </p>


                    </Col>
                </Row>
            </Container>


        </div>
    )
}

export default About;