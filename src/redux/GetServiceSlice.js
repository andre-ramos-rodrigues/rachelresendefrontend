import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
//import {getInfo} from './apiCalls'

export const GetServiceSlice = createSlice({
  name: 'getService',
  initialState: {
    getServiceContent: {
    title: '',
    text: ''
    },
    pending: false,
    error: false,
  },
  reducers: {
    getServiceStart: (state) => {
      state.pending = true;
      state.error = false;
    },
    getServiceSuccess: (state, action) => {
      state.getServiceContent.title = action.payload.title;
      state.getServiceContent.text = action.payload.text;
      state.pending = false;
      state.error = false;
    },
    getServiceError: (state) => {
      state.error = true;
      state.pending = false;
    }
  }
})

export const { getServiceStart, getServiceSuccess, getServiceError } = GetServiceSlice.actions

export default GetServiceSlice.reducer