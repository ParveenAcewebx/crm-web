import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
import { FormInputText } from "../shared/formInputs/FormInputText";
import { PhoneNumber } from "../shared/formInputs/PhoneNumber";
import type { SubmitHandler } from "react-hook-form";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { leadFormSchema } from "../shared/leadFormValidation";
import FormControl from "@mui/material/FormControl";
import { Button } from "@mui/material";
import FormBasicDatePicker from "../shared/formInputs/FormBasicDatePicker";
import LeadEditHeader from "./editHeader";
import Layout from "../../Layout/layout";
import { useRouter } from "next/router";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import BasicInfo from "../shared/leadsForm/basicInfo";
import ContactInfo from "../shared/leadsForm/contactInfo";
import TravelInfo from "../shared/leadsForm/travelInfo";
import { useEffect, useState } from "react";
import axios from "axios";
import { errorMsg } from "../shared/toaster-msg/error-msg";
const EditLeadForm = () => {
  const [getData, setGetData] = useState();
  const { register, handleSubmit, reset } = useForm();
  const editObj= {
    firstName: "Test",
    lastName: "Test2",
    email: "test@gmail.com",
    phoneNumber: "123456",
    alternatePhone:"123456789",
    country:"country",
    arrivalDate:"2022-12-08",
    arrivalTime:"12:05",
    leadType:"Facebook",
    

  }

  const defaultValues = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    alternatePhone:"",
    country:"",
    arrivalDate:"",
    arrivalTime:"",
    leadType:"",
  };

  const router = useRouter();
  const { leadId } = router.query;
  const methods = useForm<any>({
    mode: "onChange",
    defaultValues,
    resolver: yupResolver(leadFormSchema),
  });

  const { getValues } = methods;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://jsonplaceholder.typicode.com/posts/${leadId}`
        );
        setGetData(response.data);
      } catch (err: any) {
        errorMsg(err.message);
      }

    };
    fetchData();
    reset(editObj)
  }, [leadId]);

  const handleUpdateLead = async () => {
    console.log("getValues", getValues);
  };
  const [value, setValue] = useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <>
      <FormProvider {...methods}>
        <Layout commonHeader={<LeadEditHeader />}>
          <Box className="container mx-auto ">
            <Box sx={{ width: "100%", typography: "body1" }}>
              <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                  <TabList
                    onChange={handleChange}
                    aria-label="lab API tabs example"
                  >
                    <Tab label="Basic Info" value="1" />
                    <Tab label="Contact Info" value="2" />
                    <Tab label="Travel Info" value="3" />
                  </TabList>
                </Box>
                <TabPanel value="1">
                  <BasicInfo />
                </TabPanel>
                <TabPanel value="2">
                  <ContactInfo />
                </TabPanel>
                <TabPanel value="3">
                  <TravelInfo />
                </TabPanel>
              </TabContext>
            </Box>
     
          </Box>
        </Layout>
      </FormProvider>
    </>
  );
};

export default EditLeadForm;
