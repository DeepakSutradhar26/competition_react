import './body.css';
import stairs from './body_images/Stairs.png';

const Body = () => {
    return ( 
        <div className="body">
            <div className="search-box">
                <form action="">
                    <input type="text" />
                </form>
                <div className="modules"></div>
            </div>
            <div className="title">
                <h2>DIGITAL DEXTERITY</h2>
            </div>
            <div className="item-box">
                <div className="item-container">
                    <div className="item"></div>
                    <div className="item"></div>
                    <div className="item"></div>
                    <div className="item"></div>
                    <div className="item"></div>
                </div>
            </div>
        </div>
     );
}
 
export default Body;