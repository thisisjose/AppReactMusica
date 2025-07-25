import React, { useEffect, useState, useRef } from 'react';

const FooterBar = ({ song, onNext, onPrev, isFavorite, onToggleFavorite }) => {
  const [currentTime, setCurrentTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const intervalRef = useRef(null);

  useEffect(() => {
    setCurrentTime(0);
    setIsPlaying(true);

    if (intervalRef.current) clearInterval(intervalRef.current);

    if (song) startInterval();

    return () => clearInterval(intervalRef.current);
  }, [song]);

  useEffect(() => {
    if (isPlaying) {
      startInterval();
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [isPlaying]);

  const startInterval = () => {
    if (!song) return;

    const totalSeconds = getTotalSeconds(song.duracion);
    intervalRef.current = setInterval(() => {
      setCurrentTime((prev) => {
        if (prev + 1 >= totalSeconds) {
          clearInterval(intervalRef.current);
          onNext();
          return 0;
        }
        return prev + 1;
      });
    }, 1000);
  };

  const togglePlay = () => {
    setIsPlaying((prev) => !prev);
  };

  const getTotalSeconds = (duracion) => {
    const [min, sec] = duracion.split(':').map(Number);
    return min * 60 + sec;
  };

  const formatTime = (sec) => {
    const m = Math.floor(sec / 60).toString().padStart(2, '0');
    const s = Math.floor(sec % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  const progress = song ? (currentTime / getTotalSeconds(song.duracion)) * 100 : 0;

  return (
    <footer className="barra-music">
      <div className="info-cancion-footer">
        {song && song.albumCompleto?.portada && (
          <img
            src={`https://api-musica.netlify.app/${song.albumCompleto.portada}`}
            alt={song.album}
            className="footer-album-img"
          />
        )}
        <div className="footer-song-text">
          {song ? (
            <>
              <span className="titulo-cancion">{song.titulo}</span>
              <span className="artista">{song.artista}</span>
            </>
          ) : (
            <>
              <span className="titulo-cancion">Selecciona una canción</span>
              <span className="artista">-</span>
            </>
          )}
        </div>
        {/* LIKE */}
        {song && (
          <button
            className="btn"
            title={isFavorite ? "Quitar de favoritos" : "Agregar a favoritos"}
            onClick={onToggleFavorite}
            style={{
              marginLeft: 12,
              color: isFavorite ? "#ff4081" : "#fff",
              fontSize: "1.5em",
              background: "none",
              border: "none",
              cursor: "pointer",
            }}
          >
            {isFavorite ? "❤️" : "🤍"}
          </button>
        )}
      </div>

      <div className="controles">
        <button className="btn" title="Anterior" onClick={onPrev}>⏮️</button>
        <button className="btn" title={isPlaying ? "Pausa" : "Reproducir"} onClick={togglePlay}>
          {isPlaying ? "⏸️" : "▶️"}
        </button>
        <button className="btn" title="Siguiente" onClick={onNext}>⏭️</button>
      </div>

      <div className="progreso-tiempo">
        <div className="barra-progreso">
          <div className="progreso" style={{ width: `${progress}%` }}></div>
        </div>
        <span className="tiempo">
          {song ? formatTime(currentTime) : '00:00'} / {song ? song.duracion : '00:00'}
        </span>
      </div>
    </footer>
  );
};

export default FooterBar;