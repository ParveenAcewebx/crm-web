import React, { useState, useEffect } from "react";
import Layout from "../../Layout/layout";
import { Box, Typography } from "@mui/material";
import { useRouter } from "next/router";
import axios from "axios";
import { errorMsg } from "../shared/toaster-msg/error-msg";
import ViewHeader from "./viewHeader";

const data = {
  id: 1,
  firstName: "Johan",
  lastName: "walker",
  email: "abc@gmamil.com",
  phoneNumber: "+91776436783",
  alternateNumber: "+916754324567",
  leadType: "faceBook",
  country: "Canada",
  city: "Bramton",
  arrivalDate: "2022-12-12",
  arrivalTime: "12:12",
  deparatureDate: "2022-12-13",
  dropLocation: "demo123",
  CarType: "Sudan",
};

const LeadView = () => {
  const router = useRouter();
  const { viewId } = router.query;

  const [getData, setGetData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://jsonplaceholder.typicode.com/posts/${viewId}`
        );
        setGetData(response.data);
      } catch (err: any) {
        errorMsg(err.message);
      }
    };

    fetchData();
  }, [viewId]);

  return (
    <div>
      <Layout commonHeader={<ViewHeader />}>
        <Box className="h-56 grid grid-cols-2 gap-4">
          <Box className="shadow-lg shadow-slate-300 bg-gray-100">
            <Box className="">
              <Typography
                className="pl-5 py-5  border-slate-300 border-solid border-l-0 border-r-0 border-t-0 border-b-2"
                variant="h6"
              >
                {"Details"}
              </Typography>

              <Box className="grid grid-cols-2 gap-4 text-center py-5">
                <Typography>{'FirstName'}</Typography>
                <Typography>{data.firstName}</Typography>
              </Box>

              <Box className="grid grid-cols-2 gap-4 text-center py-5">
                <Typography>{'LastName'}</Typography>
                <Typography>{data.lastName}</Typography>
              </Box>

              <Box className="grid grid-cols-2 gap-4 text-center py-5">
                <Typography>{'Country'}</Typography>
                <Typography>{data.country}</Typography>
              </Box>

              <Box className="grid grid-cols-2 gap-4 text-center py-5">
                <Typography>{'City'}</Typography>
                <Typography>{data.city}</Typography>
              </Box>
            </Box>
          </Box>
          <Box className="shadow-lg shadow-slate-300 bg-gray-100">
            <Typography
              className="pl-5 py-5  border-slate-300 border-solid border-l-0 border-r-0 border-t-0 border-b-2"
              variant="h6"
            >
              {"Contact Details"}
            </Typography>

            <Box className="grid grid-cols-2 gap-4 text-center py-5">
                <Typography>{'FirstName'}</Typography>
                <Typography>{data.email}</Typography>
              </Box>

              <Box className="grid grid-cols-2 gap-4 text-center py-5">
                <Typography>{'LastName'}</Typography>
                <Typography>{data.phoneNumber}</Typography>
              </Box>

              <Box className="grid grid-cols-2 gap-4 text-center py-5">
                <Typography>{'Country'}</Typography>
                <Typography>{data.country}</Typography>
              </Box>

              <Box className="grid grid-cols-2 gap-4 text-center py-5">
                <Typography>{'City'}</Typography>
                <Typography>{data.city}</Typography>
              </Box>
          </Box>
        </Box>
      </Layout>
    </div>
  );
};

export default LeadView;