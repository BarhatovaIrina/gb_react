import React, { FC, memo } from 'react';
import { AUTHOR } from '../../../../constants';

export interface Message {
  id: string;
  author: string;
  value: string;
}

interface MessageProps {
  message: Message;
}

export const MessageItem: FC<MessageProps> = memo(({ message }) => (
//  style={({ isActive }) => ({ color: isActive ? 'darkcyan' : 'black' })}
    <div className={message.author === AUTHOR.USER ? 'USER' : 'BOT'}>
      {message.author}: {message.value}</div>
));