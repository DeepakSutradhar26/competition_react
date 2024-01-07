import './body.css';
import './mobile_body.css'
import { useState } from 'react';

const Body = () => {
    const [state, setState] = useState(false);

    const [value,setValue] = useState('');

    const handleClick = () => {
        setState(!state);
    }

    const onChange = (event) =>{
        setValue(event.target.value);
    }

    return (
        <div className="body">
            <div className="search-box">
                <div className="container-1">
                    <form action="" className='form'>
                        <input className='search' type="text" placeholder='Search Competitions' value={value} onChange={onChange}/>
                        <div className='fa-solid fa-magnifying-glass'></div>
                    </form>
                    <div className="modules" onClick={handleClick}>
                        <p>Modules</p>
                        <div className="small-box">
                            <div className={state ? 'fa-solid fa-sort-down fa-active' : 'fa-solid fa-sort-down'}></div>
                        </div>
                    </div>
                    <div className={state ? 'list list-active' : 'list'}>
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

export default Body;