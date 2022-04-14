import React, {useState, useEffect, memo, useCallback} from 'react'
export const Child = memo((props) =>{
    const [count, setCount] = useState(0)
    console.log('child render'); // автоматически обновляется когда меняется состояние или ренден родителя
    return <>
    <h3>Child</h3>
    <p>{count}</p>
    <button onClick={()=> setCount (count+1)}>Child click</button>
    </>

    useEffect(()=> { // хук 
        console.log('parent did mount')
        return ()=>{
            console.log('chicl did unmount');
        }
    },[])

    const memorizedCallBack = useCallback (
        ()=>{
          //  doSomethings();
        },
        []
       // [a,b],
    )
})

// memo - аналог PureComponent - когда не нужно рендерить дочерний компонент если параметры не изменились родителя