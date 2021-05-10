import React from 'react';
import './about.styles.scss';


const About = () => {
    return(
        <div className="about">
            <h1>ABOUT ME</h1>
            <img src={require('../assets/img/profile.jpg')} alt="profile" />
        </div>
    );
}

export default About;