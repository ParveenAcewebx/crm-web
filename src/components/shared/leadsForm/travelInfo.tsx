import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import { Grid } from '@mui/material';
import { FormInputText } from '../formInputs/FormInputText';
import { FormProvider } from 'react-hook-form';
import { useFormContext } from 'react-hook-form';
import FormBasicDatePicker from '../formInputs/FormBasicDatePicker';
import FormInputDropdown from '../formInputs/FormInputDropdown';
import FormBasicTimePicker from '../formInputs/FormBasicTimePicker';

const carType = [
  { label: "Sudan", value: "sudan" },
  { label: "SUV", value: "suv" },
];

const leadAssign = [
  { label: "Johan", value: "Johan" },
  { label: "Walker", value: "Walker" },
  { label: "Andrue", value: "Andrue" },
  { label: "Chris", value: "Chris" },
];

const leadStatus = [
  { label: "Not Connected", value: "notConnected" },
  { label: "Process", value: "process" },
  { label: "Completed", value: "completed" },
  { label: "Process", value: "process" },
];

const currentStatus = [
  { label: "Sent SMS to customer", value: "smsToCustomer" },
  { label: "Sent Email to customer", value: "emailtoCustomer" },
  { label: "Phone Call to Customer", value: "calltoCustomer" },
  { label: "Call from Customer", value: "callFromCutomer" },
];

const nextStep = [
  { label: "Visit", value: "visit" },
  { label: "Postponed", value: "postponed" },
];

const TravelInfo = () => {

  const [time, setTime] = React.useState<any>(null);
  const methods = useFormContext();
  const { control, formState , setValue} = methods;
  const { errors } = formState;
  const handleChange = (newValue: any | null) => {
    setTime(newValue);
  };
  useEffect(() => {
    if (time !== null) {
      setValue("arrivalTime", time.format("HH:mm"));
    }
  }, [time]);

  
  return (
    <>
      <FormProvider {...methods}>
        <Box className='container mx-auto mb-36'>
          <Grid container spacing={3}>
          <Grid item xs={6}>
              <FormBasicDatePicker
                name="arrivalDate"
                control={control}
                label="Arrival Date"
                required={true}
                errors={errors}
                inputFormat={"YYYY-MM-DD"}
                defaultValue=""
                className="w-full"
              />
            </Grid>

            <Grid item xs={6}>
              <FormBasicTimePicker
                name={"arrivalTime"}
                control={control}
                label={"Arrival Time"}
                required={true}
                errors={errors}
                className="w-full"
              />
            </Grid>

              <Grid item xs={6}>
                <FormInputText
                    name="numberOftourist"
                    control={control}
                    label="No of Passanger"
                    errors={errors}
                    required={true}
                />
              </Grid>

              <Grid item xs={6}>
                <FormInputDropdown
                    name={'carType'}
                    control={control}
                    label={'Car Type'}
                    data={carType}
                    required={true}
                    errors={errors}
                />
              </Grid>

              <Grid item xs={6}>
                <FormInputText
                    name="dropLocation"
                    control={control}
                    label="Pick up Location"
                    errors={errors}
                    required={true}
                />
              </Grid>

              <Grid item xs={6}>
              <FormBasicDatePicker
                name="departureDate"
                control={control}
                label="Departure Date"
                required={true}
                errors={errors}
                inputFormat={"YYYY-MM-DD"}
                className="w-full"
              />
            </Grid>

            <Grid item xs={6}>
              <FormInputText
                name="dropLocation"
                control={control}
                label="Drop Location"
                errors={errors}
                required={true}
              />
            </Grid>

            <Grid item xs={6}>
              <FormInputDropdown
                name={"carType"}
                control={control}
                label={"Car Type"}
                data={carType}
                required={true}
                errors={errors}
              />
            </Grid>

            <Grid item xs={6}>
              <FormInputDropdown
                name={"leadStatus"}
                control={control}
                label={"Lead Status"}
                data={leadStatus}
                required={true}
                errors={errors}
              />
            </Grid>

            <Grid item xs={6}>
              <FormInputDropdown
                name={"leadAssign"}
                control={control}
                label={"Lead Assign"}
                data={leadAssign}
                required={true}
                errors={errors}
              />
            </Grid>

            <Grid item xs={6}>
              <FormInputDropdown
                name={"currentStatus"}
                control={control}
                label={"Current Status"}
                data={currentStatus}
                required={true}
                errors={errors}
              />
            </Grid>

            <Grid item xs={6}>
              <FormInputDropdown
                name={"nextStep"}
                control={control}
                label={"Next Step"}
                data={nextStep}
                required={true}
                errors={errors}
              />
            </Grid>

            <Grid item xs={6}>
              <FormBasicDatePicker
                name="nextStepdate"
                control={control}
                label="next Step Date"
                required={true}
                errors={errors}
                inputFormat={"YYYY-MM-DD"}
                defaultValue=""
                className="w-full"
              />
            </Grid>

          </Grid>
        </Box>
        </FormProvider>
    
    </>
  )
}

export default TravelInfo