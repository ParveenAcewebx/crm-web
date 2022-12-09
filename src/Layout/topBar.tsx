import Layout from "../Layout/layout";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { LoginContext } from "../contexts/AuthContext";
import { LoginContextTye } from "../types/auth";
import * as React from "react";
import { Box, Stack } from "@mui/system";
import { successMsg } from "../components/shared/toaster-msg/error-msg";
import { useRouter } from "next/router"; 

export default function TopBar() {
  const { logOut } = React.useContext(LoginContext) as LoginContextTye;
  const route = useRouter()
  const authValue = JSON.parse(localStorage.getItem('userDetailsStorage') || '{}');
  const SignOut =()=> {
    logOut();
    successMsg('you are successfully logout')
    route.push('/')
  }
  return (
    <>
      <AppBar
      className="pr-3.5"
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems:'center'
          }}
        >
          <Toolbar>
            <Typography variant="h6" noWrap component="div">
              CRM
            </Typography>
          </Toolbar>
          <Stack spacing={2} direction="row">
            <Typography variant="body2" component="div">
              {authValue?.email} <b  className="cursor-pointer" onClick={SignOut}>Logout</b>
            </Typography>
          </Stack>
        </Box>
      </AppBar>
    </>
  );
}
