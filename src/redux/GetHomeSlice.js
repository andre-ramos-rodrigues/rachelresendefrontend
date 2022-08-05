import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
//import {getInfo} from './apiCalls'

export const GetHomeSlice = createSlice({
  name: 'getHome',
  initialState: {
    getHomeContent: {
    title: '',
    text: ''
    },
    pending: false,
    error: false,
  },
  reducers: {
    getHomeStart: (state) => {
      state.pending = true;
      state.error = false;
    },
    getHomeSuccess: (state, action) => {
      state.getHomeContent.title = action.payload.title;
      state.getHomeContent.text = action.payload.text;
      state.pending = false;
      state.error = false;
    },
    getHomeError: (state) => {
      state.error = true;
      state.pending = false;
    }
  }
})

export const { getHomeStart, getHomeSuccess, getHomeError } = GetHomeSlice.actions

export default GetHomeSlice.reducer