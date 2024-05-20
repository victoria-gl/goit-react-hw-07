import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const URL = "https://65e20491a8583365b317ccf2.mockapi.io";

export const fetchContacts = createAsyncThunk(
  "Contacts/fetchContacts",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`${URL}/Contacts`);
      console.log(response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchAddContact = createAsyncThunk(
  "contacts/fetchAddContact",
  async (contact, thunkAPI) => {
    try {
      const response = await axios.post(`${URL}/Contacts`, contact);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchDeleteContact = createAsyncThunk(
  "Contacts/fetchDeleteContact",
  async (id, thunkAPI) => {
    try {
      await axios.delete(`${URL}/Contacts/${id}`);
      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
