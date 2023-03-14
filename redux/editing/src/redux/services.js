import { createSlice } from '@reduxjs/toolkit'

export const servicesSlice = createSlice({
  name: 'services',
  initialState: {
    services: [],
    isEdit: false,
  },
  reducers: {
    addService: (state, action) => {
      state.services.push(action.payload)
    },
    toggleIsEdit: (state, action) => {
      state.isEdit = action.payload;
    },
  },
})

export const { addService, toggleIsEdit } = servicesSlice.actions;
export const isEdit = ({ services }) => services.isEdit;
export const services = ({ services }) => services.services;

export default servicesSlice.reducer
