import { createStore, compose, combineReducers, applyMiddleware } from 'redux';
import { chatReducer, ChatsState } from './chats/reducer';
import thunk from 'redux-thunk';
import { profileReducer, ProfileState } from './profile/reducer';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';


export const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export type StoreState = ReturnType<typeof rootReducer>;

const persistConfig = {
  key: 'chats',
  storage,
  blacklist: ['profile'],
};

const rootReducer = combineReducers({
  profile: profileReducer,
  chats: chatReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

// export const store = configureStore({
//   reducer: persistedReducer,
//   devTools: process.env.NODE_ENV !== 'production',
// });

 export const store = createStore(persistedReducer, composeEnhancers(applyMiddleware(thunk)));

 export const persistor = persistStore(store);