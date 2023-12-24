import './body.css';
import { Component } from 'react';

class Body extends Component {
    state = { clicked: false };

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked });
    }

    render() {
        return (
            <div className="body">
                <div className="search-box">
                    <div className="container-1">
                        <form action="">
                            <input className='search' type="text" placeholder='Search Competitions' />
                            <a href=""><i className='fa-solid fa-magnifying-glass'></i></a>
                        </form>
                        <div className="modules">
                            <p>Modules</p>
                            <div className="small-box">
                                <i className={this.state.clicked ? 'fa-solid fa-sort-down fa-active' : 'fa-solid fa-sort-down'} onClick={this.handleClick}></i>
                            </div>
                        </div>
                        <div className={this.state.clicked ? 'list list-active' : 'list'}>
                            <ul>
                                <li>Dance</li>
                                <li>Vogue Nation</li>
                                <li>Class Apart</li>
                                <li>Music</li>
                                <li>Literary</li>
                                <li>Art Talkies</li>
                                <li>Digital Dexterity</li>
                                <li>Lights Camera Action</li>
                                <li>Sports</li>
                                <li>Quiz</li>
                                <li>Drama</li>
                                <li>Critical Damage</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="title">
                    <h2>DIGITAL DEXTERITY</h2>
                </div>
                <div className="item-box">
                    <div className="item-container">
                    </div>
                </div>
            </div>
        );
    }
}

export default Body;