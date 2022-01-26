import React from 'react';
import { Div } from '../styled-components/about';
import profile from '../images/profile.png';


const About =() => {
    return (
        <Div>
            <img src={profile} alt="profile" width="500px"/>
            <h1>Benedicte Powell</h1>
            <p> Hello, my name is bene. I made a box, put ur soul in it. </p>
        </Div>
    )
}


export default About;