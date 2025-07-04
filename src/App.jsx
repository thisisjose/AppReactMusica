import React from 'react';
import AsideBar from './components/AsideBar';
import MainContent from './components/MainContent';
import FooterBar from './components/FooterBar';
import './styles/style.css';

function App() {
  return (
    <>
      <div className="contenedor-principal">
        <AsideBar />
        <MainContent />
      </div>
      <FooterBar />
    </>
  );
}

export default App;