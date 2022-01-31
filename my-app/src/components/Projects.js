import React from "react";
import { DivOne, Container } from '../styled-components/projects';
import omnicoin1 from '../images/omnicoin1.png'
import omnicoin2 from '../images/omnicoin2.png'
import omnicoin3 from '../images/omnicoin3.png'


const Projects =() => {
    return (
        <Container>
            <DivOne>
            
                <h1>OmniCoin // Coder Academy Hackathon</h1>
                <h2><a href="https://omni-coin.herokuapp.com/">OmniCoin</a></h2>
                <div>
                    <img src={omnicoin1} alt="omnicoin1" width="300px"/>
                    <img src={omnicoin2} alt="omnicoin1" width="300px"/>
                    <img src={omnicoin3} alt="omnicoin1" width="300px"/>
                </div>
                <p>One of the great parts about studying at Coder Academy 
                    was getting to get to group up and do hackathons. 
                    Three classmates and I made OmniCoin: A Crypto information site
                    for beginners looking to learn about everything Crypto. 
                    I worked on the front-end of the website.</p>

            </DivOne>

            <DivOne>
                <h1>Try Not To Die // Terminal Application </h1>
                <h2>Choose Your Own Adventure Game</h2>
                <div>
                    
                </div>
                <p>For one of our assignments at Coder we were asked to make
                    a Terminal application. I chose to do a Choose Your Own Adventure
                    style game with asci images and lots of manholes!
                </p>
            
            </DivOne>

            <DivOne>
                <h1>Full Stack Website // Jumping For Joy</h1>
                <h2>subheading</h2>
                <p>info about project</p>
            
            </DivOne>

            <DivOne>
                <h1>Heading</h1>
                <h2>subheading</h2>
                <p>info about project</p>
            
            </DivOne>
        </Container>
    )
}

export default Projects;