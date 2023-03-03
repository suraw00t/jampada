import './Home.css'
import Navbar from './Navbar'
import bad from '../images/bad.png'
import bball from '../images/bball.png'
import fball from '../images/fball.png'
import pong from '../images/pong.png'
import ten from '../images/ten.png'
import vball from '../images/vball.png'
import { NavLink } from 'react-router-dom'


const Home =()=>{
    return (
        <div>
          
            <ul>
                <NavLink activeClassname="active" to="/bad">
                    <div class="box">
                        <img src={bad} alt=""/>
                    </div>
                </NavLink>

                <NavLink activeClassname="active" to="/bball">
                    <div class="box">
                        <img src={bball} alt=""/>
                    </div>
                </NavLink>

                <NavLink activeClassname="active" to="/fball">
                    <div class="box">
                        <img src={fball} alt=""/>
                    </div>  
                </NavLink>
                
            </ul>
            <ul>
                <NavLink activeClassname="active" to="/pong">
                    <div class="box">
                        <img src={pong} alt=""/>
                    </div>
                </NavLink>
                
                <NavLink activeClassname="active" to="/ten">
                    <div class="box">
                        <img src={ten} alt=""/>
                    </div>
                </NavLink>
                
                <NavLink activeClassname="active" to="/vball">
                    <div class="box">
                        <img src={vball} alt=""/>
                    </div>
                </NavLink>
                
                
            </ul>

        </div>
        
    );
}

export default Home;