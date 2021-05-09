import React from 'react';
import './nav.styles.scss';

const Nav = () => {
    return(
        <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    );
}

export default Nav;