import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import * as contactsAPI from 'components/services/contactsAPI';

const displayToastError = e => toast.error(`${e}`);

const displayToastSuccess = message => toast.success(`${message}`);

export const fetchContactsList = createAsyncThunk(
  'users/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      const response = await contactsAPI.getContacts();
      return response;
    } catch (error) {
      displayToastError(error.message);
      return rejectWithValue(error.message);
    }
  },
);

export const createItem = createAsyncThunk(
  'contacts/add',
  async (contact, { rejectWithValue }) => {
    try {
      const response = await contactsAPI.addContact(contact);
      displayToastSuccess(`Contact ${contact.name} added`);
      return response;
    } catch (error) {
      displayToastError(error.message);
      return rejectWithValue(error.message);
    }
  },
);

export const deleteItem = createAsyncThunk(
  'contacts/delete',
  async (id, { rejectWithValue }) => {
    try {
      await contactsAPI.deleteContact(id);
      return id;
    } catch (error) {
      displayToastError(error.message);
      return rejectWithValue(error.message);
    }
  },
);
