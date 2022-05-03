import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteChat, addChat } from '../store/chats/actions';
import { ListItem } from '@mui/material';
import  './Header.css';
import { selectChatList } from '../store/chats/selectors';

export const ChatList: FC = () => {
  const [name, setName] = useState('');

  const dispatch = useDispatch();

  const chatList = useSelector(
    selectChatList,
    (prev, next) => prev.length === next.length
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (name) {
      dispatch(addChat(name));
      setName('');
    }
  };

  return (
    <>
    <div>
      <div>
        {chatList.map((chat) => (
          <ListItem key={chat.id} style={{padding:'0'}}>
            <Link to={`/chats/${chat.name}`}>{chat.name}</Link>
            <button onClick={()=>dispatch(deleteChat(chat.name))} className="del">X</button>
          </ListItem>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">add chat</button>
      </form>
      </div>
    </>
  );
};