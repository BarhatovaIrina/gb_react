import React, { FC, useState } from 'react';
import { Chat } from '../App';
import { Link } from 'react-router-dom';
import { nanoid } from 'nanoid';
import { ListItem } from '@mui/material';
import  './Header.css';
import { padding } from '@mui/system';

interface ChatListProps {
  chatList: Chat[];
  onAddChat: (chats: Chat) => void;
  onDelChat: (chat:string) => void;
}
export const ChatList: FC<ChatListProps> = ({ chatList, onAddChat, onDelChat }) => {
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (name) {
      onAddChat({
        id: nanoid(),
        name,
      });

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
            <button onClick={()=>onDelChat(chat.name)} className="del">X</button>
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