import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AppsTodo from './01_useReducer/01_todo/apps';
import AppsContext1 from './02_useContext/01_basic/parent';
import RoutingTodo from './02_useContext/02_todoBasic/route';
import AppsEcommerce1 from './LATIHAN/01_ecommerceBasic/apps';

ReactDOM.render(
  <React.StrictMode>
    <AppsEcommerce1 />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
