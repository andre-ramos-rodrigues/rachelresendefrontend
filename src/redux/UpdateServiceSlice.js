import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
//import {getInfo} from './apiCalls'

export const UpdateServiceSlice = createSlice({
  name: 'updateService',
  initialState: {
    updateServiceContent: {
    title: '',
    text: ''
    },
    pending: false,
    error: false,
  },
  reducers: {
    updateServiceStart: (state) => {
      state.pending = true;
      state.error = false;
    },
    updateServiceSuccess: (state, action) => {
      state.updateServiceContent.title = action.payload.title;
      state.updateServiceContent.text = action.payload.text;
      state.pending = false;
      state.error = false;
    },
    updateServiceError: (state) => {
      state.error = true;
      state.pending = false;
    }
  }
})

export const { updateServiceStart, updateServiceSuccess, updateServiceError } = UpdateServiceSlice.actions

export default UpdateServiceSlice.reducer