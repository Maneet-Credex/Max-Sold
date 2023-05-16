import React, { useState } from "react";
import {
  Box,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Typography,
  Button,
} from "@mui/material";

const VerifyAuctionForm = ({ handleNext, location, handleBack }) => {
  return (
    <Box
      sx={{
        width: "80%",
        margin: " 20px auto",
        marginTop: "15px",
        "& .MuiButtonBase-root": {
          marginBottom: "15px",
        },
        "& > *": {
          marginTop: "12px",
        },
      }}
    >
      <Typography variant="h5" gutterBottom sx={{ fontWeight: "bolder" }}>
        Verify Auction Location
      </Typography>
      <Typography variant="body1" gutterBottom>
        Please confirm that the following auction location is correct
      </Typography>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">province, State</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={location}
          label="Select state"
          inputProps={{ readOnly: true }}
        >
          <MenuItem key={location} value={location}>
            {location}
          </MenuItem>
        </Select>
      </FormControl>
      <Box
        fullWidth
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Button variant="outlined" sx={{ width: "200px" }} onClick={handleBack}>
          Change Location
        </Button>
        <Button
          variant="contained"
          sx={{ width: "200px" }}
          onClick={handleNext}
        >
          {" "}
          Confirm
        </Button>
      </Box>
    </Box>
  );
};

export default VerifyAuctionForm;
