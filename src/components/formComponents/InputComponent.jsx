import React, {useRef, useEffect} from 'react';
import { Input } from '@mui/material';

export const InputComponent = (props) => {
    const inputRef = useRef();

    useEffect(() => {
        inputRef.current.focus();
        }, []);
        
    return (
    <>
        <Input color ='primary' inputRef={inputRef} placeholder="Text" variant='outlined' type='text' name={props.name} value={props.value} onChange={props.change} />
    </>
    )
}


