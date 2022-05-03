import React, { FC, useState, useMemo } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { defaultContext, ThemeContext } from './utils/ThemeContext';
import './App.css';
import { Header } from './components/Header';
import { Home } from './pages/Home';
import { NoPage } from './pages/404';
import { Profile } from './pages/Profile';
import { ChatList } from './components/ChatList';
import { Chats } from './pages/Chats';


export const App: FC = () => {
  const [theme, setTheme] = useState (defaultContext.theme);
  
  const toggleTheme = () =>{
    setTheme(theme==='light' ? 'dark' : 'light')
  }

  return (
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
            <Route index element={<ChatList />} />
            <Route path=":chatId" element={<Chats/>}/>
          </Route>
        </Route>

        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
    </ThemeContext.Provider>
  );
};