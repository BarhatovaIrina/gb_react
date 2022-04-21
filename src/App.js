import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import './App.css';
import {Form} from'./components/formComponents/Form';

const theme = createTheme(
    {
        palette:{
            primary: {
                main: '##26a69a',
                light: '#80cbc4',
            }
        },
        typography: {
            fontSize: 20,
        }       
    }
)

export const App = ()=>{
 return  (
     <>
    <ThemeProvider theme={theme}>
        <Form />
    </ThemeProvider>
    </>)
}
