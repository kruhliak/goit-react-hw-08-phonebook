import { createSlice } from '@reduxjs/toolkit';
import {
  userRegister,
  userLogin,
  userLogout,
  fetchUser,
} from '../operations/auth-operation';

const initialState = {
  user: [],
  isLoading: null,
  token: null,
  error: null,
  isLogged: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: {
    [userRegister.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoading = false;
      state.isLogged = true;
    },
    [userRegister.pending](state) {
      state.isLoading = true;
      state.error = null;
    },
    [userRegister.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    [userLogin.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoading = false;
      state.isLogged = true;
    },
    [userLogin.pending](state) {
      state.isLoading = true;
      state.error = null;
    },
    [userLogin.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    [userLogout.fulfilled](state, action) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoading = false;
      state.isLogged = false;
    },
    [userLogout.pending](state) {
      state.isLoading = true;
      state.error = null;
    },
    [userLogout.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    [fetchUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoading = false;
      state.isLogged = true;
    },
    [fetchUser.pending](state) {
      state.isLoading = true;
      state.error = null;
    },
    [fetchUser.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default userSlice.reducer;
