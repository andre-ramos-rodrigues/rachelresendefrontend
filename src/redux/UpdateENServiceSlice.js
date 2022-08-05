import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
//import {getInfo} from './apiCalls'

export const UpdateENServiceSlice = createSlice({
  name: 'updateENService',
  initialState: {
    updateENServiceContent: {
    title: '',
    text: ''
    },
    pending: false,
    error: false,
  },
  reducers: {
    updateENServiceStart: (state) => {
      state.pending = true;
      state.error = false;
    },
    updateENServiceSuccess: (state, action) => {
      state.updateENServiceContent.title = action.payload.title;
      state.updateENServiceContent.text = action.payload.text;
      state.pending = false;
      state.error = false;
    },
    updateENServiceError: (state) => {
      state.error = true;
      state.pending = false;
    }
  }
})

export const { updateENServiceStart, updateENServiceSuccess, updateENServiceError } = UpdateENServiceSlice.actions

export default UpdateENServiceSlice.reducer