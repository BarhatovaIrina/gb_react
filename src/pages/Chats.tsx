import React, { FC } from 'react';
import { MessageList } from './../components/MessageList/MessageList';
import { Form } from './../components/Form/Form';
import { ChatList } from '../components/ChatList';
import { Navigate, useParams } from 'react-router-dom';
import { shallowEqual, useSelector } from 'react-redux';
import { selectChatList, selectChats } from '../store/chats/selectors';

export const Chats: FC = () => {
  const { chatId } = useParams();
  const chats = useSelector(selectChats, shallowEqual);
  const chatList = useSelector(selectChatList, shallowEqual);
  
  /*
  useEffect(() => {
    if (
      chatId &&
      messages[chatId]?.length > 0 &&
      messages[chatId][messages[chatId].length - 1].author !== AUTHOR.BOT
    ) {
      const timeout = setTimeout(() => {
        setMessages({
          ...messages,
          [chatId]: [
            ...messages[chatId],
            {
              id: nanoid(),
              author: AUTHOR.BOT,
              value: 'Im BOT',
            },
          ],
        });
      }, 1000);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [chatId, messages, setMessages]);
*/
  
  if (!chatList.find((chat) => chat.name === chatId)) {
    return <Navigate replace to="/chats" />;
  }

  return (
    <div className='chat'>
      <div className='chat_list'>
        <h2>Chat List</h2>
        <ChatList  />
      </div>
      
      <div className='message_list '>
        <h2>Message List</h2>
        <MessageList messages={chatId ? chats[chatId] : []} />
        <Form />
      </div>
    </div>
  );
}