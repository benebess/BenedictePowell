import React from 'react';
import { Div } from '../styled-components/home';
import one from '../images/one.png';
import two from '../images/two.png';
import three from '../images/three.png';
import four from '../images/four.png';

const Home =() => {
    return (
        <Div>
            <div class="typewriter">
                <h1>Benedicte Powell</h1>
                <p>front-end web development</p>
            </div>
            <div id="cardWrapper" class="auto">
                <div id="card">
                    <img class="layer3" src={four} alt="back" data-depth="9" />
                    <img class="layer3" src={three} alt="middle2" data-depth="7" />
                    <img class="layer2" src={two} alt="middle1" data-depth="5" />
                    <img class="layer1" src={one} alt="front" data-depth="3" />
                    <div id="border">&nbsp;</div>
                </div>
            </div>
        </Div>
        
    )
}



export default Home;