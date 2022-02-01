import styled from 'styled-components'

export const Div = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Cutive+Mono&family=Press+Start+2P&display=swap');

    // MOBILE 
    
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
    color: #42858C;
    font-family: 'Cutive Mono', monospace;
    font-size: 15px;

    // desktop
    @media(min-width: 1200px) {

        position: relative;
        margin: 0;
        width: 100%;
        height: auto;
        font-size: 20px;
        text-align: center;
        color: #42858C;
        font-family: 'Cutive Mono', monospace;
        border-radius: 0;
        padding: 20px;
        margin-bottom: 20px;    
    }

`