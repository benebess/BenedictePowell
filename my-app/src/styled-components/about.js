import styled from 'styled-components';

export const Div = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Cutive+Mono&family=Press+Start+2P&display=swap');


    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 50px;

    img { 
        width: 300px;
        border-radius: 90%;
        
    }

    h1 { 
        color: #49B1F2;
        font-family: 'Press Start 2P', cursive;
        text-align: center;
        
    }

    p { 
        color: #49B1F2;
        font-family: 'Cutive Mono', monospace;
        text-align: center;
        padding: 20px;
    }

    // desktop
    @media(min-width: 1200px) {


        div {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            margin-top: 50px;
        }

        img {
            width: 400px;
        }

        h1 {
            font-size: 50px;
            margin-top: 50px;
        }

        p {
            font-size: 20px;
            margin-bottom: 200px;
        }

    }

`