import  React, {useState, useEffect} from 'react';
import {Input} from './Input';
import {Button} from './Button';

export const Form = ()=> {
    const [name, setName] = useState ('click')
    const [text, setText] = useState ('')
    const [author, setAuthor] = useState ('')
    const [messages, setMessages] = useState ([])
    const [visible, setVisible] = useState (true)
    const [show, setShow] = useState(false)

    useEffect(()=> { 
        const t = setTimeout(() => setShow(true), 1500);
      
        return () => {
            clearTimeout(t);
            setShow(false);
        };
    },[messages]);

   
    const handleClick =() =>{
       const message ={
            text: text,
            author:author
        };
        setMessages([...messages, message]);
        setText('');
        setAuthor('');
    }

    const handleChangeText =(ev) =>{
        setText(ev.target.value);
    }

    const handleChangeAuthor =(ev) =>{
        setAuthor(ev.target.value);
    }
    
    return <>
    <div className='form'>
        {visible && <ul class='mes'>
        {messages.map(message =>
            <li>{message.text} , {message.author}</li>
           
        )}
        
        </ul>}
          {show && messages.length>0 && <p class='author'>Author "{messages[messages.length-1].author}" wroted a message</p>}
            <Input change={handleChangeText} value={text}/>
            <Input change={handleChangeAuthor} value={author}/>
            <Button click ={handleClick} name={name}/>
            <button onClick={()=> setVisible(!visible)}>
               {visible ? 'hide': 'show'}
            </button>
            </div>
        </> 
    
    }