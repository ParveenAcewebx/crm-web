import Box from '@mui/material/Box';
import { Grid } from '@mui/material';
import { FormInputText } from '../../../src/components/shared/formInputs/FormInputText';
import { PhoneNumber } from '../../../src/components/shared/formInputs/PhoneNumber';
import type { SubmitHandler } from 'react-hook-form';
import { FormProvider , useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { leadFormSchema } from '../../../src/components/shared/leadFormValidation';
import FormControl from '@mui/material/FormControl';
import {Button} from '@mui/material';
import FormBasicDatePicker from '../../../src/components/shared/formInputs/FormBasicDatePicker';
import LeadEditHeader from './editHeader';
import Layout from '../../../src/Layout/layout';
import { useRouter } from 'next/router';


const EditLeadForm = () => {


    const defaultValues = {
        firstName : '',
        middleName : '',
        lastName : '',
        email : '',
        phoneNumber : '',
    }
  
    const router = useRouter();
    const { leadId } = router.query;
    const methods = useForm<any>({
        mode: 'onChange',
        defaultValues,
        resolver: yupResolver(leadFormSchema),
    });

    const { control, formState , getValues} = methods;
    const { errors } = formState;

    const handleUpdateLead = async ()=>{
        console.log('getValues',getValues)

    }


  return (
        <> 
        <FormProvider {...methods}>
        <Layout commonHeader={<LeadEditHeader/>}>
            <Box className='container mx-auto '>
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
                        <Button onClick={handleUpdateLead} variant="contained">
                            Submit
                        </Button>
                    </Grid>
            </Box>
            </Layout>
            </FormProvider>
        </>
  )
}

export default EditLeadForm