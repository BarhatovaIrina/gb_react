import  React, {useState, useEffect} from 'react';
import {Input} from './Input';
import {Button} from './Button';
import { MessageList } from './MessageList';
import { AUTHOR } from './constants';

export const Form = ()=> {
    const [text, setText] = useState ('');
    const [messages, setMessages] = useState ([]);

    useEffect(()=> { 
        if (messages.length>0 && messages[messages.length-1].author!==AUTHOR.BOT){
            const t = setTimeout(() => {
                setMessages(
                    [...messages,
                    {
                        author: AUTHOR.BOT,
                        text: `USER wroted a message`
                    }
                ]);
            }, 1500);
        
        
        return () => {
            clearTimeout(t);
        };
    }
    },[messages]);
    
   
    const handleSubmitForm =(e) =>{
        e.preventDefault();
        console.log(text);
       const message ={
            text: text,
            author:AUTHOR.USER
        };
        setMessages([...messages, message]);
        setText('');
        
    }

    const handleChangeText = (ev) =>{
        setText(ev.target.value);
    }
    
    return <>
    <form className='form' onSubmit={handleSubmitForm}>
        <MessageList  messages = {messages}/>
        <Input type='text' name='author' change={handleChangeText} value={text}/>
        <Button disabled={!text} />
    </form>
    </> 
    
    }