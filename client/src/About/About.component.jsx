import React from 'react';
import './about.styles.scss';

import Profile from "../assets/img/profile.jpg";


const About = () => {
    return(
        <div className="about">
            <h1>ABOUT ME</h1>
            <div className="wrapper">
                <img src={ Profile } alt="profile" />

                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non ducimus amet ad voluptate corrupti magni sequi aut et, praesentium repellat reprehenderit labore iste laborum nihil quidem explicabo consectetur omnis eum.
                    <br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores doloribus rem adipisci nihil magnam? Dolorum a, atque, illum recusandae corrupti nisi ipsa laboriosam corporis magni quaerat, architecto doloribus consequuntur at!
                    <br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores doloribus rem adipisci nihil magnam? Dolorum a, atque, illum recusandae corrupti nisi ipsa laboriosam corporis magni quaerat, architecto doloribus consequuntur at!
                </p>
            </div>
            <div>
                <button>Find out more!</button>
            </div>
            
        </div>
    );
}

export default About;