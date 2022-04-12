import  React, {useState} from 'react';
import {Input} from './Input';
import {Button} from './Button';

export const Form = ()=> {
    const [name, setName] = useState ('click')
    const [value, setValue] = useState ('')
    const [messages, setMessages] = useState ([])
    const [visible, setVisible] = useState (true)

    const handleClick =() =>{
       // console.log("vvv");
        setMessages([...messages, value]);
        setValue('');
    }


    const handleChange =(ev) =>{
        setValue(ev.target.value);
    }
    
    return <>
    <div className='form'>
        {visible && <ul>
        {messages.map(message =>
            <li>{message}</li>
        )}
        </ul>}
            <Input change={handleChange} value={value}/>
            <Button click ={handleClick} name={name}/>
            <button onClick={()=> setVisible(!visible)}>
               {visible ? 'hide': 'show'}
            </button>
            </div>
        </> 
    
    }