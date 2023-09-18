import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl,url }) => {

function sendUrl(){
  window.open(url,'_blank')
}
  
  return (
    <Col size={12} sm={6} md={4}>
      <div onClick={ sendUrl} className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  )
}