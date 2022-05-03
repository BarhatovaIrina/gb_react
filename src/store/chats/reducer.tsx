import { Reducer} from 'redux';
import { AUTHOR } from '../../constants';
import { ADD_CHAT, ADD_MESSAGE, DELETE_CHAT } from './actions';
import { ChatACTIONS } from './types';
import { nanoid } from 'nanoid';

export interface Message {
    id: string;
    author: string;
    value: string;
}

export interface ChatsState {
    [key:string]: Message [];
}

const initialState: ChatsState = {
    gb: [
        {
            id: '1',
            author: AUTHOR.USER,
            value: 'Hello!',
          },
    ],
};

export const chatReducer: Reducer <ChatsState, ChatACTIONS> = (
    state = initialState,
    action
) => {
    switch (action.type){
        case ADD_CHAT: {
            return {
                ...state,
                [action.chatName]: [],
            }
        };
        case DELETE_CHAT: {
            const chats = {...state};
            delete chats[action.chatId];
            return chats;
        };
        case ADD_MESSAGE: {
            return {
                ...state,
                [action.chatId]: [
                    ...state[action.chatId],
                    {
                        id: nanoid(),
                        author: AUTHOR.USER,
                        value: action.message,
                    }
                ]
            }
        };
        default: 
            return state;
    }
}