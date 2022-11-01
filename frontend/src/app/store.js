import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'
import homeworkReducer from '../features/homework/homeworkSlice'
import holidayReducer from '../features/holiday/holidaySlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    homeworks: homeworkReducer,
    holidays: holidayReducer
  },
})
