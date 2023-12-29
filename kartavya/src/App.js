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

function App() {

  const data = [
    { title: "/", bg: "footer ", star: "star", id: 0,bool: false},
    { title: "/Events", bg: "footer img1", star: "star1 star", id: 1,bool: false },
    { title: "/Competitions", bg: "footer img2", star: "star1 star", id: 2,bool: false },
    { title: "/Kartavya", bg: "footer img3", star: "star1 star", id: 3,bool: false },
    { title: "/MUN", bg: "footer img4", star: "star1 star", id: 4,bool: false },
    { title: "/Merch", bg: "footer img5", star: "star1 star", id: 5,bool: false },
    { title: "/Team", bg: "footer img6", star: "star1 star", id: 6,bool: false },
    { title: "/Sponsers", bg: "footer img7", star: "star1 star", id: 7,bool: false }];

  return (
    <>
        <Navbar/>
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
        {data.map((item) => <Footer key={item.id} star={item.star} title={item.title} bg={item.bg}/>)}
    </>
  );
}

export default App;
