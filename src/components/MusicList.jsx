import React from "react";

const MusicList = ({ songs, playSongAt }) => {
  if (!songs.length) return <p>Cargando canciones...</p>;

  return (
    <ul className="lista-musica">
      {songs.map((song, index) => (
        <li
          key={song.id}
          onClick={() => playSongAt(index)}
          style={{ cursor: 'pointer' }}
        >
          <span style={{ fontWeight: "bold", marginRight: 12 }}>{song.titulo}</span>
          <span style={{ color: "#aaa" }}>{song.artista}</span>
        </li>
      ))}
    </ul>
  );
};

export default MusicList;
