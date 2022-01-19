import React from "react"
import "./AboutMe.scss"
import CV from "../../images/cv.pdf"
import { Button, Container } from "react-bootstrap"
const AboutMe = () => {
  return (
    <Container className="about-me">
      <h2>Acerca de mi</h2>
      <hr />
      <p>
        Soy Full Stack Developer y me encanta brindar soluciones óptimas para
        problemas comunes utilizando el código como herramienta principal. Nunca
        me conformo con lo que ya sé y siempre busco formas de mejorarme
        manteniéndome al día con las últimas tecnologías, tendencias y mejores
        prácticas. Realmente amo compartir mi conocimiento con otras personas y
        ayudarlas a crecer. Realmente creo que la enseñanza es mi segunda gran
        pasión junto al desarrollo.
      </p>
      <p>
        En mis 25+ años de experiencia trabajando como profesional de TI, he
        estado involucrado en muchos proyectos con diferentes tecnologías, desde
        aplicaciones backend, frontend y móviles hasta diseño y arquitectura
        basados ​​en la nube para sistemas detallados. Pero sin duda mi
        especialidad es el desarrollo y diseño de backend. En los últimos años
        he dedicado la mayor parte de mi tiempo a trabajar y diseñar soluciones
        en la nube basadas en microservicios y arquitecturas serverless.
      </p>
      <p>
        Además de eso, también he invertido en trabajar con diferentes
        integraciones de API famosas, incluidas Instagram, Facebook y Google
        Ads, para crear automatizaciones y sistemas de monitoreo que permitan a
        los usuarios administrar todos los anuncios de sus campañas digitales en
        un solo lugar.
      </p>
      <hr />
      <a href={CV} target="_blank" rel>
        <Button variant="primary">Descargar CV</Button>
      </a>
    </Container>
  )
}

export default AboutMe
