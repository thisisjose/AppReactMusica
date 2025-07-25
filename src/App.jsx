import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import AsideBar from './components/AsideBar';
import FooterBar from './components/FooterBar';

import MainContent from './components/MainContent';
import Album from './pages/Album';
import Favoritos from './pages/Favoritos';
import Playlist from './pages/Playlist';
import AlbumDetails from './pages/AlbumDetails';

import './styles/style.css';

function App() {
  const [songs, setSongs] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(null);

  useEffect(() => {
    fetch("https://api-musica.netlify.app/api/canciones")
      .then((res) => res.json())
      .then((data) => {
        setSongs(data.data);
      })
      .catch((err) => console.error("Error al cargar canciones:", err));
  }, []);

  const currentSong = songs[currentIndex] || null;

  const playSongAt = (index) => {
    setCurrentIndex(index);
  };

  const playNext = () => {
    if (songs.length > 0 && currentIndex !== null) {
      setCurrentIndex((prev) => (prev + 1) % songs.length);
    }
  };

  const playPrev = () => {
    if (songs.length > 0 && currentIndex !== null) {
      setCurrentIndex((prev) => (prev - 1 + songs.length) % songs.length);
    }
  };

  return (
    <Router>
      <div className="contenedor-principal">
        <AsideBar />
        <Routes>
          <Route
            path="/"
            element={<MainContent songs={songs} playSongAt={playSongAt} />}
          />
          <Route path="/album" element={<Album songs={songs} />} />
          <Route path="/favoritos" element={<Favoritos />} />
          <Route path="/playlist" element={<Playlist />} />
          <Route
            path="/album/:titulo"
            element={<AlbumDetails songs={songs} playSongAt={playSongAt} />}
          />
        </Routes>
      </div>
      <FooterBar
        song={currentSong}
        onNext={playNext}
        onPrev={playPrev}
      />
    </Router>
  );
}

export default App;
