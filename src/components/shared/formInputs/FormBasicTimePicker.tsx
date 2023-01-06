import * as React from 'react';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { Controller } from 'react-hook-form';
import { FormInputProps } from './FormInputProps';

const FormBasicTimePicker = ({
  name, 
  control, 
  label,
  className
}: FormInputProps) => {

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Controller
          name={name}
          control={control}
          defaultValue={''}
          render={({  field: { onChange, value } }) =>  ( 
              <TimePicker
                inputFormat='HH:mm:ss A'
                label={label}
                value={value || null}
                onChange={(e)=>onChange(e) }
                renderInput={(params) => {
                  return (
                  <TextField  {...params} className={className} />
                  )
                }}
              />
              )}
        />
      </LocalizationProvider>
    </>
  );
};

export default FormBasicTimePicker;
