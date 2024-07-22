import { configureStore } from "@reduxjs/toolkit";
// import employeeReducer from "./employeeReducer";
import { setupListeners } from "@reduxjs/toolkit/query";
import apiWithTag from "../services/employee.api";
import filterSlice from "./filterSlice.js";
import libraryApiWithTags, { libraryBaseApi } from "../services/library.api";
import navigationSlice from "./navigationSlice.js";
// import { employeeApi } from "../services/employee.api";

const store = configureStore({
  reducer: {
    // employees: employeeReducer,
    [apiWithTag.reducerPath]: apiWithTag.reducer,
    //library reducer
    [libraryApiWithTags.reducerPath]: libraryApiWithTags.reducer,
    // cache reducer
    filter: filterSlice,
    // Add more reducers here
    navigation: navigationSlice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      apiWithTag.middleware,
      libraryApiWithTags.middleware
    ),
});

setupListeners(store.dispatch);

export default store;
