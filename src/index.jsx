import React from 'react';
import ReactDOM from 'react-dom/client';

import { App } from './App.jsx'
import { Hora } from './Hora.jsx'

function Modulos(){
  return(
    <>
    <App />
    <Hora />
    </>
    );
}
ReactDOM.createRoot( 
  document.querySelector('#root')
).render(<Modulos />)