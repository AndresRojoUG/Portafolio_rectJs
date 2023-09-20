import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/github.svg';
import navIcontel from '../assets/img/telephone-fill.svg';
import navIconemail from '../assets/img/envelope.svg';
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {
 
  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Contacto</h2>
                <Col>
                
                <span className="navbar-text">
              <div className="social-icon2">

                <Row size={12} md={6}>
                <a  onClick={()=>{
                  window.open('https://www.linkedin.com/in/andres-rojo-ugalde-195070207/',"_blank")
                }} ><img className='linked' src={navIcon1} alt="" /> </a> 
               <h3 className='texto'>Linkedin</h3>

                </Row>
                <Row size={12} md={6}>
                <a onClick={()=>{
                  window.open('https://github.com/AndresRojoUG',"_blank")
                }}><img src={navIcon2} alt="" /></a>
                   <h3 className='gti'>GitHub</h3>
                </Row>

                <Row size={12} md={6}>
                <a><img src={navIcontel} alt="" /></a>
                   <h3 className='tel'>(414)-121-5255</h3>
                </Row>

                <Row size={12} md={6}>
                <a href="mailto:andresru.ti19@utsjr.edu.mx"><img src={navIconemail} alt="" /></a>
                   <h3 className='gmail'>andresru.ti19@utsjr.edu.mx</h3>
                </Row>
          
                
              </div>
           
            </span>
            </Col>
               
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}