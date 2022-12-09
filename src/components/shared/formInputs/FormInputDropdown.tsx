import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import React from 'react';
import { Controller } from 'react-hook-form';

import { FormInputProps } from './FormInputProps';

const FormInputDropdown = ({
  name,
  control, 
  label,
  data,
  errors,
  required,
  className,
  defaultValue,
}: FormInputProps) => {
  const generateSelectOptions = () => {
    return data.map((option: any) => (
      <MenuItem key={option.value} value={option.value}>
        {option.label}
      </MenuItem>
    ));
  };

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      render={({ field }: any) => (
        <TextField
          {...field}
          required={required}
          error={!!errors?.[name]}
          helperText={errors?.[name]?.message}
          id={name}
          select
          label={label}
          fullWidth
        >
          {generateSelectOptions()}
        </TextField>
      )}
    />
  );
};

export default FormInputDropdown;
