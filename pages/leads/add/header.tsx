import { Box, Typography } from "@mui/material";

export default function LeadAddHeader() {
  return (
    <Box
      sx={{ display: 'flex', justifyContent: 'space-between' }}
    >
      <Typography variant="h6">{'Leads'}</Typography>
     
    </Box> 
  );
}
