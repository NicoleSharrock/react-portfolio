import './About.css';
import React from "react";
import image from "./nicole.jpeg";


function About() {

    return (
        <div className='aboutMe'>
            <div id="bg" >
                <h2>About me</h2>
                <img id="me" src={image} />
                <p> My name is Nicole Sharrock-Hayes I am a Full Stack Developer student. Currently in the process of a career change. I'm hoping one day to work with a big company and continue to help thier company grow with my HTML and CSS skills.</p>
            </div>


        </div>
    )
}

export default About;