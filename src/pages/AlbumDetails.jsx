// src/pages/AlbumDetails.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MusicList from "../components/MusicList";

const AlbumDetails = ({ songs, playSongAt }) => {
  const { titulo } = useParams();
  const [canciones, setCanciones] = useState([]);
  const [albumInfo, setAlbumInfo] = useState(null);

  useEffect(() => {
    const cancionesFiltradas = songs.filter(
      (c) => c.albumCompleto && c.albumCompleto.titulo === decodeURIComponent(titulo)
    );
    setCanciones(cancionesFiltradas);
    if (cancionesFiltradas.length > 0) {
      setAlbumInfo(cancionesFiltradas[0].albumCompleto);
    }
  }, [titulo, songs]);

  if (!albumInfo)
    return (
      <p style={{ color: "#fff", textAlign: "center", marginTop: 50 }}>
        Cargando álbum...
      </p>
    );

  return (
    <main className="contenido" style={{ width: "100%", minHeight: "calc(100vh - 80px)" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "flex-start",
          width: "100%",
          maxWidth: 1400,
          margin: "0 auto",
          paddingTop: 40,
        }}
      >
        {/* Lista de canciones */}
        <section
          className="mis-canciones"
          style={{
            flex: 1,
            maxWidth: 700,
            minWidth: 320,
            background: "none",
            boxSizing: "border-box",
            overflow: "visible",
            paddingTop: 0,
            marginRight: 32,
            marginTop: 100,
            marginLeft: 100, // <-- Aumenta este valor para mover la lista a la derecha
          }}
        >
          <h3 style={{ textAlign: "left", marginBottom: 24, marginLeft: 8 }}>
            Canciones del álbum
          </h3>
          <MusicList
            songs={canciones}
            playSongAt={(idx) => {
              const globalIdx = songs.findIndex(
                (s) => s.id === canciones[idx].id
              );
              if (globalIdx !== -1) playSongAt(globalIdx);
            }}
          />
        </section>
        {/* Portada y datos del álbum */}
        <section
          style={{
            width: 380,
            minWidth: 320,
            maxWidth: 420,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            background: "rgba(30,30,30,0.7)",
            borderRadius: 18,
            padding: "32px 24px",
            boxShadow: "0 4px 32px #0008",
            marginLeft: "200", // Mover a la derecha
            height: "fit-content",
            marginTop: 110, // <--  Margen para bajarla
          }}
        >
          <img
            src={`https://api-musica.netlify.app/${albumInfo.portada}`}
            alt={albumInfo.titulo}
            style={{
              width: 260,
              height: 260,
              objectFit: "cover",
              borderRadius: 16,
              marginBottom: 24,
              boxShadow: "0 4px 24px #0007",
            }}
          />
          <h2 style={{ margin: 0, marginBottom: 8, textAlign: "center" }}>
            {albumInfo.titulo}
          </h2>
          <span style={{ color: "#aaa", fontSize: 18, marginBottom: 0 }}>
            {albumInfo.artista}
          </span>
        </section>
      </div>
    </main>
  );
};

export default AlbumDetails;
