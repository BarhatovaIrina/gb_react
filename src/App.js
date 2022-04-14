import React, { Component } from 'react';
import './App.css';
//import {Form} from'./components/FormFunc/Form';
//import {Form} from'./components/FormFunc/Form';
import {Form} from'./components/dz-2/Form';
// import { Parent } from './components/FormFunc/Parent';

/*классовый подход
// export class App extends Component {
//   render (){
//     return <Form/>;
//   }
// }
*/



export const App = ()=>{
  return <>
  <Form />
  {/* <Parent/> */}
  </>
}
