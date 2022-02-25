import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isToken: localStorage.getItem("accessToken"),
  isLoginError: null,
  isLoginPending: false,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginPending(state) {
        state.isLoginPending = true
    },

    loginSuccess(state, { payload }) {
        localStorage.setItem("accessToken", payload.accessToken)
        localStorage.setItem("username", payload.username)
        localStorage.setItem("user_id", payload.user_id)
        state.isToken = localStorage.getItem("accessToken")
        state.isLoginError = null
        state.isLoginPending = false
    },

    loginFail(state, { payload }) {
        state.isLoginPending = false
        state.isLoginError = payload
    },

    logout(state) {
        localStorage.removeItem("accessToken")
        localStorage.removeItem("username")
        localStorage.removeItem("user_id")
        state.isToken = null
    }
  },
})

export const { loginSuccess, loginFail, loginPending, logout } = userSlice.actions
export default userSlice.reducer