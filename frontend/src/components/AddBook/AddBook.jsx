import { Button, Stack } from '@mui/material'
import React, { useState } from 'react'
import Input from '../../components/Inputs/Input'
import { useDispatch, useSelector } from 'react-redux';
import { postBook } from '../../redux/admin/adminAction';
function AddBook() {
    const [author, setAuthor] = useState();
    const [name, setName] = useState();
    const [description, setDescription] = useState();
    const [genre , setGenre] =useState();
    const [quantity , setQuantity]= useState();
    const dispatch = useDispatch()
      const handleSubmit = async (e) => {
        e.preventDefault();
    
      
    
        try {
       
        const res = await dispatch(postBook({ name, author, description, genre, quantity }));
        if(res){
          console.log('res: ', res);
          alert('added auccessfully');
          setAuthor('');
          setDescription('')
          setGenre('')
          setName('');
          setQuantity('');
        }
        }
        catch (err) {
          alert(err);
        }
    
      };
     
  return (
    <Stack  >


      <Stack flexDirection={'column'} gap={'10px'} component={'form'} onSubmit={handleSubmit}
        sx={{ backgroundColor: 'white', width: '500px', height: '600px', borderRadius: '20px' }}>

      

       


           
             
                
              <Input label='Name of Book' type='text' height='30px' name='name'
                  value={name}

                  onChange={(e) => setName(e.target.value)}
                />

                <Input label='Author of book' type='text' height='30px' name='author'
                  value={author}

                  onChange={(e) => setAuthor(e.target.value)}
                />
                <Input label='Description of book' type='text' height='30px' name='description'
                  value={description}

                  onChange={(e) => setDescription(e.target.value)}
                />
                   <Input label='Genre of book' type='text' height='30px' name='genre'
                  value={genre}

                  onChange={(e) => setGenre(e.target.value)}
                />
                   <Input label='Stocks of book' type='number' height='30px' name='quantity'
                  value={quantity}

                  onChange={(e) => setQuantity(e.target.value)}
                />


               


                
       

              

             



                <Button variant='outlined' type='submit'
                  sx={{
                    textTransform: 'none', fontWeight: '500', fontSize: '16px', width: '200px',
                    borderRadius: '80px', display: 'flex', p: '8px', color: 'white', backgroundColor: 'Black',
                    mr: '8px', ":hover": { backgroundColor: '#004182', color: 'white' }
                  }}>Add Book  </Button>
             


            
          
     


     


      </Stack>
    </Stack>

  )
}

export default AddBook