import React from 'react';
import { DivOne, DivTwo, Container } from '../styled-components/contact';

const Contact =() => {
    return (
        <Container>
            <DivOne class="typewriter">
                <h2>...hello?</h2>
            </DivOne>
            <DivTwo>
                <a href="https://www.linkedin.com/in/benedicte-powell-3789b220b/">LinkedIn</a>
                <br></br>
                <a href="mailto:b3n3b3ss@gmail.com">email me</a>  
            </DivTwo>
        </Container>
    )
}


export default Contact;