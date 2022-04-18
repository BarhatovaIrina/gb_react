import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import {App} from './App';
import {Form} from'./components/dz-2/Form';
import '@testing-library/jest-dom';
import '@testing-library/user-event';
import { MessageList } from './components/dz-2/MessageList';
import { Button } from './components/dz-2/Button';
import { Input } from './components/dz-2/Input';

describe('App', () => {
  it('render component App', () => {
    render(<App />);
  });

  it('render with snapshot', () => {
    const {asFragment}=render (<App />);
    expect(asFragment()).toMatchSnapshot();

  });
  
  it('render component Form', () => {
    render(<Form />);
  });

  it('render component Input', () => {
    render(<Form />);
    expect (screen.getByRole('textbox')).toBeInTheDocument();
  });


  it('render list', () => {
    render(<Form />);
    fireEvent.submit(screen.getByRole('button'));
    const t = screen.getByRole('list');
    expect(t).toBeInTheDocument();
  });

   it('render component MessageList', () => {
     const messages = [{
      author: 'user',
      text: 'test text'
    }]
    
    const {asFragment} = render(<MessageList messages={messages} />);
    expect(asFragment()).toMatchSnapshot();
   });

  it('render component Input', () => {
    render(<Input />);
  });

  it ('render input with props', () => {
    const text = 'test';
    render (<Input value={text} />);
    expect(screen.getByRole('textbox').value).toBe('test');

  })

  /* не понимаю, в чем здесь ошибка. Тест должен проверять событие onchange 
  it ('change input', () => {
    const mockText= jest.fn();
    const text = 't';
    render (<Input value={text} onChange={mockText} name='author' />);
    fireEvent.change(screen.getByRole('textbox'),{target: {value:'test'}});
    expect(mockText).toBeCalledTimes(1);

  })
  */

  it('render component Button', () => {
    render(<Button />);
  });

  it('render component with text', () => {
    render(<Button />);
    expect(screen.getByText(/click/)).toBeInTheDocument();
  });

  it('button is disabled', () => {
    render(<Button disabled />);
    expect(screen.getByText(/click/)).toBeDisabled();
  });

  it('click by button', () => {
    render(<App />);
    fireEvent.click(screen.getByRole('button')), {
      target: {name:'but'},
    }
    expect (screen.getByRole('button')).toContainHTML('but');
  });

  
});
