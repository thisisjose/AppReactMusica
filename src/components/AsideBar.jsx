import React from "react";
import { NavLink } from "react-router-dom";

const AsideBar = () => {
  return (
    <aside className="barra-lateral">
      <nav className="navegacion">
        <ul>
          <li><NavLink to="/" style={{ color: "#fff", textDecoration: "none" }}>Inicio</NavLink></li>
          <li><NavLink to="/album" style={{ color: "#fff", textDecoration: "none" }}>Álbum</NavLink></li>
          <li><NavLink to="/favoritos" style={{ color: "#fff", textDecoration: "none" }}>Favoritos</NavLink></li>
          <li><NavLink to="/playlist" style={{ color: "#fff", textDecoration: "none" }}>Playlist</NavLink></li>
        </ul>
      </nav>
    </aside>
  );
};

export default AsideBar;
