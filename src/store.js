import { configureStore } from '@reduxjs/toolkit'
import logger from "redux-logger";
import { combineReducers } from "redux";
import cartReducer from './services/redux/cartReducer';
import userReducer from './services/redux/userReducer';

import { persistReducer } from 'redux-persist';

import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: "root",
  storage,
  whitelist: ['cartHidden']
}

const reducers = combineReducers({
  user: userReducer,
  cartHidden: cartReducer
})

const persistedReducer = persistReducer(persistConfig, reducers);

export default configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }).concat(logger),
})
