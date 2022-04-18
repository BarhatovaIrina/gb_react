import React from 'react';

export const Input = (props) => {
    return <input type='text' name={props.name} value={props.value} onChange={props.change}></input>;
}


