import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { HashRouter } from 'react-router-dom';
// import reportWebVitals from './reportWebVitals';


// important
// since router is configured here
// we do not need to configure that again in app 

// I move the component from main to app for better use react context
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render((
  <HashRouter>
    <App /> 
  </HashRouter>
  
  )
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
