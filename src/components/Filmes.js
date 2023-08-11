import { connect } from 'react-redux';
import { store } from '../store';
import { Link } from "react-router-dom";
import { GetFilms } from '../actions';
import "../scss/filmes.scss";
import Carousel from 'react-bootstrap/Carousel';
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
        
        <Carousel indicators={false} interval={3000} autoPlay={true}>

        { filmes.map( (filme) => 

          <Carousel.Item key={filme.id}>
            <Link to="">
              <div className='filmes__filme' key={filme.id} style={{backgroundImage: `linear-gradient(to bottom, rgba(29,45,68,0.8) 0%,rgba(29,45,68,0.8) 100%), url(${filme.imagem_capa})`}}>
                <h1 className="filmes__filme__title">{filme.nome}</h1>
                <h2 className="filmes__filme__info">{filme.ano} | {filme.duração}'</h2>
              </div>
            </Link>
          </Carousel.Item>

        )}

        </Carousel>
  
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
