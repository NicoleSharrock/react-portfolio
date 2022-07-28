import React from "react";
import roses from "./roses.png"
import bestsite from "./bestsite.png"
import codequiz from "./codequiz.png"
import notetaker from "./notetaker.png"
import password from "./password.png"
import workday from "./workday.png"


const Portfolio = () => {
    return (
        <div id="projects" className="work-container">
            <h1 className="project-heading">PROJECTS</h1>
            <div className="project-container">
                <div className="project-card">
                    <img src={roses} alt="project one" />
                    <h2 className="project-title">Roses-Are-Red</h2>
                    <div className="pro-details">
                        <div className="pro-btns">
                            <a href={"https://nicolesharrock.github.io/Roses-Are-Red/"} className="btn" rel="noopener noreferrer" target="_blank">
                                Site
                            </a>
                            <a href={"https://github.com/NicoleSharrock/Roses-Are-Red"} className="btn" rel="noopener noreferrer" target="_blank">
                                Github
                            </a>
                        </div>
                    </div>
                </div>
                <div className="project-card">
                    <img src={bestsite} alt="project two" />
                    <h2 className="project-title">Best-Site-No-Joke</h2>
                    <div className="pro-details">
                        <div className="pro-btns">
                            <a href={"https://hidden-tundra-81095.herokuapp.com/generate"} className="btn" rel="noopener noreferrer" target="_blank">
                                View
                            </a>
                            <a href={"https://github.com/NicoleSharrock/Best-Site-No-Joke"} className="btn" rel="noopener noreferrer" target="_blank">
                                Source
                            </a>
                        </div>
                    </div>
                </div>
                <div className="project-card">
                    <img src={codequiz} alt="project three" />
                    <h2 className="project-title">Finders-Keepers</h2>
                    <div className="pro-details">
                        <div className="pro-btns">
                            <a href={"https://morning-garden-68781.herokuapp.com/"} className="btn" rel="noopener noreferrer" target="_blank">
                                View
                            </a>
                            <a href={"https://github.com/NicoleSharrock/finders-keepers"} className="btn" rel="noopener noreferrer" target="_blank">
                                Source
                            </a>
                        </div>
                    </div>
                </div>
                <div className="project-card">
                    <img src={notetaker} alt="project one" />
                    <h2 className="project-title">Note Taker</h2>
                    <div className="pro-details">
                        <div className="pro-btns">
                            <a href={"https://quiet-earth-95705.herokuapp.com/"} className="btn" rel="noopener noreferrer" target="_blank">
                                Site
                            </a>
                            <a href={"https://github.com/NicoleSharrock/note-taker"} className="btn" rel="noopener noreferrer" target="_blank">
                                Github
                            </a>
                        </div>
                    </div>
                </div>
                <div className="project-card">
                    <img src={password} alt="project one" />
                    <h2 className="project-title">Password Generator</h2>
                    <div className="pro-details">
                        <div className="pro-btns">
                            <a href={"https://nicolesharrock.github.io/password-generator/"} className="btn" rel="noopener noreferrer" target="_blank">
                                Site
                            </a>
                            <a href={"https://github.com/NicoleSharrock/password-generator"} className="btn" rel="noopener noreferrer" target="_blank">
                                Github
                            </a>
                        </div>
                    </div>
                </div>
                <div className="project-card">
                    <img src={workday} alt="project one" />
                    <h2 className="project-title">Workday Scheduler</h2>
                    <div className="pro-details">
                        <div className="pro-btns">
                            <a href={"https://nicolesharrock.github.io/day-scheduler/"} className="btn" rel="noopener noreferrer" target="_blank">
                                Site
                            </a>
                            <a href={"https://github.com/NicoleSharrock/day-scheduler"} className="btn" rel="noopener noreferrer" target="_blank">
                                Github
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Portfolio
