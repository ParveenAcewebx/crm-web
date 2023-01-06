import TextField from '@mui/material/TextField';

import React from 'react';
import { Controller } from 'react-hook-form';

import { FormInputProps } from './FormInputProps';
export const FormTextarea = ({
  name,
  control,
  label,
  className, 
  errors,
  required,
  textareaHeight,
}: FormInputProps) => {
  return (
    <div className={className}>
      <Controller
        name={name}
        control={control}
        defaultValue=""
        render={({ field }: any) => (
          <TextField
            {...field}
            multiline
            required={required}
            className={className}
            error={!!errors?.[name]}
            helperText={errors?.[name]?.message}
            fullWidth
            label={label}
            minRows={textareaHeight}
            variant="outlined"
            
          />
        )}
      />
    </div>
  );
};
