import React from 'react';
import PropTypes from 'prop-types';


export const MessageList = ({messages}) =>{
    MessageList.propTypes = {
        messages: PropTypes.array,
        message: PropTypes.object,
        messsage: PropTypes.shape({
            id: PropTypes.number,
            author: PropTypes.string,
            text: PropTypes.string
        })
    }

    return <>
        <div className='message_list'>
            {messages.map(message =>
                <div key={message.id}  className = {message.author}><span>{message.author}: </span><span>{message.text}</span> </div>
            )}        
        </div>
        </>
}