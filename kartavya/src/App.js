import Navbar from './navbar/navbar.js';
import Footer from './footer/footer.js';
import Body from './body/body.js';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Events from './textFolder/events';
import Competitions from './textFolder/competitions';
import Kartavya from './textFolder/kartavya';
import MUN from './textFolder/mun';
import Merch from './textFolder/merch';
import Team from './textFolder/team';
import Sponsers from './textFolder/sponsers';
import { useState } from 'react';
import star from './footer/footer_images/Star.png'
import star1 from './footer/star_images/Frame 15234-min.png';

function App() {
  const {color,setColor} = useState([
    {title:'/',bg:"",star:star,id:0},
    {title:"/Events",bg:"img1",star:star1,id:1},
    {title:"/Competitions",bg:"img2",star:star1,id:2},
    {title:"/Kartavya",bg:"img3",star:star1,id:3},
    {title:"/MUN",bg:"img4",star:star1,id:4},
    {title:"/Merch",bg:"img5",star:star1,id:5},
    {title:"/Team",bg:"img6",star:star1,id:6},
    {title:"/Sponsers",bg:"img7",star:star1,id:7}]);

  return (
    <>
      <Navbar blog ={color}/>
      <Routes>
        <Route exact path='/' element={<Body />}></Route>
        <Route exact path="/Events" element={<Events />}></Route>
        <Route exact path="/Competitions" element={<Competitions />}></Route>
        <Route exact path="/Kartavya" element={<Kartavya />}></Route>
        <Route exact path="/MUN" element={<MUN />}></Route>
        <Route exact path="/Merch" element={<Merch />}></Route>
        <Route exact path="/Team" element={<Team />}></Route>
        <Route exact path="/Sponsers" element={<Sponsers />}></Route>
      </Routes>
      <Footer />

    </>
  );
}

export default App;
