import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import Calculator from './main/Calculator';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(   
    <div>
      <h1>Calculator</h1>
      <Calculator/>
    </div>
    ,  document.getElementById('root'));
reportWebVitals();
