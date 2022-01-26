import styled from 'styled-components'

export const Div = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Cutive+Mono&family=Press+Start+2P&display=swap');

    // MOBILE

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: coloumn; 
    margin-top: 200px;
    text-align: center;
    

    h1 { 
        color: #8EBF6B;
        font-size: 20px;
        font-family: 'Press Start 2P', cursive;
        text-align: center;
    }
    .typewriter p {
        overflow: hidden; /* Ensures the content is not revealed until the animation */
        border-right: .12em solid #8EBF6B; /* The typwriter cursor */
        white-space: nowrap; /* Keeps the content on a single line */
        margin: 0 auto; /* Gives that scrolling effect as the typing happens */
        letter-spacing: .15em; /* Adjust as needed */
        animation: 
          typing 3.5s steps(40, end),
          blink-caret .75s step-end infinite;
        color: #8EBF6B;
        font-size: 15px;
        font-family: 'Cutive Mono', monospace;
      }
      
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