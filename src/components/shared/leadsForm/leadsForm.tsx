import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useFormContext } from 'react-hook-form';
import Box from '@mui/material/Box';
import { Grid } from '@mui/material';
import { FormInputText } from '../formInputs/FormInputText';
import { PhoneNumber } from '../formInputs/PhoneNumber';
import FormInputDropdown from '../formInputs/FormInputDropdown';
import {Button} from '@mui/material';

 
const source = [
  { label: 'Phone Number', value: 'phoneNumber' },
  { label: 'Website', value: 'website' },
  { label: 'Home Adviser', value: 'homeAdviser' }
];


const LeadsFormComponent = () => {

  const methods = useFormContext();
  const { control, formState } = methods;
  const { errors } = formState;

  return (
    <>
    <FormProvider {...methods}>
        <Box className='container mx-auto '>
          <Grid container spacing={3}>
              <Grid item xs={6}>
                <FormInputText
                    name="firstName"
                    control={control}
                    label="First Name"
                    required={true}
                    errors={errors}
                />
              </Grid>
              <Grid item xs={6}>
                <FormInputText
                    name="middleName"
                    control={control}
                    label="Middle Name"
                    errors={errors}
                    required={true}
                />
              </Grid>
              <Grid item xs={6}>
                <FormInputText
                    name="lastName"
                    control={control}
                    label="Last Name"
                    errors={errors}
                    required={true}
                />
              </Grid>
          
              <Grid item xs={6}>
                <FormInputDropdown
                    name={'source'}
                    control={control}
                    label={'Source'}
                    data={source}
                    required={true}
                    errors={errors}
                />
              </Grid>
          </Grid>
        </Box>
        </FormProvider>
    </>
  )
}

export default LeadsFormComponent