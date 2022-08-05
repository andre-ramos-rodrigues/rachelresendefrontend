import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const InfoSlice = createSlice({
  name: 'info',
  initialState: {
    infoContent: {
    homeTitle: '',
    homeText: '',
    mentoringTitle: '',
    mentoringText: ''
    },
    pending: false,
    error: false,
  },
  reducers: {
    infoStart: (state) => {
      state.pending = true;
      state.error = false;
    },
    infoSuccess: (state, action) => {
      state.infoContent.homeTitle = action.payload.homeTitle;
      state.infoContent.homeText = action.payload.homeText;
      state.infoContent.mentoringTitle = action.payload.mentoringTitle;
      state.infoContent.mentoringText = action.payload.mentoringText;
      state.pending = false;
      state.error = false;
    },
    infoError: (state) => {
      state.error = true;
      state.pending = false;
    }
  }
})

export const { infoStart, infoSuccess, infoError } = InfoSlice.actions

export default InfoSlice.reducer