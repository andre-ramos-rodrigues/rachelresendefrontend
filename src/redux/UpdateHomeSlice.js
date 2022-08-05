import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { useSelector } from 'react-redux'
//import {getInfo} from './apiCalls'


export const UpdateHomeSlice = createSlice({
  name: 'updateHome',
  initialState: {
    updateHomeContent: {
    title: '',
    text: ''
    },
    pending: false,
    error: false,
  },
  reducers: {
    updateHomeStart: (state) => {
      state.pending = true;
      state.error = false;
    },
    updateHomeSuccess: (state, action) => {
      state.updateHomeContent.title = action.payload.title;
      state.updateHomeContent.text = action.payload.text;
      state.pending = false;
      state.error = false;
    },
    updateHomeError: (state) => {
      state.error = true;
      state.pending = false;
    }
  }
})

export const { updateHomeStart, updateHomeSuccess, updateHomeError } = UpdateHomeSlice.actions

export default UpdateHomeSlice.reducer