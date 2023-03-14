import { createSlice } from '@reduxjs/toolkit';

export const servicesSlice = createSlice({
  name: 'services',
  initialState: {
    services: [],
    isEdit: false,
  },
  reducers: {
    addService: (state, action) => {
      const { payload } = action;
      const currentItem = state.services.find(({ name }) => name === payload.name);
      if (currentItem) return;
      state.services.push(payload);
    },
    deleteService: (state, action) => {
      state.services = state.services.filter(({name}) => name !== action.payload);
    },
    toggleIsEdit: (state, action) => {
      state.isEdit = action.payload;
    },
  },
})

export const { addService, deleteService, toggleIsEdit } = servicesSlice.actions;
export const isEdit = ({ services }) => services.isEdit;
export const services = ({ services }) => services.services;

export default servicesSlice.reducer
