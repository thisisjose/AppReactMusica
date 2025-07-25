import MusicList from "../components/MusicList";

const Favoritos = ({ songs, playSongAt }) => (
  <section
    className="mis-canciones"
    style={{
      maxWidth: 700,
      margin: "0 auto",
      marginTop: 64, // Margen superior para bajar la lista
      marginLeft: 100, // <-- Mover a la derecha
    }}
  >
    <h2 style={{ color: "#fff", textAlign: "center", marginBottom: 32 }}>
      Mis canciones Favoritas
    </h2>
    {songs.length === 0 ? (
      <p style={{ color: "#aaa", textAlign: "center" }}>
        No tienes canciones favoritas aún.
      </p>
    ) : (
      <MusicList songs={songs} playSongAt={playSongAt} />
    )}
  </section>
);

export default Favoritos;
