import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/authSlice'
import adminReducer from './admin/adminSlice'
import issueReducer from './issues/issueSlice'
export default configureStore({
  reducer: {
  
   auth:authReducer,
   admin:adminReducer,
   issue:issueReducer,
  
  },
});