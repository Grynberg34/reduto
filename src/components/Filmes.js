import { connect } from 'react-redux';
import { store } from '../store';
import { Link } from "react-router-dom";
import { GetFilms } from '../actions';
import { GetNumbers } from '../actions';
import "../scss/filmes.scss";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Menu from './Menu';
import MenuMobile from './MenuMobile';

function Filmes(props) {

  var filmes = props.filmes;

  var numbers = props.numbers;

  if (filmes === null) {
    store.dispatch(GetFilms())
    if (numbers === null) {
      store.dispatch(GetNumbers())
    }

    return (
      <div>
      </div>
    )

  } else {

    return (
      <div className='filmes' id='filmes' style={{backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.8) 0%,rgba(0,0,0,0.8) 100%), url('/imagens/${numbers[0]}.jpg')`}}>
  
        <Menu></Menu>
        <MenuMobile></MenuMobile>


        <div className='filmes '>

        <Container fluid>

          <Row>

            { filmes.map( (filme) => 

              <Col className='' md={6} key={filme.id}>
                <Link to={`/filmes/${filme.uri}`}>
                
                  <div className='filmes__filme'>
                    <h1 className='filmes__filme__title'>{filme.nome}</h1>
                    <video className='filmes__filme__video' autoPlay loop muted playsInline disableRemotePlayback  src={filme.video_capa}></video>
                    <div className='filmes__filme__info'>
                      <h2 className='filmes__filme__info__title'>{filme.ano}</h2>
                    </div>
                  </div>
                
                </Link>
              </Col>
            )}  

          </Row>

        </Container>

  
        </div>

      </div>
    )

  }



}


function mapStateToProps(state) {
  return {
    filmes: state.filmes,
    numbers: state.numbers
  }
  
}

export default connect(
  mapStateToProps
)(Filmes);
