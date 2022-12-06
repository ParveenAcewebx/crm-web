import Box from '@mui/material/Box';
import { Grid } from '@mui/material';
import { FormInputText } from '../../../src/components/shared/formInputs/FormInputText';
import { PhoneNumber } from '../../../src/components/shared/formInputs/PhoneNumber';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { leadFormSchema } from '../../../src/components/shared/leadFormValidation';
import FormControl from '@mui/material/FormControl';
import {Button} from '@mui/material';
import FormBasicDatePicker from '../../../src/components/shared/formInputs/FormBasicDatePicker';
import LeadAddHeader from './header';
import Layout from '../../../src/Layout/layout';

const LeadForm = () => {
    const {
        handleSubmit,
        control,
        formState: { errors },
      } = useForm<any>({
        mode: 'onChange',
        resolver: yupResolver(leadFormSchema),
      });

    const onSubmit: SubmitHandler<any> = async (data, e: any) => {
    }


  return (
        <> 
        <Layout commonHeader={<LeadAddHeader/>}>
            <Box className='container mx-auto '>
                <form onSubmit={handleSubmit(onSubmit)}> 
                    <Grid container spacing={3}>
                        <Grid item xs={4}>
                            <FormInputText
                                name="firstName"
                                control={control}
                                label="First Name"
                                required={true}
                                errors={errors}
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <FormInputText
                                name="middleName"
                                control={control}
                                label="Middle Name"
                                errors={errors}
                                required={true}
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <FormInputText
                                name="lastName"
                                control={control}
                                label="Last Name"
                                errors={errors}
                                required={true}
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <FormInputText
                                name="email"
                                control={control}
                                label="Email Address"
                                errors={errors}
                                required={true}
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <PhoneNumber
                                name="phoneNumber"
                                control={control}
                                label="Phone Number"
                                errors={errors}
                                required={true}
                                id="phoneNumber"
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <FormControl fullWidth>
                                <FormBasicDatePicker
                                name="dob"
                                control={control}
                                errors={errors}
                                required={true}
                                label="Date of Birth"
                                inputFormat="YYYY-MM-DD"
                                />
                            </FormControl>
                        </Grid>
                    </Grid>

                    <Grid item className='py-4'>
                        <Button type="submit" variant="contained">
                            Submit
                        </Button>
                    </Grid>
                </form>
            </Box>
            </Layout>
        </>
  )
}

export default LeadForm