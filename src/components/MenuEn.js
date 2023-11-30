import { Link } from "react-router-dom";
import "../scss/menu.scss";
import "../icons/font/flaticon_reduto.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Menu() {

  if (window.innerWidth > 768) {
    return (
      <div id="menu" className="menu">
        <Container fluid>
          <Row>
            <Col md={2}>
              <Link to="/en"><img className="menu__logo" src="/logo2.png" alt="" /></Link>
            </Col>
            <Col md={6}>
              <Container fluid>
                <Row>
                  <Col md={3}>
                    <Link className="menu__option" to="/filmes/en">Films</Link>
                  </Col>

                  <Col md={3}>
                    <Link className="menu__option" to="/projetos/en">Projects</Link>
                  </Col>

                  <Col md={3}>
                    <Link className="menu__option" to="/produtora/en">About</Link>
                  </Col>

                  <Col md={3}>
                    <Link className="menu__option" to="/contato/en">Contact</Link>
                  </Col>
                </Row>
              </Container>
            </Col>
            <Col md={1}></Col>
            <Col md={2}>
              <a target="_blank" rel="noreferrer" href="https://www.instagram.com/redutofilmes/" className="menu__link"><i className=" menu__icon flaticon-social-media"></i></a>
              <a target="_blank" rel="noreferrer" href="https://twitter.com/redutofilmes/" className="menu__link"><i className=" menu__icon flaticon-twitter"></i></a>
              <a target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UCLkesZLYsxeVY_ZFzZX_U7Q" className="menu__link"><i className=" menu__icon flaticon-youtube"></i></a>
              <a target="_blank" rel="noreferrer" href="https://vimeo.com/user59924036" className="menu__link"><i className=" menu__icon flaticon-vimeo"></i></a>
            </Col>
            <Col md={1}>
              <div className="menu__language">
                <Link className="menu__language__link" to="/">PT</Link> <span className="menu__language__text">|</span> <Link className="menu__language__link active" to="/en">EN</Link>
              </div>
            </Col>
  
          </Row>
        </Container>
      </div>
    )

  } else {
    return (
      <div id="menu" className="menu">
        <Container fluid>
          <Row>
            <Col xs={7}>
              <a target="_blank" rel="noreferrer" href="https://www.instagram.com/redutofilmes/" className="menu__link"><i className=" menu__icon flaticon-social-media"></i></a>
              <a target="_blank" rel="noreferrer" href="https://twitter.com/redutofilmes/" className="menu__link"><i className=" menu__icon flaticon-twitter"></i></a>
              <a target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UCLkesZLYsxeVY_ZFzZX_U7Q" className="menu__link"><i className=" menu__icon flaticon-youtube"></i></a>
              <a target="_blank" rel="noreferrer" href="https://vimeo.com/user59924036" className="menu__link"><i className=" menu__icon flaticon-vimeo"></i></a>
            </Col>
            <Col xs={1}></Col>
            <Col xs={4}>
              <div className="menu__language">
                <Link className="menu__language__link" to="/">PT</Link> <span className="menu__language__text">|</span> <Link className="menu__language__link active" to="/en">EN</Link>
              </div>
            </Col>
  
          </Row>
        </Container>
      </div>
    )
  }

}


export default Menu
