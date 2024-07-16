import { configureStore } from "@reduxjs/toolkit";
import employeeReducer from "./employeeReducer";
import { setupListeners } from "@reduxjs/toolkit/query";
import apiWithTag from "../services/employee.api";
// import { employeeApi } from "../services/employee.api";

const store = configureStore({
	reducer: {
		employees: employeeReducer,
		[apiWithTag.reducerPath]: apiWithTag.reducer, // cache reducer

		// Add more reducers here
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiWithTag.middleware),
});

setupListeners(store.dispatch);

export default store;
