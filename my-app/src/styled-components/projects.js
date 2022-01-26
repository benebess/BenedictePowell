import styled from 'styled-components'

export const Container = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Cutive+Mono&family=Press+Start+2P&display=swap');

    margin-top: 60px;

    h1 { 
        color: white;
        font-family: 'Press Start 2P', cursive;
        font-size: 20px;
        text-align: center;
    }

    h2 { 
        color: white;
        font-family: 'Cutive Mono', monospace;
        font-size: 20px;
        text-align: center;
    }

    p { 
        color: white;
        font-family: 'Cutive Mono', monospace;
        font-size: 10px;
    }

    a { 
        color: white;
        text-decoration: none;
        transition: all 500ms;
        font-size: 20px;
    }

    a:hover {
        font-size: 23px;
    }

    a:visited: {
        color: #42858C;
    }
`

export const DivOne = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Cutive+Mono&family=Press+Start+2P&display=swap');

    // MOBILE VIEW 

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #ed5e82;
    box-shadow: 5px 5px #9f3e56;
    margin: 20px;
    

    

`