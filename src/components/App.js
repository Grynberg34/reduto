import { connect } from 'react-redux';
import { store } from '../store';
import { Link } from "react-router-dom";
import { GetNumbers } from '../actions';
import "../scss/home.scss";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SocialHome from './SocialHome';

function App(props) {

  var numbers = props.numbers;

  if (numbers === null) {
    store.dispatch(GetNumbers())

    return (
      <div>
      </div>
    )

  } else if (window.innerWidth > 768) {
  return (
    
    <div className="home" id="home">

      <SocialHome></SocialHome>

      <div className='home__menu'>
        <Link to="/"><img className='home__menu__logo scale-in-ver-center' src="/logo2.png" alt="" /></Link>
      </div>
      <Container fluid>
        <Row>
          <Col className='area g-0' md={6} style={{backgroundImage: `linear-gradient(to bottom, rgba(29,45,68,0.8) 0%,rgba(29,45,68,0.8) 100%), url('/imagens/${numbers[0]}.jpg')`}}>
            <Link to="/filmes" className="area__link">Filmes realizados</Link>
          </Col>
          <Col className='area g-0' md={6} style={{backgroundImage: `linear-gradient(to bottom, rgba(29,45,68,0.8) 0%,rgba(29,45,68,0.8) 100%), url('/imagens/${numbers[1]}.jpg')`}}>
          <Link to="/" className="area__link">Projetos em <br></br> desenvolvimento</Link>
          </Col>
        </Row>
        <Row>
          <Col className='area g-0' md={6} style={{backgroundImage: `linear-gradient(to bottom, rgba(29,45,68,0.8) 0%,rgba(29,45,68,0.8) 100%), url('/imagens/${numbers[2]}.jpg')`}}>
            <Link to="/" className="area__link">A Produtora</Link>
          </Col>
          <Col className='area g-0' md={6} style={{backgroundImage: `linear-gradient(to bottom, rgba(29,45,68,0.8) 0%,rgba(29,45,68,0.8) 100%), url('/imagens/${numbers[3]}.jpg')`}}>
          <Link to="/" className="area__link">Contato</Link>
          </Col>
        </Row>
      </Container>
    </div>
  )
  } else {

    return (
      <div className='home' id="home">

        <SocialHome></SocialHome>

        <div className='home__menu'>
          <Link to="/"><img className='home__menu__logo scale-in-ver-center' src="/logo2.png" alt="" /></Link>
          <Link to="/filmes" className="home__menu__link">Filmes <br/> realizados</Link>
          <Link to="/" className="home__menu__link">Projetos em <br/> desenvolvimento</Link>
          <Link to="/" className="home__menu__link">A Produtora</Link>
          <Link to="/" className="home__menu__link">Contato</Link>
        </div>
        <Container fluid>
          <Row>
            <Col className='area g-0' md={6} style={{backgroundImage: `linear-gradient(to bottom, rgba(29,45,68,0.8) 0%,rgba(29,45,68,0.8) 100%), url('/imagens/${numbers[0]}.jpg')`}}>
            </Col>
            <Col className='area g-0' md={6} style={{backgroundImage: `linear-gradient(to bottom, rgba(29,45,68,0.8) 0%,rgba(29,45,68,0.8) 100%), url('/imagens/${numbers[1]}.jpg')`}}>
            </Col>
          </Row>
          <Row>
            <Col className='area g-0' md={6} style={{backgroundImage: `linear-gradient(to bottom, rgba(29,45,68,0.8) 0%,rgba(29,45,68,0.8) 100%), url('/imagens/${numbers[2]}.jpg')`}}>

            </Col>
            <Col className='area g-0' md={6} style={{backgroundImage: `linear-gradient(to bottom, rgba(29,45,68,0.8) 0%,rgba(29,45,68,0.8) 100%), url('/imagens/${numbers[3]}.jpg')`}}>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }

}


function mapStateToProps(state) {
  return {
    numbers: state.numbers
  }
  
}

export default connect(
  mapStateToProps
)(App);
