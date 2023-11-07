import { connect } from 'react-redux';
import { store } from '../store';
import { GetProdutora } from '../actions';
import { GetNumbers } from '../actions';
import "../scss/produtora.scss";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Menu from './Menu';
import MenuMobile from './MenuMobile';

function Produtora(props) {

  var produtora = props.produtora;

  var numbers = props.numbers;

  if (produtora === null) {
    store.dispatch(GetProdutora())
    if (numbers === null) {
      store.dispatch(GetNumbers())
    }
    return (
      <div>
      </div>
    )

  } else {

    return (
      <div className='produtora' id='produtora' style={{backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.9) 0%,rgba(0,0,0,0.9) 100%), url('/imagens/${numbers[2]}.jpg')`}}>
  
        <Menu></Menu>
        <MenuMobile></MenuMobile>


        <div className='produtora__content'>

          <Container fluid>
            <Row>
              <Col md={5}>
                <div className='produtora__content__geral'>

                  <h1 className='produtora__content__geral__title'>A Produtora</h1>
                  <p className='produtora__content__geral__text'>{produtora.texto_geral_pt}</p>

                </div>
              </Col>

              <Col md={1}></Col>

              <Col md={6}>
                <div className='produtora__content__membros'>

                  { produtora.membros.map( (membro, index) =>
                      <div key={index} className='produtora__content__membros__membro'>
                        <Container fluid>
                          <Row>
                            <Col md={4}>
                              <img className='produtora__content__membros__membro__img' src={membro.imagem} alt="" />
                            </Col>

                            <Col md={8}>
                              <h2 className='produtora__content__membros__membro__nome'>{membro.nome}</h2>
                              <p className='produtora__content__membros__membro__text'>{membro.texto_pt}</p>
                            </Col>
                          </Row>
                        </Container>
                      </div>
                  )}

                </div>
              </Col>
            </Row>
          </Container>

        </div>

      </div>
    )
  
    
  }




}


function mapStateToProps(state) {
  return {
    produtora: state.produtora,
    numbers: state.numbers
  }
  
}

export default connect(
  mapStateToProps
)(Produtora);
