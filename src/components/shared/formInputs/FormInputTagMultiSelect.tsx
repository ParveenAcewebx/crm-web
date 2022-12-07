import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import React from 'react';
import { Controller } from 'react-hook-form';


const FormInputTagMultiSelect = ({
  name,
  control,
  label,
  className,
  data, 
  required,
  errors,
}: any) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={[]}
      render={({ field: { onChange, value } }) => {
        return (
          <Autocomplete
            className={className}
            multiple
            value={value}
            freeSolo
            onChange={(event, newValue) => {
              onChange(newValue);
            }}
            options={data}
            renderInput={(params) => (
              <TextField
                {...params}
                required={required}
                placeholder={label}
                label={label}
                error={!!errors?.[name]}
                helperText={errors?.[name]?.message}
                variant="outlined"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            )}
          />
        );
      }}
    />
  );
};
export default FormInputTagMultiSelect;
