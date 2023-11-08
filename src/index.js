import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import './class.css';
import ForList from './chap03/ForList';
import books from './chap03/books'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <ForList src={books} />
);

reportWebVitals();
