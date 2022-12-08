import React from 'react';
import { Box, Typography } from "@mui/material";
import { useFormContext } from 'react-hook-form';



const LeadEditHeader = () => {

  const methods = useFormContext();
  const { formState, getValues, reset } = methods;
  const { isValid, dirtyFields } = formState;
  
  return ( 
    <Box
    sx={{ display: 'flex', justifyContent: 'space-between' }}
  >
    <Typography variant="h6">{'Edit Leads'}</Typography>
   
  </Box>
  )
}

export default LeadEditHeader



