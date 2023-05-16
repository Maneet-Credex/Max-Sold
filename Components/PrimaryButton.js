import styled from "@emotion/styled";
import { Button, Typography } from "@mui/material";
import React from "react";
import { useRouter } from "next/router";

const PrimaryButton = (props) => {
  const router = useRouter();
  const BlueButton = styled(Button)(({ theme }) => {
    return {
      background: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
      borderRadius: props.radius ? props.radius : 50,
      padding: "10px 20px 10px 20px",
      fontSize: "10px",
      fontWeight: "light",
      [theme.breakpoints.only("xs")]: {
        marginBottom: "10px",
      },
      "&:hover": {
        background: theme.palette.primary.light,
      },
    };
  });
  return (
    <BlueButton onClick={() => router.push("/register")}>
      <Typography variant="subtitle1" sx={{ fontSize: { xs: "0.8rem" } }}>
        {props.content ? props.content : props.children}
      </Typography>
    </BlueButton>
  );
};

export default PrimaryButton;
