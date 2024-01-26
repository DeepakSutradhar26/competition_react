import Navbar from './navbar/navbar.js';
import Footer from './footer/footer.js';
import Body from './body/body.js';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Events from './testFolder/events.js';
import Competitions from './testFolder/competitions.js';
import Kartavya from './testFolder/kartavya.js';
import MUN from './testFolder/mun.js';
import Merch from './testFolder/merch.js';
import Team from './testFolder/team.js';
import Sponsers from './testFolder/sponsers.js';
import Register from './testFolder/register.js';
import circle from './footer/footer_images/Round element.png';
import circle1 from './footer/circle_images/Frame 15232-min.png';
import windows from './footer/footer_images/Windows.png';
import windows1 from './footer/windows_images/Frame 15230-min.png';



// import the files here from footer to use in props below
// pass the imported file in data in src

function App() {

  const data = [
    { title: "/", bg: "footer ", star: "star", id: 0, bool: false, reg_bg: "register reg_bg", circle_src: circle, windows_src: windows },
    { title: "/Events", bg: "footer img1", star: "star1 star", id: 1, bool: false, reg_bg: "register reg_bg1", circle_src: circle1, windows_src: windows1 },
    { title: "/Competitions", bg: "footer img2", star: "star1 star", id: 2, bool: false, reg_bg: "register reg_bg2", circle_src: circle1, windows_src: windows1 },
    { title: "/Kartavya", bg: "footer img3", star: "star1 star", id: 3, bool: false, reg_bg: "register reg_bg3", circle_src: circle1, windows_src: windows1 },
    { title: "/MUN", bg: "footer img4", star: "star1 star", id: 4, bool: false, reg_bg: "register reg_bg4", circle_src: circle1, windows_src: windows1 },
    { title: "/Merch", bg: "footer img5", star: "star1 star", id: 5, bool: false, reg_bg: "register reg_bg5", circle_src: circle1, windows_src: windows1 },
    { title: "/Team", bg: "footer img6", star: "star1 star", id: 6, bool: false, reg_bg: "register reg_bg6", circle_src: circle1, windows_src: windows1 },
    { title: "/Sponsers", bg: "footer img7", star: "star1 star", id: 7, bool: false, reg_bg: "register reg_bg7", circle_src: circle1, windows_src: windows1 },
  ];

  const data1 = [
    {title: "/Competitions_Dance",key: 1,icons: ["Electric Heels","Step Up","Navras","So You Think You Can Dance","Dancing Duo"]},
    {title: "/Competitions_Music",key: 2,icons: ["Voice of Alcheringa","Unplugged"]},
    {title: "/Competitions_Drama",key: 3,icons: ["Theatrix","Halla Bol","Monodrama"]},
    {title: "/Competitions_Class_Apart",key: 4,icons: ["Rap Battle","BeatBash","Rock-o-phonix","Mr & Ms Alcheringa","Crossfade","Alcher Con"]},
    {title: "/Competitions_Vogue_Nation",key: 5,icons: ["Haute Couture","States of Dress","Glamour Nova"]},
    {title: "/Competitions_Art_Talkies",key: 6,icons: ["Live Sketching","Clay Modelling","Who is it?","Ink the tee","Face Art","Rangoli","Graffiti"]},
    {title: "/Competitions_Literary",key: 7,icons: ["Parliamentary Debate","Poetry Slam-Hindi","Poetry Slam-English","Zephyr","Mehfil-e-Alcheringa"]},
    {title: "/Competitions_Sports",key: 8,icons: ["5 on 5 Football","Arm Wrestling","Gully Cricket","3 vs 3 Basketball","3 vs 3 Volleyball"]},
    {title: "/Competitions_Digital",key: 9,icons: ["Alcher Diva/Hunk","Doodle Pad","Custom Brush"]},
    {title: "/Competitions_LCA",key: 10,icons: ["Just reel it","Vlog Verse","Director's Cut","Snapthrillz"]},
    {title: "/Competitions_Quiz",key: 11,icons: ["Genral Quiz","Buisness Quiz","Comic Quiz","Sports Quiz"]},
    {title: "/Competitions_Critical_Damage",key: 12,icons: ["Critical Damage"]}];


  return (
    <>
      {data.map((item) => <Navbar key={item.id} title={item.title} reg_bg={item.reg_bg} />)}
      <Routes>
        <Route exact path="/" element={<Competitions />}></Route>
        <Route exact path="/Events" element={<Events />}></Route>
        <Route exact path="/Competitions" element={<Body/>}></Route>
        <Route exact path="/Kartavya" element={<Kartavya />}></Route>
        <Route exact path="/MUN" element={<MUN />}></Route>
        <Route exact path="/Merch" element={<Merch />}></Route>
        <Route exact path="/Team" element={<Team />}></Route>
        <Route exact path="/Sponsers" element={<Sponsers />}></Route>
        <Route exact path="/Register" element={<Register />}></Route>
      </Routes>
      {data.map((item) => <Footer key={item.id} star={item.star} title={item.title} bg={item.bg} circle_src={item.circle_src} windows_src={item.windows_src} />)}
    </>
  );
}

export default App;
