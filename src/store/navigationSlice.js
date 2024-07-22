import { createSlice } from "@reduxjs/toolkit";

// Initial state of the filter
const initialState = {
  value: "employee",
};

// Create a slice for the filter with a name, initial state, and reducers
const navigationSlice = createSlice({
  name: "navigation",
  initialState,
  reducers: {
    // Action to set the filter
    setFilter: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Export the action(s) and reducer
export const { setFilter } = navigationSlice.actions;
export default navigationSlice.reducer;
