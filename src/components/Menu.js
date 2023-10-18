import { connect } from 'react-redux';
import { store } from '../store';
import { OpenCloseMenu } from '../actions';
import { Link } from "react-router-dom";
import "../scss/menu.scss";

function Menu(props) {

  var open = props.open;

  function openClose() {
    open = !open;

    store.dispatch(OpenCloseMenu(open))

  }

  if (open === false) {
    return (
      <div className="menu">
        <div className="menu__header">
          <Link to="/"><img className='menu__header__logo' src="/logo2.png" alt="" /></Link>
          <i onClick={openClose} className="flaticon-menu-hand-drawn-lines-outlines menu__header__icon "></i>
        </div>
      </div>
    )
  } else {
    return (
      <div className="menu">
        <div className="menu__header">
          <Link to="/"><img className='menu__header__logo' src="/logo2.png" alt="" /></Link>
          <i onClick={openClose} className="flaticon-cancel-hand-drawn-cross-in-square-button-outline menu__header__icon--close"></i>
        </div>
        <div className="menu__content">
          <Link onClick={openClose} to="/filmes" className="menu__content__link">Filmes realizados</Link>
          <Link onClick={openClose} to="/" className="menu__content__link">Projetos em desenvolvimento</Link>
          <Link onClick={openClose} to="/" className="menu__content__link">A Produtora</Link>
          <Link onClick={openClose} to="/" className="menu__content__link">Contato</Link>
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