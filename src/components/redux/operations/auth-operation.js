import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import * as userAPI from 'components/services/userAPI';

const displayToastError = e => toast.error(`${e}`);

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const userRegister = createAsyncThunk(
  'auth/register',
  async (user, { rejectWithValue }) => {
    try {
      const response = await userAPI.userSignup(user);
      token.set(response.token);
      console.log('response', response);
      return response;
    } catch (error) {
      displayToastError(error.message);
      return rejectWithValue(error.message);
    }
  },
);

export const userLogin = createAsyncThunk(
  'auth/login',
  async (user, { rejectWithValue }) => {
    try {
      const response = await userAPI.userLogin(user);
      token.set(response.token);
      return response;
    } catch (error) {
      displayToastError(error.message);
      return rejectWithValue(error.message);
    }
  },
);

export const userLogout = createAsyncThunk(
  'auth/logout',
  async (user, { rejectWithValue }) => {
    try {
      const response = await userAPI.userLogout(user);
      token.unset();
      return response;
    } catch (error) {
      displayToastError(error.message);
      return rejectWithValue(error.message);
    }
  },
);

export const fetchUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }

    token.set(persistedToken);
    try {
      const { data } = await axios.get('/users/current');
      return data;
    } catch (error) {
      displayToastError(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
