import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useFormContext } from "react-hook-form";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
import FormInputDropdown from "../formInputs/FormInputDropdown";
import FormBasicDatePicker from "../formInputs/FormBasicDatePicker";
import { FormTextarea } from "../formInputs/FormInputTextarea";

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

const CurrentStatusTab = () => {
  const methods = useFormContext();
  const { control, formState, setValue } = methods;
  const { errors } = formState;
  return (
    <>
      <FormProvider {...methods}>
        <Box className="container mx-auto ">
          <Grid container spacing={3}>
            <Grid item xs={4}>
              <FormInputDropdown
                name={"currentStatus"}
                control={control}
                label={"Current Status"}
                data={currentStatus}
                required={true}
                errors={errors}
              />
            </Grid>

            <Grid item xs={4}>
              <FormInputDropdown
                name={"nextStep"}
                control={control}
                label={"Next Step"}
                data={nextStep}
                required={true}
                errors={errors}
              />
            </Grid>

            <Grid item xs={4}>
              <FormBasicDatePicker
                name="nextStepdate"
                control={control}
                label="Next Step Date"
                required={true}
                errors={errors}
                inputFormat={"YYYY-MM-DD"}
                defaultValue=""
                className="w-full"
              />
            </Grid>

            <Grid item xs={6}>
              <FormTextarea
                name="currentStatusDetails"
                control={control}
                label="Current Status Details"
                errors={errors}
                required={true}
                className="w-full"
                textareaHeight={4}
              />
            </Grid>

            <Grid item xs={6}>
              <FormTextarea
                name="nextStepDetails"
                control={control}
                label="Next Step Details"
                errors={errors}
                required={true}
                className="w-full"
                textareaHeight={4}
              />
            </Grid>
          </Grid>
        </Box>
      </FormProvider>
    </>
  );
};

export default CurrentStatusTab;
