import { TextField } from '@mui/material'
import React from 'react'

const Input_Components = (props) => {
    const {placeholder,type,label,id,onChange,required, value} = props
  return (
    <TextField onChange={onChange} value={value} required={required} id={id} type={type} placeholder={placeholder} label={label} variant="outlined" sx={{ width: '100%', mt: 3 }} />
  )
}

export default Input_Components