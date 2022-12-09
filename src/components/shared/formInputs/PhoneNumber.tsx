import MuiPhoneNumber from 'material-ui-phone-number';
import React from 'react';
import { Controller } from 'react-hook-form';
import { FormInputProps } from './FormInputProps';


export const PhoneNumber = ({
  errors,
  label,
  id,
  name,
  control,
  required, 
}: FormInputProps) => {
  return (
    <>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <MuiPhoneNumber
            {...field}
            defaultCountry="ca"
            error={!!errors?.[name]}
            required={required}
            helperText={errors?.[name]?.message}
            label={label}
            id={id}
            name={name}
            variant="outlined"
            fullWidth
            onlyCountries={['ca', 'us']}
            disableAreaCodes={true}
          />
        )}
      />
    </>
  );
};
