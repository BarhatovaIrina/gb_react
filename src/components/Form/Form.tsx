import React, { useState, FC, memo } from 'react';
import { Button } from './Button';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addMessageWithReply } from '../../store/chats/actions';
import { AddMessage } from '../../store/chats/types';
import { ChatsState } from '../../store/chats/reducer';
import { ThunkDispatch } from 'redux-thunk';
import { AUTHOR } from '../../constants';

export const Form: FC = memo(() => {
  const [value, setValue] = useState('');
  const { chatId } = useParams();
  const dispatch = useDispatch<ThunkDispatch<ChatsState, void, ReturnType<AddMessage>>>();

  const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (chatId && value) {
      dispatch(addMessageWithReply(chatId, { text: value, author: AUTHOR.USER }));
    }
    setValue('');
  };

  return (
    <form onSubmit={handleSubmitForm}>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Button disabled={!value} />
    </form>
  );
});