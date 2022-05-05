import React, { FC, useState } from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { defaultContext, ThemeContext } from './utils/ThemeContext';
import './App.css';
import { Provider } from 'react-redux';
import { persistor, store } from './store';
import { AppRouter } from './components/MessageList/components/AppRouter';

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
      <Provider store={store}>
        <PersistGate persistor = {persistor}>
        <AppRouter />
        </PersistGate>

      </Provider>
    </ThemeContext.Provider>
  );
};