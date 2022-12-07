import * as React from 'react';
import { Dayjs } from 'dayjs';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { Controller } from 'react-hook-form';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';


const FormBasicTimePicker = ({
  name, 
  control, 
  label,
}: any) => {

  // const [value, setValue] = React.useState<any | null>(null);
  // console.log('value',value)
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Controller
          name={name}
          control={control}
          // defaultValue={''}
          render={({  field: { onChange, value } }) =>  ( 
              <TimePicker
                label={label}
                value={value || null}
                onChange={(newValue) =>  onChange(newValue.format('HH:mm:ss'))}
                renderInput={(params) => {
                  console.log('params',params)
                  return (
                  <TextField onKeyDown={(e) => e.preventDefault()} {...params} />
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
