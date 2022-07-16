import React from "react";



function Nav() {
    return (
        <nav className="navbar navbar-expand-lg sticky-top" style={{ background: 'rgb(82, 57, 25)' }}>
            {/* <h1>Nicole Sharrock-Hayes</h1> */}
            <div className="links">
                <button>About Me</button>
                <button>Projects</button>
                <button>Resume</button>
                <button>Contacts</button>
            </div>
        </nav>
    );
}

export default Nav;

