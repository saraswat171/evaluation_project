import axios from "axios";

import { createAsyncThunk } from "@reduxjs/toolkit";
import { StatusUpdateAction, bookIssueAction } from "./issueType";

export const postIssue = createAsyncThunk(
    bookIssueAction,
  async (bookId, { rejectWithValue, getState }) => {
      
     
    try {
      const token = getState().auth.token;

      const config = {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      };

      const response = await axios.post('http://localhost:8080/issuesbook',{bookId}, config);

      return response.data;
    }
    catch (err) {
      console.log("errpor", err.response.data)
      return rejectWithValue(err.response.data);

    }
  }
);
export const updateIssue = createAsyncThunk(
    StatusUpdateAction,
  async (bookId, { rejectWithValue, getState }) => {
      
     
    try {
      const token = getState().auth.token;

      const config = {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      };

      const response = await axios.post('http://localhost:8080/updateStatus',{bookId}, config);

      return response.data;
    }
    catch (err) {
      console.log("errpor", err.response.data)
      return rejectWithValue(err.response.data);

    }
  }
);