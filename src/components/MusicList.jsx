import React from "react";

const MusicList = ({ songs, playSongAt }) => {
  if (!songs.length) return <p>Cargando canciones...</p>;

  return (
    <ul className="lista-musica">
      {songs.map((song, index) => (
        <li
          key={song.id}
          onClick={() => playSongAt(index)}
          style={{ cursor: 'pointer', alignItems: 'center', display: 'flex', gap: 16 }}
        >
          {song.albumCompleto?.portada && (
            <img
              src={`https://api-musica.netlify.app/${song.albumCompleto.portada}`}
              alt={song.album}
              style={{ width: 48, height: 48, objectFit: 'cover', borderRadius: 6, marginRight: 12 }}
            />
          )}
          <div>
            <span style={{ fontWeight: "bold", marginRight: 12 }}>{song.titulo}</span>
            <span style={{ color: "#aaa" }}>{song.artista}</span>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default MusicList;