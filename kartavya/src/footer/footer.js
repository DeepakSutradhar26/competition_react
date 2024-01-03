import './footer.css';
import './mobile_footer.css';
import './bg_change.css';
import './star_change.css';
import circle from './footer_images/Round element.png';
import circle1 from './circle_images/Frame 15232-min.png'
import windows from './footer_images/Windows.png';
import alcheringa from './footer_images/ALCHERINGA.png';
import icon1 from './footer_images/Vector.png';
import icon2 from './footer_images/Vector (1).png';
import icon3 from './footer_images/Vector (2).png';
import icon4 from './footer_images/Vector (3).png';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import windows1 from './windows_images/Frame 15230-min.png';
import React from 'react';


const Footer = (props) => {
    
    const location = useLocation();

if(location.pathname === props.title){
    return (
        <div className="container">
            <div className="navbar-footer">
                <nav className="navbar-menu-footer">
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
            </div>
            <div className={props.bg}>
                <div className="circle-box">
                    <img className={location.pathname === '/' ? '' : 'unactive'} src={circle} alt="" />
                    <img className={location.pathname === '/Events' ? '' : 'unactive'} src={circle1} alt="" />
                    <img className={location.pathname === '/Competitions' ? '' : 'unactive'} src={circle} alt="" />
                    <img className={location.pathname === '/Kartavya' ? '' : 'unactive'} src={circle} alt="" />
                    <img className={location.pathname === '/MUN' ? '' : 'unactive'} src={circle} alt="" />
                    <img className={location.pathname === '/Merch' ? '' : 'unactive'} src={circle} alt="" />
                    <img className={location.pathname === '/Team' ? '' : 'unactive'} src={circle} alt="" />
                    <img className={location.pathname === '/Sponsers' ? '' : 'unactive'} src={circle} alt="" />

                    <img id="circle-2nd-img" className={location.pathname === '/' ? '' : 'unactive'} src={circle} alt="" />
                    <img id="circle-2nd-img" className={location.pathname === '/Events' ? '' : 'unactive'} src={circle1} alt="" />
                    <img id="circle-2nd-img" className={location.pathname === '/Competitions' ? '' : 'unactive'} src={circle} alt="" />
                    <img id="circle-2nd-img" className={location.pathname === '/Kartavya' ? '' : 'unactive'} src={circle} alt="" />
                    <img id="circle-2nd-img" className={location.pathname === '/MUN' ? '' : 'unactive'} src={circle} alt="" />
                    <img id="circle-2nd-img" className={location.pathname === '/Merch' ? '' : 'unactive'} src={circle} alt="" />
                    <img id="circle-2nd-img" className={location.pathname === '/Team' ? '' : 'unactive'} src={circle} alt="" />
                    <img id="circle-2nd-img" className={location.pathname === '/Sponsers' ? '' : 'unactive'} src={circle} alt="" />
                </div>
                <div className="extra-box">
                </div>
                <div className="windows-box">
                    <img className={location.pathname === '/' ? 'windows-img' : 'unactive'} src={windows} alt="" />
                    <img className={location.pathname === '/Events' ? 'windows-img' : 'unactive'} src={windows1} alt="" />
                    <img className={location.pathname === '/Competitions' ? 'windows-img' : 'unactive'} src={windows} alt="" />
                    <img className={location.pathname === '/Kartavya' ? 'windows-img' : 'unactive'} src={windows} alt="" />
                    <img className={location.pathname === '/MUN' ? 'windows-img' : 'unactive'} src={windows} alt="" />
                    <img className={location.pathname === '/Merch' ? 'windows-img' : 'unactive'} src={windows} alt="" />
                    <img className={location.pathname === '/Team' ? 'windows-img' : 'unactive'} src={windows} alt="" />
                    <img className={location.pathname === '/Sponsers' ? 'windows-img' : 'unactive'} src={windows} alt="" />
                    <img className="alcheringa" src={alcheringa} alt="" />
                    <div key={props.id} id="spark1" className={props.star}></div>
                    <div key={props.id} id="spark2" className={props.star}></div>
                    <div key={props.id} id="spark3" className={props.star}></div>
                    <div key={props.id} id="spark4" className={props.star}></div>
                    <div key={props.id} id="spark5" className={props.star}></div>
                    <div key={props.id} id="spark6" className={props.star}></div>
                </div>
                <div className="credits-1">
                    <div className="cred grid-1">
                        <h1>Siddhant Singh</h1>
                        <div className="info">
                            <p>+91 9310859978</p>
                            <p>siddhant.s@alcheringa.in</p>
                        </div>
                    </div>
                    <div className="cred grid-2">
                        <h1>Siddhant Singh</h1>
                        <div className="info">
                            <p>+91 9310859978</p>
                            <p>siddhant.s@alcheringa.in</p>
                        </div>
                    </div>
                    <div className="cred-1" id="seperate">
                        <p id='normal-text'>Follow us on</p>
                        <p id="follow-text">Follow us</p>
                        <p id="on-text">on</p>
                        <div className="icons">
                            <img src={icon1} alt="" />
                            <img src={icon2} alt="" />
                            <img src={icon3} alt="" />
                            <img src={icon4} alt="" />
                        </div>
                    </div>
                </div>
                <div className="credits-2">
                    <p className='extra-width'>Designed and Developed by <a href="">Alcher Creatives</a> & <a href="">Alcher Web Operations</a></p>
                    <div>
                        <p>For Business Enquiries</p>
                        <a href="">publicrelations24@alcheringa.in</a>
                    </div>
                </div>
            </div>
        </div>
    );

    }
}

export default Footer;