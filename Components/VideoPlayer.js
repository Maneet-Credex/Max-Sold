import React from "react";
import YouTube from "react-youtube";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const VideoPlayer = () => {
  const theme = useTheme();
  const opts = {
    height: "100%",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
  const videoId = "dQw4w9WgXcQ";

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        [theme.breakpoints.up("sm")]: {
          height: "250px",
        },
        [theme.breakpoints.up("lg")]: {
          height: "250px",
        },
      }}
    >
      <YouTube videoId={videoId} opts={opts} />
    </Box>
  );
};

export default VideoPlayer;
