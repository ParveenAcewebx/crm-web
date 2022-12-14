import React, { useState, useEffect } from "react";
import Layout from "../../Layout/layout";
import { Box, Typography, Grid } from "@mui/material";
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
        <Grid container spacing={2}>
          <Grid className="border-solid border-2" item xs={8}>
            <div className="mb-8 text-center">xs=8</div>
          </Grid>
          <Grid className="border-solid border-2" item xs={4}>
            <div className="mb-8 text-center">xs=4</div>
          </Grid>
          <Grid className="border-solid border-2" item xs={4}>
            <div className="mb-8 text-center">xs=4</div>
          </Grid>
          <Grid className="border-solid border-2" item xs={8}>
            <div className="mb-8 text-center">xs=8</div>
          </Grid>
        </Grid>
      </Layout>
    </div>
  );
};

export default LeadView;
