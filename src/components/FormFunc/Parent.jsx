import React, {useState, useEffect} from 'react'
import { Child } from './Child'

export const Parent = () =>{
    const [count, setCount] = useState(0)
    const [toggle, setToggle] = useState(true)

    useEffect(()=> { // хук 
        console.log('parent did mount')
    },[])


    useEffect(()=> { // хук будет вызываться когда изменится параметр count
        console.log('parent did update count')
    },[count ])

    useEffect(()=> { // хук будет вызываться когда изменится параметр count
        console.log('parent did update toggle')
    },[toggle ])

    return <>
    <h3>Parent</h3>
    <p>{count}</p>
    <button onClick={()=> setCount (count+1)}>count click</button>
    <button onClick={()=> setToggle (!toggle)}>toggle click</button>
    <hr></hr>
    <Child/>
    </>

}