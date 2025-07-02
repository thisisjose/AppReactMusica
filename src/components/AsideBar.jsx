import React from 'react';
import buscarIcon from '../assets/imgs/buscar.png';
import musicaIcon from '../assets/imgs/musica.png';
import favoritoIcon from '../assets/imgs/favorito.png';
import playlistIcon from '../assets/imgs/playlist.png';

const AsideBar = () => {
  return (
    <aside className="barra-lateral">
      <nav className="navegacion">
        <ul>
          <li><img src={buscarIcon} alt="Buscar" className="icono-blanco" /> Buscar</li>
          <li><img src={musicaIcon} alt="Álbum" className="icono-blanco" /> Álbum</li>
          <li><img src={favoritoIcon} alt="Favoritos" className="icono-blanco" /> Favoritos</li>
          <li><img src={playlistIcon} alt="Playlist" className="icono-blanco" /> Playlist</li>
        </ul>
      </nav>
    </aside>
  );
};

export default AsideBar;