import  React, {useState, useEffect} from 'react';
import { InputComponent} from './InputComponent';
import { MessageList } from './MessageList';
import { AUTHOR } from './constants';
import { ButtonComponent } from './ButtonComponent';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

export const Form = ()=> {
    Form.propTypes = {
        handleSubmitForm: PropTypes.func,
        handleChangeText: PropTypes.func,
        text: PropTypes.string,
        author: PropTypes.string,
        id: PropTypes.number,
    }

    const [text, setText] = useState ('');
    const [messages, setMessages] = useState ([]);

    useEffect(()=> { 
        if (messages.length>0 && messages[messages.length-1].author!==AUTHOR.BOT){
            const t = setTimeout(() => {
                setMessages(
                    [...messages,
                    {
                        id: nanoid(),
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
        const message ={
                id: nanoid(),
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
        <InputComponent type='text' name='author' change={handleChangeText} value={text}/>
        <ButtonComponent disabled={!text} />
     </form>
     </> 
    
    }