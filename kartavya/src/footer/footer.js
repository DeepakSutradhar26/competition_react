import './footer.css';
import circle from './footer_images/Round element.png';
import windows from './footer_images/Windows.png';

const Footer = () => {
    return (
        <div className="container">
            <nav className="navbar-footer">
                <ul>
                    <li>Events</li>
                    <li>Competitions</li>
                    <li>Kartavya</li>
                    <li>Merch</li>
                    <li>Team</li>
                    <li>Sponsers</li>
                </ul>
            </nav>
            <div className="footer">
                <div className="circle-box">
                    <img src={circle} alt="" />
                </div>
                <div className="windows-box">
                    <img src={windows} alt="" />
                    <h1>ALCHERINGA</h1>
                </div>
                <div className="credits-1">
                    <div className="cred">
                        <h1>Siddhant Singh</h1>
                        <div className="info">
                            <p>+91 9310859978</p>
                            <p>siddhant.s@alcheringa.in</p>
                        </div>
                    </div>
                    <div className="cred">
                        <h1>Siddhant Singh</h1>
                        <div className="info">
                            <p>+91 9310859978</p>
                            <p>siddhant.s@alcheringa.in</p>
                        </div>
                    </div>
                    <div className="cred">
                        <p>Follow us on</p>
                    </div>
                </div>
                <div className="credits-2">
                    <p>Designed and Developed by <a href="">Alcher Creatives</a> & <a href="">Alcher Web Operations</a></p>
                    <div>
                        <p>For Business Enquiries</p>
                        <a href="">publicrelations24@alcheringa.in</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;