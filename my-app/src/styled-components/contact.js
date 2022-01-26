import styled from 'styled-components'

export const DivOne = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Cutive+Mono&family=Press+Start+2P&display=swap');

    font-family: 'Cutive Mono', monospace;
    color: white;
    overflow: hidden; /* Ensures the content is not revealed until the animation */
    white-space: nowrap; /* Keeps the content on a single line */
    letter-spacing: .15em; /* Adjust as needed */
    animation: 
    typing 3.5s steps(40, end),
    blink-caret .75s step-end infinite;
    color: white;
    font-size: 15px;
    font-family: 'Cutive Mono', monospace;
    
      
      /* The typing effect */
      @keyframes typing {
        from { width: 0 }
        to { width: 100% }
      }
      
      /* The typewriter cursor effect */
      @keyframes blink-caret {
        from, to { border-color: transparent }
        50% { border-color: orange; }
      }
    
`

export const Container = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Cutive+Mono&family=Press+Start+2P&display=swap');

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #ed5e82;
    box-shadow: 5px 5px #9f3e56;
    margin: 200px 40px;

`

export const DivTwo = styled.div`

    a { 
        color: white;
        text-decoration: none;
        font-family: 'Cutive+Mono', monospace;
    }

    a:hover {
        
    }

`
