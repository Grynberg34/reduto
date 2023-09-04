import { Link } from "react-router-dom";
import "../scss/socialHome.scss";
import "../icons/font/flaticon_reduto.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function SocialHome() {

  return (
    <div className="socialhome">
      <Container fluid>
        <Row>
          <Col xs={7} md={4}>
            <Link to="" className="socialhome__link"><i className=" socialhome__icon flaticon-social-media"></i></Link>
            <Link to="" className="socialhome__link"><i className=" socialhome__icon flaticon-facebook-app-symbol"></i></Link>
            <Link to="" className="socialhome__link"><i className=" socialhome__icon flaticon-youtube"></i></Link>
            <Link to="" className="socialhome__link"><i className=" socialhome__icon flaticon-vimeo"></i></Link>
          </Col>
          <Col xs={1} md={6}></Col>
          <Col xs={4} md={2}>
            <div className="socialhome__language">
              <Link className="socialhome__language__link active" to="/">PT</Link> <span className="socialhome__language__text">|</span> <Link className="socialhome__language__link" to="/">EN</Link>
            </div>
          </Col>

        </Row>
      </Container>
    </div>
  )
}


export default SocialHome
