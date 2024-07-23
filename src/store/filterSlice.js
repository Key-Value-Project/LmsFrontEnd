import { createSlice } from '@reduxjs/toolkit';

// Initial state of the filter
const initialState = {
    value: 'All',
};

// Create a slice for the filter with a name, initial state, and reducers
const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        // Action to set the filter
        setFilter: (state, action) => {
            state.value = action.payload;
        },
    },
});

// Export the action(s) and reducer
export const { setFilter } = filterSlice.actions;
export default filterSlice.reducer;
