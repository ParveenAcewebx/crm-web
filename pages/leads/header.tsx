import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";

export default function LeadAddHeader() {
  return (
    <Box
      sx={{ display: 'flex', justifyContent: 'space-between' }}
    >
      <Typography variant="h5">{'All Leads'}</Typography>
      <Link href='/leads/add'><Button variant="contained">Add New Lead</Button></Link>
    </Box>

    
  );
}
