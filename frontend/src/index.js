import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import { UseEffectCleanup as A }  from './UseEffectCleanup.js';
import { UseEffect }  from './UseEffect.js';
import { UseMemo }  from './UseMemo.js';
import { UseMemo2 } from './UseMemo2.js';
import { UseRef } from './UseRef.js';
import { UseRef2 }  from './UseRef2.js';



ReactDOM.render(
  <React.StrictMode>
    {/* <A /> */}
    {/* <UseEffect /> */}
    {/* <UseMemo /> */}
    {/* <UseMemo2 /> */}
    {/* <UseRef /> */}
    <UseRef2 />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
