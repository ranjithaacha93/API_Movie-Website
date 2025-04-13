import { useState } from 'react';
import './App.css';
import Nav from './Navbar';
import Login from './Login';
import Home from './Home'
import Popular from './popular'
import Upcoming from './upcoming';
import Show from './show';
import Sokesh from './movieshokesh';

export default function App() {
  const [show, setShow] = useState(false);
  const [showLogin , setshowLogin] = useState(false);
  const [watch , setwatch] = useState(false);
  const [selectedMovieId, setSelectedMovieId] = useState(null)
  const[shokesh , setshokesh] = useState(false)

  return (
    <>
      <Nav show={show} setShow={setShow} showLogin={showLogin} setshowLogin={setshowLogin}/>
      {showLogin && <Login showLogin={showLogin} setshowLogin={setshowLogin} />}
      <Home setwatch={setwatch} setSelectedMovieId={setSelectedMovieId}/>
      <Popular shokesh={shokesh} setshokesh={setshokesh}/>
      <Upcoming shokesh={shokesh} setshokesh={setshokesh}/>
      {watch && <Show watch={watch} setwatch={setwatch} movieId={selectedMovieId}/>}
      {shokesh &&  <Sokesh setshokesh={setshokesh} shokesh={shokesh}/>}
    </>
  );
}