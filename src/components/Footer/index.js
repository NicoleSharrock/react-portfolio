import React from "react";

function Footer() {
    return (
        <div className="foot">
            <a className="social-link"
                href="https://github.com/NicoleSharrock">
                <img
                    src="/assets/images/github.png"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    alt="About me logo"
                />
            </a>
            <br />
            <a className="social-link"
                href="https://www.linkedin.com/feed/?trk=onboarding-landing">
                <img
                    src="/assets/images/linkedin.png"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    alt="Projects logo"
                />
            </a>
            <br />
            <a className="social-link"
                href="https://stackoverflow.com/users/18598661/nicole-sharrock">
                <img
                    src="/assets/images/stack-overflow.png"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    alt="Contact logo"
                />
            </a>
        </div>
    );
}

export default Footer;

