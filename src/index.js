import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import App from './components/App';
import Filmes from './components/Filmes';
import FilmeRealizado from './components/FilmeRealizado';
import Produtora from './components/Produtora';
import Contato from './components/Contato';
import {store, persistor} from './store.js';
import { PersistGate } from 'redux-persist/integration/react';
import 'bootstrap/dist/css/bootstrap.min.css';



ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}></Route>
          <Route path="/filmes" element={<Filmes />}></Route>
          <Route path="/filmes/:id" element={<FilmeRealizado />}></Route>
          <Route path="/produtora" element={<Produtora />}></Route>
          <Route path="/contato" element={<Contato />}></Route>
        </Routes>
      </BrowserRouter>
    </PersistGate>
  </Provider>,
  document.querySelector('#root')
);


