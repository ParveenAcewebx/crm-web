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
        <Box sx={{ display: 'flex', justifyContent: 'space-between',  alignItems:'center' }} >
            <Typography variant="h6">{'View Leads'}</Typography>
            <Button variant="contained" onClick={() => Router.back()}>Back</Button>
        </Box>
      </Box>
    </div>
  );
};

export default ViewHeader;
