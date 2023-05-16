import React from "react";
import AddReactionIcon from "@mui/icons-material/AddReaction";
import AddHomeOutlinedIcon from "@mui/icons-material/AddHomeOutlined";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import { Box } from "@mui/material";

const FacilityCard = ({ data }) => {
  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          flex: 1,
        }}
      >
        <Avatar sx={{ bgcolor: "#F2F9FB", width: 50, height: 50 }}>
          <AddHomeOutlinedIcon sx={{ fontSize: 40, color: "#0085AC" }} />
        </Avatar>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          flex: 3,
        }}
      >
        <Typography
          variant="h6"
          gutterBottom
          sx={{
            fontWeight: "bold",
          }}
        >
          {data.heading}
        </Typography>
        <Typography
          gutterBottom
          variant="subtitle1"
          sx={{
            fontWeight: "lighter",
          }}
        >
          {data.subHeading}
        </Typography>
      </Box>
    </Box>
  );
};

export default FacilityCard;
