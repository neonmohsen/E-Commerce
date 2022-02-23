import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './services/redux/cartReducer'
import userReducer from './services/redux/userReducer'

export default configureStore({
  reducer: {
      user : userReducer,
      cartHidden : cartReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  }),
})