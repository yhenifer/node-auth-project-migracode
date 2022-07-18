import React from 'react'

const Home = () => {
    return (
      
      <div className="home">
        <div 
        className="title">Descubre y comparte rutas al aire libre a pie o en bici.</div>
       <p>Las mejores rutas de Senderismo del mundo .
        Ya somos 10.407.971 miembros explorando y compartiendo 34.845.017 rutas y 61.321.472 fotos al aire libre.</p>
        <div>
        <button  className="button"> <a href="/Login">Inicia sesión</a> </button>      
         <button  className="button"> <a href="/Registration"> Regístrate </a> </button>
        </div>
        <img src='https://www.casiaventurilla.com/wp-content/uploads/2015/09/P1150330.jpg' alt=''/>
        
      </div>
    );
  };

export default Home;