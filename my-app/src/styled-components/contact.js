import styled from 'styled-components'

export const DivOne = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Cutive+Mono&family=Press+Start+2P&display=swap');

    font-family: 'Cutive Mono', monospace;
    color: white;
    font-size: 15px;
    font-family: 'Cutive Mono', monospace;
    

      // desktop
    @media(min-width: 1200px) {
      font-size: 30px;
    
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

    // DESKTOP
    @media(min-width: 1200px) {
      margin-left: 600px;
      margin-right: 600px;
      margin-bottom: 540px;

`

export const DivTwo = styled.div`

    a { 
        color: white;
        text-decoration: none;
        font-family: 'Cutive+Mono', monospace;
        
    }

    a:hover {
        
    }

    // Desktop
    @media(min-width: 1200px) {

      margin-bottom: 30px;
      
      a {
        font-size: 20px;
        padding-bottom: 30px;
      }

`
