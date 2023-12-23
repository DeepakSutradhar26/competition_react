import './footer.css';
import './mobile_footer.css'
import circle from './footer_images/Round element.png';
import windows from './footer_images/Windows.png';
import alcheringa from './footer_images/ALCHERINGA.png';
import star from './footer_images/Star.png'
import { useState } from 'react';
import icon1 from './footer_images/Vector.png';
import icon2 from './footer_images/Vector (1).png';
import icon3 from './footer_images/Vector (2).png';
import icon4 from './footer_images/Vector (3).png';

const Footer = () => {
    const {display,setDisplay} = useState(false)

    return (
        <div className="container">
            <nav className="navbar-footer">
                <ul>
                    <li>Events</li>
                    <li>Competitions</li>
                    <li>Kartavya</li>
                    <li>MUN</li>
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
                    <img className='windows-img' src={windows} alt="" />
                    <img className="alcheringa" src={alcheringa} alt="" />
                    <img id="spark1" className='star' src={star} alt="" />
                    <img id="spark2" className='star' src={star} alt="" />
                    <img id="spark3" className='star' src={star} alt="" />
                    <img id="spark4" className='star' src={star} alt="" />
                    <img id="spark5" className='star' src={star} alt="" />
                    <img id="spark6" className='star' src={star} alt="" />
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
                    <div className="cred-1" id="seperate">
                        <p>Follow us on</p>
                        <div className="icons">
                            <img src={icon1} alt="" />
                            <img src={icon2} alt="" />
                            <img src={icon3} alt="" />
                            <img src={icon4} alt="" />
                        </div>
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