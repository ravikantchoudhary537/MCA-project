import { configureStore } from '@reduxjs/toolkit'
import isAuthenticateReducer  from './slice/AuthenticateSlice'

export const store = configureStore({
  reducer: {
    authenticate: isAuthenticateReducer
  },
})

