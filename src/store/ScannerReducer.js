import { createReducer, createAction } from '@reduxjs/toolkit';

export const addScannerIsbn = createAction('ADD_SCANNER_ISBN');
export const removeScannerIsbn = createAction('REMOVE_SCANNER_ISBN');

const initialState = '';

const ScannerReducer = createReducer(initialState, (builder) => {
  builder.addCase(addScannerIsbn, (state, action) => {
    return action.payload;
  });
  builder.addCase(removeScannerIsbn, () => {
    return '';
  });
});

export default ScannerReducer;
