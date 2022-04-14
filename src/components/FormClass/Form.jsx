import React, {Component} from 'react';
import {Input} from './Input';
import {Button} from './Button';

export class Form extends Component {
    state ={
        name:'click',
        value:'',
        messages: [],
        visible: true
    }
    handleClick =() =>{
        console.log('ccccc');
        this.setState({messages:[...this.state.messages, this.state.value]});
        this.setState({value: ''});
        }


    handleChange =(ev) =>{
        this.setState({value: ev.target.value});
    }

    componentDidMount (){
        console.log ('did mount'); // перед тем как выполнить render, для подписок на события, запросов на сервер (получить данные для карточек товаров)
    }
    componentDidUpdate (){ // выполяется при изменение параметров, событий
        console.log('did update');
    }

    componentWillUnmount (){
        console.log('did unmount'); // выполняется когда "пропадает" элемент из DOM-дерева 
    }
    render (){
        return <>
        {this.state.visible && <ul>
        {this.state.messages.map(message =>
            <li>{message}</li>
        )}
        </ul>}
            <Input change={this.handleChange} value={this.state.value}/>
            <Button click ={this.handleClick} name={this.state.name}/>
            <button onClick={()=> this.setState({visible:!this.state.visible})}>
               {this.state.visible ? 'hide': 'show'}
            </button>
        </> 
    }
}