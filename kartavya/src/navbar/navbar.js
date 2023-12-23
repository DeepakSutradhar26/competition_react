import './navbar.css';

const Navbar = () => {
    return (
        <div className="header">
            <div className="logo">
                <h2>ALCHERINGA</h2>
            </div>           
            <nav className="navbar-menu">
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
        </div>
    );
}

export default Navbar;