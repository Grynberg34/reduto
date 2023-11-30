import { connect } from 'react-redux';
import "../scss/contato.scss";
import { store } from '../store';
import { GetNumbers } from '../actions';
import MenuEn from './MenuEn';
import MenuMobileEn from './MenuMobileEn';

function Contato(props) {

  var numbers = props.numbers;

  if (numbers === null) {
    store.dispatch(GetNumbers())

    return (
      <div>
      </div>
    )

  } else {  
    return (
      <div className='contato' id='contato' style={{backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.8) 0%,rgba(0,0,0,0.8) 100%), url('/imagens/${numbers[3]}.jpg')`}}>
  
        <MenuEn></MenuEn>
        <MenuMobileEn></MenuMobileEn>
  
        <div className='contato__content'>
  
          <h1 className='contato__content__title'>Contact</h1>
  
          <div className='contato__content__social'>
            <i className="flaticon-mail contato__content__social__icon"></i>
            <a className='contato__content__social__link' href="contato@redutofilmes.com.br">contato@redutofilmes.com.br</a>
          </div>
  
          <div className='contato__content__social'>
            <i className="flaticon-social-media contato__content__social__icon"></i>
            <a target='_blank' rel="noreferrer" className='contato__content__social__link' href="https://www.instagram.com/redutofilmes/">@redutofilmes</a>
          </div>
  
          <div className='contato__content__social'>
            <i className="flaticon-twitter contato__content__social__icon"></i>
            <a target='_blank' rel="noreferrer" className='contato__content__social__link' href="https://twitter.com/redutofilmes/">@redutofilmes</a>
          </div>
  
          <div className='contato__content__social'>
            <i className="flaticon-youtube contato__content__social__icon"></i>
            <a target='_blank' rel="noreferrer" className='contato__content__social__link' href="https://www.youtube.com/channel/UCLkesZLYsxeVY_ZFzZX_U7Q">Reduto Filmes</a>
          </div>
  
          <div className='contato__content__social'>
            <i className="flaticon-vimeo contato__content__social__icon"></i>
            <a target='_blank' rel="noreferrer" className='contato__content__social__link' href="https://vimeo.com/user59924036">Reduto Filmes</a>
          </div>
  
  
        </div>
  
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
)(Contato);
