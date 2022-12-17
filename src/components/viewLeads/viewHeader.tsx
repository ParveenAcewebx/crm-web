import { Box, Grid, Button, Typography } from "@mui/material";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import FormInputDropdown from "../shared/formInputs/FormInputDropdown";
import React from "react";
import { status } from "../../constants/constant";
const ViewHeader = () => {
  console.log(status);
  const {
    handleSubmit,
    control,
    formState: { errors },
    formState,
  } = useForm<any>({
    mode: "onChange",
  });
  const onSubmit: SubmitHandler<any> = async (data, e: any) => {};
  return (
    <div>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Button variant="contained" onClick={() => Router.back()}><ArrowCircleLeftIcon className="mr-2" />Back</Button>
        <Typography variant="h6">{"View Leads"}</Typography>
        <Box className="">
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={3}>
              <Grid className="w-44">
                <FormInputDropdown
                  name={"status"}
                  control={control}
                  label={"Status"}
                  data={status}
                  defaultValue=""
                  errors={errors}
                />
              </Grid>
              <Grid>
                <Button className="m" size="small" variant="contained" type="submit">
                  {"Search"}
                </Button>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Box>
    </div>
  );
};

export default ViewHeader;
