// import { combineReducers } from 'redux';

import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContactsList,
  createItem,
  deleteItem,
} from '../operations/contacts-operations';
import { changeFilter } from '../actions/contacts-action';

const initialState = {
  items: [],
  isLoading: null,
  error: null,
  filter: '',
};

const itemsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: {
    [fetchContactsList.fulfilled](state, action) {
      state.items = action.payload;
      state.isLoading = false;
    },
    [fetchContactsList.pending](state) {
      state.isLoading = true;
      state.error = null;
    },
    [fetchContactsList.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    [createItem.fulfilled](state, action) {
      state.items = [...state.items, action.payload];
    },
    [createItem.pending](state) {
      state.error = null;
    },
    [createItem.rejected](state, action) {
      state.error = action.payload;
    },
    [deleteItem.fulfilled](state, action) {
      console.log(action.payload);
      state.items.filter(({ id }) => id !== action.payload);
    },
    [deleteItem.rejected](state, action) {
      state.error = action.payload;
    },
    [deleteItem.pending](state) {
      state.error = null;
    },
    [changeFilter]: (state, { payload }) => (state.filter = payload),
  },
});

export default itemsSlice.reducer;
