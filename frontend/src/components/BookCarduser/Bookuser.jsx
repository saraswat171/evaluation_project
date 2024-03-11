import { Box, Button, Paper, Stack, Typography } from '@mui/material'
import React from 'react'
import backgroundimg from '../../assets/glasses-1052010_640.jpg'
import { useNavigate } from 'react-router-dom'
function Bookuser({data}) {
    console.log('data: ', data);
    
  const navigate = useNavigate()
    const userData = JSON.parse(localStorage.getItem('user'))
    const handleClick=()=>{
        if(userData?.role=== 'admin'){
            console.log('data:fffff ', data);
          navigate('/editpage',{state:{data}})
        }
        if(userData?.role=== 'student'){
            console.log('data:fffff ', data);
          navigate('/getbook',{state:{data}})
        }
    }
  return (
    <Paper key={data?._id} sx={{width:'184px',height:'max-content' ,backgroundColor:'#FFFFFF',borderRadius:"10px","&:hover":{boxShadow:6}  }} className='papper'  elevation={1}>
        <Stack  flexDirection={'column'} sx={{width:'184px',height:'max-content', cursor:'pointer' ,backgroundColor:'#FFFFFF',borderRadius:"10px"}} >
    <Stack flexDirection={'column'} alignItems={'center'} >
         <Box  > <img src={backgroundimg} alt='' style={{width:'184px' , height:'62px' ,borderRadius:10, borderBottomLeftRadius:0 , borderBottomRightRadius:0 ,background:'skyblue' }}></img></Box>
       
       
    </Stack >
    <Stack flexDirection={'column'} sx={{m:0 ,pb:1.5,pl:'12px', pr:'12px',justifyContent:'center', alignItems:'center' }}>
        <Typography  fontSize={'16px'} >{data?.name}</Typography>
        <Typography  fontSize={'14px'} textAlign={'center'} color={'#999999'}>{data?.author}</Typography>

        <Typography mt={'12px'} fontSize={'12px'} color={'#999999'} textAlign={'center'} >{data?.genre} </Typography>
        <Button variant='outlined' onClick={handleClick} type='button'  sx={{textTransform:'none',fontWeight:'550', fontSize:'16px' ,borderRadius:'30px',p:'0',display:'flex', gap:'5px' , mt:'12px', width:'100%'}}> 
        {userData?.role ==='admin' ? 'Update' : 'borrow'}  </Button>

   
    </Stack>
  

</Stack>
</Paper>
  )
}

export default Bookuser