import { Box } from '@mui/material'
import React from 'react'
import CarsAutocomplete from '../components/Sidebar/FilterInputs/CarsAutocomplete'
import PriceFilter from '../components/Sidebar/FilterInputs/PriceFilter'
import { CarAdverts } from '../components/CarAdverts.jsx/CarAdverts'

export const Cars = () => {
  return (
    <>
    <Box sx={{
        display: 'flex',
        alignItems: 'center',
        
    }}>
        <CarsAutocomplete />
        <PriceFilter />
    </Box>
    <Box display='flex' flexWrap='wrap' width='1250px'>
    <CarAdverts />
    </Box>
    
    </>
  )
}
