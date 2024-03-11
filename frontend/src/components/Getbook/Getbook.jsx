import {  Box, Button, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

import { useDispatch } from 'react-redux';

import { postIssue, updateIssue } from '../../redux/issues/issueAction';
function Getbook() {
    const location = useLocation(); // this and below line has the data of users 
    const {state} = location;
    const data = state && state.data; 
    const dispatch = useDispatch();
    const navigate =useNavigate();

    

    const bookId = data?._id;
   
      const handleBorrowClick=()=>{
           dispatch(postIssue(bookId))
      }
      const handleReturnClick=()=>{
        dispatch(updateIssue(bookId))
   }
    

  return (
  <Stack sx={{backgroundColor:'#1B1B1B' , height:'100vh' , alignItems:'center', p:'20px', flexDirection:'column', gap:'40px' }}>
    <Typography sx={{color:'white' , fontSize:'30px'}}>Your book data to handle the quantity</Typography>
    <Stack  sx={{flexDirection:'column' , gap:'10px' , backgroundColor: 'white', width: '500px', height: '600px', borderRadius: '20px' ,p:'10px'}}>
                <Typography fontSize={'30px'}>Name of book : {data?.name}</Typography>
                <Typography fontSize={'30px'}>Author of book : {data?.author}</Typography>
                <Typography fontSize={'30px'}>Description of book : {data?.description}</Typography>
                <Typography fontSize={'30px'}>Genre of book : {data?.genre}</Typography>
                <Typography fontSize={'30px'}>Availabliity of book : {data?.quantity <=0 ? 'Not available' : 'Available' }</Typography>
                <Box mt={'30px'}>
                    <Button type='button' sx={{textTransform:'none'}} onClick={handleBorrowClick} >Borrow</Button>
                    <Button type='button' sx={{textTransform:'none'}} onClick={handleReturnClick}>Return</Button>
                </Box>
    </Stack>

  </Stack>
  )
}

export default Getbook