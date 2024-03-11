import { createSlice } from "@reduxjs/toolkit";
import { getBook, postBook, updateBook } from "./adminAction";


export const adminSlice = createSlice({
    name: 'admin',
    initialState: {
      loading: false,
      logloading:false,
      booksData:null,
      error: null,
      success:false,
      updatedData:null,
    },
    reducers: {
  
    },
    extraReducers: (builder) => {
      builder
        .addCase(postBook.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(postBook.fulfilled, (state) => {
          state.loading = false;
          state.success=true;
          console.log(' state' , state.success)
          
        })
        .addCase(postBook.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message;
        })
        .addCase(getBook.pending, (state) => {
          state.logloading = true;
          state.error = null;
          state.logged=false;
        })
        .addCase(getBook.fulfilled, (state,action) => {
          state.logloading = false;
          state.booksData = action.payload;
          console.log('booksData: ', state.booksData);
        
         state.logged=true;
        
        })
        .addCase(getBook.rejected, (state, action) => {
          state.logloading = false;
          state.error = action.payload;
          console.log('error payload' , action.payload)
          state.logged = false;
        })
        .addCase(updateBook.pending, (state) => {
          state.loading = true;
          state.error = null;
        
     
        })
        .addCase(updateBook.fulfilled, (state , action) => {
          state.loading = false;
         
         
        
        })
        .addCase(updateBook.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload;
       
        });
    },
  });
 
  export default adminSlice.reducer;