import { Link, useLocation } from "react-router-dom";
import "../scss/menu.scss";
import "../icons/font/flaticon_reduto.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Menu() {

  const location = useLocation();
  console.log(location.pathname);
  
  if (location.pathname.endsWith('/')) {
    var url = location.pathname.slice(0, -1)

    console.log(url)
  } else {
    var url = location.pathname
  }

  if (window.innerWidth > 768) {
    return (
      <div id="menu" className="menu">
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
                    <Link className="menu__option" to="/produtora">A Produtora</Link>
                  </Col>

                  <Col md={3}>
                    <Link className="menu__option" to="/contato">Contato</Link>
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
                <Link className="menu__language__link active" to="">PT</Link> <span className="menu__language__text">|</span> <Link className="menu__language__link" to={`${url}/en`}>EN</Link>
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
                <Link className="menu__language__link active" to="">PT</Link> <span className="menu__language__text">|</span> <Link className="menu__language__link" to={`${url}/en`}>EN</Link>
              </div>
            </Col>
  
          </Row>
        </Container>
      </div>
    )
  }

}


export default Menu
