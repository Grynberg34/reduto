import { connect } from 'react-redux';
import { store } from '../store';
import { Link } from "react-router-dom";
import { GetProjetos } from '../actions';
import { GetNumbers } from '../actions';
import "../scss/projetos.scss";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Menu from './MenuEn';
import MenuMobile from './MenuMobileEn';

function ProjetosEn(props) {

  var projetos = props.projetos;

  var numbers = props.numbers;

  if (projetos === null) {
    store.dispatch(GetProjetos())
    if (numbers === null) {
      store.dispatch(GetNumbers())
    }

    return (
      <div>
      </div>
    )

  } else {

    return (
      <div className='projetos' id='projetos' style={{backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.8) 0%,rgba(0,0,0,0.8) 100%), url('/imagens/${numbers[0]}.jpg')`}}>
  
        <Menu></Menu>
        <MenuMobile></MenuMobile>


        <div className='projetos '>

        <Container fluid>

          <Row>

            { projetos.map( (projeto) => 

              <Col className='' md={6} key={projeto.id}>
                <Link to={`/projetos/${projeto.uri}/en`}>
                
                  <div className='projetos__projeto'>
                    <h1 className='projetos__projeto__title'>{projeto.titulo_en}</h1>
                    <img className='projetos__projeto__img' src={projeto.imagem_capa} alt="" />
                    <div className='projetos__projeto__info'>
                      <h2 className='projetos__projeto__info__title'>{projeto.ano}</h2>
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
    projetos: state.projetos,
    numbers: state.numbers
  }
  
}

export default connect(
  mapStateToProps
)(ProjetosEn);
