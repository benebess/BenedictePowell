import React from "react";
import { DivOne, Container } from '../styled-components/projects';
import Poster1 from '../images/Poster1.png'
import Poster2 from '../images/Poster2.png'
import Poster3 from '../images/Poster3.jpg'
import Poster4 from '../images/Poster4.png'
import Poster5  from '../images/Poster5.png'
import Poster6  from '../images/Poster6.png'


const Projects =() => {
    return (
        <Container>
            <DivOne>
                <h1>Gig/band Poster Design</h1>
                <h2></h2>
                <p>
                    On the side, I sometimes make posters!<br></br>
                    @byebyebonepile on insta
                </p>
                <div class="container">
                <div>
                    <img src={Poster2} alt="goat" width="300px"/>
                    <img src={Poster5} alt="Rosa" width="300px"/>
                    
                </div>
                <div>
                    <img src={Poster1} alt="shamin" width="300px"/>
                    <img src={Poster3} alt="Jazz" width="300px"/>
                </div>
                <div>
                    <img src={Poster6} alt="Spook" width="300px"/>
                    <img src={Poster4} alt="RevGroove" width="300px"/>
                </div>
                </div>
            </DivOne>
            <DivOne>
            
                <h1>OmniCoin // Coder Academy Hackathon</h1>
                <h2><a href="https://omni-coin.herokuapp.com/">OmniCoin</a></h2>
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

            
        </Container>
    )
}

export default Projects;