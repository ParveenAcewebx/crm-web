import React from 'react'
import { Box, Typography } from "@mui/material";
import {Button} from '@mui/material';
import Router from 'next/router'
const ViewHeader = () => {
  return (
    <div>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }} >
            <Typography variant="h6">{'View Leads'}</Typography>
        </Box>
        <Box className="mt-5">
        <Button variant="contained" onClick={() => Router.back()}>Back</Button>
        </Box>
    </div>
  )
}

export default ViewHeader