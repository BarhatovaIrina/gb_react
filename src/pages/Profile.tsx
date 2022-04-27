import { ThemeContext } from './../utils/ThemeContext';
import React, { FC, useContext, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {changeName,toggleProfile} from '../store/profile/actions';
import { store } from '../store';
import { ProfileState } from '../store/profile/reducer';

export const Profile: FC = () => 
{
    const {theme, toggleTheme} = useContext(ThemeContext);
    const dispatch = useDispatch();
    const [value, setValue] = useState('');
    
    const visible = useSelector((state: ProfileState) => state.visible); 
    const name = useSelector((state: ProfileState) => state.name); 
    return (
        <>
        <div>
            <h2>Profile</h2>
            <p> {theme ==='light' ? 'yes' : 'no'} </p>
            <button onClick={toggleTheme}>change </button>
       </div>
       <div>
          <p>{name}</p> 
            <input type="checkbox" checked={visible}/>
            <button onClick={() => store.dispatch(toggleProfile())}>
               change visible
            </button>

            <input type="text" onChange={(e) => setValue(e.target.value)} value={value}/>
            <button onClick={() => dispatch(changeName(value))}>change name</button>
       </div>
        </>
    )

}