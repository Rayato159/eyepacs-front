import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../features/userSlice'
import eyePhotosReducer from '../features/eyePhotosSlice'

export default configureStore({
  reducer: {
    user: userReducer,
    eyePhotos: eyePhotosReducer
  }
})