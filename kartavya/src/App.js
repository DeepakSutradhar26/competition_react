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
  return (
    <>
      <Navbar />
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
