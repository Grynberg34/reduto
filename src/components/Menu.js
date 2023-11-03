import { Link } from "react-router-dom";
import "../scss/menu.scss";
import "../icons/font/flaticon_reduto.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Menu() {

  if (window.innerWidth > 768) {
    return (
      <div className="menu">
        <Container fluid>
          <Row>
            <Col md={2}>
              <Link to="/"><img className="menu__logo" src="/logo2.png" alt="" /></Link>
            </Col>
            <Col md={6}>
              <Container fluid>
                <Row>
                  <Col md={3}>
                    <Link className="menu__option" to="/filmes">Filmes</Link>
                  </Col>

                  <Col md={3}>
                    <Link className="menu__option" to="/projetos">Projetos</Link>
                  </Col>

                  <Col md={3}>
                    <Link className="menu__option" to="/´produtora">A Produtora</Link>
                  </Col>

                  <Col md={3}>
                    <Link className="menu__option" to="/contato">Contato</Link>
                  </Col>
                </Row>
              </Container>
            </Col>
            <Col md={1}></Col>
            <Col md={2}>
              <Link to="" className="menu__link"><i className=" menu__icon flaticon-social-media"></i></Link>
              <Link to="" className="menu__link"><i className=" menu__icon flaticon-twitter"></i></Link>
              <Link to="" className="menu__link"><i className=" menu__icon flaticon-youtube"></i></Link>
              <Link to="" className="menu__link"><i className=" menu__icon flaticon-vimeo"></i></Link>
            </Col>
            <Col md={1}>
              <div className="menu__language">
                <Link className="menu__language__link active" to="/">PT</Link> <span className="menu__language__text">|</span> <Link className="menu__language__link" to="/">EN</Link>
              </div>
            </Col>
  
          </Row>
        </Container>
      </div>
    )

  } else {
    return (
      <div className="menu">
        <Container fluid>
          <Row>
            <Col xs={7}>
              <Link to="" className="menu__link"><i className=" menu__icon flaticon-social-media"></i></Link>
              <Link to="" className="menu__link"><i className=" menu__icon flaticon-facebook-app-symbol"></i></Link>
              <Link to="" className="menu__link"><i className=" menu__icon flaticon-youtube"></i></Link>
              <Link to="" className="menu__link"><i className=" menu__icon flaticon-vimeo"></i></Link>
            </Col>
            <Col xs={1}></Col>
            <Col xs={4}>
              <div className="menu__language">
                <Link className="menu__language__link active" to="/">PT</Link> <span className="menu__language__text">|</span> <Link className="menu__language__link" to="/">EN</Link>
              </div>
            </Col>
  
          </Row>
        </Container>
      </div>
    )
  }

}


export default Menu
