import React from 'react';

export const Button = ({disabled})=> {
    // return <button name='but' type='submit'  data-id='button1'> click me</button>;
   return <button name='but' type='submit' disabled={disabled} data-id='button1'> click me</button>;
}