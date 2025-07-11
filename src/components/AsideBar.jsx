import React from 'react';

const AsideBar = () => {
  return (
    <aside className="barra-lateral">
      <nav className="navegacion">
        <ul>
          <li>Buscar</li>
          <li>Álbum</li>
          <li>Favoritos</li>
          <li>Playlist</li>
        </ul>
      </nav>
    </aside>
  );
};

export default AsideBar;