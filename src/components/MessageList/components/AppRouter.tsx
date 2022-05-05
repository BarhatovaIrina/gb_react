import React, { FC, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NoPage } from '../../../pages/404';

import { Chats } from '../../../pages/Chats'
import { Home } from '../../../pages/Home'
import { Profile } from '../../../pages/Profile'
import { ChatList } from '../../ChatList'
import { Header } from '../../Header'

export const AppRouter: FC = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="profile" element={<Profile />} />

          <Route path="chats">
            <Route index element={<ChatList />} />
            <Route path=":chatId" element={<Chats />} />
          </Route>
        </Route>

        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  </Suspense>
);
