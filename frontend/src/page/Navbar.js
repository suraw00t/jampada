import './Navbar.css'
import psu from '../images/psu.png'
import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import styled from 'styled-components'

const Navigation = styled.header`
    z-index: 1;
    display: flex;
   
    align-items:  center;
    height: 120px;
    background: #5a76ef
`;

export default function Nav() {
    return (
        <Navigation>
            
            <div className="logo">
                <Link to="/"><img src={psu} alt=""/></Link>
            </div>
            <div className="logo">
                <Link to="/Signin"><img src={psu} alt=""/></Link>
            </div>
            <nav className = "nav">
                <ul>
                    <NavLink exact="true" className="active" to="/">
                        <li>Home</li>
                    </NavLink>
                    <NavLink activeclassname="active" to="/about">
                        <li>About</li>
                    </NavLink>
                </ul>
            </nav>
        </Navigation>
    )
}



