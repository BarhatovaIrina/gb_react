import {ADD_CHAT, DELETE_CHAT, ADD_MESSAGE} from './actions';

export type ChatACTIONS = ReturnType <AddChat> | ReturnType <DeleteChat> |ReturnType <AddMessage>;

export type AddChat = (
    chatName: string
) => {
    type: typeof ADD_CHAT;
    chatName: string;
}

export type DeleteChat = (
    chatId: string
) => {
    type: typeof DELETE_CHAT;
    chatId: string;
}

export type AddMessage = (
    chatID: string, 
    message: Message
) => {
    type: typeof ADD_MESSAGE;
    chatId: string;
    message: Message;
}

export type Message = {
    text: string;
    author: string;
  };

  export type MessageState = Message & {
    id: string;
  };

//   export type AddMesssageWithReply = ()