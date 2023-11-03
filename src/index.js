import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './class.css';
import MyHello from './chap03/MyHello';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <MyHello myName='鈴木' />
);

reportWebVitals();
