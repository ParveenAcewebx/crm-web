import React from "react";
import { Box, Typography } from "@mui/material";
import { useFormContext } from "react-hook-form";
import Router, { useRouter } from "next/router";
import { Button } from "@mui/material";
import { successMsg } from "../shared/toaster-msg/error-msg";

const LeadEditHeader = () => {
  const methods = useFormContext();
  const router = useRouter();
  const { formState, getValues, reset } = methods;
  const { isValid, dirtyFields } = formState;
  const defaultValues = {
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
  };

  const updatedLead = () => {
    console.log('updated', getValues() )
    successMsg("Lead successfully updated");
    router.push("/leads/lists");
  };
  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6">{"Edit Leads"}</Typography>
        <Button
          variant="contained"
          onClick={updatedLead}
          disabled={!dirtyFields || !isValid}
        >
          Save
        </Button>
      </Box>
    </>
  );
};

export default LeadEditHeader;
