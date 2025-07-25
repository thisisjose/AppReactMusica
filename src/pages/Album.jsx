import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Album = ({ songs }) => {
  const [albums, setAlbums] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (songs.length > 0) {
      const albumMap = new Map();

      songs.forEach((cancion) => {
        const album = cancion.albumCompleto;
        if (album && !albumMap.has(album.titulo)) {
          albumMap.set(album.titulo, {
            titulo: album.titulo,
            artista: cancion.artista,
            portada: album.portada,
          });
        }
      });

      setAlbums(Array.from(albumMap.values()));
    }
  }, [songs]);

  if (songs.length === 0) {
    return <p style={{color: '#fff', textAlign: 'center', marginTop: 50}}>Cargando álbumes...</p>;
  }

  return (
    <section
      className="mis-canciones"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        paddingTop: "60px",
        textAlign: "center",
      }}
    >
      <h2 style={{ marginBottom: 24 }}>Álbumes</h2>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 24,
          justifyContent: "center",
        }}
      >
        {albums.map((album, i) => (
          <div
            key={i}
            style={{
              width: 180,
              background: "#222",
              padding: 12,
              borderRadius: 12,
              color: "#fff",
              boxShadow: "0 0 8px #0005",
              textAlign: "left",
              cursor: 'pointer'
            }}
            onClick={() => {
              navigate(`/album/${encodeURIComponent(album.titulo)}`);
            }}
          >
            <img
              src={`https://api-musica.netlify.app/${album.portada}`}
              alt={album.titulo}
              style={{
                width: "100%",
                height: 180,
                objectFit: "cover",
                borderRadius: 8,
                marginBottom: 12,
              }}
            />
            <strong>{album.titulo}</strong>
            <p style={{ color: "#aaa", fontSize: 14 }}>{album.artista}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Album;
