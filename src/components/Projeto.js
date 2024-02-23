import { connect } from 'react-redux';
import { store } from '../store';
import { GetProjetoId } from '../actions';
import { useParams } from "react-router-dom";
import "../scss/projeto.scss";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Menu from './Menu';
import MenuMobile from './MenuMobile';

function Projeto(props) {

  var { id } = useParams();

  var projeto = props.projeto;

  if (projeto === null || projeto.uri !== id) {
    store.dispatch(GetProjetoId(id))

    return (
      <div>
      </div>
    )

  } else {

    return (
      <div className='projeto' id='projeto' style={{backgroundImage: `linear-gradient(to bottom, rgba(0,0,0, 0.8) 0%,rgba(0,0,0,0.8) 100%), url('${projeto.imagem_capa}')`}}> 

        <Menu></Menu>
        <MenuMobile></MenuMobile>

        <Container fluid>
          <Row>
            <Col md={5}>
              <div className='projeto__info'>
                <h1 className='projeto__info__title'>{projeto.título}</h1>
                <h2 className='projeto__info__text'>{projeto.tipo}</h2>
                <h2 className='projeto__info__subtitle'>Direção</h2>
                <h2 className='projeto__info__text'>{projeto.direção}</h2>
                <h2 className='projeto__info__subtitle'>Roteiro</h2>
                <h2 className='projeto__info__text'>{projeto.roteiro}</h2>
                <h2 className='projeto__info__subtitle'>Logline</h2>
                <h2 className='projeto__info__text'>{projeto.logline}</h2>
                {
                  projeto.fomento !== null?
                  <div>
                    <h2 className='projeto__info__subtitle'>Fomento</h2>
                    <h2 className='projeto__info__text'>{projeto.fomento}</h2>
                  </div>
                  :null
                }
                {
                  projeto.laboratórios !== null?
                  <div>
                    <h2 className='projeto__info__subtitle'>Laboratórios</h2>
                    <h2 className='projeto__info__text'>{projeto.laboratórios}</h2>
                  </div>
                  :null
                }

              </div>
            </Col>
            
            <Col md={6}>
              <div className='projeto__content'>
                <img className='projeto__content__img' src={projeto.imagem_capa} alt="" />
              </div>
            </Col>
          </Row>
        </Container>

      </div>
    )

  }



}


function mapStateToProps(state) {
  return {
    projeto: state.projeto,
    link: state.link,
    index: state.index
  }
  
}

export default connect(
  mapStateToProps
)(Projeto);
