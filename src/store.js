import { configureStore } from '@reduxjs/toolkit'
import logger from "redux-logger";
import { combineReducers } from "redux";
import cartReducer from './services/redux/cartReducer';
import userReducer from './services/redux/userReducer';
import directorySlice from "./services/redux/directoryReduce"

import { persistReducer } from 'redux-persist';

import storage from 'redux-persist/lib/storage';
import shopDataReducer from './services/redux/shopDataReducer';

const persistConfig = {
  key: "root",
  storage,
  whitelist: ['cart']
}

const reducers = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory : directorySlice,
  shopData : shopDataReducer,
})

const persistedReducer = persistReducer(persistConfig, reducers);

const middleware = []

if (process.env.NODE_ENV !== 'production') {
  middleware.push(logger)
}

export default configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }).concat(middleware),
})
