import React from "react";
import "./Home.css";
import photo from "../../Images/foto.jpg";
import odontotal from "../../Images/odontotal.jpg";
import bukinfood from "../../Images/bukinfood.jpg";

const Home = () => {
  return (
    <div className="home">
      <div className="presentation">
        <h1>César Mauricio Rojas</h1>
        <h2>Desarrollador FullStack - Matemático</h2>
        <div className="container-photo">
          <img src={photo} alt="Profile Image" />
        </div>
        <p className="description-profile">
          ¡Hola! Soy matemático de la Universidad Nacional de Colombia,
          apasionado por la resolución de problemas, el análisis lógico y la
          enseñanza. Recientemente, decidí ampliar mis conocimientos en el
          desarrollo web. Mi enfoque principal se encuentra en convertirme en un
          desarrollador competente y eficiente. Continuo creciendo
          profesionalmente y contribuyendo al desarrollo de proyectos
          desafiantes.
        </p>
      </div>

      <div className="projects">
        <h2>Portafolio de proyectos:</h2>
        <div className="container-experience">
          <div className="info">
            <p>+1</p>
            <p>año</p>
          </div>
          <div className="info">
            <p>+600</p>
            <p>USD</p>
          </div>
        </div>

        <div className="container-projects">
          <div className="project-card">
            <img className="img-project" src={odontotal} alt="" />
            <h3>Odontotal</h3>
            <div></div>
          </div>
          <div className="project-card">
            <img className="img-project" src={bukinfood} alt="" />
            <h3>Bukinfood</h3>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
