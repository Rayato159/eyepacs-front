import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// React router dom
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

// Redux
import store from './app/store'
import { Provider } from 'react-redux'

// Components
import { Login } from './pages/Login'
import { Home } from './pages/Home'
import EyeForm from './components/EyeForm/EyeForm';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='home' element={<Home />} />
        <Route path='tableform' element={<EyeForm/>}/>
      </Routes>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);