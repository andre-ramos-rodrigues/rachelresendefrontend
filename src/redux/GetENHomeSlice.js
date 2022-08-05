import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
//import {getInfo} from './apiCalls'

export const GetENHomeSlice = createSlice({
  name: 'getENHome',
  initialState: {
    getENHomeContent: {
    title: '',
    text: ''
    },
    pending: false,
    error: false,
  },
  reducers: {
    getENHomeStart: (state) => {
      state.pending = true;
      state.error = false;
    },
    getENHomeSuccess: (state, action) => {
      state.getENHomeContent.title = action.payload.title;
      state.getENHomeContent.text = action.payload.text;
      state.pending = false;
      state.error = false;
    },
    getENHomeError: (state) => {
      state.error = true;
      state.pending = false;
    }
  }
})

export const { getENHomeStart, getENHomeSuccess, getENHomeError } = GetENHomeSlice.actions

export default GetENHomeSlice.reducer