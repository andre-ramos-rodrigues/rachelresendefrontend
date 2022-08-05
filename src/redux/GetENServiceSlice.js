import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
//import {getInfo} from './apiCalls'

export const GetENServiceSlice = createSlice({
  name: 'getENService',
  initialState: {
    getENServiceContent: {
    title: '',
    text: ''
    },
    pending: false,
    error: false,
  },
  reducers: {
    getENServiceStart: (state) => {
      state.pending = true;
      state.error = false;
    },
    getENServiceSuccess: (state, action) => {
      state.getENServiceContent.title = action.payload.title;
      state.getENServiceContent.text = action.payload.text;
      state.pending = false;
      state.error = false;
    },
    getENServiceError: (state) => {
      state.error = true;
      state.pending = false;
    }
  }
})

export const { getENServiceStart, getENServiceSuccess, getENServiceError } = GetENServiceSlice.actions

export default GetENServiceSlice.reducer