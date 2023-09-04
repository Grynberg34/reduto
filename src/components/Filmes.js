import { connect } from 'react-redux';
import { store } from '../store';
import { Link } from "react-router-dom";
import { GetFilms } from '../actions';
import "../scss/filmes.scss";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Social from './Social';
import Menu from './Menu';

function Filmes(props) {

  var filmes = props.filmes;

  if (filmes === null) {
    store.dispatch(GetFilms())

    return (
      <div>
      </div>
    )

  } else {

    return (
      <div className='filmes' id='filmes'>
  
        <Social></Social>
        <Menu></Menu>


        <div className='filmes '>

        <Container fluid>

          <Row>

            { filmes.map( (filme) => 

              <Col className='' md={6} key={filme.id}>
                <Link to="/">
                
                  <div className='filmes__filme'>
                    <h1 className='filmes__filme__title'>{filme.nome}</h1>
                    <video className='filmes__filme__video' autoPlay loop muted playsInline disableRemotePlayback  src={filme.video_capa}></video>
                    <div className='filmes__filme__info'>
                      <h2 className='filmes__filme__info__title'><i className='filmes_filme__info__icon flaticon-clock'></i> {filme.duração}'</h2>
                      <h2 className='filmes__filme__info__title'><i className='filmes_filme__info__icon flaticon-calendar'></i> {filme.ano}</h2>
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
    filmes: state.filmes
  }
  
}

export default connect(
  mapStateToProps
)(Filmes);
