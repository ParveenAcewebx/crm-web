import React from 'react';
import { FormProvider } from 'react-hook-form';
import { useFormContext } from 'react-hook-form';
import Box from '@mui/material/Box';
import { Grid } from '@mui/material';
import { FormInputText } from '../formInputs/FormInputText';
import { PhoneNumber } from '../formInputs/PhoneNumber';

const source = [
  { label: 'Phone Number', value: 'phoneNumber' },
  { label: 'Website', value: 'website' },
  { label: 'Home Adviser', value: 'homeAdviser' }
];

const ContactInfo = () => {
  
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
                      name="email"
                      control={control}
                      label="Email Address"
                      errors={errors}
                      required={true}
                  />
              </Grid>
              
              <Grid item xs={6}>
                  <PhoneNumber
                      name="phoneNumber"
                      control={control}
                      label="Phone Number"
                      errors={errors}
                      required={true}
                      id="phoneNumber"
                      variant="outlined"
                  />
              </Grid>

              <Grid item xs={6}>
                <FormInputText
                  name="postalCode"
                  control={control}
                  label="Postal Code"
                  errors={errors}
                  required={true}
                />
              </Grid>

              <Grid item xs={6}>
                <FormInputText
                  name="city"
                  control={control}
                  label="City"
                  errors={errors}
                  required={true}
                />
              </Grid>

              <Grid item xs={6}>
                <FormInputText
                  name="state"
                  control={control}
                  label="State"
                  errors={errors}
                  required={true}
                />
              </Grid>
          </Grid>
        </Box>
        </FormProvider>
    </>
  )
}

export default ContactInfo