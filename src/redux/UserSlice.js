import { createSlice } from '@reduxjs/toolkit'

export const UserSlice = createSlice({
  name: 'user',
  initialState: {
    userInfo: {
      username: '',
      email: ''
    },
    pending: false,
    error: false,
  },
  reducers: {
    loginStart: (state) => {
      state.pending = true;
      state.error = false;
    },
    loginSuccess: (state, action) => {
      state.userInfo.username = action.payload.username;
      state.userInfo.email = action.payload.email;
      state.pending = false;
      state.error = false;
    },
    loginError: (state) => {
      state.error = true;
      state.pending = false;
    },
    logout: (state) => {
      state.userInfo.username = '';
      state.userInfo.email = '';
      state.error = false;
      state.pending = false;
    },
  },
})

export const { loginStart, loginSuccess, loginError, logout } = UserSlice.actions

export default UserSlice.reducer