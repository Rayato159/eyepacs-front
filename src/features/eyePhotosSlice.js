import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    eyes: [],
}

export const eyePhotosSlice = createSlice({
  name: 'eyePhotos',
  initialState,
  reducers: {
      setEyesCurrent(state, { payload }) {
        state.eyes = payload
      },
  },
})

export const { setEyesCurrent } = eyePhotosSlice.actions
export default eyePhotosSlice.reducer