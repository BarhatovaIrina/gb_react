import React from 'react'


export const MessageList = ({messages}) =>{
   return <>
    <ul class='mes'>
        {messages.map(message =>
            <li><span class = 'author'>{message.author}: </span><span>{message.text}</span> </li>
        )}        
    </ul>
    </>
}