import { configureStore } from '@reduxjs/toolkit'
import userSlice from './userSlice/userSlice'
import  reservationSlice  from './reservationSlice'
import  serviceSlice  from './serviceSlice'

export const store = configureStore({
  reducer: {
    user:userSlice,
    reservation:reservationSlice,
    service:serviceSlice
  },
})