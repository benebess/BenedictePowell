import styled from 'styled-components'

export const Div = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Cutive+Mono&family=Press+Start+2P&display=swap');

    // MOBILE

  
    align-items: center;
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
        border-right: .12em solid #000000; /* The typwriter cursor */
        white-space: nowrap; /* Keeps the content on a single line */
        margin: 0 auto; /* Gives that scrolling effect as the typing happens */
        letter-spacing: .15em; /* Adjust as needed */
        animation: 
          typing 3.5s steps(40, end),
          blink-caret .75s step-end infinite;
        color: #8EBF6B;
        font-size: 15px;
        font-family: 'Cutive Mono', monospace;
        z-index: 6;
      }

      .typewriter h1 {
        z-index: 6;
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

      // desktop
    @media(min-width: 1200px) {



        .typewriter h1 {
          font-size: 50px;
          position: sticky; /*(recomended)*/
          top: 0px;
          text-align: center;
          text-shadow: -1px 0 black, 0 4px black, 1px 0 black, 0 -1px black;
        }

        .typewriter p {
          font-size: 30px;
          position: sticky; /*(recomended)*/
          border-right: .0em solid #000000; /* The typwriter cursor */
          top: 0px;
          text-align: center;
          text-shadow: -1px 0 black, 0 2px black, 1px 0 black, 0 -1px black;
        }



    
        /* these animations are hard-coded to demonstrate the effect - not prtable in the slightest! */
    @-webkit-keyframes rotate-card-base {
      0% {
        transform: perspective(550px) rotateX(0deg) rotateY(0deg);
      }
      10% {
        transform: perspective(550px) rotateX(0deg) rotateY(0deg);
      }
      30% {
        transform: perspective(550px) rotateX(20deg) rotateY(-20deg);
      }
      50% {
        transform: perspective(550px) rotateX(20deg) rotateY(20deg);
      }
      70% {
        transform: perspective(550px) rotateX(-20deg) rotateY(20deg);
      }
      90% {
        transform: perspective(550px) rotateX(-20deg) rotateY(-20deg);
      }
      100% {
        transform: perspective(550px) rotateX(0deg) rotateY(0deg);
      }
    }
    @-moz-keyframes rotate-card-base {
      0% {
        transform: perspective(550px) rotateX(0deg) rotateY(0deg);
      }
      10% {
        transform: perspective(550px) rotateX(0deg) rotateY(0deg);
      }
      30% {
        transform: perspective(550px) rotateX(20deg) rotateY(-20deg);
      }
      50% {
        transform: perspective(550px) rotateX(20deg) rotateY(20deg);
      }
      70% {
        transform: perspective(550px) rotateX(-20deg) rotateY(20deg);
      }
      90% {
        transform: perspective(550px) rotateX(-20deg) rotateY(-20deg);
      }
      100% {
        transform: perspective(550px) rotateX(0deg) rotateY(0deg);
      }
    }
    @-o-keyframes rotate-card-base {
      0% {
        transform: perspective(550px) rotateX(0deg) rotateY(0deg);
      }
      10% {
        transform: perspective(550px) rotateX(0deg) rotateY(0deg);
      }
      30% {
        transform: perspective(550px) rotateX(20deg) rotateY(-20deg);
      }
      50% {
        transform: perspective(550px) rotateX(20deg) rotateY(20deg);
      }
      70% {
        transform: perspective(550px) rotateX(-20deg) rotateY(20deg);
      }
      90% {
        transform: perspective(550px) rotateX(-20deg) rotateY(-20deg);
      }
      100% {
        transform: perspective(550px) rotateX(0deg) rotateY(0deg);
      }
    }
    @keyframes rotate-card-base {
      0% {
        transform: perspective(550px) rotateX(0deg) rotateY(0deg);
      }
      10% {
        transform: perspective(550px) rotateX(0deg) rotateY(0deg);
      }
      30% {
        transform: perspective(550px) rotateX(20deg) rotateY(-20deg);
      }
      50% {
        transform: perspective(550px) rotateX(20deg) rotateY(20deg);
      }
      70% {
        transform: perspective(550px) rotateX(-20deg) rotateY(20deg);
      }
      90% {
        transform: perspective(550px) rotateX(-20deg) rotateY(-20deg);
      }
      100% {
        transform: perspective(550px) rotateX(0deg) rotateY(0deg);
      }
    }
    @-webkit-keyframes rotate-trees {
      0% {
        transform: perspective(550px) translateZ(90px);
        left: 0%;
        top: 0%;
      }
      10% {
        transform: perspective(550px) translateZ(90px);
        left: 0%;
        top: 0%;
      }
      30% {
        transform: perspective(550px) translateZ(90px);
        left: 12%;
        top: 12%;
      }
      50% {
        transform: perspective(550px) translateZ(90px);
        left: -12%;
        top: 12%;
      }
      70% {
        transform: perspective(550px) translateZ(90px);
        left: -12%;
        top: -12%;
      }
      90% {
        transform: perspective(550px) translateZ(90px);
        left: 12%;
        top: -12%;
      }
      100% {
        transform: perspective(550px) translateZ(90px);
        left: 0%;
        top: 0%;
      }
    }
    @-moz-keyframes rotate-trees {
      0% {
        transform: perspective(550px) translateZ(90px);
        left: 0%;
        top: 0%;
      }
      10% {
        transform: perspective(550px) translateZ(90px);
        left: 0%;
        top: 0%;
      }
      30% {
        transform: perspective(550px) translateZ(90px);
        left: 12%;
        top: 12%;
      }
      50% {
        transform: perspective(550px) translateZ(90px);
        left: -12%;
        top: 12%;
      }
      70% {
        transform: perspective(550px) translateZ(90px);
        left: -12%;
        top: -12%;
      }
      90% {
        transform: perspective(550px) translateZ(90px);
        left: 12%;
        top: -12%;
      }
      100% {
        transform: perspective(550px) translateZ(90px);
        left: 0%;
        top: 0%;
      }
    }
    @-o-keyframes rotate-trees {
      0% {
        transform: perspective(550px) translateZ(90px);
        left: 0%;
        top: 0%;
      }
      10% {
        transform: perspective(550px) translateZ(90px);
        left: 0%;
        top: 0%;
      }
      30% {
        transform: perspective(550px) translateZ(90px);
        left: 12%;
        top: 12%;
      }
      50% {
        transform: perspective(550px) translateZ(90px);
        left: -12%;
        top: 12%;
      }
      70% {
        transform: perspective(550px) translateZ(90px);
        left: -12%;
        top: -12%;
      }
      90% {
        transform: perspective(550px) translateZ(90px);
        left: 12%;
        top: -12%;
      }
      100% {
        transform: perspective(550px) translateZ(90px);
        left: 0%;
        top: 0%;
      }
    }
    @keyframes rotate-trees {
      0% {
        transform: perspective(550px) translateZ(90px);
        left: 0%;
        top: 0%;
      }
      10% {
        transform: perspective(550px) translateZ(90px);
        left: 0%;
        top: 0%;
      }
      30% {
        transform: perspective(550px) translateZ(90px);
        left: 12%;
        top: 12%;
      }
      50% {
        transform: perspective(550px) translateZ(90px);
        left: -12%;
        top: 12%;
      }
      70% {
        transform: perspective(550px) translateZ(90px);
        left: -12%;
        top: -12%;
      }
      90% {
        transform: perspective(550px) translateZ(90px);
        left: 12%;
        top: -12%;
      }
      100% {
        transform: perspective(550px) translateZ(90px);
        left: 0%;
        top: 0%;
      }
    }
    @-webkit-keyframes rotate-gruffalo-body {
      0% {
        transform: perspective(550px) translateZ(60px);
        left: 0%;
        top: 0%;
      }
      10% {
        transform: perspective(550px) translateZ(60px);
        left: 0%;
        top: 0%;
      }
      30% {
        transform: perspective(550px) translateZ(60px);
        left: 8%;
        top: 8%;
      }
      50% {
        transform: perspective(550px) translateZ(60px);
        left: -8%;
        top: 8%;
      }
      70% {
        transform: perspective(550px) translateZ(60px);
        left: -8%;
        top: -8%;
      }
      90% {
        transform: perspective(550px) translateZ(60px);
        left: 8%;
        top: -8%;
      }
      100% {
        transform: perspective(550px) translateZ(60px);
        left: 0%;
        top: 0%;
      }
    }
    @-moz-keyframes rotate-gruffalo-body {
      0% {
        transform: perspective(550px) translateZ(60px);
        left: 0%;
        top: 0%;
      }
      10% {
        transform: perspective(550px) translateZ(60px);
        left: 0%;
        top: 0%;
      }
      30% {
        transform: perspective(550px) translateZ(60px);
        left: 8%;
        top: 8%;
      }
      50% {
        transform: perspective(550px) translateZ(60px);
        left: -8%;
        top: 8%;
      }
      70% {
        transform: perspective(550px) translateZ(60px);
        left: -8%;
        top: -8%;
      }
      90% {
        transform: perspective(550px) translateZ(60px);
        left: 8%;
        top: -8%;
      }
      100% {
        transform: perspective(550px) translateZ(60px);
        left: 0%;
        top: 0%;
      }
    }
    @-o-keyframes rotate-gruffalo-body {
      0% {
        transform: perspective(550px) translateZ(60px);
        left: 0%;
        top: 0%;
      }
      10% {
        transform: perspective(550px) translateZ(60px);
        left: 0%;
        top: 0%;
      }
      30% {
        transform: perspective(550px) translateZ(60px);
        left: 8%;
        top: 8%;
      }
      50% {
        transform: perspective(550px) translateZ(60px);
        left: -8%;
        top: 8%;
      }
      70% {
        transform: perspective(550px) translateZ(60px);
        left: -8%;
        top: -8%;
      }
      90% {
        transform: perspective(550px) translateZ(60px);
        left: 8%;
        top: -8%;
      }
      100% {
        transform: perspective(550px) translateZ(60px);
        left: 0%;
        top: 0%;
      }
    }
    @keyframes rotate-gruffalo-body {
      0% {
        transform: perspective(550px) translateZ(60px);
        left: 0%;
        top: 0%;
      }
      10% {
        transform: perspective(550px) translateZ(60px);
        left: 0%;
        top: 0%;
      }
      30% {
        transform: perspective(550px) translateZ(60px);
        left: 8%;
        top: 8%;
      }
      50% {
        transform: perspective(550px) translateZ(60px);
        left: -8%;
        top: 8%;
      }
      70% {
        transform: perspective(550px) translateZ(60px);
        left: -8%;
        top: -8%;
      }
      90% {
        transform: perspective(550px) translateZ(60px);
        left: 8%;
        top: -8%;
      }
      100% {
        transform: perspective(550px) translateZ(60px);
        left: 0%;
        top: 0%;
      }
    }
    @-webkit-keyframes rotate-mist {
      0% {
        transform: perspective(550px) translateZ(43px);
        left: 0%;
        top: 0%;
      }
      10% {
        transform: perspective(550px) translateZ(43px);
        left: 0%;
        top: 0%;
      }
      30% {
        transform: perspective(550px) translateZ(43px);
        left: 6%;
        top: 6%;
      }
      50% {
        transform: perspective(550px) translateZ(43px);
        left: -6%;
        top: 6%;
      }
      70% {
        transform: perspective(550px) translateZ(43px);
        left: -6%;
        top: -6%;
      }
      90% {
        transform: perspective(550px) translateZ(43px);
        left: 6%;
        top: -6%;
      }
      100% {
        transform: perspective(550px) translateZ(43px);
        left: 0%;
        top: 0%;
      }
    }
    @-moz-keyframes rotate-mist {
      0% {
        transform: perspective(550px) translateZ(43px);
        left: 0%;
        top: 0%;
      }
      10% {
        transform: perspective(550px) translateZ(43px);
        left: 0%;
        top: 0%;
      }
      30% {
        transform: perspective(550px) translateZ(43px);
        left: 6%;
        top: 6%;
      }
      50% {
        transform: perspective(550px) translateZ(43px);
        left: -6%;
        top: 6%;
      }
      70% {
        transform: perspective(550px) translateZ(43px);
        left: -6%;
        top: -6%;
      }
      90% {
        transform: perspective(550px) translateZ(43px);
        left: 6%;
        top: -6%;
      }
      100% {
        transform: perspective(550px) translateZ(43px);
        left: 0%;
        top: 0%;
      }
    }
    @-o-keyframes rotate-mist {
      0% {
        transform: perspective(550px) translateZ(43px);
        left: 0%;
        top: 0%;
      }
      10% {
        transform: perspective(550px) translateZ(43px);
        left: 0%;
        top: 0%;
      }
      30% {
        transform: perspective(550px) translateZ(43px);
        left: 6%;
        top: 6%;
      }
      50% {
        transform: perspective(550px) translateZ(43px);
        left: -6%;
        top: 6%;
      }
      70% {
        transform: perspective(550px) translateZ(43px);
        left: -6%;
        top: -6%;
      }
      90% {
        transform: perspective(550px) translateZ(43px);
        left: 6%;
        top: -6%;
      }
      100% {
        transform: perspective(550px) translateZ(43px);
        left: 0%;
        top: 0%;
      }
    }
    @keyframes rotate-mist {
      0% {
        transform: perspective(550px) translateZ(43px);
        left: 0%;
        top: 0%;
      }
      10% {
        transform: perspective(550px) translateZ(43px);
        left: 0%;
        top: 0%;
      }
      30% {
        transform: perspective(550px) translateZ(43px);
        left: 6%;
        top: 6%;
      }
      50% {
        transform: perspective(550px) translateZ(43px);
        left: -6%;
        top: 6%;
      }
      70% {
        transform: perspective(550px) translateZ(43px);
        left: -6%;
        top: -6%;
      }
      90% {
        transform: perspective(550px) translateZ(43px);
        left: 6%;
        top: -6%;
      }
      100% {
        transform: perspective(550px) translateZ(43px);
        left: 0%;
        top: 0%;
      }
    }
    @-webkit-keyframes rotate-gruffalo-head {
      0% {
        transform: perspective(550px) translateZ(36px);
        left: 0%;
        top: 0%;
      }
      10% {
        transform: perspective(550px) translateZ(36px);
        left: 0%;
        top: 0%;
      }
      30% {
        transform: perspective(550px) translateZ(36px);
        left: 5%;
        top: 5%;
      }
      50% {
        transform: perspective(550px) translateZ(36px);
        left: -5%;
        top: 5%;
      }
      70% {
        transform: perspective(550px) translateZ(36px);
        left: -5%;
        top: -5%;
      }
      90% {
        transform: perspective(550px) translateZ(36px);
        left: 5%;
        top: -5%;
      }
      100% {
        transform: perspective(550px) translateZ(36px);
        left: 0%;
        top: 0%;
      }
    }
    @-moz-keyframes rotate-gruffalo-head {
      0% {
        transform: perspective(550px) translateZ(36px);
        left: 0%;
        top: 0%;
      }
      10% {
        transform: perspective(550px) translateZ(36px);
        left: 0%;
        top: 0%;
      }
      30% {
        transform: perspective(550px) translateZ(36px);
        left: 5%;
        top: 5%;
      }
      50% {
        transform: perspective(550px) translateZ(36px);
        left: -5%;
        top: 5%;
      }
      70% {
        transform: perspective(550px) translateZ(36px);
        left: -5%;
        top: -5%;
      }
      90% {
        transform: perspective(550px) translateZ(36px);
        left: 5%;
        top: -5%;
      }
      100% {
        transform: perspective(550px) translateZ(36px);
        left: 0%;
        top: 0%;
      }
    }
    @-o-keyframes rotate-gruffalo-head {
      0% {
        transform: perspective(550px) translateZ(36px);
        left: 0%;
        top: 0%;
      }
      10% {
        transform: perspective(550px) translateZ(36px);
        left: 0%;
        top: 0%;
      }
      30% {
        transform: perspective(550px) translateZ(36px);
        left: 5%;
        top: 5%;
      }
      50% {
        transform: perspective(550px) translateZ(36px);
        left: -5%;
        top: 5%;
      }
      70% {
        transform: perspective(550px) translateZ(36px);
        left: -5%;
        top: -5%;
      }
      90% {
        transform: perspective(550px) translateZ(36px);
        left: 5%;
        top: -5%;
      }
      100% {
        transform: perspective(550px) translateZ(36px);
        left: 0%;
        top: 0%;
      }
    }
    @keyframes rotate-gruffalo-head {
      0% {
        transform: perspective(550px) translateZ(36px);
        left: 0%;
        top: 0%;
      }
      10% {
        transform: perspective(550px) translateZ(36px);
        left: 0%;
        top: 0%;
      }
      30% {
        transform: perspective(550px) translateZ(36px);
        left: 5%;
        top: 5%;
      }
      50% {
        transform: perspective(550px) translateZ(36px);
        left: -5%;
        top: 5%;
      }
      70% {
        transform: perspective(550px) translateZ(36px);
        left: -5%;
        top: -5%;
      }
      90% {
        transform: perspective(550px) translateZ(36px);
        left: 5%;
        top: -5%;
      }
      100% {
        transform: perspective(550px) translateZ(36px);
        left: 0%;
        top: 0%;
      }
    }
    @-webkit-keyframes rotate-hellboy-bg {
      0% {
        transform: perspective(550px) translateZ(22px);
        left: 0%;
        top: 0%;
      }
      10% {
        transform: perspective(550px) translateZ(22px);
        left: 0%;
        top: 0%;
      }
      30% {
        transform: perspective(550px) translateZ(22px);
        left: 3%;
        top: 3%;
      }
      50% {
        transform: perspective(550px) translateZ(22px);
        left: -3%;
        top: 3%;
      }
      70% {
        transform: perspective(550px) translateZ(22px);
        left: -3%;
        top: -3%;
      }
      90% {
        transform: perspective(550px) translateZ(22px);
        left: 3%;
        top: -3%;
      }
      100% {
        transform: perspective(550px) translateZ(22px);
        left: 0%;
        top: 0%;
      }
    }
    @-moz-keyframes rotate-hellboy-bg {
      0% {
        transform: perspective(550px) translateZ(22px);
        left: 0%;
        top: 0%;
      }
      10% {
        transform: perspective(550px) translateZ(22px);
        left: 0%;
        top: 0%;
      }
      30% {
        transform: perspective(550px) translateZ(22px);
        left: 3%;
        top: 3%;
      }
      50% {
        transform: perspective(550px) translateZ(22px);
        left: -3%;
        top: 3%;
      }
      70% {
        transform: perspective(550px) translateZ(22px);
        left: -3%;
        top: -3%;
      }
      90% {
        transform: perspective(550px) translateZ(22px);
        left: 3%;
        top: -3%;
      }
      100% {
        transform: perspective(550px) translateZ(22px);
        left: 0%;
        top: 0%;
      }
    }
    @-o-keyframes rotate-hellboy-bg {
      0% {
        transform: perspective(550px) translateZ(22px);
        left: 0%;
        top: 0%;
      }
      10% {
        transform: perspective(550px) translateZ(22px);
        left: 0%;
        top: 0%;
      }
      30% {
        transform: perspective(550px) translateZ(22px);
        left: 3%;
        top: 3%;
      }
      50% {
        transform: perspective(550px) translateZ(22px);
        left: -3%;
        top: 3%;
      }
      70% {
        transform: perspective(550px) translateZ(22px);
        left: -3%;
        top: -3%;
      }
      90% {
        transform: perspective(550px) translateZ(22px);
        left: 3%;
        top: -3%;
      }
      100% {
        transform: perspective(550px) translateZ(22px);
        left: 0%;
        top: 0%;
      }
    }
    @keyframes rotate-hellboy-bg {
      0% {
        transform: perspective(550px) translateZ(22px);
        left: 0%;
        top: 0%;
      }
      10% {
        transform: perspective(550px) translateZ(22px);
        left: 0%;
        top: 0%;
      }
      30% {
        transform: perspective(550px) translateZ(22px);
        left: 3%;
        top: 3%;
      }
      50% {
        transform: perspective(550px) translateZ(22px);
        left: -3%;
        top: 3%;
      }
      70% {
        transform: perspective(550px) translateZ(22px);
        left: -3%;
        top: -3%;
      }
      90% {
        transform: perspective(550px) translateZ(22px);
        left: 3%;
        top: -3%;
      }
      100% {
        transform: perspective(550px) translateZ(22px);
        left: 0%;
        top: 0%;
      }
    }
    @-webkit-keyframes rotate-hellboy-fg {
      0% {
        transform: perspective(550px) translateZ(15px);
        left: 0%;
        top: 0%;
      }
      10% {
        transform: perspective(550px) translateZ(15px);
        left: 0%;
        top: 0%;
      }
      30% {
        transform: perspective(550px) translateZ(15px);
        left: 2%;
        top: 2%;
      }
      50% {
        transform: perspective(550px) translateZ(15px);
        left: -2%;
        top: 2%;
      }
      70% {
        transform: perspective(550px) translateZ(15px);
        left: -2%;
        top: -2%;
      }
      90% {
        transform: perspective(550px) translateZ(15px);
        left: 2%;
        top: -2%;
      }
      100% {
        transform: perspective(550px) translateZ(15px);
        left: 0%;
        top: 0%;
      }
    }
    @-moz-keyframes rotate-hellboy-fg {
      0% {
        transform: perspective(550px) translateZ(15px);
        left: 0%;
        top: 0%;
      }
      10% {
        transform: perspective(550px) translateZ(15px);
        left: 0%;
        top: 0%;
      }
      30% {
        transform: perspective(550px) translateZ(15px);
        left: 2%;
        top: 2%;
      }
      50% {
        transform: perspective(550px) translateZ(15px);
        left: -2%;
        top: 2%;
      }
      70% {
        transform: perspective(550px) translateZ(15px);
        left: -2%;
        top: -2%;
      }
      90% {
        transform: perspective(550px) translateZ(15px);
        left: 2%;
        top: -2%;
      }
      100% {
        transform: perspective(550px) translateZ(15px);
        left: 0%;
        top: 0%;
      }
    }
    @-o-keyframes rotate-hellboy-fg {
      0% {
        transform: perspective(550px) translateZ(15px);
        left: 0%;
        top: 0%;
      }
      10% {
        transform: perspective(550px) translateZ(15px);
        left: 0%;
        top: 0%;
      }
      30% {
        transform: perspective(550px) translateZ(15px);
        left: 2%;
        top: 2%;
      }
      50% {
        transform: perspective(550px) translateZ(15px);
        left: -2%;
        top: 2%;
      }
      70% {
        transform: perspective(550px) translateZ(15px);
        left: -2%;
        top: -2%;
      }
      90% {
        transform: perspective(550px) translateZ(15px);
        left: 2%;
        top: -2%;
      }
      100% {
        transform: perspective(550px) translateZ(15px);
        left: 0%;
        top: 0%;
      }
    }
    @keyframes rotate-hellboy-fg {
      0% {
        transform: perspective(550px) translateZ(15px);
        left: 0%;
        top: 0%;
      }
      10% {
        transform: perspective(550px) translateZ(15px);
        left: 0%;
        top: 0%;
      }
      30% {
        transform: perspective(550px) translateZ(15px);
        left: 2%;
        top: 2%;
      }
      50% {
        transform: perspective(550px) translateZ(15px);
        left: -2%;
        top: 2%;
      }
      70% {
        transform: perspective(550px) translateZ(15px);
        left: -2%;
        top: -2%;
      }
      90% {
        transform: perspective(550px) translateZ(15px);
        left: 2%;
        top: -2%;
      }
      100% {
        transform: perspective(550px) translateZ(15px);
        left: 0%;
        top: 0%;
      }
    }


    #cardWrapper {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }

    #card {
      margin-top: auto;
      position: relative;
      width: calc(70vh * 0.70756062767475);
      height: 70vh;
      overflow: hidden;
    }
    #card img {
      width: 100%;
      height: 100%;
      position: absolute;
    }
    

    #card .layer1 {
      z-index: 4;
    }
    #card .layer2 {
      z-index: 3;
    }
    #card .layer3 {
      z-index: 2;
    }
    #card .layer4 {
      z-index: 1;
    }

    #border {
      position: absolute;
      box-sizing: border-box;
      width: 100%;
      height: 100%;
      border: 20px solid black;
      display: block;
      z-index: 4;
    }

    .auto #card {
      -webkit-animation: rotate-card-base 5s infinite;
      -moz-animation: rotate-card-base 5s infinite;
      -o-animation: rotate-card-base 5s infinite;
      animation: rotate-card-base 5s infinite;
      animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    }
    .auto .layer1 {
      -webkit-animation: rotate-trees 5s infinite;
      -moz-animation: rotate-trees 5s infinite;
      -o-animation: rotate-trees 5s infinite;
      animation: rotate-trees 5s infinite;
      animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    }
    .auto .layer2 {
      -webkit-animation: rotate-gruffalo-body 5s infinite;
      -moz-animation: rotate-gruffalo-body 5s infinite;
      -o-animation: rotate-gruffalo-body 5s infinite;
      animation: rotate-gruffalo-body 5s infinite;
      animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    }
    .auto .layer3 {
      -webkit-animation: rotate-mist 5s infinite;
      -moz-animation: rotate-mist 5s infinite;
      -o-animation: rotate-mist 5s infinite;
      animation: rotate-mist 5s infinite;
      animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    }
    .auto .layer4 {
      -webkit-animation: rotate-gruffalo-head 5s infinite;
      -moz-animation: rotate-gruffalo-head 5s infinite;
      -o-animation: rotate-gruffalo-head 5s infinite;
      animation: rotate-gruffalo-head 5s infinite;
      animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    }
    .auto .layer5 {
      -webkit-animation: rotate-hellboy-bg 5s infinite;
      -moz-animation: rotate-hellboy-bg 5s infinite;
      -o-animation: rotate-hellboy-bg 5s infinite;
      animation: rotate-hellboy-bg 5s infinite;
      animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    }
    .auto .layer5 {
      -webkit-animation: rotate-hellboy-fg 5s infinite;
      -moz-animation: rotate-hellboy-fg 5s infinite;
      -o-animation: rotate-hellboy-fg 5s infinite;
      animation: rotate-hellboy-fg 5s infinite;
      animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    }
        }
`