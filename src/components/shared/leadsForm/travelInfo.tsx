import React from 'react';
import Box from '@mui/material/Box';
import { Grid } from '@mui/material';
import { FormInputText } from '../formInputs/FormInputText';
import { FormProvider } from 'react-hook-form';
import { useFormContext } from 'react-hook-form';
import FormBasicDatePicker from '../formInputs/FormBasicDatePicker';
import FormInputDropdown from '../formInputs/FormInputDropdown';

const vichleType = [
  { label: 'Luxury Cars', value: 'phoneNumber' },
  { label: 'Economy Cars', value: 'economyCars' },
  { label: 'SUV / MUV Vehicles', value: 'suv' },
  { label: 'Coaches', value: 'coaches' }
]

const status = [
  { label: 'Active', value: 'active' },
  { label: 'Process', value: 'process' },
  { label: 'Failed', value: 'failed' },
  { label: 'Completed', value: 'completed' }
]



const TravelInfo = () => {

  const methods = useFormContext();
  const { control, formState } = methods;
  const { errors } = formState;
  return (
    <>
      <FormProvider {...methods}>
        <Box className='container mx-auto '>
          <Grid container spacing={3}>
              <Grid item xs={6}>
                <FormBasicDatePicker
                    name="arrivalDate"
                    control={control}
                    label="Arrival Date"
                    required={true}
                    errors={errors}
                    inputFormat={'YYYY-MM-DD'}
                    className="w-full"
                />
              </Grid>
              <Grid item xs={6}>
                <FormInputText
                    name="noOfPassanger"
                    control={control}
                    label="No of Passanger"
                    errors={errors}
                    required={true}
                />
              </Grid>

              <Grid item xs={6}>
                <FormInputDropdown
                    name={'vichleType'}
                    control={control}
                    label={'Vichle Type'}
                    data={vichleType}
                    required={true}
                    errors={errors}
                />
              </Grid>

              <Grid item xs={6}>
                <FormInputText
                    name="pickUpLocation"
                    control={control}
                    label="Pick up Location"
                    errors={errors}
                    required={true}
                />
              </Grid>

              <Grid item xs={6}>
                <FormInputText
                    name="destination"
                    control={control}
                    label="Destination Location"
                    errors={errors}
                    required={true}
                />
              </Grid>

              <Grid item xs={6}>
                <FormInputDropdown
                    name={'status'}
                    control={control}
                    label={'Status'}
                    data={status}
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

export default TravelInfo