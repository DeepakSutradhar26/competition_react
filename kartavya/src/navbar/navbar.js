import { Component } from 'react';
import './navbar.css';
import alcher_logo from './navbar_images/ALCHERINGA logo.png';
import {Link } from 'react-router-dom';

class Navbar extends Component {
    state = { clicked: false };

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked });
    }

    render() {
        return (
            <div className="header">
                <div className="logo">
                    <img class="logo" src={alcher_logo} alt="" />
                </div>
                <nav id="navbar-menu" className={this.state.clicked ? '.navbar-menu active' : 'navbar-menu'}>
                    <ul>
                        <li><Link to="/Events">Events</Link></li>
                        <li><Link to="/Competitions">Competitions</Link></li>
                        <li><Link to="/Kartavya">Kartayva</Link></li>
                        <li><Link to="/MUN">MUN</Link></li>
                        <li><Link to="/Merch">Merch</Link></li>
                        <li><Link to="/Team">Team</Link></li>
                        <li><Link to="/Sponsers">Sponsers</Link></li>
                    </ul>
                </nav>
                <div className="fixing">
                    <button className="register">Register</button>
                </div>
                <button id="icons" className={this.state.clicked ? 'fas fa-times fa-2x' : 'fas fa-thin fa-bars fa-2x'} onClick={this.handleClick}>
                </button>
            </div>
        );
    }
}

export default Navbar;