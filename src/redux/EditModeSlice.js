import { createSlice } from '@reduxjs/toolkit'

export const EditModeSlice = createSlice({
  name: 'editMode',
  initialState: {
    edit: false
  },
  reducers: {
    turnOn: (state) => {
      state.edit = true
    },
    turnOff: (state) => {
      state.edit = false
    }
  }
})

export const { turnOn, turnOff } = EditModeSlice.actions

export default EditModeSlice.reducer