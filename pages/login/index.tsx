import * as React from "react";
import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";
import Link from "@mui/joy/Link";
import { FormInputText } from "../../src/components/shared/formInputs/FormInputText";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import type { SubmitHandler } from "react-hook-form";
import { loginFormSchema } from "./loginFormValidation";
import _ from "lodash";

import { Button } from "@mui/material";
import {
  errorMsg,
  successMsg,
} from "../../src/components/shared/toaster-msg/error-msg";

export default function App() {
 
    const defaultValues = {
        email: '',
        password: '',
      };
      const { control, setValue, formState, handleSubmit } = useForm({
    mode: "onChange",
    defaultValues,
    resolver: yupResolver(loginFormSchema),
  });
  
  const { isValid, dirtyFields, errors } = formState;

  
  const onSubmit: SubmitHandler<any> = async (data, e: any) => {
    if (
      data.email === "test12@gmail.com" ||
      data.password.length === "test123456"
    ) {
      successMsg("You are login successfully");
    } else {
      errorMsg("email & password not match in database");
    }
  };

  return (
    <main>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Sheet
          className="mt-28 border-stone-300"
          sx={{
            width: 400,
            mx: "auto",
            my: 5,
            py: 3,
            px: 2,
            display: "flex",
            flexDirection: "column",
            gap: 2,
            borderRadius: "sm",
          }}
          variant="outlined"
        >
          <div>
            <Typography level="h4" component="h1">
              <b>Welcome!</b>
            </Typography>
            <Typography level="body2">Sign in to continue.</Typography>
          </div>

          <FormInputText
            name="email"
            control={control}
            label="Email "
            required={true}
            errors={errors}
          />

          <FormInputText
            name="password"
            control={control}
            label="Password "
            required={true}
            errors={errors}
            inputType="password"
          />
          <Button
            type="submit"
            size="lg"
            variant="contained"
            disabled= {_.isEmpty(dirtyFields) || !isValid}
          >
            Log in
          </Button>

          <Typography
            endDecorator={<Link href="/sign-up">Sign up</Link>}
            fontSize="sm"
            sx={{ alignSelf: "center" }}
          >
            Don&apos;t have an account?
          </Typography>
        </Sheet>
      </form>
    </main>
  );
}