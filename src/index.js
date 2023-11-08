import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import './class.css';
import books from './chap03/books'
import ForSort from './chap03/ForSort';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <ForSort src={books} />
);

reportWebVitals();
