import React from 'react';

const FooterBar = () => {
    return (
        <footer className="barra-music">
            <div className="info-cancion">
                <img src="assets/imgs/album1.jpg" alt="Cancion" className="img-circular" id="img-actual" />
                <div className="texto-cancion">
                    <p className="titulo-cancion" id="titulo-actual">THE BEATLES</p>
                    <span className="artista" id="artista-actual">LSD</span>
                </div>
                <button className="btn-like" id="btn-like" title="Me gusta">
                    <svg id="icono-like" viewBox="0 0 24 24">
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 6 4 4 6.5 4c1.74 0 3.41 1.01 4.13 2.44h.74C14.09 5.01 15.76 4 17.5 4 20 4 22 6 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                </button>
            </div>

            <div className="controles">
                <button className="btn" title="Anterior">
                    <svg viewBox="0 0 24 24"><path d="M11 18V6L2.5 12L11 18ZM13 6V18H15V6H13Z" /></svg>
                </button>
                <button className="btn" title="Pausa">
                    <svg viewBox="0 0 24 24"><path d="M8 5H10V19H8V5ZM14 5H16V19H14V5Z" /></svg>
                </button>
                <button className="btn" id="btn-siguiente" title="Siguiente">
                    <svg viewBox="0 0 24 24"><path d="M13 6V18L21.5 12L13 6ZM11 6H9V18H11V6Z" /></svg>
                </button>
            </div>
            <div className="progreso-tiempo">
                <div className="barra-progreso">
                    <div className="progreso"></div>
                </div>
                <span className="tiempo">00:01 / 2:00</span>
            </div>
        </footer>
    );
};

export default FooterBar;