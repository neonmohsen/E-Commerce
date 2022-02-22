import { configureStore } from '@reduxjs/toolkit'
import userReducer from './services/redux/userReducer'

export default configureStore({
  reducer: {
      user : userReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  }),
})