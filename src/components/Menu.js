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
        <Link to="/filmes" className="menu__link">Filmes <br/> realizados</Link>
        <Link to="/" className="menu__link">Projetos em <br/> desenvolvimento</Link>
        <Link to="/" className="menu__link">A Produtora</Link>
        <Link to="/" className="menu__link">Contato</Link>
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