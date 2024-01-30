import './footer.css';
import './mobile_footer.css';
import './bg_change.css';
import './star_change.css';
import alcheringa from './footer_images/ALCHERINGA.png';
import icon1 from './footer_images/Vector.png';
import icon2 from './footer_images/Vector (1).png';
import icon3 from './footer_images/Vector (2).png';
import icon4 from './footer_images/Vector (3).png';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import React from 'react';


const Footer = (props) => {
    
    const location = useLocation();

if(location.pathname === props.title){
    return (
        <div className="container">
            <div className="navbar_footer">
                <nav className="navbar_menu_footer">
                    <ul>
                        <li className={location.pathname === '/Events' ? 'c c1' : ''}>
                            <Link to="/Events">Events</Link></li>
                        <li className={location.pathname === '/Competitions' ? 'c c2' : ''}>
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
                    {/* Change color in color_change.css */}
                    {/* Change background in bg_change.css */}
                </nav>
            </div>
            <div className={props.bg}>
                <div className="circle_box">
                    <img src={props.circle_src} alt="" />
                    <img id="circle_2nd_img" src={props.circle_src} alt="" />
                </div>
                <div className="extra_box">
                </div>
                <div className="windows_box">
                    <div className="crop_container">
                    <div className="crop_box">
                    <img className="windows_img" src={props.windows_src} alt="" />
                    </div></div>
                    <div className="complex_grid">
                    <div key={props.id} id="spark1" className={props.star}></div>
                    <div className="blank_box"></div>
                    <div key={props.id} id="spark2" className={props.star}></div>
                    <div className="blank_box"></div>
                    <div key={props.id} id="spark3" className={props.star}></div>
                    <img className="alcheringa" src={alcheringa} alt="" />
                    <div key={props.id} id="spark5" className={props.star}></div>
                    <div className="blank_box"></div>
                    <div key={props.id} id="spark6" className={props.star}></div>
                    <div className="blank_box"></div>
                    <div key={props.id} id="spark4" className={props.star}></div>

                    {/* Change stars color in star_change.css file */}
                    </div>
                </div>
                <div className="credits_1">
                    <div className="cred grid_1">
                        <h1>Anurag</h1>
                        <div className="info">
                            <p>+91 7061520276</p>
                            <p>anurag@alcheringa.in</p>
                        </div>
                    </div>
                    <div className="cred grid_2">
                        <h1>Ankit Kumar</h1>
                        <div className="info">
                            <p>+91 8340349585</p>
                            <p>ankit.k@alcheringa.in</p>
                        </div>
                    </div>
                    <div className="cred_1" id="seperate">
                        <p id='normal_text'>Follow us on</p>
                        <p id="follow_text">Follow us</p>
                        <p id="on_text">on</p>
                        <div className="icons">
                            <img src={icon1} alt="" />
                            <img src={icon2} alt="" />
                            <img src={icon3} alt="" />
                            <img src={icon4} alt="" />
                        </div>
                    </div>
                </div>
                <div className="credits_2">
                    <p className='extra_width'>Designed and Developed by <a href="">Alcher Creatives</a> & <a href="">Alcher Web Operations</a></p>
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