import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import App from './components/App';
import Filmes from './components/Filmes';
import FilmeRealizado from './components/FilmeRealizado';
import Projetos from './components/Projetos';
import Produtora from './components/Produtora';
import Contato from './components/Contato';
import AppEn from './components/AppEn';
import ProdutoraEn from './components/ProdutoraEn';
import FilmesEn from './components/FilmesEn';
import ContatoEn from './components/ContatoEn';
import FilmeRealizadoEn from './components/FilmeRealizadoEn';
import {store, persistor} from './store.js';
import { PersistGate } from 'redux-persist/integration/react';
import 'bootstrap/dist/css/bootstrap.min.css';



ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}></Route>
          <Route path="/en" element={<AppEn />}></Route>
          <Route path="/filmes" element={<Filmes />}></Route>
          <Route path="/filmes/en" element={<FilmesEn />}></Route>
          <Route path="/filmes/:id" element={<FilmeRealizado />}></Route>
          <Route path="/filmes/:id/en" element={<FilmeRealizadoEn />}></Route>
          <Route path="/projetos" element={<Projetos />}></Route>
          <Route path="/produtora" element={<Produtora />}></Route>
          <Route path="/produtora/en" element={<ProdutoraEn />}></Route>
          <Route path="/contato" element={<Contato />}></Route>
          <Route path="/contato/en" element={<ContatoEn />}></Route>
        </Routes>
      </BrowserRouter>
    </PersistGate>
  </Provider>,
  document.querySelector('#root')
);


