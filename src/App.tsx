import React, { FC, useState, useMemo } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { defaultContext, ThemeContext } from './utils/ThemeContext';
import './App.css';
import { Header } from './components/Header';
import { Chats } from './pages/Chats';
import { Home } from './pages/Home';
import { NoPage } from './pages/404';
import { Profile } from './pages/Profile';
import { ChatList } from './components/ChatList';
import { AUTHOR } from './constants';
import { nanoid } from 'nanoid';
import { Provider } from 'react-redux';
import { store } from './store';

export interface Chat {
  id: string;
  name: string;
}

const initialMessage: Messages = {
  default: [
    {
      id: '1',
      author: AUTHOR.USER,
      value: 'Hello!',
    },
  ],
};

export interface Message {
  id: string;
  author: string;
  value: string;
}

export interface Messages {
  [key: string]: Message[];
}

export const App: FC = () => {
  const [messages, setMessages] = useState<Messages>(initialMessage);
  const [theme, setTheme] = useState (defaultContext.theme);
  const chatList = useMemo(
    () =>
      Object.entries(messages).map((chat) => ({
        id: nanoid(),
        name: chat[0],
      })),
    [Object.entries(messages).length]
  );

  const onAddChat = (chat: Chat) => {
    if (!messages[chat.name]){
      setMessages({
      ...messages,
      [chat.name]: [],
    });
    }    
  };

  const onDelChat = (chatName: string) => {
    const mes = {...messages};
    delete mes[chatName];
    setMessages({
      ...mes,
    });
  }
  const toggleTheme = () =>{
    setTheme(theme==='light' ? 'dark' : 'light')
  }

  return (
    <Provider store={store}>
      <ThemeContext.Provider value={
        {
          theme,
          toggleTheme
        }
      }>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<Home />} />
            <Route path="profile" element={<Profile />} />

          <Route path="chats">
            <Route
              index
              element={<ChatList 
                chatList={chatList} 
                onAddChat={onAddChat}
                onDelChat={onDelChat} 
                />}
            />
            <Route
              path=":chatId"
              element={
                <Chats
                  messages={messages}
                  setMessages={setMessages}
                  chatList={chatList}
                  onAddChat={onAddChat}
                  onDelChat={onDelChat} 
                />
              }
            />
          </Route>
        </Route>

        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
    </ThemeContext.Provider>
    </Provider>
  );
};