import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useFormContext } from "react-hook-form";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
import { FormInputText } from "../formInputs/FormInputText";
import { PhoneNumber } from "../formInputs/PhoneNumber";
import FormBasicDatePicker from "../formInputs/FormBasicDatePicker";
import FormInputDropdown from "../formInputs/FormInputDropdown";
// import FormBasicTimePicker from '../formInputs/FormBasicTimePicker';
import dayjs, { Dayjs } from "dayjs";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { useEffect } from "react";

const leadType = [
  { label: "FaceBook", value: "facebook" },
  { label: "Website", value: "website" },
  { label: "Youtube", value: "youtube" },
  { label: "Call", value: "call" },
];

const carType = [
  { label: "Sudan", value: "sudan" },
  { label: "SUV", value: "suv" },
];

const BasicInfo = () => {
  const [time, setTime] = React.useState<any>(null);
  const handleChange = (newValue: any | null) => {
    setTime(newValue);
  };

  const methods = useFormContext();
  const { control, formState, setValue } = methods;
  const { errors } = formState;

  useEffect(() => {
    if (time !== null) {
      setValue("arrivalTime", time.format("HH:mm"));
    }
  }, [time]);

  return (
    <>
      <FormProvider {...methods}>
        <Box className="container mx-auto ">
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
                name="lastName"
                control={control}
                label="Last Name"
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
              <PhoneNumber
                name="alternatePhone"
                control={control}
                label="Alternate Phone Number"
                errors={errors}
                required={true}
                id="phoneNumber"
                variant="outlined"
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
              <FormInputText
                name="country"
                control={control}
                label="Country Name"
                errors={errors}
                required={true}
              />
            </Grid>

            <Grid item xs={4}>
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

            <Grid item xs={4}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <TimePicker
                  className="w-full"
                  label="Arrival Time"
                  value={time}
                  onChange={handleChange}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
            </Grid>

            <Grid item xs={4}>
              <FormInputDropdown
                name={"leadType"}
                control={control}
                label={"Lead Type"}
                data={leadType}
                required={true}
                errors={errors}
              />
            </Grid>

            <Grid item xs={4}>
              <FormInputText
                name="numberOftourist"
                control={control}
                label="Number Of Tourist"
                errors={errors}
                required={true}
              />
            </Grid>

            <Grid item xs={4}>
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

            <Grid item xs={4}>
              <FormInputText
                name="dropLocation"
                control={control}
                label="Drop Location"
                errors={errors}
                required={true}
              />
            </Grid>

            <Grid item xs={4}>
              <FormInputDropdown
                name={"carType"}
                control={control}
                label={"Car Type"}
                data={carType}
                required={true}
                errors={errors}
              />
            </Grid>
          </Grid>
        </Box>
      </FormProvider>
    </>
  );
};

export default BasicInfo;
