import React from 'react'
import Layout from '../../../src/Layout/layout'
import { Box } from "@mui/material";

import ViewHeader from './viewHeader'
const LeadView = () => {
  return (
    <div>
       <Layout commonHeader={<ViewHeader/>}>
            <Box className='container mx-auto '>
              <h1>View</h1>
            </Box>
        </Layout>
    </div>
  )
}

export default LeadView