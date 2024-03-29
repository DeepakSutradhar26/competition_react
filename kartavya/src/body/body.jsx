import './body.css';
import './mobile_body.css';
import { useState } from 'react';
import React from 'react';
import info from './data.js';
import titledata from './title.js';
import stairs from './body_images/Stairs.png';

const Body = () => {

    const [state, setState] = useState(false);

    const [value, setValue] = useState('');

    const [title, setTitle] = useState(["Dance"]);

    const [array, setArray] = useState([{
        key: 1,
        category: "Dance",
        img: './body_images/Group 1000004203.png',
        comp_name: "Electric Heels"
    },
    {
        key: 2,
        category: "Dance",
        img: './body_images/Group 1000004203.png',
        comp_name: "Step Up"
    },
    {
        key: 3,
        category: "Dance",
        img: './body_images/Group 1000004203.png',
        comp_name: "Navras"
    },
    {
        key: 4,
        category: "Dance",
        img: './body_images/Group 1000004203.png',
        comp_name: "So You Think You Can Dance"
    },
    {
        key: 5,
        category: "Dance",
        img: './body_images/Group 1000004203.png',
        comp_name: "Dancing Duo"
    }])

    const handleClick = () => {
        setState(!state);
    }

    const onChange = (event) => {
        setValue(event.target.value);
        const keyword = event.target.value;

        if (keyword !== "") {
            const result = info.filter((user) => {
                return user.comp_name.toLowerCase().startsWith(keyword.toLowerCase());
            });
            setArray(result.slice(0, 6));

            const result_2 = titledata.filter((user_2) => {
                return user_2.toLowerCase().startsWith(keyword.toLowerCase());
            })
            setTitle(result_2.slice(0, 1));
        }
    }

    const module = (val) => {

        var total = [];

        for (let i = 0; i < info.length; i++) {
            if (info[i].category == val) {
                total.push(info[i]);
                setTitle([info[i].category]);
            }
        }
        setArray(total);
    }

    return (
        <div className="body">
            <div className="search_box">
                <div className="container_1">
                    <form action="" className='form'>
                        <input className='search' type="text" placeholder='Search Competitions' value={value} onChange={e => onChange(e)} />
                        <div className='fa-solid fa-magnifying-glass'></div>
                    </form>
                    <div className="list_container">
                        <div className="modules" onClick={handleClick}>
                            <p>Modules</p>
                            <div className="small_box">
                                <div className={state ? 'fa-solid fa-sort-down fa-active' : 'fa-solid fa-sort-down'}></div>
                            </div>
                        </div>
                        <div className={state ? 'list list_active' : 'list'}>
                            <ul>
                                <li onClick={() => { module("Dance"); handleClick() }}>Dance</li>
                                <li onClick={() => { module("Vogue Nation"); handleClick() }}>Vogue Nation</li>
                                <li onClick={() => { module("Class Apart"); handleClick() }}>Class Apart</li>
                                <li onClick={() => { module("Music"); handleClick() }}>Music</li>
                                <li onClick={() => { module("Literary"); handleClick() }}>Literary</li>
                                <li onClick={() => { module("Art Talkies"); handleClick() }}>Art Talkies</li>
                                <li onClick={() => { module("Digital Dexterity"); handleClick() }}>Digital Dexterity</li>
                                <li onClick={() => { module("Lights Camera Action"); handleClick() }}>Lights Camera Action</li>
                                <li onClick={() => { module("Sports"); handleClick() }}>Sports</li>
                                <li onClick={() => { module("Quiz"); handleClick() }}>Quiz</li>
                                <li onClick={() => { module("Drama"); handleClick() }}>Drama</li>
                                <li onClick={() => { module("Critical Damage"); handleClick() }}>Critical Damage</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="title">
                {title.map((capital) => (<h2>{capital}</h2>))}
            </div>
            <div className="item_box" >
                <div className="item_container">
                    {array.map((arr) => {
                        return (<div className="icon">
                            <img src={arr.img} className='iconsIMG' />
                            <p className='icon_text'>{arr.comp_name}</p>
                        </div>)
                    })}
                </div>
            </div>
        </div>
    );
}

export default Body;