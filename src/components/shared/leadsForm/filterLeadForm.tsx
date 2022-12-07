import React from 'react'
import { Box , Grid , Button } from '@mui/material'
import { useForm } from 'react-hook-form';
import type { SubmitHandler } from 'react-hook-form';
import FormBasicDatePicker from '../formInputs/FormBasicDatePicker';
import FormInputDropdown from '../formInputs/FormInputDropdown';
import { FormInputText } from '../formInputs/FormInputText';
import moment from 'moment';

const status = [
    { label: 'New', value: 'new' },
    { label: 'In Progress', value: 'inProgress' }, 
    { label: 'Closed', value: 'closed' },
    { label: 'Lost', value: 'lost' }
  ];

const FilterLeadForm = (props:any) => {
    // const { filterHandle } = props;
    const {
        handleSubmit,
        control,
        formState: { errors },
        formState,
      } = useForm<any>({
        mode: 'onChange',
      });

    const onSubmit: SubmitHandler<any> = async (data, e: any) => {
        console.log(data)
      };

    const startOfMonth = moment().startOf('month').format('YYYY-MM-DD');
    const endOfMonth   = moment().endOf('month').format('YYYY-MM-DD');

  return (
    <>
        <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={3} className=" justify-between px-6 mb-6">
                <Grid className='w-44'>
                    <FormBasicDatePicker
                        name="startDate"
                        control={control}
                        label="Start Date"
                        required={true}
                        errors={errors}
                        inputFormat={'YYYY-MM-DD'}
                        defaultValue = {startOfMonth}
                    />
                </Grid>

                <Grid className='w-44'>
                    <FormBasicDatePicker
                        name="endDate"
                        control={control}
                        label="End Date"
                        required={true}
                        errors={errors}
                        inputFormat={'YYYY-MM-DD'}
                        defaultValue = {endOfMonth}

                    />
                </Grid>

                <Grid className='w-44'>
                    <FormInputDropdown
                        name={'status'}
                        control={control}
                        label={'Status'}
                        data={status}
                       
                        errors={errors}
                    />
              </Grid>
                <Grid className='w-44'>
                    <FormInputText
                        name="counrty"
                        control={control}
                        label="Country Name"
                        errors={errors}
                       
                    />
                </Grid>
                <Grid>
                    <Button className='w-full py-4' size="medium" variant="contained" type="submit" disabled={!formState.isValid}>
                        {'Search'}
                    </Button>
                </Grid>

            </Grid>
        </form>
    </>
  )
}

export default FilterLeadForm