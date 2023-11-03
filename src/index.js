import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './class.css';
import EventBasic from './chap03/EventBasic';
import StateBasic from './chap03/StateBasic';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <StateBasic init={0} />
);

reportWebVitals();
