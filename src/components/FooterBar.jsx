import React from 'react';

const FooterBar = () => {
  return (
    <footer className="barra-music">
      <div className="info-cancion">
        <span className="titulo-cancion">Come Together</span>
        <span className="artista">The Beatles</span>
      </div>
      <div className="controles">
        <button className="btn" title="Anterior">⏮️</button>
        <button className="btn" title="Pausa">⏸️</button>
        <button className="btn" title="Siguiente">⏭️</button>
      </div>
      <div className="progreso-tiempo">
        <span className="tiempo">00:01 / 2:00</span>
      </div>
    </footer>
  );
};

export default FooterBar;