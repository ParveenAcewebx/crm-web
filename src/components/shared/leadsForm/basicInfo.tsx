import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useFormContext } from "react-hook-form";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
import { FormInputText } from "../formInputs/FormInputText";
import FormInputDropdown from "../formInputs/FormInputDropdown";

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
  const methods = useFormContext();
  const { control, formState, setValue } = methods;
  const { errors } = formState;
  return (
    <>
      <FormProvider {...methods}>
        <Box className="container mx-auto ">
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <FormInputText
                name="firstName"
                control={control}
                label="First Name"
                required={true}
                errors={errors}
              />
            </Grid>

            <Grid item xs={6}>
              <FormInputText
                name="lastName"
                control={control}
                label="Last Name"
                errors={errors}
                required={true}
              />
            </Grid>

            <Grid item xs={6}>
              <FormInputText
                name="country"
                control={control}
                label="Country Name"
                errors={errors}
                required={true}
              />
            </Grid>

            <Grid item xs={6}>
              <FormInputDropdown
                name={"leadType"}
                control={control}
                label={"Lead Type"}
                data={leadType}
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
