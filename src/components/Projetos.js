import { connect } from 'react-redux';
import { store } from '../store';
import { GetProjetos } from '../actions';
import { GetProjetoId } from '../actions';
import { GetNumbers } from '../actions';
import "../scss/projetos.scss";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Menu from './Menu';
import MenuMobile from './MenuMobile';

function Projetos(props) {

  var projetos = props.projetos;

  var projeto = props.projeto;

  var numbers = props.numbers;

  function getProjeto(index) {
    store.dispatch(GetProjetoId(index))
  }

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
      <div className='projetos' id='projetos' style={{backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.8) 0%,rgba(0,0,0,0.8) 100%), url('/imagens/${numbers[1]}.jpg')`}}>
  
        <Menu></Menu>
        <MenuMobile></MenuMobile>


        <Container>
          <Row>
            <Col md={1}></Col>
            <Col md={4}>
              <div className="projetos__menu">
                <h1 className='projetos__menu__title'>Projetos em desenvolvimento</h1>

                <ul className="projetos__menu__options">
                  { projetos.map( (option, index) => 
                    <li key={index} onClick={() => getProjeto(index)} className={index === projeto?'projetos__menu__options__option active':'projetos__menu__options__option'}>{option.título}</li>
                  )}
                </ul>

              </div>
            </Col>

            <Col md={1}></Col>

            <Col md={5}>
            
              <div className="projetos__projeto">
                
                <h1 className="projetos__projeto__title">{projetos[projeto].título}</h1>

                <p className="projetos__projeto__type">{projetos[projeto].tipo}</p>

                <p className='projetos__projeto__logline'>{projetos[projeto].logline}</p>

                <h2 className="projetos__projeto__info"><span className='projetos__projeto__info__title'>Direção:</span> {projetos[projeto].direção}</h2>
                
                <h2 className="projetos__projeto__info"><span className='projetos__projeto__info__title'>Roteiro:</span> {projetos[projeto].roteiro}</h2>

                <h2 className="projetos__projeto__info"><span className='projetos__projeto__info__title'>Empresa Produtora:</span> {projetos[projeto].produtora}</h2>

                {
                  projetos[projeto].laboratórios !== null ?
                  <h2 className="projetos__projeto__info"><span className='projetos__projeto__info__title'>Laboratórios:</span> {projetos[projeto].laboratórios}</h2>
                  :null
                }

                {
                  projetos[projeto].fomento !== null ?
                  <h2 className="projetos__projeto__info"><span className='projetos__projeto__info__title'>Financiamento:</span> {projetos[projeto].fomento}</h2>
                  :null
                }     

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
    projetos: state.projetos,
    projeto: state.projeto,
    numbers: state.numbers,
  }
  
}

export default connect(
  mapStateToProps
)(Projetos);
