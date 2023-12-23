import { Component } from 'react';
import './navbar.css';
import alcher_logo from './navbar_images/ALCHERINGA logo.png';

class Navbar extends Component {
    state = { clicked: false };

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render() {
        return (
            <div className="header">
                <div className="logo">
                    <img class="logo" src={alcher_logo} alt="" />
                </div>
                <nav id="navbar-menu" className={this.state.clicked ? '.navbar-menu active' : 'navbar-menu'}>
                    <ul>
                        <li><a>Events</a></li>
                        <li><a>Competitions</a></li>
                        <li><a>Kartayva</a></li>
                        <li><a>MUN</a></li>
                        <li><a>Merch</a></li>
                        <li><a>Team</a></li>
                        <li><a>Sponsers</a></li>
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