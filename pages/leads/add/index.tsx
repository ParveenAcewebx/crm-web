import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
import { FormInputText } from "../../../src/components/shared/formInputs/FormInputText";
import { PhoneNumber } from "../../../src/components/shared/formInputs/PhoneNumber";
import type { SubmitHandler } from "react-hook-form";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { leadFormSchema } from "../../../src/components/shared/leadFormValidation";
import FormControl from "@mui/material/FormControl";
import { Button } from "@mui/material";
import FormBasicDatePicker from "../../../src/components/shared/formInputs/FormBasicDatePicker";
import LeadAddHeader from "./header";
import Layout from "../../../src/Layout/layout";
import BasicInfo from "../../../src/components/shared/leadsForm/basicInfo";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { useState } from "react";
import ContactInfo from "../../../src/components/shared/leadsForm/contactInfo";
import TravelInfo from "../../../src/components/shared/leadsForm/travelInfo";
const LeadForm = () => {
  const defaultValues = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
  };

  const methods = useForm<any>({
    mode: "onChange",
    defaultValues,
    resolver: yupResolver(leadFormSchema),
  });

  const { control, formState, getValues } = methods;
  const { errors } = formState;

  async function handleSaveProduct() {
    console.log("getValues", getValues());
  }
  const [value, setValue] = useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <>
      <FormProvider {...methods}>
        <Layout commonHeader={<LeadAddHeader />}>
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
              <TabPanel value="2"><ContactInfo/></TabPanel>
              <TabPanel value="3"><TravelInfo/></TabPanel>
            </TabContext>
          </Box>
        </Layout>
      </FormProvider>
    </>
  );
};

export default LeadForm;
