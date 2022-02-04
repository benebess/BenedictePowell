import styled from 'styled-components'

export const Div = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Cutive+Mono&family=Press+Start+2P&display=swap');

position: absolute;
bottom: 0;
margin: 20px 20px;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
height: 50px;
border-radius: 20px;
width: 85%;
text-align: center;

p {
    font-family: 'Press Start 2P', cursive;
    margin: 5px;
    color: #ed5e82;
    font-size: 10px;
}

// desktop
@media(min-width: 1200px) {
    width: 97%;
}

`