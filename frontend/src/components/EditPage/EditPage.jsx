import {  Box, Button, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import Input from '../../components/Inputs/Input'
import { useDispatch } from 'react-redux';
import { updateBook } from '../../redux/admin/adminAction';
function EditPage() {
    const location = useLocation(); // this and below line has the data of users 
    const {state} = location;
    const data = state && state.data; 
    const dispatch = useDispatch();
    const navigate =useNavigate();
    const [author, setAuthor] = useState(data?.author || '');
    const [name, setName] = useState(data?.name || '');
    const [description, setDescription] = useState(data?.description || '');
    const [genre , setGenre] =useState(data?.genre || '');
    const [quantity , setQuantity]= useState(data?.quantity || '');
    

    const bookId = data?._id;
    const handleUpdateSubmit = async (e) => {
        e.preventDefault();
    
    
        try {
         const res = await dispatch(updateBook({bookId, name, author, description, genre, quantity }));
         console.log('res:to ', res);
         if(res.payload){
            navigate('/dashboard')
         }
    
        }
        catch (err) {
          alert(err);
        }
    
      };
      const handleDeleteClick=()=>{

      }
    

  return (
  <Stack sx={{backgroundColor:'#1B1B1B' , height:'100vh' , alignItems:'center', p:'20px', flexDirection:'column', gap:'40px' }}>
    <Typography sx={{color:'white' , fontSize:'30px'}}>Your book data to handle the quantity</Typography>
    <Stack component={'form'} onSubmit={handleUpdateSubmit} sx={{flexDirection:'column' , gap:'10px' , backgroundColor: 'white', width: '500px', height: '600px', borderRadius: '20px' ,p:'10px'}}>
    <Input label='Name of Book' type='text' height='30px' name='name'
                  defaultValue={data?.name}
                   value={name}
                  onChange={(e) => setName(e.target.value)}
                />

                <Input label='Author of book' type='text' height='30px' name='author'
                  defaultValue={data?.author}
                  value={author}

                  onChange={(e) => setAuthor(e.target.value)}
                />
                <Input label='Description of book' type='text' height='30px' name='description'
                  defaultValue={data?.description}
                      value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
                   <Input label='Genre of book' type='text' height='30px' name='genre'
                  defaultValue={data?.genre}
                     value={genre}
                  onChange={(e) => setGenre(e.target.value)}
                />
                   <Input label='Stocks of book' type='number' height='30px' name='quantity'
                  defaultValue={data?.quantity}
                       value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                />
                <Box>
                    <Button type='submit' sx={{textTransform:'none'}} >Update</Button>
                    <Button type='button' sx={{textTransform:'none'}} onClick={handleDeleteClick}>Delete</Button>
                </Box>
    </Stack>

  </Stack>
  )
}

export default EditPage