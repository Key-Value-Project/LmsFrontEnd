import { configureStore } from '@reduxjs/toolkit';
import employeeReducer from './employeeReducer';

const store = configureStore({
    reducer: {
        employees: employeeReducer,
        // Add more reducers here
    },
});

export default store;