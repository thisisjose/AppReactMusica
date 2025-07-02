import React from "react";
import MusicList from "./MusicList";

const MainContent = () => {
    return(
        <main className="contenido">
<section className="seccion-fondo">
    <img src="assets/img/imagen-fondo.jpg" alt="Fondo" className="fondo-difuminado" />
</section>

<section className="mis-canciones">
    <h3>Mis canciones</h3>
    <br />

        <MusicList/>
    {/* Aqui irá la seccion de music */}
</section>
        </main>
    );
};
export default MainContent;