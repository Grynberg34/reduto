import { Link } from "react-router-dom";
import "../scss/social.scss";
import "../icons/font/flaticon_mycollection.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Social() {

  return (
    <div className="social">
      <Container fluid>
        <Row>
          <Col md={4}>
            <Link to="" className="social__link"><i className=" social__icon flaticon-social-media"></i></Link>
            <Link to="" className="social__link"><i className=" social__icon flaticon-facebook-app-symbol"></i></Link>
            <Link to="" className="social__link"><i className=" social__icon flaticon-youtube"></i></Link>
            <Link to="" className="social__link"><i className=" social__icon flaticon-vimeo"></i></Link>
          </Col>
          <Col md={6}></Col>
          <Col md={2}>
            <div className="social__language">
              <Link className="social__language__link active" to="/">PT</Link> <span className="social__language__text">|</span> <Link className="social__language__link" to="/">EN</Link>
            </div>
          </Col>

        </Row>
      </Container>
    </div>
  )
  }


export default Social
