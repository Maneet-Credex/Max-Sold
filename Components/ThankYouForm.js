import { Box, Typography, Avatar, Button } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import React from "react";

const ThankYouForm = ({ handleNext }) => {
  return (
    <Box
      sx={{
        display: "flex",
        width: "80%",
        margin: " 20px auto",
        justifyContent: "flex-start",
        alignItems: "flex-start",
      }}
    >
      <Avatar sx={{ bgcolor: "#F2F9FB", width: 40, height: 40 }}>
        <CheckCircleOutlineIcon
          sx={{
            color: "#2E6F94",
            width: 35,
            height: 35,
            fontWeight: "lighter",
          }}
        />
      </Avatar>
      <Box
        sx={{
          flex: 3,
          marginLeft: "10px",
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: "bolder" }}>
          Thank you for submitting your information!
        </Typography>
        <Typography variant="body2" sx={{ fontWeight: "lighter" }}>
          Our team will call you within 24 business hours. If you would like to
          speak to a team member immediately, please call us at 833-MAX-SOLD.
        </Typography>
        <Button
          variant="contained"
          sx={{
            width: "200px",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            marginTop: "40px",
          }}
        >
          {" "}
          Explore MaxSold.com
        </Button>
      </Box>
    </Box>
  );
};

export default ThankYouForm;
