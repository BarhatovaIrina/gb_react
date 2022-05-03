import { AddChat, DeleteChat, AddMessage } from "./types";

export const ADD_CHAT = 'CHARTS::ADD_CHAT';
export const DELETE_CHAT = 'CHARTS::DELETE_CHAT';
export const ADD_MESSAGE = 'CHARTS::ADD_MESSAGE';

export const addChat: AddChat = (chatName) => ({
    type: ADD_CHAT,
    chatName,
})

export const deleteChat: DeleteChat = (chatId) => ({
    type: DELETE_CHAT,
    chatId,
})

export const addMessage: AddMessage = (chatId, message) => ({
    type: ADD_MESSAGE,
    chatId,
    message,
})
