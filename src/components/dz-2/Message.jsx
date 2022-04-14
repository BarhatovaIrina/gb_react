import React, {useState, useEffect} from 'react'

export const Message = () =>{
    const [text, setText] = useState ('')
    const [author, setAuthor] = useState ('')

    return <>
    <div >
        <span>{text}</span>
        <span >{author}</span>
    </div>
    </>
}