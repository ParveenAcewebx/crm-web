import React from "react";
import { Box, Grid, Button } from "@mui/material";
import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import FormBasicDatePicker from "../formInputs/FormBasicDatePicker";
import FormInputDropdown from "../formInputs/FormInputDropdown";
import moment from "moment";

const status = [
  { label: "New", value: "new" },
  { label: "In Progress", value: "inProgress" },
  { label: "Closed", value: "closed" },
  { label: "Lost", value: "lost" },
];

const FilterLeadForm = (props: any) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
    formState,
  } = useForm<any>({
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<any> = async (data, e: any) => {};

  const startOfMonth = moment().startOf("month").format("YYYY-MM-DD");
  const endOfMonth = moment().endOf("month").format("YYYY-MM-DD");

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={3} className=" justify-between  mb-6">
          <Grid item xs={3}>
            <FormBasicDatePicker
              name="startDate"
              control={control}
              label="Start Date"
              required={true}
              errors={errors}
              inputFormat={"YYYY-MM-DD"}
              defaultValue={startOfMonth}
              className='w-full'
            />
          </Grid>

          <Grid item xs={4}>
            <FormBasicDatePicker
              name="endDate"
              control={control}
              label="End Date"
              required={true}
              errors={errors}
              inputFormat={"YYYY-MM-DD"}
              defaultValue={endOfMonth}
              className='w-full'
            />
          </Grid>

          <Grid item xs={3}>
            <FormInputDropdown
              name={"status"}
              control={control}
              label={"Status"}
              data={status}
              defaultValue=""
              errors={errors}
            />
          </Grid>

          <Grid item xs={2}>
            <Button
              className="w-full py-4 h-14"
              size="medium"
              variant="contained"
              type="submit"
              disabled={!formState.isValid}
            >
              {"Search"}
            </Button>
          </Grid>
        </Grid>
      </form>
    </>
  );
};

export default FilterLeadForm;
