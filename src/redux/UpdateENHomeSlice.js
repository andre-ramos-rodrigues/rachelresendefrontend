import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { useSelector } from 'react-redux'
//import {getInfo} from './apiCalls'


export const UpdateENHomeSlice = createSlice({
  name: 'updateENHome',
  initialState: {
    updateENHomeContent: {
    title: '',
    text: ''
    },
    pending: false,
    error: false,
  },
  reducers: {
    updateENHomeStart: (state) => {
      state.pending = true;
      state.error = false;
    },
    updateENHomeSuccess: (state, action) => {
      state.updateENHomeContent.title = action.payload.title;
      state.updateENHomeContent.text = action.payload.text;
      state.pending = false;
      state.error = false;
    },
    updateENHomeError: (state) => {
      state.error = true;
      state.pending = false;
    }
  }
})

export const { updateENHomeStart, updateENHomeSuccess, updateENHomeError } = UpdateENHomeSlice.actions

export default UpdateENHomeSlice.reducer