import React, { useState, FC, memo } from 'react';
// import { Input } from '@mui/material';
import { Button } from './Button';

interface FormProps {
  addMessage: (a: string) => void;
}

export const Form: FC<FormProps> = memo(({ addMessage }) => {
  const [value, setValue] = useState('');

  const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addMessage(value);
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