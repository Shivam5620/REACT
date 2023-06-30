import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
// import Appp from './Appp';
// import store from './Additionsubtraction/store';
import store from './newredux/store';
import Add from './Add';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <Add/>
  </Provider>
);


reportWebVitals();
