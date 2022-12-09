import React from "react";
import { Box, Typography } from "@mui/material";
import { useFormContext } from "react-hook-form";
import { useRouter } from "next/router";
import { Button } from "@mui/material";
import { errorMsg, successMsg } from "../shared/toaster-msg/error-msg";
import { useEffect , useState } from "react";
import axios from "axios";
import _ from "lodash";

const LeadEditHeader = () => {
  const methods = useFormContext();
  const router = useRouter();
  const {leadId} = router.query
  const { formState, reset } = methods;
  const { isValid, dirtyFields } = formState;
  const [getData, setGetData] = useState();

  const editObj= {
    firstName: "Test",
    lastName: "Test2",
    email: "test@gmail.com",
    phoneNumber: "(503) 488-6956",
    alternatePhone:"123456789",
    country:"country",
    arrivalDate:"2022-12-08",
    arrivalTime:new Date('2022-12-12 11:13:58'),
    leadType:"facebook",
    departureDate:"2022-12-12",
    dropLocation:"Brampton",
    numberOftourist:"12",
    city:"demo",
    postalCode:"12345",
    state:"demo12",
    carType:"sudan"
  }
  const fetchData = async () => {
    try {
      const response = await axios.get(
        `http://jsonplaceholder.typicode.com/posts/${leadId}`
      );
      reset(editObj);
      setGetData(response.data);
    } catch (err: any) {
      errorMsg(err.message);
    }
  };
  useEffect(()=>{
    if(leadId !== undefined){
      fetchData();
    }
  },[leadId])

  const updatedLead = () => {
    successMsg("Lead successfully updated");
    router.push("/leads/lists");
  };
  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h5">{"Edit Leads"}</Typography>
        <Button
          variant="contained"
          onClick={updatedLead}
          disabled={_.isEmpty(dirtyFields) || !isValid}
        >
          Save
        </Button>
      </Box>
    </>
  );
};
export default LeadEditHeader;