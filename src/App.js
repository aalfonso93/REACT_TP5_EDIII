
import './App.css';
import Testimonio from './componentes/Testimonio.js';

import imagenShawn from './imagenes/testimonio-shawn.png';
import imagenSarah from './imagenes/testimonio-sarah.png';
import imagenEmma from './imagenes/testimonio-emma.png';

function App() {
  return (
    <div className="App">
      <div className="contenedor-principal">
        <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1>

        <Testimonio
          nombre="Shawn Wang"
          pais="Singapur"
          cargo="Ingeniero de Software"
          empresa="Amazon"
          imagen={imagenShawn}
          testimonio="Da miedo cambiar de carrera. Solo gané la confianza de que podía programar trabajando a través de los cientos de horas de lecciones gratuitas en freeCodeCamp. Dentro de un año tuve un trabajo de seis cifras como ingeniero de software. freeCodeCamp cambió mi vida."
        />

        <Testimonio
          nombre="Sarah Chima"
          pais="Nigeria"
          cargo="Ingeniera de Software"
          empresa="ChatDesk"
          imagen={imagenSarah}
          testimonio="freeCodeCamp fue la puerta de entrada a mi carrera como desarrolladora de software. El plan de estudios bien estructurado me permitió adquirir conocimientos de programación desde un nivel de principiante total hasta un nivel muy seguro. Era todo lo que necesitaba para conseguir mi primer trabajo de desarrolladora en una empresa increíble."
        />

        <Testimonio
          nombre="Emma Bostian"
          pais="Suecia"
          cargo="Ingeniera de Software"
          empresa="Spotify"
          imagen={imagenEmma}
          testimonio="Siempre he tenido problemas para aprender JavaScript. He tomado muchos cursos, pero el curso de freeCodeCamp fue el que se quedó. Estudiar JavaScript, así como estructuras de datos y algoritmos en freeCodeCamp me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniera de software en Spotify."
        />
      </div>
    </div>
  );
}

export default App;