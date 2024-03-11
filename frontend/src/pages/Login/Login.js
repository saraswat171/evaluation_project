import React, { useEffect, useState } from 'react'


import Input from '../../components/Inputs/Input'

import { Link, useNavigate } from 'react-router-dom'
import { Box, Button, Stack, Typography } from '@mui/material'
import Adornment from '../../components/Adornment/Adornment'
import bookimg from '../../assets/pngtree-education-bookshelf-light-background-image_2120211.jpg'
import MenuBookIcon from '@mui/icons-material/MenuBook';
import { useDispatch, useSelector } from 'react-redux'
import {loginUser } from '../../redux/auth/authAction'

const SignUp = () => {
  const [email, setEmail] = useState();

  const [password, setPassword] = useState();

  const dispatch = useDispatch()

  const navigate = useNavigate()




  function handlePassword(event) {
    let new_pass = event.target.value;
    setPassword(new_pass);

  }
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('email, password,role: ', email, password);

    try {
      dispatch(loginUser({ email, password }));

    }
    catch (err) {
      alert(err);
    }

  };
  const logged = useSelector(state => state.auth.logged);
  useEffect(()=>{
    if(logged){
      navigate('/Home')
    }
  },[logged ,navigate])



  return (
    <Stack sx={{ backgroundColor: '#1B1B1B', height: '100vh' }} >
      <Stack margin={'auto'} borderRadius={'1px solid green'} className='bookimg' flexDirection={'row'} >
        <Box sx={{ width: '1000px', borderRadius: '20px' }} >
          <img src={bookimg} alt='' style={{ width: '100%', height: '600px' }} >
          </img>
        </Box>

        <Stack flexDirection={'column'} gap={'10px'} component={'form'} onSubmit={handleSubmit}
          sx={{ backgroundColor: 'white', width: '500px', height: '600px', borderRadius: '20px' }}>

          <Box className='content' m={'30px'}>

         


              <Box className='hero-content' sx={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '100%' }}>
                <Box className='text-field' sx={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '100%' }}>
                  
               

                  <Input label='Email or phone number' type='email' height='30px' name='email'
                    value={email}

                    onChange={(e) => setEmail(e.target.value)}
                  />


                  <Adornment label='Password (6+ characters)' name='password'
                    value={password} onChange={handlePassword}


                  />
                
                </Box>

                <Box className='textbutton' sx={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '100%', alignItems: 'center' }}>



                  <Button variant='outlined' type='submit'
                    sx={{
                      textTransform: 'none', fontWeight: '500', fontSize: '16px', width: '200px',
                      borderRadius: '80px', display: 'flex', p: '8px', color: 'white', backgroundColor: 'Black',
                      mr: '8px', ":hover": { backgroundColor: '#004182', color: 'white' }
                    }}>Log in  </Button>
                </Box>


                <Box className='lastdiv' sx={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '100%', alignItems: 'center' }}>

                  <p className='lastpara'>New User? <Link className='loginto' to='/' >SignUp</Link> </p>

                </Box>
                <Box className='lastdiv' sx={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '100%', alignItems: 'center' }}>
                  <Typography>Welcome to Book Library</Typography>


                </Box>
                <Box className='lastdiv' sx={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '100%', alignItems: 'center' }}>
                  <MenuBookIcon sx={{ height: '60px', width: '60px' }} />


                </Box>
              </Box>



            </Box>
       


        </Stack>
      </Stack>
    </Stack>
  )
}

export default SignUp