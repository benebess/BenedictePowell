import React from 'react';
import { Div } from '../styled-components/navigation'
import { Link } from 'react-router-dom';
import shiba from '../images/shiba.gif'


const Navigation =() => {
    return (
        <Div>
            <div class="hamburger-menu">
                <input id="menu__toggle" type="checkbox" />
                <label class="menu__btn" for="menu__toggle">
                <span></span>
                </label>

            <ul class="menu__box">
                <li><Link to="/" className="active">home.</Link></li>
                <li><Link to="/about" className="active">about.</Link></li>
                <li><Link to="/projects" className="active">projects.</Link></li>
                <li><Link to="/contact" className="active">contact.</Link></li>
                <br></br>
                <br></br>
                <li><img src={shiba} alt="shibagif" width="180px"/></li>
            </ul>
            </div>
            
                    
                
        </Div>
    )
}

export default Navigation;