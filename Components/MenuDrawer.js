import React, { useState } from "react";
import {
  Box,
  Button,
  Drawer,
  List,
  ListItem,
  SwipeableDrawer,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const MenuDrawer = () => {
  const [state, setState] = useState(false);

  const menuItems = [
    "Auction",
    "Sell Everything",
    "Partners",
    "About",
    "Resources",
    "Support",
    "COVID-19",
  ];

  const toggleDrawer = (open) => (event) => {
    setState(open);
  };
  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {menuItems.map((item) => (
          <ListItem button>{item}</ListItem>
        ))}
      </List>
    </Box>
  );
  return (
    <Box
      sx={{
        display: { xs: "block", sm: "none" },
        position: "absolute",
        top: 15,
        left: 0,
      }}
    >
      <Button onClick={toggleDrawer(true)}>
        <MenuIcon sx={{ color: "#000000" }} />
      </Button>
      <Drawer anchor="left" open={state} onClose={toggleDrawer(false)}>
        {list()}
      </Drawer>
    </Box>
  );
};

export default MenuDrawer;
