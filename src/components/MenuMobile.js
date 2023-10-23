import { connect } from 'react-redux';
import { store } from '../store';
import { OpenCloseMenu } from '../actions';
import { Link } from "react-router-dom";
import "../scss/menuMobile.scss";

function Menu(props) {

  var open = props.open;

  function openClose() {
    open = !open;

    store.dispatch(OpenCloseMenu(open))

  }

  if (open === false) {
    return (
      <div className="menuMobile">
        <div className="menuMobile__header">
          <Link to="/"><img className='menuMobile__header__logo' src="/logo2.png" alt="" /></Link>
          <i onClick={openClose} className="flaticon-menu-hand-drawn-lines-outlines menuMobile__header__icon "></i>
        </div>
      </div>
    )
  } else {
    return (
      <div className="menuMobile">
        <div className="menuMobile__header">
          <Link to="/"><img className='menuMobile__header__logo' src="/logo2.png" alt="" /></Link>
          <i onClick={openClose} className="flaticon-cancel-hand-drawn-cross-in-square-button-outline menuMobile__header__icon--close"></i>
        </div>
        <div className="menuMobile__content">
          <Link onClick={openClose} to="/filmes" className="menuMobile__content__link">Filmes</Link>
          <Link onClick={openClose} to="/projetos" className="menuMobile__content__link">Projetos</Link>
          <Link onClick={openClose} to="/produtora" className="menuMobile__content__link">A Produtora</Link>
          <Link onClick={openClose} to="/contato" className="menuMobile__content__link">Contato</Link>
        </div>
      </div>
    )
  }
} 
  

  

function mapStateToProps(state) {
  return {
    open: state.open
  }
}

export default connect(
  mapStateToProps
)(Menu);