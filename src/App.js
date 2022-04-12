import React, { Component } from 'react';
import './App.css';
import {Form} from'./components/FormFunc/Form';

//классовый подход
// export class App extends Component {
//   render (){
//     return <Form/>;
//   }
// }



export const App = ()=>{
  return <>
  <Form />
  </>
}
