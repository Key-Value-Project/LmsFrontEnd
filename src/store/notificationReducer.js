import { createReducer, createAction } from '@reduxjs/toolkit';

// Define actions
export const addNotification = createAction('ADD_NOTIFICATION');
export const removeNotification = createAction('REMOVE_NOTIFICATION');
export const clearNotifications = createAction('CLEAR_NOTIFICATION');

// Initial state
const initialState = [];

// Create reducer
const notificationReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addNotification, (state, action) => {
      const exists = state.some((notification) => notification === action.payload);
      if (!exists) {
        state.push(action.payload);
      }
    })
    .addCase(removeNotification, (state, action) => {
      return state.filter((notification) => notification.id !== action.payload.id);
    })
    .addCase(clearNotifications, () => {
      return [];
    });
});

export default notificationReducer;
