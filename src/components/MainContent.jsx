import React from "react";
import MusicList from "./MusicList";

const MainContent = () => {
    return(
        <main className="contenido">
            <section className="seccion-fondo">
                <img src="/src/assets/imagen-fondo.jpg" alt="Fondo" className="fondo-difuminado" />
            </section>
            <section className="mis-canciones">
                <h3>My music</h3>
                <br />
                <MusicList/>
            </section>
        </main>
    );
};
export default MainContent;