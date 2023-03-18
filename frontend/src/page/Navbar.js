import './Navbar.css'
import psu from '../images/psu.png'
import log1 from '../images/log1.png'
import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import styled from 'styled-components'
import { useSelector } from 'react-redux';
import { logout } from '../redux/actions/authAction';
import { useDispatch } from 'react-redux';

const Navigation = styled.header`
    z-index: 1;
    display: flex;
   
    align-items:  center;
    height: 120px;
    background: #5a76ef;
`;

export default function Nav() {
    const { auth } = useSelector(state => state)
    const dispatch = useDispatch()

    function handleLogout() {
        dispatch(logout())
    }

    return (
        <Navigation>
            <div className="logo">
                <Link to="/"><img src={psu} alt="" /></Link>
            </div>
            {
                auth.user ? <button onClick={handleLogout} type="button" className="btn btn-danger">Logout</button> :
                    <div className="logo">
                        <Link to="/Signin"><img src={log1} alt="" /></Link>
                    </div>
            }
            <nav className="nav">
                <ul>
                    <NavLink exact="true" className="active" to="/">
                        <li>Home</li>
                    </NavLink>
                    <NavLink activeclassname="active" to="/about">
                        <li>About</li>
                    </NavLink>
                </ul>
            </nav>

        </Navigation >
    )
}



