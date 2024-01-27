import './body.css';
import './mobile_body.css';
import { useState } from 'react';
import React from 'react';
import data from './data.js';
import titledata from './title.js';
import searchlist from './searchlist.js';

const Body = () => {

    const [state, setState] = useState(false);

    const [value, setValue] = useState('');

    const [title, setTitle] = useState(["Dance"]);

    const [array, setArray] = useState(["Electric Heels", "Step Up", "Navras", "So You Think You Can Dance", "Dancing Duo"]);


    const handleClick = () => {
        setState(!state);
    }

    const onChange = (event) => {
        setValue(event.target.value);
        setTitle(titledata.filter((item)=>{
            return value.toLowerCase() === '' ? item : item.toLowerCase().includes(value);
        }).slice(0,1));
        setArray(searchlist.filter((item)=>{
            return value.toLowerCase() === '' ? item: item.toLowerCase().includes(value);
        }).slice(0,6));
    }

    const module = (num) => {
        setArray(data[num].icons);
        setTitle(data[num].title);
    }

    return (
        <div className="body">
            <div className="search-box">
                <div className="container-1">
                    <form action="" className='form'>
                        <input className='search' type="text" placeholder='Search Competitions' value={value} onChange={e => onChange(e)} />
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
                            <li onClick={() => { module(0); handleClick() }}>Dance</li>
                            <li onClick={() => { module(1); handleClick() }}>Vogue Nation</li>
                            <li onClick={() => { module(2); handleClick() }}>Class Apart</li>
                            <li onClick={() => { module(3); handleClick() }}>Music</li>
                            <li onClick={() => { module(4); handleClick() }}>Literary</li>
                            <li onClick={() => { module(5); handleClick() }}>Art Talkies</li>
                            <li onClick={() => { module(6); handleClick() }}>Digital Dexterity</li>
                            <li onClick={() => { module(7); handleClick() }}>Lights Camera Action</li>
                            <li onClick={() => { module(8); handleClick() }}>Sports</li>
                            <li onClick={() => { module(9); handleClick() }}>Quiz</li>
                            <li onClick={() => { module(10); handleClick() }}>Drama</li>
                            <li onClick={() => { module(11); handleClick() }}>Critical Damage</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="title">
                {title.map((capital) => (<h2>{capital}</h2>))}
            </div>
            <div className="item-box" >
                <div className="item-container">
                    {array.map((arr) => (<div className="icon">{arr}</div>))}
                </div>
            </div>
        </div>
    );
}

export default Body;