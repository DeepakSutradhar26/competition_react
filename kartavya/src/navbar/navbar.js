import './navbar.css';
import './color_changer.css';
import './register_color.css'
import alcher_logo from './navbar_images/ALCHERINGA logo.png';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

const Navbar = (props) => {
    const location = useLocation();

    var [ state, setState ] = useState(false);

    const handleClick = () => {
        setState(state => !state);
    }

    if(location.pathname === props.title){
    return (
        <div className="header">
            <div className="logo">
                <Link to="/"><img class="logo" src={alcher_logo} alt="" /></Link>
            </div>
            <nav id="navbar-menu" className={state === true ? '.navbar-menu active' : 'navbar-menu'}>
                <ul>
                    <li className={location.pathname === '/Events' ? 'c c1' : ''}>
                        <Link to="/Events">Events</Link></li>
                    <li className={location.pathname === '/Competitions' ? 'c c1' : ''}>
                        <Link to="/Competitions">Competitions</Link></li>
                    <li className={location.pathname === '/Kartavya' ? 'c c3' : ''}>
                        <Link to="/Kartavya">Kartayva</Link></li>
                    <li className={location.pathname === '/MUN' ? 'c c4' : ''}>
                        <Link to="/MUN">MUN</Link></li>
                    <li className={location.pathname === '/Merch' ? 'c c5' : ''}>
                        <Link to="/Merch">Merch</Link></li>
                    <li className={location.pathname === '/Team' ? 'c c6' : ''}>
                        <Link to="/Team">Team</Link></li>
                    <li className={location.pathname === '/Sponsers' ? 'c c7' : ''}>
                        <Link to="/Sponsers">Sponsers</Link></li>
                </ul>
            </nav>
            <div className="fixing">
                <button className= {props.reg_bg} ><Link to="/Register">Register</Link></button>
            </div>
            <div className="hidden-box"></div>
            <button id="icons" className={state === true ? 'fas fa-times fa-2x' : 'fas fa-bars fa-2x'} onClick={() => { handleClick() }}>
            </button>
            <div className="sit-box"></div>
        </div>
    );
    }
}

export default Navbar;