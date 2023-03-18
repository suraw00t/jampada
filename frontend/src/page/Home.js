import './Home.css'
import Navbar from './Navbar'
import bad from '../images/bad.png'
import bball from '../images/bball.png'
import fball from '../images/fball.png'
import pong from '../images/pong.png'
import ten from '../images/ten.png'
import vball from '../images/vball.png'
import { NavLink } from 'react-router-dom'


const Home = () => {
    return (
        <div className="d-flex align-items-center justify-content-center">
            <ul style={{ "paddingLeft": "4.5em", "paddingRight": "2em" }}>
                <NavLink activeclassname="active" to="/badminton">
                    <div className="box">
                        <img src={bad} alt="" />
                    </div>
                </NavLink>

                <NavLink activeclassname="active" to="/basketball">
                    <div className="box">
                        <img src={bball} alt="" />
                    </div>
                </NavLink>

                <NavLink activeclassname="active" to="/football">
                    <div className="box">
                        <img src={fball} alt="" />
                    </div>
                </NavLink>

                <NavLink activeclassname="active" to="/pingpong">
                    <div className="box">
                        <img src={pong} alt="" />
                    </div>
                </NavLink>

                <NavLink activeclassname="active" to="/tennis">
                    <div className="box">
                        <img src={ten} alt="" />
                    </div>
                </NavLink>

                <NavLink activeclassname="active" to="/volleyball">
                    <div className="box">
                        <img src={vball} alt="" />
                    </div>
                </NavLink>
            </ul>

        </div >

    );
}

export default Home;