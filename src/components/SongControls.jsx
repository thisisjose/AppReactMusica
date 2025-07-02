import React from 'react';

const SongControls = () => {
  return (
    <div className="controles">
      <button className="btn" title="Anterior">
        <svg viewBox="0 0 24 24">
          <path d="M11 18V6L2.5 12L11 18ZM13 6V18H15V6H13Z" />
        </svg>
      </button>
      <button className="btn" title="Pausa">
        <svg viewBox="0 0 24 24">
          <path d="M8 5H10V19H8V5ZM14 5H16V19H14V5Z" />
        </svg>
      </button>
      <button className="btn" id="btn-siguiente" title="Siguiente">
        <svg viewBox="0 0 24 24">
          <path d="M13 6V18L21.5 12L13 6ZM11 6H9V18H11V6Z" />
        </svg>
      </button>
      <div className="progreso-tiempo">
        <div className="barra-progreso">
          <div className="progreso"></div>
        </div>
        <span className="tiempo">00:01 / 2:00</span>
      </div>
    </div>
  );
};

export default SongControls;