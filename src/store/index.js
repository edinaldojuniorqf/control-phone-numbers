import { configureStore } from '@reduxjs/toolkit'
import phoneReducer from './ducks/phoneSlice'

export default configureStore({
  reducer: {
    phone: phoneReducer,
  },
})
