import { Box, Typography } from "@mui/material";

export default function LeadAddHeader() {
  return (
    <Box
      sx={{ paddingTop: 6, display: 'flex', justifyContent: 'space-between' }}
    >
      <Typography variant="h4">{'Leads'}</Typography>
     
    </Box>
  );
}
