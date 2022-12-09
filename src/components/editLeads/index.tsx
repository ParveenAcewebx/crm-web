import Box from "@mui/material/Box";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { leadFormSchema } from "../shared/leadFormValidation";
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
import { useState } from "react";
const EditLeadForm = () => {
  
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
    departureDate:"",
    dropLocation:"",
    numberOftourist:"",
    carType:""
  };

  const methods = useForm<any>({
    mode: "onChange",
    defaultValues,
    resolver: yupResolver(leadFormSchema),
  });

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
