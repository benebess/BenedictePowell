import React from 'react';
import { Div } from '../styled-components/about';
import profile from '../images/profile.png';


const About =() => {
    return (
        <Div>
            <img src={profile} alt="profile" width="500px"/>
            <h1>Benedicte Powell</h1>
            <p> 
                Hello, my name is Benedicte, or Bene for short.<br></br>
                I am a front-end web developer and designer. <br></br>
                I like to make things. Let me make you something! <br></br>
            </p>
        </Div>
    )
}


export default About;