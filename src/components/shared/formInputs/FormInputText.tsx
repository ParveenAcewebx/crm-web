import TextField from '@mui/material/TextField';

import React from 'react';
import { Controller } from 'react-hook-form';


export const FormInputText = ({
  name,
  control,
  label,
  className,
  errors,
  inputType,
  required,
}: any) => {
  return (
    <div className={className}>
      <Controller
        name={name}
        control={control}
        defaultValue=""
        render={({ field }: any) => (
          <TextField
            {...field}
            required={required}
            className={className}
            error={!!errors?.[name]}
            type={inputType}
            helperText={errors?.[name]?.message}
            fullWidth
            label={label}
            variant="outlined"
          />
        )}
      />
    </div>
  );
};
