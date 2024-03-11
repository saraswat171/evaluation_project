import { Box, Button, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import AddBook from '../../components/AddBook/AddBook'
import Bookuser from '../../components/BookCarduser/Bookuser'
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch, useSelector } from 'react-redux';
import { getBook } from '../../redux/admin/adminAction';
import Navbar from '../../components/Navbar/Navbar';
function Dashboard() {
  const dispatch = useDispatch()
  const [searchField , setSearchField]=useState('');
  const [searchQuery , setSearchQuery]=useState('');
  const bookDatas = useSelector((state)=>state.admin.booksData)
  const userData = JSON.parse(localStorage.getItem('user'))
  const handleSearchSubmit=(e)=>{
    e.preventDefault();
    if(searchField && searchQuery)
  
    console.log('searchField: ',searchQuery );
  dispatch(getBook({searchField,searchQuery}));
  }
  useEffect(()=>{
    console.log('hhhhh')
    dispatch(getBook(1))
  },[]);
  return (
    <Stack flexDirection={'column'} sx={{  backgroundColor:'white',
     boxSizing:'border-box', pl:'16px',pt:'8px',pr:'20px',borderRadius:'8px' , gap:'20px'}}>
      <Navbar/>
     
    <Stack flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'} sx={{pb:'14px'}}>
        <Typography fontSize={'16px'} fontWeight={'400'} color={'#666666'}>Books you want to borrow</Typography>
     
       <Box >
       <select value={searchField} onChange={(e) => setSearchField(e.target.value)}>
       <option >none</option>
        <option value="name">name</option>
        <option value="author">Author</option>
        <option value="genre">Genre</option>
      </select>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder={`Search by ${searchField}`}
      />
     <Button sx={{p:'0'}} type='button' onClick={handleSearchSubmit}><SearchIcon/></Button>
       </Box>
    </Stack>
   <Stack flexDirection={'row'} gap={'30px'}>
   <Stack flexWrap={'wrap'} display={'flex'} flexDirection={'row'}  gap={'13px'}>
    { bookDatas?.data && Object.values(bookDatas?.data)?.map((book) => ( 
  <Bookuser  
    key={book?._id} 
   
    data={book}

  />
    ))}

    </Stack>
<Stack> {userData?.role ==='admin' && <AddBook/> }</Stack>
   </Stack>
 </Stack>
  )
}

export default Dashboard