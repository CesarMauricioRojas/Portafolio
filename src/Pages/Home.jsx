import React from "react";
import "../Styles/PageStyle/HomeStyle.css";
import home from "../Images/foto.jpg";

const Home = () => {
  return (
    <div className="home">
      <div className="presentation">
        <h1>César Mauricio Rojas</h1>
        <h2>Desarrollador Backend - Matemático</h2>
        <img src={home} alt="Profile Image" />
      </div>
      
      <div className="profile">
        <p>
          ¡Hola! Soy matemático de la Universidad Nacional de Colombia,
          apasionado por la resolución de problemas, el análisis lógico y la
          enseñanza. En la universidad, tuve la oportunidad de ser tutor en
          cursos de Matemáticas, brindando apoyo a estudiantes de diversas
          carreras, esta experiencia me permitió fortalecer mis habilidades de
          comunicación y transmitir conceptos complejos de manera clara y
          accesible. Recientemente, decidí ampliar mis conocimientos y
          embarcarme en una nueva aventura: el desarrollo web. Mi enfoque
          principal se encuentra en convertirme en un desarrollador backend
          competente y eficiente. Estoy en búsqueda de mi primera oportunidad
          laboral en donde pueda seguir aprendiendo, creciendo profesionalmente
          y contribuir al desarrollo de proyectos desafiantes.
        </p>
      </div>
      <div className="">
        <p>Te presento mi portafolio de proyectos:</p>
      </div>
    </div>
  );
};

export default Home;
