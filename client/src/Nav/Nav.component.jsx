import React from 'react';
import './nav.styles.scss';

const Nav = () => {
    return(
        <ul>
            <li className="grow"><a href="#about">About</a></li>
            <li className="grow"><a href="#education">Education</a></li>
            <li className="grow"><a href="#projects">Projects</a></li>
            <li className="grow"><a href="#contact">Contact</a></li>
        </ul>
    );
}

export default Nav;