import { connect } from 'react-redux';
import { store } from '../store';
import { GetFilm } from '../actions';
import { GetImgLink } from '../actions';
import { useParams } from "react-router-dom";
import "../scss/filme.scss";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MenuEn from './MenuEn';
import MenuMobileEn from './MenuMobileEn';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';

function FilmeRealizado(props) {

  var { id } = useParams();

  var filme = props.filme;

  var link = props.link;
  var index = props.index;

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = (link, index) => {
    store.dispatch(GetImgLink(link, index))
    setShow(true)
  };

  const getNextImage = (link, index) => {

    if (filme.galeria.length < index+1) {
      index=0
      link= filme.galeria[0]
    }

    store.dispatch(GetImgLink(link, index))
  }

  const getPrevImage = (link, index) => {

    if (index === -1) {
      index=filme.galeria.length-1
      link= filme.galeria[filme.galeria.length-1]
    }

    store.dispatch(GetImgLink(link, index))
  }


  if (filme === null || filme.uri !== id) {
    store.dispatch(GetFilm(id))

    return (
      <div>
      </div>
    )

  } else {

    var ficha = Object.entries(filme.ficha_técnica_en);

    return (
      <div className='filme' id='filme' style={{backgroundImage: `linear-gradient(to bottom, rgba(0,0,0, 0.8) 0%,rgba(0,0,0,0.8) 100%), url('${filme.imagem_capa}')`}}> 

        <MenuEn></MenuEn>
        <MenuMobileEn></MenuMobileEn>

        <Container fluid>
          <Row>
            <Col md={5}>
              <div className='filme__info'>
                <h1 className='filme__info__title'>{filme.nome}</h1>
                <h2 className='filme__info__subtitle'>Year</h2>
                <h2 className='filme__info__text'>{filme.ano}</h2>
                <h2 className='filme__info__subtitle'>Duration</h2>
                <h2 className='filme__info__text'>{filme.duração} minutes</h2>
                <h2 className='filme__info__subtitle'>State</h2>
                <h2 className='filme__info__text'>{filme.estado}</h2>
                <h2 className='filme__info__subtitle'>Sinopsis</h2>
                <h2 className='filme__info__text'>{filme.sinopse}</h2>
              </div>
            </Col>

            <Col md={1}></Col>
            
            <Col md={6}>
              <div className='filme__content'>

                <div className='filme__content__trailer'>
                  <h3 className='filme__content__trailer__title'>Trailer</h3>
                  <iframe className='filme__content__trailer__frame' src={`https://player.vimeo.com/video/${filme.trailer}`}
                  allowFullScreen
                  title='video'
                  />
                </div>

                <div className='filme__content__ficha'>

                  <h3 className='filme__content__ficha__title'>Cast and Crew</h3>

                  <ul className='filme__content__ficha__list'>

                  { ficha.map( (item, index) => 

                    <li className='filme__content__ficha__list__option' key={index}><span className='azul'>{item[0]}:</span> {item[1]}</li>

                  )}

                  </ul>

                </div>

                <div className='filme__content__festivais'>
                  <h3 className='filme__content__festivais__title'>Festivals and Awards</h3>

                    <ul className='filme__content__festivais__list'>

                    { filme.festivais.map( (item, index) => 
                      <li className='filme__content__festivais__list__option' key={index}>{item}</li>
                    )}

                    </ul>
                </div>

                <div className='filme__content__galeria'>
                  <h3 className='filme__content__galeria__title'>Gallery</h3>

                  <Container fluid className='filme__content__galeria__col'>
                    <Row>
                      { filme.galeria.map( (item, index) => 
                        <Col md={4} key={index}>
                          <img className='filme__content__galeria__img' src={item} alt="" onClick={() => handleShow(`${item}`, index)}/>
                        </Col>
                      )}
                    </Row>
                  </Container>



                </div>

              </div>
            </Col>
          </Row>
        </Container>

        <Modal show={show} onHide={handleClose} className="modal">
          <img className='modal__img' src={link} alt="" />
          <Container fluid>
            <Row>
              <Col xs={4}>
                <button className="modal__option" onClick={() => getPrevImage(`${filme.galeria[index-1]}`, index-1)}><i className='flaticon-black-triangular-arrowhead-pointing-to-left-direction'></i></button>
              </Col>
              <Col xs={4}>
              <button className="modal__close" onClick={handleClose}>RETURN</button>
              </Col>
              <Col xs={4}>
                <button className="modal__option" onClick={() => getNextImage(`${filme.galeria[index+1]}`, index+1)}><i className='flaticon-black-triangular-arrowhead-pointing-to-left-direction modal__right'></i></button>
              </Col>
            </Row>
          </Container>
        </Modal>


      </div>
    )

  }



}


function mapStateToProps(state) {
  return {
    filme: state.filme,
    link: state.link,
    index: state.index
  }
  
}

export default connect(
  mapStateToProps
)(FilmeRealizado);
