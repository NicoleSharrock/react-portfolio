import './About.css';
import React from "react";
import image from "./nicole.jpeg";

function About() {
    return (
        <div className='aboutMe'>
            <div>
                <h2>About me</h2>
                <img id="me" src={image} />
            </div>

        </div>
    )
}

export default About;