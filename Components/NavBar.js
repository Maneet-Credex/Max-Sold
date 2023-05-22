import React from "react";
import PrimaryButton from "./PrimaryButton";
import { useRouter } from "next/router";
import {
  AppBar,
  Box,
  Toolbar,
  MenuItem,
  MenuList,
  Typography,
} from "@mui/material";
import styled from "@emotion/styled";
import MenuDrawer from "./MenuDrawer";

const NavBar = () => {
  const router = useRouter();
  const menuItems = [
    "Auction",
    "Sell Everything",
    "Partners",
    "About",
    "Resources",
    "Support",
    "COVID-19",
  ];
  const StyledToolbar = styled(Toolbar)(({ theme }) => {
    return {
      background: theme.palette.secondary.main,
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      minHeight: "20px !important",
    };
  });
  return (
    <>
      <AppBar
        position="static"
        sx={{ display: { xs: "none", sm: "block" }, minHeight: "20px " }}
      >
        <StyledToolbar>
          <MenuList
            sx={{
              padding: "8px 0",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              fontSize: "12px",
              padding: 0,
              minHeight: "20px",
            }}
          >
            {menuItems.map((item) => (
              <MenuItem onClick={() => router.push(`/${item}`)}>
                <Typography variant="body1" textAlign="center" fontSize={12}>
                  {item}
                </Typography>
              </MenuItem>
            ))}
          </MenuList>
        </StyledToolbar>
      </AppBar>
      <MenuDrawer />
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "space-between",
          alignItems: "center",
          margin: "0px 50px 0px 50px",
        }}
      >
        <Box onClick={() => router.push("/")}>
          <img src="/logo.png" alt="Maxsold logo" width={"200px"} />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
            "@media (max-width: 1080px)": {
              gap: "5px",
            },
            "@media (max-width: 1000px)": {
              "& > *": {
                fontSize: "1rem",
              },
            },
          }}
        >
          <Typography variant="h6">866-602-9253</Typography>
          <PrimaryButton content={"Get Started Selling"} />
        </Box>
      </Box>
    </>
  );
};

export default NavBar;
