import {
    OutlinedInput ,InputAdornment  } from '@mui/material'
  import React, { useState } from 'react'
  import './Adornment.css'
  function Adornment({label,padding , onChange}) {
      const [showPassword, setShowPassword] = useState(false);
      const [show, setShow] = useState('Show');
  
      const handleClickShowPassword = () => {
          
          setShowPassword((show) => !show)
          showPassword ? setShow('Show') : setShow('Hide');
      };
    return (
  
  <>
  <label className='label'>{label}</label>
      <OutlinedInput onChange={onChange} size='small'
      sx={{padding ,marginTop:'5px' }}
        type={showPassword ? 'text' : 'password'}
        endAdornment={
          <InputAdornment position="end">
            <button
             className='password-btn'
              onClick={handleClickShowPassword}
              type="button"
            
            >{show}
             
            </button>
          </InputAdornment>
        }
       
      /></>
  
    )
  }
  
  export default Adornment