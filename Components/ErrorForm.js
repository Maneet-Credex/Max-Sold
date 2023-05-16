import React, { useEffect, useContext } from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import Map from "./Map";
import axios from "axios";
import AppContext from "./AppContext";

const ErrorForm = ({ state, showprogressbar, location, territories }) => {
  const ctx = useContext(AppContext);
  useEffect(() => {
    const registerSeller = async () => {
      try {
        const response = await axios.post(
          "https://seller-dev.api.maxsold.com/registration",
          ctx.data,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    registerSeller();
  }, []);

  async function handleNotify() {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const requestbody = {
      email: ctx.data.email,
    };
    await axios
      .put("https://seller-dev.api.maxsold.com/notify", requestbody, config)
      .then((res) => {
        console.log(res);
      });
  }

  showprogressbar(false);
  return (
    <Container maxWidth={"xl"}>
      <Typography variant="h5" gutterBottom sx={{ fontWeight: "bolder" }}>
        {location.territoryName} is out of our service area
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        We are expanding our service areas and would be happy to email you when
        our services are available in your region.
      </Typography>
      <Container maxWidth={"xs"}>
        <Map territories={territories} location={location} />
      </Container>
      <Typography variant="subtitle2" gutterBottom>
        MaxSold has Local Expert Help team members in{" "}
        {territories.map((state) =>
          state.countryId === location.countryId && state.isServing
            ? state.territoryName + " "
            : null
        )}
      </Typography>
      <Button
        onClick={handleNotify}
        variant="contained"
        sx={{
          width: "250px",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          marginTop: "40px",
        }}
      >
        Notify me when available
      </Button>
    </Container>
  );
};

export default ErrorForm;
