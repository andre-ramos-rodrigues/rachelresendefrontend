import { createSlice } from '@reduxjs/toolkit'

export const EnglishModeSlice = createSlice({
  name: 'englishMode',
  initialState: {
    englishOn: false
  },
  reducers: {
    turnOn: (state) => {
      state.englishOn = true
    },
    turnOff: (state) => {
      state.englishOn = false
    }
  }
})

export const { turnOn, turnOff } = EnglishModeSlice.actions

export default EnglishModeSlice.reducer