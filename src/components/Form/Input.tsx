import React, {FC, useRef, useEffect} from 'react';
// import { Input } from '@mui/material';
interface InputProps {
    // name: string;
    value: string;
    // inputRef: ;
    change?: (value: string) => void; 
}


export const Input: FC <InputProps>  = () => {
    // const inputRef = useRef();
    
    // useEffect(() => {
    //     // inputRef.current.focus();
    //     }, []);
        
    return (
    <>
     {/* <input placeholder="Text" type='text' value={value} onChange={change} />
        <input inputRef={inputRef} placeholder="Text" variant='outlined' type='text' name={name} value={value} onChange={change} /> */}
    </>
    )
}