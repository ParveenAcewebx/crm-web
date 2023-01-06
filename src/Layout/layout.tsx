import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import TopBar from "./topBar";
import { mainMenu } from "./sidebarMenu";
import Link from "next/link";

const drawerWidth = 240;

type LayoutProps = {
  children: any;
  commonHeader: any;
};
export default function Layout({ children, commonHeader }: LayoutProps) {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <TopBar />
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        className='shadow-lg'
      >
        <Toolbar />

        <Box sx={{ overflow: "auto" }}>
          <List>
            {mainMenu.map((item) => (
              <ListItem key={item.name} disablePadding>
                <Link href={`${item.url}`}>
                  <ListItemButton>
                    <ListItemIcon>
                      <MailIcon />
                    </ListItemIcon>
                    <ListItemText primary={item.name} />
                  </ListItemButton>
                </Link>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
      <Box className="w-full px-7">
        <div className="mt-20 w-full py-4 items-center">{commonHeader}</div>
        <Box
          className="wrapper bg-white w-full shadow-rose-900"
          component="main"
          sx={{ flexGrow: 1, p: 3 }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
}
