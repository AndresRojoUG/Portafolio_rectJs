import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/LandingPageadn.png";
import projImg2 from "../assets/img/LandingPageReact.png";
import projImg3 from "../assets/img/Rick.png";
import projImg4 from "../assets/img/seguidorGastos.png";
import projImg5 from "../assets/img/PaginaTarea1.png";
import projImg6 from "../assets/img/tareasPagina2.png";
import projImg7 from "../assets/img/havc.png";
import projImg8 from "../assets/img/portafolio.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { useEffect, useState } from "react";

export const Projects = () => {
  const [urlActual,setUrl]=useState()
  

useEffect(()=>{
  setUrl(window.location.href)
  console.log(urlActual)
})

  const projects = [
    {
      title: "Landig Page AngularJs",
      description: "Diseño y desarrollo de landing page para compañía realizada en AngularJs",
      imgUrl: projImg1,
      url:'https://ornate-zuccutto-819c17.netlify.app/'
    },
    {
      title: "Landing page Reactjs",
      description: "Diseño y desarrollo de landing page realizada en ReactJs",
      imgUrl: projImg2,
      url:"https://resonant-swan-a0866f.netlify.app/"
    },
    {
      title: "Página de soluciones AngularJs",
      description: "Diseño y desarrollo de pagina para proyecto de universidad",
      imgUrl: projImg7,
      url:"https://beamish-hummingbird-c1bc88.netlify.app/"
    },
    {
      title: "Rick and Morty ReactJs",
      description: "Diseño y desarrollo consumiendo API",
      imgUrl: projImg3,
      url:"https://api-rick-and-morty-react-js.vercel.app/"
    },
    {
      title: "Portafolio en ReactJs",
      description: "Desarrollo de portafolio en React",
      imgUrl: projImg8,
      url:urlActual+'#home'
    },
    {
      title: "Seguidor de Gastos ReactJs",
      description: "Diseño y desarrollo de seguidor de gastos",
      imgUrl: projImg4,
      url:"https://classy-faloodeh-ea854e.netlify.app/"
    },
    {
      title: "Tareas LocalStorage ReactJs",
      description: " Desarrollo de creador de tareas",
      imgUrl: projImg5,
      url:"https://inquisitive-souffle-797c1a.netlify.app/"
    },
    {
      title: "Primer Proyecto en ReactJs",
      description: "Desarrollo de aplicación en React",
      imgUrl: projImg6,
      url:"https://incomparable-boba-1a006e.netlify.app/"
    },
   
  ];

  return (
    <section className="project" id="projects">
      
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Proyectos</h2>
                <p>En esta sección te muestro algunos proyectos que he hecho en tecnologías como Reactjs o en AngularJs.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
              
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}