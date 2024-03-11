import axios from "axios";

import { createAsyncThunk } from "@reduxjs/toolkit";
import { bookDeleteAction, bookFetchAction, bookPostAction, bookUpdateAction } from "./adminType";
export const postBook = createAsyncThunk(
  bookPostAction,
  async ({ name, author, description, genre, quantity }, { rejectWithValue, getState }) => {
    console.log('name, author, description, genre, quantity : ', name, author, description, genre, quantity);

    try {
      const token = getState().auth.token;

      const config = {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      };

      const response = await axios.post('http://localhost:8080/addBooks', { name, author, description, genre, quantity }, config);

      return response.data;
    }
    catch (err) {
      console.log("errpor", err.response.data)
      return rejectWithValue(err.response.data);

    }
  }
);
export const getBook = createAsyncThunk(bookFetchAction, async ({ searchField, searchQuery }, { rejectWithValue }) => {
  console.log('searchfield:ss ', searchField);


  try {

    let url = `http://localhost:8080/fetchallbooks`
    if (searchField && searchQuery) {


      url += `?field=${searchField}&search=${searchQuery}`;

    }

    const res = await axios.get(url);
    console.log('res: ', res);


   
    return res;
  }
  catch (err) {

    return rejectWithValue(err.response.data);

  }
});

export const updateBook = createAsyncThunk(
  bookUpdateAction,
  async ({ name, author, description, genre, quantity ,bookId}, { rejectWithValue, getState }) => {
    console.log('bookId: ', bookId);
  

    try {
      const token = getState().auth.token;

      const config = {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      };

      const response = await axios.put(`http://localhost:8080/updatebooks/${bookId}`, { name, author, description, genre, quantity }, config);

      return response.data;
    }
    catch (err) {
      console.log("errpor", err.response.data)
      return rejectWithValue(err.response.data);

    }
  }
);
export const deleteBook = createAsyncThunk(
  bookDeleteAction,
  async (bookId ,{ rejectWithValue, getState }) => {
    

    try {
      const token = getState().auth.token;

      const config = {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      };

      const response = await axios.put('http://localhost:8080/removeBook', config);

      return response.data;
    }
    catch (err) {
      console.log("errpor", err.response.data)
      return rejectWithValue(err.response.data);

    }
  }
);