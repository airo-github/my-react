import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import './class.css';
import books from './chap03/books'
import ForFilter from './chap03/ForFilter';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <ForFilter src={books} />
);

reportWebVitals();
