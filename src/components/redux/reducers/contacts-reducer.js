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
    [fetchContactsList.fulfilled](state, { payload }) {
      state.items = payload;
      state.isLoading = false;
    },
    [fetchContactsList.pending](state) {
      state.isLoading = true;
      state.error = null;
    },
    [fetchContactsList.rejected](state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },
    [createItem.fulfilled](state, { payload }) {
      state.items = [...state.items, payload];
    },
    [createItem.pending](state) {
      state.error = null;
    },
    [createItem.rejected](state, { payload }) {
      state.error = payload;
    },
    [deleteItem.fulfilled](state, { payload }) {
      state.items = [...state.items.filter(({ id }) => id !== payload)];
    },
    [deleteItem.rejected](state, { payload }) {
      state.error = payload;
    },
    [deleteItem.pending](state) {
      state.error = null;
    },
    [changeFilter]: (state, { payload }) => {
      state.filter = payload;
    },
  },
});

export default itemsSlice.reducer;
