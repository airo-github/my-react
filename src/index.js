import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import './class.css';
import SelectStyle from './chap03/SelectStyle';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <SelectStyle mode='light' />
);

reportWebVitals();
