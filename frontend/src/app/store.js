import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'
import homeworkReducer from '../features/homework/homeworkSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    homeworks: homeworkReducer
  },
})
