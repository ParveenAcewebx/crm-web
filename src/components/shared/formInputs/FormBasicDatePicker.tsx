import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import React from 'react';
import { Controller } from 'react-hook-form';


const FormBasicDatePicker = ({
  name,
  control,
  label,
  inputFormat,
  className,
  defaultValue
}: any) => {
  return (
    <>
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
        render={({ field: { onChange, value } }) => (
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              inputFormat={inputFormat}
              label={label}
              value={value || null}
              onChange={(newValue) => onChange(newValue.format('YYYY-MM-DD'))}
              renderInput={(params) => (
                <TextField onKeyDown={(e) => e.preventDefault()} {...params} className={className}/>
              )}
            />
          </LocalizationProvider>
        )}
      />
    </>
  );
};

export default FormBasicDatePicker;
