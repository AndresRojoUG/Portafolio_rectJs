import meter1 from "../assets/img/js.png";
import meter2 from "../assets/img/550px-Java_Logo.svg.png";
import meter3 from "../assets/img/spring.png";
import meter4 from "../assets/img/angular.png";
import meter5 from "../assets/img/react-development.png";
import meter6 from "../assets/img/sql.png";
import meter7 from "../assets/img/Group-56816.webp";

import meter9 from "../assets/img/css.png";
import meter10 from "../assets/img/html5.png";
import meter11 from "../assets/img/ex.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Habilidades</h2>
                        <p>En esta sección, te presento un resumen de las competencias técnicas que he cultivado a lo largo de mi carrera en el desarrollo de aplicaciones y la gestión de bases de datos. Estas habilidades son fundamentales para diseñar, construir y mantener sistemas de software robustos y eficientes, las tecnológicas que uso son: </p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>JavaScript</h5>
                            </div>
                            <div className="item">
                                <img src={meter5} alt="Image" />
                                <h5>ReactJs</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>Java</h5>
                            </div>
                            <div className="item">
                                <img src={meter4} alt="Image" />
                                <h5>Angular</h5>
                            </div>
                            <div className="item">
                                <img src={meter6} alt="Image" />
                                <h5>BD SQL</h5>

                            </div>
                            <div className="item">
                                <img src={meter7} alt="Image" />
                                <h5>BD NoSql</h5>
                                
                            </div>
                          
                            <div className="item">
                                <img src={meter9} alt="Image" />
                                <h5>CSS</h5>
                            </div>
                            <div className="item">
                                <img src={meter10} alt="Image" />
                                <h5>HTML</h5>
                            </div>
                            <div className="item">
                                <img src={meter11} alt="Image" />
                                <h5>Excel</h5>
                            </div>
                           
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>Spring</h5>
                            </div>
                            
                          
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}