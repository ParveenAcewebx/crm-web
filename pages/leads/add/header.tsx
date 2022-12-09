import { Box, Typography } from "@mui/material";
import {Button} from '@mui/material';
import { useRouter } from "next/router";
import { useFormContext } from 'react-hook-form';
import { successMsg } from "../../../src/components/shared/toaster-msg/error-msg";
import _ from "lodash";


export default function LeadAddHeader() {

  const methods = useFormContext();
  const {  getValues, formState } = methods;
  const router  = useRouter()
  const { isValid, dirtyFields } = formState;
  const handleSaveLead = () => {
    successMsg('Lead successfully added')
    router.push('/leads/lists')
  }

  
  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between' }} >
      <Typography variant="h5">{'Add Lead'}</Typography>
      <Button variant="contained" onClick={handleSaveLead}  disabled={!dirtyFields || !isValid}>Save</Button>
    </Box>
  );
}
