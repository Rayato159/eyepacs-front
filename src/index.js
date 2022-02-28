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
import { Sidebar } from './components/Sidebar/Sidebar'
import { Update } from './pages/Update';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div className='flex'>
        <Sidebar />
          <Routes>
              <Route path='/' element={<Login />} />
              <Route path='home' element={<Home />} />
              <Route path='home/update/:eye_photo_id' element={<Update />}/>
          </Routes>
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);