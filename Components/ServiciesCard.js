import React from "react";
import { Box, Typography, Grid } from "@mui/material";

const ServiciesCard = ({ data }) => {
  return (
    <Grid item lg={3} md={3} sm={3} xs={12}>
      <Box
        sx={{
          bgcolor: "#FAFAFA",
          boxShadow: "30px 23px 36px -43px rgba(0,0,0,0.81);",
          width: "100%",
          height: "100%",
        }}
      >
        <Typography
          variant="body1"
          gutterBottom
          sx={{
            fontWeight: "bolder",
            p: 2,
            color: data.isSpeacial ? "lightskyblue" : "black",
          }}
        >
          {data.content}
        </Typography>
      </Box>
    </Grid>
  );
};

export default ServiciesCard;
