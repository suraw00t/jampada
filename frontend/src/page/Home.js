import './Home.css'
import Navbar from './Navbar'
import bad from '../images/bad.png'
import bball from '../images/bball.png'
import fball from '../images/fball.png'
import pong from '../images/pong.png'
import ten from '../images/ten.png'
import vball from '../images/vball.png'
import { NavLink } from 'react-router-dom'
import axios from "axios";

const API_PREFIX = 'http://localhost:8000/api/v1';
const response = await axios.get(API_PREFIX + "/sport/all");
console.log(response)

const Home = () => {
    return (
        <div className="d-flex align-items-center justify-content-center">
            <ul style={{ "padding-left": "4.5em", "padding-right": "2em" }}>
                <NavLink activeclassname="active" to="/bad">
                    <div class="box">
                        <img src={bad} alt="" />
                    </div>
                </NavLink>

                <NavLink activeclassname="active" to="/bball">
                    <div class="box">
                        <img src={bball} alt="" />
                    </div>
                </NavLink>

                <NavLink activeclassname="active" to="/fball">
                    <div class="box">
                        <img src={fball} alt="" />
                    </div>
                </NavLink>

                <NavLink activeclassname="active" to="/pong">
                    <div class="box">
                        <img src={pong} alt="" />
                    </div>
                </NavLink>

                <NavLink activeclassname="active" to="/ten">
                    <div class="box">
                        <img src={ten} alt="" />
                    </div>
                </NavLink>

                <NavLink activeclassname="active" to="/vball">
                    <div class="box">
                        <img src={vball} alt="" />
                    </div>
                </NavLink>
            </ul>

        </div >

    );
}

export default Home;