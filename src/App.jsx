import React, { useState, useEffect } from 'react';
import AsideBar from './components/AsideBar';
import MainContent from './components/MainContent';
import FooterBar from './components/FooterBar';
import './styles/style.css';

function App() {
  const [songs, setSongs] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(null); // índice de la canción actual

  // Cargar canciones desde la API
  useEffect(() => {
    fetch("https://api-musica.netlify.app/api/canciones")
      .then((res) => res.json())
      .then((data) => {
        setSongs(data.data);
      });
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
    <>
      <div className="contenedor-principal">
        <AsideBar />
        <MainContent songs={songs} playSongAt={playSongAt} />
      </div>
      <FooterBar
        song={currentSong}
        onNext={playNext}
        onPrev={playPrev}
      />
    </>
  );
}

export default App;
