import React from "react";
import Router from "next/router";
import { Box, Grid, Button, Typography } from "@mui/material";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import FormInputDropdown from "../shared/formInputs/FormInputDropdown";
import { status } from "../../constants/constant";
const ViewHeader = () => {
  const { handleSubmit, control } = useForm<any>({
    mode: "onChange",
  });
  const onSubmit: SubmitHandler<any> = async (data, e: any) => {};
  return (
    <div>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Button variant="contained" onClick={() => Router.back()}>
          <ArrowCircleLeftIcon className="mr-2" />
          Back
        </Button>
        <Typography variant="h6">{"View Leads"}</Typography>
        <Box className="">
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container>
              <Grid sx={{ minWidth: 100 }}>
                <FormInputDropdown
                  name={"status"}
                  control={control}
                  label={"Status"}
                  data={status}
                  defaultValue=""
                />
              </Grid>
              <Grid>
                <Button size="small" variant="contained" type="submit">
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
